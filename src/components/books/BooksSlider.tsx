import { BooksSliderProps } from "../../types/books/booksPage.types";
import { Tabs, Tab, Box } from "@mui/material";
import { ChangeEvent, useState } from "react";
import * as React from "react";

export default function BooksSlider(
  props: BooksSliderProps
): JSX.Element | null {
  const { books } = props;
  if (!books || books.length == 0) {
    return null;
  }

  const [value, setValue] = useState(0);

  const handleChange = (event: ChangeEvent, newValue: any) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </Tabs>
    </Box>
  );
}
