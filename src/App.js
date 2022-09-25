import Face from "./components/Face.js";

import { MantineProvider } from "@mantine/core";

const PrimaryColors = [
  "#f9edf8",
  "#e1d0df",
  "#ccb2c7",
  "#b793b0",
  "#a27498",
  "#8a5b7d",
  "#6b4660",
  "#4c3244",
  "#2f1e29",
  "#140811",
];

export default function App() {
  return (
    <MantineProvider
      theme={{
        colors: {
          primary: PrimaryColors,
        },
        fontFamily: "Greycliff CF, sans-serif",
        primaryColor: "primary",
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Face />
    </MantineProvider>
  );
}
