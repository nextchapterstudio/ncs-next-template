export function block(
  styles: Record<string, any>,
  block: string,
  modifiers?: any[],
  className?: string | string[]
): string {
  modifiers = modifiers ?? []
  if (className) {
    className = ensureArray(className).join(' ')
    return modifiers.length === 0
      ? `${styles[block]} ${className}`
      : `${styles[block]} ${buildModifiers(
          styles,
          block,
          modifiers
        )} ${className}`.trim()
  }
  return `${styles[block]} ${buildModifiers(styles, block, modifiers)}`.trim()
}

export function buildModifiers(
  styles: any,
  block: string,
  modifiers: any[]
): string {
  return modifiers
    .reduce((acc, modifier: any) => {
      if (typeof modifier === 'string') {
        acc.push(styles[`${block}--${modifier}`])
      } else if (Array.isArray(modifier)) {
        const mods = buildModifiers(styles, block, modifier).trim()
        if (mods) {
          acc.push(mods)
        }
      }
      return acc
    }, [])
    .join(' ')
}

function ensureArray<T>(maybeArray: T | T[]): T[] {
  return Array.isArray(maybeArray) ? maybeArray : [maybeArray]
}
