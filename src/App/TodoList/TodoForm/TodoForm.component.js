// @flow
import React from 'react';
import styled from 'styled-components';

import { XInput, type XInputEvent } from 'Framework/ReactXelToolkit';
import * as styles from './TodoForm.style';

type Props = {
  inputValue?: string,
  onValueSubmit: (value: string) => void,
  className: string,
};

type State = {
  inputValue?: string,
}

const Input = styled(XInput)`${styles.input}`;

export const KEYCODE_ENTER = 13;

export default class TodoForm extends React.Component<Props, State> {
  static defaultProps = {
    inputValue: '',
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: props.inputValue,
    };
  }

  onButtonClick = () => {
    const { inputValue } = this.state;
    if (inputValue) {
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
    const { inputValue } = this.state;
    const { onValueSubmit } = this.props;
    onValueSubmit(inputValue || '');
    this.setState({
      inputValue: '',
    });
  }

  props: Props;

  render() {
    const { className } = this.props;
    const { inputValue } = this.state;
    return (
      <x-box class={className}>
        <Input
          value={inputValue}
          onKeyup={this.onInputKeyup}
        />
        <x-button onClick={this.onButtonClick}>
          <x-label>
            {'Add Todo'}
          </x-label>
        </x-button>
      </x-box>
    );
  }
}
