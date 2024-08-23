'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { date, z } from "zod"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from './ui/input'
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"


const formSchema = z.object({
    lesson: z.string().min(1).max(50),
    date: z.object(
        {
            from: z.date(),
            to: z.date().optional(),
        },
        { required_error: "Date is required." },
    )
        .refine((date) => {
            return !!date.to
        }, "End Date is required."),
    class: z.string().min(1).max(50),
    aditional: z.string().min(1).max(100),
})

export const ClassForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            lesson: "",
            class: "",
            date: {
                from: undefined,
                to: undefined,
            },
            aditional: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <div className="w-full">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-left ">
                    <FormField
                        control={form.control}
                        name="lesson"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Título da aula</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="class"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Turma</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button>
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {field.value.from ? (
                                                field.value.to ? (
                                                    <>
                                                        {format(field.value.from, "LLL dd, y")} -{" "}
                                                        {format(field.value.to, "LLL dd, y")}
                                                    </>
                                                ) : (
                                                    format(field.value.from, "LLL dd, y")
                                                )
                                            ) : (
                                                <span>Data da aula</span>
                                            )}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            initialFocus
                                            mode="range"
                                            defaultMonth={field.value.from}
                                            selected={{ from: field.value.from, to: field.value.to }}
                                            onSelect={field.onChange}
                                            numberOfMonths={1}
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormDescription>
                                    Escolha a data correspondente o período que foi passado o conteúdo da aula.
                                </FormDescription>
                                <FormMessage />
                            </>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="aditional"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Info</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    Adiciona informações adicionais sobre a aula.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    );
}