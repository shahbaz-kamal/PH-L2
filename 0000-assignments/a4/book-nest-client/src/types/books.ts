export interface Book {
  _id?: string;
  title: string;
  author: string;
  genre: string;
  isbn: number | string;
  description: string;
  price: number;
  coverPage: string;
  showInHeroSection: boolean;
  copies: number;
  available: boolean;
}

export interface InitialState {
  allBookData: Book[];
  heroData: Book[];
  detailsPageData: Partial<Book>;
  editPageData: Partial<Book>;
}
