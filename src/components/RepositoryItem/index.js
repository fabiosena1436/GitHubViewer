import React, { memo } from 'react';
import * as S from './styles';

const RepositoryItem = memo(({ item }) => (
  <S.Container>
    <S.Name>{item.name}</S.Name>
    <S.Language>{item.language || 'N/A'}</S.Language>
  </S.Container>
));

export default RepositoryItem;