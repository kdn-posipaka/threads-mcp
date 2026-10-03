export interface BrowserFingerprintOptions {
  userAgent?: string;
  timezone?: string;
}

/** Optional fingerprint overrides; omitted values use CloakBrowser's defaults. */
export function browserFingerprintOptions(
  env: NodeJS.ProcessEnv = process.env,
): BrowserFingerprintOptions {
  const userAgent = env.THREADS_USER_AGENT?.trim();
  const timezone = env.THREADS_TIMEZONE?.trim();

  return {
    ...(userAgent ? { userAgent } : {}),
    ...(timezone ? { timezone } : {}),
  };
}
