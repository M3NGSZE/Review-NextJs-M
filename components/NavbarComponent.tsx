import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export function NarbarComponent() {
    return (
        <Navbar fluid rounded className="w-full">
            <NavbarBrand as={Link} href="/">
                <Image
                    src="/next.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite React Logo"
                    width={150}
                    height={150}
                    priority
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite React
                </span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="/" active>
                    Home
                </NavbarLink>
                <NavbarLink as={Link} href="/about">
                    About
                </NavbarLink>
                <NavbarLink href="/service">Services</NavbarLink>
                <NavbarLink href="#">Pricing</NavbarLink>
                <NavbarLink href="/contact">Contact</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
