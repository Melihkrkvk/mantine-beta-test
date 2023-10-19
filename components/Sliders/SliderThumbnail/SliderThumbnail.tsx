'use client'
import React, { MutableRefObject } from "react"
import "./Slider.Thumbnail.css"
import classes from "./SliderThumbnail.module.css"
import {
    useKeenSlider,
    KeenSliderPlugin,
    KeenSliderInstance,
} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Image, Text, rem } from "@mantine/core"
import DragInfo from "../DragInfo/DragInfo"
import Link from "next/link"


interface Slider {
    data: Array<
        {
            title: string;
            slug: string;
            img: string;
        }
    >
}

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

const SliderThumbnail = ({ data }: Slider) => {
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
                <div ref={sliderRef} className="keen-slider">
                    {data?.map((item, index) => {
                        return (
                            <div key={index} className="keen-slider__slide number-slide">
                                <Link style={{ textDecoration: 'none' }} href={item.slug}>
                                    <Image w={960} src={'https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'} />
                                    <Text fz={rem('32px')} fw={900} c={'var(--mantine-color-body)'} style={{ position: 'absolute', top: 10, left: 10 }}>{item.title}</Text>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div ref={thumbnailRef} className="keen-slider thumbnail">
                {data?.map((item, index) => {
                    return <div key={index} className="keen-slider__slide"><Image src={'https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'} /></div>
                })}
            </div>
        </>
    )
}
export default SliderThumbnail;