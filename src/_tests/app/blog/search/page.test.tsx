import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Page from '../../../../app/blog/search/page';

describe('Page', () => {
  it('renders search form', () => {
    render(<Page />);
    const searchInput = screen.getByLabelText('Buscar postagens');
    const searchButton = screen.getByRole('button', { name: 'Buscar' });

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('updates query state on input change', () => {
    render(<Page />);
    const searchInput = screen.getByLabelText('Buscar postagens') as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: 'test query' } });

    expect(searchInput.value).toBe('test query');
  });

  it('submits form and fetches posts on submit', async () => {
    render(<Page />);
    const searchInput = screen.getByLabelText('Buscar postagens') as HTMLLabelElement;
    const searchButton = screen.getByRole('button', { name: 'Buscar' });

    fireEvent.change(searchInput, { target: { value: 'hello world' } });
    fireEvent.click(searchButton);

    await waitFor(() => expect(screen.getByText('Hello-World!')).toBeInTheDocument());
  });
});