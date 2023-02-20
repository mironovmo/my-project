type Mods = Record<string, string | Boolean>

export function classNames(cls:string, mods:Mods, additional: string[]): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods).filter(([key, value]) => Boolean(value)).map(([key]) => key)
    ]

        .join(' ')
}