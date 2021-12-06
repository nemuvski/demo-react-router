import React from 'react'
import ReactDOM from 'react-dom'
import App from '~/components/App'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { MockAuthProvider } from '~/context/MockAuthContext'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <MockAuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MockAuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('app')
)
