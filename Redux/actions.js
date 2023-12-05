// Action Types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
// Action Creators
export const incrementCount = () => ({
 type: INCREMENT
});
export const decrementCount = () => ({
 type: DECREMENT
});