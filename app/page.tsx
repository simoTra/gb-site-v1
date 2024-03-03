import { SparklesCoreText } from "./components/sparklesText";

export default function Home() {
  return (
    <div>
      <SparklesCoreText
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={1200}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
    </div>
  );
}
