export interface Borrow {
  _id: string;
  book: string;
  quantity: number;
  dueDate: string;
}

export interface BorrowSummary {
  totalQuantity: number;
  book: {
    title: string;
    isbn: string | number;
  };
}

export interface InitialStateBorrow {
  value: number;
  borrowSummaryData: BorrowSummary[];
}
