/**
 * Normalizes an image/media `src` value.
 *
 * Returns `undefined` for an empty/falsy value so callers never render a DOM
 * element with `src=""` — React warns about that (it can trigger a full-page
 * re-download), and recommends omitting the attribute instead.
 */
export const assetSrc = (src?: string): string | undefined => src || undefined
