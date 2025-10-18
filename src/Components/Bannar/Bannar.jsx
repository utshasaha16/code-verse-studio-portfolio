const Bannar = () => {
  return (
    <>
      <section className="flex justify-between space-x-3">
        <div className="bg-white rounded-4xl shadow-md p-4">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-bl-4xl rounded-tr-4xl shadow-2xl"
            />
            <div className="space-y-3">
              <h1 className="text-xl text-stone-400">A web Designer</h1>
              <h3 className="text-5xl font-medium">Utsha Saha</h3>
              <p className="text-stone-400">
                A web devepoloper is a programmer who specializes in the
                development of World Wide Web applications using a client–server
                model.
              </p>
            </div>
          </div>
        </div>
        {/* second containar */}
        <div className="bg-white rounded-4xl shadow-md p-4">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-bl-4xl rounded-tr-4xl shadow-2xl"
        />
        <div className="space-y-3">
          <h1 className="text-xl text-stone-400">A web Designer</h1>
          <h3 className="text-5xl font-medium">Hasnat Evan</h3>
          <p className="text-stone-400">
            A web devepoloper is a programmer who specializes in the development
            of World Wide Web applications using a client–server model.
          </p>
        </div>
      </div>
    </div>
      </section>
    </>
  );
};

export default Bannar;
