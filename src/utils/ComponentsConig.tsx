export const MDXComponents = {
  h1: (props) => (
    <h1 className="my-5 text-center text-4xl font-bold underline" {...props} />
  ),
  h2: (props) => <h2 className="my-3 text-3xl font-bold" {...props} />,
  h3: (props) => <h3 className="text-2xl font-bold" {...props} />,
  h4: (props) => <h4 className="text-xl font-bold" {...props} />,
  h5: (props) => <h5 className="text-xl" {...props} />,
  h6: (props) => <h6 className="text-lg" {...props} />,
  p: (props) => <p className="" {...props} />,
  a: (props) => (
    <a className="text-blue-200 underline hover:text-blue-400" {...props} />
  ),
  ul: (props) => <ul className="" {...props} />,
  li: (props) => <li className="ml-[20px] list-circle" {...props} />,
  pre: (props) => <pre className="my-2 rounded-lg bg-black p-5" {...props} />,
  code: (props) => (
    <code
      className="rounded border-2 border-rose-500 bg-rose-500 bg-opacity-30 px-1"
      {...props}
    />
  ),
  hr: (props) => <hr className="" {...props} />,
};
