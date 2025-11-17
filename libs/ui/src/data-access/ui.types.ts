// TODO (Łukasz): to specific in better way, right now it's a mess
export const color = ['primary', 'accent', 'white'] as const;
export const themeColor = ['brown', 'white'] as const;

export type Color = (typeof color)[number];
export type ThemeColor = (typeof themeColor)[number];
