import Header from '@/components/Header/Header'
import AboutPetitOnly from '@/components/AboutPetitOnly/AboutPetitOnly'
import CircleParticipation from '@/components/CircleParticipation/CircleParticipation'
import GeneralParticipation from '@/components/GeneralParticipation/GeneralParticipation'
import CosplayInfo from '@/components/CosplayInfo/CosplayInfo'
import CircleList from '@/components/CircleList/CircleList'
import EventPurpose from '@/components/EventPurpose/EventPurpose'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

export default function SecondEventArchive() {
  return (
    <>
      <Header />
      <main>
        <AboutPetitOnly />
        <CircleParticipation />
        <GeneralParticipation />
        <CosplayInfo />
        <CircleList />
        <EventPurpose />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
