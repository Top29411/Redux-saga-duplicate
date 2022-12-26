import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import {
  Box,
  Typography,
  Card,
  Divider,
  Link,
  CardContent,
  Stack,
  CircularProgress
} from '@mui/material'
import Header from 'components/Header'
import { getSpeakerResult } from 'redux/modules/speakerDetail/actions'
import { speakerResultSelector } from 'redux/modules/speakerDetail/selectors'

const SpeakerDetailPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { id } = useParams()
  const dispatch = useDispatch()
  const speakerResult = useSelector(speakerResultSelector)

  useEffect(() => {
    setIsLoading(true)
    dispatch(getSpeakerResult({
      params:{
        keyword:id
      },
      success: () => {
        setIsLoading(false)
      }
    }))
  }, [dispatch])

  return (
    <Box sx={{ height: '100%' }}>
      <Card sx={{ mb: 2 }}>
        <Box>
          <Header value={id} />
        </Box>
      </Card>
      {isLoading ?
        <Stack sx={{ width: '100%', height: '400px' }} spacing={2} direction="row" justifyContent="center" alignItems='center'>
          <CircularProgress color="success" />
        </Stack> :
        <Card sx={{ height: 'calc(100vh - 130px)', overflowY: 'scroll' }}>
          <Box sx={{
            display: 'flex',
            flexDirection: { md: 'row', xs: 'column' },
            justifyContent: 'space-between',
            padding: 4,
            height: '100%'
          }}
          >
            <Box sx={{ width: '100%', maxWidth: { md: '200px' } }}>
              <Box>Ads</Box>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ mx: { md: 5 } }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>Results:</Typography>
              <Box>
                {speakerResult && Object.values(speakerResult).map((item, index) => (
                  <Card key={index} sx={{ mb: 2 }}>
                    <CardContent>
                      <Typography gutterBottom variant='h5' component='div'>
                        {item.publishedat ? item.publishedat.replace(/"/g, '') : ''}
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        Title: {item.channeltitle ? item.channeltitle.replace(/"/g, '') : ''}
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        Party:
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        Link: <Link href={item.url ? item.url.replace(/"/g, '') : ''}> {item.url ? item.url.replace(/"/g, '') : ''} </Link>
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        Duration: {item.duration ? item.duration.replace(/"/g, '') : ''} mins
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ mx: { md: 5 } }} />
            <Box sx={{ maxWidth: '200px', width: '100%', display: 'flex', flexDirection: 'column', ml: 4 }}>
              <Box>Ads</Box>
            </Box>
          </Box>
        </Card>
      }
    </Box>
  )
}

export default SpeakerDetailPage
