import { FC, useEffect } from 'react';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/provider/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducersList,
    removeAuthUnmount: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAuthUnmount,
    } = props;
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} Reducer` });
        });
        return () => {
            if (removeAuthUnmount) {
                Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY ${name} Reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, [dispatch]);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            { children }
        </>
    );
};
