/**
 * Sample React Native App
 * @author Jasim
 */
'use strict';

var React = require('react-native');
var Icon = require('react-native-vector-icons/FontAwesome');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} = React;

export class Infobar extends React.Component{

  constructor(args) {
    super(args);
    this.state = {
      stack: this.props.navigator.state.routeStack
    };
  }

  render() {
    return (
      <View style={styles.infobar}>
        <View style={{flexDirection:'row'}}>
          <Icon style={[styles.infoText, {fontSize: 15}]} name="home"   />
        {this.state.stack.map((obj, i)=>{
          return (
            <TouchableHighlight onPress={()=>{
                this.props.navigator.popToRoute(this.state.stack[i])
              }}>
            <Text style={{color: '#FFF', marginLeft: 2, marginTop: 3, fontSize: 15}}>
              {obj.title}
              {(()=> {
                if(i<this.state.stack.length - 1)
                return ' > '
              })()}
            </Text>
            </TouchableHighlight>
          );
        })}
        </View>
        <View style={{flex:1}}></View>
        <Text style={{color: '#FFF', marginLeft: 2, marginTop: 3, fontSize: 15}}>Room No - {this.props.roomNo}</Text>
      <Text style={{color: '#FFF', marginLeft: 5, marginRight:0 , marginTop: 3, fontSize: 15}}>|</Text>
        <View style={{flexDirection:'row'}}>
            <Icon style={[styles.infoText, {fontSize: 15}]} name="clock-o"   />
            <Text style={{color: '#FFF', marginLeft: 2, marginTop: 3, fontSize: 15}}>Saturday, March 12, 2015</Text>
        </View>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  infobar: {
    height: 45,
    width: null,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#766946'
  },
  icon: {
    color: '#FFF',
    width: 32,
    height: 32,
    fontSize: 30,
    marginLeft: 10
  },
  infoText: {
    color: '#FFF',
    marginLeft: 10,
    marginTop: 5
  }
});
