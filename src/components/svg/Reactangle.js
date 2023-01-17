import * as React from "react";
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg";
const Reactangle = (props) => (
  <Svg
    width={118}
    height={40}
    viewBox="0 0 118 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={0.612793}
      width={116.814}
      height={40}
      rx={20}
      fill="url(#paint0_linear_517_4026)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_517_4026"
        x1={72.5881}
        y1={9.61122}
        x2={67.7643}
        y2={45.9112}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8885FB" />
        <Stop offset={1} stopColor="#511CEC" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Reactangle;
