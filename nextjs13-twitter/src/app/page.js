import Timeline from "./components/Timeline";
import { Noto_Sans_JP } from "next/font/google";

const notosansjp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    // <div className={notosansjp.className}>
    //   <Timeline />
    // </div>
    <div>
      <Timeline />
    </div>
  );
}
