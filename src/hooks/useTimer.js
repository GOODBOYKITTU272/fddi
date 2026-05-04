import { useEffect, useRef, useState } from 'react';

export function useTimer(durationSec, { onExpire, storageKey } = {}) {
  const [remaining, setRemaining] = useState(durationSec);
  const endTimeRef = useRef(null);
  const expiredRef = useRef(false);

  useEffect(() => {
    let savedEnd = null;
    if (storageKey) {
      savedEnd = sessionStorage.getItem(`timer_end_${storageKey}`);
    }
    
    if (savedEnd) {
      endTimeRef.current = parseInt(savedEnd, 10);
    } else {
      endTimeRef.current = Date.now() + durationSec * 1000;
      if (storageKey) sessionStorage.setItem(`timer_end_${storageKey}`, endTimeRef.current.toString());
    }
    
    expiredRef.current = false;
  }, [durationSec, storageKey]);

  useEffect(() => {
    const id = setInterval(() => {
      if (!endTimeRef.current) return;
      const now = Date.now();
      const left = Math.max(0, Math.floor((endTimeRef.current - now) / 1000));
      
      setRemaining(left);
      
      if (left <= 0) {
        clearInterval(id);
        if (!expiredRef.current) {
          expiredRef.current = true;
          if (storageKey) sessionStorage.removeItem(`timer_end_${storageKey}`);
          onExpire?.();
        }
      }
    }, 1000);

    return () => clearInterval(id);
  }, [onExpire, storageKey]);

  return remaining;
}

export function fmtTime(sec) {
  const h = Math.floor(sec / 3600).toString().padStart(2, '0');
  const m = Math.floor((sec % 3600) / 60).toString().padStart(2, '0');
  const s = (sec % 60).toString().padStart(2, '0');
  return `${h}:${m}:${s}`;
}
