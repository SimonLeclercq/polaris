import React from 'react';

import {Page, Stack, Text, TextStyle, InlineCode} from '../src';

export function Playground() {
  return (
    <Page title="Playground">
      {/* Add the code you want to test in here */}
      <Stack vertical>
        <TextStyle variation="code">TextStyle code variation</TextStyle>
        <Text as="p" variant="bodyMd">
          A utility-first CSS framework packed with classes like{' '}
          <InlineCode>flex</InlineCode>, <InlineCode>pt-4</InlineCode>,{' '}
          <InlineCode>text-center</InlineCode>, and{' '}
          <InlineCode>rotate-90</InlineCode> that can be composed to build any
          design, directly in your markup.
        </Text>
        <Text as="p" variant="bodyMd">
          In volutpat placerat augue, eget ultrices arcu tristique eget.{' '}
          <InlineCode>Inline code</InlineCode> In tristique euismod est gravida
          venenatis. Aliquam erat volutpat. Donec nibh diam, luctus eget justo
          ut, pulvinar iaculis leo. Duis eget accumsan arcu, sed ultricies nisi.
          Suspendisse nunc lectus, interdum nec feugiat nec, sollicitudin non
          elit. Duis sed porta odio. Sed elementum, felis ac blandit congue,
          neque massa aliquet arcu, varius auctor ipsum magna vitae metus.
          Vivamus blandit ante non arcu condimentum consequat. Fusce aliquet
          aliquam risus ut accumsan. Donec fringilla porttitor metus ut
          tincidunt. Sed quis elit non mauris ultricies tempor eget in elit.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Fusce imperdiet auctor metus sit amet euismod.
          Nam erat mauris, facilisis eu justo in, blandit feugiat massa.
          Curabitur id sapien at dui viverra venenatis eu nec nisl.
        </Text>
        <Text as="h2" variant="headingLg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et
          nibh sit amet nibh consectetur ornare. Sed dignissim odio vitae ante
          tincidunt consectetur. Quisque viverra nibh est, in pretium lectus
          euismod in. <InlineCode>Inline code</InlineCode> Mauris quis orci
          fringilla, volutpat turpis at, accumsan tortor. Curabitur gravida et
          neque nec fringilla. Quisque in ante at sem sagittis commodo et id
          massa. Donec et lectus id nisl blandit pharetra eget et nisl. Fusce
          maximus enim eget metus luctus finibus. Proin eget eleifend quam, id
          molestie augue. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Quisque euismod ac sapien id facilisis.
        </Text>
      </Stack>
    </Page>
  );
}
