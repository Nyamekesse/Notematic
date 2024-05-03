import { TextCard } from 'components/TextCard/TextCard';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './style.module.css';

const NoteList = () => {
  const navigate = useNavigate();
  const { noteList } = useSelector((store) => store.NOTESLICE);
  return (
    <div className={`row justify-content-center`}>
      {noteList.map((note, index) => {
        return (
          <div className={style.card_container}>
            <TextCard
              key={index}
              title={note.title}
              content={note.content}
              subtitle={note.created_at}
              onClick={() => navigate(`/note/${note.id}`)}
              onClickTrash={() => {}}
            />
          </div>
        );
      })}
    </div>
  );
};

export default NoteList;
