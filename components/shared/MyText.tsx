import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

const MyText: React.FC<{children: React.ReactNode; style?: TextStyle}> = ({
  children,
  style,
  ...props
}) => {
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
