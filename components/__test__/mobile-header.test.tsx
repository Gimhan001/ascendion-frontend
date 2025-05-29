import { render, screen } from '@testing-library/react';
import { MobileHeader } from '@/components/(answer-02)/mobile-header';
import { HeaderData } from '@/components/(answer-02)/header.mock';

// Mock useActivePath hook
jest.mock('../../hooks/useActivePath', () => ({
  useActivePath: jest.fn().mockImplementation(() => (path: string) => path === '/calculator')
}));

describe('MobileHeader Component', () => {
  const { links } = HeaderData;

  it('renders mobile links correctly', () => {
    render(<MobileHeader links={links} />);
    
    links.forEach(link => {
      expect(screen.getByText(link.name)).toBeInTheDocument();
      expect(screen.getByText(link.name).closest('a')).toHaveAttribute('href', link.href);
    });
  });

  it('highlights active link in mobile view', () => {
    render(<MobileHeader links={links} />);
    
    const calculatorLink = links.find(link => link.href === '/calculator');
    const activeLink = screen.getByText(calculatorLink!.name);
    expect(activeLink).toHaveClass('text-amber-500');
    
    const nonActiveLink = screen.getByText(links[0].name);
    expect(nonActiveLink).not.toHaveClass('text-amber-500');
  });

  it('applies proper mobile styling', () => {
    render(<MobileHeader links={links} />);
    
    const linkContainer = screen.getByTestId('mobile-header-list');
    expect(linkContainer).toHaveClass('space-y-1');
    
    links.forEach(link => {
      const linkElement = screen.getByText(link.name);
      expect(linkElement.parentElement).toHaveClass('px-2 pt-2 pb-3 space-y-1');
    });
  });
});