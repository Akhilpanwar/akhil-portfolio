import "@testing-library/jest-dom";

jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children }: any) => <div>{children}</div>,
    img: (props: any) => <img {...props} />,
    h2: ({ children }: any) => <h2>{children}</h2>,
    p: ({ children }: any) => <p>{children}</p>,
    span: ({ children }: any) => <span>{children}</span>,
  },
}));
