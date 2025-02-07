import React from 'react';
import * as S from './styles';

const UserCard = ({ user }) => {
  return (
    <S.Container>
      <S.Avatar source={{ uri: user.avatar_url }} />
      <S.InfoContainer>
        <S.Name>{user.name || user.login}</S.Name>
        {user.bio && <S.Bio>{user.bio}</S.Bio>}
        <S.Stats>
          <S.StatItem>
            <S.StatNumber>{user.public_repos}</S.StatNumber>
            <S.StatLabel>Repositórios</S.StatLabel>
          </S.StatItem>
          <S.StatItem>
            <S.StatNumber>{user.followers}</S.StatNumber>
            <S.StatLabel>Seguidores</S.StatLabel>
          </S.StatItem>
          <S.StatItem>
            <S.StatNumber>{user.following}</S.StatNumber>
            <S.StatLabel>Seguindo</S.StatLabel>
          </S.StatItem>
        </S.Stats>
      </S.InfoContainer>
    </S.Container>
  );
};

export default UserCard;