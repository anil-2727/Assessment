import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const Graph = (props) => (
  <Svg
    width={55}
    height={21}
    viewBox="0 0 55 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1 15.519C1.8129 14.6028 3.85677 12.7704 5.52903 12.7704C7.61935 12.7704 9.36129 15.8625 11.8 16.5497C14.2387 17.2368 15.9806 15.519 17.0258 14.4882C18.071 13.4575 18.7677 12.0832 20.5097 11.7397C22.2516 11.3961 25.0387 11.0525 25.3871 12.7704C25.7355 14.4882 25.3871 20.329 27.8258 19.9855C30.2645 19.6419 29.9161 8.99104 30.9613 8.64747C32.0065 8.30389 33.4 10.7089 34.4452 10.7089C35.4903 10.7089 36.1871 5.21172 38.2774 6.24244C40.3677 7.27317 40.7161 11.7396 42.1097 10.0218C43.5032 8.30389 43.1548 0.0580915 44.8968 1.08882C46.6387 2.11954 48.0323 5.55529 50.1226 6.24244C51.7948 6.79216 53.3742 6.92959 53.9548 6.92959H55"
      stroke="url(#paint0_linear_517_4330)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_517_4330"
        x1={54.6516}
        y1={10.6956}
        x2={1}
        y2={10.6955}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4EEC8D" />
        <Stop offset={0.74026} stopColor="#4EEC8D" stopOpacity={0.545455} />
        <Stop offset={1} stopColor="#4EEC8D" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Graph;
