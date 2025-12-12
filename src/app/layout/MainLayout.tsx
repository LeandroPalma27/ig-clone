import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <header>Navbar (mock)</header>
      <main>{children}</main>
    </div>
  );
}
