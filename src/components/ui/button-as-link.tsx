import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

export default function ButtonAsLink({
  title,
  href = '#',
  className,
  variant = 'default',
}: {
  title: string;
  href?: string;
  className?: string;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | null
    | undefined;
}) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: variant }),
        'no-underline',
        className
      )}
    >
      {title}
    </Link>
  );
}
