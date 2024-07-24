import React from "react";

function SampleCard({ children, title, icon, className }: Readonly<{ children: React.ReactNode; title: string; icon: string; className?: string }>) {
  return (
    <div className={`sample-card-box ${className && className}`}>
      <div className="flex items-center gap-2 text-xl">
        <i className={icon}></i>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="sp_border w-full h-1"></div>
      {children}
    </div>
  );
}

export default SampleCard;
