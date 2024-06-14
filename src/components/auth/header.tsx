import { cn } from '@/lib/utils';
import Logo from '../logo';

interface HeaderProps {
  label: string;
}
export default function Header({ label }: HeaderProps) {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn('text-3xl font-bold')}>
        <Logo />
      </h1>
      <p className="text-gray">{label}</p>
    </div>
  );
}
