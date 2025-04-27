import { useRouter } from "next/router";

// This hook returns the current pathname from the Next.js router.
// // It can be used to determine the current page or route in a Next.js application.

export const usePathname = () => {
  const { pathname } = useRouter();
  return pathname;
};
