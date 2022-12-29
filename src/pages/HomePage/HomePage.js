import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  Input,
  InputAdornment,
  Typography,
  Chip
} from '@mui/material'
import Logo from 'assets/images/uaroundu_profile_logo.webp'
import SearchIcon from '@mui/icons-material/Search'
import { getTopics } from 'redux/modules/home/actions'
import { topicListSelector } from 'redux/modules/home/selectors'

const HomePage = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const topics = useSelector(topicListSelector) 
  const [searchMenu , setSearchMenu] = useState('')

  useEffect(() => {
    dispatch(getTopics())
  }, [dispatch])

  const handleClick = (item) => {
    history.push(`/${item.replace(/"/g, '')}`)
  }

  const returnNewSearch = (e) =>{
    if(e == '13') handleClick(searchMenu) ;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', pt: 10 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 10 }}><img src={Logo} alt="" /></Box>
      <Box sx={{display:'flex' , width:'100%'}}>
        <Input 
          onChange = {(e)=>setSearchMenu(e.target.value)}
          onKeyPress = {(e)=>returnNewSearch(event.keyCode || event.which)} 
          sx={{ mb: 5 , width:'100%' }}
          
        />
        <Box sx={{cursor:'pointer'}}  onClick={()=>handleClick(search)}>
          <SearchIcon />
        </Box>
      </Box>
      <Box>
        <Typography sx={{ mb: 4 }}>Top discussed topics in the last 7 days</Typography>
        {topics && Object.values(topics).map((item, index) => (
          <Chip color="primary" variant='outlined' key={index} label={item.replace(/"/g, '')}
                sx={{ mr: 2 }} onClick={() => handleClick(item)} />
        ))}
      </Box>
    </Box>
  )
}

export default HomePage
