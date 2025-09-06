import os

# Only include core business logic files
INCLUDE_FILES = [
    # Core application files
    'src/App.js',
    'src/index.js',
    
    # Authentication
    'src/components/auth/Login.js',
    'src/components/auth/Register.js',
    'src/components/auth/ProtectedRoute.js',
    'src/contexts/AuthContext.js',
    
    # Dashboard components
    'src/components/dashboard/DashboardStats.js',
    'src/components/dashboard/LiveOrders.js',
    'src/components/dashboard/MenuSnapshot.js',
    'src/components/dashboard/SalesChart.js',
    
    # Layout components
    'src/components/layout/Header.js',
    'src/components/layout/Sidebar.js',
    'src/components/layout/Layout.js',
    
    # Menu components
    'src/components/menu/MenuForm.js',
    'src/components/menu/MenuItem.js',
    'src/components/menu/MenuList.js',
    
    # Order components
    'src/components/orders/OrderDetails.js',
    'src/components/orders/OrderList.js',
    'src/components/orders/OrderStatusUpdate.js',
    
    # Notification component
    'src/components/notifications/NotificationManager.js',
    
    # Pages
    'src/pages/Dashboard.js',
    'src/pages/MenuManagement.js',
    'src/pages/Analytics.js',
    'src/pages/Customers.js',
    
    # Services (API layer)
    'src/services/api.js',
    'src/services/authService.js',
    'src/services/menuService.js',
    'src/services/orderService.js',
    'src/services/notificationService.js',
    'src/services/webhookService.js',
    
    # Utils
    'src/utils/constants.js',
    
    # Config files (minimal)
    'package.json',
    '.env.example'
]

def create_focused_documentation(root_dir, output_file='frontend_core_documentation.md'):
    """
    Compile only essential frontend code into a single markdown file
    
    Args:
        root_dir: Root directory of the frontend project
        output_file: Output markdown file name
    """
    
    documentation = []
    documentation.append("# Frontend Core Documentation\n\n")
    documentation.append("This document contains the essential source code files from the frontend project.\n\n")
    documentation.append("## Table of Contents\n\n")
    
    # Group files by category
    categories = {
        'Configuration': ['package.json', '.env.example'],
        'Core Application': ['src/App.js', 'src/index.js'],
        'Authentication': [f for f in INCLUDE_FILES if 'auth' in f or 'AuthContext' in f],
        'Dashboard Components': [f for f in INCLUDE_FILES if 'dashboard' in f],
        'Layout Components': [f for f in INCLUDE_FILES if 'layout' in f],
        'Menu Management': [f for f in INCLUDE_FILES if 'menu' in f and 'MenuManagement' not in f],
        'Order Management': [f for f in INCLUDE_FILES if 'orders' in f],
        'Notifications': [f for f in INCLUDE_FILES if 'notifications' in f],
        'Pages': [f for f in INCLUDE_FILES if 'pages' in f],
        'Services': [f for f in INCLUDE_FILES if 'services' in f],
        'Utilities': [f for f in INCLUDE_FILES if 'utils' in f]
    }
    
    # Create table of contents
    for category, files in categories.items():
        if files:
            documentation.append(f"\n### {category}\n")
            for file_path in files:
                if file_path in INCLUDE_FILES:
                    anchor = file_path.replace('/', '-').replace('.', '-').lower()
                    documentation.append(f"- [{file_path}](#{anchor})\n")
    
    documentation.append("\n---\n\n## Source Code\n\n")
    
    # Process files
    processed_count = 0
    skipped_count = 0
    
    for file_rel_path in INCLUDE_FILES:
        file_path = os.path.join(root_dir, file_rel_path.replace('/', os.sep))
        
        if not os.path.exists(file_path):
            print(f"⚠ File not found: {file_rel_path}")
            skipped_count += 1
            continue
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Skip empty files
            if not content.strip():
                print(f"⚠ Empty file skipped: {file_rel_path}")
                skipped_count += 1
                continue
            
            # Create section header
            anchor = file_rel_path.replace('/', '-').replace('.', '-').lower()
            documentation.append(f"### {file_rel_path} {{#{anchor}}}\n\n")
            
            # Determine language for syntax highlighting
            if file_rel_path.endswith('.js'):
                language = 'javascript'
            elif file_rel_path.endswith('.json'):
                language = 'json'
            elif file_rel_path.endswith('.env.example'):
                language = 'bash'
            else:
                language = ''
            
            # Add code block
            documentation.append(f"```{language}\n")
            documentation.append(content)
            if not content.endswith('\n'):
                documentation.append('\n')
            documentation.append("```\n\n")
            documentation.append("---\n\n")
            
            processed_count += 1
            print(f"✓ Processed: {file_rel_path}")
            
        except Exception as e:
            print(f"✗ Error processing {file_rel_path}: {str(e)}")
            skipped_count += 1
    
    # Write to output file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(''.join(documentation))
    
    print(f"\n✓ Documentation compiled successfully!")
    print(f"✓ Output saved to: {output_file}")
    print(f"✓ Files processed: {processed_count}")
    print(f"✓ Files skipped: {skipped_count}")
    
    # Estimate line count
    total_lines = ''.join(documentation).count('\n')
    print(f"✓ Total lines in documentation: ~{total_lines}")

def main():
    """Main function to run the documentation compiler"""
    
    # Get the current directory
    root_dir = os.getcwd()
    
    # Output file name
    output_file = "frontend_core_documentation.md"
    
    print(f"Starting focused documentation compilation...")
    print(f"Root directory: {root_dir}")
    print(f"Output file: {output_file}")
    print(f"Total files to process: {len(INCLUDE_FILES)}\n")
    
    create_focused_documentation(root_dir, output_file)

if __name__ == "__main__":
    main()
