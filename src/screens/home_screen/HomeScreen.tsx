import React, {Component} from 'react';
import {View, Text, Button,TouchableOpacity, StyleSheet, Modal} from 'react-native';
import auth from '@react-native-firebase/auth';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '/store/index';
import {addAnimal, submitToFirebase, AuthLogoutPerson, } from '/store/actions/action';



interface State {
  showAddAnimal : boolean,
}

class Homescreen extends Component<Props, State, {}> {  
  constructor(props){
    super(props);
    this.state = {
      showAddAnimal : false,
    }
  }

  showAddAnimal =() => {
    this.setState({
      showAddAnimal: true
    })
  }
  home = () => {
    this.setState({
      showAddAnimal: false
    })
  }


  singOutUser() {
    this.props.AuthLogoutPerson(() => {
      this.props.navigation.navigate('LogIn');
    });
  }

  
  
  
  
  render() {  
    const {navigate} = this.props.navigation;
    const user = auth().currentUser;
    console.log(user);
   

    if(this.state.showAddAnimal) {
      return (
      
        <View style={style.addAimalView}>
          <TouchableOpacity
            style={style.button}
            onPress={() => {
              this.props.addAnimal('Hund');
              navigate('AnimalScreen');
              this.setState({
                showAddAnimal: false
              })
            }}>
            <Text style={style.buttonText}>Hund</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.button}
            onPress={() => {
              this.props.addAnimal('Katt');
              
              navigate('AnimalScreen');
              this.setState({
                showAddAnimal: false
              })
              
            }}>
            <Text style={style.buttonText}>Katt</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.button}
            onPress={() => {
              this.props.addAnimal('Häst');
              navigate('AnimalScreen')
              this.setState({
                showAddAnimal: false
              })
             
            }}>
            <Text style={style.buttonText}>Häst</Text>
          </TouchableOpacity>
          </View>
         
      )
    } 

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={style.topview}>
        <Text style={style.headerTitle}>Välkommen {user?.displayName} till Lassie djurförsäkring</Text>
        <View style={{marginTop: 32}}><Text style={style.headerText}>Lassie erbjuder djurförsäkring för din katt,hund eller häst</Text></View>
        
        <View style={{marginTop: 32}}>
        <Text style={style.headerText}>Klicka vidare på lägg till ett djur för ditt prisförslag</Text>
        </View>
        </View>
        <View style={style.middle}>
        <Button
          onPress={() => this.showAddAnimal()}
          title="Lägg till ett djur"
        />
       
     
        </View>
      
        <TouchableOpacity onPress={() => this.singOutUser()} ><Text>Sign Out!</Text></TouchableOpacity>
    
      </View>
    
    );
    
  
}
  
}

function mapStateToProps(state: RootState) {
  return {
    animalType: state.animalReducer.type,
    store: state,
    isSuccess: state.personReducer.fireBaseSuccess,

  };
}
const mapDispatchToProps = {
  addAnimal,
  submitToFirebase,
  AuthLogoutPerson,
  
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps,
);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  navigation: any;
};

const style = StyleSheet.create({
  container: {
    flex: 1,

  },
  topview: {
    flex: 2,
  },
  middle: {
    flex: 2,
  },
  addAimalView : {
    marginTop: 150,
  },

  button: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 382,
    height: 80,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: '#000',
    marginLeft: 5,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  customStyle: {
    fontSize: 14,
    marginBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    marginLeft: 6,

  },
  headerTitle: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  }
});

export default connector( Homescreen);
