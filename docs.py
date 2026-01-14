import os
from pathlib import Path
from datetime import datetime

# ============================================================
# CONFIGURATION - Modify these paths as needed
# ============================================================

PROJECT_ROOT = r"D:\Nexus Nao\PROJECTS\EZORDER\PROJECT\frontend"
OUTPUT_FILE = r"D:\Nexus Nao\PROJECTS\EZORDER\PROJECT\frontend\CODEBASE_DOCUMENTATION.md"

# ============================================================
# FILE EXTENSIONS TO INCLUDE
# ============================================================

INCLUDE_EXTENSIONS = {
    '.tsx',
    '.ts',
    '.css',
    '.json',
    '.html',
    '.js',
}

# ============================================================
# ROOT-LEVEL CONFIG FILES TO INCLUDE
# ============================================================

INCLUDE_ROOT_FILES = {
    'package.json',
    'vite.config.ts',
    'tailwind.config.ts',
    'tsconfig.json',
    'tsconfig.app.json',
    'tsconfig.node.json',
    'vercel.json',
    'components.json',
    'index.html',
    'postcss.config.js',
}

# ============================================================
# FOLDERS TO SKIP ENTIRELY
# ============================================================

SKIP_FOLDERS = {
    'node_modules',
    'dist',
    'build',
    '.git',
    'public',
    'assets',
    '.vscode',
    '.idea',
    '__pycache__',
    'coverage',
}

# ============================================================
# SPECIFIC FILES TO SKIP
# ============================================================

SKIP_FILES = {
    '.env',
    '.env.local',
    '.env.development',
    '.env.production',
    '.gitignore',
    '.eslintignore',
    '.prettierignore',
    'bun.lockb',
    'package-lock.json',
    'yarn.lock',
    'pnpm-lock.yaml',
    'vite-env.d.ts',
    'eslint.config.js',
    '.eslintrc.js',
    '.eslintrc.json',
    'README.md',
    'CHANGELOG.md',
    'LICENSE',
    'LICENSE.md',
}

# ============================================================
# PATTERNS TO SKIP (files containing these strings)
# ============================================================

SKIP_PATTERNS = {
    'build_log',
    '.lock',
    '.log',
    '.map',
    '.min.',
    '.d.ts',
    'test-',
}

# ============================================================
# HELPER FUNCTIONS
# ============================================================

def get_language(file_path: str) -> str:
    """Return the language identifier for markdown code blocks."""
    ext_map = {
        '.tsx': 'tsx',
        '.ts': 'typescript',
        '.js': 'javascript',
        '.jsx': 'jsx',
        '.css': 'css',
        '.scss': 'scss',
        '.sass': 'sass',
        '.less': 'less',
        '.json': 'json',
        '.html': 'html',
        '.md': 'markdown',
        '.yaml': 'yaml',
        '.yml': 'yaml',
    }
    ext = Path(file_path).suffix.lower()
    return ext_map.get(ext, 'plaintext')


def should_skip_file(file_name: str) -> bool:
    """Check if file should be skipped based on name or patterns."""
    # Check exact file names
    if file_name in SKIP_FILES:
        return True
    
    # Check patterns
    file_name_lower = file_name.lower()
    for pattern in SKIP_PATTERNS:
        if pattern in file_name_lower:
            return True
    
    return False


def should_include_file(file_path: Path, relative_path: str, root_path: str) -> bool:
    """Determine if a file should be included in documentation."""
    file_name = file_path.name
    
    # Skip specified files
    if should_skip_file(file_name):
        return False
    
    # Check file extension
    if file_path.suffix not in INCLUDE_EXTENSIONS:
        return False
    
    # Check if it's a root-level file
    if file_path.parent == Path(root_path):
        return file_name in INCLUDE_ROOT_FILES
    
    # For src folder, include files with valid extensions
    if 'src' in relative_path:
        return True
    
    return False


def collect_files(root_path: str) -> list:
    """Collect all files to be documented."""
    files_to_document = []
    root = Path(root_path)
    
    for item in root.rglob('*'):
        if item.is_file():
            # Get relative path
            relative_path = str(item.relative_to(root))
            parts = Path(relative_path).parts
            
            # Check if any parent folder should be skipped
            if any(folder in SKIP_FOLDERS for folder in parts):
                continue
            
            # Check if file should be included
            if should_include_file(item, relative_path, root_path):
                files_to_document.append((relative_path, item))
    
    # Sort files: root files first, then by path
    def sort_key(item):
        rel_path, _ = item
        depth = len(Path(rel_path).parts)
        return (depth, rel_path.lower())
    
    return sorted(files_to_document, key=sort_key)


def get_folder_structure(files: list) -> dict:
    """Organize files by folder for better navigation."""
    structure = {}
    for relative_path, file_path in files:
        folder = str(Path(relative_path).parent)
        if folder == '.':
            folder = 'Root'
        if folder not in structure:
            structure[folder] = []
        structure[folder].append((relative_path, file_path))
    return structure


def generate_toc(files: list) -> str:
    """Generate table of contents organized by folder."""
    toc_lines = ["## 📑 Table of Contents\n"]
    
    structure = get_folder_structure(files)
    
    for folder, folder_files in structure.items():
        folder_display = folder.replace('\\', ' / ').replace('/', ' / ')
        toc_lines.append(f"\n### 📂 {folder_display}\n")
        
        for relative_path, _ in folder_files:
            file_name = Path(relative_path).name
            # Create anchor link
            anchor = relative_path.replace('\\', '-').replace('/', '-').replace('.', '-').lower()
            toc_lines.append(f"- [{file_name}](#{anchor})")
    
    return '\n'.join(toc_lines)


