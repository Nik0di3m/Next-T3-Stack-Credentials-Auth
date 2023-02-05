import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import { signIn, signOut, useSession } from "next-auth/react";
const NavBar: React.FC = () => {
  const session = useSession();
  return (
    <header className="h-20 w-full bg-white shadow-sm">
      <div className="container mx-auto flex h-full items-center justify-between px-5">
        <div>
          <h1>NavBar</h1>
        </div>
        <div className="flex gap-8">
          <button
            onClick={() => signIn()}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-bl from-neutral-100 to-neutral-50 text-neutral-700 drop-shadow-lg"
          >
            <UserIcon className="h-6 w-6" />
          </button>
          {session.status === "authenticated" && (
            <button
              onClick={() => signOut()}
              className="flex h-10 items-center justify-center rounded-md bg-gradient-to-bl from-neutral-100 to-neutral-50 px-4 font-semibold text-neutral-700 drop-shadow-lg "
            >
              SignOut
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
