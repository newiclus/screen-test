import React from 'react';
import { Button, Image } from './Components/Base';
import { Raised } from './Components/';
import { ContentRow, Row, ContentBuy } from './Styles/App.styled';

function App() {
  return (
    <div className="Screen">
      <Image src="/rectangle@2x.jpg" alt="A bicycle on a street" border={14} />

      <ContentRow>
        <Row>
          <Raised amount={1300500.05} mt={153.84} />
        </Row>
        <Row textAlign="right">
          <Button name="1538" icon="favorite_border" border={14} />
        </Row>
      </ContentRow>

      <ContentBuy>
        <Button name="Buy" color="blueSky" size="large" />
      </ContentBuy>
    </div>
  );
}

export default App;
