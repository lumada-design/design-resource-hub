import { HvContainer } from "@hitachivantara/uikit-react-core";

import { TextSection } from "components/common";
import styles from "./styles";

export const WhatSection = ({ data }: Record<string, any>) => {
  const { name, what, tags } = data[0].attributes;

  return (
    <HvContainer className={styles.root}>
      <TextSection title={`What is ${name}?`} description={what} tags={tags} />
    </HvContainer>
  );
};
