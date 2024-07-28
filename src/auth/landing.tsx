import { SignInButton } from "@clerk/clerk-react";
import styled from 'styled-components';

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #f0f0f0;  // Light background color
  color: #333;  // Dark text color
  text-align: center;
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2em 1em;
  background: #2c3e50;  // Dark blue background for header
  color: #fff;  // White text color for contrast
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2em;  // Space below header
`;

const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 0.5em;
`;

const Description = styled.p`
  font-size: 1.2em;
  margin-bottom: 1em;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2em 1em;
  background: #fff;  // White background for main content
  color: #333;  // Dark text color for contrast
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const SignInContainer = styled.div`
  background: #3498db;  // Blue background for button container
  padding: 1em 2em;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 2em;  // Space above the button container
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  & > button {
    background: #fff;  // White background for button
    color: #3498db;  // Blue text color for contrast
    border: none;
    padding: 0.5em 1em;
    border-radius: 4px;
    font-size: 1em;
    cursor: pointer;
    transition: background 0.3s ease;
    
    &:hover {
      background: #2980b9;  // Slightly darker blue on hover
      color: #fff;  // White text color on hover
    }
  }
`;

function LandingPage() {
  return (
    <LandingPageContainer>
      <Header>
        <Title>Inventory Management System</Title>
        <Description>Manage your inventory with ease and efficiency</Description>
      </Header>
      <Main>
        <SignInContainer>
          <SignInButton />
        </SignInContainer>
      </Main>
    </LandingPageContainer>
  );
}

export default LandingPage;
