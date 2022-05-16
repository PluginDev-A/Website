import { useContext } from "react";
import { ThemeContext } from "../theme/theme";
import Footer from "../components/ui/Footer/Footer";
import Section from "../components/ux/section/Section";
import CaseContent from "./cases/CaseContent";

function Cases() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <Section content={<CaseContent />} fullHeight />
      <Footer />
    </>
  );
}

export default Cases;
