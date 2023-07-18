import { TaskDocument } from "src/tasks/tasks.document";

export const FirestoreDatabaseProvider =  'firestoredb';
export const FirestoreOptionsProvider = 'firestoreOptions';
export const FirestoreCollectionProviders: string[] = [
    TaskDocument.collectionName,
];