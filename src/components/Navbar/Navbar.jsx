import React,{useState}from 'react'
import styled from 'styled-components'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


function Navbar(onSubmit) {
  const [input, setInput] = useState('');

  const onSearchSubmit = (e) => {
      e.preventDefault();
      onSubmit(input);
  }
  return (
    <Wrapper>
        <LogoWrapper>
            <LogoText>
              <h1>YumYam</h1>
            </LogoText>
        </LogoWrapper>
        <SearchWrapper>
          <SearchBarWrapper>
            <IconButton>
              <SearchIcon/>
            </IconButton>
              <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                        />
                        <button type="submit" ></button>
                    </form>
          </SearchBarWrapper>
        </SearchWrapper>
        <LoginWrapper>
          <a href="">
          <ProfileIcon>
            <AccountBoxRoundedIcon/>
          </ProfileIcon>
          <ProfileName>
            <p>Junaid</p>
          </ProfileName>
          </a>
        </LoginWrapper>
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
  )
}

export default Navbar

const Wrapper=styled.div
`
display:flex;
align-items:center;
height:56px;
padding:12px 4px 4px 12px;
background-color:white;
color:black;

`
const LogoWrapper=styled.div
`
display:flex
`
const LogoText=styled.div
`
h1{
  font-family: "Playwrite PL", cursive;
}
`
const SearchWrapper=styled.div`
flex:1;
`
const SearchBarWrapper=styled.div`
  display:flex;
  align-items:center;
  background-color:#efefef;
  border-radius:50px;
  height:36px;
  margin:0 25px;
  form{
  display:flex;
  flex:1;

  }
  form>input{
    background-color:#efefef;
    width:100%;
    border:none;
    font-size:16px;
    margin-right:5px;
  }
  button{
  display:none;
  }
  
   input:focus{
        outline:none;
    }
    input:active{
        outline:none;
    }
`
const IconButton=styled.div
`
`
const MenuWrapper=styled.div`
display:flex;
margin:0 20px 0 0;
`
const MenuOption=styled.div`
margin:7px;
a{
  text-decoration:none;
  color:black;
  font-weight:600;
  }
`
const LoginWrapper=styled.div
`
a{
display:flex;
align-items:center;
margin:0 20px 0 0;
text-decoration:none;
color:black;
}
`
const ProfileIcon=styled.div
`

`
const ProfileName=styled.div
`
 font-weight:600;
`