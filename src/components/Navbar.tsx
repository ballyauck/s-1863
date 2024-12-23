import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SignInForm from './auth/SignInForm';
import MobileMenu from './navbar/MobileMenu';
import DesktopMenu from './navbar/DesktopMenu';
import Logo from './navbar/Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Mobile Navbar - Hidden */}
      <nav className="hidden">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center h-full px-4">
          <Logo />
          <Menu 
            className="text-primary cursor-pointer" 
            size={24} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          />
          <Dialog>
            <DialogTrigger asChild>
              <button className="text-primary font-medium hover:text-primary/80 transition-colors">
                Sign in
              </button>
            </DialogTrigger>
            <DialogContent>
              <SignInForm />
            </DialogContent>
          </Dialog>
        </div>
        
        {/* Mobile Menu */}
        <MobileMenu isOpen={isMobileMenuOpen} />
      </nav>

      {/* Desktop Navbar */}
      <nav 
        className={`fixed w-full z-50 px-6 h-[50px] transition-all duration-300 hidden md:block ${
          isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto flex justify-between items-center h-full">
          <div className="flex items-center gap-2">
            <Logo />
          </div>
          
          {/* Desktop Menu */}
          <DesktopMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;