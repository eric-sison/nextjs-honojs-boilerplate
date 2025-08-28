"use client";

import { Button } from "@/components/ui/Button";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
      <p className="text-2xl">Count: {count}</p>
      <Button variant="secondary" onClick={() => setCount(count + 1)}>
        Start counting
      </Button>
    </div>
  );
}
