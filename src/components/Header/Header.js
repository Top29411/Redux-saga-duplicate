import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

import {
  Box,
  Input,
  InputAdornment
} from '@mui/material'
import Logo from 'assets/images/uaroundu_profile_logo.webp'
import SearchIcon from '@mui/icons-material/Search'

const Header = ({ value }) => {
  const history = useHistory()
  const [search, setSearch] = useState('')

  useEffect(() => {
    setSearch(value)
  }, [value])

  const handleClick = (item) => {
    history.push(`/${item.replace(/"/g, '')}`)
  }

  const returnNewSearch = (e) =>{
    if(e == '13') handleClick(search) ;
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', pr: { xs: 2 } }}>
      <Box sx={{ mr: { md: 10, xs: 2 }, width: '96px', height: '96px' }}>
        <img src={Logo} alt="" style={{ width: '100%', height: '100%' }} />
      </Box>
      <Input
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        onKeyPress = {(e)=>returnNewSearch(event.keyCode || event.which)} 
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </Box>
  )
}

export default Header
