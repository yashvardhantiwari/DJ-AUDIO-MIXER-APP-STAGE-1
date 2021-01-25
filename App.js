import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
class Blue_button extends Component {
  showSound1=()=> {
    alert('sorry"Sound1 is not playing"');
  }
  render() {
    return (
      
       <p><Button title="Sound1" color="blue" onPress={this.showSound1}></Button></p>
        
      
    );

  }


}
class Green_button extends Component {
  showSound2=()=> {
    alert('sorry"Sound2 is not playing"');
  }
  render() {
    return (
      
       <p><Button title="Sound2" color="green" onPress={this.showSound2}></Button></p>
        
      
    );

  }


}
class Violet_button extends Component {
  showSound3=()=> {
    alert('sorry"Sound3 is not playing"');
  }
  render() {
    return (
      
       <p><Button title="Sound3" color="violet" onPress={this.showSound3}></Button></p>
        
      
    );

  }


}

export default class App extends Component {
  showSound4=()=> {
    alert('sorry"Sound4 is not playing"')
  }
  render() {
    return (
      <View style={{marginTop:150,marginLeft:100,width:150}}>
        <Blue_button></Blue_button>
        <Green_button></Green_button>
        <Violet_button></Violet_button>
        <Button title="Sound4" color="red" onPress={this.showSound4}></Button>
       </View> 
    );
  }
}