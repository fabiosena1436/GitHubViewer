// src/screens/Home/styles.js
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import theme from '../../styles/theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.white};
`;

export const Header = styled.View`
  background-color: ${theme.colors.primary};
  padding: ${theme.spacing.medium}px;
  height: 60px;
  justify-content: center;
`;

export const HeaderTitle = styled.Text`
  color: ${theme.colors.white};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const Content = styled.View`
  padding: ${theme.spacing.medium}px;
  margin-top: 300px;
`;

export const Input = styled.TextInput`
  height: 48px;
  font-size: ${theme.fontSize.medium}px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.primary};
`;

export const SearchButton = styled.TouchableOpacity`
  margin-top: 50px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
  border-radius: ${Platform.OS === 'ios' ? '4px' : '2px'};
  width: 120px;
  align-self: center;
  ${Platform.OS === 'android' && `
    elevation: 2;
  `}
`;

export const SearchText = styled.Text`
  color: ${theme.colors.white};
  font-size: ${Platform.OS === 'ios' ? '17px' : '14px'};
  ${Platform.OS === 'android' && `
    font-weight: 500;
  `}
`;