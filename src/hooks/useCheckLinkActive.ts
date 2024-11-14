'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

function checkEqual(arr1: string[], arr2: string[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const useCheckLinkActive = (
  href: string,
  as?: string,
  index?: boolean,
  exclude?: string[]
): boolean => {
  let pathname = usePathname();

  pathname = pathname.split('?')[0].trim();
  href = href.split('?')[0].trim();
  as = as?.split('?')[0].trim();

  const excludeAbsent = useMemo(() => {
    if (!exclude || !exclude.length) {
      return true;
    }

    return exclude.every((route) => !pathname.includes(route));
  }, [exclude, pathname]);

  if (href === '/' || index) {
    return pathname === href;
  }

  const hrefArr = href.split('/');
  const asArr = as?.split('/');
  const asPathArr = pathname.split('/').splice(0, hrefArr.length);

  if (asArr) {
    return checkEqual(asArr, asPathArr) && checkEqual(hrefArr, asPathArr);
  }

  return checkEqual(hrefArr, asPathArr) && excludeAbsent;
};

export default useCheckLinkActive;

export function useGetActivePath(pathIndex = 2) {
  let pathname = usePathname();

  pathname = pathname.split('?')[0].trim();
  const asPathArr = pathname.split('/');

  return { path: asPathArr[pathIndex] ?? '' };
}
