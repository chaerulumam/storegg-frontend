import { NumericFormat } from "react-number-format";

interface CategoryProps {
  icon: "ic-cat-desktop" | "ic-cat-mobile";
  children: ReactNode;
  nominal: number;
}
import Image from "next/image";
import { ReactNode } from "react";
export default function Category(props: CategoryProps) {
  const { icon, children, nominal } = props;
  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <Image src={`/icon/${icon}.svg`} height={60} width={60} />
          <p className="color-palette-1 mb-0 ms-12">{children}</p>
        </div>
        <div>
          <p className="text-sm color-palette-2 mb-1">Total Spent</p>
          <p className="text-2xl color-palette-1 fw-medium m-0">
            <NumericFormat
              value={nominal}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </p>
        </div>
      </div>
    </div>
  );
}
