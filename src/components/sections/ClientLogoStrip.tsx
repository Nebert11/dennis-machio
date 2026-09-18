const clientLogos = [
  { name: 'Afrexim Bank', image: '/logos/Afrexim%20Bank.png' },
  { name: 'Africatalyst', image: '/logos/Africatalyst.png' },
  { name: 'BFBS', image: '/logos/BFBS.png' },
  { name: 'BSK', image: '/logos/BSK.png' },
  { name: 'CAPA France', image: '/logos/CAPA%20France.png' },
  { name: 'EIB Bank', image: '/logos/EIB%20Bank.png' },
  { name: 'European Union', image: '/logos/European%20Union.png' },
  { name: 'IPPF AR', image: '/logos/IPPF%20AR.png' },
  { name: 'Ibac', image: '/logos/Ibac.png' },
  { name: 'Image Registrars', image: '/logos/Image%20Registrars.png' },
  { name: 'Knowledge Empowering Youth', image: '/logos/Knowledge%20Empowering%20Youth.png' },
  { name: 'Michezo Afrika', image: '/logos/Michezo%20Afrika.png', url: 'https://www.michezoafrika.com/' },
  { name: 'RHNK', image: '/logos/RHNK.png' },
  { name: 'Sasini PLC', image: '/logos/Sasini%20PLC.png' },
  { name: 'White Beach Palace', image: '/logos/White%20beach%20palace.png' },
  { name: 'Eleon Inn', image: '/logos/eleon%20Inn.png' },
  { name: 'ELF Africa', image: '/logos/elf%20africa.png' },
];

function ClientLogoStrip() {
  const logos = [...clientLogos, ...clientLogos];

  return (
    <section className="client-logo-section section-pad" aria-label="Selected clients and partners">
      <div className="section-kicker">
        Clients &amp; Partners <span>Across Africa</span>
      </div>
      <div className="client-logo-window">
        <div className="client-logo-track">
          {logos.map((logo, index) => (
            <div className="client-logo" key={`${logo.name}-${index}`}>
              {logo.image && logo.url ? (
                <a href={logo.url} target="_blank" rel="noopener noreferrer">
                  <img src={logo.image} alt={logo.name} />
                </a>
              ) : logo.image ? (
                <img src={logo.image} alt={logo.name} />
              ) : logo.url ? (
                <a href={logo.url} target="_blank" rel="noopener noreferrer">
                  {logo.name}
                </a>
              ) : (
                <span>{logo.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientLogoStrip;
