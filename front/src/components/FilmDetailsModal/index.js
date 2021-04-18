import React from 'react';
import { Modal } from 'antd';
import { FilmCard } from '../FilmCard';

export const FilmDetailsModal = ({ isModalVisible, handleCancel, film }) => {
  const { filmname } = film;

  return (
    <Modal visible={isModalVisible} width='30em' footer={null} title={filmname} onCancel={handleCancel} centered={true}>
      <FilmCard film={film} />
    </Modal>
  );
};
