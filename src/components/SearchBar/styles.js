import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
  margin: ${theme.spacing.medium}px;
`;

export const Input = styled.TextInput`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.medium}px;
  border-radius: 8px;
  font-size: ${theme.fontSize.medium}px;
`;