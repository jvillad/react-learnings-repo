import Nav from "./Nav";

function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
