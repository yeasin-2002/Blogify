export const RootErrorBoundary = ({ ...rest }) => {
  return (
    <div {...rest}>
      <h1 className="text-center text-4xl font-bold">Error</h1>
      <p className="text-center text-2xl">
        An error occurred. Please try again later.
      </p>
    </div>
  );
};
