import CharacterGallery from '../components/CharacterGallery'
import { render } from '@testing-library/react';
import characterData from '../data/characterData';

it('CharacterGallery Component Renders Without Error', () => {
    render(<CharacterGallery />);
});