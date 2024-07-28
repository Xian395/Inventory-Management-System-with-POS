import Header from "./components/header"
import styled from 'styled-components';
import { useUser } from '@clerk/clerk-react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #0d0d0d;
  color: #fff;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  overflow: hidden;
`;
const UserDataContainer = styled.div`
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  color: #ffffff;
  max-width: 600px;
  width: 80%;
  text-align: left;
`;

const Title = styled.h2`
  margin: 0 0 10px 0;
`;
const DataField = styled.div`
  margin-bottom: 10px;
`;

const Customers: React.FC = () => {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) {
    return <div>Please sign in to view this content.</div>;
  }

  const { emailAddresses, id, firstName, lastName } = user;
  const email = emailAddresses[0]?.emailAddress; 

  return (
    <Container>
      <Header />
      <UserDataContainer>
        <Title>User Data:</Title>
        <DataField><strong>Email:</strong> {email}</DataField>
        <DataField><strong>User ID:</strong> {id}</DataField>
        <DataField><strong>First Name:</strong> {firstName}</DataField>
        <DataField><strong>Last Name:</strong> {lastName}</DataField>
      </UserDataContainer>
    </Container>
  );
};

export default Customers;