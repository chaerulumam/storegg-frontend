import Link from "next/link";

export default function Company() {
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">Company</p>
      <ul className="list-unstyled">
        <li className="mb-6">
          <Link href="/aboutUs">
            <a className="text-lg color-palette-1 text-decoration-none">
              About Us
            </a>
          </Link>
        </li>
        <li className="mb-6">
          <Link href="/pressRelease">
            <a className="text-lg color-palette-1 text-decoration-none">
              Press Release
            </a>
          </Link>
        </li>
        <li className="mb-6">
          <Link href="/termsOfUse">
            <a className="text-lg color-palette-1 text-decoration-none">
              Terms of Use
            </a>
          </Link>
        </li>
        <li className="mb-6">
          <Link href="/privacy">
            <a className="text-lg color-palette-1 text-decoration-none">
              Privacy & Policy
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
