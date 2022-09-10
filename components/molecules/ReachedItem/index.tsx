interface ReachedItemProps {
  text1: string;
  text2: string;
}

export default function ReachedItem(props: ReachedItemProps) {
  const { text1, text2 } = props;
  return (
    <div className="me-lg-35 ms-lg-35">
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
        {text1}
      </p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">
        {text2}
      </p>
    </div>
  );
}
