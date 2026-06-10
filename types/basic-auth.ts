export interface BasicAuthCredentials {
  username: string;
  password: string;
}

export interface BasicAuthConfig {
  enabled: boolean;
  credentials: BasicAuthCredentials | null;
  realm: string;
}
