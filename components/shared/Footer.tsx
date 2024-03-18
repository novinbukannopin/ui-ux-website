import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "../ui/accordion";
import Logo from "@/public/assets/Logo.svg";
import Image from "next/image";
import {FOOTER} from "@/constant";
import {Facebook, Feed, X} from "@/public/assets";

export function Footer() {
    return (
        <section className={
            "flex flex-col px-[20px] lg:px-[80px] max-w-full pt-[56px] pb-[40px]"
        }>
            <div className={
                "flex flex-col lg:flex-row items-start justify-between"
            }>
                <div className={
                    "pb-[42px] flex items-center gap-x-3"
                }>
                    <Image
                        src={Logo}
                        alt={"logo"}
                    />
                    <h2 className={
                        "leading-[24px] text-[17px] font-bold text-[#36485C]"
                    }>
                        YOUR SITE
                    </h2>
                </div>
                {
                    FOOTER
                        .map((
                            item,
                            index) => (
                            <Accordion
                                type="single"
                                collapsible
                                key={index}
                                className={"block w-full lg:hidden"}
                            >
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>
                                        <p className={"text-[#36485C] hover:no-underline text-base text-[16px] leading-[24px]"}>
                                            {item.title}
                                        </p>
                                    </AccordionTrigger>
                                    <AccordionContent className={"py-4"}>
                                        <div className={"flex flex-col gap-y-[16px]"}>
                                            {item.link.map((link, index) => (
                                                <p key={index} className={"text-[#36485C]"}>
                                                    {link.name}
                                                </p>
                                            ))}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        ))}
                {
                    FOOTER.map((
                        item,
                        index) => (
                        <div key={index} className={"hidden lg:block"}>
                            <h3 className={"text-[#36485C] text-base font-medium"}>{item.title}</h3>
                            <div className={"flex flex-col gap-y-[16px] pt-4"}>
                                {item.link.map((link, index) => (
                                    <p key={index}
                                       className={"text-[#36485C] text-[16px] leading-[24px]"}>{link.name}</p>
                                ))}
                            </div>
                        </div>
                    ))}
            </div>
            <div
                className={
                    "pt-10 w-full text-center flex flex-col lg:flex-row lg:justify-between gap-y-8 lg:items-center"}>
                <p className={
                    "text-[#5F7896] text-[14px] leading-[22px] font-medium"}>
                    © Copyright 2024. Your Site. All
                    rights
                    reserved.</p>
                <div className={"flex gap-x-[40px] w-full lg:w-fit justify-center"}>
                    <Image
                        src={X}
                        alt={"logo"}
                    />
                    <Image
                        src={Facebook}
                        alt={"logo"}
                    />
                    <Image
                        src={Feed}
                        alt={"logo"}
                    />
                </div>
            </div>
        </section>
    )
}