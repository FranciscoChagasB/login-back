import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getProfile, updateProfile } from '../services/api';
import Header from '../components/Header';
import ProtectedRoute from '../services/ProtectedRoute';
import "../styles/Profile.css"

export default function Profile() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getProfile();
        setUser(profile);
        setName(profile.name);
        setEmail(profile.email);
        setCpf(profile.cpf);
      } catch (error) {
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateProfile(name, cpf, email);
      alert('Perfil atualizado com sucesso');
    } catch (error) {
      alert('Erro ao atualizar perfil');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Carregando...</div>;

  return (
    <ProtectedRoute>
      <div>
        <Header />
        <h2>Perfil</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Carregando...' : 'Atualizar'}
          </button>
        </form>
      </div>
    </ProtectedRoute>
  );
}