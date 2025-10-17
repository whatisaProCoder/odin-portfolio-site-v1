function ComponentLab({ children }) {
  return (
    <div className="h-full p-4">
      <Header text="Component Lab" />
      <div className="h-full flex flex-col justify-center items-center pt-8">
        {children}
      </div>
    </div>
  );
}

export default ComponentLab;
