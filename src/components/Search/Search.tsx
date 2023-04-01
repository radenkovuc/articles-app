import { ChangeEvent, useState } from 'react';

import { useStateContext } from '@/state';

const BASE_CLASS = 'articles-app__search';

export const Search = (): JSX.Element => {
    const { filteredArticles, search, setSearch } = useStateContext();
    const [searchValue, setSearchValue] = useState<string>(search);

    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const onClickSearchButton = () => {
        if (searchValue.length < 3) {
            setSearch('');
        } else {
            setSearch(searchValue);
        }
    };

    return (
        <div className={BASE_CLASS}>
            <div className={`${BASE_CLASS}__content`}>
                <input className={`${BASE_CLASS}__input`} value={searchValue} onChange={onSearchChange} />
                <button className={`${BASE_CLASS}__button`} onClick={onClickSearchButton}>
                    Search
                </button>
            </div>
            <div className={`${BASE_CLASS}__footer`}>Currently showing {filteredArticles.length} results</div>
        </div>
    );
};
