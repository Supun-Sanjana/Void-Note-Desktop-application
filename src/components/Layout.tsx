import { NavLink, Outlet } from "react-router-dom";

const navigationItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Tasks", path: "/tasks" },
  { name: "Notes", path: "/notes" },
];

export default function Layout() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <header className="bg-black border-b border-gray-800">
        <div className="px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-bold">Void Note</h1>
          <nav className="flex items-center gap-2">
            {navigationItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-1 rounded-md text-sm transition ${
                    isActive ? "bg-gray-700" : "hover:bg-gray-800"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}
