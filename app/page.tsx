import WelcomePage from "@/components/WelcomePage";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center flex-col">
        <WelcomePage />
      </div>
    </div>
  );
}
