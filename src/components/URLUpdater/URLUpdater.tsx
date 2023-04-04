import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useStateContext } from '@/state';

export const URLUpdater = (): null => {
    const router = useRouter();
    const { search, category } = useStateContext();

    useEffect(() => {
        const query = {};
        Object.assign(query, search ? { query: search } : {}, category ? { filter: category } : {});

        void router.push({ query }, undefined, { shallow: true });
    }, [search, category]);

    return null;
};
