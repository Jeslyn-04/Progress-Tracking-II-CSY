import React from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from './actions';
const CounterComponent = ({ count, incrementCount, decrementCount }) => (
 <div>
 <h1>Count: {count}</h1>
 <button onClick={incrementCount}>Increment</button>
 <button onClick={decrementCount}>Decrement</button>
 </div>
);
const mapStateToProps = state => ({
 count: state.count
});
const mapDispatchToProps = {
 incrementCount,
 decrementCount
};
// Connect Redux to React
export default connect(mapStateToProps,
mapDispatchToProps)(CounterComponent);