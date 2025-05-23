export class NativeAuthClientConfig {
  origin: string = typeof window !== "undefined" && typeof window.location !== 'undefined' ? window.location.hostname : '';
  apiUrl: string = 'https://api.dharitri.org';
  expirySeconds: number = 60 * 60 * 24;
  blockHashShard?: number;
  gatewayUrl?: string;
  extraRequestHeaders?: { [key: string]: string };
}
