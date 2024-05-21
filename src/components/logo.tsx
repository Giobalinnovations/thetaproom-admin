// import { logo } from '@/lib/images';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn('relative overflow-hidden h-20 w-[50%]', className)}
    >
      <Image
        alt="coast to coast logo"
        src="/images/brand/logo.png"
        className={cn('object-cover w-36', className)}
        priority
        fill
      />
    </Link>
  );
}
