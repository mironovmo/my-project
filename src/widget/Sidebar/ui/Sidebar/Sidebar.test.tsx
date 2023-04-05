import { Sidebar } from 'widget/Sidebar/ui/Sidebar/Sidebar';
import { fireEvent, screen } from '@testing-library/react';
import ComponentRender from "shared/lib/tests/ComponentRender/ComponentRender";


describe( 'Sidebar',() => {
    test('Test render', () => {
        ComponentRender(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    test('Test class collapsed', () => {
        ComponentRender(<Sidebar />)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
