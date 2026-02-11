import { render, screen } from "@testing-library/react";
import MainPage from "@/app/components/pages/MainPage";

jest.mock("@/lib/routes", () => ({
  sections: [
    {
      name: "MockSection",
      Component: () => <div>Mock Section</div>,
    },
  ],
}));

jest.mock("@/app/components/layout", () => ({
  Header: () => <header>Akhil Panwar</header>,
  Footer: () => <footer>Contact Me</footer>,
}));

jest.mock("framer-motion", () => {
  const React = require("react");
  const { useEffect } = React;
  return {
    motion: {
      div: (props: any) => {
        const { children, onAnimationComplete, ...rest } = props;
        useEffect(() => {
          if (typeof onAnimationComplete === "function") onAnimationComplete();
        }, []);
        return <div {...rest}>{children}</div>;
      },
      h1: (props: any) => {
        const { children, ...rest } = props;
        return <h1 {...rest}>{children}</h1>;
      },
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
  };
});

describe("MainPage", () => {
  it("renders header, footer, and sections", () => {
    render(<MainPage />);

    expect(screen.getByText("Akhil Panwar")).toBeInTheDocument();
    expect(screen.getByText(/Contact Me/i)).toBeInTheDocument();
    expect(screen.getByText("Mock Section")).toBeInTheDocument();
  });
});
