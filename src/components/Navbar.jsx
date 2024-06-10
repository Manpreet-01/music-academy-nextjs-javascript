"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }) {
    const [active, setActive] = useState(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem className="bg-red-400" item="Home" setActive={setActive} active={active}>
                    </MenuItem>
                </Link>

                <MenuItem className="bg-red-400" item="Our Courses" setActive={setActive} active={active}>
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/courses">All Courses</HoveredLink>
                        <HoveredLink href="/web-dev">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/web-dev">Advanced Composition</HoveredLink>
                        <HoveredLink href="/web-dev">Music Production</HoveredLink>
                    </div>
                </MenuItem>

                <Link href={"/contact"}>
                    <MenuItem className="bg-red-400" item="Contact Us" setActive={setActive} active={active} />
                </Link>
            </Menu>
        </div>
    );
}

export default Navbar