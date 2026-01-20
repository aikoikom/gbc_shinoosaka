import Header from '@/components/Header/Header'
import AboutPetitOnly from '@/components/AboutPetitOnly/AboutPetitOnly'
import CircleParticipation from '@/components/CircleParticipation/CircleParticipation'
import GeneralParticipation from '@/components/GeneralParticipation/GeneralParticipation'
import CosplayInfo from '@/components/CosplayInfo/CosplayInfo'
import CircleList from '@/components/CircleList/CircleList'
import EventPurpose from '@/components/EventPurpose/EventPurpose'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import { secondEvent } from '@/app/eventContent'

export default function SecondEventArchive() {
  return (
    <>
      <Header {...secondEvent.header} />
      <main>
        <AboutPetitOnly {...secondEvent.about} />
        <CircleParticipation {...secondEvent.circleParticipation} />
        <GeneralParticipation {...secondEvent.generalParticipation} />
        <CosplayInfo {...secondEvent.cosplayInfo} />
        <CircleList {...secondEvent.circleList} />
        <EventPurpose {...secondEvent.eventPurpose} />
        <Contact {...secondEvent.contact} />
      </main>
      <Footer {...secondEvent.footer} />
    </>
  )
}
