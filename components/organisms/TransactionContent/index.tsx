import { NumericFormat } from "react-number-format";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getMemberTransactions } from "../../../services/member";
import ButtonTab from "./ButtonTab";
import TableRow from "./TableRow";
import { historyTransactionTypes } from "../../../services/data-types";

export default function TransactionContent() {
  const [total, setTotal] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [table, setTable] = useState("all");

  const getMemberTransactionsAPI = useCallback(async (value) => {
    const response = await getMemberTransactions(value);
    if (response.error) {
      toast.error(response.message);
    } else {
      console.log("data: ", response);
      setTotal(response.data.total);
      setTransactions(response.data.data);
    }
  }, []);

  useEffect(() => {
    getMemberTransactionsAPI("all");
  }, []);

  const onTableClick = (value) => {
    setTable(value);
    getMemberTransactionsAPI(value);
  };

  const IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          My Transactions
        </h2>
        <div className="mb-30">
          <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
          <h3 className="text-5xl fw-medium color-palette-1">
            <NumericFormat
              value={total}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </h3>
        </div>
        <div className="row mt-30 mb-20">
          <div className="col-lg-12 col-12 main-content">
            <div id="list_status_title">
              <ButtonTab
                onClick={() => onTableClick("all")}
                title="All trx"
                active={table === "all"}
              />
              <ButtonTab
                onClick={() => onTableClick("success")}
                title="Success"
                active={table === "success"}
              />
              <ButtonTab
                onClick={() => onTableClick("pending")}
                title="Pending"
                active={table === "pending"}
              />
              <ButtonTab
                onClick={() => onTableClick("failed")}
                title="Failed"
                active={table === "failed"}
              />
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="list_status_item">
                {transactions.map((transaction: historyTransactionTypes) => (
                  <TableRow
                    key={transaction._id}
                    image={`${IMG}/${transaction.historyVoucherTopup.thumbnail}`}
                    title={transaction.historyVoucherTopup.gameName}
                    category={transaction.historyVoucherTopup.gameName}
                    item={`${transaction.historyVoucherTopup.coinQuantity} ${transaction.historyVoucherTopup.coinName}`}
                    price={transaction.value}
                    status={transaction.status}
                    id={transaction._id}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
