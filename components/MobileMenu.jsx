// ... import lainnya

export default function MobileMenu({ isOpen, onClose }) {
  // ... state dan useEffect sama seperti sebelumnya ...

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
      />

      {/* Kontainer Menu Putih */}
      {/* PERUBAHAN: Tambahkan 'flex flex-col' agar header diam di atas, konten yang scroll */}
      <div className="relative w-[85%] max-w-[400px] h-full bg-white shadow-2xl flex flex-col animate-slideInRight">
        
        {/* 1. HEADER (Diam/Fixed di atas) */}
        <div className="flex justify-between items-center p-5 border-b border-gray-100 flex-shrink-0">
          <span className="text-xl font-bold text-gray-800">Menu</span>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <FontAwesomeIcon icon={faXmark} size="lg" className="text-gray-500" />
          </button>
        </div>

        {/* 2. LIST MENU (Area yang bisa di-scroll) */}
        {/* Tambahkan 'flex-1 overflow-y-auto' dan 'pb-20' agar item bawah tidak kepotong */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-1 pb-32">
          
          <NavLink to="/" className={navItemClass} onClick={onClose}>Home</NavLink>
          <NavLink to="/about" className={navItemClass} onClick={onClose}>About Us</NavLink>

          {/* Solution Dropdown */}
          <div className="border-b border-gray-100 py-2">
            <button
              onClick={() => setIsSolutionOpen(!isSolutionOpen)}
              className={`flex items-center justify-between w-full py-2 text-lg font-medium ${isSolutionOpen ? 'text-blue-600' : 'text-gray-700'}`}
            >
              Solution <FontAwesomeIcon icon={faChevronDown} className={`text-xs transition-transform ${isSolutionOpen ? "rotate-180" : ""}`} />
            </button>
            
            {/* Render Conditional tanpa animasi height untuk mencegah potongan */}
            {isSolutionOpen && (
              <div className="mt-2 ml-4 flex flex-col space-y-3 border-l-2 border-gray-100 pl-3 py-2">
                 {/* PASTIKAN SEMUA LINK ADA DISINI */}
                 <Link to="/ai-app-automation-development" onClick={onClose} className="text-gray-600 text-sm py-1">AI App & Automation</Link>
                 <Link to="/web-app" onClick={onClose} className="text-gray-600 text-sm py-1">Web App Development</Link>
                 <Link to="/mobile-app" onClick={onClose} className="text-gray-600 text-sm py-1">Mobile App Development</Link>
                 <Link to="/wordpress-dev" onClick={onClose} className="text-gray-600 text-sm py-1">Wordpress Development</Link>
                 <Link to="/cms" onClick={onClose} className="text-gray-600 text-sm py-1">CMS</Link>
                 <Link to="/uiux" onClick={onClose} className="text-gray-600 text-sm py-1">UI/UX Design</Link>
                 <Link to="/digital-marketing" onClick={onClose} className="text-gray-600 text-sm py-1">Digital Marketing</Link>
                 <Link to="/payment-gateway" onClick={onClose} className="text-gray-600 text-sm py-1">Payment Gateway</Link>
                 <Link to="/graphic-design" onClick={onClose} className="text-gray-600 text-sm py-1">Graphic Design</Link>
                 <Link to="/digital-strategy-consulting" onClick={onClose} className="text-gray-600 text-sm py-1">Strategy Consulting</Link>
              </div>
            )}
          </div>

          {/* Product Dropdown */}
          <div className="border-b border-gray-100 py-2">
            <button
              onClick={() => setIsProductOpen(!isProductOpen)}
              className={`flex items-center justify-between w-full py-2 text-lg font-medium ${isProductOpen ? 'text-blue-600' : 'text-gray-700'}`}
            >
              Our Product <FontAwesomeIcon icon={faChevronDown} className={`text-xs transition-transform ${isProductOpen ? "rotate-180" : ""}`} />
            </button>
            {isProductOpen && (
              <div className="mt-2 ml-4 flex flex-col space-y-3 border-l-2 border-gray-100 pl-3 py-2">
                 <Link to="/Edunav" onClick={onClose} className="text-gray-600 text-sm py-1">EduNav</Link>
                 <Link to="/venti" onClick={onClose} className="text-gray-600 text-sm py-1">Venti</Link>
                 <Link to="/latihan" onClick={onClose} className="text-gray-600 text-sm py-1">Latihan.id</Link>
                 <Link to="/rajin" onClick={onClose} className="text-gray-600 text-sm py-1">Rajin.id</Link>
                 <Link to="/writing-aide" onClick={onClose} className="text-gray-600 text-sm py-1">Writing Aide</Link>
                 <Link to="/mari-dukung" onClick={onClose} className="text-gray-600 text-sm py-1">MariDukung.com</Link>
                 <Link to="/jadwal-kuliah" onClick={onClose} className="text-gray-600 text-sm py-1">Jadwal Kuliah</Link>
              </div>
            )}
          </div>

          <NavLink to="/portfolio" className={navItemClass} onClick={onClose}>Portfolio</NavLink>
          <NavLink to="/blog" className={navItemClass} onClick={onClose}>Blog</NavLink>
          <NavLink to="/contact" className={navItemClass} onClick={onClose}>Contact</NavLink>

          <div className="pt-6">
             <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">Demo Gratis</button>
          </div>
        </div>
      </div>
    </div>
  );
}