import { render } from '@testing-library/react';
import App from '../App';

describe('<App/> component', () => {
  it('Renders Without Error', () => {
    render(<App />);
  });
});