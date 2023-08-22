import Container from "@/components/layout/container";
import airbnb from "@/public/images/airbnb.svg";
import ge from "@/public/images/ge.svg";
import google from "@/public/images/google.svg";
import googleCloud from "@/public/images/google-cloud.svg";
import microsoft from "@/public/images/microsoft.svg";
import netflix from "@/public/images/netflix.svg";
import Image from "next/image";


export default function HeroSection() {
    return (
        <Container>
            <div className="relative pt-36 ml-auto">
                <div className="lg:w-2/3 text-center mx-auto">
                    <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">Shaping
                        a world with <span className="text-primary dark:text-white">reimagination.</span></h1>
                    <p className="mt-8 text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas
                        doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p>
                    <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                        <a href="#"
                           className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                        >
                            <span className="relative text-base font-semibold text-white">Get started</span>
                        </a>
                        <a href="#"
                           className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max">
                      <span
                          className="relative text-base font-semibold text-primary dark:text-white"
                      >Learn more</span
                      >
                        </a>
                    </div>
                    <div
                        className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
                        <div className="text-left">
                            <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The lowest
                                price</h6>
                            <p className="mt-2 text-gray-500">Some text here</p>
                        </div>
                        <div className="text-left">
                            <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The fastest on the
                                market</h6>
                            <p className="mt-2 text-gray-500">Some text here</p>
                        </div>
                        <div className="text-left">
                            <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The most loved</h6>
                            <p className="mt-2 text-gray-500">Some text here</p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
                    <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                        <Image src={google} className="h-12 w-auto mx-auto" loading="lazy" alt="client logo"/>
                    </div>
                    <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                        <Image src={microsoft} className="h-12 w-auto mx-auto" loading="lazy" alt="client logo"/>
                    </div>
                    <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                        <Image src={airbnb} className="h-9 w-auto m-auto" loading="lazy" alt="client logo"/>
                    </div>
                    <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                        <Image src={netflix} className="h-12 w-auto mx-auto" loading="lazy" alt="client logo"/>
                    </div>
                    <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                        <Image src={ge} className="h-8 w-auto m-auto" loading="lazy" alt="client logo"/>
                    </div>
                    <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                        <Image src={googleCloud} className="h-12 w-auto mx-auto" loading="lazy" alt="client logo"/>
                    </div>
                </div>
            </div>
        </Container>
    )
}