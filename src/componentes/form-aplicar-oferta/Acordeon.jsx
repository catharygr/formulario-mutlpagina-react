/* eslint-disable react/prop-types */
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "react-feather";

export default function Acordeon({ encabezado, contenido }) {
  return (
    <Accordion.Root>
      <Accordion.Item>
        <Accordion.Header>
          <Accordion.Trigger>
            {encabezado} <ChevronDown />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>{contenido}</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
