import Holder from "@/components/Holder";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <main className="h-screen bg-slate-200 flex  items-center justify-center text-sky-950">
      <Holder />
      <Toaster />
    </main>
  );
}
