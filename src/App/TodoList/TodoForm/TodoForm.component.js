// @flow
import React from 'react';
// @flow
import { XInput, type XInputEvent } from 'Framework/ReactXelToolkit';
import styles from './TodoForm.style';

type Props = {
  inputValue: string,
  onValueSubmit: (value: string) => void,
  style: {},
};

type State = {
  inputValue: string,
}

export const KEYCODE_ENTER = 13;

export default class TodoForm extends React.Component<Props, State> {
  static defaultProps = {
    inputValue: '',
    style: {},
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: props.inputValue,
    };
  }

  onButtonClick = () => {
    if (this.state.inputValue) {
      this.submit();
    }
  }

  onInputKeyup = (event: XInputEvent) => {
    if (event.keyCode === KEYCODE_ENTER) {
      this.submit();
    } else {
      this.setState({
        inputValue: event.target.value,
      });
    }
  }

  submit() {
    this.props.onValueSubmit(this.state.inputValue);
    this.setState({
      inputValue: '',
    });
  }

  props: Props;

  render() {
    return (
      <x-box style={this.props.style}>
        <XInput
          style={styles.input}
          value={this.state.inputValue}
          onKeyup={this.onInputKeyup}
        />
        <x-button onClick={this.onButtonClick}>
          <x-label>Add Todo</x-label>
        </x-button>
      </x-box>
    );
  }
}
