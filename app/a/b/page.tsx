import { SparklesCoreText } from "@/app/components/sparklesText";

export default function B() {
  return (
    <div>
        <SparklesCoreText
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
          text="asdasd"
        />
    </div>
  );
}