def get_file_stats(files: list) -> dict:
    """Calculate statistics about the files."""
    stats = {
        'total_files': len(files),
        'total_lines': 0,
        'by_extension': {},
        'by_folder': {},
    }
    
    for relative_path, file_path in files:
        ext = file_path.suffix
        folder = str(Path(relative_path).parent)
        
        # Count by extension
        stats['by_extension'][ext] = stats['by_extension'].get(ext, 0) + 1
        
        # Count by folder
        stats['by_folder'][folder] = stats['by_folder'].get(folder, 0) + 1
        
        # Count lines
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                stats['total_lines'] += len(f.readlines())
        except:
            pass
    
    return stats


def format_stats(stats: dict) -> str:
    """Format statistics as markdown."""
    lines = ["## 📊 Codebase Statistics\n"]
    
    lines.append(f"- **Total Files:** {stats['total_files']}")
    lines.append(f"- **Total Lines:** {stats['total_lines']:,}")
    
    lines.append("\n### Files by Extension\n")
    lines.append("| Extension | Count |")
    lines.append("|-----------|-------|")
    for ext, count in sorted(stats['by_extension'].items()):
        lines.append(f"| `{ext}` | {count} |")
    
    lines.append("\n### Files by Folder\n")
    lines.append("| Folder | Count |")
    lines.append("|--------|-------|")
    for folder, count in sorted(stats['by_folder'].items()):
        folder_display = folder if folder != '.' else 'Root'
        lines.append(f"| `{folder_display}` | {count} |")
    
    return '\n'.join(lines)


# ============================================================
# MAIN COMPILATION FUNCTION
# ============================================================

def compile_documentation(root_path: str, output_path: str):
    """Main function to compile all code into a single markdown file."""
    
    print("🔍 Scanning project files...")
    files = collect_files(root_path)
    
    if not files:
        print("❌ No files found to document!")
        return
    
    print(f"📝 Found {len(files)} files to document")
    print("📄 Generating documentation...")
    
    # Calculate stats
    stats = get_file_stats(files)
    
    with open(output_path, 'w', encoding='utf-8') as md_file:
        # ==================== HEADER ====================
        md_file.write("# 📁 EZORDER Frontend Codebase Documentation\n\n")
        md_file.write(f"> **Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n>\n")
        md_file.write(f"> **Project Path:** `{root_path}`\n>\n")
        md_file.write(f"> **Total Files:** {len(files)} | **Total Lines:** {stats['total_lines']:,}\n\n")
        md_file.write("---\n\n")
        
        # ==================== STATISTICS ====================
        md_file.write(format_stats(stats))
        md_file.write("\n\n---\n\n")
        
        # ==================== TABLE OF CONTENTS ====================
        md_file.write(generate_toc(files))
        md_file.write("\n\n---\n\n")
        
        # ==================== SOURCE CODE ====================
        md_file.write("## 📄 Source Code Files\n\n")
        
        current_folder = None
        structure = get_folder_structure(files)
        
        for folder, folder_files in structure.items():
            # Folder header
            folder_display = folder.replace('\\', ' / ').replace('/', ' / ')
            md_file.write(f"---\n\n### 📂 {folder_display}\n\n")
            
            for relative_path, file_path in folder_files:
                file_name = Path(relative_path).name
                anchor = relative_path.replace('\\', '-').replace('/', '-').replace('.', '-').lower()
                
                # File header with path
                md_file.write(f"#### 📄 `{relative_path}`\n\n")
                
                # Read file content
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    # Get line count for this file
                    line_count = len(content.splitlines())
                    md_file.write(f"*Lines: {line_count}*\n\n")
                    
                    # Write code block
                    language = get_language(str(file_path))
                    md_file.write(f"```{language}\n")
                    md_file.write(content)
                    if not content.endswith('\n'):
                        md_file.write('\n')
                    md_file.write("```\n\n")
                    
                    print(f"  ✓ {relative_path}")
                    
                except UnicodeDecodeError:
                    md_file.write("*⚠️ Unable to read file (binary or encoding issue)*\n\n")
                    print(f"  ⚠ {relative_path} (encoding error)")
                except Exception as e:
                    md_file.write(f"*⚠️ Error reading file: {str(e)}*\n\n")
                    print(f"  ⚠ {relative_path} ({str(e)})")
        
        # ==================== FOOTER ====================
        md_file.write("---\n\n")
        md_file.write("## 📝 Notes\n\n")
        md_file.write("- This documentation was auto-generated\n")
        md_file.write("- Binary files and assets were excluded\n")
        md_file.write("- Environment files (.env) were excluded for security\n")
        md_file.write("- Lock files and build artifacts were excluded\n\n")
        md_file.write("---\n\n")
        md_file.write(f"*End of Documentation - Generated by compile_docs.py*\n")
    
    print("\n" + "=" * 50)
    print("✅ Documentation generated successfully!")
    print(f"📄 Output file: {output_path}")
    print(f"📊 Total files: {len(files)}")
    print(f"📏 Total lines: {stats['total_lines']:,}")
    print("=" * 50)


# ============================================================
# ENTRY POINT
# ============================================================

if __name__ == "__main__":
    # Verify project path exists
    if not os.path.exists(PROJECT_ROOT):
        print(f"❌ Error: Project path does not exist!")
        print(f"   Path: {PROJECT_ROOT}")
        print("\n💡 Please update PROJECT_ROOT in the script.")
        exit(1)
    
    # Create output directory if needed
    output_dir = os.path.dirname(OUTPUT_FILE)
    if output_dir and not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    # Run compilation
    compile_documentation(PROJECT_ROOT, OUTPUT_FILE)
