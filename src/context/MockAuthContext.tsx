import React, { useState } from 'react'

type ContextProps = {
  isLogin: boolean
  setLogin: (flag: boolean) => void
}

export const MockAuthContext = React.createContext<ContextProps>({
  isLogin: false,
  setLogin: () => {
    // nothing
  },
})

export const MockAuthProvider: React.FC = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <MockAuthContext.Provider value={{ isLogin, setLogin: (flag: boolean) => setIsLogin(flag) }}>
      {children}
    </MockAuthContext.Provider>
  )
}
