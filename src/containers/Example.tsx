'use client'

import Button from "@/components/button/Button";
import Link from "next/link";

export default function Example() {
    const onClick = () => {
        alert("Back to home");
    }

    return (
        <>
            <Link href="/">
                <Button text="Back to home" onClick={onClick}/>
            </Link>
        </>
    );
}
