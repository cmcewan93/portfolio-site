const scrollToRefObject = (ref) => window.scrollTo({
  top: ref.current.offsetTop - 60,
  behavior: "smooth"
}) 

export default scrollToRefObject;
