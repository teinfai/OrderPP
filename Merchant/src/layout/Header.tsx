type HeaderProps = {
  title?: string;
};

const Header = ({ title = "OrderPP" }: HeaderProps) => {
  return (
    <header className="border-b border-gray-200 bg-white px-4 py-3">
      <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
    </header>
  );
};

export default Header;
