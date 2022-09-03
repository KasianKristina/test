import { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { RootRouter } from 'rootRouter'

const App: FC = () => {
  return (
    <Router>
      <RootRouter />
    </Router>
  );
}

export default App;
