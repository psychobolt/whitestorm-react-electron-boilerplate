// @flow
import { mount } from 'enzyme';
import React from 'react';
import { Route, MemoryRouter, type LocationShape } from 'react-router-dom';

// a way to render any part of your app inside a MemoryRouter
// you pass it a list of steps to execute when the location
// changes, it will call back to you with stuff like
// `match` and `location`, and `history` so you can control
// the flow and make assertions.
type Options = {
  initialEntries: Array<LocationShape | string>,
  initialIndex: number,
  steps: Array<Function>
};

type Props = {
  children: any,
  steps: Array<Function>
};

class Assert extends React.Component<Props> {
  componentDidMount() {
    this.assert();
  }

  componentDidUpdate() {
    this.assert();
  }

  assert() {
    const { steps } = this.props;
    if (steps && steps.length) {
      const nextStep = steps.shift();
      if (nextStep) {
        nextStep({ ...this.props });
      }
    }
  }

  props: Props;

  render() {
    return this.props.children;
  }
}

const renderTest = (subject: any, {
  initialEntries,
  initialIndex,
  steps,
}: Options) => mount(
  <MemoryRouter
    initialIndex={initialIndex}
    initialEntries={initialEntries}
  >
    <Route render={(props) => (
      <Assert steps={steps} {...props}>
        {subject}
      </Assert>
    )}
    />
  </MemoryRouter>,
);

export default renderTest;
