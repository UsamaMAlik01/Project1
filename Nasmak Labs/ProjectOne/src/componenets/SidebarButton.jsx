import React from 'react';


export const SidebarButton = ({
  iconSrc,
  text = '',
  secondaryIconSrc,
  isTablet = false,
  isMobile = false,
  isActive = false,
}) => {
  // Mobile: Don't render
  if (isMobile) return null;

  // Shared styles
  const iconContainer = "flex items-center justify-center w-[24px] h-[24px]";
  const iconStyle = "w-[20px] h-[20px]";
  const textStyle = "w-[139px] h-[22px] font-roboto font-medium text-[15px] leading-[22px] tracking-[0.43px] text-[#DBDADE]";

  // Tablet: Icon only
  if (isTablet) {
    return (
      <div className={`flex items-center justify-center w-[60px] h-[53px] py-[9px] px-[16px] gap-[8px] hover:bg-[#3E4049] ${isActive ? 'bg-[#3E4049]/50' : ''}`}>
        <div className={iconContainer}>
          <img src={iconSrc} className={iconStyle} alt={text || 'Icon'} />
        </div>
      </div>
    );
  }

  // Desktop: Full button
  return (
    <div className={`flex items-center w-[227px] h-[53px] py-[9px] px-[16px] gap-[8px] hover:bg-[#3E4049] ${isActive ? 'bg-[#3E4049]/50' : ''}`}>
      {/* Primary Icon */}
      <div className={iconContainer}>
        <img src={iconSrc} className={iconStyle} alt="Action" />
      </div>

      {/* Text (if provided) */}
      {text && <span className={textStyle}>{text}</span>}

      {/* Secondary Icon (if provided) */}
      {secondaryIconSrc && (
        <div className={iconContainer}>
          <img src={secondaryIconSrc} className={iconStyle} alt="Indicator" />
        </div>
      )}
    </div>
  );
};