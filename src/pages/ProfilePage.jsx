

import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import BrandsSection from "../components/BrandsSection";

// className="overflow-hidden"
const ProfilePage = () => {
  return (
    <div className="overflow-clip">
    <AboutSection />

    <ExperienceSection />

    <BrandsSection />
    </div>
  )
}

export default ProfilePage