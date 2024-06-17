import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../assets/LOGO.jpg'; // Corrected path
import { Link, animateScroll as scroll } from 'react-scroll';
import HeroImage from '../assets/hero-image.jpg'; // Ensure you have this image in the assets folder
import Works from './Works';
import Testimonial from './Testimonial';
const HomeScreen = () => {
  const history = useHistory();

  const redirectToLogin = () => {
    history.push('/login');
  };

  return (
    <Container>
      <TopBar>
        <Logo src={logo} alt="Logo" />
        <NavList>
          <NavItem>Products</NavItem>
          <NavItem>Customers</NavItem>
          <NavItem>Blogs</NavItem>
          <NavItem>About</NavItem>
        </NavList>
        <ButtonContainer>
          <LoginButton onClick={redirectToLogin}>Login</LoginButton>
          <ExploreButton as={motion.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Explore
          </ExploreButton>
        </ButtonContainer>
      </TopBar>
      <HeroSection>
        <HeroContent>
          <Title>Welcome to the AI Based Green Credit Management System</Title>
          <Subtitle>Manage your green credits efficiently and effectively.</Subtitle>
          <Link to="info" smooth={true} duration={1000}>
            <ExploreButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Learn More
            </ExploreButton>
          </Link>
        </HeroContent>
        <HeroImageContainer>
          <img src={HeroImage} alt="Hero" />
        </HeroImageContainer>
      </HeroSection>
      <Content id="info">
        <Section>
          <SectionTitle as={motion.h3} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            What is Green Credit?
          </SectionTitle>
          <SectionContent as={motion.p} initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 50 }}>
            Green credit is a way to quantify and manage the environmental impact of individuals and organizations. It involves tracking actions that contribute positively to the environment, such as reducing carbon footprints, using renewable energy, and supporting sustainable practices.
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle as={motion.h3} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            Why is it Important?
          </SectionTitle>
          <SectionContent as={motion.p} initial={{ x: '100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 50 }}>
            Managing green credits helps in promoting sustainability and environmental responsibility. It encourages businesses and individuals to adopt eco-friendly practices, thereby reducing the overall negative impact on the planet. Additionally, green credits can lead to financial benefits through incentives and recognition for sustainable actions.
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle as={motion.h3} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            Insights
          </SectionTitle>
          <SectionContent as={motion.ul} initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
            <li>Organizations with high green credit scores are more likely to attract environmentally conscious customers and investors.</li>
            <li>Implementing green practices can lead to cost savings in the long run through reduced energy consumption and waste management.</li>
            <li>Governments and regulatory bodies are increasingly offering incentives for businesses that demonstrate strong environmental stewardship.</li>
          </SectionContent>
        </Section>
      </Content>
      <Works/>
      <Testimonial/>  
    </Container>
  );
};

export default HomeScreen;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1c1c1c; /* Dark background */
`;

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #2c2c2c; /* Dark grey background */
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 20px;
`;

const NavItem = styled.li`
  color: white;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const LoginButton = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: #4c4c4c; /* Grey background */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #6c6c6c; /* Lighter grey on hover */
  }
`;

const ExploreButton = styled(motion.button)`
  padding: 10px 20px;
  color: white;
  background-color: #6c6c6c; /* Lighter grey background */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #8c8c8c; /* Even lighter grey on hover */
  }
`;

const HeroSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 50px;
  background-color: #2c2c2c; /* Dark grey background */
`;

const HeroContent = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const HeroImageContainer = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: white; /* White text */
  text-align: left;
`;

const Subtitle = styled.h2`
  margin-bottom: 20px;
  color: #bfbfbf; /* Light grey text */
  text-align: left;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #1c1c1c; /* Dark background */
`;

const Section = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background-color: #2c2c2c; /* Dark grey background */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 10px;
  color: white; /* White text */
`;

const SectionContent = styled.p`
  color: #bfbfbf; /* Light grey text */
  line-height: 1.6;
`;

const SectionContentList = styled.ul`
  color: #bfbfbf; /* Light grey text */
  line-height: 1.6;
  list-style-type: disc;
  padding-left: 20px;
`;
