"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
type User = {
  id: number;
  name: string;
  email: string;
  address: string;
  created_at: string; // Assuming created_at is a string, adjust if necessary
  updated_at: string;
  is_active: boolean;
};

export default function Page() {
  const [notes, setNotes] = useState<User[] | null>(null);
  const supabase = createClient();
  console.log(supabase);

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("notes").select();
      setNotes(data);
    };
    getData();
  }, []);

  return <pre>{JSON.stringify(notes, null, 2)}</pre>;
}
