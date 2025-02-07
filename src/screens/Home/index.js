// src/screens/Home/index.js
import React, { useState, useCallback } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import debounce from 'lodash/debounce';
import Alert from '../../components/Alert';
import * as S from './styles';

const Home = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = useCallback(async (searchUsername) => {
    if (!searchUsername.trim()) {
      setError('Por favor, insira um nome de usuário.');
      setShowAlert(true);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${searchUsername}`);
      const data = await response.json();

      if (!response.ok) {
        if (response.status === 404) {
          setError('Usuário não encontrado. Por favor insira outro nome.');
        } else {
          setError('Ocorreu um erro de rede. Verifique sua conexão com a Internet e tente novamente mais tarde.');
        }
        setShowAlert(true);
        return;
      }

      navigation.navigate('Profile', { userData: data });
    } catch (error) {
      setError('Ocorreu um erro de rede. Verifique sua conexão com a Internet e tente novamente mais tarde.');
      setShowAlert(true);
    } finally {
      setIsLoading(false);
    }
  }, [navigation]);

  const debouncedSearch = useCallback(
    debounce((text) => handleSearch(text), 300),
    [handleSearch]
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.Header>
          <S.HeaderTitle>GitHub Viewer</S.HeaderTitle>
        </S.Header>
        
        <S.Content>
          <S.Input
            placeholder="Digite o username do GitHub"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="search"
            onSubmitEditing={() => handleSearch(username)}
            editable={!isLoading}
          />
          <S.SearchButton 
            onPress={() => handleSearch(username)}
            disabled={isLoading}
          >
            <S.SearchText>
              {isLoading ? 'BUSCANDO...' : 'BUSCAR'}
            </S.SearchText>
          </S.SearchButton>
        </S.Content>

        <Alert
          visible={showAlert}
          message={error}
          onClose={() => setShowAlert(false)}
        />
      </S.Container>
    </TouchableWithoutFeedback>
  );
};

export default React.memo(Home);