import { historyTransactionTypes } from "../../../services/data-types";
import Row from "./Row";

interface TransactionsDetailContentProps {
  data: historyTransactionTypes;
}

export default function TransactionDetailcontent(
  props: TransactionsDetailContentProps
) {
  const { data } = props;

  const IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Details #{data._id}
        </h2>
        <div className="details">
          <div className="main-content main-content-card overflow-auto">
            <section className="checkout mx-auto">
              <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                <div className="game-checkout d-flex flex-row align-items-center">
                  <div className="pe-4">
                    <div className="cropped">
                      <img
                        src={`${IMG}/${data.historyVoucherTopup.thumbnail}`}
                        width="200"
                        height="130"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <p className="fw-bold text-xl color-palette-1 mb-10">
                      {data.historyVoucherTopup.gameName}
                    </p>
                    <p className="color-palette-2 m-0">Username: {data.name}</p>
                  </div>
                </div>
                <div>
                  <p className="fw-medium text-center label pending m-0 rounded-pill">
                    {data.status}
                  </p>
                </div>
              </div>
              <hr />
              <div className="purchase pt-30">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">
                  Purchase Details
                </h2>
                <Row lable="Your Game ID" value={data.accountUser} />
                <Row lable="Order ID" value={data._id} />
                <Row
                  lable="Item"
                  value={`${data.historyVoucherTopup.coinQuantity} ${data.historyVoucherTopup.coinName}`}
                />
                <Row lable="Price" value={data.historyVoucherTopup.price} />
                <Row lable="Tax 10%" value={data.tax} />
                <Row
                  lable="Total"
                  value={data.value}
                  className="color-palette-4"
                />
              </div>
              <div className="payment pt-10 pb-10">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">
                  Payment Informations
                </h2>
                <Row lable="Your Account Name" value="Masayoshi Angga Zero" />
                <Row lable="Type" value="Worldwide Transfer" />
                <Row lable="Bank Name" value="Mandiri" />
                <Row lable="Bank Account Name" value="PT Store GG Indonesia" />
                <Row lable="Bank Number" value="1800 - 9090 - 2021" />
              </div>
              <div className="d-md-block d-flex flex-column w-100">
                <a
                  className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                  href="#"
                  role="button"
                >
                  WhatsApp ke Admin
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
