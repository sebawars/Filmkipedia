import React from 'react';
import ReactPlayer from 'react-player';
import { Modal } from 'antd';

export const PlayerModal = ({ filmname, id, isModalVisible, handleCancel }) => {
  const streamerSrc = `${process.env.REACT_APP_STREAMER_HOST}:${process.env.REACT_APP_STREAMER_PORT}`;

  return (
    <Modal
      height='initial'
      centered
      width='90%'
      title={<h2 style={{ margin: 'auto' }}>{filmname}</h2>}
      visible={isModalVisible}
      footer={null}
      onCancel={handleCancel}
      style={{ textAlign: 'center' }}
      bodyStyle={{
        maxHeight: '90%',
        alignItems: 'center',
      }}
      destroyOnClose={true}
    >
      <ReactPlayer
        config={{
          file: {
            attributes: {
              crossOrigin: 'true',
            },
            tracks: [
              {
                kind: 'subtitles',
                src: `${streamerSrc}/video/${id}/caption`,
                srcLang: 'es',
                label: 'Español',
                default: true,
              },
            ],
          },
        }}
        width='100%'
        height='100%'
        url={`${streamerSrc}/video/${id}`}
        controls={true}
        stopOnUnmount
      />
    </Modal>
  );
};
