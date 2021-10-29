import { newE2EPage } from '@stencil/core/testing';

describe('quiz-checkboxes', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<quiz-checkboxes></quiz-checkboxes>');

    const element = await page.find('quiz-checkboxes');
    expect(element).toHaveClass('hydrated');
  });
});
