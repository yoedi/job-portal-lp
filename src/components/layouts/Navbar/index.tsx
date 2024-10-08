"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import MenuAuth from "@/components/organism/MenuAuth";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const router = useRouter();

  const { data: session } = useSession();

  return (
    <header className="px-32 py-5 flex flex-row items-start justify-between">
      <div className="inline-flex items-center gap-12">
        <div>
          <Image
            src="/images/logo2.png"
            alt="/images/logo2.png"
            width={160}
            height={36}
          />
        </div>
        <div>
          <Link
            href="/find-jobs"
            className="font-medium text-gray-400 mr-4 cursor-pointer"
          >
            Find jobs
          </Link>
          <Link
            href="/find-companies"
            className="font-medium text-gray-400 cursor-pointer"
          >
            Browse Compnaies
          </Link>
        </div>
      </div>
      <div className="inline-flex items-center gap-4 h-8">
        {session ? (
          <div>
            <MenuAuth />
          </div>
        ) : (
          <>
            <Button onClick={() => router.push("/signin")} variant="link">
              Login
            </Button>
            <Button onClick={() => router.push("/signup")}>Sign Up</Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
