//lib import section
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'

// CSS
import './css/index.css'


//pages import section
import MainPage from './pages/main'
import ErrorBoundaryPage from './pages/errorBoundary'
import ThreadPage from "./pages/thread";
import Header from './components/header'


let routesList = createBrowserRouter([{
    path: '/', 
    element: <MainPage />
  },{
    path: '/thread',
    element: <ThreadPage />
  },{
    path: '/*',
    element: <ErrorBoundaryPage />
  },{
    path: `/thread/child`,
    element: ''
  }])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router = {routesList}/>
  </StrictMode>,
)
