import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Icon,Button, CircleProgressBar} from '@kian-ui-kit/core'
import '@kian-ui-kit/core/src/styles/main.sass'
function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-hot'>
          <CircleProgressBar>
          
          </CircleProgressBar>
        <div className='text-red'>booom</div>
        {/* <i className='mdi mdi-account-box-multiple'></i> */}
      </div>
        <Icon icon="mdi mdi-account-box-multiple">
          sd
        </Icon>
      <div style={{'marginTop':'20px'}}>
      <CircleProgressBar>
          
          </CircleProgressBar>
      <Button color='red' variant='flat'>downlaod</Button>
      </div>
      <div style={{'marginTop':'20px'}}>
         <Button variant='elevated' loading={true} >elevated</Button>
      </div>
      <div style={{'marginTop':'20px'}}>
        <Button variant='plain'>plain</Button>
      </div>
      <div style={{'marginTop':'20px'}}>
       <Button variant='text'>text</Button>
      </div>
      <div style={{'marginTop':'20px'}}>
         <Button  variant='tonal' color='hot' appendIcon='mdi mdi-account-box-multiple'
          prependIcon='mdi mdi-account-box-multiple'>tonal</Button>
      </div>
      <div style={{'marginTop':'20px'}}>
      <Button variant='flat' color='hot' >downlaod</Button>

      </div>
      <Button color='green' icon='mdi mdi-account-box-multiple' variant='outlined'>downlaod</Button>
      <div className='kian-font-h1'>aaaaaaah</div>
    </>
  )
}

export default App
