function connectToContext(WrappedComponent: React.FC<any>, select: () => any) {
  return function (props: any) {
    const selectors = select();
    return <WrappedComponent {...selectors} {...props} />;
  };
}

export default connectToContext;
