import { screen } from '@testing-library/react';
import ComponentRender from 'shared/lib/tests/ComponentRender/ComponentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Test render', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('counter-title')).toHaveTextContent('10');
    });
    test('Test increment', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('increment'));
        expect(screen.getByTestId('counter-title')).toHaveTextContent('11');
    });
    test('Test decrement', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('decrement'));
        expect(screen.getByTestId('counter-title')).toHaveTextContent('9');
    });
});
