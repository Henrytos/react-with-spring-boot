import { Outlet } from "react-router-dom";

export function MainSectionTemplate() {
  return (
    <main className="h-screen w-full p-4 bg-[#0E1116] grid grid-cols-12 gap-4 text-white">
      <Outlet />
    </main>
  );
}
