import React, {Suspense} from 'react';
import './styles/index.scss'
import {classNames} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/provider/ThemeProvider';
import {AppRouter} from 'app/provider/router/ui';
import {Navbar} from 'widget/Navbar';
import {Sidebar} from 'widget/Sidebar/ui/Sidebar/Sidebar';

const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className={'content-page'}>
                    <Sidebar/>
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;