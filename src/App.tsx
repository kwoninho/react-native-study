/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

class CardHeader extends React.Component {
  public render() {
    return (
        <View style={styles.header}>
          <Image 
            style={styles.img} 
            source={{ uri : 'https://via.placeholder.com/150x150' }} 
          />
          <View style={{
            flex: 1,
            flexDirection: 'column',
            marginLeft: 2
          }}>
            <Text style={styles.headerText}>sdihvoihfoeihfoiehfioe</Text>
            <Text style={styles.headerText}>5 min ago</Text>
          </View>
        </View>
    );
  }  
}

class CardBody extends React.Component {
  public render() {
    return (
        <View style={styles.body}>
          <Text>aklsfesufheo;h wleifiweu fiuewh uhewfiwuegfi ewgfyi</Text>
        </View>
    );
  }  
}

class CardFooter extends React.Component {
  public render() {
    return (
        <View style={styles.footer}>
          <Text style={styles.footerText}>like</Text>
          <Text style={styles.footerText}>comment</Text>
          <Text style={styles.footerText}>share</Text>
        </View>
    );
  }  
}


class CardItem extends React.Component {
  public render() {
    return (
        <View style={styles.card}>
          <CardHeader></CardHeader>
          <CardBody></CardBody>
          <CardFooter></CardFooter>
        </View>
    );
  }  
}

export default class AwesomeProject extends Component {
  public render() {
    return (
      <ScrollView>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  card: {
    margin: 20,
    flex: 1,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginBottom: 1
  },
  header: {
    margin: 10,
    flexDirection: 'row'
  },
  body: {
    margin: 10,    
  },
  footer: {
    flexDirection: 'row',
    justifyContent: "center",   
    alignItems: "center",
  },
  headerText: {
    color: "grey"    
    
  },
  bodyText: {
    
  },
  footerText: {
    padding: 10,
    color: "grey"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  img: {
    width: 50,
    height: 50
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
