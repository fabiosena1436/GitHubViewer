import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${theme.colors.primary};
  padding: ${theme.spacing.medium}px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color:${theme.colors.white};
  font-size: ${theme.fontSize.medium}px;
  font-weight: bold;
`;