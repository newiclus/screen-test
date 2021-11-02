import React, { useState } from 'react';

import { Button, Image } from './Components/Base';
import { Likes, Raised, Search } from './Components';
import { ContentRow, Row, ContentBuy, Divider } from './Styles/App.styled';
import { DATA } from './Data/db';

function App() {
  const { likes, users } = DATA;
  const [iLiked, setILiked] = useState(false);
  const [countLikes, setCountLikes] = useState(1538);

  const handleLike = () => {
    if (!iLiked) {
      setCountLikes(countLikes + 1);
    } else {
      setCountLikes(countLikes - 1);
    }

    setILiked(!iLiked);
  };

  return (
    <div className="Screen">
      <Image src="/rectangle@2x.jpg" alt="A bicycle on a street" border={14} />

      <ContentRow>
        <Row>
          <Raised amount={1300500.05} mt={153.84} />
        </Row>
        <Row textAlign="right">
          <Button
            actived={iLiked}
            name={countLikes.toString()}
            icon={iLiked ? 'favorite' : 'favorite_border'}
            border={14}
            color="lightGrey2"
            onClick={handleLike}
          />
        </Row>
      </ContentRow>

      <ContentBuy>
        <Button name="Buy" color="blueSky" size="large" />
      </ContentBuy>

      <Likes value={likes} />

      <Divider />

      <Search data={users || []} />
    </div>
  );
}

export default App;
