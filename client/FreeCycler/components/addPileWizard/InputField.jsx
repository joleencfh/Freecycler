import { TextInput } from 'react-native';
import React from 'react';

// passing name and function to capture change in input field
const { name, onValueChange, ...rest } = this.props;

// https://www.youtube.com/watch?v=unDIo4wvtoQ 11:15

const theRest = [...rest];
const onChangeTextHandler = (text) => {
  onValueChange(name, text);
};

const inputField = () => (

  <TextInput
    onChangeText={onChangeTextHandler}
    {...theRest}
  />
);

export default inputField;
