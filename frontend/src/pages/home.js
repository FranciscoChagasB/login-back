import Link from 'next/link';
import Header from '../components/Header';
import ProtectedRoute from '../services/ProtectedRoute';

export default function Home() {
  return (
    <ProtectedRoute>
      <div>
        <Header />
        <h2>Página Inicial</h2>
        <Link href="/login">Login</Link>
        <br />
        <Link href="/register">Cadastrar</Link>
      </div>
    </ProtectedRoute>
  );
}