import {BlueButton, Feature1, Feature2, Feature3, GreenButton, PinkButton} from "@/public/assets";
import {FeatureCard} from "@/parts";

export function Features() {
    return (
        <section className={"flex flex-col gap-[56px] px-[20px] lg:px-[80px]  max-w-full py-[56px]"}>
            <FeatureCard
                image={Feature1}
                subtitle={"Sales Monitoring"}
                title={"Simplify your sales monitoring"}
                theme="biru"
                arrow={BlueButton}
                direction={"left"}
            />

            <FeatureCard
                image={Feature2}
                subtitle={"Customer Support"}
                title={"Get in touch with your customers"}
                theme="ijo"
                arrow={GreenButton}
                direction={"right"}
            />

            <FeatureCard
                image={Feature3}
                subtitle={"Growth Monitoring"}
                title={"Monitor your site’s new subscribers "}
                theme="pinky"
                arrow={PinkButton}
                custom={true}
                direction={"left"}
            />
        </section>
    )
}



