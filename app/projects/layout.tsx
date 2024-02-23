import Footer from "~/shared/component/footer";
import Header from "~/shared/component/header";
import MainLayout from "~/shared/layout/main.layout";

export default function ProjectLayout() {
  return (
    <MainLayout
      header={
        <Header
          className="sticky top-0 z-50 bg-base-100"
          title="Projects"
          titleLink="/projects"
        />
      }
      footer={<Footer />}
    />
  );
}
