import React from 'react';
import { Link } from 'react-router-dom';
import BottomNavBar from '../components/common/BottomNavBar';
import { Danggeun } from '../styles/LoginStyle';
import {
  BackImage,
  ProfileImage,
  ProfileName,
  TopBlock,
  TopText,
  ModifyEndButton,
} from '../styles/ProfileModifyStyle';

const ProfileModifyPage = () => {
  return (
    <>
      <Link to="/">
        <BackImage />
      </Link>
      <TopBlock />

      <TopText>프로필 수정</TopText>
      <ProfileImage />

      <ProfileName />
      <Link to="/profile">
        <ModifyEndButton>수정완료</ModifyEndButton>
      </Link>

      <Danggeun />
      <BottomNavBar />
    </>
  );
};

export default ProfileModifyPage;