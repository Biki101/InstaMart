import { createStore } from "redux";
import rootReducer from "./root-reducer";
// import createSagaMiddleware from "redux-saga";
import persistStore from "redux-persist/es/persistStore";
// import logger from "redux-logger";
// import rootSaga from "./root-sga";

// const sagaMiddleware = createSagaMiddleware();

// const middlewares = [];

// if (process.env.NODE_ENV === "development") {
//   middlewares.push(logger);
// }

export const store = createStore(rootReducer);

// sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
