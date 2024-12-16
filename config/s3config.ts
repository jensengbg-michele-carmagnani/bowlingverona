export type PrefixKeys =
  | "BIRTHDAY"
  | "ICONS"
  | "CORPORATE"
  | "LANDING"
  | "ABOUTUS";

interface S3ConfigInterface {
  BUCKET_NAME: string;
  PREFIXES: Record<PrefixKeys, string>;
}

// Helper function to parse and validate PREFIXES
function getValidatedPrefixes(envPrefixes: string): Record<string, string> {
  try {
    const parsed = JSON.parse(envPrefixes);

    // Ensure it's an object with string values
    if (typeof parsed !== "object" || !parsed) {
      throw new Error("PREFIXES must be a valid JSON object.");
    }

    Object.entries(parsed).forEach(([key, value]) => {
      if (typeof value !== "string") {
        throw new Error(`Invalid value for prefix ${key}: must be a string.`);
      }
    });

    return parsed;
  } catch (error) {
    console.error("Failed to parse S3_PREFIXES from environment:", error);
    return {}; // Fallback to an empty object
  }
}

// Load and validate configuration
const PREFIXES = getValidatedPrefixes(process.env.S3_PREFIXES || "{}");
// Infer the keys of PREFIXES for autocompletion

const S3Config: S3ConfigInterface = {
  BUCKET_NAME: process.env.S3_BUCKET_NAME || "picture_website",
  PREFIXES, // Use the validated prefixes
};

// Warn if the bucket name is missing
if (!process.env.S3_BUCKET_NAME) {
  console.warn(
    "Warning: S3_BUCKET_NAME is not defined in environment variables."
  );
}

// Export the configuration
export default S3Config;
