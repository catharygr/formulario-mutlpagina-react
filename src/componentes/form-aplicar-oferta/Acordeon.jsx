/* eslint-disable react/prop-types */
import * as Accordion from "@radix-ui/react-accordion";
import ReactMarkdown from "react-markdown";
import { ChevronDown } from "react-feather";

export default function Acordeon({ encabezado, contenido }) {
  return (
    <Accordion.Root type="single" collapsible={true}>
      <Accordion.Item className="acordeon-border" value="item-1">
        <Accordion.Header asChild>
          <h4 className="acordeon-h4">
            <Accordion.Trigger className="acordeon-trigger">
              <ChevronDown /> {encabezado}
            </Accordion.Trigger>
          </h4>
        </Accordion.Header>
        <Accordion.Content className="acordeon-contenido">
          <ReactMarkdown>{contenido}</ReactMarkdown>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
