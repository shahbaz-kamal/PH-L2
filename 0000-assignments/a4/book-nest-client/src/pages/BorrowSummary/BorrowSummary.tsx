import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setBorrowSummaryData } from "../../redux/features/Borrow/borrowSlice";
import { useGetBorrowSummaryQuery } from "../../redux/api/borrowApi";
import Heading from "../../components/Shared/Heading";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import LoadingComponent from "../../components/Shared/LoadingComponent/LoadingComponent";

const BorrowSummary = () => {
  const dispatch = useAppDispatch();
  const borrowSummaryData = useAppSelector(
    (state) => state.borrow.borrowSummaryData
  );
  const { data, isLoading } = useGetBorrowSummaryQuery(undefined);

  useEffect(() => {
    if (data && data.data) {
      dispatch(setBorrowSummaryData({ borrowSummaryData: data.data || [] }));
    }
  }, [data, dispatch]);

  if (isLoading) {
    return <LoadingComponent></LoadingComponent>;
  }

  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <header>
        <title>Borrow Summary || BookNest</title>
        <Heading title="Borrow Summary" subtitle=""></Heading>
      </header>
      <section className="text-light-text dark:text-dark-text ">
        {/* catageory div */}
        {borrowSummaryData.length > 0 && (
          <Table>
            <TableCaption>Borrow Summary data</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>

                <TableHead className="font-bold">Title</TableHead>
                <TableHead className="font-bold">ISBN</TableHead>
                <TableHead className="font-bold">
                  Total Quantity Borrowed
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {borrowSummaryData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>

                  <TableCell className="font-medium">
                    {item.book.title}
                  </TableCell>
                  <TableCell>{item.book.title}</TableCell>
                  <TableCell>{item.totalQuantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </section>
    </div>
  );
};

export default BorrowSummary;
