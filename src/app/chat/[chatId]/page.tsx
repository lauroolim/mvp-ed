import Chat from "@/components/chat";
import ChatHistory from "@/components/chat-history";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
    params: {
        chatId: string;
    };
};

const ChatPage = async ({ params: { chatId } }: Props) => {
    const { userId } = await auth();
    if (!userId) {
        return redirect("/sign-in");
    }

    return (
        <div className="flex flex-col md:flex-row max-h-screen overflow-scroll">
            <div className="flex w-full max-h-screen overflow-scroll">
                {/* chat history */}
                <div className="flex-[1] max-w-xs md:max-w-sm">
                    <ChatHistory chatId={parseInt(chatId)} />
                </div>
                {/* pdf viewer */}
                <div className="max-h-screen p-4 overflow-scroll flex-[5] flex items-center justify-center">
                    <h1>--- PDF AQUI ---</h1>
                </div>
                {/* chat */}
                <div className="flex-[3] border-l-4 border-l-slate-200">
                    <Chat chatId={parseInt(chatId)} />
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
