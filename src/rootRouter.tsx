import { useRoutes } from 'react-router'

import { paths } from 'constants/path'
import { CreateWatchlist, Homepage, FormLogin, SelectionList } from 'pages'

export const RootRouter: React.FC = (): JSX.Element => {
  const routes = useRoutes([
    {
      path: paths.home,
      element: <Homepage />
    },
    {
      path: paths.login,
      element: <FormLogin />
    },
    {
      path: paths.selections,
      element: <SelectionList />
    },
    {
      path: paths.create,
      element: <CreateWatchlist />
    }
  ])

  return <>{routes}</>
}
