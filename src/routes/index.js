import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from 'containers/Layout'
import ScrollToTop from 'react-router-scroll-top'
import HomePage from 'pages/HomePage'
import TopicDetailsPage from 'pages/TopicDetailsPage'
import SpeakerDetailPage from 'pages/SpeakerDetailPage'

const routes = () => (
  <Router>
    <ScrollToTop>
      <Layout>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/speaker/:id' component={SpeakerDetailPage} />
          <Route exact path='/:id' component={TopicDetailsPage} />
        </Switch>
      </Layout>
    </ScrollToTop>
  </Router>
)

export default (routes)
