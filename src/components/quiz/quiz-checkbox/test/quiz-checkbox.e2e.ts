import { newE2EPage } from '@stencil/core/testing';

describe('quiz-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<quiz-checkbox></quiz-checkbox>');

    const element = await page.find('quiz-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
