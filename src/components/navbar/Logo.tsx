import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link 
      to="/" 
      className="flex md:w-[200px] md:h-[80px] w-[150px] h-[60px] items-center justify-center"
    >
      <img 
        src="/lovable-uploads/923f72ac-68ff-4281-b991-9c4d2bde01ba.png" 
        alt="Yuccan Technologies Logo" 
        className="w-full h-full object-contain"
      />
    </Link>
  );
};

export default Logo;