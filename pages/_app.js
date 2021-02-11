import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import { ScrollProvider } from "../Context/scrollContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <ScrollProvider>
        <Component {...pageProps} />
      </ScrollProvider>
    </ThemeProvider>
  );
}
