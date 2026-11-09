import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="footer-logo">VK<span>.</span></a>
      <p>Designed & built by Varun Kumar</p>
      <a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={15} /></a>
      <div className="copyright">© 2026 VARUN KUMAR. ALL RIGHTS RESERVED.</div>
    </footer>
  );
}