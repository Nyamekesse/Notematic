import SearchBar from 'components/SearchBar/SearchBar';
import NoteList from 'containers/NoteList/NoteList';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NoteBrowse = () => {
  const noteList = useSelector((store) => store.NOTESLICE.noteList);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredNoteList = noteList.filter((note) => {
    const containsTitle = note.title.trim().toLowerCase().includes(searchTerm.trim().toLowerCase());
    const containsContent = note.content.trim().toLowerCase().includes(searchTerm.trim().toLowerCase());
    return containsTitle || containsContent;
  });
  return (
    <>
      <div className="row justify-content-center mb-5">
        <div className="col-sm-12 col-md-4">
          <SearchBar onTextChange={setSearchTerm} placeHolder="Search your notes..." />
        </div>
        {noteList?.length === 0 && (
          <div className="d-flex justify-content-center">
            <span>
              You don't have any note, do you want to <Link to="/note/new">create one</Link>
            </span>
          </div>
        )}
        <NoteList noteList={filteredNoteList} />
      </div>
    </>
  );
};

export default NoteBrowse;
