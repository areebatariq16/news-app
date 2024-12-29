import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { NewsProvider } from '../context/NewsContext';
import Newsapp from './Newsapp';

test('fetches and displays news articles', async () => {
  const mockData = { articles: [{ title: 'Test News', description: 'Test Description', urlToImage: 'image_url', url: 'news_url' }] };
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    })
  );

  render(
    <NewsProvider>
      <Newsapp />
    </NewsProvider>
  );

  fireEvent.change(screen.getByPlaceholderText('Search News'), { target: { value: 'test' } });
  fireEvent.click(screen.getByLabelText('Search'));

  await waitFor(() => expect(screen.getByText('Test News')).toBeInTheDocument());
  expect(screen.getByText('Test Description')).toBeInTheDocument();
});
