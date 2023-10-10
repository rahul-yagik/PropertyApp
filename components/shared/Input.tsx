import React from 'react';
import {Control, Controller, FieldValues} from 'react-hook-form';
import {StyleSheet, TextInput, View} from 'react-native';
import MyText from './MyText';

const Input: React.FC<{
  control: Control<FieldValues, any>;
  name: string;
  placeholder: string;
  rules: any;
  secureTextEntry?: boolean;
}> = ({control, name, placeholder, rules, secureTextEntry}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
        return (
          <View style={styles.root}>
            <TextInput
              placeholder={placeholder}
              style={styles.textInput}
              value={value}
              onBlur={onBlur}
              onChangeText={val => onChange(val)}
              secureTextEntry={secureTextEntry}
            />
            {error ? (
              <MyText style={styles.error}>{error.message}</MyText>
            ) : null}
          </View>
        );
      }}
      rules={rules}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  root: {
    marginBottom: 20,
  },
  textInput: {
    borderColor: '#666',
    borderRadius: 8,
    borderWidth: 1,
    fontFamily: 'Gabarito-Regular',
    fontSize: 18,
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  error: {
    color: '#ff0000',
    paddingHorizontal: 8,
    marginTop: 4,
  },
});
