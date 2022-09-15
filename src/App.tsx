import { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { RootRouter } from 'rootRouter'

import { GlobalProvider } from 'context/GlobalProvider'
import { MovieListProvider } from 'context/MovieListContext/MovieListProvider'

const App: FC = () => {
  return (
    <GlobalProvider>
      <MovieListProvider>
        <Router>
          <RootRouter />
        </Router>
      </MovieListProvider>
    </GlobalProvider>
  )
}

export default App