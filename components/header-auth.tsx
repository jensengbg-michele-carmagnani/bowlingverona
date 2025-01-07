import { signOutAction } from "@/app/actions";

import Link from "next/link";

import { createClient } from "@/utils/supabase/server";
import { Button } from "./ui/button";

export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log("USER", user);

  return user ? (
    <div className="w-full flex justify-between items-center gap-7 ml-10 ">
      <p>
        👋 Hey, <span className="px-1">{user.email}!</span>
      </p>
      <form action={signOutAction}>
        <Button
          type="submit"
          variant={"outline"}
          className="text-black w-[88px] h-10 "
        >
          Sign out
        </Button>
      </form>
    </div>
  ) : (
    <div className="flex justify-end self-end gap-7 text-black pr-10">
      <Button asChild size="sm" variant={"outline"}>
        <Link href="/sign-in">Sign in</Link>
      </Button>
      <Button asChild size="sm" variant={"default"}>
        <Link href="/sign-up">Sign up</Link>
      </Button>
    </div>
  );
}
