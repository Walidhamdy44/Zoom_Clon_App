import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/LO.png"
          width={32}
          height={32}
          alt="Lo Meeting app logo"
          className="rounded-xl max-sm:size-10"
        />
        <p className="px-4 text-[26px] font-extrabold text-white max-sm:hidden ">
          Lo Meeting 🤸‍♂️
        </p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
