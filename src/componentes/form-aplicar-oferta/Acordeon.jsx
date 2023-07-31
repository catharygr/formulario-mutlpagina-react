/* eslint-disable react/prop-types */
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "react-feather";

export default function Acordeon({ encabezado, contenido, id }) {
  return (
    <Accordion.Root type="single" collapsible={true}>
      <Accordion.Item>
        <Accordion.Header>
          <Accordion.Trigger key={id} value={id}>
            <ChevronDown /> {encabezado}
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>{contenido}</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
