import { NoteAPI } from 'api/note-api';
import { TextCard } from 'components/TextCard/TextCard';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteNote } from 'store/noteSlice/note-slice';
import style from './style.module.css';

const NoteList = ({ noteList }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function deleteNote_(note) {
    if (window.confirm('Delete Note?')) {
      NoteAPI.deleteById(note.id);
      dispatch(deleteNote(note));
    }
  }
  return (
    <div className={`row justify-content-center`}>
      {noteList.map((note, index) => {
        return (
          <div className={style.card_container} key={index}>
            <TextCard
              title={note.title}
              content={note.content}
              subtitle={note.created_at}
              onClick={() => navigate(`/note/${note.id}`)}
              onClickTrash={() => deleteNote_(note)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default NoteList;
