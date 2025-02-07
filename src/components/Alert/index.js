import React from 'react';
import { Modal } from 'react-native';
import * as S from './styles';

const Alert = ({ visible, message, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
    >
      <S.Container>
        <S.Content>
          <S.Message>{message}</S.Message>
          <S.Button onPress={onClose}>
            <S.ButtonText>OK</S.ButtonText>
          </S.Button>
        </S.Content>
      </S.Container>
    </Modal>
  );
};

export default Alert;