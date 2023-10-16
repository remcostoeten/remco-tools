"use client";
import { Builder } from "@builder.io/react";
import About from "./components/home/about";
import Counter from "./components/Counter/Counter";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(About, {
  name: "About",
});
