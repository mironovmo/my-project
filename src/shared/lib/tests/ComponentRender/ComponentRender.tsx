import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nOfTests from 'shared/config/i18n/i18nOfTests';
import { MemoryRouter } from 'react-router-dom';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/provider/StoreProvider';

export interface componentPath {
    router?: string
    initialState?: DeepPartial<StateSchema>
}

const ComponentRender = (component: ReactNode, options: componentPath = {}) => {
    const {
        router = '/',
        initialState,
    } = options;
    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[router]}>
                <I18nextProvider i18n={i18nOfTests}>
                    { component }
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
};

export default ComponentRender;
