import React from 'react';
import styled from 'styled-components';

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 18px;
`;

const Caption = styled.div`
  display: flex;
  flex-direction: row;
`;

const CaptionName = styled.div`
  font-weight: bold;
`;

const CaptionDate = styled.div`
  color: #808080;
  font-size: 11px;
  margin-left: 9px;
  display: flex;
  align-items: flex-end;
  padding-bottom: 1.8px;
`;

const CommentText = styled.div`
  background-color: #f2fbff;
  border: 1px solid #cfcfcf;
  padding: 16px 17px 14px 20px;
  margin-top: 11px;
  line-height: 18px;
  position: relative;

  ::before {
    content: "";
    width: 0;
    height: 0;
    border-bottom: 10px solid #cfcfcf;
    border-right: 10px solid transparent;
    position: absolute;
    left: 22px;
    top: -10px;
  }

  ::after {
    content: "";
    width: 0;
    height: 0;
    border-bottom: 9px solid #f2fbff;
    border-right: 9px solid transparent;
    position: absolute;
    left: 23px;
    top: -7.5px;
  }
`;

export default ({ name, date, text }) => (
  <Comment>
    <Caption>
      <CaptionName>{name}</CaptionName>
      <CaptionDate>{date}</CaptionDate>
    </Caption>
    <CommentText>{text}</CommentText>
  </Comment>
);