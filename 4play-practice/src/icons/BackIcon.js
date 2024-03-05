import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BackIcon = (props) => (
  <Svg
    width={26}
    height={26}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M22.414 11.707H7.828L13.121 6.414L11.707 5L4 12.707L11.707 20.414L13.121 19L7.828 13.707H22.414V11.707Z"
      fill="#D1D1D1"
    />
  </Svg>
);
export default BackIcon;
