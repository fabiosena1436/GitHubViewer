import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
  background-color: white;
  border-radius: 10px;
  padding: ${theme.spacing.medium}px;
  margin: ${theme.spacing.medium}px;
  
  ${Platform.select({
    ios: `
      shadow-color: #000;
      shadow-offset: 0px 2px;
      shadow-opacity: 0.25;
      shadow-radius: 3.84px;
    `,
    android: `
      elevation: 3;
    `
  })}
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  align-self: center;
`;

export const InfoContainer = styled.View`
  align-items: center;
  margin-top: ${theme.spacing.medium}px;
`;

export const Name = styled.Text`
  font-size: ${theme.fontSize.large}px;
  font-weight: bold;
  color: ${theme.colors.text};
`;

export const Bio = styled.Text`
  font-size: ${theme.fontSize.medium}px;
  color: ${theme.colors.gray};
  text-align: center;
  margin-top: ${theme.spacing.small}px;
`;

export const Stats = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: ${theme.spacing.medium}px;
`;

export const StatItem = styled.View`
  align-items: center;
`;

export const StatNumber = styled.Text`
  font-size: ${theme.fontSize.medium}px;
  font-weight: bold;
  color: ${theme.colors.primary};
`;

export const StatLabel = styled.Text`
  font-size: ${theme.fontSize.small}px;
  color: ${theme.colors.gray};
`;