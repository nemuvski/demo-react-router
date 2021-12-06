import React, { useContext, useRef } from 'react'
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  IconButton,
  Switch,
  useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import NavigationLinks from '~/components/NavigationLinks'
import useLocationChange from '~/hooks/useLocationChange'
import { MockAuthContext } from '~/context/MockAuthContext'

const Navigation = () => {
  const buttonRef = useRef<null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isLogin, setLogin } = useContext(MockAuthContext)

  // locationが変わった時にナビゲーションが開いていれば閉じる
  useLocationChange(() => {
    isOpen && onClose()
  })

  return (
    <>
      <Box position='fixed' top={4} left={4} zIndex={10}>
        <IconButton aria-label='menu open' icon={<HamburgerIcon />} ref={buttonRef} onClick={onOpen} />
      </Box>
      <Drawer isOpen={isOpen} placement='left' onClose={onClose} finalFocusRef={buttonRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader />
          <DrawerBody>
            <NavigationLinks />
          </DrawerBody>
          <DrawerFooter>
            <FormControl display='flex' alignItems='center'>
              <FormLabel htmlFor='toggle-login-state' marginBottom={0}>
                Toggle Login State
              </FormLabel>
              <Switch
                id='toggle-login-state'
                size='lg'
                isChecked={isLogin}
                onChange={(event) => setLogin(event.target.checked)}
              />
            </FormControl>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Navigation
