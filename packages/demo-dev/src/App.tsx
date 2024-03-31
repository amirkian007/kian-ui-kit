import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Icon} from '@kian-ui-kit/core'
function App() {
  const [count, setCount] = useState(0)
  console.log(Icon)
  return (
    <>
      <div>
        <Icon icon="mdi mdi-account-box-multiple"/>
        {/* <i className='mdi mdi-account-box-multiple'></i> */}
      </div>
     
    </>
  )
}

export default App
