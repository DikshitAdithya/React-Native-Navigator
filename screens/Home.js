import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';


export default class  Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Fellowers:["priya,shalini,abrana"],
      Remo:["Dikshit"]
    }
  }




  render(){
  return (
    <View style={styles.container}>
      <Text>move to next page</Text>
      <Button
       title="NEXT"
       onPress ={() => {
         this.props.navigation.navigate("Next");
       } }      
      />
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
