import * as React from "react";
import Svg, { G, Ellipse, Defs, Pattern, Use, Image } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Dai = (props) => (
  <Svg
    width={44}
    height={41}
    viewBox="0 0 44 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <G filter="url(#filter0_ddd_517_3999)">
      <Ellipse
        cx={22.1817}
        cy={16.6768}
        rx={13.4139}
        ry={12}
        fill="url(#pattern0)"
      />
    </G>
    <Defs>
      <Pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_517_3999"
          transform="translate(0 -0.0589124) scale(0.005 0.00558912)"
        />
      </Pattern>
      <Image
        id="image0_517_3999"
        width={200}
        height={200}
        xlinkHref="data:image/jpeg;base64,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"
      />
    </Defs>
  </Svg>
);
export default Dai;