const CategoryList = () => {
  return (
    <div>
      <h2 className="text-4xl text-center mt-16 font-bold">Job Category List</h2>
      <p className="text-center mt-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <div className="grid grid-cols-4 gap-6 mt-6 text-left">

        {/* Card 1 */}
        <div className="card bg-base-100  shadow-2xl">
          <figure className="justify-start ml-6">
            <img className="w-10"
              src="/src/assets/icons/accounts.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title ">Account & Finance</h2>
            <p>300 Jobs Available</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 shadow-2xl">
          <figure className="justify-start ml-6">
            <img
              src="/src/assets/icons/creative.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Creative Design</h2>
            <p>100+ Jobs Available here</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 shadow-2xl">
          <figure className="justify-start ml-6">
            <img
              src="/src/assets/icons/marketing.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Marketing & Sales</h2>
            <p>150 Jobs Available</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card bg-base-100 shadow-2xl">
          <figure className="justify-start ml-6">
            <img
              src="/src/assets/icons/chip.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Engineering Job</h2>
            <p>224 Jobs Available</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CategoryList;
