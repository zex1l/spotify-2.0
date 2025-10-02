import type { JSX } from "react";

export type RouteType = {
  path: string;
  element: () => JSX.Element;
}