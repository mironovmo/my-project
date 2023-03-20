import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ErrorPage.module.scss'
import {useTranslation} from 'react-i18next';

interface ErrorPageProps {
    className?: string
}

export const ErrorPage = ({className}: ErrorPageProps) => {
    const { t } = useTranslation()

    const pageReload = () => {
        location.reload()
    }

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>{t('Произошла не предвиденная ошибка')}</p>
            <button onClick={pageReload}>
                {t('Перезагрузить страницу')}
            </button>
        </div>
    );
};
