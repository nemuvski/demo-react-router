import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link, Stack, Text } from '@chakra-ui/react'
import { protectedRouteMap } from '~/routes/protections'
import { MockAuthContext } from '~/context/MockAuthContext'
import { hideAndSeekRouteMap } from '~/routes/hide-and-seek'

const HoverLink: React.FC<{ pathPrefix: string; path: string }> = ({ pathPrefix, path }) => {
  const navigate = useNavigate()
  return (
    <Link
      rounded='base'
      padding={1}
      _hover={{ bg: 'gray.100' }}
      onClick={(event) => {
        // アンカー要素のデフォルトの挙動を無効
        event.preventDefault()
        navigate(`${pathPrefix.replace(/\/$/, '')}/${path}`)
      }}
    >
      {path}
    </Link>
  )
}

const NavigationLinks = () => {
  const { isLogin } = useContext(MockAuthContext)
  return (
    <Stack as='nav'>
      <Text fontSize='2xl'>Protection</Text>
      {Array.from(protectedRouteMap).map(([path]) => (
        <HoverLink key={path} pathPrefix='/protections' path={path} />
      ))}

      {isLogin && (
        <>
          <Text fontSize='2xl'>Hide & Seek</Text>
          {Array.from(hideAndSeekRouteMap).map(([path]) => (
            <HoverLink key={path} pathPrefix='/hide-and-seek' path={path} />
          ))}
        </>
      )}
    </Stack>
  )
}

export default NavigationLinks
