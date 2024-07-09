import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Navbar({ onSubmit }) {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:5000/logout', {}, { withCredentials: true });
      if (response.status === 200) {
        localStorage.removeItem('isAuthenticated');
        setIsAuthenticated(false);
        navigate('/'); // Redirect to login page or another appropriate page
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
  };

  return (
    <Wrapper>
      <LogoWrapper>
        <LogoText>
          <a href='/'>
            <h1>YumYam</h1>
          </a>
        </LogoText>
      </LogoWrapper>
      <SearchWrapper>
        <SearchBarWrapper>
          <form onSubmit={onSearchSubmit}>
            <SearchInput
              type="text"
              placeholder="Search 2M+ recipes"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <IconButton type="submit">
              <SearchIcon />
            </IconButton>
          </form>
        </SearchBarWrapper>
      </SearchWrapper>
      <div>
        {isAuthenticated ? (
          <LogoutWrapper>
            <button onClick={handleLogout}>Logout</button>
          </LogoutWrapper>
        ) : (
          <LoginWrapper>
            <a href="/">
              <ProfileIcon>
                <Avatar 
                  alt="Remy Sharp" 
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 32, height: 32 }}
                />
              </ProfileIcon>
              <ProfileName>
                <p>Junaid</p>
              </ProfileName>
            </a>
          </LoginWrapper>
        )}
      </div>
      <MenuWrapper>
        <MenuOption>
          <a href="/">Dinners</a>
        </MenuOption>
        <MenuOption>
          <a href="/">Meals</a>
        </MenuOption>
        <MenuOption>
          <a href="/">Ingredients</a>
        </MenuOption>
        <MenuOption>
          <a href="/">Occasions</a>
        </MenuOption>
        <MenuOption>
          <a href="/">Cuisines</a>
        </MenuOption>
      </MenuWrapper>
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 12px;
  background-color: white;
  color: black;
  margin:0.5rem 0 1.5rem 0;
`;

const LogoWrapper = styled.div`
  display: flex;
  a {
    text-decoration: none;
    color: #000000;
  }
`;

const LogoText = styled.div`
  h1 {
    font-family: "Playwrite PL", cursive;
  }
`;

const SearchWrapper = styled.div`
  flex: 1;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #efefef;
  border-radius: 50px;
  height: 36px;
  margin: 0 25px;
  padding: 0 10px;
  form {
    display: flex;
    flex: 1;
  }
`;

const SearchInput = styled.input`
  background-color: #efefef;
  width: 100%;
  border: none;
  font-size: 16px;
  margin-right: 5px;
  padding-right: 20px;
  
  &:focus {
    outline: none;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
`;

const MenuWrapper = styled.div`
  display: flex;
  margin: 0 20px 0 0;
`;

const MenuOption = styled.div`
  margin: 7px;
  a {
    position: relative;
    text-decoration: none;
    color: black;
    font-weight: 600;
    overflow: hidden;
    transition: color 0.3s ease-in-out;
    
    &::before {
      content: '';
      background-color: #000000;
      width: 100%;
      height: 1.5px;
      position: absolute;
      left: 0;
      bottom: -1px;
      transform: scaleX(0);
      transform-origin: bottom left;
      transition: transform 0.3s ease-in-out;
    }

    &:hover::before {
      transform: scaleX(1);
    }
  }
`;

const LoginWrapper = styled.div`
  a {
    display: flex;
    align-items: center;
    margin: 0 20px 0 0;
    text-decoration: none;
    color: black;
  }
`;

const ProfileIcon = styled.div`
  margin: 0 7px;
`;

const ProfileName = styled.div`
  font-weight: 600;
`;

const LogoutWrapper = styled.div`
  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    color: black;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
`;
