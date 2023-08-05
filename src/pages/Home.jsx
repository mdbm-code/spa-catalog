import { useEffect, useState } from 'react';
import { getAllCategories } from '../api';
import Preloader from '../components/Preloader';
import CategoryList from '../components/CategoryList';
import Search from '../components/Search';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom';

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  //при открытии страницы проверяем наличие в URL
  //параметров для поиска через
  const { pathname, search } = useLocation();
  useEffect(
    function loadCategoriesFromBD() {
      getAllCategories().then((data) => {
        setCatalog(data.categories);
        setFilteredCatalog(
          search
            ? data.categories.filter((item) =>
                item.strCategory
                  .toLowerCase()
                  .includes(search.split('=')[1].toLowerCase())
              )
            : data.categories
        );
      });
    },
    [search]
  );

  //обработчик нажатия кнопки Поиск. Функцию handleSearch
  //мы спускаем через пропсы в компонент <Search />
  const { push } = useHistory();
  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );

    //Дописываем в URL параметры поиска
    push({
      pathname,
      search: `?search=${str}`,
    });
  };

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
}

export { Home };
