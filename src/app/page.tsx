import { Suspense } from "react";
import Scene from "./components/Scene";
import Labels from "./components/Labels"

export default function Home() {
  return (
    <main id="bg_container" className="w-full h-screen bg-black">
      <div className="w-full max-w-[1500px] relative m-auto">
        <Labels />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </div>
    </main>
  );
}
