/**
 * Returns the `rel` value that should accompany a link opened in a new tab,
 * protecting against tabnabbing (window.opener access) on external links.
 */
export function externalRel(target?: string): string | undefined {
  return target === '_blank' ? 'noopener noreferrer' : undefined;
}
