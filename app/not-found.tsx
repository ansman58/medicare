import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
            <h2 className="text-[8rem] font-bold text-baseColor/10 font-title leading-none select-none">
                404
            </h2>
            <h3 className="text-3xl font-bold text-heading font-title -mt-12 mb-4">
                Page Not Found
            </h3>
            <p className="text-pfont mb-8 max-w-md mx-auto">
                Oops! The page you are looking for does not exist. It might have been
                moved or deleted.
            </p>
            <Link
                href="/"
                className="inline-flex items-center gap-2 bg-baseColor text-white px-6 py-3 rounded-full font-semibold hover:bg-baseColorDark transition-all duration-300 shadow-glow hover:shadow-lg"
            >
                <FaHome />
                Back to Home
            </Link>
        </div>
    );
}
