import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Expand = (props) => (
  <Svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.5738 3.76442V5.75181H11.0707V3.26758H8.58643V3.76442H10.5738Z"
      fill="white"
    />
    <Path
      d="M8.51434 6.17611L10.9986 3.69188L10.6468 3.34012L8.16258 5.82434L8.51434 6.17611ZM3.61843 3.76442V5.7518H3.12158V3.26758H5.60581V3.76442H3.61843Z"
      fill="white"
    />
    <Path
      d="M5.67746 6.17596L3.19324 3.69173L3.545 3.33997L6.02923 5.82419L5.67746 6.17596ZM10.5734 10.7201V8.73273H11.0702V11.217H8.586V10.7201H10.5734Z"
      fill="white"
    />
    <Path
      d="M8.5129 8.30859L10.9971 10.7928L10.6454 11.1446L8.16113 8.66036L8.5129 8.30859Z"
      fill="white"
    />
    <Path
      d="M3.61794 10.7208V8.7334H3.12109V11.2176H5.60532V10.7208H3.61794Z"
      fill="white"
    />
    <Path
      d="M5.67722 8.30859L3.19299 10.7928L3.54476 11.1446L6.02899 8.66036L5.67722 8.30859Z"
      fill="white"
    />
  </Svg>
);
export default Expand;
