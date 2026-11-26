import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import PageNotFound from './page-not-found';

describe('PageNotFound', () => {
  it('shows the "Page not found" title', () => {
    render(<PageNotFound />);
    const heading = screen.getByRole('heading', { name: /page not found/i });
    expect(heading).toBeInTheDocument();
  });
});
