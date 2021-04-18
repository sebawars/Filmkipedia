import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { Modal } from 'antd';

export const PlayerModal = ({ filmname, video, isModalVisible, handleCancel }) => {
  return (
    <Modal
      height='80%'
      width='70%'
      title={<h2>{filmname}</h2>}
      visible={isModalVisible}
      footer={null}
      onCancel={handleCancel}
      bodyStyle={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
      }}
      destroyOnClose={true}
    >
      <ReactPlayer
        config={{
          file: {
            attributes: {
              crossOrigin: 'true',
            },
          },
        }}
        width='100%'
        height='100%'
        url={video}
        controls={true}
      />
    </Modal>
  );
};
