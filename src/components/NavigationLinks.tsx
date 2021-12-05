import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link, Stack } from '@chakra-ui/react'
import { examplesMap } from '~/routes/examples'

const NavigationLinks = () => {
  const navigate = useNavigate()
  return (
    <Stack as='nav'>
      {Array.from(examplesMap).map(([{ path, title }]) => (
        <Link
          key={path}
          rounded='base'
          padding={1}
          _hover={{ bg: 'gray.100' }}
          onClick={(event) => {
            // アンカー要素のデフォルトの挙動を無効
            event.preventDefault()
            navigate(`/examples/${path}`)
          }}
        >
          {title}
        </Link>
      ))}
    </Stack>
  )
}

export default NavigationLinks
