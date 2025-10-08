import { createRootRoute, Outlet } from "@tanstack/react-router";
import Providers from "../components/Providers";

export const Route = createRootRoute({ component: RootLayout });

function RootLayout() {
  return (
    <div className="h-dvh w-dvw max-w-full px-4 md:px-8 font-inter text-sm">
      <Providers>
        <div className="max-w-[2000px] size-full mx-auto">
          <Outlet />
        </div>
      </Providers>
    </div>
  );
}
