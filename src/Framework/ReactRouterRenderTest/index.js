// @flow
import React from 'react';
import {
  Route,
  MemoryRouter,
  type Location,
  type LocationShape,
  type Match,
  type RouterHistory,
} from 'react-router-dom';
import { mount } from 'enzyme';

// a way to render any part of your app inside a MemoryRouter
// you pass it a list of steps to execute when the location
// changes, it will call back to you with stuff like
// `match` and `location`, and `history` so you can control
// the flow and make assertions.
type StepArgs = {
  match: Match,
  location: Location,
  history: RouterHistory
};

type Callback = (props: StepArgs) => {};

type TestOptions = {
  initialEntries: Array<LocationShape | string>,
  initialIndex: number,
  steps: Array<Callback>
};

type AssertProps = {
  children: any,
  steps: Array<Callback>,
  match: Match,
  location: Location,
  history: RouterHistory
};

type Props = AssertProps & StepArgs;

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
        const { match, location, history } = this.props;
        nextStep({ match, location, history });
      }
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

const RouteAsserter = (
  { children, initialEntries, initialIndex, steps }: {children: any} & TestOptions,
) => (
  <MemoryRouter
    initialIndex={initialIndex}
    initialEntries={initialEntries}
  >
    <Route render={props => (
      <Assert steps={steps} {...props}>
        {children}
      </Assert>
    )}
    />
  </MemoryRouter>
);

const renderTest = (subject: any, options: TestOptions) => mount(
  <RouteAsserter {...options}>
    {subject}
  </RouteAsserter>,
);

export default renderTest;
