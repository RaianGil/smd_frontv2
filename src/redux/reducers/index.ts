import { combineReducers } from "redux";

import DTConfigReducer from "./DTConfigReducer";
import FunctionsReducer from "./FunctionsReducer";
import GTConfigReducer from "./GTConfigReducer";
import STConfigReducer from "./STConfigReducer";

const reducers = combineReducers({
    DTConfig: DTConfigReducer,
    GTConfig: GTConfigReducer,
    STConfig: STConfigReducer,
    Function: FunctionsReducer
})

export default reducers