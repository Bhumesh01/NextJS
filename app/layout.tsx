import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blogs App",
  description: "Document your life Now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="p-5 flex justify-between border-b xl:pl-15 xl:pr-15  mb-5 border-b-borderColor">
        <h1 className="animate-pulse font-extrabold text-3xl "> BLOGS</h1>
        <div className="flex gap-5">
            <Button name="Add Blogs"></Button>
            <Button  name="Login"></Button>
        </div>
        </div>
        {children}
      </body>
    </html>
  );
}
function Button(props:{name: string}){
    return(
    <button className="bg-bgButton text-textButton rounded-2xl p-3 pl-10 pr-10 font-medium w-fit hover:bg-hoverbutton active:bg-hoverbutton">{props.name}</button>
    );
}