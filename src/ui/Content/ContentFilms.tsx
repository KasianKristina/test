import { FC } from 'react';

import { Movie } from 'ui/Movie';
import { useFetchMovies } from 'shared/hooks/fetch';
import { DISCOVER, API_KEY} from 'constants/constants';

import styles from './styles.module.scss';

const url = DISCOVER+"?api_key="+API_KEY;

export const ContentFilms: FC = () => {
  const data = useFetchMovies(url);
  console.log(data)
  return (
    <div className={styles.ContentFilms}>
      {data.map((value) => 
        <Movie key={value.id} {...value} />)}
    </div>
  );
}