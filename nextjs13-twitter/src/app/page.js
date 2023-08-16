import Timeline from "./components/Timeline";
import { getAll } from "@/api";

export default async function Home() {
  const timeline = await getAll();
  console.log(timeline);

  return (
    <div>
      <Timeline timeline={timeline} />
    </div>
  );
}
