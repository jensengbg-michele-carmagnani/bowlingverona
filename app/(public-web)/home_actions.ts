import { clientS3 } from "@/utils/supabase/clientS3";
import { ListObjectsCommand } from "@aws-sdk/client-s3";

export type S3Object = {
  Key: string; // The key (path) of the object in the bucket
  LastModified: string; // ISO string for the last modified timestamp
  ETag: string; // Entity tag for identifying changes
  Size: number; // Size of the object in bytes
  StorageClass: string; // Storage class (e.g., STANDARD, GLACIER, etc.)
};

export const listBucketObjects = async (
  bucketName: string,
  folderPath: string
) => {
  try {
    // Validate credentials
    if (
      !process.env.NEXT_PUBLIC_SUPABASE_ACCESS_KEY_ID ||
      !process.env.NEXT_PUBLIC_SUPABASE_ACCESS_SECRET_KEY
    ) {
      throw new Error("S3 credentials are not set");
    }

    const command = new ListObjectsCommand({
      Bucket: bucketName,
      Prefix: folderPath, // The folder path (e.g., "folder-name/")
      Delimiter: "/", // Ensures only objects under the prefix are listed
    });
    const response = await clientS3.send(command);
    if (!response.Contents) {
      return [];
    }
    return response.Contents.map((item) => ({
      Key: item.Key || "",
      LastModified: item.LastModified ? item.LastModified.toISOString() : "",
      ETag: item.ETag || "",
      Size: item.Size || 0,
      StorageClass: item.StorageClass || "",
    })) as S3Object[];
  } catch (err) {
    console.error("Error listing bucket objects:", err);
    return []; // Return an empty array in case of error
  }
};
