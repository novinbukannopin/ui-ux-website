import Image from "next/image";
import Logo from "../public/assets/Logo.svg"
import User from "../public/assets/User.svg"
import Menu from "../public/assets/Menu.svg"

const navLinks = [
    {
        name: "Features",
    },
    {
        name: "Pricing"
    },
    {
        name: "Enterprise"
    },
    {
        name: "Careers"
    }
]

export function Navbar() {
    return (
        <nav
            className={"flex w-full items-center justify-between px-[20px] py-[24px] lg:px-20 lg:container lg:mx-auto"}>
            <div className={"flex items-center"}>
                <Image src={Logo} alt={"logo"}/>

                <div className={"hidden lg:flex pl-[74px] gap-x-[56px]"}>
                    {navLinks.map((item, index) => (
                        <p className={"font-medium text-[#36485C]"} key={index}>{item.name}</p>
                    ))}
                </div>
            </div>

            <div className={"flex gap-x-5 items-center"}>
                <p className={"hidden lg:block font-medium text-[#36485C] pr-[56px]"}>Open an Account</p>
                <div className={"flex items-center gap-x-2"}>
                    <Image src={User} alt={"user profile"}/>
                    <span className={"hidden font-medium lg:block text-[#36485C]"}>Sign In</span>
                </div>

                <Image className={"lg:hidden"} src={Menu} alt={"user profile"}/>
            </div>
        </nav>
    )
}