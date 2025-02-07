import React from 'react';
import * as S from './styles';

const SearchBar = ({ value, onChangeText, onSubmit }) => {
  return (
    <S.Container>
      <S.Input
        value={value}
        onChangeText={onChangeText}
        placeholder="Digite o username do GitHub"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="Search"
        onSubmitEditing={onSubmit}
      />
    </S.Container>
  );
};

export default SearchBar;