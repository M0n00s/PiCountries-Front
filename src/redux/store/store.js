import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { dataReducer } from "../reducers/dataReducer";

const reducersCombi = combineReducers({
	data: dataReducer,
});

export const store = createStore(
	reducersCombi,
	composeWithDevTools(applyMiddleware(thunk))
);
