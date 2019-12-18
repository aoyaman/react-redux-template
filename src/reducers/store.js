import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import home from '../4_Pages/Home/HomeReducer';
import addBoardDialog from '../2_Organisms/AddBoardDialog/AddBoardDialogReducer';
import addTodoDialog from '../2_Organisms/AddTodoDialog/AddTodoDialogReducer';

const rootReducer = combineReducers({
  home,
  addBoardDialog,
  addTodoDialog,
});

// 永続化の設定
const persistConfig = {
  key: 'root', // Storageに保存されるキー名を指定する
  storage, // 保存先としてlocalStorageがここで設定される
  // whitelist: ['todos'] // Stateは`todos`のみStorageに保存する
  // blacklist: ['visibilityFilter'] // `visibilityFilter`は保存しない
};

// 永続化設定されたReducerとして定義
const persistedReducer = persistReducer(persistConfig, rootReducer);


function createStore() {
  const store = reduxCreateStore(
    persistedReducer,
    applyMiddleware(logger),
  );

  return store;
}
const store = createStore();
export const persistor = persistStore(store);
export default store;
