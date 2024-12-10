import { FlagValues } from "@vercel/flags/react";
import { encrypt } from "@vercel/flags";

export async function ConfidentialFlagValues({
  values,
}: {
  values: Record<string, any>;
}) {
  const encryptedFlagValues = await encrypt(values);
  return <FlagValues values={encryptedFlagValues} />;
}
