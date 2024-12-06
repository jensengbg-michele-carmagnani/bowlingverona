import { S3Object } from "@/app/(home)/home_actions";

const supabaseBaseUrl =
  "https://aercpcuebwexytenapqq.supabase.co/storage/v1/object/public"; // Replace with your Supabase base URL
const bucketName = "picture_website"; // Replace with your bucket name

export const findAndCreateLink = (
  objects: S3Object[],
  partialName: string
): string | undefined => {
  if (!supabaseBaseUrl || !bucketName) {
    throw new Error("Supabase base URL and bucket name are required.");
  }

  const foundObject = objects.find((obj) => obj.Key.includes(partialName)); // Find the first matching object

  if (!foundObject) return undefined; // Return undefined if no match is found

  // Construct URL
  const encodedKey = encodeURIComponent(foundObject.Key); // Encode the key for safe URL usage
  const imgObj = {
    src: `${supabaseBaseUrl}/${bucketName}/${encodedKey}`,
    
  };
  return `${supabaseBaseUrl}/${bucketName}/${encodedKey}`;
};
