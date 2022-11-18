import { composeStories } from '@storybook/testing-react';
import * as stories from '../__stories__/Translation.stories'
import { render, screen } from '@testing-library/react';

const { DefaultTranslationComponent } = composeStories(stories);

describe('<Translation Component />', () => {
  it('Should show Translation component', () => {
    render(<DefaultTranslationComponent />);
    expect(screen.getByText('🇬🇧')).toBeInTheDocument();
    expect(screen.getByText('🇳🇱')).toBeInTheDocument();
    expect(screen.getByText('🇧🇬')).toBeInTheDocument();
  });
});
