import { useRoutes } from 'react-router'

import { Homepage } from 'pages/Homepage'
import { Login } from 'pages/Login'
import { paths } from 'constants/path'

export const RootRouter: React.FC = (): JSX.Element => {
    const routes = useRoutes([
      {
        path: paths.home,
        element: <Homepage />
      },
      {
        path: paths.login,
        element: <Login />
      }
    ])
  
    return <>{routes}</>
  }