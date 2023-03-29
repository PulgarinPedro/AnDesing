import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

const App: React.FC = () => (
  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://m.gjcdn.net/game-screenshot/200/18056302-upcjxwfr-v4.webp"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://images7.alphacoders.com/115/1151373.png" />}
      title="Fnaf Js's"
      description="Un juego el cual, se basa en el original pero lo mas interesante que presenta es de
      su nueva innovacion, como lo es el rediseño de los animatronicos, de ser unas maquinas de metal, 
      a titeres que posterior dan mas miedo que los originales."
    />
  </Card>
);

export default App;