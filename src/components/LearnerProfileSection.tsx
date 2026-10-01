import React from 'react';

export const LearnerProfileSection: React.FC = () => {
  return (
    <section 
      id="profile" 
      className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-[#E3EAF1]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* Section Header */}
        {/* ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f8d1c6] bg-[#FFF0EB] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FD4322] mb-4 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FD4322]" aria-hidden="true" />
            <span>YOUR CAREER, IN ONE PLACE</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-black tracking-tight leading-[1.2] text-[#FD4322] mb-4">
            Your entire career story. <br className="hidden sm:inline" />
            <span className="text-[#FD4322]">One profile.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-[17px] text-[#5A6B82] font-normal leading-relaxed max-w-2xl mx-auto">
            Bring your education, skills, projects, experience and achievements together in one profile that grows with you.
          </p>
        </div>

        {/* ======================================================== */}
        {/* Actual SOLO Profile Screenshot Showcase */}
        {/* ======================================================== */}
        <div className="flex justify-center">
          <div className="w-full max-w-[520px] rounded-2xl overflow-hidden border border-[#E3EAF1] shadow-[0_20px_50px_rgba(20,36,61,0.08)] bg-white">
            <img 
              src="/app.thesolo.network_my-profile.png" 
              alt="SOLO Learner Profile" 
              className="w-full h-auto block object-contain"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
