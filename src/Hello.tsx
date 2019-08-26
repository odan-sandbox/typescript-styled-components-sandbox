import * as React from "react";
import { ThemeContext } from 'styled-components';

const Hello: React.FC = () => {
  const theme = React.useContext(ThemeContext);
  theme.black // <= 補完が効く
  return <div>Hello!</div>
}

export default Hello;
