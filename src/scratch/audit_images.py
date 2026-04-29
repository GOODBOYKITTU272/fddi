import os
import re

def analyze_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the Design Aptitude part
    design_aptitude_match = re.search(r'// PART II — DESIGN APTITUDE(.*?)$', content, re.DOTALL)
    if not design_aptitude_match:
        design_content = content
    else:
        design_content = design_aptitude_match.group(1)

    # Regex to find q(...) calls
    q_pattern = re.compile(r"q\(\s*'([^']+)',\s*'([^']+)',\s*'(.*?)',\s*(\[.*?\]),\s*(\d+),\s*'(.*?)',\s*(\{.*?\})\s*\)", re.DOTALL)
    
    questions = []
    for match in q_pattern.finditer(design_content):
        q_id, section, text, options, answer, explanation, extra = match.groups()
        
        has_image = 'image:' in extra
        
        # Keywords that suggest an image is needed
        image_needed_keywords = [
            'shown in figure', 'identify the figure', 'pattern shown', 'following figure',
            'which figure', 'embedded figure', 'figure above', 'figure below',
            'texture 2', 'texture 4', 'texture 5', 'texture 7', 'dotted outline',
            'following logo', 'identify the logo', 'unfolded pattern', 'cross-section',
            'which simple figure', 'which component', 'identify the embedded'
        ]
        
        needs_image = any(kw in text.lower() for kw in image_needed_keywords) or \
                      any(kw in explanation.lower() for kw in image_needed_keywords)
        
        if not needs_image:
            if re.search(r'\b(figure|image|logo|texture|pattern|outline)\b', text.lower()):
                needs_image = True
            elif "cross-section" in text.lower():
                 needs_image = True

        questions.append({
            'id': q_id,
            'text': text[:100],
            'has_image': has_image,
            'needs_image': needs_image,
            'extra': extra
        })
    
    return questions

papers = ['paper1', 'paper2', 'paper3', 'paper4', 'paper5', 'paper6']
base_path = r'C:\Users\DELL\Desktop\fddi\src\data'

results = {}

for paper in papers:
    file_path = os.path.join(base_path, paper, 'sectionD.js')
    if os.path.exists(file_path):
        results[paper] = analyze_file(file_path)

# Write results to file
output_path = os.path.join(base_path, '..', 'scratch', 'audit_results.md')
with open(output_path, 'w', encoding='utf-8') as out:
    out.write("# Design Aptitude Questions Missing Figures\n\n")
    out.write("This report lists Design Aptitude questions that refer to figures, patterns, or logos but do not have an `image` property assigned.\n\n")
    out.write("| Paper | ID | Question Text | Status |\n")
    out.write("|-------|----|---------------|--------|\n")

    for paper, qs in results.items():
        for q in qs:
            if not q['has_image'] and q['needs_image']:
                 out.write(f"| {paper} | {q['id']} | {q['text']} | **MISSING IMAGE** |\n")

print(f"Audit complete. Results saved to {output_path}")
