import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a className="logo" href="#home" onClick={() => setOpen(false)}>VK<span>.</span></a>
      <nav className={`nav-links ${open ? "show" : ""}`}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
      <a className="nav-button" href="#contact">Let's talk <ArrowUpRight size={16} /></a>
      <button className="menu-button" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation">
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}