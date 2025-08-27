import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { useGetSingleBookQuery } from "../../redux/api/bookApi";
import { setDetailsPageData } from "../../redux/features/books/bookSlice";
import Heading from "../../components/Shared/Heading";
import BorrowModal from "../../components/Shared/BorrowModal/BorrowModal";
import LoadingComponent from "../../components/Shared/LoadingComponent/LoadingComponent";

const Details = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const detailsPageData = useAppSelector((state) => state.book.detailsPageData);

  const { id } = useParams();
  const { data, isLoading } = useGetSingleBookQuery(id || "");

  console.log(id);
  useEffect(() => {
    if (data?.data) {
      dispatch(setDetailsPageData({ detailsPageData: data.data }));
    }
    console.log(detailsPageData);
  }, [data, dispatch]);

  const handleBorrow = () => {
    setIsOpen(true);
  };
  if (isLoading) return <LoadingComponent></LoadingComponent>;
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Page heading */}
      <title>Book details|| BookNest</title>
      <header className="mb-8">
        <Heading title={`Details of ${detailsPageData?.title || "Book"}`} />
      </header>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Cover Image */}
        <div className="flex justify-center">
          <img
            src={detailsPageData.coverPage}
            alt={detailsPageData.title}
            className="rounded-xl shadow-lg max-h-[450px] object-contain"
          />
        </div>

        {/* Book Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">
            {detailsPageData.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Author:</span>{" "}
            {detailsPageData.author}
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Genre:</span>{" "}
            {detailsPageData.genre}
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            <span className="font-semibold">ISBN:</span> {detailsPageData.isbn}
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Description:</span>{" "}
            {detailsPageData.description}
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Price:</span> $
            {detailsPageData.price}
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Copies:</span>{" "}
            {detailsPageData.copies}
          </p>
          <p
            className={`font-semibold ${
              detailsPageData.available ? "text-green-600" : "text-red-600"
            }`}
          >
            {detailsPageData.available ? "Available" : "Unavailable"}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            {/* <button
              disabled={detailsPageData?.copies === 0}
              className="w-full rounded-md bg-light-primary dark:bg-dark-primary hover:cursor-pointer hover:bg-light-primary/80 dark:hover:bg-dark-primary/90 px-4 py-3 text- dark:text-light-text text-lg font-semibold  outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Borrow
            </button> */}
            <div onClick={handleBorrow} className="w-full">
              <button
                onClick={() => setIsOpen(true)}
                disabled={detailsPageData?.copies === 0}
                className="w-full rounded-md bg-light-primary dark:bg-dark-primary hover:cursor-pointer hover:bg-light-primary/80 dark:hover:bg-dark-primary/90 px-4 py-3 text- dark:text-light-text text-lg font-semibold  outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed text-dark-text"
              >
                Borrow
              </button>
              {isOpen && detailsPageData && (
                <BorrowModal
                  bookData={detailsPageData}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                ></BorrowModal>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
