import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Wallet = (props) => (
  <Svg
    width={20}
    height={18}
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18 0H3C1.346 0 0 1.346 0 3V15C0 16.654 1.346 18 3 18H18C19.103 18 20 17.103 20 16V2C20 0.897 19.103 0 18 0ZM3 16C2.448 16 2 15.551 2 15V3C2 2.449 2.448 2 3 2H18V5H12C10.897 5 10 5.897 10 7V11C10 12.103 10.897 13 12 13H18.001V16H3ZM18 7V11H12V7H18Z"
      fill="#98A1A9"
    />
  </Svg>
);
export default Wallet;
