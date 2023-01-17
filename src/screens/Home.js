import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Stack,
  Divider,
  Icon,
  Image,
  Button,
  ScrollView,
} from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SimpleLineIcons, Foundation } from "@expo/vector-icons";

import Card from "../../components/Card";
import Setting from "../components/svg/Setting";
import Dollar from "../components/svg/Dollar";
import { Pressable } from "react-native";
import DownArrow from "../components/svg/DownArrow";
import Reactangle from "../components/svg/Reactangle";
import Deposit from "../components/svg/Despoit";
import Withdraw from "../components/svg/Withdraw";
import Graph from "../components/svg/Graph";
import Bar1 from "../components/svg/Bar1";
import Bar2 from "../components/svg/Bar2";
import Bar3 from "../components/svg/Bar3";
import Indicators from "../components/svg/Indicators";
import Comapare from "../components/svg/Compare";
import Expand from "../components/svg/Expand";
import Cameraa from "../components/svg/Camnera";
import InnerSetting from "../components/svg/InnerSetting";
// import Dai from "../components/svg/DAI";
// import Select1 from "../components/svg/Select";

const Arrow = require("../components/png/Arrow.svg");
const Brooklyn = require("../components/png/BroklynNet.svg");
const Portland = require("../components/png/Portland.svg");
const Select1 = require("../components/png/Select1.svg");
// const Downarrow = require("../components/png/DownArrow.svg");
const Dai = require("../components/png/Dai.svg");

