import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link, Stack } from '@chakra-ui/react'
import { examplesMap } from '~/routes/examples'

type Props = {
  // Drawerを閉じる関数
  onClose: () => void
}

const NavigationLinks: React.FC<Props> = ({ onClose }) => {
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
            // Drawerを閉じる
            onClose()
          }}
        >
          {title}
        </Link>
      ))}
    </Stack>
  )
}

export default NavigationLinks
