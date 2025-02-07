import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.text};
  padding: ${theme.spacing.medium}px;
`;

export const Content = styled.View`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.medium}px;
  padding: ${theme.spacing.large}px;
  width: 90%;
  max-width: 320px;
  align-items: center;
`;

export const Message = styled.Text`
  font-size: ${theme.fontSize.medium}px;
  color: ${theme.colors.text};
  text-align: center;
  margin-bottom: ${theme.spacing.large}px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${theme.colors.primary};
  padding: ${theme.spacing.small}px ${theme.spacing.large}px;
  border-radius: ${theme.borderRadius.small}px;
  min-width: 100px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${theme.colors.white};
  font-size: ${theme.fontSize.medium}px;
  font-weight: bold;
`;