import { Box, Pressable, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";


const Card = (props) => {
  return (
    <Box
    bg={props.color || "grey.100" }
    w={props.width || 20}
    h={props.height || 20}
    borderRadius={props.borderRadius || "10"}
    style={styles.boxShadow}
    >
      {props.children}
    </Box>
  );
};

export default Card;



const styles = StyleSheet.create({
    boxShadow: {
      shadowOffset: { width: 0, height: 3 },
      shadowRadius: 4,
      shadowColor: "#0000001A",
    },
  });