import { notFound } from "next/navigation";
import { MainPage } from "@/app/components/pages";

export default async function Page() {
  const isPageEnabled = true; // pretend API flag

  if (!isPageEnabled) {
    notFound(); // 👈 automatically shows not-found.tsx
  }

  return <MainPage />;
}
