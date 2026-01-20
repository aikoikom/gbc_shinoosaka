import Header from '@/components/Header/Header'
import AboutPetitOnly from '@/components/AboutPetitOnly/AboutPetitOnly'
import CircleParticipation from '@/components/CircleParticipation/CircleParticipation'
import GeneralParticipation from '@/components/GeneralParticipation/GeneralParticipation'
import CosplayInfo from '@/components/CosplayInfo/CosplayInfo'
import CircleList from '@/components/CircleList/CircleList'
import EventPurpose from '@/components/EventPurpose/EventPurpose'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import { firstEvent } from '@/app/eventContent'

export default function FirstEventArchive() {
  return (
    <>
      <Header {...firstEvent.header} />
      <main>
        <AboutPetitOnly {...firstEvent.about} />
        <CircleParticipation {...firstEvent.circleParticipation} />
        <GeneralParticipation {...firstEvent.generalParticipation} />
        <CosplayInfo {...firstEvent.cosplayInfo} />
        <CircleList {...firstEvent.circleList} />
        <EventPurpose {...firstEvent.eventPurpose} />
        <Contact {...firstEvent.contact} />
      </main>
      <Footer {...firstEvent.footer} />
    </>
  )
}
