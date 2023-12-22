export default function NotFound() {
  return (
    <main className="not-found-main ">
      <div className="not-found-text  ">
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">Houston, we have a 404 problem </p>
        <p className="font-light text-lg sm:text-xl md:text-2xl lg:text-3xl">Whoops! It seems you have taken a detour. No worries, click below to warp back to the home base.</p>
        <p className="font-light text-md sm:text-md md:text-lg lg:text-xl">The page may no longer exist or may have moved to another web address. Try again to locate what you want using the search bar below.</p>

        <button className="buttonfour" type="button">
          <a href="/"> Go back home</a>
        </button>
      </div>

      <div className="space flex w-full sm:w-1/2">
        <img alt="404 page of the web development and marketing agency" src="/404.png" className="w-full h-full object-cover" />
      </div>
    </main>
  );
}
