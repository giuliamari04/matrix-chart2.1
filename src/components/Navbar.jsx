import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#e6c67e]/20 bg-[#090a12]/80 backdrop-blur-xl">
      <nav className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">

        <Link
          to="/"
          className="font-serif text-lg font-semibold tracking-wide"
        >
          Matrice del Destino
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-[#c7c4d0] transition hover:text-[#e6c67e]"
          >
            Calcola la Matrice
          </Link>

          <Link
            to="/tarocchi"
            className="text-[#c7c4d0] transition hover:text-[#e6c67e]"
          >
            Tarocchi
          </Link>

          <Link
            to="/contatti"
            className="text-[#c7c4d0] transition hover:text-[#e6c67e]"
          >
            Contatti
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Apri menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[#e6c67e]/15 px-5 py-4 md:hidden">
          <div className="grid gap-2">
            <Link to="/" onClick={() => setOpen(false)}>
              Calcola la Matrice
            </Link>

            <Link to="/tarocchi" onClick={() => setOpen(false)}>
              Tarocchi
            </Link>

            <Link to="/contatti" onClick={() => setOpen(false)}>
              Contatti
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}