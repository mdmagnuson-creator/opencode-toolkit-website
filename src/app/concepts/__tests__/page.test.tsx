import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ConceptsPage from '../page'

// Mock next/link
jest.mock('next/link', () => {
  return function MockLink({ children, href }: { children: React.ReactNode; href: string }) {
    return <a href={href}>{children}</a>
  }
})

// Mock the Breadcrumbs component to avoid usePathname issues in tests
jest.mock('@/components/Breadcrumbs', () => ({
  Breadcrumbs: () => <nav data-testid="breadcrumbs">Breadcrumbs</nav>,
}))

describe('ConceptsPage - US-001: Human-in-the-Loop Modes entry', () => {
  it('renders the Human-in-the-Loop Modes concept card', () => {
    render(<ConceptsPage />)

    // Check that the Human-in-the-Loop Modes entry is present
    expect(screen.getByRole('heading', { name: 'Human-in-the-Loop Modes' })).toBeInTheDocument()
  })

  it('displays correct description for Human-in-the-Loop Modes', () => {
    render(<ConceptsPage />)

    expect(
      screen.getByText(/Practical collaboration workflows for working with Planner, Builder, and Toolkit/i)
    ).toBeInTheDocument()
  })

  it('links to /concepts/human-work-modes', () => {
    render(<ConceptsPage />)

    // Find all links that point to the human-work-modes page
    const links = screen.getAllByRole('link', { name: /Human-in-the-Loop Modes|Learn more/i })
    const humanModesLink = links.find((link) => link.getAttribute('href') === '/concepts/human-work-modes')

    expect(humanModesLink).toBeInTheDocument()
  })

  it('renders the page title correctly', () => {
    render(<ConceptsPage />)

    expect(screen.getByRole('heading', { level: 1, name: 'The Big Picture' })).toBeInTheDocument()
  })
})
