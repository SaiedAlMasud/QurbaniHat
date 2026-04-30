import AnimalCard from "../components/shared/AnimalCard";
import Banner from "../components/shared/Banner";
import FeatureSection from "../components/shared/FeatureSection";
import QurbaniTipsSection from "../components/shared/QurbaniTipsSection";


const HomePage = () => {
  return (
    <div>
        <Banner></Banner>
        <FeatureSection></FeatureSection>
        <QurbaniTipsSection />
    </div>
  );
};

export default HomePage;
