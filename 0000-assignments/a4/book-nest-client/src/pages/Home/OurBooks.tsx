import { useEffect, useState } from "react";
import Heading from "../../components/Shared/Heading";
import { useGetAllBookQuery } from "../../redux/api/bookApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setAllBookData } from "../../redux/features/books/bookSlice";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { Link } from "react-router";

const OurBooks = () => {
  const { data } = useGetAllBookQuery(undefined);
  const dispatch = useAppDispatch();
  const allBookData = useAppSelector((state) => state.book.allBookData);

  useEffect(() => {
    if (data && data.data)
      dispatch(setAllBookData({ allBookData: data.data || [] }));
  }, [data]);

  // console.log(allBookData);
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
  // console.log(categories);

  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <header>
        <Heading title={"Our Book"} subtitle="Find Our latest books"></Heading>
      </header>
      <section className="textlight-text dark:text-dark-text">
        {/* catageory div */}
        {categories.length > 0 && (
          <Tabs defaultValue={categories[0] || "all"} className="w-full">
            <TabsList className="w-full flex-wrap">
              {categories.map((cat,index) => (
                <TabsTrigger key={index}
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
                {/* Filter and display books of this category */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-3 md:mt-6">
                  {allBookData
                    .filter((book) => cat === "ALL" || book.genre === cat) // if ALL, show all
                    .map((book) => (
                      <div
                        key={book._id}
                        className="shadow dark:shadow-xl  p-4 rounded-lg group relative "
                      >
                        <img
                          src={book.coverPage}
                          alt={book.title}
                          className="h-60 w-auto object-contain rounded-md mx-auto"
                        />
                        <h3 className="mt-2 font-semibold text-light-text dark:text-dark-text text-center">
                          {book.title}
                        </h3>
                        <Link to={`/books/${book._id}`} className="absolute inset-0">
                          
                          <div className="hover:cursor-pointer absolute inset-0 flex items-center justify-center bg-white/10 dark:bg-black/30 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition duration-300">
                            <p className="bg-white dark:bg-dark-background px-2 py-1 text-lg font-bold text-light-text dark:text-dark-text rounded-lg">
                              View Details
                            </p>
                          </div>
                        </Link>
                      </div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        )}
      </section>
    </div>
  );
};

export default OurBooks;
