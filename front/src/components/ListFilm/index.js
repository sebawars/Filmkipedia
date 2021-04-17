import React, { useState } from 'react';
import { Title, TitleYear } from './styles';
import { filmByIdSelector } from '../../redux/selectors/filmSelector';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player/youtube';
import { Modal, Card } from 'antd';
import { PlaySquareOutlined, EditOutlined } from '@ant-design/icons';
import './styles.css';
import { Col } from 'antd';

export const ListFilm = ({ id }) => {
  const state = useSelector((state) => state);
  const film = filmByIdSelector(id)(state);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    film && (
      <Col>
        <Card
          style={{ display: 'flex' }}
          className={'film-card'}
          onClick={showModal}
          bodyStyle={{ padding: 0, display: 'flex', flex: 1, flexDirection: 'column' }}
          cover={<img src={film.image} />}
          hoverable
          actions={[<PlaySquareOutlined key='setting' />, <EditOutlined key='edit' />]}
        >
          <TitleYear>
            <Title>{film.filmname + ` (${film.release})`}</Title>
          </TitleYear>
        </Card>
        <Modal
          height='80%'
          width='70%'
          title={<h2>{film.filmname}</h2>}
          visible={isModalVisible}
          footer={null}
          onCancel={handleCancel}
          bodyStyle={{ display: 'flex', flex: 1, flexDirection: 'column' }}
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
            url={film.video}
            controls={true}
          />
        </Modal>
      </Col>
    )
  );
};
