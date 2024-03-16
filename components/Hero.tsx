import {Button} from "@/parts";
import Image from "next/image";
import {Clutch, Cnn, Google, Gradient, HeroImage, Slack, Trustpilot} from "@/public/assets";

export function Hero() {
    return (
        <div className={"pt-4 lg:pt-10"}>
            <div className={"px-[20px] lg:px-[28px] mx-auto max-w-full lg:max-w-[70%] text-center"}>
                <h1 className={"font-semibold leading-tight text-[#172026] text-[32px] pt-4 lg:pt-[44px] lg:text-[64px]"}>
                    Start monitoring your <br/> website
                    like
                    a pro</h1>
                <p className={"pt-8 lg:pt-6 text-[16px] lg:text-[18px] font-normal leading-[24px] lg:leading-7 text-[#36485C]"}>Get
                    a
                    bird&apos;s eye view
                    with our
                    customizable
                    dashboard. Stay on
                    top of
                    things!
                    Revamp your work
                    process with our game-changing feature. Boost productivity and efficiency!</p>

                <div className={"pt-8 lg:pt-6 flex w-full justify-center"}>
                    <Button title={"Try for Free"} variant={"primary"}/>
                    <Button title={"View Pricing"} variant={"secondary"}/>
                </div>
            </div>

            <div className={"relative flex h-full w-full justify-center pt-[60px]"}>
                <Image src={Gradient} alt={"gradient"} className={"min-h-[500px] w-full object-cover lg:h-auto"}/>

                <div className={"absolute bottom-5 flex w-full flex-col items-center"}>
                    <Image src={HeroImage} alt={"hero image"}
                           className={"-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"}/>

                    <div
                        className={"flex w-full flex-col pt-[-64px] lg:pt-[50px] items-center lg:container lg:flex-row lg:justify-between lg:px-20"}>
                        <p className={"text-white text-center lg:text-[18px]"}>Trusted by these companies</p>
                        <div
                            className={"pt-[20px] lg:pt-0 grid grid-rows-2 lg:grid-rows-1 items-center justify-center px-[20px] align-middle lg:grid-cols-2 gap-[10px] lg:gap-x-8"}>
                            <div className={"flex gap-4 lg:gap-8 justify-center lg:justify-end"}>
                                <Image src={Google} alt={"google"}/>
                                <Image src={Slack} alt={"slack"}/>
                            </div>
                            <div className={"flex gap-4 lg:gap-8 justify-center lg:justify-start"}>
                                <Image src={Trustpilot} alt={"trustpilot"}/>
                                <Image src={Cnn} alt={"cnn"}/>
                                <Image src={Clutch} alt={"cluth"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}