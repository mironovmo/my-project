import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from 'entities/Counter/modal/slices/counterSlice';
import { getCounterValue } from 'entities/Counter/modal/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

export const Counter = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1
                data-testid="counter-title"
            >
                {counterValue}
            </h1>
            <Button
                data-testid="increment"
                onClick={increment}
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="decrement"
                onClick={decrement}
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
