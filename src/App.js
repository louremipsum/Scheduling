import Face from "./components/Face.js";

import { MantineProvider } from "@mantine/core";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Face />
    </MantineProvider>
  );
}
