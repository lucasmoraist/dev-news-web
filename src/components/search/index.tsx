import { useEffect, useState } from 'react';
import style from './search.module.scss';
import { searchPost } from '@/api/post/searchPost';
import { IFindPosts } from '@/interface/findPosts.interface';
import { Link } from 'react-router-dom';

export function Search() {
  const [search, setSearch] = useState<string>('');
  const [searchResults, setSearchResults] = useState<IFindPosts[]>([]);

  useEffect(() => {
    if (search.length > 0) {
      const delay = setTimeout(async () => {
        const response = await searchPost(search);
        setSearchResults(response);
      }, 350);
      return () => clearTimeout(delay);
    }
  }, [search]);

  return (
    <div className={style.container}>
      <div className={style.campoBusca}>
        <i className="bi bi-search" aria-hidden="true"></i>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className={style.inputSearch}
          aria-label="Campo de busca"
        />
      </div>

      <div className={style.results}>
        <ul>
          {searchResults.slice(0, 3).map((s) => (
            <li key={s.id}>
              <Link to={`/post`}>{s.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
