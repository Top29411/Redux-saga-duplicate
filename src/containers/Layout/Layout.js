import React from 'react'
import { Container } from '@mui/material'

const Layout = ({ children }) => {
  return (
    <Container sx={{ height: '100%' }}>
      {children}
    </Container>
  )
}

export default Layout
