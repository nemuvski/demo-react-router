import React, { useRef } from 'react'
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import NavigationLinks from '~/components/NavigationLinks'
import useLocationChange from '~/hooks/useLocationChange'

const Navigation = () => {
  const buttonRef = useRef<null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

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
          <DrawerHeader>Examples</DrawerHeader>
          <DrawerBody>
            <NavigationLinks />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Navigation
