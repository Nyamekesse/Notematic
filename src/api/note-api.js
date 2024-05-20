import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { FirebaseApp } from 'utils/firebase';

const BASE_URL = 'http://localhost:3200/notes';

export class NoteAPI {
  static async create(note) {}
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
  static async deleteById(noteId) {}
  static async updateById(noteId, note) {}
}
