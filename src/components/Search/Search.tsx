import { ChangeEvent, KeyboardEvent, useState } from 'react';

import { useStateContext } from '@/state';
import { useFilteredData } from '@/state/hooks';

const BASE_CLASS = 'articles-app__search';

export const Search = (): JSX.Element => {
    const { search, setSearch } = useStateContext();
    const { filteredArticles } = useFilteredData();
    const [searchValue, setSearchValue] = useState<string>(search);

    const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => setSearchValue(e.target.value);

    const onSearchInput = (e: KeyboardEvent): void => {
        if (e.key === 'Enter') {
            onClickSearchButton();
        }
    };

    const onClickSearchButton = (): void => {
        const newSearch = searchValue.length < 3 ? '' : searchValue;
        setSearch(newSearch);
    };

    return (
        <div className={BASE_CLASS}>
            <div className={`${BASE_CLASS}__content`}>
                <input
                    className={`${BASE_CLASS}__input`}
                    value={searchValue}
                    onChange={onSearchChange}
                    onKeyDown={onSearchInput}
                />
                <button className={`${BASE_CLASS}__button`} onClick={onClickSearchButton}>
                    Search
                </button>
            </div>
            <div className={`${BASE_CLASS}__footer`}>Currently showing {filteredArticles.length} results</div>
        </div>
    );
};
