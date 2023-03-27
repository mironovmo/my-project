import { Theme } from 'app/provider/ThemeProvider';
import { Story } from '@storybook/react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    return (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    )
}
