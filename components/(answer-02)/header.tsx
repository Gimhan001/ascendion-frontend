"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { Input } from "@/components/input";
import { MobileHeader } from "./mobile-header";
import type { NavbarProps } from "@/lib/types";
import { useActivePath } from "@/hooks/useActivePath";

const Header: React.FC<NavbarProps> = ({ title, links }) => {
  const isActive = useActivePath();
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="">
      <div className="border-b">
        <div className=" mx-auto flex h-16 md:h-18 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-16">
            <Link href="/" className="text-xl font-bold" passHref>
              {title}
            </Link>

            <div className="hidden md:flex md:space-x-8">
              {links.map(({ name, href }) => (
                <a
                  key={href}
                  href={href}
                  className={`text-base font-medium hover:text-amber-500 ${
                    isActive(href) ? "text-amber-500" : ""
                  }`}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex" data-testid="desktop-search">
            <Input />
          </div>

          <div className="flex items-center md:hidden space-x-2">
            {showSearch ? (
              <div className="flex items-center space-x-1" data-testid="mobile-search">
                <Input />
                <button
                  type="button"
                  aria-label="Close search"
                  onClick={() => setShowSearch(false)}
                >
                  <X size={20} />
                </button>
              </div>
            ) : (
              <button
                type="button"
                aria-label="Open search"
                onClick={() => setShowSearch(true)}
              >
                <Search />
              </button>
            )}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden" >
          <MobileHeader links={links} data-testid="mobile-menu" />
        </div>
      )}
    </nav>
  );
};

export default Header;
