import React from 'react';
import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';

type props = TextProps & {
  children: React.ReactNode;
  style?: TextStyle;
};

const MyText: React.FC<props> = ({children, style, ...props}) => {
  return (
    <Text style={[styles.root, style]} {...props}>
      {children}
    </Text>
  );
};

export default MyText;

const styles = StyleSheet.create({
  root: {
    fontFamily: 'Gabarito-Regular',
  },
});
