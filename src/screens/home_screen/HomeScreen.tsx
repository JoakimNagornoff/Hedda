import React, {Component} from 'react';
import {View, Text, Button,TouchableOpacity, StyleSheet, Modal} from 'react-native';
import auth from '@react-native-firebase/auth';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '/store/index';
import {addAnimal, submitToFirebase, AuthLogoutPerson} from '/store/actions/action';
import ChatBot from 'react-native-chatbot';



interface State {
  showAddAnimal : boolean,
  startChat: boolean,
}

class Homescreen extends Component<Props, State, {}> {  
  constructor(props){
    super(props);
    this.state = {
      showAddAnimal : false,
      startChat: false,
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
  startChat = () => {
    this.setState({
      startChat: true
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
    this.state.showAddAnimal
    const steps = [
      {
        id: '0',
        message: 'Welcome to react chatbot!',
        trigger: '1',
      },
      {
        id: '1',
        user: true,
        inputAttributes: {
          keyboardType: 'email-address'
        }
      },
    {
        id: '2',
        message: 'Hej',
       end: true,
       
      }
    ];
   

    if(this.state.showAddAnimal) {
      return (
        <View style={style.middle}>
          <TouchableOpacity
            style={style.button}
            onPress={() => {
              this.props.addAnimal('Hund');
              navigate('DogScreen');
            }}>
            <Text style={style.buttonText}>Hund</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.button}
            onPress={() => {
              this.props.addAnimal('Katt');
              
            }}>
            <Text style={style.buttonText}>Katt</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.button}
            onPress={() => {
              this.props.addAnimal('Häst');
             
            }}>
            <Text style={style.buttonText}>Häst</Text>
          </TouchableOpacity>
        </View>
      )
    }

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={style.topview}>
        <Text>Welcome {user?.displayName}</Text>
        </View>
        <View style={style.middle}>
        <Button
          onPress={() => this.showAddAnimal()}
          title="Lägg till ett djur"
        />
        <TouchableOpacity
          onPress={() => {
            this.setState({startChat: true});
          }}
        ><Text>här</Text></TouchableOpacity>
        <Modal animationType="slide"
          transparent={true}
          visible={this.state.startChat}
        >
         <View style={{flex: 1,}}>
              <ChatBot steps={steps}
                customStyle={{ borderColor: '#fff' }}
                contentStyle={{ backgroundColor: '#fff' }} />
            </View>
            </Modal>
     
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
    isSuccess: state.personReducer.fireBaseSuccess
  };
}
const mapDispatchToProps = {
  addAnimal,
  submitToFirebase,
  AuthLogoutPerson
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

  }
});

export default connector( Homescreen);
