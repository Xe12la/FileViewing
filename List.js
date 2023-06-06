import React, { useState } from 'react';


// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

const App = ({navigation}) => {
  let listViewRef;
  const [dataSource, setDataSource] = useState([
    { id: 1, title: 'Yukihira Soma', photo: require('./assets/p1.jpg'), seat: 'First Seat', email: 'soma@yahoo.com'},
    { id: 2, title: 'Satoshi Isshiki', photo: require('./assets/p2.jpg'), seat: 'Second Seat', email: 'satoshi@yahoo.com' },
    { id: 3, title: 'Terunori Kuga', photo: require('./assets/p3.jpg'), seat: 'Third Seat', email: 'kuga@yahoo.com' },
    { id: 4, title: 'Akira Hayama', photo: require('./assets/p4.jpg'), seat: 'Fourth Seat', email: 'hayama@yahoo.com' },
    { id: 5, title: 'Ryo Kurokiba', photo: require('./assets/p5.jpg'), seat: 'Fifth Seat', email: 'kurokiba@yahoo.com' },
    { id: 6, title: 'Alice Nakiri', photo: require('./assets/p6.jpg'), seat: 'Sixth Seat', email: 'alice@yahoo.com' },
    { id: 7, title: 'Takumi Aldini', photo: require('./assets/p7.jpg'), seat: 'Seventh Seat', email: 'takumi@yahoo.com' },
    { id: 8, title: 'Etsuya Eizan', photo: require('./assets/p8.jpg'), seat: 'Eighth Seat', email: 'eizan@yahoo.com' },
    { id: 9, title: 'Nene Kinokuni', photo: require('./assets/p9.jpg'), seat: 'Ninth Seat', email: 'nene@yahoo.com' },
    { id: 10, title: 'Megumi Tadokoro', photo: require('./assets/p10.jpg'), seat: 'Tenth Seat', email: 'megumi@yahoo.com' },

  ]);

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <View>
        <Image source = {item.photo} style={styles.photoStyle}>
        </Image>

      <Text style={styles.itemStyle} onPress={() => (item.title, navigation.navigate('Details', 
      {title:item.title,
      id:item.id,
      photo:item.photo,
      seat:item.seat,
    email:item.email})
      )}>
        {item.title.toUpperCase()}
       
      </Text>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert(' Title : ' + item.title);
  };
  const upButtonHandler = () => {
    //OnCLick of Up button we scrolled the list to top
    listViewRef.scrollToOffset({ offset: 0, animated: true });
  };

  const downButtonHandler = () => {
    //OnCLick of down button we scrolled the list to bottom
    listViewRef.scrollToEnd({ animated: true });
  };

 

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={dataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        ref={(ref) => {
          listViewRef = ref;
        }}
      />
      
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={upButtonHandler}
        style={styles.upButtonStyle}>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/arrow_up.png',
          }}
          style={styles.upButtonImageStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={downButtonHandler}
        style={styles.downButtonStyle}>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/arrow_down.png',
          }}
          style={styles.downButtonImageStyle}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    padding: 50,
    fontSize: 20,
    left: 50,
    top:15,
  },
  photoStyle: {
    width: 30,
    height: 30,
    padding: 30,
    top:50,
    left: 10, 
    position: 'absolute',
    
  },
  upButtonStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 70,
  },
  upButtonImageStyle: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
  },
  downButtonStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    top: 70,
  },
  downButtonImageStyle: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
  },
});

export default App;