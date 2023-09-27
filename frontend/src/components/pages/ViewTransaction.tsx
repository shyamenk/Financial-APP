import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowDownNarrowWide, Filter } from "lucide-react";
import { FormValues } from "../../types/FormValues";
import { useUser } from "../../context/AuthContext";
import { getAllTransactions } from "../../utils/getAllTransactions";

const ViewTransaction: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState<FormValues[]>([]);
  const [sortedData, setSortedData] = useState<FormValues[]>([]);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof FormValues;
    direction: string;
  } | null>(null);
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    const fetchData = async () => {
      try {
        const transactions = await getAllTransactions();
        setData(transactions);
        setSortedData(transactions);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };
    fetchData();
  }, [user]);

  const handleSort = (key: keyof FormValues) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
    const sorted = [...sortedData].sort((a, b) => {
      if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
      if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
      return 0;
    });
    setSortedData(sorted);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="mx-auto pt-10 max-w-4xl rounded-lg ">
      <h1 className="py-6 text-3xl">Transaction View </h1>
      <TableContainer component="div">
        <Table aria-label="transaction table ">
          <TableHead>
            <TableRow className="bg-gray-200">
              <TableCell onClick={() => handleSort("customerName")}>
                <span className="flex gap-2 cursor-pointer">
                  Customer Name <ArrowDownNarrowWide />
                </span>
              </TableCell>
              <TableCell onClick={() => handleSort("transferAmount")}>
                <span className="flex gap-2 cursor-pointer">
                  Transfer Amount <ArrowDownNarrowWide />
                </span>
              </TableCell>
              <TableCell onClick={() => handleSort("transferCurrency")}>
                <span className="flex gap-2 cursor-pointer">
                  Transfer Amount <ArrowDownNarrowWide />
                </span>
              </TableCell>
              <TableCell onClick={() => handleSort("reference")}>
                <span className="flex gap-2 cursor-pointer">
                  Reference <ArrowDownNarrowWide />
                </span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? sortedData.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : sortedData
            ).map((data, index) => (
              <TableRow key={index}>
                <TableCell>{data.customerName}</TableCell>
                <TableCell>{data.transferAmount}</TableCell>
                <TableCell>{data.transferCurrency}</TableCell>
                <TableCell>{data.reference}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={sortedData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default ViewTransaction;
