export const FILTER = 'FILTER';
export const LENGHTMENU = 'LENGHTMENU';

export const NAMESPACE = 'NAMESPACE';

export function namespace(text) {
  return { type: NAMESPACE, text }
}

export function doFilter(text) {
  return { type: FILTER, text }
}
export function lengthMenu(text) {
  return { type: LENGHTMENU, text }
}