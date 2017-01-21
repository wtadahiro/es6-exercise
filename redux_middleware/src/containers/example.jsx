import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import {
  FooInput,
} from '../components/components';
import { updateFoo } from '../actions/action.js';

class Example extends Component {
  static propTypes = {
    foo: PropTypes.string.isRequired,
    handleChangeFoo: PropTypes.func.isRequired,
  };

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <FooInput
          value={this.props.foo}
          onChange={this.props.handleChangeFoo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  foo: state.foo,
});

const mapDispatchToProps = dispatch => ({
  handleChangeFoo: (foo) => {
    dispatch(updateFoo(foo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Example);
