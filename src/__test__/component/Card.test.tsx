import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CardKitaBisa from '../../components/Element/Card'

describe('Card Component', () => {
    it('render the Card component', () => {
        render(<CardKitaBisa><><h1>Tes</h1></></CardKitaBisa>)
        const heading = screen.getByText('Tes')
        expect(heading).toBeInTheDocument()
    })

})