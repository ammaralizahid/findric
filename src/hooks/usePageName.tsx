import { usePathname } from "next/navigation";

const pathToNameMap: Record<string, string> = {
  '/': 'Market Place',
  '/store': 'Store',
  '/product-list': 'Product List',
  '/product-detail': 'Product Detail',
};

export const usePageName = (): string => {
  const pathname = usePathname();

  if (!pathname) {
    return 'Market Place';
  }

  // Check for exact matches first
  if (pathToNameMap[pathname]) {
    return pathToNameMap[pathname];
  }

  // Handle dynamic routes
  if (pathname.startsWith('/product-detail/')) {
    return 'Product Detail';
  }

  return 'Market Place'; // default
};