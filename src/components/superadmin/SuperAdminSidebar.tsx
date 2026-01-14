import { Store } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

interface SuperAdminSidebarProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

const menuItems = [
    {
        category: "Overview",
        items: [{ id: "restaurants", label: "Restaurants", icon: Store }],
    },
];

export function SuperAdminSidebar({ activeSection, setActiveSection }: SuperAdminSidebarProps) {
    return (
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-slate-800 bg-slate-900 text-slate-300 transition-transform shadow-xl">
            <div className="flex h-16 items-center border-b border-slate-800 px-6 backdrop-blur-sm bg-slate-900/50">
                <div className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="EzOrder logo"
                        className="h-9 w-auto object-contain"
                    />
                    <span className="text-sm font-semibold text-white/80">Super Admin</span>
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
