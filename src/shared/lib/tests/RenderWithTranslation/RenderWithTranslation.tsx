import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nOfTests from 'shared/config/i18n/i18nOfTests';
import { render } from '@testing-library/react';

export function RenderWithTranslation(component: ReactNode) {
    return render(
        <I18nextProvider i18n={i18nOfTests}>
            { component }
        </I18nextProvider>
    )
}
