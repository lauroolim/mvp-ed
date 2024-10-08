"use client";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Forward } from "lucide-react";


type Props = { chatId: number };

const Chat = ({ chatId }: Props) => {
    const [input, setInput] = React.useState("");
    return (
        <div
            className="relative max-h-screen overflow-scroll"
            id="message-container"
        >
            <div className="sticky top-0 inset-x-0 p-2 bg-white h-fit">
                <h3 className="text-xl font-bold">Chat</h3>
            </div>

            <form
                className="sticky bottom-0 inset-x-0 px-2 py-4 bg-white"
            >
                <div className="flex">
                    <Input
                        value={input}
                        placeholder="Ask any question..."
                        className="w-full"
                    />
                    <Button className="bg-zinc-900 ml-2">
                        <Forward className="h-4 w-4" />
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Chat;