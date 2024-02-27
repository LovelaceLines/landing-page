import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Page from '../../../../app/blog/search/page';

describe('Page', () => {
  it('renders search form', () => {
    render(<Page />);
    const searchInput = screen.getByLabelText('Buscar postagens');
    const searchButton = screen.getByRole('button', { name: 'Buscar' });

    expect(searchInput).toBeTruthy();
    expect(searchButton).toBeTruthy();
  });

  it('updates query state on input change', () => {
    render(<Page />);
    const searchInput = screen.getByLabelText('Buscar postagens');

    userEvent.type(searchInput, 'test query');

    expect(searchInput).toBe('test query');
  });

  it('submits form and fetches posts on submit', async () => {
    render(<Page />);
    const searchInput = screen.getByLabelText('Buscar postagens');
    const searchButton = screen.getByRole('button', { name: 'Buscar' });

    userEvent.type(searchInput, 'hello world');
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(screen.getByText('Hello-World!')).toBeTruthy();
    });
  });
});