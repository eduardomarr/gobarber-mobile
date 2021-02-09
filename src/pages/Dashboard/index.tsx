import React from 'react';

import { Text, Button } from 'react-native';

import { View } from './styles';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View>
      <Text>Dashboard</Text>
      <Button title="Sair" onPress={signOut}/>
    </View>
  );
};

export default Dashboard;
