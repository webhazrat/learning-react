// create a context
export const CustomContext = createContext({});

// create a custom context provider
export default function CustomContextProvider() {
  return (
    <CustomContext.Provider value={{ values }}>
      {Children}
    </CustomContext.Provider>
  );
}

// provider add
<CustomContextProvider>{children}</CustomContextProvider>;

// use and get values by using useContext
const { values } = useContext(CustomContext);
