import React, {Component} from 'react';

import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '/store/index';
import {
  chooseIfInsurance,
  chooseInsuranceCompany,
  chooseInsuranceCompanyTermination,
} from 'store/actions/action';

class InsuranceScreen extends Component<Props, {}> {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={style.container}>
        <View style={style.halfOne}>
          <Text style={style.title}>
            Har du ett försäkringsbolag i nuläget?
          </Text>
          <TouchableOpacity
            style={style.skipButton}
            onPress={() => {
              this.props.chooseInsuranceCompanyTermination(false);
              navigate('PaymentScreen');
            }}>
            <Text style={style.buttonText}>Skippa</Text>
          </TouchableOpacity>
        </View>
        <View style={style.middleView}>
          <TouchableOpacity
            style={style.companyButton}
            onPress={() => {
              this.props.chooseInsuranceCompany('Folksam');
            }}>
            <Text style={style.buttonText}>Folksam</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.companyButton}
            onPress={() => {
              this.props.chooseInsuranceCompany('IF');
            }}>
            <Text style={style.buttonText}>IF</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.companyButton}
            onPress={() => {
              this.props.chooseInsuranceCompany('Svedea');
            }}>
            <Text style={style.buttonText}>Svedea</Text>
          </TouchableOpacity>
        </View>

        {!!this.props.InsuranceCompany && (
          <View style={style.halfTwo}>
            <Text style={style.secondtitle}>
              Vill du att vi ska säga upp {this.props.InsuranceCompany} åt dig?
            </Text>
            <TouchableOpacity
              style={style.chooseButtonTwo}
              onPress={() => {
                this.props.chooseInsuranceCompanyTermination(true);
                navigate('PaymentScreen');
              }}>
              <Text style={style.buttonText}>JA</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.chooseButtonTwo}
              onPress={() => {
                this.props.chooseInsuranceCompanyTermination(false);
                navigate('PaymentScreen');
              }}>
              <Text style={style.buttonText}>NEJ</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={style.halfTwo} />
      </View>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    IfInsurance: state.insuranceReducer.IfInsurance,
    InsuranceCompany: state.insuranceReducer.InsuranceCompany,
  };
}
const mapDispatchToProps = {
  chooseIfInsurance,
  chooseInsuranceCompany,
  chooseInsuranceCompanyTermination,
};
const connector = connect(
  mapStateToProps,
  mapDispatchToProps,
);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  navigation: any;
  route: any;
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  middleView: {
    flex: 4,
    flexDirection: 'row',
  },
  halfOne: {
    flex: 2,
  },
  halfTwo: {
    flex: 2,
  },
  title: {
    marginLeft: 10,
    marginTop: 40,
    fontSize: 28,
    alignItems: 'center',
    alignSelf: 'center',
  },
  chooseButton: {
    marginTop: 20,
    alignItems: 'center',
    width: 80,
    height: 40,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#000',
    marginLeft: 70,
  },
  buttonText: {
    fontSize: 22,

    fontWeight: 'bold',
    textAlign: 'center',
  },
  companyButton: {
    alignItems: 'center',
    width: 100,
    height: 40,
    borderWidth: 2,
    borderColor: '#000',
    margin: 15,
  },
  secondtitle: {
    fontSize: 20,
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 10,
  },

  chooseButtonTwo: {
    alignSelf: 'center',
    alignItems: 'center',
    width: 60,
    height: 30,
    borderWidth: 2,
    borderColor: '#000',
    margin: 10,
  },
  skipButton: {
    alignSelf: 'center',
    width: 100,
    height: 40,
    borderWidth: 2,
    borderColor: '#000',
  },
});

export default connector(InsuranceScreen);
