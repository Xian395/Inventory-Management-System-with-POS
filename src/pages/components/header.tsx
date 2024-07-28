import React from 'react';
import styled from 'styled-components';
import { UserButton } from "@clerk/clerk-react";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg'; // Update the logo file accordingly

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1em 2em;
  background-color: #2c3e50; // Dark blue background for header
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
  text-decoration: none;

  img {
    height: 40px;
    margin-right: 0.5em;
  }
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 1em;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #ffcc00; // Yellow color on hover
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo to="/">
        <img src={logo} alt="Logo" />
        Inventory Management
      </Logo>
      <Navbar>
        <NavLink to="/inventory">Inventory</NavLink>
        <NavLink to="/order-management">Order Management</NavLink>
        <NavLink to="/suppliers">Suppliers</NavLink>
        <NavLink to="/customers">Customers</NavLink>
        <NavLink to="/reports">Reports</NavLink>
        <NavLink to="/pos">POS</NavLink>
        <NavLink to="/settings">Settings</NavLink>
        <UserButton />
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
