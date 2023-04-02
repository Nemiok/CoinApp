import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store/store'
import App from './App'
import Normalize from './assets/globalStyles/normalize'
import Fonts from './assets/globalStyles/Fonts'
import SkeletonAnimation from './assets/globalStyles/SkeletonAnimation'

const mapScript = document.createElement('script')
mapScript.src = "https://api-maps.yandex.ru/2.1/?apikey=ea513bd4-9a7a-4549-8427-f84100a18cbe&lang=ru_RU"
mapScript.type = "text/javascript"
mapScript.defer = true
document.querySelector('head').append(mapScript)

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Normalize />
    <Fonts />
    <SkeletonAnimation />


    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>

  </StrictMode>
)