import { storiesOf } from '@storybook/html';
import notes from './readme.md';

storiesOf('Quiz basic', module)
.add('quiz-checkbox', () => {
  return `<quiz-checkbox label="this a question" value="one"></quiz-checkbox>`
}, {notes})
