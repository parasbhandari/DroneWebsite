import BannerSection from "../components/reusable/BannerSection"
import Benefits from "../components/Training/Benefits"
import Teachers from "../components/Training/Teachers"
import TrainingProgram from "../components/Training/TrainingProgram"

const TrainingPage = () => {
  return (
    <>
      <BannerSection subtitle="DJI"  title="Drone Training Programs"/>
      <TrainingProgram />
      <Benefits />
      <Teachers />
    </>
  )
}
export default TrainingPage