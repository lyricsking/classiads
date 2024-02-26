import { Outlet } from "@remix-run/react";
import { CommonProps } from "~/shared/types/common.props";
import ScrollToTop from "~/shared/component/scroll.to.top";

type Props = CommonProps & {
  children?: React.ReactNode;
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  footer?: React.ReactNode;
};

export default function MainLayout(props: Props) {
  const { children, footer, header, sidebar } = props;
  return (
    <div className="min-h-screen bg-base-300">
      {header && <header>{header}</header>}

      <div>
        {sidebar && <aside>{sidebar}</aside>}
        <main>
          {children}
        </main>
      </div>

      <ScrollToTop />

      {footer && (
        <>
          <div className="divider divider-md" />
          <footer> {footer} </footer>
        </>
      )}
    </div>
  );
}