const Home = () => {
  return (
    <NativeBaseProvider>
      <VStack bg={"#0E1327"} h={"full"}>
        <ScrollView>
          <VStack mr={22.5} ml={24.5}>
            <HStack mt={hp(5)} justifyContent={"space-between"}>
              <Stack>
                <Setting />
              </Stack>
              <Stack>
                <Text fontFamily={"Comfortaa"} fontSize={20} color={"#FFFFFF"}>
                  Sportsverse
                </Text>
              </Stack>
              <Stack>
                <Dollar />
              </Stack>
            </HStack>
            <VStack mt={28}>
              <Card
                color={"#252A4D"}
                width={"full"}
                height={"332"}
                borderRadius={12}
              >
                <VStack>
                  <Center mt={11}>
                    <Text
                      fontFamily="Inter"
                      fontStyle={"normal"}
                      fontWeight={"500"}
                      fontSize="16"
                      lineHeight={"19"}
                      textAlign="center"
                      color={"#FFFFFF"}
                    >
                      NBA Tournament
                    </Text>
                    <HStack mt={15} justifyContent={"space-evenly"}>
                      <HStack>
                        <Center>
                          <Icon as={<Image src={Brooklyn} />} size={8} />
                        </Center>
                        <Center>
                          <Text
                            ml={2}
                            fontFamily="Inter"
                            fontWeight={"500"}
                            fontSize="16"
                            lineHeight={"19"}
                            textAlign="center"
                            color={"#FFFFFF"}
                          >
                            Brooklyn Nets
                          </Text>
                        </Center>
                      </HStack>
                      <Divider
                        orientation="vertical"
                        bg={"rgba(255, 255, 255, 0.1)"}
                        h={39}
                        ml={1}
                        mr={2}
                      />
                      <HStack>
                        <Center>
                          <Icon as={<Image src={Portland} />} size={8} />
                        </Center>
                        <Center>
                          <Text
                            ml={2}
                            fontFamily="Inter"
                            fontWeight={"500"}
                            fontSize="16"
                            lineHeight={"19"}
                            textAlign="center"
                            color={"#FFFFFF"}
                          >
                            Portland Trail
                          </Text>
                        </Center>
                      </HStack>
                    </HStack>
                    <VStack mt={15}>
                      <Text
                        fontFamily="DMSans"
                        fontWeight={"400"}
                        fontSize="12"
                        lineHeight={"16"}
                        textAlign="center"
                        color={"#FFFFFF"}
                      >
                        Brooklyn Nets the Toss and Choose to Bat
                      </Text>
                      <Text
                        mt={18}
                        fontFamily="DMSans"
                        fontWeight={"500"}
                        fontSize="12"
                        lineHeight={"16"}
                        textAlign="center"
                        color={"white"}
                      >
                        TOP Players - Brooklyn Nets
                      </Text>
                    </VStack>

                    <HStack mt={14} justifyContent={"space-evenly"}>
                      <Stack mr={10}>
                        <Text
                          fontFamily="DMSans"
                          fontStyle={"normal"}
                          fontWeight={"400"}
                          fontSize="12"
                          lineHeight={"16"}
                          textAlign="center"
                          color={"rgba(255, 255, 255, 0.5)"}
                        >
                          Kane Williamson
                        </Text>
                      </Stack>
                      <Stack>
                        <Text
                          fontFamily="DMSans"
                          fontStyle={"normal"}
                          fontWeight={"400"}
                          fontSize="12"
                          lineHeight={"16"}
                          textAlign="center"
                          color={"rgba(255, 255, 255, 0.5)"}
                        >
                          10(4)
                        </Text>
                      </Stack>
                    </HStack>
                    <HStack mt={2} justifyContent={"space-evenly"}>
                      <Stack mr={10}>
                        <Text
                          fontFamily="DMSans"
                          fontStyle={"normal"}
                          fontWeight={"400"}
                          fontSize="12"
                          lineHeight={"16"}
                          textAlign="center"
                          color={"rgba(255, 255, 255, 0.5)"}
                        >
                          Shashank Singh
                        </Text>
                      </Stack>
                      <Stack>
                        <Text
                          fontFamily="DMSans"
                          fontStyle={"normal"}
                          fontWeight={"400"}
                          fontSize="12"
                          lineHeight={"16"}
                          textAlign="center"
                          color={"rgba(255, 255, 255, 0.5)"}
                        >
                          0(0)
                        </Text>
                      </Stack>
                    </HStack>
                    <VStack mt={5}>
                      <Divider bg={"rgba(255, 255, 255, 0.1)"} w={wp(70)} />
                    </VStack>

                    <VStack mt={3}>
                      <Text
                        fontFamily="DMSans"
                        fontWeight={"500"}
                        fontSize={wp(3)}
                        lineHeight={"16"}
                        textAlign="center"
                        color={"white"}
                      >
                        TOP Players - Portland Trail
                      </Text>
                    </VStack>

                    <HStack mt={14} justifyContent={"space-evenly"}>
                      <Stack mr={10}>
                        <Text
                          fontFamily="DMSans"
                          fontStyle={"normal"}
                          fontWeight={"400"}
                          fontSize="12"
                          lineHeight={"16"}
                          textAlign="center"
                          color={"rgba(255, 255, 255, 0.5)"}
                        >
                          Glenn Maxwell
                        </Text>
                      </Stack>
                      <Stack>
                        <Text
                          fontFamily="DMSans"
                          fontStyle={"normal"}
                          fontWeight={"400"}
                          fontSize="12"
                          lineHeight={"16"}
                          textAlign="center"
                          color={"rgba(255, 255, 255, 0.5)"}
                        >
                          0(0)
                        </Text>
                      </Stack>
                    </HStack>
                    <HStack mt={2} justifyContent={"space-evenly"}>
                      <Stack mr={10}>
                        <Text
                          fontFamily="DMSans"
                          fontStyle={"normal"}
                          fontWeight={"400"}
                          fontSize="12"
                          lineHeight={"16"}
                          textAlign="center"
                          color={"rgba(255, 255, 255, 0.5)"}
                        >
                          Glenn Maxwell
                        </Text>
                      </Stack>
                      <Stack>
                        <Text
                          fontFamily="DMSans"
                          fontStyle={"normal"}
                          fontWeight={"400"}
                          fontSize="12"
                          lineHeight={"16"}
                          textAlign="center"
                          color={"rgba(255, 255, 255, 0.5)"}
                        >
                          0(0)
                        </Text>
                      </Stack>
                    </HStack>
                  </Center>
                </VStack>
              </Card>
            </VStack>

            <VStack mt={hp(2)}>
              <Center>
                <HStack>
                  <Button
                    mr={wp(-10)}
                    w={wp(48)}
                    borderRadius={"12"}
                    bg={"#252A4D"}
                  >
                    <Text
                      fontFamily="DMSans"
                      fontStyle={"normal"}
                      fontWeight={"400"}
                      fontSize="12"
                      lineHeight={"18"}
                      textAlign="center"
                      color={"#F8F9FA"}
                    >
                      BROOKLYN NETS
                    </Text>
                  </Button>
                  <Button w={wp(48)} bg={"#161A33"} borderRadius={"12"}>
                    <Text
                      fontFamily="DMSans"
                      fontStyle={"normal"}
                      fontWeight={"400"}
                      fontSize="12"
                      lineHeight={"18"}
                      textAlign="center"
                      color={"#B9C1D9"}
                    >
                      Portland Trail{" "}
                    </Text>
                  </Button>
                </HStack>
              </Center>
            </VStack>
            <VStack mt={hp(2)}>
              <Card
                color={"#161A33"}
                width={"full"}
                height={"309"}
                borderRadius={12}
              >
                <VStack mr={wp(5)} ml={wp(5)} mt={hp(1)}>
                  <HStack>
                    <Center>
                      <Icon as={<Image src={Arrow} />} size={12} />
                    </Center>
                    <VStack mt={hp(2)} justifyContent={"flex-start"} ml={wp(3)}>
                      <Stack>
                        <Text
                          fontFamily="Inter"
                          fontStyle={"normal"}
                          fontWeight={"500"}
                          fontSize="18"
                          lineHeight={"22"}
                          textAlign="center"
                          color={"#FFFFFF"}
                        >
                          Brooklyn{" "}
                        </Text>
                      </Stack>
                      <Stack alignItems={"flex-start"}>
                        <Text
                          fontFamily="Inter"
                          fontStyle={"normal"}
                          fontWeight={"500"}
                          fontSize="18"
                          lineHeight={"22"}
                          textAlign="center"
                          color={"#FFFFFF"}
                        >
                          Nets{" "}
                        </Text>
                      </Stack>
                    </VStack>
                  </HStack>
                  <HStack
                    justifyContent={"space-around"}
                    mt={11}
                    ml={-6}
                    mr={-6}
                  >
                    <Stack>
                      <Pressable>
                        <HStack
                          borderWidth={1}
                          borderColor={"rgba(196, 196, 196, 0.2)"}
                          borderRadius={100}
                          w={127}
                          h={29}
                        >
                          <Stack mt={-0.5}>
                            <Icon as={<Image src={Select1} />} size={10} />
                          </Stack>
                          <Center>
                            <Text
                              fontFamily="DMSans"
                              fontStyle={"normal"}
                              fontWeight={"500"}
                              fontSize="16"
                              color={"#EAEAEA"}
                            >
                              ETH
                            </Text>
                          </Center>
                          <Center ml={wp(4)}>
                            <DownArrow />
                          </Center>
                        </HStack>
                      </Pressable>
                    </Stack>
                    <Stack>
                      <Text
                        fontFamily="DMSans"
                        fontStyle={"normal"}
                        fontWeight={"700"}
                        fontSize="25"
                        lineHeight={"33"}
                        textAlign="right"
                        color={"#A9AAB2"}
                      >
                        0.28014
                      </Text>
                    </Stack>
                  </HStack>
                  <HStack
                    justifyContent={"space-around"}
                    mt={2}
                    ml={-6}
                    mr={-8}
                  >
                    <Text
                      fontFamily="DMSans"
                      fontStyle={"normal"}
                      fontWeight={"500"}
                      fontSize="12"
                      lineHeight={16}
                      color={"#A9AAB2"}
                    >
                      Balance: 0.0661 ETH
                    </Text>
                    <Text
                      fontFamily="DMSans"
                      fontStyle={"normal"}
                      fontWeight={"500"}
                      fontSize="12"
                      lineHeight={16}
                      color={"#A9AAB2"}
                    >
                      $499.749
                    </Text>
                  </HStack>
                  <Center mt={hp(1)}>
                    <Divider bg={"rgba(255, 255, 255, 0.1)"} w={wp(80)} />
                  </Center>
                  <HStack
                    justifyContent={"space-around"}
                    mt={11}
                    ml={-6}
                    mr={-6}
                  >
                    <Stack>
                      <Pressable>
                        <HStack
                          borderWidth={1}
                          borderColor={"rgba(196, 196, 196, 0.2)"}
                          borderRadius={100}
                          w={127}
                          h={29}
                        >
                          <Stack mt={-1}>
                            <Icon as={<Image src={Dai} />} size={10} />
                            {/* <Dai/> */}
                          </Stack>
                          <Center>
                            <Text
                              fontFamily="DMSans"
                              fontStyle={"normal"}
                              fontWeight={"500"}
                              fontSize="16"
                              color={"#EAEAEA"}
                            >
                              DAI
                            </Text>
                          </Center>
                          <Center ml={wp(4)}>
                            <DownArrow />
                          </Center>
                        </HStack>
                      </Pressable>
                    </Stack>
                    <Stack>
                      <Text
                        fontFamily="DMSans"
                        fontStyle={"normal"}
                        fontWeight={"700"}
                        fontSize="25"
                        lineHeight={"33"}
                        textAlign="right"
                        color={"#A9AAB2"}
                      >
                        500
                      </Text>
                    </Stack>
                  </HStack>
                  <HStack
                    justifyContent={"space-around"}
                    mt={2}
                    ml={-6}
                    mr={-8}
                  >
                    <Text
                      fontFamily="DMSans"
                      fontStyle={"normal"}
                      fontWeight={"500"}
                      fontSize="12"
                      lineHeight={16}
                      color={"#A9AAB2"}
                    >
                      Balance: 250 DAI
                    </Text>
                    <Text
                      fontFamily="DMSans"
                      fontStyle={"normal"}
                      fontWeight={"500"}
                      fontSize="12"
                      lineHeight={16}
                      color={"#A9AAB2"}
                    >
                      $499.149
                    </Text>
                  </HStack>
                  <HStack mt={hp(3)}>
                    <Stack ml={wp(4)}>
                      <Button
                        w={"116"}
                        bg="transparent"
                        borderWidth={"1"}
                        borderRadius={"20"}
                        borderColor={"white"}
                      >
                        <Text color={"white"}>Buy</Text>
                      </Button>
                    </Stack>
                    <Stack ml={wp(8)}>
                      <Button
                        w={"116"}
                        bg="transparent"
                        borderWidth={"1"}
                        borderRadius={"20"}
                        borderColor={"white"}
                      >
                        <Text color={"white"}>Sell</Text>
                      </Button>
                    </Stack>
                  </HStack>
                </VStack>
              </Card>
            </VStack>
            <VStack mt={hp(2)}>
              <Card
                color={"rgba(196, 196, 196, 0.08)"}
                width={"full"}
                height={"309"}
                borderRadius={20}
              >
                <HStack
                  mt={hp(1)}
                  mr={wp(2)}
                  ml={wp(2)}
                  justifyContent={"space-evenly"}
                >
                  <HStack space={wp(3)}>
                    <Bar1 />
                    <Bar2 />
                    <Bar3 />
                  </HStack>
                  <HStack>
                    <HStack mr={wp(3)}>
                      <Indicators />
                      <Center>
                        <Text
                          fontFamily="Inter"
                          fontStyle={"normal"}
                          fontWeight={"500"}
                          fontSize="6"
                          textAlign="center"
                          color={"#C4C4C4"}
                        >
                          Indicators
                        </Text>
                      </Center>
                    </HStack>
                    <HStack>
                      <Comapare />
                      <Center>
                        <Text
                          fontFamily="Inter"
                          fontStyle={"normal"}
                          fontWeight={"500"}
                          fontSize="6"
                          textAlign="center"
                          color={"#C4C4C4"}
                        >
                          Comapare
                        </Text>
                      </Center>
                    </HStack>
                  </HStack>
                  <HStack space={wp(3)}>
                    <Expand />
                    <Cameraa />
                    <InnerSetting />
                  </HStack>
                </HStack>
                <HStack ml={wp(8)} mt={hp(4)}>
                    <Stack >
                  <Text 
                  
                    fontFamily="Inter"
                    fontStyle={"normal"}
                    fontWeight={"500"}
                    fontSize="7"
                    lineHeight={"22"}
                    textAlign="center"
                    color={"#C4C4C4"}
                  >
                    Uniswap
                  </Text>
                  </Stack>
                </HStack>
              </Card>
            </VStack>
            <VStack mb={hp(5)} mt={hp(2)}>
              <Card
                color={"rgba(196, 196, 196, 0.08)"}
                width={"full"}
                height={"320"}
                borderRadius={20}
              >
                <VStack>
                  <VStack>
                    <Text
                      fontFamily="Inter"
                      fontStyle={"normal"}
                      fontWeight={"700"}
                      fontSize="25"
                      lineHeight={"80"}
                      textAlign="center"
                      color={"#FFFFFF"}
                      textTransform={"uppercase"}
                      letterSpacing={0.015}
                    >
                      $59 510.78
                    </Text>
                  </VStack>
                  <HStack justifyContent={"center"}>
                    <HStack>
                      <Center>
                        <Deposit />
                      </Center>
                      <Center>
                        <Text
                          fontFamily="Inter"
                          fontStyle={"normal"}
                          fontWeight={"400"}
                          fontSize="14"
                          textAlign="center"
                          color={"#FFFFFF"}
                          letterSpacing={0.015}
                        >
                          Depoist
                        </Text>
                      </Center>
                    </HStack>
                    <HStack ml={wp(3)}>
                      <Withdraw />
                      <Center>
                        <Text
                          fontFamily="Inter"
                          fontStyle={"normal"}
                          fontWeight={"400"}
                          fontSize="14"
                          textAlign="center"
                          color={"#FFFFFF"}
                          letterSpacing={0.015}
                        >
                          Withdraw
                        </Text>
                      </Center>
                    </HStack>
                  </HStack>
                  <HStack justifyContent={"center"} mt={hp(2)} space={wp(5)}>
                    <Stack>
                      <Pressable>
                        <Text
                          fontFamily="DMSans"
                          fontStyle={"normal"}
                          fontWeight={"300"}
                          fontSize="12"
                          lineHeight={"16"}
                          textAlign="center"
                          color={"#8295B2"}
                          textTransform={"uppercase"}
                          alignItems={"center"}
                        >
                          All
                        </Text>
                      </Pressable>
                    </Stack>
                    <Stack>
                      <Pressable>
                        <Text
                          fontFamily="DMSans"
                          fontStyle={"normal"}
                          fontWeight={"300"}
                          fontSize="12"
                          lineHeight={"16"}
                          textAlign="center"
                          color={"#8295B2"}
                          textTransform={"uppercase"}
                          alignItems={"center"}
                        >
                          coins
                        </Text>
                      </Pressable>
                    </Stack>
                    <Stack>
                      <Pressable>
                        <Text
                          fontFamily="DMSans"
                          fontStyle={"normal"}
                          fontWeight={"300"}
                          fontSize="12"
                          lineHeight={"16"}
                          textAlign="center"
                          color={"#8295B2"}
                          textTransform={"uppercase"}
                          alignItems={"center"}
                        >
                          Flats
                        </Text>
                      </Pressable>
                    </Stack>
                    <Stack>
                      <Pressable>
                        <Text
                          fontFamily="DMSans"
                          fontStyle={"normal"}
                          fontWeight={"300"}
                          fontSize="12"
                          lineHeight={"16"}
                          textAlign="center"
                          color={"#8295B2"}
                          textTransform={"uppercase"}
                          alignItems={"center"}
                        >
                          Stables
                        </Text>
                      </Pressable>
                    </Stack>
                  </HStack>
                  <HStack
                    mr={wp(3)}
                    ml={wp(3)}
                    mt={hp(3)}
                    justifyContent={"space-between"}
                  >
                    <HStack>
                      <Stack>
                        <Icon as={<Image src={Brooklyn} />} size={10} />
                      </Stack>
                      <Center ml={wp(3)}>
                        <Text
                          fontFamily="Inter"
                          fontStyle={"normal"}
                          fontWeight={"500"}
                          fontSize="18"
                          textAlign="center"
                          color={"#FFFFFF"}
                        >
                          BN
                        </Text>
                      </Center>
                    </HStack>
                    <Center>
                      <Graph />
                    </Center>
                    <HStack>
                      <VStack>
                        <Text
                          fontFamily="Inter"
                          fontStyle={"normal"}
                          fontWeight={"500"}
                          fontSize="14"
                          textAlign="center"
                          color={"#B6B9C0"}
                          alignItems={"center"}
                        >
                          $1371.283
                        </Text>
                        <Text
                          mt={hp(1)}
                          fontFamily="Inter"
                          fontStyle={"normal"}
                          fontWeight={"400"}
                          fontSize="13"
                          textAlign="center"
                          color={"#B6B9C0"}
                          alignItems={"center"}
                        >
                          $15315.45
                        </Text>
                      </VStack>
                      <Stack justifyContent={"center"} ml={wp(3)}>
                        <DownArrow />
                      </Stack>
                    </HStack>
                  </HStack>
                  <Center mt={hp(2)}>
                    <Divider bg={"rgba(255, 255, 255, 0.1)"} w={wp(80)} />
                  </Center>
                  <HStack
                    mr={wp(3)}
                    ml={wp(3)}
                    mt={hp(1)}
                    justifyContent={"space-between"}
                  >
                    <HStack>
                      <Stack>
                        <Icon as={<Image src={Portland} />} size={10} />
                      </Stack>
                      <Center ml={wp(3)}>
                        <Text
                          fontFamily="Inter"
                          fontStyle={"normal"}
                          fontWeight={"500"}
                          fontSize="18"
                          textAlign="center"
                          color={"#FFFFFF"}
                        >
                          PT
                        </Text>
                      </Center>
                    </HStack>
                    <Center>
                      <Graph />
                    </Center>
                    <HStack>
                      <VStack>
                        <Text
                          fontFamily="Inter"
                          fontStyle={"normal"}
                          fontWeight={"500"}
                          fontSize="14"
                          textAlign="center"
                          color={"#B6B9C0"}
                          alignItems={"center"}
                        >
                          $1371.283
                        </Text>
                        <Text
                          mt={hp(1)}
                          fontFamily="Inter"
                          fontStyle={"normal"}
                          fontWeight={"400"}
                          fontSize="13"
                          textAlign="center"
                          color={"#B6B9C0"}
                          alignItems={"center"}
                        >
                          $15315.45
                        </Text>
                      </VStack>
                      <Stack justifyContent={"center"} ml={wp(3)}>
                        <DownArrow />
                      </Stack>
                    </HStack>
                  </HStack>
                </VStack>
              </Card>
            </VStack>
          </VStack>
        </ScrollView>
      </VStack>
    </NativeBaseProvider>
  );
};

export default Home;
