import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      {" "}
      <nav className="flex items-center justify-between container mx-auto">
        <h3 className="text-5xl text-amber-300">NextJs</h3>
        <div className="flex items-center justify-center  gap-2">
          <Link className="hover:text-amber-300" href="/products">
            Products
          </Link>
          <Link className="hover:text-amber-300" href="/contact">
            Contact
          </Link>
          <Link className="hover:text-amber-300" href="/about"></Link>
          <Link className="hover:text-amber-300" href="/about">
            About
          </Link>
          <Link className="hover:text-amber-300" href="/gallery">
            Gallery
          </Link>
   
        </div>
        <div>
          <Link className="hover:text-amber-300" href="/login">
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
