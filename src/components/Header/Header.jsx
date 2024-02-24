import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: "flex",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#9DCE1F',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  border: '1px solid #9DCE1F',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        background: "#FFF"
      }}>
        <div className="container">
          <Toolbar sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            
            <div className="Logo__Menu">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ 
                  flexGrow: 1, 
                  display: { xs: 'none', sm: 'block' },
                  maxWidth: '100px',
                  width: '100%',
                  }}
                color="#000"
              >
                MUI
              </Typography>
              <IconButton
                size="large"
                edge="start"
                color="#FFF"
                aria-label="open drawer"
                sx={{ 
                  mr: 2,
                  borderRadius: '10px',
                  fontSize: '16px',
                  fontWeight: '550',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}
              >
                <MenuIcon color='#000'/>
                Меню
              </IconButton>
            </div>
            
            <nav>
              <Link>0 (550) 77-11-99</Link>
              <Link>0 (550) 77-11-99</Link>
              <Link>0 (550) 77-11-99</Link>
            </nav>

            <Search >
              <SearchIconWrapper >
                <SearchIcon />
              </SearchIconWrapper>
              
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
               <IconButton size="large" aria-label="search" color="inherit" sx={{
                border: '1px solid #EE8131',
                borderRadius: '0',
                width: '41px',
                height: '41px',
                "&:hover": {
                  background: '#EE8131',
                  color: '#FFF',
                },
               }}>
                <SearchIcon color='black' sx={{
                  color: "#000",
                  "&:hover": {
                    color: '#FFF',
                },
                }}/>
              </IconButton>
            </Search>
          </Toolbar>
        </div>
      </AppBar>
    </Box>
  );
}