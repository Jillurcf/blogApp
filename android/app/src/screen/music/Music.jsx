import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {data} from './index';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
console.log(data);
const {width, height} = Dimensions.get('window');
const Music = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Music</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingLeft: 0}}>
        <View style={{gap: height * 0.015}}>
          {data.map((category, index) => {
            return (
              <View style={{borderRadius: 10, borderColor: "#DD3333", borderWidth: 1, padding: width * 0.02,}} key={index}>
                {/* <TouchableOpacity > */}
                <Image
                  style={{width: '100%', height: height * 0.2, borderRadius: 10}}
                  source={category.icon}
                  width={100}
                  height={100}
                />
                <TouchableOpacity
                  style={{padding: width * 0.002, backgroundColor: '#F4C0C0', width: width * 0.15, alignItems: "center", paddingVertical: height * 0.005, borderRadius: 5}}>
                  <Text style={{color: "#DD3333"}}>{category.category}</Text>
                </TouchableOpacity>
                <Text>{category.date}</Text>
                <Text>{category.title}</Text>
                {/* </TouchableOpacity> */}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Music;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: width * 0.005,
  },
  //   titleText: {
  // color: "#0668E3",
  // fontWeight: "bold",
  // fontSize: width * 0.05,
  // textAlign: "center",
  // marginTop: width * 0.05

  //   },
  scrollView: {
    paddingHorizontal: width * 0.05,
  },
  // grid: {
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   justifyContent: 'center',

  // },
  // gridItem: {
  //    width: width * 0.3,
  //  height: height * 0.09,
  //   paddingVertical: height * 0.06,
  //   alignItems: "center",
  // }
});
