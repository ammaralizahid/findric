import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode; // Define the type of 'children'
}

export default function Layout_1({ children }: LayoutProps) {
  return (
    <>{children}</>
  );
}
