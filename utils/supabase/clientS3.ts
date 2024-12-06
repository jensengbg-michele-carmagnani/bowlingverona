import { S3Client } from "@aws-sdk/client-s3";

export const clientS3 = new S3Client({
  forcePathStyle: true,
  region: "eu-central-1",
  endpoint: "https://aercpcuebwexytenapqq.supabase.co/storage/v1/s3",
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_SUPABASE_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_SUPABASE_ACCESS_SECRET_KEY!,
  },
});
