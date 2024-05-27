import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
const category = [
  {
    title: 'Bedrooms',
    href: '/collections/bedrooms',
    description: '',
  },
  {
    title: 'Dining',
    href: '/collections/dining',
    description: '',
  },
  {
    title: 'Occassionals',
    href: '/collections/occassionals',
    description: '',
  },
  {
    title: 'Upholstery',
    href: '/collections/upholstery',
    description: '',
  },
  {
    title: 'Recliners',
    href: '/collections/recliners',
    description: '',
  },
];
export default function SideNav() {
  return (
    <Sidebar className="!min-w-full sm:!w-full">
      <Menu>
        <SheetTrigger asChild>
          <MenuItem component={<Link href="/" />}>Home</MenuItem>
        </SheetTrigger>
        <SheetTrigger asChild>
          <MenuItem component={<Link href="/about-us" />}>About Us</MenuItem>
        </SheetTrigger>
        <SubMenu label="Shop By Category">
          {category.length > 0
            ? category.map(category => (
                <SheetTrigger key={category.title} asChild>
                  <MenuItem
                    component={<Link href={`${category.href ?? '#'}`} />}
                  >
                    {category?.title ?? ''}
                  </MenuItem>
                </SheetTrigger>
              ))
            : 'no category found'}
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}
