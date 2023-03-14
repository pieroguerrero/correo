interface IEmailTabItem {
  title: string;
  children: JSX.Element;
  extraClases?: string;
}
export default function EmailTabItem({
  title,
  children,
  extraClases = "",
}: IEmailTabItem) {
  return (
    <button
      className={
        "pl-4 flex h-14 w-[252px] gap-4 items-center hover:bg-gray-100 text-sm " +
        extraClases
      }
    >
      {children}
      {title}
    </button>
  );
}
