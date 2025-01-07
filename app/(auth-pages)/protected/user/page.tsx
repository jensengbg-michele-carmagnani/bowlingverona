"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

// Define the type of the user identity data.
interface UserIdentity {
  identity_id: string;
  id: string;
  user_id: string;
  identity_data: {
    email: string;
    email_verified: boolean;
    phone_verified: boolean;
    sub: string;
  };
  provider: string;
  last_sign_in_at: string;
  created_at: string;
  updated_at: string;
  email: string; // <-- Required property for UserIdentity
}

// Define the User type that will hold information about the user.
interface User {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string | null;
  invited_at: string | null;
  phone: string | null;
  confirmed_at: string | null;
  last_sign_in_at: string | null;
  user_metadata: Record<string, unknown>;
  identities: UserIdentity[];
  created_at: string;
  updated_at: string;
  is_anonymous: boolean;
}

type Notes = {
  id: number;
  title: string;
};

export default function Page() {
  const [notes, setNotes] = useState<Notes[] | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const supabase = createClient();

  const extractUser = async () => {
    const { data } = await supabase.auth.getUser();
    console.log(data);

    if (data.user) {
      setUser({
        id: data.user.id || "",
        aud: data.user.aud || "",
        role: data.user.role || "",
        email: data.user.email || "",
        email_confirmed_at: data.user.email_confirmed_at || null,
        invited_at: data.user.invited_at || null,
        phone: data.user.phone || null,
        confirmed_at: data.user.confirmed_at || null,
        last_sign_in_at: data.user.last_sign_in_at || null,
        user_metadata: data.user.user_metadata || {},
        identities: (data.user.identities ?? []).map((identity) => {
          // Cast the identity to match the UserIdentity interface
          const userIdentity = identity as UserIdentity;

          return {
            ...userIdentity,
            email: userIdentity.identity_data?.email || "",
          };
        }),
        created_at: data.user.created_at || "",
        updated_at: data.user.updated_at || "",
        is_anonymous: data.user.is_anonymous || false,
      });
    } else {
      setUser(null);
    }
    setIsPending(false);
  };

  useEffect(() => {
    const fetchNotes = async () => {
      const { data } = await supabase.from("notes").select("*");
      setNotes(data);
    };
    fetchNotes();
    extractUser();
  }, [supabase]); // Add supabase as a dependency

  return (
    <div className="bg-green-600 rounded-md p-10">
      <pre>{JSON.stringify(notes, null, 2)}</pre>
      <pre>{JSON.stringify(user?.email, null, 2)}</pre>
      <button disabled={isPending}>Submit</button>
    </div>
  );
}
