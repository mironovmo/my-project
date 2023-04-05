import React, {ReactNode} from 'react';
import {render} from "@testing-library/react";
import {I18nextProvider} from "react-i18next";
import i18nOfTests from "shared/config/i18n/i18nOfTests";
import {MemoryRouter} from "react-router-dom";

export interface componentPath {
    router?: string
}

const ComponentRender = (component: ReactNode, options: componentPath = {}) => {
    const {
        router = '/'
    } = options
    return render(
        <MemoryRouter initialEntries={[router]}>
            <I18nextProvider i18n={i18nOfTests}>
                { component }
            </I18nextProvider>
        </MemoryRouter>
    );
};

export default ComponentRender;
