const Footer = () => {
  return (
    <footer className="  text-base-content p-10 bg-gray-800">
      <div className="footer flex justify-between max-w-6xl mx-auto">
        <aside>
          <p className="font-bold text-2xl border-b-2 border-dotted border-gray-400 pb-2 mb-2 w-fit">CareerHub</p>
         
          <p className="mb-2">
            There are many variations of passages <br /> of Lorem Ipsum , but
            the majority have <br /> suffered alteration in some form.
          </p>
          <img src="/src/assets/icons/social.png" alt="" />
        </aside>
        <nav className="">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Work</a>
          <a className="link link-hover">Latest News</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav className="">
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Prototype</a>
          <a className="link link-hover">Plans & Pricing</a>
          <a className="link link-hover">Customers</a>
          <a className="link link-hover">Integration </a>
        </nav>
        <nav className="">
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Help Desk</a>
          <a className="link link-hover">Sales</a>
          <a className="link link-hover">Become a Partner</a>
          <a className="link link-hover">Developers </a>
        </nav>
        <nav className="">
          <h6 className="footer-title">Contact</h6>
          <a className="link link-hover">524 Broadway , NYC</a>
          <a className="link link-hover">+1 777 - 978 - 5570</a>
        </nav>
        
        
      </div>

      <div className="flex justify-between border-t-2  border-gray-700 pb-2 mb-2 mt-8">
          <p className="mt-10">@2026 CareerHub. All Rights Reserved</p>
          <p className="mt-10">
            Powered by <span className="font-bold ">CareerHub</span>
          </p>
        </div>
    </footer>
  );
};

export default Footer;
