/**
 * Utility functions for the QuadTech website
 */

/**
 * Format an ISO date string to a human-readable format
 * @param dateString - ISO date string (e.g., "2025-12-01")
 * @returns Formatted date string (e.g., "December 1, 2025")
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Format an ISO date string to a short format
 * @param dateString - ISO date string (e.g., "2025-12-01")
 * @returns Formatted date string (e.g., "Dec 1, 2025")
 */
export function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
