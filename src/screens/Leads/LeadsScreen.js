import {View, Switch, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Header from '../../component/Header/Header';
import styles from './style';
import HorizontalScrollBar from '../../navigation/HorizontalScrollBar';
import LeadCard from '../../component/Card/LeadCard';
import {
  AdhesiveLead,
  BathwareLead,
  kitchenSinkLead,
  SanitaryLead,
  TilesLead,
} from '../../Constant/Constant';

const LeadsScreen = () => {
  const [isLocal, setIsLocal] = useState(false);
  const toggleSwitch = () => setIsLocal(previousState => !previousState);

  const [selectedBox, setSelectedBox] = useState('tiles');
  return (
    <ScrollView style={styles.container}>
      <Header title={'Lead'} />
      <HorizontalScrollBar
        selectedBox={selectedBox}
        setSelectedBox={setSelectedBox}
      />
      <View style={styles.switch}>
        <Text style={styles.label}>View Local Householder Requirements</Text>
        <Switch
          trackColor={{false: '#767577', true: '#d5eced'}}
          thumbColor={isLocal ? '#176dcf' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isLocal}
        />
      </View>
      <View style={{borderColor: '#d7d9db', borderBottomWidth: 2}}></View>
      {selectedBox === 'tiles' ? (
        <LeadCard Data={TilesLead} category="tiles" />
      ) : (
        ''
      )}
      {selectedBox === 'sanitaryware' ? (
        <LeadCard Data={SanitaryLead} category="sanitaryware" />
      ) : (
        ''
      )}
      {selectedBox === 'kitchenSink' ? (
        <LeadCard Data={kitchenSinkLead} category="kitchenSink" />
      ) : (
        ''
      )}
      {selectedBox === 'BathWare' ? (
        <LeadCard Data={BathwareLead} category="BathWare" />
      ) : (
        ''
      )}
      {selectedBox === 'Adhesive' ? (
        <LeadCard Data={AdhesiveLead} category="Adhesive" />
      ) : (
        ''
      )}
    </ScrollView>
  );
};

export default LeadsScreen;
