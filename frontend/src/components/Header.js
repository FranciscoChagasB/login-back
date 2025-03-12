import { useState, useEffect } from 'react';
import Link from 'next/link'; // Não precisa de <a> agora
import { useRouter } from 'next/router';
import "../styles/Header.css"

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Verificar se o código está sendo executado no lado do cliente (navegador)
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    }
  }, []); // Executar apenas uma vez após o componente ser montado

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      router.push('/login');
    }
  };

  return (
    <header>
      <nav>
        <Link href="/login">
          Login {/* Só coloque o conteúdo diretamente dentro do Link */}
        </Link>
        <Link href="/register">
          Register
        </Link>
        {isLoggedIn && (
          <button onClick={handleLogout}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;