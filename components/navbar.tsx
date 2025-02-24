import Link from "next/link";

import getCategories from "@/actions/get-categories";

import { Container } from "@/components/ui/container";
import { MainNav } from "@/components/main-nav";
import { NavbarActions } from "@/components/navbar-actions";

export const revalidate = 0;

export const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 flex h-16 items-center gap-6">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};
