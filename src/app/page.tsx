import Button from "@/components/ui/Button";
import { db } from "@/lib/db";

export default async function Home() {
  // await db.set("harsh", "tirth");
  return <Button variant={"ghost"}>Hello</Button>
}
