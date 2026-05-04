"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./footer";

import PWAInstallButton from "../PWAButton";
import PWARegister from "../PWARegister";

import { NotificationProvider, useNotification } from "../NotificationComponent";
import { supabase } from "@/lib/supabase";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
    createdAt: string;
}

function LayoutContent({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { sendNotification } = useNotification();
    const pathname = usePathname();

    // Setup Supabase realtime
    useEffect(() => {
        const channel = supabase
            .channel('layout-notifications')
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: 'todos' },
                async (payload) => {
                    console.log("Change received in layout:", payload);

                    if (payload.eventType === 'INSERT' && payload.new) {
                        const todo = payload.new as Todo;
                        await sendNotification({
                            title: "New Todo Added",
                            body: `${todo.text}`,
                            redirectUrl: '/realtime-db'
                        });
                    } else if (payload.eventType === 'UPDATE' && payload.new) {
                        const todo = payload.new as Todo;
                        await sendNotification({
                            title: todo.completed ? 'Todo Completed' : 'Todo Updated',
                            body: `${todo.text}`,
                            redirectUrl: '/realtime-db'
                        });
                    } else if (payload.eventType === 'DELETE' && payload.old) {
                        const todo = payload.old as Todo;
                        await sendNotification({
                            title: 'Todo Deleted',
                            body: todo.text ? `${todo.text}` : 'A todo item was deleted',
                            redirectUrl: '/realtime-db'
                        });
                    }
                }
            )
            .on('system', {}, (payload) => {
                if (payload.extension === 'postgres_changes' && payload.status === 'ok') {
                    sendNotification({
                        title: "Realtime DB Connected",
                        body: "Connected to Supabase Realtime Database successfully",
                        redirectUrl: '/realtime-db'
                    });
                }
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [sendNotification]);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="flex min-h-screen">
            <PWAInstallButton />
            <PWARegister />
            <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
            <div className="flex flex-col flex-1">
                <Header brandName="My App" onBrandClick={toggleSidebar} />
                <main className="flex-1 p-4 md:p-6 bg-gray-50">
                    {/*
                        key={pathname} memaksa React untuk unmount & remount div ini
                        setiap kali route berubah, sehingga animasi CSS ter-trigger ulang.
                        Ini adalah cara paling sederhana untuk SPA page transition.
                    */}
                    <div key={pathname} className="page-transition-enter">
                        {children}
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default function ClientLayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <NotificationProvider>
            <LayoutContent>{children}</LayoutContent>
        </NotificationProvider>
    );
}