import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
  padding: ${theme.spacing.medium}px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${theme.colors.lightGray};
  background-color: ${theme.colors.white};
`;

export const Name = styled.Text`
  font-size: ${theme.fontSize.medium}px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 4px;
`;

export const Language = styled.Text`
  font-size: ${theme.fontSize.small}px;
  color: ${theme.colors.gray};
`;