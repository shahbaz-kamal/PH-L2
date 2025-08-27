import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";

import type { Book } from "../../../types/books";
import {
  useBorrowBookMutation,
  useGetBorrowSummaryQuery,
} from "../../../redux/api/borrowApi";
import {
  useGetAllBookQuery,
  useGetSingleBookQuery,
} from "../../../redux/api/bookApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

interface BorrowModalProps {
  bookData: Partial<Book>;

  isOpen?: boolean;
  setIsOpen?: any;
}

const BorrowModal = ({
  bookData,

  setIsOpen,
}: BorrowModalProps) => {
  //   console.log("from modal", bookData, inWhichComponentModalIsPlaced);
  const [borrowBook] = useBorrowBookMutation(undefined);
  const [quantities, setQuantities] = useState<number>(0);
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const { refetch } = useGetAllBookQuery(undefined);
  const { refetch: refetchDetails } = useGetSingleBookQuery(bookData._id || "");
  const { refetch: refetchBorrowSummary } = useGetBorrowSummaryQuery(undefined);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const quantity = quantities;
    if (!quantities) {
      Swal.fire({
        icon: "error",

        text: "You need to borrow at least 1 book to continue",
      });
    }
    const newBorrowData = {
      book: bookData._id,
      quantity,
      dueDate: startDate?.toISOString(),
    };
    const res = await borrowBook(newBorrowData);

    if (res.data.success) {
      Swal.fire({
        title: "Good job!",
        text: "Your  book borrowing was successful",
        icon: "success",
      });
      setIsOpen(false);
      refetch();
      refetchDetails();
      refetchBorrowSummary();
      navigate("/borrow-summary");
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation(); // Stop event propagation
    setIsOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const availableCopies = bookData.copies || 0;

    if (value > availableCopies) {
      // Show alert if quantity exceeds available copies
      Swal.fire({
        title: "Invalid Quantity",
        text: `You cannot borrow more than ${availableCopies} copies.`,
        icon: "warning",
        confirmButtonText: "OK",
      });
      e.target.value = availableCopies.toString();
      // Set to maximum available copies
      setQuantities(availableCopies);
    } else if (value < 1) {
      // Prevent values less than 1
      setQuantities(1);
    } else {
      setQuantities(value);
    }
  };
  return (
    <>
      <div
        onClick={handleOverlayClick}
        className="fixed inset-0 flex items-center justify-center z-50 p-4"
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsOpen(false)}
        />

        {/* Modal content */}
        <div className="relative z-50 w-full max-w-md bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text p-6 rounded-md mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              {/* Available info */}
              <div>
                <p>
                  Book Name:{" "}
                  <span className="font-extrabold">{bookData.title}</span>
                </p>
                <p>
                  Available copies:{" "}
                  <span className="font-extrabold">{bookData.copies}</span>
                </p>
              </div>

              {/* Quantity */}
              <div className="grid gap-3">
                <Label htmlFor="quantity-1">Quantity</Label>
                <Input
                  type="number"
                  onChange={handleQuantityChange}
                  id="quantity-1"
                  name="quantity"
                  className="w-full rounded-md border border-light-primary/30 dark:border-dark-primary/30 bg-white dark:bg-dark-background px-4 py-3 text-light-text dark:text-dark-text placeholder-gray-400 dark:placeholder-gray-500 focus:border-light-primary dark:focus:border-dark-primary focus:ring-2 focus:ring-light-primary/50 dark:focus:ring-dark-primary/50 outline-none transition-all"
                />
              </div>

              {/* Due Date */}
              <div className="grid gap-3">
                <Label htmlFor="dueDate-1">Due Date</Label>
                <DatePicker
                  name="dueDate"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="w-full rounded-md border border-light-primary/30 dark:border-dark-primary/30 bg-white dark:bg-dark-background px-4 py-3 text-light-text dark:text-dark-text placeholder-gray-400 dark:placeholder-gray-500 focus:border-light-primary dark:focus:border-dark-primary focus:ring-2 focus:ring-light-primary/50 dark:focus:ring-dark-primary/50 outline-none transition-all"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex gap-2 justify-end">
              {/* Close Button */}
              <Button
                type="button"
                onClick={handleClose}
                variant="outline"
                className="hover:bg-light-primary hover:cursor-pointer dark:hover:bg-dark-primary hover:text-dark-text dark:hover:text-light-text border-light-primary dark:border-dark-primary"
              >
                Close
              </Button>

              {/* Borrow Button */}
              <Button
                type="submit"
                variant="outline"
                className="hover:bg-light-primary hover:cursor-pointer dark:hover:bg-dark-primary hover:text-dark-text dark:hover:text-light-text border-light-primary dark:border-dark-primary"
              >
                Borrow
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BorrowModal;
