import { ThemeType } from "../util";

declare module "styled-components" {
  interface DefaultTheme extends ThemeType {}
}
