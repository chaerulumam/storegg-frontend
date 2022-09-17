import CheckoutConfirmation from "../components/organisms/CheckoutConfirmation";
import CheckoutDetails from "../components/organisms/CheckoutDetails";
import Image from "next/image";
import { JWTPayloadTypes, UserTypes } from "../services/data-types";
import jwtDecode from "jwt-decode";

interface CheckoutProps {
  user: UserTypes;
}

export default function Checkout(props: CheckoutProps) {
  const { user } = props;
  console.log("user: ", user);
  return (
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
      <div className="container-fluid">
        <div className="logo text-md-center text-start pb-50">
          <a className="" href="/#">
            <Image src="/icon/logo.svg" height={60} width={60} />
          </a>
        </div>
        <div className="title-text pt-md-50 pt-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
          <p className="text-lg color-palette-1 mb-0">
            Waktunya meningkatkan cara bermain
          </p>
        </div>
        <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
          <div className="pe-4">
            <div className="cropped">
              <img src="img/Thumbnail-3.png" className="img-fluid" alt="" />
            </div>
          </div>
          <div>
            <p className="fw-bold text-xl color-palette-1 mb-10">
              Mobile Legends:
              <br /> The New Battle 2021
            </p>
            <p className="color-palette-2 m-0">Category: Mobile</p>
          </div>
        </div>
        <hr />
        <CheckoutDetails />
        <CheckoutConfirmation />
      </div>
    </section>
  );
}

export async function getServerSideProps({ req }) {
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
  const URL_IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${URL_IMG}/${userFromPayload.avatar}`;
  return {
    props: {
      user: userFromPayload,
    },
  };
}
