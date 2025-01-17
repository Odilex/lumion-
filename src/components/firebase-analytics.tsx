'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initializeAnalytics } from '@/lib/firebase';
import { logEvent, Analytics } from 'firebase/analytics';

let analytics: Analytics | null = null;

export function FirebaseAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const initAnalytics = async () => {
      analytics = await initializeAnalytics();
    };
    initAnalytics();
  }, []);

  useEffect(() => {
    if (analytics) {
      logEvent(analytics, 'page_view', {
        page_path: pathname,
        page_search: searchParams.toString(),
        page_location: window.location.href,
      });
    }
  }, [pathname, searchParams]);

  return null;
} 