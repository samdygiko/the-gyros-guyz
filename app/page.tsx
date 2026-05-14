import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import TheKiosk from "./components/TheKiosk";
import TonightStrip from "./components/TonightStrip";
import Snaps from "./components/Snaps";
import MoreFromTheGrill from "./components/MoreFromTheGrill";
import FindUs from "./components/FindUs";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Menu />
        <TheKiosk />
        <TonightStrip />
        <Snaps />
        <MoreFromTheGrill />
        <FindUs />
      </main>
      <SiteFooter />
    </>
  );
}
