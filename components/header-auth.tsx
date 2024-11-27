import { signOutAction } from "@/app/(auth-pages)/actions";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";

export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log("USER", user);

  return user ? (
    <div className="w-full flex justify-end items-center gap-7 pr-10 ">
      👋 Hey, {user.email}!
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
    <div className="flex justify-end gap-7 text-black pr-10">
      <Button asChild size="sm" variant={"outline"}>
        <Link href="/sign-in">Sign in</Link>
      </Button>
      <Button asChild size="sm" variant={"default"}>
        <Link href="/sign-up">Sign up</Link>
      </Button>
    </div>
  );
}
