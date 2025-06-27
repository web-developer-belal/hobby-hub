const SectionTitle = ({ title, center = true, subtitle = null }) => {
  return (
    <div className={`${center ? 'text-center' : 'text-left'} mb-5`}>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans text-sm text-base-content/70 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 bg-accent ${center ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;