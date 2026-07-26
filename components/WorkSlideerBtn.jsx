import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"
import { useSwiper } from "swiper/react"

const WorkSlideerBtn = ({ containerStyle, btnStyle }) => {
  const swiper = useSwiper()
  return (
    <div className={containerStyle}>
      <button className={btnStyle} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold />
      </button>
      <button className={btnStyle} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold />
      </button>
    </div>
  )
}

export default WorkSlideerBtn
