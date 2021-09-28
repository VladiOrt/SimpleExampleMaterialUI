import React from 'react';
import {Box, TextField} from '@mui/material/'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';


import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';

import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';

import { ButtonUnstyled } from '@mui/core';

const App = () => {
  return(
   <Box sx={{
      position:'absolute',
      backgroundColor:'black',
      border:1,
      width:1,
      height:'99vh',  
      display:'flex',
      justifyContent:'center',
      alignItems: 'center',  
    }}>
      <Box sx={{
        backgroundColor:'red',
        width:'1240px',
        height:9/10,
        display:'flex'
      }}>

        <Box sx={{
          backgroundColor:'#FFFFFF',
          minWidth:'420px',
          height:1,
        }}>
          <Box sx={{
            backgroundColor: '#585886',
            width: '420px',
            height:'60px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexGrow: 'grow'
          }}>
            <Avatar alt='Avatar Img' sx={{
                width:40, height:40, fontSize:'16px',fontWeight:'500',color:'#2E2E4F',lineHeight:'20px', letterSpacing:'-0.05px' }} 
              >
                AT                        
            </Avatar>
            <Typography variant="subtitle1" component="div" sx={{
              minWidth:'256px',
              height:'40px',
              display: 'flex',
              alignItems:'center',
              paddingLeft:'8px',
              color:'#DCDDF5',
              fontSize:'18px',
              lineHeight:'22px',
              verticalAlign:'center',
              fontWeight:'500',

            }}>
              Chats
            </Typography>
            <IconButton>
              <ChatBubbleOutlineIcon sx={{minWidth:'18px', height:'18px', color:'white'}}></ChatBubbleOutlineIcon>                       
            </IconButton>
            <IconButton sx={{zIndex:'1', color:'white'}}>
              <MoreVertIcon sx={{width:'18px', height:'18px'}}></MoreVertIcon>
            </IconButton>





          </Box>

          

          <Paper
            component="form" elevation={0}
            sx={{ width:1, height:'40px',p: '1px 1px', display: 'flex', alignItems: 'center',justifyContent:'center', paddingLeft:'18px'}}
          >      
            <SearchIcon />        
            <TextField variant="standard"
              sx={{ ml: 1, flex: 1 , hiddenLabel:'true'}}
              placeholder="Buscar o empezar un nuevo chat" InputProps={{ disableUnderline: true }}       
            />     
          </Paper>



          <Box sx={{
            backgroundColor: '#FAFAFA',
            width: '418px',
            height:'60px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',

          }}>
            <Avatar alt='Avatar Img' sx={{
           width:40, height:40, fontSize:'16px',fontWeight:'500',color:'#2E2E4F',lineHeight:'20px', letterSpacing:'-0.05px' }} 
              >
                ET                        
            </Avatar>            
            <Box sx={{
              maxWidth:'271px',
              display:'flex',
              flexWrap:'wrap',
              marginLeft:'8px'
            }}>
              <Typography sx={{
                width:'271px',
                height:'23px',
                fontWeight:'500',
                fontSize:'14px',                
                lineHeight:'22px',
                fontStyle:'Medium',
                fill: 'Solid',
                color:'#2A2A2A'  
              }}>              
              Equipo del Chat
              </Typography>

              <Typography sx={{ 
                 width:'271px',
                 height:'23px',
                 fontWeight:'400',
                 fontSize:'14px',                
                 lineHeight:'20px',
                 fontStyle:'Medium',
                 fill: 'Solid',
                 color:'#858495'               
              }}>              
              Bienvendio al chat de soporte...
              </Typography>
            </Box>
            
            <Typography sx={{
              width:'50px',
              height:'14px',
              marginBottom:'13px',

              fontWeight:'400',
              fontSize:'12px',                
              lineHeight:'14.06px',
              fontStyle:'Regular',
              fill: 'Solid',
              color:'#858495',
              letterSpacing:'0.3px',         
            }}>
              16:38PM
            </Typography>
          </Box>



          <Box>

          </Box>
        </Box>

        <Box sx={{
          backgroundColor:'#DCDDF5',
          width: '820px',
          height:1,
        }}>











<Box sx={{
            backgroundColor: '#7878B3',
            width: 1,
            height:'60px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexGrow: 'grow'
          }}>
            <Avatar alt='Avatar Img' sx={{
                width:40, height:40, fontSize:'16px',fontWeight:'500',color:'#2E2E4F',lineHeight:'20px', letterSpacing:'-0.05px' }} 
              >
                AT                        
            </Avatar>



            <Box sx={{
              maxWidth:'271px',
              display:'flex',
              flexWrap:'wrap',
              marginLeft:'8px'
            }}>
              <Typography sx={{
                width:'271px',
                height:'23px',
                fontWeight:'500',
                fontSize:'14px',                
                lineHeight:'22px',
                fontStyle:'Medium',
                fill: 'Solid',
                color:'#DCDDF5'  
              }}>              
              Equipo del Chat
              </Typography>

              <Typography sx={{ 
                 width:'271px',
                 height:'23px',
                 fontWeight:'400',
                 fontSize:'14px',                
                 lineHeight:'20px',
                 fontStyle:'Medium',
                 fill: 'Solid',
                 color:'#FFFFFF'               
              }}>              
              Bienvendio al chat de soporte...
              </Typography>
            </Box>





            <IconButton>
              <SearchIcon sx={{minWidth:'23px', height:'21px', color:'white'}}></SearchIcon>                       
            </IconButton>
            <IconButton sx={{zIndex:'1', color:'white'}}>
              <MoreVertIcon sx={{width:'21px', height:'23px'}}></MoreVertIcon>
            </IconButton>





          </Box>

          





        </Box>










      </Box>
    </Box>    
  )
}

export default App;