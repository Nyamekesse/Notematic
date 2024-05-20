import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, updateDoc } from 'firebase/firestore';
import { FirebaseApp } from 'utils/firebase';

const BASE_URL = 'notamatic-c316d';

export class NoteAPI {
  static async create(note) {
    const response = await addDoc(collection(FirebaseApp.db, 'notes'), note);
    return {
      id: response.id,
      ...note,
    };
  }
  static async fetchAll() {
    const q = query(collection(FirebaseApp.db, 'notes'), orderBy('created_at', 'asc'));
    const res = await getDocs(q);
    return res.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  }
  static async fetchById(noteId) {}
  static async deleteById(noteId) {
    deleteDoc(doc(FirebaseApp.db, 'notes', noteId));
  }
  static async updateById(noteId, note) {
    const q = doc(FirebaseApp.db, 'notes', noteId);
    await updateDoc(q, note);
    return {
      noteId,
      ...note,
    };
  }

  static onShouldSyncNote(onChange) {
    const q = query(collection(FirebaseApp.db, 'notes'));
    const unsub = onSnapshot(q, (querySnapshot) => {
      const isUserPerformingChange = querySnapshot.metadata.hasPendingWrites;
      if (!isUserPerformingChange) {
        onChange();
      }
    });
    return unsub;
  }
}
