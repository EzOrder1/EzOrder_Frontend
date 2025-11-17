import os
import json
from pathlib import Path
from datetime import datetime

class CodeDocumentationGenerator:
    def __init__(self, root_path):
        self.root_path = Path(root_path)
        self.output = []
        
        # Define files and folders to skip
        self.skip_folders = {
            'node_modules', '.git', 'images', 'sounds', 'pngs', 
            '__pycache__', '.vscode', '.idea', 'dist', 'build'
        }
        
        self.skip_files = {
            '.gitignore', 'package-lock.json', 'favicon.ico', 
            'manifest.json', 'robots.txt', 'logo.svg', 
            'reportWebVitals.js', 'setupTests.js', '.DS_Store',
            '*.png', '*.jpg', '*.jpeg', '*.gif', '*.ico', '*.mp3',
            '*.zip', '*.pdf', '*.doc', '*.docx'
        }
        
        self.skip_extensions = {'.png', '.jpg', '.jpeg', '.gif', '.ico', 
                               '.mp3', '.zip', '.pdf', '.doc', '.docx', '.svg'}
        
        # Define important file extensions to include
        self.include_extensions = {'.js', '.jsx', '.css', '.json', '.md', '.env', '.env.example'}
    
    def should_skip_file(self, file_path):
        """Check if a file should be skipped"""
        file_name = file_path.name
        
        # Skip test files
        if file_name.endswith('.test.js') or file_name.endswith('.spec.js'):
            return True
        
        # Skip files by extension
        if file_path.suffix in self.skip_extensions:
            return True
        
        # Skip specific files
        if file_name in self.skip_files:
            return True
        
        # Skip setupTests.js and reportWebVitals.js
        if file_name in ['setupTests.js', 'reportWebVitals.js', 'logo.svg']:
            return True
        
        return False
    
    def should_skip_folder(self, folder_name):
        """Check if a folder should be skipped"""
        return folder_name in self.skip_folders
    
    def get_language_from_extension(self, extension):
        """Get markdown language identifier from file extension"""
        language_map = {
            '.js': 'javascript',
            '.jsx': 'jsx',
            '.css': 'css',
            '.json': 'json',
            '.md': 'markdown',
            '.env': 'bash',
            '.env.example': 'bash',
            '.py': 'python'
        }
        return language_map.get(extension, 'text')
    
    def read_file_content(self, file_path):
        """Read file content with error handling"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                return f.read()
        except Exception as e:
            return f"// Error reading file: {str(e)}"
    
    def generate_toc(self, structure):
        """Generate table of contents"""
        toc = ["## 📑 Table of Contents\n"]
        toc.append("1. [Project Overview](#project-overview)")
        toc.append("2. [Project Structure](#project-structure)")
        toc.append("3. [Configuration Files](#configuration-files)")
        toc.append("4. [Source Code](#source-code)")
        toc.append("   - [Main Application Files](#main-application-files)")
        toc.append("   - [Components](#components)")
        toc.append("   - [Pages](#pages)")
        toc.append("   - [Services](#services)")
        toc.append("   - [Contexts](#contexts)")
        toc.append("   - [Utils](#utils)")
        toc.append("   - [Styles](#styles)")
        return "\n".join(toc)
    
    def process_directory(self, directory, level=0):
        """Recursively process directory and build documentation"""
        items = []
        
        try:
            for item in sorted(directory.iterdir()):
                if item.is_dir():
                    if not self.should_skip_folder(item.name):
                        items.append((item, 'dir'))
                elif item.is_file():
                    if not self.should_skip_file(item):
                        items.append((item, 'file'))
        except PermissionError:
            pass
        
        return items
    
    def generate_documentation(self):
        """Generate the complete documentation"""
        # Add header
        self.output.append("# 🍴 Food Delivery Platform - Frontend Documentation")
        self.output.append(f"\n*Generated on: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}*\n")
        self.output.append("---\n")
        
        # Add table of contents
        self.output.append(self.generate_toc(None))
        self.output.append("\n---\n")
        
        # Add project overview
        self.output.append("## 📋 Project Overview\n")
        self.output.append("This is a React-based food delivery platform frontend application with features including:")
        self.output.append("- User authentication and registration")
        self.output.append("- Restaurant partner management")
        self.output.append("- Menu management system")
        self.output.append("- Order tracking and management")
        self.output.append("- Real-time notifications")
        self.output.append("- Analytics dashboard\n")
        
        # Add project structure
        self.output.append("## 🗂️ Project Structure\n")
        self.output.append("```")
        self.output.append("food-delivery-frontend/")
        self.output.append("├── public/           # Static assets")
        self.output.append("├── src/")
        self.output.append("│   ├── components/   # Reusable React components")
        self.output.append("│   ├── contexts/     # React Context providers")
        self.output.append("│   ├── pages/        # Page components")
        self.output.append("│   ├── services/     # API and service layers")
        self.output.append("│   ├── styles/       # Global styles")
        self.output.append("│   └── utils/        # Utility functions")
        self.output.append("└── Configuration files")
        self.output.append("```\n")
        
        # Process configuration files
        self.output.append("## ⚙️ Configuration Files\n")
        self.process_config_files()
        
        # Process source code
        self.output.append("## 💻 Source Code\n")
        self.process_source_code()
        
        return "\n".join(self.output)
    
    def process_config_files(self):
        """Process configuration files in root directory"""
        config_files = ['package.json', '.env.example', 'README.md']
        
        for file_name in config_files:
            file_path = self.root_path / file_name
            if file_path.exists():
                self.output.append(f"### 📄 {file_name}\n")
                self.output.append(f"**Path:** `{file_name}`\n")
                
                content = self.read_file_content(file_path)
                language = self.get_language_from_extension(file_path.suffix if file_path.suffix else '.json')
                
                self.output.append(f"```{language}")
                self.output.append(content)
                self.output.append("```\n")
    
    def process_source_code(self):
        """Process all source code files"""
        src_path = self.root_path / 'src'
        
        if not src_path.exists():
            self.output.append("Source directory not found.\n")
            return
        
        # Process main application files
        self.output.append("### 🎯 Main Application Files\n")
        main_files = ['App.js', 'App.css', 'index.js', 'index.css']
        for file_name in main_files:
            file_path = src_path / file_name
            if file_path.exists() and not self.should_skip_file(file_path):
                self.add_file_to_output(file_path, src_path)
        
        # Process subdirectories
        subdirs = [
            ('components', '🧩 Components'),
            ('pages', '📄 Pages'),
            ('services', '🔧 Services'),
            ('contexts', '🔄 Contexts'),
            ('utils', '🛠️ Utils'),
            ('styles', '🎨 Styles')
        ]
        
        for subdir, title in subdirs:
            subdir_path = src_path / subdir
            if subdir_path.exists():
                self.output.append(f"### {title}\n")
                self.process_subdirectory(subdir_path, src_path)
    
    def process_subdirectory(self, directory, base_path):
        """Process all files in a subdirectory"""
        for item in sorted(directory.rglob('*')):
            if item.is_file() and not self.should_skip_file(item):
                # Skip if parent folder should be skipped
                skip = False
                for parent in item.parents:
                    if parent == directory:
                        break
                    if self.should_skip_folder(parent.name):
                        skip = True
                        break
                
                if not skip:
                    self.add_file_to_output(item, base_path)
    
    def add_file_to_output(self, file_path, base_path):
        """Add a single file to the output"""
        relative_path = file_path.relative_to(base_path.parent)
        
        self.output.append(f"#### 📄 {file_path.name}\n")
        self.output.append(f"**Path:** `{relative_path}`\n")
        
        content = self.read_file_content(file_path)
        language = self.get_language_from_extension(file_path.suffix)
        
        self.output.append(f"```{language}")
        self.output.append(content)
        self.output.append("```\n")
    
    def save_documentation(self, output_file="frontend_documentation.md"):
        """Save the documentation to a markdown file"""
        documentation = self.generate_documentation()
        
        output_path = Path(output_file)
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(documentation)
        
        print(f"✅ Documentation generated successfully!")
        print(f"📁 Output file: {output_path.absolute()}")
        print(f"📏 File size: {output_path.stat().st_size / 1024:.2f} KB")
        
        return output_path

# Main execution
if __name__ == "__main__":
    # Set your project root path here
    PROJECT_ROOT = r"D:\NexusNao\EzOrder_Frontend"
    
    # Create documentation generator
    generator = CodeDocumentationGenerator(PROJECT_ROOT)
    
    # Generate and save documentation
    output_file = generator.save_documentation("frontend_documentation.md")
    
    print("\n📊 Documentation Summary:")
    print("=" * 50)
    print(f"Project: Food Delivery Frontend")
    print(f"Root Path: {PROJECT_ROOT}")
    print(f"Documentation: {output_file}")
