export default function isInDom(obj: Element): boolean {
  return Boolean(obj.closest('body'))
}
