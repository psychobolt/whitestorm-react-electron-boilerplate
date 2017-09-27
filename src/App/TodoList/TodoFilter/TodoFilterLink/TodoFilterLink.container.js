import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { XTab } from 'Framework/ReactXelToolkit';
import Filters from '../TodoFilter.filters';

const mapParamToFilter = param => param || Filters.ALL;

export const ROOT = '/';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === mapParamToFilter(ownProps.match.params.filter),
  goto: () => {
    ownProps.history.push(ownProps.filter === Filters.ALL ? ROOT : ownProps.filter);
  },
});

export default withRouter(connect(mapStateToProps)(XTab));
