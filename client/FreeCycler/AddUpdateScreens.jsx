// import React from "react";
// import { View, Text, StyleSheet, Button } from "react-native";

// const styles = StyleSheet.create({
//     screen: {
//       justifyContent: "center",
//       alignItems: "center",
//       flex: 1,
//     },
//     button: {
//       marginVertical: 10,
//       paddingHorizontal: 20,
//       paddingVertical: 10,
      
//     }
//   });

// const AUContainer = ({ children }) => (
//    <View style={styles.screen}>{children}</View>
//   );

// export const AddUpdateStart = ({navigation}) => (
//   <AUContainer>
//       <Text>Here you can update everyone on the status of the pile. Let's get started!</Text>
//        <Button
//           title="Start"
//           onPress={() => navigation.push("WhatsLeft")}
//         />
//   </AUContainer>
// );

// export const WhatsLeft = ({navigation}) => (
//   <AUContainer>
//       <Text>How much is left more or less?</Text>
//       <Button
//           title="Next"
//           onPress={() => navigation.push("TakenSomething")}
//       />
//   </AUContainer>
// );  

// export const TakenSomething = ({navigation}) => (
//     <AUContainer>
//         <Text>Did you take something?</Text>
//         <Button
//             title="Next"
//             onPress={() => navigation.push("WhatYouTook")}
//         />
//     </AUContainer>
// );

// export const WhatYouTook = ({navigation}) => (
//     <AUContainer>
//         <Text>What did you take?</Text>
//         <Button
//             title="Next"
//             onPress={() => navigation.push("RatePile")}
//         />
//     </AUContainer>
// );

// export const RatePile = ({navigation}) => (
//     <AUContainer>
//         <Text>How would you rate the pile?</Text>
//         <Button
//             title="Next"
//             onPress={() => navigation.push("ThankYou")}
//         />
//     </AUContainer>
// );


// export const ThankYou = ({navigation}) => (
//     <AUContainer>
//         <Text>Thank you!</Text>
//         <Button
//             title="Done!"
//         />
//     </AUContainer>
// );

