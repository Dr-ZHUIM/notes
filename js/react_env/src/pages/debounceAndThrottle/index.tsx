import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import Input from "./Input";
import List from "./List";

export default function DebounceAndThrottle() {
  return (
    <div>
      <Counter />
      <hr />
      <Input />
      <hr />
      <List />
    </div>
  );
}

