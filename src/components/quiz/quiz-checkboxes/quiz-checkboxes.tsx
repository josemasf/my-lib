import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'quiz-checkboxes',
  styleUrl: 'quiz-checkboxes.css',
  shadow: true,
})
export class QuizCheckboxes {
   /**
   * Option answer
   */
    @Prop() label: string;

  render() {
    return (
      <Host>
        <quiz-checkbox label={this.label} />
      </Host>
    );
  }

}
