import React from "react";

interface CertificateProps {
  certificates: Array<{
    title: string;
    issuer: string;
    date: string;
    url?: string;
  }>;
}

const Certificate: React.FC<CertificateProps> = ({ certificates }) => {
  if (!certificates || certificates.length === 0) return null;
  return (
    <section id="certificates" className="section mt-12">
      <div className="container-custom">
        <h2 className="section-title">Certificates</h2>
       <h4 style={{ textAlign: "center" }}>
  Here are some of my certificates.
</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {certificates.map((cert, idx) => (
            <div key={idx} className="border rounded-lg p-4 bg-muted shadow-sm">
              <h3 className="font-semibold text-lg mb-1">{cert.title}</h3>
              <div className="text-sm text-muted-foreground mb-1">{cert.issuer}</div>
              <div className="text-xs text-gray-500 mb-2">{cert.date}</div>
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-xs"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
