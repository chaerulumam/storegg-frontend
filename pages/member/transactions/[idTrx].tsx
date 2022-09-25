import jwtDecode from "jwt-decode";
import React from "react";
import TransactionDetailcontent from "../../../components/organisms/TransactionDetailContent";
import {
  historyTransactionTypes,
  JWTPayloadTypes,
  UserTypes,
} from "../../../services/data-types";
import { getTransactionsDetail } from "../../../services/member";

interface DetailProps {
  transactionsDetail: historyTransactionTypes;
}

export default function Details(props: DetailProps) {
  const { transactionsDetail } = props;
  console.log("transaction: ", transactionsDetail);
  return (
    <section className="transactions-detail overflow-auto">
      <TransactionDetailcontent data={transactionsDetail} />
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
  params: {
    idTrx: string;
  };
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { idTrx } = params;
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
  const response = await getTransactionsDetail(idTrx, jwtToken);
  return {
    props: {
      transactionsDetail: response.data,
    },
  };
}
