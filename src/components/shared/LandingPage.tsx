export default function LandingPage() {
  return (
    <section className="h-screen md:h-[60vh] w-full bg-[url('/grid.svg')]">
      <div className="h-full mx-auto  gap-12 text-gray-600 md:px-8">
        <div className="grid place-items-center h-full max-w-4xl mx-auto text-center">
          <div className="space-y-4">
            <h1 className="text-sm text-indigo-600 font-medium">
              Your Path to the Perfect Job Starts Here
            </h1>
            <h2 className="text-4xl text-secondary-foreground font-extrabold mx-auto md:text-5xl">
              Embark on Your Career Journey <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                with Job Quest
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-secondary-foreground font-medium">
              Embark on your career journey with Job Quest, the ultimate
              platform connecting job seekers with top employers.
            </p>
            <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <a
                href="javascript:void(0)"
                className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
              >
                Browse Jobs
              </a>
              <a
                href="javascript:void(0)"
                className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg"
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
