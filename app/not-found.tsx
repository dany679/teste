import { Link } from "@/navigation";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col md:px-20 px-4 dark:bg-stone-900  max-w-8xl mx-auto">
      <section className="bg-white dark:bg-gray-900 min-h-screen flex justify-center items-center">
        <div className="mx-auto max-w-screen-xl ">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="dark:text-primary-500 text-7xl font-extrabold tracking-tight text-blue-600 lg:text-9xl">
              404
            </h1>
            <p className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
              Internal Server Error.
            </p>
            <p className="text-lg font-light text-gray-500 dark:text-gray-400">
              Sorry something went wrong.
            </p>
            <Link href="/">Return Home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
