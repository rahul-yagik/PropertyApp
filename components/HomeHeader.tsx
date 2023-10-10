import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import MyText from './shared/MyText';
import {useAppDispatch, useAppSelector} from '../hook';
import {logoutAction} from '../store/action/login';

const HomeHeader = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.login.data);
  return (
    <View style={styles.root}>
      <MyText style={styles.title}>Properties</MyText>
      <Pressable
        style={styles.logoutBtn}
        onPress={() => {
          dispatch(logoutAction());
        }}>
        <MyText style={styles.nameLetter}>{user.name[0].toUpperCase()}</MyText>
      </Pressable>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontFamily: 'YoungSerif-Regular',
    color: '#006AC2',
    marginBottom: 20,
  },
  logoutBtn: {
    backgroundColor: '#006AC2',
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameLetter: {
    fontFamily: 'YoungSerif-Regular',
    fontSize: 16,
    color: '#fff',
  },
});
