import { Sidebar } from 'widget/Sidebar/ui/Sidebar/Sidebar';
import { fireEvent, screen } from '@testing-library/react';
import { RenderWithTranslation }
    from 'shared/lib/tests/RenderWithTranslation/RenderWithTranslation';


describe( 'Sidebar',() => {
    test('Test render', () => {
        RenderWithTranslation(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    test('Test class collapsed', () => {
        RenderWithTranslation(<Sidebar />)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
