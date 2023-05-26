function App() {
  return (
    <main className="relative flex h-screen w-screen flex-col items-center bg-secondary text-primary">
      <header className="px-[30%]">
        <button></button>
      </header>
      <div className="h-full w-full overflow-y-auto">
        <div className="relative flex w-full justify-center px-[30%]">
          <div className="mt-40 rounded bg-tertiary/25 p-[5%] drop-shadow-md">
            <div className="absolute -top-16 h-32 w-32 rounded-full border-2 border-quaternary bg-tertiary outline-none">
              <img
                src="https://storage.googleapis.com/swift-citadel-380807-bucket/profpic.jpg"
                alt="Foto Profil Dhaffa Agus"
                className="h-full w-full rounded-full object-cover"
              ></img>
            </div>
            <section id="description">
              <h2 className="my-2 mt-12 text-2xl font-semibold">Hi there!!</h2>
              <h1 className="text-4xl font-bold">
                My name is{" "}
                <span className="font-black text-quaternary">Dhaffa Agus</span>
              </h1>
              <p className="my-2 text-lg">
                I like to code. Currently focusing on Web Development, either
                Front-End and Back-End. With over 1 years of professional
                experience, I specialize in creating modern, responsive websites
                that not only look great but also perform flawlessly across
                different devices and browsers.
              </p>
            </section>
            <section id="social-media">
              <h3 className="text-lg font-semibold">Let's Connect</h3>
              <ul></ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
