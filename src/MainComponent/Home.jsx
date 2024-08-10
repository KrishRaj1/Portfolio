import PortfolioSection from "../Shared/Components/PortflioSection"
import PortfolioSection2 from "../Shared/Components/PortfolioSection2"
import PortfolioSection3 from "../Shared/Components/PortfolioSection3"
import SkillSection from "../Shared/Components/SkillSection"
import About from "../Shared/Components/About"
import Section from "../Shared/Section"

function Home() {
    return (
      <>
        <div className=" ">
          <Section></Section>
          <PortfolioSection></PortfolioSection>
          <PortfolioSection2></PortfolioSection2>
          <PortfolioSection3></PortfolioSection3>
          <SkillSection></SkillSection>
          <About></About>
        </div>
      </>
    );
  }
  
  export default Home;