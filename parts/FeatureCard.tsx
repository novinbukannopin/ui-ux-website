import Image from "next/image";
import {Check} from "@/public/assets";
import {FeatureProps} from "@/types";

const FeatureCard = ({subtitle, title, theme, image, arrow, custom, direction}: FeatureProps) => {

    return (
        <div className={"w-full flex gap-0 lg:gap-8 justify-between items-center"}>
            {direction === "left" ?
                <>
                    <div className={"w-full"}>
                        <div className={"pb-[24px]"}>
                            <h4 className={`font-medium text-[16px] lg:text-[18px] leading-[24px] text-${theme} pb-3 lg:pb-4`}>{subtitle}</h4>
                            <h1 className={"font-medium text-[24px] lg:text-[42px] leading-[36px] lg:leading-[58px] text-[#172026]"}>{title}
                            </h1>
                        </div>
                        <Image src={image} alt={"feature image"} className={"block lg:hidden"}/>
                        <div className={"pt-[24px] lg:pt-4"}>
                            <p className={"font-normal pb-6 lg:pb-8 text-[16px] lg:text-[18px] leading-[24px] text-[#36485C]"}>Stay
                                on top
                                of things
                                and
                                revamp your work
                                process with our
                                game-changing feature.
                                Get a bird&apos;s
                                eye view with our customizable dashboard. </p>
                            <div className={"flex flex-col gap-y-3 lg:gap-y-[20px] pb-[33px]"}>
                                {!custom ?
                                    <>
                                        <div className={"w-full flex gap-x-4"}>
                                            <Image src={Check} alt={"check"}/>
                                            <p className={"font-normal text-[16px] lg:text-[18px] leading-[24px]"}>Lorem
                                                ipsum
                                                dolor
                                                sit amet</p>
                                        </div>
                                        <div className={"w-full flex gap-x-4"}>
                                            <Image src={Check} alt={"check"}/>
                                            <p className={"font-normal text-[16px] lg:text-[18px] leading-[24px]"}>Consectetur
                                                adipiscing elit</p>
                                        </div>
                                        <div className={"w-full flex gap-x-4 items-start"}>
                                            <Image src={Check} alt={"check"}/>
                                            <p className={"font-normal text-[16px] lg:text-[18px] leading-[24px]"}>Sed
                                                do
                                                eiusmod
                                                tempor incididunt ut labore </p>
                                        </div>
                                    </>
                                    : <>
                                        <div className={"flex w-full gap-x-6"}>
                                            <div className={"w-1/2"}>
                                                <h2 className={"pb-3 text-[20px] lg:text-[32px] font-medium leading-[26px] lg:leading-[40px]"}>100+</h2>
                                                <p>Lorem ipsum dolor sit</p>
                                            </div>
                                            <div className={"w-1/2"}>
                                                <h2 className={"pb-3 text-[20px] lg:text-[18px] font-medium leading-[26px] lg:leading-[28px]"}>800+</h2>
                                                <p>Conse adipiscing elit</p>
                                            </div>
                                        </div>
                                    </>
                                }
                            </div>
                            <div className={"flex gap-3"}>
                                <p className={`font-medium text-[16px] leading-[24px] text-${theme}`}>Learn
                                    More</p>
                                <Image src={arrow} alt={"arrow"}/>
                            </div>
                        </div>
                    </div>
                    <div className={"hidden lg:block w-full items-center justify-end flex"}>
                        <Image src={image} alt={"image"} className={"object-cover w-full h-full"}/>
                    </div>
                </>
                :
                <>
                    <div className={"hidden lg:block w-full items-center justify-start flex"}>
                        <Image src={image} alt={"image"} className={"object-cover w-full h-full"}/>
                    </div>
                    <div className={"w-full"}>
                        <div className={"pb-[24px]"}>
                            <h4 className={`font-medium text-[16px] lg:text-[18px] leading-[24px] text-${theme} pb-3 lg:pb-4`}>{subtitle}</h4>
                            <h1 className={"font-medium text-[24px] lg:text-[42px] leading-[36px] lg:leading-[58px] text-[#172026]"}>{title}
                            </h1>
                        </div>
                        <Image src={image} alt={"feature image"} className={"block lg:hidden"}/>
                        <div className={"pt-[24px] lg:pt-4"}>
                            <p className={"font-normal pb-6 lg:pb-8 text-[16px] lg:text-[18px] leading-[24px] text-[#36485C]"}>Stay
                                on top
                                of things
                                and
                                revamp your work
                                process with our
                                game-changing feature.
                                Get a bird&apos;s
                                eye view with our customizable dashboard. </p>
                            <div className={"flex flex-col gap-y-3 lg:gap-y-[20px] pb-[33px]"}>
                                {!custom ?
                                    <>
                                        <div className={"w-full flex gap-x-4"}>
                                            <Image src={Check} alt={"check"}/>
                                            <p className={"font-normal text-[16px] lg:text-[18px] leading-[24px]"}>Lorem
                                                ipsum
                                                dolor
                                                sit amet</p>
                                        </div>
                                        <div className={"w-full flex gap-x-4"}>
                                            <Image src={Check} alt={"check"}/>
                                            <p className={"font-normal text-[16px] lg:text-[18px] leading-[24px]"}>Consectetur
                                                adipiscing elit</p>
                                        </div>
                                        <div className={"w-full flex gap-x-4 items-start"}>
                                            <Image src={Check} alt={"check"}/>
                                            <p className={"font-normal text-[16px] lg:text-[18px] leading-[24px]"}>Sed
                                                do
                                                eiusmod
                                                tempor incididunt ut labore </p>
                                        </div>
                                    </>
                                    : <>
                                        <div className={"flex w-full gap-x-6"}>
                                            <div className={"w-1/2"}>
                                                <h2 className={"pb-3 text-[20px] lg:text-[32px] font-medium leading-[26px] lg:leading-[40px]"}>100+</h2>
                                                <p>Lorem ipsum dolor sit</p>
                                            </div>
                                            <div className={"w-1/2"}>
                                                <h2 className={"pb-3 text-[20px] lg:text-[18px] font-medium leading-[26px] lg:leading-[28px]"}>800+</h2>
                                                <p>Conse adipiscing elit</p>
                                            </div>
                                        </div>
                                    </>
                                }
                            </div>
                            <div className={"flex gap-3"}>
                                <p className={`font-medium text-[16px] leading-[24px] text-${theme}`}>Learn
                                    More</p>
                                <Image src={arrow} alt={"arrow"}/>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default FeatureCard;