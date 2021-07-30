import React from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,

  },
});

const APContainer = ({ children }) => (
  <View style={styles.screen}>{children}</View>
);

const AddPile = (pageNum) => {
  switch (pageNum) {
    case '1':
      return (
        <APContainer>
          <Text>Here you can let people know what you are freecycling.</Text>
          <Text>Let&apos;s get started!</Text>
          <Button
            title="Start"
          />
        </APContainer>
      );
    case '2':
      return (
        <APContainer>
          <Text>What are you freecycling?</Text>
          <Button
            title="Next"
          />
        </APContainer>
      );
    case '3':
      return (
        <APContainer>
          <Text>How many items?</Text>
          <Button
            title="Next"
          />
        </APContainer>
      );
    case '4':
      return (
        <APContainer>
          <Text>Where is the pile located?</Text>
          <Button
            title="Next"
          />
        </APContainer>
      );
    case '5':
      return (
        <APContainer>
          <Text>How long is the pile available?</Text>
          <Button
            title="Next"
          />
        </APContainer>
      );
    // case '5':
    //   return (
    //     <APContainer>
    //       <Text>HTell us more...</Text>
    //       <Button
    //         title="Next"
    //       />
    //     </APContainer>
    //   );
    // case '5':
    //   return (
    //     <APContainer>
    //       <Text>Now go ahead and take a few pictures</Text>
    //       <Button
    //         title="Next"
    //       />
    //     </APContainer>
    //   );
    // case '5':
    //   return (
    //     <APContainer>
    //       <Text>...And done! </Text>
    //       <Text>Hi five freecycler!</Text>
    //       <Button
    //         title="Done!"
    //       />
    //     </APContainer>
    //   );
    default:
      return <Text>something went wrong</Text>;
  }
};

export default AddPile;
