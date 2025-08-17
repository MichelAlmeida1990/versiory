import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import SchoolSystem from '@/components/SchoolSystem';
import Portfolio from '@/components/Portfolio';

export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#000000', 
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <h1 style={{ 
        fontSize: '3rem', 
        fontWeight: 'bold', 
        color: '#ccff00',
        marginBottom: '1rem'
      }}>
        Versiory
      </h1>
      <p style={{ 
        fontSize: '1.5rem', 
        color: '#ffffff',
        marginBottom: '2rem'
      }}>
        Teste - Página funcionando!
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ width: '80px', height: '80px', backgroundColor: '#031f5f', borderRadius: '8px' }}></div>
        <div style={{ width: '80px', height: '80px', backgroundColor: '#00afee', borderRadius: '8px' }}></div>
        <div style={{ width: '80px', height: '80px', backgroundColor: '#ca00ca', borderRadius: '8px' }}></div>
        <div style={{ width: '80px', height: '80px', backgroundColor: '#c2af00', borderRadius: '8px' }}></div>
        <div style={{ width: '80px', height: '80px', backgroundColor: '#ccff00', borderRadius: '8px' }}></div>
      </div>
    </div>
  );
}
