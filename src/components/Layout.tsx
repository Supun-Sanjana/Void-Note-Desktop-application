import React, { useState } from "react";
import { Settings2, CircleHelp, Bell, User, Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ For routing in Electron (React Router)

// Example button component
const ButtonComp = ({ name }: { name: string }) => (
  <button className="px-4 py-1 rounded-md text-sm hover:bg-gray-700 transition">
    {name}
  </button>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Tasks", path: "/tasks" },
    { name: "Notes", path: "/notes" },
  ];

  const userMenuItems = [
    { icon: Settings2, label: "Settings" },
    { icon: CircleHelp, label: "Help" },
    { icon: Bell, label: "Notifications" },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <header className="bg-black border-b border-gray-800">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left Section: Logo + Navigation */}
            <div className="flex items-center gap-8">
              <h1 className="text-lg font-bold">Void Note</h1>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1">
                {navigationItems.map((item) => (
                  <Link key={item.name} to={item.path}>
                    <ButtonComp name={item.name} />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Center Section: Search Bar */}
            <div className="hidden md:flex flex-1 justify-center max-w-md mx-8">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-4 h-4 text-gray-500" />
                </div>
                <input
                  type="text"
                  className="w-full h-8 pl-10 pr-4 text-sm border border-gray-700 rounded-md focus:ring-1 focus:ring-blue-500 bg-black text-white placeholder-gray-500"
                  placeholder="Search notes, tasks and more..."
                />
              </div>
            </div>

            {/* Right Section: User Menu */}
            <div className="hidden md:flex items-center gap-6">
              {userMenuItems.map((item) => (
                <button
                  key={item.label}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                  title={item.label}
                >
                  <item.icon size={16} />
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
              <button className="w-8 h-8 bg-[#3A3D47] rounded-full flex items-center justify-center hover:bg-gray-500">
                <User size={18} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-gray-800"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              {/* Mobile Search */}
              <div className="mt-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="w-4 h-4 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    className="w-full h-10 pl-10 pr-4 border border-gray-700 rounded-md focus:ring-1 focus:ring-blue-500 bg-black text-white placeholder-gray-500"
                    placeholder="Search notes, tasks and more..."
                  />
                </div>
              </div>

              {/* Mobile Navigation */}
              <div className="space-y-4 mb-6">
                {navigationItems.map((item) => (
                  <Link key={item.name} to={item.path}>
                    <button className="block w-full text-left py-2 text-base text-gray-400 hover:text-white">
                      {item.name}
                    </button>
                  </Link>
                ))}
              </div>

              {/* Mobile User Menu */}
              <div className="space-y-4 border-t border-gray-800 pt-4">
                {userMenuItems.map((item) => (
                  <button
                    key={item.label}
                    className="flex items-center gap-3 text-gray-400 hover:text-white"
                  >
                    <item.icon size={18} />
                    <span>{item.label}</span>
                  </button>
                ))}
                <button className="flex items-center gap-3 text-gray-400 hover:text-white">
                  <div className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center">
                    <User size={12} />
                  </div>
                  <span>Profile</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
