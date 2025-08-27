import { useEffect, useState } from "react";
import Heading from "../../components/Shared/Heading";
import {
  useDeleteBookMutation,
  useGetAllBookQuery,
} from "../../redux/api/bookApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setAllBookData } from "../../redux/features/books/bookSlice";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { PencilOff, Trash, View } from "lucide-react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import BorrowModal from "../../components/Shared/BorrowModal/BorrowModal";
import type { Book } from "../../types/books";
import LoadingComponent from "../../components/Shared/LoadingComponent/LoadingComponent";

const AllBooks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const { data,isLoading } = useGetAllBookQuery(undefined);
  const [deleteBook] = useDeleteBookMutation(undefined);
  const dispatch = useAppDispatch();
  const allBookData = useAppSelector((state) => state.book.allBookData);

  useEffect(() => {
    if (data && data.data)
      dispatch(setAllBookData({ allBookData: data.data || [] }));
  }, [data]);

  console.log(allBookData);
  //   for showing in category tabs
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  useEffect(() => {
    if (allBookData.length > 0) {
      const uniqueCategories = Array.from(
        new Set(allBookData.map((book) => book.genre))
      );
      uniqueCategories.unshift("ALL");
      setCategories(uniqueCategories);
    }
  }, [allBookData]);
  console.log(categories);

  // deleting
  const handleDelete = async (id: string, title: string) => {
    // console.log("deleting", id);
    Swal.fire({
      title: `Do you want to Delete ${title} from the booklist?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't delete`,
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const res = await deleteBook(id);
        if (res?.data?.success) {
          Swal.fire({
            title: "Good job!",
            text: `${title} is deleted from the booklist.`,
            icon: "success",
          });
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  const handleBorrow = (book:Book) => {
    setSelectedBook(book);
    setIsOpen(true);
  };

  if(isLoading) return <LoadingComponent></LoadingComponent>
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
        <title>All Books || BookNest</title>
      <header>
        <Heading title={"Our Book"} subtitle="Find Our latest books"></Heading>
      </header>
      <section className="text-light-text dark:text-dark-text ">
        {/* catageory div */}
        {categories.length > 0 && (
          <Tabs defaultValue={categories[0] || "all"} className="w-full">
            <TabsList className="w-full flex-wrap mb-3 md:mb-6">
              {categories.map((cat, index) => (
                <TabsTrigger
                  key={index}
                  onClick={() => setSelectedCategory(cat)}
                  value={cat}
                  className={`text-light-text dark:text-dark-text ${
                    cat === selectedCategory
                      ? "opacity-100  bg-light-primary/50 dark:bg-dark-primary/50"
                      : "opacity-50"
                  }`}
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
            {/* Tabs Content */}
            {categories.map((cat, index) => (
              <TabsContent key={index} value={cat}>
                <Table>
                  <TableCaption>
                    {" "}
                    {cat === "ALL" ? "All Books" : `Books in ${cat}`}
                  </TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead></TableHead>
                      <TableHead></TableHead>
                      <TableHead className="font-bold">Title</TableHead>
                      <TableHead className="font-bold">Author</TableHead>
                      <TableHead className="font-bold">Genre</TableHead>
                      <TableHead className="font-bold">ISBN</TableHead>
                      <TableHead className="font-bold">Copies</TableHead>
                      <TableHead className="font-bold">Availability</TableHead>
                      <TableHead className="font-bold">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {allBookData
                      .filter((book) => cat === "ALL" || book.genre === cat) // filter by category
                      .map((book, idx) => (
                        <TableRow key={book._id}>
                          <TableCell>{idx + 1}</TableCell>
                          <TableCell>
                            <div className="w-20 max-h-30 object-cover">
                              <img src={book.coverPage} alt="" />
                            </div>
                          </TableCell>
                          <TableCell className="font-medium">
                            {book.title}
                          </TableCell>
                          <TableCell>{book.author}</TableCell>
                          <TableCell>{book.genre}</TableCell>
                          <TableCell>{book.isbn || "—"}</TableCell>
                          <TableCell>{book.copies || "—"}</TableCell>
                          <TableCell>
                            {book.available ? (
                              <span className="text-green-600 font-semibold">
                                Available
                              </span>
                            ) : (
                              <span className="text-red-600 font-semibold">
                                Unavailable
                              </span>
                            )}
                          </TableCell>
                          <TableCell className="">
                            <div className="flex gap-2 items-center">
                              <div className="relative group cursor-pointer transition ">
                                <Link to={`/books/${book._id}`}>
                                  <button className="px-2 py-1 text-sm bg-blue-500 hover:bg-blue-600  text-white rounded-md hover:opacity-80 hover:cursor-pointer">
                                    <View />
                                  </button>
                                </Link>
                                <p className="opacity-0 absolute group-hover:opacity-100 group-hover:cursor-pointer -top-6 font-bold text-light-color-text dark:text-dark-color-text bg-light-background dark:bg-dark-background">
                                  View Details
                                </p>
                              </div>
                              <div className="relative group cursor-pointer transition ">
                                <Link to={`/edit-book/${book._id}`}>
                                  <button className="px-2 py-1 text-sm bg-green-500 hover:bg-green-600  text-white rounded-md hover:opacity-80 hover:cursor-pointer ">
                                    <PencilOff />
                                  </button>
                                </Link>
                                <p className="opacity-0 absolute group-hover:opacity-100 group-hover:cursor-pointer -top-6 font-bold text-light-color-text dark:text-dark-color-text bg-light-background dark:bg-dark-background">
                                  Edit Book
                                </p>
                              </div>
                              <div className="relative group cursor-pointer transition ">
                                <button
                                  onClick={() =>
                                    book._id &&
                                    book.title &&
                                    handleDelete(book._id, book.title)
                                  }
                                  className="px-2 py-1 text-sm bg-red-500 hover:bg-red-600  text-white rounded-md hover:opacity-80 hover:cursor-pointer"
                                >
                                  <Trash />
                                </button>
                                <p className="opacity-0 absolute group-hover:opacity-100 group-hover:cursor-pointer -top-6 font-bold text-light-color-text dark:text-dark-color-text hover:cursor-poiter bg-light-background dark:bg-dark-background">
                                  Delete
                                </p>
                              </div>
                              <button
                                onClick={() => handleBorrow(book)}
                                className=" rounded-md bg-light-primary dark:bg-dark-primary hover:cursor-pointer hover:bg-light-primary/80 dark:hover:bg-dark-primary/90 px-4 py-1 text- dark:text-light-text text-lg font-semibold  outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed text-dark-text"
                              >
                                Borrow
                              </button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TabsContent>
            ))}
          </Tabs>
        )}
      </section>
      {isOpen && selectedBook && (
        <BorrowModal
          isOpen={isOpen}
          bookData={selectedBook}
          setIsOpen={setIsOpen}
        ></BorrowModal>
      )}
    </div>
  );
};

export default AllBooks;
