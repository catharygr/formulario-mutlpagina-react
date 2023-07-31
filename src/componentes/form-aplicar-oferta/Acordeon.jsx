import * as Accordion from "@radix-ui/react-accordion";

export default function Acordeon() {
  return (
    <Accordion.Root>
      <Accordion.Item>
        <Accordion.Header>
          <Accordion.Trigger />
        </Accordion.Header>
        <Accordion.Content />
      </Accordion.Item>
    </Accordion.Root>
  );
}
