const NavLink = ({ href, title }) => {
  return (
    <a href={href} className="block uppercase py-2 pl-3 pr-4 text-white sm:text-md md:p-0 mt-3">
      {title}
    </a>
  );
};

export default NavLink;
