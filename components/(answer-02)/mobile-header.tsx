"use client";

import { useActivePath } from "@/hooks/useActivePath";
import { MobileHeaderProps } from "@/lib/types";

export const MobileHeader: React.FC<MobileHeaderProps> = ({ links }) => {
  const isActive = useActivePath();
  return (
    <div className="px-2 pt-2 pb-3 space-y-1" data-testid= "mobile-header-list">
      {links.map(({ name, href }) => (
        <a
          key={href}
          href={href}
          className={`block px-3 py-2 rounded-md font-medium hover:text-amber-500 ${
            isActive(href) ? "text-amber-500" : ""
          }`}
        >
          {name}
        </a>
      ))}
    </div>
  );
};
