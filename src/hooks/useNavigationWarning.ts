'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function useNavigationWarning() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };

    const handlePopState = (e: PopStateEvent) => {
      if (isPageLoaded) {
        if (
          window.confirm(
            'Are you sure you want to leave? Your changes may not be saved.'
          )
        ) {
          router.back();
        } else {
          window.history.pushState(null, '', window.location.href);
        }
      }
    };

    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('beforeunload', handleBeforeUnload);
    setIsPageLoaded(true);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isPageLoaded, router]);
}
