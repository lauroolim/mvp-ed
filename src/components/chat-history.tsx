"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { FilePlus2 } from "lucide-react";

type Props = {
    chatId: number;
};

const ChatHistory = ({ chatId }: Props) => {
    const [loading, setLoading] = React.useState(false);

    return (
        <div className="w-full min-h-screen overflow-auto p-4 text-gray-400 border  bg-zinc-300 flex flex-col items-center">
            <Link href="/">
                <Button className="w-full max-w-xs border-separate bg-zinc-900 border-white border mb-4">
                    <FilePlus2 className="mr-2 w-4 h-4" />
                    New Chat
                </Button>
            </Link>
            <Button className="w-full max-w-xs border-collapse border-white border mb-4 bg-slate-500">
                aula1.pdf
            </Button>
            <Button className="w-full max-w-xs border-collapse border-white border mb-4 bg-slate-500">
                aula2.pdf
            </Button>
        </div>
    );
};

export default ChatHistory;
