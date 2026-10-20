import Link from "next/link";

export const metadata = {
    title: "Page Not Found",
};

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center bg-black min-h-screen pt-16 px-4 text-center">
            <p className="text-yellow-400 text-sm font-bold uppercase tracking-widest mb-4">404</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Page not found</h1>
            <p className="text-gray-400 max-w-md mb-8">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    href="/"
                    className="py-3 px-6 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold"
                >
                    Back to Home
                </Link>
                <Link
                    href="/blog"
                    className="py-3 px-6 rounded-xl border-2 border-yellow-400 text-yellow-400 font-bold hover:bg-yellow-400/10 transition-colors"
                >
                    Read the Blog
                </Link>
            </div>
        </div>
    );
}
