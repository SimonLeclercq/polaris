import React from 'react';

import {Page, Stack, Text} from '../src';

export function Playground() {
  return (
    <Page title="Playground">
      {/* Add the code you want to test in here */}
      <Stack vertical>
        <Text as="span" variant="displayLg">
          Display lg variant — bold
        </Text>
        <Text as="span" variant="displayMd">
          Display md variant — semibold
        </Text>
        <Text as="span" variant="displaySm">
          Display sm variant — semibold
        </Text>
        <Text as="span" variant="displaySm" fontWeight="bold">
          Display sm variant — bold override
        </Text>
        <Text as="h1" variant="headingXl">
          Heading xl variant — semibold
        </Text>
        <Text as="h1" variant="headingXl" fontWeight="regular">
          Heading xl variant — regular override
        </Text>
        <Text as="h2" variant="headingLg">
          Heading lg variant — semibold
        </Text>
        <Text as="h3" variant="headingMd">
          Heading md variant — semibold
        </Text>
        <Text as="h4" variant="headingSm">
          Heading sm variant — bold
        </Text>
        <Text as="p" variant="bodyLg">
          Body lg variant — regular
        </Text>
        <Text as="p" variant="bodyMd">
          Body md variant — regular
        </Text>
        <Text as="p" variant="bodyMd" fontWeight="medium">
          Body md variant — medium override
        </Text>
        <Text as="p" variant="bodySm">
          Body sm variant — regular
        </Text>
      </Stack>
    </Page>
  );
}
