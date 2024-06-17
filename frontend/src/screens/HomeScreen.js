import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const HomeScreen = () => {
  const history = useHistory();

  const redirectToLogin = () => {
    history.push('/login');
  };

  return (
    <Container>
      <TopBar>
        <LoginButton onClick={redirectToLogin}>Login</LoginButton>
      </TopBar>
      <Content>
        <Title>Welcome to the AI Based Green Credit Management System</Title>
        <Subtitle>Manage your green credits efficiently and effectively.</Subtitle>
        <Section>
          <SectionTitle>What is Green Credit?</SectionTitle>
          <SectionContent>
            Green credit is a way to quantify and manage the environmental impact of individuals and organizations. It involves tracking actions that contribute positively to the environment, such as reducing carbon footprints, using renewable energy, and supporting sustainable practices.
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>Why is it Important?</SectionTitle>
          <SectionContent>
            Managing green credits helps in promoting sustainability and environmental responsibility. It encourages businesses and individuals to adopt eco-friendly practices, thereby reducing the overall negative impact on the planet. Additionally, green credits can lead to financial benefits through incentives and recognition for sustainable actions.
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>Insights</SectionTitle>
          <SectionContent>
            <ul>
              <li>Organizations with high green credit scores are more likely to attract environmentally conscious customers and investors.</li>
              <li>Implementing green practices can lead to cost savings in the long run through reduced energy consumption and waste management.</li>
              <li>Governments and regulatory bodies are increasingly offering incentives for businesses that demonstrate strong environmental stewardship.</li>
            </ul>
          </SectionContent>
        </Section>
      </Content>
    </Container>
  );
};

export default HomeScreen;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f0f4f8;
`;

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  background-color: #2c3e50;
`;

const LoginButton = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: #27ae60;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #2ecc71;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #2c3e50;
  text-align: center;
`;

const Subtitle = styled.h2`
  margin-bottom: 20px;
  color: #7f8c8d;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 10px;
  color: #2c3e50;
`;

const SectionContent = styled.p`
  color: #7f8c8d;
  line-height: 1.6;
`;
