import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Typography, Button } from '@material-ui/core'
import { useSpring, animated } from 'react-spring'

const HomeAnimation = () => {
  const props = useSpring({
    from: { opacity: 0, marginTop: -1000 },
    to: { opacity: 1, marginTop: 220}
  })

  return (
    <animated.div style={ props }>
      <Container>
        <Row>
          <Col sm="12">
            <div className="shadow bg-dark rounded" style={{ opacity: .8 }}>
            <Typography variant="h1" align="center" className="p-3 font-weight-bold text-white overflow-hidden">
              Ready for change?
            </Typography>
            </div>
            <div className="text-center">
            <Button size="large" variant="contained" className="mt-3 bg-primary text-light">Apply Now!</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </animated.div>
  )
}

export default HomeAnimation;
