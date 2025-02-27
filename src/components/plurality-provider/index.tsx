'use client';

import { PropsWithChildren } from 'react';

export default function PluralityProvider({ children }: PropsWithChildren) {
  // const pathname = usePathname();
  // const router = useRouter();

  // const response = await PluralitySocialConnect.getConnectedAccount();

  // if (!response) {
  //   window.location.href = '/login';
  // }

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await PluralitySocialConnect.getConnectedAccount();
  //       if (!response) {
  //         router.push('/login');
  //       }
  //     } catch (e) {
  //       console.log(e);
  //       router.push('/login');
  //     }
  //   })();
  // }, [pathname, router]);

  return <>{children}</>;
}
