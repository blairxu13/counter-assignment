import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter'; // Adjust the path as needed

beforeEach(() => {
  render(<Counter />);
});

test('renders counter message', () => {
  // Check if the Counter header is in the document
  const counterHeader = screen.getByText(/Counter/i);
  expect(counterHeader).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Check if the initial count value is 0 using data-testid
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Find the increment button and click it
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);

  // Check if the count has incremented using data-testid
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // First increment the count to ensure we have something to decrement
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);

  // Then click the decrement button
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);

  // Check if the count has decremented back to 0 using data-testid
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('0');
});
