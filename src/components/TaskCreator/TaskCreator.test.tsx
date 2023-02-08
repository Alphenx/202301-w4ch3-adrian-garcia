import { render, screen } from '@testing-library/react';
import TaskCreator from './TaskCreator';

describe('Given a task creator component based in a form', () => {
  test('When component is rendered, should appear an input text and a submit button', () => {
    render(<TaskCreator printTaskChild={jest.fn()} />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});
