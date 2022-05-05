import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button, Divider, Layout, TopNavigation} from '@ui-kitten/components';

export const HomeScreen = ({navigation}) => {
  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title="MyApp" alignment="center" />
      <Divider />
      <Layout style={styles.layout}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
