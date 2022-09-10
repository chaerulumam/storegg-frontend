interface RowProps {
  lable: string;
  value: string | number;
  className?: string;
}

export default function Row(props: Partial<RowProps>) {
  const { lable, value, className } = props;
  return (
    <p className="text-lg color-palette-1 mb-20">
      {lable} <span className={`purchase-details ${className}`}>{value}</span>
    </p>
  );
}
