import {
    LayoutDashboard,
    List,
    Users,
    BarChart,
    Map,
    ShoppingBag,
} from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

interface AdminSidebarProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

const menuItems = [
    {
        category: "Main",
        items: [
            { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
        ],
    },
    {
        category: "Order Management",
        items: [
            { id: "bulk-update", label: "Orders", icon: ShoppingBag },
        ],
    },
    {
        category: "Menu Management",
        items: [
            { id: "menu-items", label: "Menu Items", icon: List },
            { id: "categories", label: "Categories", icon: List },
        ],
    },
    {
        category: "Operations",
        items: [
            { id: "riders", label: "Rider Management", icon: Users },
            { id: "delivery-zones", label: "Delivery Zones", icon: Map },
        ]
    },
    {
        category: "Analytics",
        items: [
            { id: "sales-report", label: "Sales Report", icon: BarChart },
            { id: "customers", label: "Customers", icon: Users },
        ],
    },
];

export function AdminSidebar({ activeSection, setActiveSection }: AdminSidebarProps) {
    return (
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-slate-800 bg-slate-900 text-slate-300 transition-transform shadow-xl">
            <div className="flex h-16 items-center border-b border-slate-800 px-6 backdrop-blur-sm bg-slate-900/50">
                <div className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="EzOrder logo"
                        className="h-9 w-auto object-contain"
                    />

                </div>
            </div>
            <div className="h-[calc(100vh-64px)] overflow-y-auto py-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <nav className="space-y-8 px-4">
                    {menuItems.map((group, index) => (
                        <div key={index}>
                            <h3 className="mb-3 px-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                                {group.category}
                            </h3>
                            <div className="space-y-1">
                                {group.items.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = activeSection === item.id;
                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => setActiveSection(item.id)}
                                            className={cn(
                                                "group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                                                isActive
                                                    ? "bg-secondary text-secondary-foreground shadow-md"
                                                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                                            )}
                                        >
                                            <Icon className={cn(
                                                "h-5 w-5 transition-colors",
                                                isActive ? "text-white" : "text-slate-500 group-hover:text-white"
                                            )} />
                                            {item.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </nav>
            </div>
        </aside>
    );
}
