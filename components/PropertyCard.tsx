import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';
import MyText from './shared/MyText';

const PropertyCard: React.FC<{
  bedrooms: string;
  construction_status: string;
  images: string;
  location: string;
  price: string;
  society: string;
}> = ({bedrooms, construction_status, images, location, price, society}) => {
  const propertiesImages = images.split(',');

  return (
    <View style={styles.root}>
      <MyText
        style={styles.title}>{`${bedrooms[0]} BHK at ${location}`}</MyText>
      <ScrollView horizontal>
        {propertiesImages.map((img: string) => (
          <View>
            <Image
              key={img}
              source={{uri: `http://172.16.73.29:5000/static/${img.trim()}`}}
              style={styles.images}
            />
            {/* <Image
              key={img}
              source={{
                uri: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80',
              }}
              resizeMode="cover"
              style={styles.images}
            /> */}
            <MyText style={styles.price}>Rs. {price}</MyText>
          </View>
        ))}
      </ScrollView>
      <MyText style={styles.contentText}>Society - {society}</MyText>
      <MyText>Status - {construction_status}</MyText>
    </View>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({
  root: {
    marginBottom: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    elevation: 5,
    backgroundColor: 'white',
    shadowColor: '#006AC2',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    shadowRadius: 30,
  },
  title: {
    fontSize: 20,
    marginBottom: 12,
  },
  images: {
    width: Dimensions.get('window').width - 56,
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
    marginRight: 8,
  },
  price: {
    position: 'absolute',
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 4,
    bottom: 0,
    fontWeight: 'bold',
  },
  contentText: {
    fontSize: 18,
  },
});
