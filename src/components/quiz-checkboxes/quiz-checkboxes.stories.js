import { storiesOf } from '@storybook/html';
import notes from './readme.md';

storiesOf('Quiz', module)
.add('quiz-checkboxes', () => {
  return `<quiz-checkboxes :label="aaa"></quiz-checkboxes>`
}, {notes})
