import { NoteAPI } from 'api/note-api';
import ButtonPrimary from 'components/ButtonPrimary/ButtonPrimary';
import Header from 'components/Header/Header';
import { withAuthRequired } from 'hoc/withAuthRequired';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { setNoteList } from 'store/noteSlice/note-slice';
import style from './style.module.css';

export function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function fetchAllNotes() {
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNoteList(noteList));
  }
  useEffect(() => {
    const unsub = NoteAPI.onShouldSyncNote(fetchAllNotes);
    return () => {
      unsub();
    };
  }, []);
  return (
    <div>
      <Header />
      <ButtonPrimary className={style.buttonAdd} onClick={() => navigate('/note/new')}>
        +
      </ButtonPrimary>

      <div className={style.workspace}>
        <Outlet />
      </div>
    </div>
  );
}

export const ProtectedApp = withAuthRequired(App);