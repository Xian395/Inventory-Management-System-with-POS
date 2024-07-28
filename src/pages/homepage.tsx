import React from 'react';
import styled from 'styled-components';
import Header from './components/header';
import { FaRuler, FaTools, FaClipboardList, FaBoxes, FaCheckCircle, FaClock, FaShapes, FaCog } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
  color: #333;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  overflow: hidden;
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2em;
  background-color: #fff;
  box-sizing: border-box;
  overflow-y: auto;
  flex: 1;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Dashboard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2em;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #3498db;
  padding: 1.5em;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CardIcon = styled.div`
  font-size: 2.5em;
  color: #fff;
  margin-bottom: 0.5em;
`;

const CardTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 0.5em;
  color: #fff;
`;

const CardDescription = styled.p`
  font-size: 1em;
  color: #fff;
`;

const Homepage: React.FC = () => {
  return (
    <Container>
      <Header />
      <MainContent>
        <Dashboard>
          <Card>
            <CardIcon><FaRuler /></CardIcon>
            <CardTitle>Fabric Stock</CardTitle>
            <CardDescription>120 meters of various fabrics</CardDescription>
          </Card>
          <Card>
            <CardIcon><FaTools /></CardIcon>
            <CardTitle>Sewing Machines</CardTitle>
            <CardDescription>8 machines available</CardDescription>
          </Card>
          <Card>
            <CardIcon><FaShapes /></CardIcon>
            <CardTitle>Patterns</CardTitle>
            <CardDescription>45 different patterns</CardDescription>
          </Card>
          <Card>
            <CardIcon><FaBoxes /></CardIcon>
            <CardTitle>Thread Inventory</CardTitle>
            <CardDescription>200 spools of various colors</CardDescription>
          </Card>
          <Card>
            <CardIcon><FaClipboardList /></CardIcon>
            <CardTitle>Buttons & Zippers</CardTitle>
            <CardDescription>500 buttons, 300 zippers</CardDescription>
          </Card>
          <Card>
            <CardIcon><FaCheckCircle /></CardIcon>
            <CardTitle>Completed Orders</CardTitle>
            <CardDescription>20 orders ready for pickup</CardDescription>
          </Card>
          <Card>
            <CardIcon><FaClock /></CardIcon>
            <CardTitle>Pending Orders</CardTitle>
            <CardDescription>10 orders in progress</CardDescription>
          </Card>
          <Card>
            <CardIcon><FaCog /></CardIcon>
            <CardTitle>Tools & Accessories</CardTitle>
            <CardDescription>Scissors, rulers, and more</CardDescription>
          </Card>
        </Dashboard>
      </MainContent>
    </Container>
  );
};

export default Homepage;
