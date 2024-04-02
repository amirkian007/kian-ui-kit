import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Icon,Button} from '@kian-ui-kit/core'
import '@kian-ui-kit/core/src/styles/main.sass'
function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-green'>
        <div className='text-red'>booom</div>
        <Icon onClick={()=>{console.log('hi')}} icon="mdi mdi-account-box-multiple">
          sd
        </Icon>
        {/* <i className='mdi mdi-account-box-multiple'></i> */}
      </div>
      <Button >downlaod</Button>
      <div className='kian-font-h1'>fuck</div>
    </>
  )
}

export default App
