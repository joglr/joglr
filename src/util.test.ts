import { assertEquals } from "https://deno.land/std@0.82.0/testing/asserts.ts";
import { linkify } from "./util.ts";

Deno.test("linkify", () => {
  const input = "Test [google](https://www.google.dk/)";
  const expected = 'Test <a href="https://www.google.dk/">google</a>';
  const actual = linkify(input);
  assertEquals(expected, actual);
});
