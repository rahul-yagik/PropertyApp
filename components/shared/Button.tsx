import React from 'react';
import {GestureResponderEvent, Pressable, StyleSheet} from 'react-native';

const Button: React.FC<{
  children: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  customStyles?: any;
}> = ({children, onPress, customStyles}) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, customStyles]}>
      {children}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#006AC2',
    borderRadius: 16,
    marginBottom: 20,
    padding: 16,
  },
});
