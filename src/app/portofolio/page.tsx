'use client'
import { Provider } from "react-redux"
import { store } from '@/store'
import PortofolioScreen from "./portofolio-screen"

function PageScreen () {
  return (
    <Provider store={store}>
      <PortofolioScreen />
    </Provider>

  )
}

export default PageScreen