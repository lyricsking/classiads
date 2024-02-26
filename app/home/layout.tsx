import { Outlet } from "@remix-run/react";
import Footer from "~/shared/component/footer";
import Header from "~/shared/component/header";
import MainLayout from "~/shared/layout/main.layout";

export default function Layout() {
  return (
    <MainLayout
      className="min-h-screen bg-base-300"
      footer={<Footer />}
    ><Outlet/></MainLayout>
  );
}
