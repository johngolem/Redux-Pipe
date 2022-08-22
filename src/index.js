import { bugAdded } from "./actionsCreators";
import store from "./store";
// import { bugAdded } from "./actions";

//state = reducer(state, action);
//notify the subscribers that the state has changed

// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed", store.getState());
// });

// store.dispatch({
//   type: actions.BUG_ADDED,
//   payload: {
//     description: "Bug 1",
//   },
// });

// unsubscribe();

// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1,
//   },
// });
// console.log(store.getState());

store.dispatch(bugAdded("Bug 1"));

console.log(store.getState());
