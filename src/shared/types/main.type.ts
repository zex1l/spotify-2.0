import type { JSX } from "react";
import {type LucideProps} from 'lucide-react';

export type RouteType = {
  path: string;
  element: () => JSX.Element;
}

export type IconType = React.ComponentType<LucideProps>;