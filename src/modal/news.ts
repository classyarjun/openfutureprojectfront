// export class News {
//   id?: number; // Optional ID field if needed
//   newsTitle: string = ''; // To match `newsTitle` in your backend
//   newsContent: string = ''; // To match `newsContent` in your backend
//   publishedDate: string = ''; // Store date as string in 'YYYY-MM-DD' format
//   admin: { id: number } = { id: 0 }; // To match the nested admin object

// }
export class News {
  id?: number; // Optional ID field if needed
  newsTitle: string = ''; // To match `newsTitle` in your backend
  newsContent: string = ''; // To match `newsContent` in your backend
  publishedDate?: string; // Store date as string in 'YYYY-MM-DD' format
  admin: { id: number } = { id: 0 }; // To match the nested admin object
}
