import { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { RootRouter } from 'rootRouter'

import { GlobalProvider } from 'context/GlobalProvider'

const App: FC = () => {
  return (
    <GlobalProvider>
      <Router>
        <RootRouter />
      </Router>
    </GlobalProvider>
  );
}

export default App;
