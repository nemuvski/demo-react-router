import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Navigation from '~/components/Navigation'

const Layout = () => (
  <>
    <Navigation />
    <Flex height='100vh'>
      <Box margin='auto' padding={4}>
        <Heading as='h1' size='4xl' isTruncated>
          <Outlet />
        </Heading>
      </Box>
    </Flex>
  </>
)

export default Layout
