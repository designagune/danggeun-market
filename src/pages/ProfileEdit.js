// 프로필 -> 프로필 수정 화면

import React from 'react';
import { Link } from 'react-router-dom';
import { Danggeun } from '../components/layout/DanggeunImage';
import {
  TopLine,
  ProfileImage,
  Camera,
  NameEdit,
  EndText,
  TextBlock,
  TopDiv,
  BackArrow,
} from '../styles/ProfileEditStyle';
import { LinkStyle } from '../styles/LinkStyle';

const ProfileEdit = ({ name, inputName, onChange, onChangeName }) => {
  const onInputChange = (e) => onChange(e.target.value);

  const onClick = () => {
    onChangeName(inputName);
    onChange('');
  };
  return (
    <LinkStyle>
      <TopDiv>
        <Link to="profile">
          <BackArrow />
        </Link>
        <TextBlock>프로필 수정</TextBlock>
        <Link to="/profile">
          <EndText onClick={onClick}>완료</EndText>
        </Link>
      </TopDiv>

      <TopLine />
      <ProfileImage />
      <Camera />
      <h1>{name}</h1>
      <NameEdit onChange={onInputChange} value={inputName} />
      <Danggeun />
    </LinkStyle>
  );
};

export default ProfileEdit;
