import AnimalCard from "../components/shared/AnimalCard";
import Banner from "../components/shared/Banner";
import FeatureSection from "../components/shared/FeatureSection";
import QurbaniTipsSection from "../components/shared/QurbaniTipsSection";
import TopBreedsSimple from "../components/shared/TopBreedsSimple";


const HomePage = () => {
  return (
    <div>
        <Banner></Banner>
        <FeatureSection></FeatureSection>
        <QurbaniTipsSection />
        <TopBreedsSimple></TopBreedsSimple>
    </div>
  );
};

export default HomePage;
