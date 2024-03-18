import {PLANS} from "@/constant";
import {Check, CheckWhite} from "@/public/assets";
import Image from "next/image";

export function Plans() {
    return (
        <section className={"flex flex-col px-[20px] h-fit lg:px-[80px] py-[56px]"}>
            <div className={"w-full justify-center text-center pb-10"}>
                <h2 className={"leading-[36px] text-[24px] font-semibold mb-4 text-[#172026]"}>Flexible plans for
                    you</h2>
                <p className={"text-[#36485C] leading-[24px] text-[16px] font-normal"}>No hidden fees!</p>
            </div>
            <div className={"grid grid-rows-3 lg:grid-cols-3 h-fit w-full gap-[24px]"}>
                {PLANS.map((plan, index) => (
                    (index === 1) ? (
                            <div key={index} className={"p-6 bg-[#4328EB] h-fit rounded-[8px]"}>
                                <h4 className={"text-[#F4F8FA] leading-[24px] text-[18px] mb-3 font-normal"}>{plan.title}</h4>
                                <h4 className={"text-[#F4F8FA] leading-[24px] text-[16px] mb-4 font-normal"}>{plan.description}</h4>
                                <h1 className={"text-[#FFFFFF]"}><span
                                    className={"text-[#F4F8FA] text-[24px] font-semibold"}>{plan.price}</span>/mo</h1>
                                <div className={"flex flex-col mt-4 gap-2"}>
                                    {plan.benefits.map((feature, index) => (
                                        <div key={index} className={"flex w-full gap-4"}>
                                            <Image
                                                src={CheckWhite}
                                                alt={"check"}/>
                                            <p className={"text-[#F4F8FA] leading-[24px] text-[16px] text-base"}>
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) :
                        (
                            <div key={index} className={"p-6 bg-[#F5F4FF] h-fit rounded-[8px]"}>
                                <h4 className={"text-[#4328EB] leading-[24px] text-[18px] mb-3 font-normal"}>{plan.title}</h4>
                                <h4 className={"text-[#36485C] leading-[24px] text-[16px] mb-4 font-normal"}>{plan.description}</h4>
                                <h1 className={"text-[#5F7896]"}><span
                                    className={"text-[#172026] text-[24px] font-semibold"}>{plan.price}</span>/mo</h1>
                                <div className={"flex flex-col mt-4 gap-2"}>
                                    {plan.benefits.map((feature, index) => (
                                        <div key={index} className={"flex w-full gap-4"}>
                                            <Image
                                                src={Check}
                                                alt={"check"}/>
                                            <p className={"text-[#36485C] leading-[24px] text-[16px] text-base"}>
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                ))}
            </div>
        </section>
    )
}