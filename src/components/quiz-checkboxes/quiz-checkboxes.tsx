import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'quiz-checkboxes',
  styleUrl: 'quiz-checkboxes.css',
  shadow: true,
})
export class QuizCheckboxes {
   /**
   * Label text
   */
    @Prop() label: string;

  render() {
    return (
      <Host>
        <label><input type="checkbox" id="cbox1" value="first_checkbox" /> {this.label}</label>
      </Host>
    );
  }

}
