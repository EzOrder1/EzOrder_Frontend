import os
import sys

def should_skip_file(file_path):
    """
    Skip binary or unimportant files
    """
    skip_extensions = {
        '.png', '.jpg', '.jpeg', '.gif', '.ico', '.svg',
        '.mp4', '.mp3', '.zip', '.tar', '.gz'
    }
    skip_files = {
        'package-lock.json', '.DS_Store', 'Thumbs.db',
        'favicon.ico', 'robots.txt', 'logo.svg'
    }

    file_name = os.path.basename(file_path)
    file_ext = os.path.splitext(file_path)[1].lower()

    return file_ext in skip_extensions or file_name in skip_files


def should_skip_directory(dir_name):
    """
    Skip unnecessary directories
    """
    skip_dirs = {
        'node_modules', '.git', '__pycache__', '.pytest_cache',
        'dist', 'build', 'coverage', '.next',
        'images', 'icons', 'partners'  # static assets
    }
    return dir_name in skip_dirs


def get_file_extension(file_path):
    """
    Map file extension to Markdown code block language
    """
    ext_mapping = {
        '.js': 'javascript',
        '.jsx': 'javascript',
        '.ts': 'typescript',
        '.tsx': 'typescript',
        '.css': 'css',
        '.scss': 'scss',
        '.sass': 'sass',
        '.html': 'html',
        '.json': 'json',
        '.md': 'markdown',
        '.py': 'python',
        '.yml': 'yaml',
        '.yaml': 'yaml',
        '.env': 'bash',
        '.gitignore': 'bash',
        '.sh': 'bash'
    }
    ext = os.path.splitext(file_path)[1].lower()
    return ext_mapping.get(ext, '')


def read_file_content(file_path):
    """
    Read file content safely with fallback encodings
    """
    encodings = ['utf-8', 'utf-8-sig', 'latin-1', 'cp1252']
    for encoding in encodings:
        try:
            with open(file_path, 'r', encoding=encoding) as file:
                return file.read()
        except (UnicodeDecodeError, UnicodeError):
            continue
    return "⚠️ Error: Could not read file"


def generate_documentation(root_dir, output_file='frontend_documentation.md'):
    """
    Generate markdown documentation for project source files
    """
    root_dir = os.path.abspath(root_dir)
    output_path = os.path.join(os.path.dirname(root_dir), output_file)

    with open(output_path, 'w', encoding='utf-8') as doc_file:
        # Header
        doc_file.write("# 📄 Frontend Project Documentation\n\n")
        doc_file.write(f"Generated documentation for: `{os.path.basename(root_dir)}`\n\n")
        doc_file.write("## 📑 Table of Contents\n")

        # First pass: collect all files
        all_files = []
        for dirpath, dirnames, filenames in os.walk(root_dir):
            dirnames[:] = [d for d in dirnames if not should_skip_directory(d)]
            for filename in sorted(filenames):
                file_path = os.path.join(dirpath, filename)
                if not should_skip_file(file_path):
                    relative_path = os.path.relpath(file_path, root_dir)
                    all_files.append((file_path, relative_path))

        # Write TOC
        current_dir = ""
        for _, relative_path in all_files:
            dir_part = os.path.dirname(relative_path)
            if dir_part != current_dir:
                current_dir = dir_part
                if dir_part:
                    doc_file.write(f"\n### {dir_part.replace(os.sep, '/')}\n")
                else:
                    doc_file.write(f"\n### Root Directory\n")
            anchor = relative_path.replace(os.sep, '-').replace('.', '').lower()
            doc_file.write(f"- [{os.path.basename(relative_path)}](#{anchor})\n")

        doc_file.write("\n---\n\n## 📂 File Contents\n\n")

        # Second pass: write file content
        for file_path, relative_path in all_files:
            anchor = relative_path.replace(os.sep, '-').replace('.', '').lower()
            doc_file.write(f"<a name=\"{anchor}\"></a>\n")
            doc_file.write(f"### `{relative_path.replace(os.sep, '/')}`\n\n")
            content = read_file_content(file_path)
            language = get_file_extension(file_path)
            doc_file.write(f"```{language}\n{content}\n```\n\n---\n\n")

        # Footer
        doc_file.write("## ✅ Summary\n\n")
        doc_file.write(f"Total files documented: {len(all_files)}\n\n")

    print(f"✅ Documentation generated: {output_path}")
    print(f"📊 Total files documented: {len(all_files)}")


def main():
    if len(sys.argv) > 1:
        target_dir = sys.argv[1]
    else:
        target_dir = os.getcwd()

    if not os.path.isdir(target_dir):
        print(f"❌ Error: '{target_dir}' is not a directory!")
        sys.exit(1)

    print(f"📂 Generating documentation for: {target_dir}")
    generate_documentation(target_dir)


if __name__ == "__main__":
    main()
