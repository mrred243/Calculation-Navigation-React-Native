import React from 'react';
import{  View, Text, StyleSheet, FlatList} from 'react-native';

const HistoryScreen = (props) =>{
  navigationOptions= { title:'History',};


const {params} = props.navigation.state;
return(
  <View style={styles.container}>
    <Text>History</Text>
    <FlatList data={params.data}
              renderItem={({item}) =><Text >{item.key}</ Text>}/>
  </View>);
  };

  export default HistoryScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
