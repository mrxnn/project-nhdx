import Link from "next/link";

export const NavbarLinks = () => {
  return (
    <div className="flex flex-row gap-5 justify-between text-slate-500 text-base">
      <Link href="#">FAQ</Link>
      <Link href="#">Contact Us</Link>
    </div>
  );
};
