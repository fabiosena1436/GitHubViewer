// src/screens/Profile/styles.js
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import theme from '../../styles/theme';

export const Header = styled.View`
  background-color: ${theme.colors.primary};
  height: 250px;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 16px;
  top: ${Platform.OS === 'ios' ? '60px' : '20px'};
  z-index: 1;
`;

export const AvatarContainer = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: white;
  padding: 3px;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`;

export const Username = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const RepositoryName = styled.Text`
  font-size: 16px;
  color:${theme.colors.text};
  font-weight: bold;
`;

export const RepositoryLanguage = styled.Text`
  font-size: 14px;
  color: ${theme.colors.gray};
  margin-top: 4px;
`;