function example2(ex: number): boolean {
  if (typeof ex === "number") {
    if (ex % 2 !== 0) {
      return (true);
    } else {
      return (false);
    }
  }

  return false;
}