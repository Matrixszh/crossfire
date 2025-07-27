interface ServiceCardProps {
  title: string;
  description: string;
  features?: string[];
  icon?: React.ReactNode;
}

const ServiceCard = ({ title, description, features, icon }: ServiceCardProps) => {
  return (
    <div className="glass-card-premium p-8 rounded-2xl hover:shadow-glow-sm transition-all duration-500 group relative overflow-hidden h-full">
      <div className="absolute top-4 right-4">
        <div className="w-3 h-3 bg-primary rounded-full shadow-glow animate-pulse"></div>
      </div>
      
      {icon && (
        <div className="mb-6 flex items-center justify-center">
          <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
            {icon}
          </div>
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 group-hover:translate-x-1">{title}</h3>
      <p className="text-foreground/80 mb-6 text-lg leading-relaxed">{description}</p>
      
      {features && (
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="text-foreground flex items-center group/item">
              <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mr-4 shadow-glow group-hover/item:scale-110 transition-transform duration-300"></div>
              <span className="font-medium group-hover/item:text-primary/90 transition-colors duration-200">{feature}</span>
            </li>
          ))}
        </ul>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

export default ServiceCard;