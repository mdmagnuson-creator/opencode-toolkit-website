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

describe('ConceptsPage - US-001: The Human in the Loop (you) entry', () => {
  it('renders the The Human in the Loop (you) concept card', () => {
    render(<ConceptsPage />)

    // Check that the The Human in the Loop (you) entry is present
    expect(screen.getByRole('heading', { name: 'The Human in the Loop (you)' })).toBeInTheDocument()
  })

  it('displays correct description for The Human in the Loop (you)', () => {
    render(<ConceptsPage />)

    expect(
      screen.getByText(/Practical collaboration workflows for working with Planner, Builder, and Toolkit/i)
    ).toBeInTheDocument()
  })

  it('links to /concepts/the-human-in-the-loop', () => {
    render(<ConceptsPage />)

    // Find all links that point to the the-human-in-the-loop page
    const links = screen.getAllByRole('link', { name: /The Human in the Loop \(you\)|Learn more/i })
    const humanModesLink = links.find((link) => link.getAttribute('href') === '/concepts/the-human-in-the-loop')

    expect(humanModesLink).toBeInTheDocument()
  })

  it('renders the page title correctly', () => {
    render(<ConceptsPage />)

    expect(screen.getByRole('heading', { level: 1, name: 'The Big Picture' })).toBeInTheDocument()
  })
})
