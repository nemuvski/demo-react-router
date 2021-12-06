import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link, Stack, Text } from '@chakra-ui/react'
import { protectedRouteMap } from '~/routes/protections'
import { MockAuthContext } from '~/context/MockAuthContext'
import { hideAndSeekRouteMap } from '~/routes/hide-and-seek'

const NavigationLinks = () => {
  const navigate = useNavigate()
  const { isLogin } = useContext(MockAuthContext)

  return (
    <Stack as='nav'>
      <Text fontSize='2xl'>Protection</Text>
      {Array.from(protectedRouteMap).map(([{ path, title }]) => (
        <Link
          key={`protections-${path}`}
          rounded='base'
          padding={1}
          _hover={{ bg: 'gray.100' }}
          onClick={(event) => {
            // アンカー要素のデフォルトの挙動を無効
            event.preventDefault()
            navigate(`/protections/${path}`)
          }}
        >
          {title}
        </Link>
      ))}

      {isLogin && (
        <>
          <Text fontSize='2xl'>Hide & Seek</Text>
          {Array.from(hideAndSeekRouteMap).map(([{ path, title }]) => (
            <Link
              key={`hide-and-seek-${path}`}
              rounded='base'
              padding={1}
              _hover={{ bg: 'gray.100' }}
              onClick={(event) => {
                // アンカー要素のデフォルトの挙動を無効
                event.preventDefault()
                navigate(`/hide-and-seek/${path}`)
              }}
            >
              {title}
            </Link>
          ))}
        </>
      )}
    </Stack>
  )
}

export default NavigationLinks
