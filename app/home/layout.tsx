import Footer from "~/shared/component/footer";
import Header from "~/shared/component/header";
import MainLayout from "~/shared/layout/main.layout";

export default function Layout() {
  return (
    <MainLayout
      className="min-h-screen bg-base-300"
      header={
        <Header
          className="sticky top-0 z-50 bg-base-100"
          title="Jamiu Adeniyi"
          titleLink="/"
        />
      }
      footer={<Footer />}
    />
  );
}
