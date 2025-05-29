import { usePathname } from "next/navigation";

export const useActivePath = (): ((path: string) => boolean) => {
  const pathname = usePathname();
  return (path: string): boolean => {
    if (path === "/" && pathname !== path) return false;
    return pathname.startsWith(path);
  };
};
