import React from 'react';
import { ActivityIndicator } from 'react-native';
import * as S from './styles';

const Button = ({ onPress, loading, children }) => {
  return (
    <S.ButtonContainer onPress={loading ? null : onPress}>
      {loading ? (
        <ActivityIndicator color="#FFF" />
      ) : (
        <S.ButtonText>{children}</S.ButtonText>
      )}
    </S.ButtonContainer>
  );
};

export default Button;