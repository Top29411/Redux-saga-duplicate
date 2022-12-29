import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  TextField,
  Typography,  
  Link,
  Chip,
  Card,
  CardContent,
  Divider,
  Stack,
  CircularProgress
} from '@mui/material'
import Header from 'components/Header'
import GoogleAd from '../../components/GoogleAds'
import { getDiscussedTimes, getOtherTopics, getSpeakersList, getTopicResult } from 'redux/modules/topicDetail/actions'
import {
  otherTopicsSelector,
  speakersListSelector,
  topicResultSelector ,
  topicDiscussedTimeSelector
} from 'redux/modules/topicDetail/selectors'

const TopicDetailsPage = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const history = useHistory()
  const { id } = useParams()
  const dispatch = useDispatch()  
  const otherTopics = useSelector(otherTopicsSelector)
  const speakers = useSelector(speakersListSelector)
  const topicResult = useSelector(topicResultSelector)
  const discussedTime = useSelector(topicDiscussedTimeSelector)

  useEffect(() => {
    dispatchPageData(id) 
    // console.log(id,'=id') 

  }, [dispatch]) 

  useEffect(() => {
    dispatchPageData(id)
  }, [id])

  const dispatchPageData = (id) => {
    setIsLoading(true)
    dispatch(getDiscussedTimes(
      {
        params:{
          keyword:id
        }
      }
    ))
    dispatch(getOtherTopics({
      params:{
        keyword:id
      }
    }))
    dispatch(getSpeakersList({
      params:{
        keyword:id
      }
    }))
    dispatch(getTopicResult(
      {
      params: {
        keyword:id
      },
      success: () => {
        setIsLoading(false)
        setError(false)
        // console.log('success')
      },
      fail: () => {
        setIsLoading(true)
        setError(true)
        // console.log('failed')
      }
    }))
  }

  const handleClickOtherTopic = (item) => {
    history.push(`/${item.ngram.replace(/"/g, '')}`)
  }

  const handleClickSpeaker = (speaker) => () => {
    history.push(`/speaker/${speaker.replace(/"|\[|\]/g, '')}`)
  }

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
        </Stack> : error ? <Typography>Error</Typography> :
        <Card sx={{ height: 'calc(100vh - 130px)', overflowY: 'scroll' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { md: 'row', xs: 'column' },
              justifyContent: 'space-between',
              padding: 4,
              height: '100%'
            }}
          >
            <Box sx={{ width: '100%', maxWidth: { md: '200px' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mb: 2 }}>
                <TextField size="small" disabled fullWidth sx={{ mb: 1 }}  label={discussedTime && discussedTime['first_discussed']}  />
                <Typography variant="medium">First Time discussed</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <TextField size="small" disabled fullWidth  sx={{ mb: 1  }} label={discussedTime && discussedTime['last_discussed']} />
                {/* {
                  discussedTime && discussedTime['last_discussed']
                } */}
                <Typography variant="medium">Last Time discussed</Typography>
              </Box>
              <Box sx={{ mb: 3 }}>
                <GoogleAd/>
              </Box>
              <Typography variant='h5' sx={{ mb: 3 }}>Speakers:</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {speakers && Object.keys(speakers).map((speaker, index) => (
                  <Chip color='primary' variant="outlined" key={index} label={speaker.replace(/\[|\]|"/g, '')}
                    sx={{ mb: 2 }} onClick={handleClickSpeaker(speaker)} />
                ))}
              </Box>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ mx: { md: 5 } }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant='h5' sx={{ mb: 2 }}>Results:</Typography>
              <Box>
                {topicResult && Object.values(topicResult).map((item, index) => (
                  <Card key={index} sx={{ mb: 2 }}>
                    <CardContent>
                      <Typography gutterBottom variant='h5' component='div'>
                        {item.publishedat.replace(/"/g, '')}
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        Title: {item.channeltitle.replace(/"/g, '')}
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        Party:
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        Link: <Link href={item.url.replace(/"/g, '')}> {item.url.replace(/"/g, '')} </Link>
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        Duration: {item.duration.replace(/"/g, '')} mins
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ mx: { md: 5 } }} />
            <Box sx={{ maxWidth: { md: '200px' }, width: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ mb: 2 }}>Other Topics Discussed...</Typography>
              {otherTopics && Object.values(otherTopics).map((item, index) => (
                <Chip color='primary' variant="outlined" key={index} label={item.ngram.replace(/"/g, '')}
                  sx={{ mb: 2 }} onClick={() => handleClickOtherTopic(item)} />
              ))}
              <Box>Ads</Box>
            </Box>
          </Box>
        </Card>
      }
    </Box>
  )
}

export default TopicDetailsPage
