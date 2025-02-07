// src/screens/Profile/index.js
import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as S from './styles';

const Profile = ({ route, navigation }) => {
  const { userData } = route.params;
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRepositories = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(userData.repos_url);
      const data = await response.json();
      setRepositories(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [userData.repos_url]);

  useEffect(() => {
    fetchRepositories();
  }, [fetchRepositories]);

  const renderItem = ({ item }) => (
    <View style={{ 
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#E0E0E0'
    }}>
      <S.RepositoryName>{item.name}</S.RepositoryName>
      <S.RepositoryLanguage>{item.language || 'N/A'}</S.RepositoryLanguage>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <S.Header>
        <S.BackButton onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={32} color="#FFFFFF" />
        </S.BackButton>
        
        <View style={{ alignItems: 'center' }}>
          <S.AvatarContainer>
            <S.Avatar 
              source={{ uri: userData.avatar_url }}
              resizeMode="cover"
            />
          </S.AvatarContainer>
          <S.Username>{userData.name || userData.login}</S.Username>
        </View>
      </S.Header>

      <FlatList
        data={repositories}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        refreshing={isLoading}
        onRefresh={fetchRepositories}
      />
    </View>
  );
};

export default Profile;