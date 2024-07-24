import Image from "next/image";
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

export default function Home() {
  const [mode, setMode] = useState("dark");

	useEffect(() => {
		let storedMode = localStorage.getItem("landingColorMode");
		if (storedMode !== null) {
			setMode(storedMode);
		}

		const intervalId = setInterval(() => {
			let storedMode = localStorage.getItem("landingColorMode");
			if (storedMode !== null) {
				setMode(storedMode);
			}
		}, 250);

		return () => clearInterval(intervalId);
	}, []);

  return (
    <main>
      <div>
        <div className="sticky w-full top-0 z-[100]">
          <Header colorMode={mode} />
        </div>
        <div className="z-[-1] fixed w-[100svw]" id="home">
          <Hero colorMode={mode} />
        </div>
        <div className="z-[15]">
          <Footer colorMode={mode} />
        </div>
      </div>
    </main>
  );
}
