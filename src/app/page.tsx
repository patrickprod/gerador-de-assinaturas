import { useState, useEffect, useRef } from 'react';

const SignatureGenerator = () => {
  const [name, setName] = useState('Patrick Wesley Farias da Silva');
  const [role, setRole] = useState('Supervisor de Tecnologia');
  const [phone, setPhone] = useState('(11) 4550-3600');
  const [address, setAddress] = useState('');
  const [website, setWebsite] = useState('https://conectacambio.com.br/');
  const [logoUrl, setLogoUrl] = useState('https://via.placeholder.com/150x50?text=Logo+Empresa');
  const [warningPt, setWarningPt] = useState('Este e-mail (inclusive seus anexos) é confidencial e foi enviado apenas para uso do(s) destinatário(s) acima. Se você recebeu este e-mail equivocadamente, você está sendo notificado que qualquer cópia, distribuição ou utilização é estritamente proibida. Por favor, nos informe imediatamente e destrua o original e qualquer impressão do mesmo.');
  const [warningEn, setWarningEn] = useState('This e-mail (including any attachments) is confidential and intended only for the use of the addressee(s) named herein. If you have received this e-mail in error, you are hereby notified that any review, copying or distribution of it is strictly prohibited. Please inform us immediately and destroy the original e-mail and any printouts.');

  const signatureRef = useRef<HTMLDivElement>(null);
  const [htmlSignature, setHtmlSignature] = useState('');

  useEffect(() => {
    if (signatureRef.current) {
      setHtmlSignature(signatureRef.current.innerHTML);
    }
  }, [name, role, phone, address, website, logoUrl, warningPt, warningEn]);

  const handleCopyToClipboard = () => {
    if (signatureRef.current) {
      const signatureHtml = signatureRef.current.innerHTML;
      navigator.clipboard.writeText(signatureHtml)
        .then(() => alert('Assinatura copiada para a área de transferência!'))
        .catch(err => console.error('Erro ao copiar assinatura: ', err));
    } else {
      console.error('Referência da assinatura não encontrada.');
      alert('Erro ao copiar assinatura: referência não encontrada.');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', display: 'flex', gap: '30px' }}>
      <div style={{ flex: 1 }}>
        <h2>Editor de Assinatura</h2>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name">Nome Completo:</label><br />
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="role">Cargo/Departamento:</label><br />
          <input type="text" id="role" value={role} onChange={(e) => setRole(e.target.value)} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="phone">Telefone:</label><br />
          <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="address">Endereço:</label><br />
          <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} placeholder="Ex: Rua Exemplo, 123, Cidade - UF" />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="website">Link do Site:</label><br />
          <input type="text" id="website" value={website} onChange={(e) => setWebsite(e.target.value)} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="logoUrl">URL da Imagem do Logo:</label><br />
          <input type="text" id="logoUrl" value={logoUrl} onChange={(e) => setLogoUrl(e.target.value)} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="warningPt">Texto de Aviso (Português):</label><br />
          <textarea id="warningPt" value={warningPt} onChange={(e) => setWarningPt(e.target.value)} rows={4} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="warningEn">Texto de Aviso (Inglês):</label><br />
          <textarea id="warningEn" value={warningEn} onChange={(e) => setWarningEn(e.target.value)} rows={4} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
        </div>
      </div>

      <div style={{ flex: 1.5 }}>
        <h2>Visualização da Assinatura</h2>
        <div ref={signatureRef} style={{ border: '1px solid #ccc', padding: '15px', backgroundColor: '#f9f9f9', minHeight: '200px' }}>
          <div style={{ color: '#333333', fontSize: '10pt' }}>
            <p style={{ margin: '0 0 2px 0', fontWeight: 'bold' }}>{name || 'Seu Nome Aqui'}</p>
            <p style={{ margin: '0 0 2px 0' }}>{role || 'Seu Cargo/Departamento'}</p>
            <p style={{ margin: '0 0 2px 0' }}>{phone || '(XX) XXXX-XXXX'}</p>
            {address && <p style={{ margin: '0 0 2px 0' }}>{address}</p>}
            {website && <p style={{ margin: '0 0 10px 0' }}><a href={website} target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', textDecoration: 'none' }}>{website}</a></p>}
            {logoUrl && <img src={logoUrl} alt="Logo" style={{ maxWidth: '200px', maxHeight: '70px', display: 'block', margin: '10px 0' }} />}
            <hr style={{border: 'none', borderTop: '1px solid #dddddd', margin: '15px 0'}} />
            {warningPt && <p style={{ margin: '5px 0', fontSize: '8pt', color: '#777777' }}>{warningPt}</p>}
            {warningEn && <p style={{ margin: '5px 0', fontSize: '8pt', color: '#777777' }}>{warningEn}</p>}
          </div>
        </div>
        <button 
          onClick={handleCopyToClipboard} 
          style={{
            marginTop: '15px', 
            padding: '10px 15px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer'
          }}
        >
          Copiar Assinatura HTML
        </button>
        
        <div style={{marginTop: '20px'}}>
            <h3>Código HTML da Assinatura:</h3>
            <textarea 
                value={htmlSignature} 
                readOnly 
                rows={10} 
                style={{width: '100%', padding: '8px', boxSizing: 'border-box', backgroundColor: '#eee', border: '1px solid #ccc'}}
            />
        </div>

      </div>
    </div>
  );
};

export default SignatureGenerator;

