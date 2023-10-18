'use client'
import React, { MutableRefObject } from "react"
import "./Slider.Thumbnail.css"
import {
    useKeenSlider,
    KeenSliderPlugin,
    KeenSliderInstance,
} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Image } from "@mantine/core"
import DragInfo from "../DragInfo/DragInfo"


const testData = [
    {
        img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2600',
        slug: '',
        title: '',
        descp: '',
    },
    {
        img: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&w=800',
        slug: '',
        title: '',
        descp: '',
    },
    {
        img: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&w=800',
        slug: '',
        title: '',
        descp: '',
    },
    {
        img: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&w=800',
        slug: '',
        title: '',
        descp: '',
    },
    {
        img: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&w=800',
        slug: '',
        title: '',
        descp: '',
    },
    {
        img: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&w=800',
        slug: '',
        title: '',
        descp: '',
    },
]

function ThumbnailPlugin(
    mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active")
            })
        }
        function addActive(idx: number) {
            slider.slides[idx].classList.add("active")
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx)
                })
            })
        }

        slider.on("created", () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on("animationStarted", (main) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
            })
        })
    }
}

const SliderThumbnail = () => {
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
    })
    const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
        {
            initial: 0,
            slides: {
                perView: 4,
                spacing: 10,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    )

    return (
        <>
            <div style={{ position: 'relative', overflowY: 'hidden' }}>
                {/*   <DragInfo /> */}
                <div ref={sliderRef} className="keen-slider">
                    {testData.map((item) => {
                        return <div className="keen-slider__slide"><Image src={item.img} /></div>
                    })}
                </div>
            </div>

            <div ref={thumbnailRef} className="keen-slider thumbnail">
                {testData.map((item) => {
                    return <div className="keen-slider__slide"><Image src={item.img} /></div>
                })}
            </div>
        </>
    )
}
export default SliderThumbnail;