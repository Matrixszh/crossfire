const ClientCarousel = () => {
  const clients = [
    "Crossfire", "InnovateMax", "FutureVision", "DigitalPro", "NextGen Solutions",
    "SmartBusiness", "CloudTech", "DataDrive", "WebMasters", "CodeCraft"
  ];

  return (
    <div className="relative overflow-hidden bg-muted py-8">
      <div className="flex animate-scroll whitespace-nowrap">
        {/* First set of logos */}
        <div className="flex space-x-16 text-2xl font-bold text-muted-foreground">
          {clients.map((client, index) => (
            <div key={index} className="flex-shrink-0">
              {client}
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex space-x-16 text-2xl font-bold text-muted-foreground ml-16">
          {clients.map((client, index) => (
            <div key={`dup-${index}`} className="flex-shrink-0">
              {client}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCarousel;