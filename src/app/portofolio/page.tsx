'use client'
import { Provider } from "react-redux"
import { store } from '@/store'
import PortofolioScreen from "./portofolio-screen"
import { useState } from "react";

function PageScreen () {
  const [isLoading, setIsLoading] = useState(true);


  return (
    <Provider store={store}>
      <PortofolioScreen />
    </Provider>

  )
}

export default PageScreen