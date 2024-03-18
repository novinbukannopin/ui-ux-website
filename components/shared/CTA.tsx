import {Button} from "@/parts";
import {Gradients, PinkButton} from "@/public/assets";
import Image from "next/image";

export function CTA() {
    return (
        <section
            className={"flex flex-col justify-center items-center gap-[56px] px-[20px] lg:px-20 py-[56px]"}>
            <Image src={Gradients}
                   className={"w-full relative object-cover rounded-lg min-h-[418px] lg:max-h-[492px]"}
                   alt={"Gradient"}/>
            <div className={"absolute py-[52px] px-[32px] flex flex-col items-center text-center"}>
                <h2 className={"leading-[40px] text-[32px] font-semibold text-white mb-6"}>Monitor your website like a
                    pro</h2>
                <p className={"leading-6 font-normal text-[16px] text-white mb-10"}>Join over 800+ happy site owners
                    boosting
                    productivity and
                    efficiency!</p>
                <div className={"flex flex-col lg:flex-row items-center gap-x-[40px]"}>
                    <Button title={"Try for Free"} variant={"tertiary"} className={"mt-6 mb-[32px]"}/>
                    <div className={"flex gap-3"}>
                        <p className={`font-medium text-[16px] text-white leading-[24px]`}>Learn
                            More</p>
                        <Image src={PinkButton} alt={"arrow"}/>
                    </div>
                </div>
            </div>
        </section>
    )
}