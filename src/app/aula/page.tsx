import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { ArrowRight, LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PdfUpload } from "@/components/pdf-upload";
import { Navbar } from "@/components/navbar";
import { ClassForm } from "@/components/class-form";

const aula = () => {
    return (
        <>
            <div className="w-full min-h-screen overflow-x-hidden">
                <Navbar />
                <div className="flex flex-col items-center justify-center min-h-screen px-4 ">
                    <p className="max-w-xl mt-2 text-lg text-slate-600 text-center"></p>
                    <div className="w-full mt-10 p-5 md:mt-5 flex flex-col items-center justify-center">
                        <ClassForm />
                        <PdfUpload />
                        <Link href={`/chat/1`}>
                            <div className="flex mt-4 justify-center space-x-4">
                                <>
                                    <Link href={`/chat/1`}>
                                        <Button>
                                            Go to Chats <ArrowRight className="ml-2" />
                                        </Button>
                                    </Link>
                                </>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default aula;