import "./globals.css";
import NavBar from "@/components/NavBar"; "@/components/NavBar";
import { TaskProvider } from '../context/Context.js';

export const metadata = {
  title: "TaskMgr",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <TaskProvider>
          <div className="container mx-auto h-screen w-1/2 py-5">
            {children}
          </div>
        </TaskProvider>
      </body>
    </html>
  );
}
