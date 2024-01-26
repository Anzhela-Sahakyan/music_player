export function combineClasses(...classes: (string | undefined | null)[]) {
  return classes.filter((className) => !!className).join(" ");
}
