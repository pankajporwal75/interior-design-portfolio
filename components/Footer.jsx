'use client';
import Link from "next/link";
import { useState } from "react";
export default function Footer() {
    const [email, setEmail] = useState("");
    const handleSubmit = () => {
        if (email) {
            alert(`Thank you for subscribing!`);
            setEmail("");
        } else {
            alert("Please enter a valid email address");
        }
    };
    return (
        <div className="bg-zinc-100">
            <div className="container lg:grid lg:grid-cols-2 py-14">
                <div className="grid gap-4 pb-4 text-left lg:pb-0 lg:grid-cols-2">
                    <div>
                        <h2 className="pb-4 text-xl font-semibold">Address</h2>
                        <div className="flex flex-col ">
                            <h1>Giriraj Interiors,</h1>
                            <h1>In Front of Nanakheda Police Station,</h1>
                            <h1>Ujjain, Madhya Pradesh 456010</h1>
                        </div>
                    </div>
                    <div>
                        <h2 className="pb-4 text-xl font-semibold">CONNECT</h2>
                        <div className="flex flex-col ">
                            <Link className="py-1 hover:underline" href="/https://www.instagram.com/girirajinteriors/">Instagram</Link>
                            <a className="py-1 hover:underline" href="mailto:karishmaporwal75@gmail.com">Email</a>
                        </div>
                    </div>
                </div>
                <div className="pt-4 text-center border-t-2 lg:pt-0 lg:text-left lg:border-0 lg:pl-20 ">
                    <p className="pb-4 text-xl font-semibold">STAY UPDATED</p>
                    <div className="relative lg:max-w-sm">
                        <input className="w-full px-4 pr-20 border-2 border-gray-300 rounded-full h-14"
                                type="text" 
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => {setEmail(e.target.value)}} />
                        <button className="absolute h-10 px-3 text-sm text-white bg-black rounded-full top-2 right-2 hover:border-2 hover:border-black hover:bg-white hover:text-black"
                                onClick={handleSubmit}>
                            Subscribe
                        </button>
                    </div>
                    <p className="pt-4 text-gray-500">
                        By subscribing to our newsletter, you agree to receive emails from us. Your personal data will be stored and processed in accordance with our Privacy Policy and you can unsubscribe at any time.
                    </p>
                </div>
            </div>

            {/* Copy Right */}
            <div className="py-10 bg-zinc-200">
                <div className="container text-center text-gray-500 lg:justify-between lg:flex">
                    <div className="pb-4 lg:pb-0">
                        <p>&copy;2025</p>
                    </div>
                    <div className="">
                        <p>Karishma Interior Designs</p>
                    </div>
                    <div className="pb-4 lg:pb-0">
                        Designed by <Link className="hover:underline" href="https://www.instagram.com/pankaj_porwall/">Pankaj Porwal</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
