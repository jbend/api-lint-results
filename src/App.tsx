import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="container items-start mx-auto">
        <h1 className="text-4xl py-3">API Spec Linting Results</h1>
        <div>
          <h2 className="text-2xl py-3">Trimble Connect</h2>
          <ul>
            <li>
              <a href="https://stlinterresults.blob.core.windows.net/$web/connect/connect-model.html" 
                target="_blank" 
                rel="noopener noreferrer">Model</a>
            </li>
            <li>
              <a href="https://stlinterresults.blob.core.windows.net/$web/connect/connect-org.html" 
                target="_blank" 
                rel="noopener noreferrer">Org</a>
            </li>
            <li>
              <a href="https://stlinterresults.blob.core.windows.net/$web/connect/connect-pset.html" 
                target="_blank" 
                rel="noopener noreferrer">PSet</a>
            </li>
            <li>
              <a href="https://stlinterresults.blob.core.windows.net/$web/connect/connect-tcps.html" 
                target="_blank" 
                rel="noopener noreferrer">tcps</a>
            </li>
            <li>
              <a href="https://stlinterresults.blob.core.windows.net/$web/connect/connect-topics.html" 
                target="_blank" 
                rel="noopener noreferrer">Topics</a>
            </li>
          </ul>
        </div>
        <div className='max-w-xl self-center'>
        <h2 className="text-2xl py-3">Transportation</h2>
          <ul>
            <li>
              <a href="https://stlinterresults.blob.core.windows.net/$web/transportation/event-receiver.html" 
                target="_blank" 
                rel="noopener noreferrer">Event Receiver</a>
            </li>
            <li>
              <a href="https://stlinterresults.blob.core.windows.net/$web/transportation/event-subscription.html" 
                target="_blank" 
                rel="noopener noreferrer">Event Subscription</a>
            </li>
            <li>
              <a href="https://stlinterresults.blob.core.windows.net/$web/transportation/transformation-service.html" 
                target="_blank" 
                rel="noopener noreferrer">Transfomation</a>
            </li>
            <li>
              <a href="https://stlinterresults.blob.core.windows.net/$web/transportation/rating-service.html" 
                target="_blank" 
                rel="noopener noreferrer">Rating</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
