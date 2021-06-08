 import React, { useState, useEffect } from 'react';
 import { StyleSheet, View, FlatList } from 'react-native';
 import { Ionicons } from '@expo/vector-icons';



 
export default class Favorites extends React.Component<{}, { active: boolean }>{

  constructor(props){
    super(props);
    this.state = {
      active: false, 
    }
  }


                render = () =>  (
                  <Ionicons id="heart" name="heart" size={40} 
                   style={ this.state.active ? this.styles.btnActive : this.styles.btn} 
                   onPress={() => this.setState({active: !this.state.active})} />
             )
                 
            styles = StyleSheet.create({
              btnActive: {
                color: "red",
              },
              btn: {
          
                color: "black",
          
              },
            });
 
    
    };

