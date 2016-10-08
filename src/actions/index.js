export const CHANGENAMESPACE = 'CHANGENAMESPACE';

export function changeNamespace(text) {
  return { type: CHANGENAMESPACE, text }
}