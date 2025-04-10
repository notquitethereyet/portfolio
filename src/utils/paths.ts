/**
 * Utility functions for handling paths and URLs
 */

/**
 * Gets the base URL with a trailing slash
 * This ensures consistency when building URLs throughout the application
 */
export function getBaseUrl(): string {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
}

/**
 * Builds a complete URL by combining the base URL with a path
 * @param path The path to append to the base URL
 */
export function buildUrl(path: string): string {
  const base = getBaseUrl();
  // Remove leading slash from path if it exists
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return `${base}${cleanPath}`;
}
