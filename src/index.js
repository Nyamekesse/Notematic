import { ProtectedApp } from 'App';
import Note from 'pages/Note/Note';
import NoteBrowse from 'pages/NoteBrowse/NoteBrowse';
import NoteCreate from 'pages/NoteCreate/NoteCreate';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import SignIn from 'pages/SignIn/SignIn';
import SignUp from 'pages/SignUp/SignUp';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { FirebaseApp } from 'utils/firebase';
import './index.css';
import { persistor, store } from './store';

FirebaseApp.init();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<ProtectedApp />}>
              <Route path="/" element={<NoteBrowse />} />
              <Route path="/note/:noteId" element={<Note />} />
              <Route path="/note/new" element={<NoteCreate />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
