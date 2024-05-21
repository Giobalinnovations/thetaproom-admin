import { MDXComponents } from 'mdx/types';
import Image from 'next/image';

export const components: MDXComponents = {
  h2: ({ children }) => (
    <h2
      className={`text-2xl
         text-primary font-semibold md:text-3xl`}
      style={{ margin: '2rem 0rem .5rem 0rem!important' }}
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      className="text-2xl font-semibold text-primary md:text-3xl"
      style={{ margin: '2rem 0rem 1rem 0rem!important' }}
    >
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4
      className="text-2xl font-semibold text-primary md:text-3xl"
      style={{ margin: '2rem 0rem 1rem 0rem!important' }}
    >
      {children}
    </h4>
  ),
  h5: ({ children }) => (
    <h5
      className="text-2xl font-semibold text-primary md:text-3xl"
      style={{ margin: '2rem 0rem 1rem 0rem!important' }}
    >
      {children}
    </h5>
  ),
  h6: ({ children }) => (
    <h6
      className="text-2xl font-semibold text-primary md:text-3xl"
      style={{ margin: '2rem 0rem 1rem 0rem!important' }}
    >
      {children}
    </h6>
  ),
  p: ({ children }) => (
    <p
      className="text-lg font-normal leading-loose"
      style={{
        margin: '0px 0px 0.8rem 0px!important',
        // fontSize: '1.10rem',
      }}
    >
      {children}
    </p>
  ),
  img: (props: any) => <Image {...props} />,
};
