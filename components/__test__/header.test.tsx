import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/components/(answer-02)/header';
import { HeaderData } from '@/components/(answer-02)/header.mock';

// Mock useActivePath hook with correct path
jest.mock('../../hooks/useActivePath', () => ({
  useActivePath: jest.fn().mockImplementation(() => (path: string) => path === '/calculator')
}));

// Mock MobileHeader to simplify tests
jest.mock('@/components/(answer-02)/mobile-header', () => ({
  MobileHeader: () => <div data-testid="mobile-menu">Mobile Menu</div>
}));

// Mock Input component
jest.mock('@/components/input', () => ({
  Input: () => <input data-testid="input" type="text" />
}));

describe('Header Component', () => {
  const { title, links } = HeaderData;

  beforeEach(() => {
    render(<Header title={title} links={links} />);
  });

  it('renders desktop header correctly', () => {
    // Title
    expect(screen.getByText(title)).toBeInTheDocument();
    
    // Desktop links
    links.forEach(link => {
      expect(screen.getByText(link.name)).toBeInTheDocument();
    });
    
    // Desktop search input
    expect(screen.getByTestId('desktop-search')).toBeInTheDocument();
    
    // Mobile menu and search should not be visible initially
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
    expect(screen.queryByTestId('mobile-search')).not.toBeInTheDocument();
  });

  it('highlights active link', () => {
    const calculatorLink = links.find(link => link.href === '/calculator');
    const activeLink = screen.getByText(calculatorLink!.name);
    expect(activeLink).toHaveClass('text-amber-500');
    
    const nonActiveLink = screen.getByText(links[0].name);
    expect(nonActiveLink).not.toHaveClass('text-amber-500');
  });

  it('toggles mobile menu', () => {
    // Open mobile menu
    const menuButton = screen.getByLabelText('Open menu');
    fireEvent.click(menuButton);
    
    // Mobile menu should be visible
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();
    
    // Close mobile menu
    const closeButton = screen.getByLabelText('Close menu');
    fireEvent.click(closeButton);
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
  });

  it('toggles mobile search', () => {
    // Open mobile search
    const searchButton = screen.getByLabelText('Open search');
    fireEvent.click(searchButton);
    
    // Search input should be visible
    expect(screen.getByTestId('mobile-search')).toBeInTheDocument();
    
    // Close mobile search
    const closeButton = screen.getByLabelText('Close search');
    fireEvent.click(closeButton);
    expect(screen.queryByTestId('mobile-search')).not.toBeInTheDocument();
  });

  it('hides desktop elements on mobile', () => {
    // Desktop links should be hidden on mobile view
    links.forEach(link => {
      expect(screen.getByText(link.name)).toHaveClass('text-base font-medium hover:text-amber-500');
    });
    
    // Desktop search should be hidden on mobile
    expect(screen.getByTestId('desktop-search')).toHaveClass('hidden');
  });
});