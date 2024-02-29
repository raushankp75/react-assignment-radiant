import './App.css'
import { Layout } from './layout'
import { WebsiteBuilder } from './pages'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<WebsiteBuilder />} />
      </Routes>
    </Layout>
  )
}

export default App
