import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Comment from './Comment';
import CommentForm from './CommentForm';

import {
  mainTheme,
  secondTheme,
  thirdTheme,
} from './themes';

const Content = styled.Text`
  font-size: 22px;
  text-align: center;
`;

const Title = styled(Content)`
  color: palevioletred;
`;

const CommentsList = styled.View`
  margin: 20px;
`;

export default () => {
  const [comments, setComments] = useState([]);

  const commentsList = comments.map(comment => (
    <Comment
      key={comment.text+comment.date+comment.name}
      name={comment.name}
      date={comment.date}
      text={comment.text}
    />
  ));

  const addComment = (comment) => {
    setComments([
      ...comments,
      comment,
    ]);
  }; 

  return (
    <ThemeProvider theme={mainTheme}>
      <>
        <Title>
          Styled Title
        </Title>
        <Content>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
          Optio quam, architecto quae dolores
          nesciunt nihil hic eos voluptas, nemo
          error alias quisquam, perferendis animi
          suscipit dolore sapiente. Nemo, ab odit.
        </Content>
        <CommentForm 
          sendData={addComment}
        />
        <CommentsList>
          {commentsList}
        </CommentsList>
      </>
    </ThemeProvider>
  );
}
