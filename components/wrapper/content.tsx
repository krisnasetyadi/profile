import { ReactNode } from "react";

export default function ContentWrapper({ children }: { children: ReactNode }) {
  return <main className="">{children}</main>;
}
