export function goToNextSection(section){
    return section.current.scrollIntoView({ behavior: 'smooth' });
  };