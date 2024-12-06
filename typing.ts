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
  email: string;
}

export interface User {
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
