import React from 'react';
import {Text, ScrollView, Image, View} from 'react-native';
import ConductCard from '../../components/ConductCard';
import styles from './styles';

const About = ({allConducts}) => {
  console.log(allConducts);
  return (
    <ScrollView style={styles.root}>
      <View style={styles.logoWrapper}>
        <Image source={require('../../assets/images/r10_logo.png')} />
      </View>

      <Text style={styles.descriptionText}>
        R10 is a conference that focuses on just about any topic related to dev.
      </Text>
      <Text style={styles.heading}>Date & Venue </Text>
      <Text style={styles.descriptionText}>
        The R10 conference will take place on Tuesday, June 27th, 2017 in
        Vancouver, BC.
      </Text>
      <Text style={styles.heading}>Code of Conduct</Text>
      {allConducts.map(conduct => {
        return <ConductCard conduct={conduct} key={conduct.id} />;
      })}
    </ScrollView>
  );
};

export default About;
