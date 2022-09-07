import { useRoutes } from 'react-router'

import { paths } from 'constants/path'
import { Homepage, Login, Selections } from 'pages'

export const RootRouter: React.FC = (): JSX.Element => {
    const routes = useRoutes([
      {
        path: paths.home,
        element: <Homepage />
      },
      {
        path: paths.login,
        element: <Login />
      },
      {
        path: paths.selections,
        element: <Selections />
      }
    ])
  
    return <>{routes}</>
  }