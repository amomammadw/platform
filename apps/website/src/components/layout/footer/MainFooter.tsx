export const MainFooter = () => {
  return (
    <footer className="bg-grey-10 py-10">
      <div className="container grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {new Array(4).fill(null).map((_, index) => (
          <div key={`footer-item-${index}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            laboriosam, cupiditate eius laborum ea ratione commodi eum neque
            porro, possimus dignissimos nemo necessitatibus, vero et numquam a
            facere quia placeat.
          </div>
        ))}
      </div>
    </footer>
  );
};
