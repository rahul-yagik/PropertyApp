import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../components/shared/Button';
import Input from '../components/shared/Input';
import MyText from '../components/shared/MyText';
import {useAppDispatch} from '../hook';
import {loginAction} from '../store/action/login';

const Login = () => {
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();

  const {handleSubmit, control} = useForm({
    mode: 'all',
  });

  const [registered, setRegistered] = useState(true);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{registered ? 'Login' : 'Register'}</Text>

      <Input
        name={'email'}
        placeholder={'Enter Email'}
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Email is required!',
          },
          pattern: {
            value: /^\w+([-]?\w+)*@\w+(.-]?\w+)*(\.\w\w+)+$/,
            message: 'Please enter valid email!',
          },
        }}
      />
      <Input
        name={'password'}
        placeholder={'Enter Password'}
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Password is required!',
          },
        }}
        secureTextEntry={true}
      />
      <Button
        customStyles={styles.submitBtn}
        onPress={() => {
          handleSubmit(async val => {
            await dispatch(
              loginAction({
                email: val.email,
                password: val.password,
              }),
            );
          })();
        }}>
        <MyText style={styles.btnText}>Submit</MyText>
      </Button>
      <MyText style={styles.notRegisteredText}>
        {registered ? "Haven't registered yet?" : 'Already registered?'}{' '}
        <MyText
          style={styles.registerText}
          onPress={() => setRegistered(previous => !previous)}>
          {registered ? 'Register Now' : 'Login'}
        </MyText>
      </MyText>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  root: {
    padding: 20,
    marginTop: 120,
  },
  title: {
    color: '#2e2e2e',
    fontFamily: 'YoungSerif-Regular',
    fontSize: 40,
    marginBottom: 32,
    textAlign: 'center',
  },
  textInput: {
    borderColor: '#666',
    borderRadius: 8,
    borderWidth: 1,
    fontFamily: 'Gabarito-Regular',
    fontSize: 18,
    marginBottom: 20,
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  submitBtn: {
    marginTop: 20,
    marginBottom: 4,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
  },
  notRegisteredText: {
    textAlign: 'center',
    fontSize: 14,
  },
  registerText: {
    color: '#006AC2',
  },
});
