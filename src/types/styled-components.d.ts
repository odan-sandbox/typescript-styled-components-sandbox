export interface Theme {
  black: string,
  white: string,
}

declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}
