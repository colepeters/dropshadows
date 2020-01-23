import styled, { createGlobalStyle } from 'styled-components'

import Config from '../components/Config'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: BlinkMacSystemFont, -apple-system, sans-serif;
    font-size: 90%;
    line-height: 1.5;
    padding: 2rem 5rem;
    white-space: nowrap;
    margin-bottom: 20rem;
  }

  h1, h2, h3 {
    font-weight: 500;
  }

  h2 {
    text-transform: uppercase;
  }

  h3 {
    margin: 2rem 0 0.5rem;
  }

  input[type=range] {
    width: 75px;
  }

  input[type=number] {
    width: 6ch;
  }

  button {
    display: block;
    margin: 0.5rem 0 0;
  }
`

const Container = styled.div`
  display: inline-block;
  width: 300px;
`

const StepLabel = styled.h3`
  font-family: Monaco;
  font-weight: 700;
  color: rebeccapurple;
`

export default function Index() {
  return (
    <>
      <GlobalStyle />
      <div>
        <h2>Drop Shadow Configurator</h2>
        <p><a href='https://github.com/colepeters/dsconfig'>GitHub</a></p>

          {[1,2,3,4,5].map(i => (
            <Container key={i}>
              <StepLabel>Step {`${i}`}</StepLabel>
              <Config />
            </Container>
          ))}
      </div>
    </>
  )
}
