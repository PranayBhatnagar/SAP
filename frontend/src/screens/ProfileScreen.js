import React from 'react';
import styled from 'styled-components';

const ProfileScreen = () => {
  // Dummy data for demonstration
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    greenCredits: 150
  };

  return (
    <Container>
      <ProfileCard>
        <ProfileImage src="https://via.placeholder.com/150" alt="Profile" />
        <ProfileInfo>
          <Name>{user.name}</Name>
          <Email>{user.email}</Email>
          <GreenCredits>Green Credits: {user.greenCredits}</GreenCredits>
        </ProfileInfo>
      </ProfileCard>
    </Container>
  );
};

export default ProfileScreen;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f4f8;
`;

const ProfileCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
  margin-bottom: 10px;
  color: #2c3e50;
`;

const Email = styled.p`
  margin-bottom: 10px;
  color: #7f8c8d;
`;

const GreenCredits = styled.p`
  font-weight: bold;
  color: #27ae60;
`;
