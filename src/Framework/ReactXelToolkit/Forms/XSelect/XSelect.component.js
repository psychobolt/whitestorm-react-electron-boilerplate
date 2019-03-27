// @flow
import React, { type Node } from 'react';

type Props = {
  onChange?: (event: CustomEvent, value: number) => any,
  children: Node
}

export default class XSelect extends React.Component<Props> {
  static defaultProps = {
    onChange: () => {},
  }

  constructor(props: Props) {
    super(props);
    this.ref = React.createRef<EventTarget>();
  }

  componentDidMount() {
    const { onChange } = this.props;
    const { current } = this.ref;
    if (current) current.addEventListener('change', onChange);
  }

  ref: React.RefObject<EventTarget>

  render() {
    const { onChange, children, ...rest } = this.props;
    return (
      <x-select ref={this.ref} {...rest}>
        {children}
      </x-select>
    );
  }
}
