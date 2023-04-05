import { useState } from 'react';

import { useFilteredData } from '@/state/hooks';
import { useStateContext } from '@/state';

import { ToggleButtonCategory } from './ToggleButtonCategory';

const BASE_CLASS = 'articles-app__header__toggle-button';

export const ToggleButton = (): JSX.Element | null => {
    const [open, setOpen] = useState(false);
    const { filteredCategories } = useFilteredData();
    const { category, setCategory } = useStateContext();

    //Don't show toggle button if category is selected
    if (category) {
        return null;
    }

    return (
        <div className={BASE_CLASS} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <span>Toggle</span>
            {open && (
                <div className={`${BASE_CLASS}__content`}>
                    {filteredCategories.map((category) => (
                        <ToggleButtonCategory key={category.id} category={category} />
                    ))}
                </div>
            )}
        </div>
    );
};
