import os
from pathlib import Path
from datetime import datetime

def generate_frontend_documentation(base_path='.', output_file='frontend_documentation.md'):
    """Generate documentation for React frontend project."""
    
    # Essential directories and files to include
    essential_paths = [
        'src/App.js',
        'src/index.js',
        'src/components/',
        'src/contexts/',
        'src/pages/',
        'src/services/',
        'src/utils/',
        'public/index.html',
        'public/manifest.json',
        'package.json',
    ]
    
    # File extensions to include
    include_extensions = {'.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.json', '.html'}
    
    # Files to exclude
    exclude_files = {
        'setupTests.js',
        'reportWebVitals.js',
        'App.test.js',
        'logo.svg',
        'package-lock.json',
        'robots.txt',
        '.env',
        '.env.example',
        'documentation.py'
    }
    
    # Directories to exclude
    exclude_dirs = {'node_modules', '.git', 'build', 'dist', 'coverage', '__pycache__'}
    
    # Maximum lines per file
    MAX_LINES_PER_FILE = 300
    
    selected_files = []
    
    # Collect files based on essential paths
    for path in essential_paths:
        full_path = os.path.join(base_path, path)
        
        if os.path.isfile(full_path):
            ext = os.path.splitext(full_path)[1]
            if ext in include_extensions and os.path.basename(full_path) not in exclude_files:
                selected_files.append(full_path)
        elif os.path.isdir(full_path):
            for root, dirs, files in os.walk(full_path):
                # Remove excluded directories
                dirs[:] = [d for d in dirs if d not in exclude_dirs]
                
                for file in files:
                    ext = os.path.splitext(file)[1]
                    if ext in include_extensions and file not in exclude_files:
                        file_path = os.path.join(root, file)
                        selected_files.append(file_path)
    
    # Sort files by category
    def categorize_file(file_path):
        if 'components/auth' in file_path: return 0
        elif 'components/layout' in file_path: return 1
        elif 'components/menu' in file_path: return 2
        elif 'components/orders' in file_path: return 3
        elif 'components/notifications' in file_path: return 4
        elif 'components' in file_path: return 5
        elif 'contexts' in file_path: return 6
        elif 'pages/public' in file_path: return 7
        elif 'pages' in file_path: return 8
        elif 'services' in file_path: return 9
        elif 'utils' in file_path: return 10
        elif 'src/App' in file_path: return -1
        elif 'src/index' in file_path: return -2
        elif 'public' in file_path: return 11
        else: return 12
    
    selected_files.sort(key=lambda x: (categorize_file(x), x))
    
    # Generate documentation
    with open(output_file, 'w', encoding='utf-8') as doc:
        doc.write("# Frontend Documentation\n\n")
        doc.write(f"Generated on: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
        doc.write(f"Total files documented: {len(selected_files)}\n\n")
        
        # Table of Contents
        doc.write("## Table of Contents\n\n")
        
        current_category = None
        for file_path in selected_files:
            relative_path = os.path.relpath(file_path, base_path)
            
            # Determine category
            if 'src/App' in relative_path or 'src/index' in relative_path:
                category = "Main Application Files"
            elif 'components/auth' in relative_path:
                category = "Authentication Components"
            elif 'components/layout' in relative_path:
                category = "Layout Components"
            elif 'components/menu' in relative_path:
                category = "Menu Components"
            elif 'components/orders' in relative_path:
                category = "Order Components"
            elif 'components/notifications' in relative_path:
                category = "Notification Components"
            elif 'components' in relative_path:
                category = "Other Components"
            elif 'contexts' in relative_path:
                category = "Context Providers"
            elif 'pages/public' in relative_path:
                category = "Public Pages"
            elif 'pages' in relative_path:
                category = "Pages"
            elif 'services' in relative_path:
                category = "Services"
            elif 'utils' in relative_path:
                category = "Utilities"
            elif 'public' in relative_path:
                category = "Public Files"
            elif 'package.json' in relative_path:
                category = "Configuration"
            else:
                category = "Other Files"
            
            if category != current_category:
                doc.write(f"\n### {category}\n")
                current_category = category
            
            anchor = relative_path.replace('/', '-').replace('\\', '-').replace('.', '-')
            doc.write(f"- [{relative_path}](#{anchor})\n")
        
        doc.write("\n---\n\n")
        doc.write("# Code Files\n\n")
        
        # Write file contents
        total_lines = 0
        current_category = None
        
        for file_path in selected_files:
            relative_path = os.path.relpath(file_path, base_path)
            
            # Determine category (same logic as above)
            if 'src/App' in relative_path or 'src/index' in relative_path:
                category = "Main Application Files"
            elif 'components/auth' in relative_path:
                category = "Authentication Components"
            elif 'components/layout' in relative_path:
                category = "Layout Components"
            elif 'components/menu' in relative_path:
                category = "Menu Components"
            elif 'components/orders' in relative_path:
                category = "Order Components"
            elif 'components/notifications' in relative_path:
                category = "Notification Components"
            elif 'components' in relative_path:
                category = "Other Components"
            elif 'contexts' in relative_path:
                category = "Context Providers"
            elif 'pages/public' in relative_path:
                category = "Public Pages"
            elif 'pages' in relative_path:
                category = "Pages"
            elif 'services' in relative_path:
                category = "Services"
            elif 'utils' in relative_path:
                category = "Utilities"
            elif 'public' in relative_path:
                category = "Public Files"
            elif 'package.json' in relative_path:
                category = "Configuration"
            else:
                category = "Other Files"
            
            if category != current_category:
                doc.write(f"\n## {category}\n\n")
                current_category = category
            
            anchor = relative_path.replace('/', '-').replace('\\', '-').replace('.', '-')
            doc.write(f"<a name=\"{anchor}\"></a>\n")
            doc.write(f"### {relative_path}\n\n")
            
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    lines = f.readlines()
                
                file_lines = len(lines)
                total_lines += file_lines
                
                # Determine language for syntax highlighting
                ext = os.path.splitext(file_path)[1]
                if ext in ['.js', '.jsx', '.ts', '.tsx']:
                    lang = 'javascript'
                elif ext == '.css':
                    lang = 'css'
                elif ext == '.scss':
                    lang = 'scss'
                elif ext == '.json':
                    lang = 'json'
                elif ext == '.html':
                    lang = 'html'
                else:
                    lang = ''
                
                # Check if file is too large
                if file_lines > MAX_LINES_PER_FILE:
                    doc.write(f"⚠️ **File has {file_lines} lines. Showing first {MAX_LINES_PER_FILE} lines.**\n\n")
                    lines = lines[:MAX_LINES_PER_FILE]
                else:
                    doc.write(f"*File contains {file_lines} lines*\n\n")
                
                doc.write(f"```{lang}\n")
                doc.write(''.join(lines))
                if file_lines > MAX_LINES_PER_FILE:
                    doc.write(f"\n... ({file_lines - MAX_LINES_PER_FILE} more lines)\n")
                doc.write("\n```\n\n")
                
            except Exception as e:
                doc.write(f"❌ Error reading file: {str(e)}\n\n")
            
            doc.write("---\n\n")
        
        # Summary section
        doc.write("\n## Summary\n\n")
        doc.write(f"- **Total files documented**: {len(selected_files)}\n")
        doc.write(f"- **Total lines of code**: {total_lines:,}\n")
        
        # Count by file type
        file_types = {}
        for file_path in selected_files:
            ext = os.path.splitext(file_path)[1]
            file_types[ext] = file_types.get(ext, 0) + 1
        
        doc.write("\n### Files by type:\n")
        for ext, count in sorted(file_types.items()):
            doc.write(f"- `{ext}`: {count} files\n")
    
    print(f"✅ Frontend documentation generated: {output_file}")
    print(f"📊 Files included: {len(selected_files)}")
    print(f"📏 Total lines: {total_lines:,}")
    
    # Check file size
    file_size = os.path.getsize(output_file) / (1024 * 1024)  # Size in MB
    print(f"📁 Documentation size: {file_size:.2f} MB")
    
    if file_size > 5:
        print(f"⚠️ Warning: Documentation file is large. Consider increasing MAX_LINES_PER_FILE limit.")

def generate_component_structure(base_path='.', output_file='frontend_structure.md'):
    """Generate a concise component structure overview."""
    
    with open(output_file, 'w', encoding='utf-8') as doc:
        doc.write("# Frontend Project Structure\n\n")
        doc.write(f"Generated on: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
        
        # Component tree structure
        doc.write("## Component Hierarchy\n\n")
        doc.write("```\n")
        doc.write("App.js\n")
        doc.write("├── Layout\n")
        doc.write("│   ├── Header\n")
        doc.write("│   └── Footer\n")
        doc.write("├── Routes\n")
        doc.write("│   ├── Public Routes\n")
        doc.write("│   │   ├── HomePage\n")
        doc.write("│   │   ├── AboutPage\n")
        doc.write("│   │   ├── ContactPage\n")
        doc.write("│   │   ├── PartnersPage\n")
        doc.write("│   │   └── PrivacyPage\n")
        doc.write("│   └── Protected Routes\n")
        doc.write("│       ├── Login\n")
        doc.write("│       ├── Register\n")
        doc.write("│       └── MenuManagement\n")
        doc.write("│           ├── MenuList\n")
        doc.write("│           ├── MenuItem\n")
        doc.write("│           └── MenuForm\n")
        doc.write("└── Components\n")
        doc.write("    ├── OrderList\n")
        doc.write("    ├── OrderDetails\n")
        doc.write("    ├── OrderStatusUpdate\n")
        doc.write("    └── NotificationManager\n")
        doc.write("```\n\n")
        
        # Service architecture
        doc.write("## Service Layer\n\n")
        doc.write("- **api.js** - Base API configuration and interceptors\n")
        doc.write("- **authService.js** - Authentication related API calls\n")
        doc.write("- **menuService.js** - Menu CRUD operations\n")
        doc.write("- **orderService.js** - Order management\n")
        doc.write("- **notificationService.js** - Real-time notifications\n")
        doc.write("- **webhookService.js** - Webhook handling\n\n")
        
        # Key features
        doc.write("## Key Features\n\n")
        doc.write("- 🔐 **Authentication** - Login/Register with protected routes\n")
        doc.write("- 📱 **Responsive Design** - Mobile-first approach\n")
        doc.write("- 🔔 **Real-time Notifications** - WebSocket integration\n")
        doc.write("- 🍕 **Menu Management** - CRUD operations for restaurant items\n")
        doc.write("- 📦 **Order Tracking** - Real-time order status updates\n")
        doc.write("- 🎨 **Modern UI** - Clean and intuitive interface\n")
    
    print(f"📋 Structure overview generated: {output_file}")

if __name__ == "__main__":
    # Generate main documentation
    generate_frontend_documentation()
    
    # Generate structure overview
    generate_component_structure()
    
    print("\n✅ Frontend documentation complete!")
    print("📄 Files generated:")
    print("   - frontend_documentation.md (full code documentation)")
    print("   - frontend_structure.md (component structure overview)")
