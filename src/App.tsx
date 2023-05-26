import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <main className="relative flex h-screen w-screen flex-col items-center bg-secondary text-primary">
      <header className="px-[30%]">
        <button></button>
      </header>
      <div className="h-full w-full overflow-y-auto">
        <div className="relative flex w-full justify-center md:px-[15%] lg:px-[30%]">
          <div className="mt-40 rounded bg-tertiary/25 p-[5%] drop-shadow-md">
            <div className="absolute -top-16 h-32 w-32 rounded-full border-2 border-quaternary bg-tertiary outline-none">
              <img
                src="https://storage.googleapis.com/swift-citadel-380807-bucket/profpic.jpg"
                alt="Foto Profil Dhaffa Agus"
                className="h-full w-full rounded-full object-cover"
              ></img>
            </div>
            <section id="description">
              <h2 className="my-2 mt-12 text-xl font-semibold md:text-2xl">
                Hi there!!
              </h2>
              <h1 className="text-3xl font-bold md:text-4xl">
                My name is{" "}
                <span className="font-black text-quaternary">Dhaffa Agus</span>
              </h1>
              <p className="my-2 text-base md:text-lg">
                I like to code. Currently focusing on Web Development, either
                Front-End and Back-End. With over 1 years of professional
                experience, I specialize in creating modern, responsive websites
                that not only look great but also perform flawlessly across
                different devices and browsers.
              </p>
            </section>
            <hr className="my-4" />
            <section id="social-media">
              <h3 className="text-xl font-semibold md:text-2xl">
                Let's Connect
              </h3>
              <ul className="flex flex-col gap-2 px-6 py-3 text-base md:text-lg">
                <li>
                  <a
                    href="https://www.linkedin.com/in/dhaffa-agus/"
                    target="_blank"
                    className="flex flex-row items-center gap-3"
                  >
                    <FaLinkedin className="h-full w-12" /> Dhaffa Agus
                  </a>
                </li>
                <li>
                  <a
                    href="http://"
                    target="_blank"
                    className="flex flex-row items-center gap-3"
                  >
                    <FaGithub className="h-full w-12" /> @not-xygen
                  </a>
                </li>
                <li>
                  <a
                    href="http://"
                    target="_blank"
                    className="flex flex-row items-center gap-3"
                  >
                    <FaInstagram className="h-full w-12" /> @dhaffaagus_
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    target="_self"
                    className="flex flex-row items-center gap-3"
                  >
                    <FaEnvelope className="h-full w-12" />{" "}
                    dhaffaagus09@gmail.com
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
