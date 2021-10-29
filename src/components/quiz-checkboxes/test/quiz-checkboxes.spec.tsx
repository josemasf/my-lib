import { newSpecPage } from '@stencil/core/testing';
import { QuizCheckboxes } from '../quiz-checkboxes';

describe('quiz-checkboxes', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [QuizCheckboxes],
      html: `<quiz-checkboxes></quiz-checkboxes>`,
    });
    expect(page.root).toEqualHtml(`
      <quiz-checkboxes>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </quiz-checkboxes>
    `);
  });
});
