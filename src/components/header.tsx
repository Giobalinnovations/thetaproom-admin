'use client';

import useScrollDirection from '@/hooks/useScrollDirection';
import Logo from './logo';
import MenuToggler from './menu-toggler';
import { NavigationMenu1 } from './navigation';
import ButtonAsLink from './ui/button-as-link';

export default function Header() {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`sticky transition-all duration-500 ${
        scrollDirection === 'down'
          ? '-top-28 md:-top-24'
          : 'top-0 shadow z-50 bg-white'
      }
      `}
    >
      <nav
        className="flex items-center justify-between py-4 px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden">
          <MenuToggler />
        </div>
        <nav className="hidden lg:flex lg:gap-x-16">
          <NavigationMenu1 />
        </nav>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
          <ButtonAsLink href="/contact-us" title="Contact" />
          <ButtonAsLink href="/auth/login" title="Admin" />
        </div>
      </nav>
    </header>
  );
}
