import { newSpecPage } from '@stencil/core/testing';
import { QuizCheckbox } from '../quiz-checkbox';

describe('quiz-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [QuizCheckbox],
      html: `<quiz-checkbox></quiz-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <quiz-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </quiz-checkbox>
    `);
  });
});
