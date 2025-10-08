/* drone_components/DroneBreadcrumbs.tsx */

import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DroneBreadcrumbs.css";

interface Props {
  items: { label: string; path?: string }[];
}

export default function DroneBreadcrumbs({ items }: Props) {
  return (
    <Breadcrumb>
      {items.map((item, idx) => (
        <Breadcrumb.Item key={idx} linkAs={item.path ? Link : "span"} linkProps={item.path ? { to: item.path } : undefined}>
          {item.label}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}
