"use client";
import { useState } from "react";
import { cn } from "../utils";
import { Menu, MenuItem, HoveredLink, ProductItem } from "@/app/components/navbar";
import { SparklesCoreText } from "../components/sparklesText";

export default function A() {
  return (

      

      <div>

        <SparklesCoreText
          text='a'
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
