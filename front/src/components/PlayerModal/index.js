import React from 'react';
import ReactPlayer from 'react-player';
import { Modal } from 'antd';

export const PlayerModal = ({ filmname, id, isModalVisible, handleCancel }) => {
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
                src: `http://192.168.0.36:4000/video/${id}/caption`,
                srcLang: 'es',
                label: 'Español',
                default: true,
              },
            ],
          },
        }}
        width='100%'
        height='100%'
        url={`http://192.168.0.36:4000/video/${id}`}
        controls={true}
      />
      {/* <video controls muted autoPlay crossOrigin='anonymous'>
        <source src={`http://localhost:4000/video/6`} type='video/mp4'></source>
        <track
          label='English'
          kind='captions'
          srcLang='en'
          src={`http://localhost:4000/video/6/caption`}
          default
        ></track>
      </video> */}
    </Modal>
  );
};
