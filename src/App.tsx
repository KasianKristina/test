import { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { RootRouter } from 'rootRouter'
import { MovieListProvider } from 'context/MovieListContext/MovieListProvider'
import { Menu } from 'ui/Menu'

import './App.css'

const App: FC = () => {
  return (
    <MovieListProvider>
      <Router>
        <div className="Main">
          <div className="Menu">
            <Menu />
          </div>
          <div className="Content">
            <RootRouter />
          </div>
        </div>
      </Router>
    </MovieListProvider>
  )
}

export default App
