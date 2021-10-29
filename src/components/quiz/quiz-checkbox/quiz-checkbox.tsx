import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'quiz-checkbox',
  styleUrl: 'quiz-checkbox.css',
  shadow: true,
})
export class QuizCheckbox {
  /**
   * Option answer
   */
  @Prop() label: string;

  /*
  * Input value
  */
  @Prop() value: string

  render() {
    return (
      <Host>
        <label><input type="checkbox" value={this.value} /> {this.label}</label>
      </Host>
    );
  }

}
