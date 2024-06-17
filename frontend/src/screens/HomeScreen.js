import React from 'react';
import styled from 'styled-components';

const HomeScreen = () => {
  return (
    <Container>
      <Header>
        <Title>Welcome to Green Credit Management</Title>
        <Subtitle>Manage your green credits effectively and sustainably</Subtitle>
      </Header>
      <MainSection>
        <Card>
          <CardImage src="https://via.placeholder.com/150" alt="Insight Image" />
          <CardContent>
            <CardTitle>Insight 1</CardTitle>
            <CardDescription>Detail about Insight 1 and its impact.</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardImage src="https://via.placeholder.com/150" alt="Insight Image" />
          <CardContent>
            <CardTitle>Insight 2</CardTitle>
            <CardDescription>Detail about Insight 2 and its impact.</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardImage src="https://via.placeholder.com/150" alt="Insight Image" />
          <CardContent>
            <CardTitle>Insight 3</CardTitle>
            <CardDescription>Detail about Insight 3 and its impact.</CardDescription>
          </CardContent>
        </Card>
      </MainSection>
      <Footer>
        <Button>Check My Green Credit Scope</Button>
      </Footer>
    </Container>
  );
};

export default HomeScreen;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f4f8;
  min-height: 100vh;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #7f8c8d;
`;

const MainSection = styled.main`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 300px;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 10px;
  color: #34495e;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
`;

const Footer = styled.footer`
  margin-top: 40px;
`;

const Button = styled.button`
  padding: 15px 30px;
  font-size: 1rem;
  color: white;
  background-color: #27ae60;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #2ecc71;
  }
`;
