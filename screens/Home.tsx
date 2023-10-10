import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import HomeHeader from '../components/HomeHeader';
import PropertyCard from '../components/PropertyCard';
import {useAppDispatch, useAppSelector} from '../hook';
import {properties} from '../store/reducer/properties';
import {propertiesAction} from '../store/action/properties';

const Home = () => {
  const dispatch = useAppDispatch();
  const propertiesCollection = useAppSelector(
    state => state.properties.properties,
  );

  useEffect(() => {
    dispatch(propertiesAction());
  }, [dispatch]);

  return (
    <View style={styles.root}>
      <HomeHeader />
      <ScrollView>
        {propertiesCollection.map((data: properties) => (
          <PropertyCard
            bedrooms={data.bedrooms}
            construction_status={data.construction_status}
            images={data.photos}
            key={data.id}
            location={data.location}
            price={data.price}
            society={data.society}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    padding: 12,
  },
});
