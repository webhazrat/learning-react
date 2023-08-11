// custom hook
export default function useAuth() {
  const auth = true;
  return auth;
}

export default function PrivateOutlet(){
    const auth = useAuth();
    return auth ? <Outlet /> : <Navigate to={'/login'} />;
}

<BrowserRouter>
  <Routes>
    {/* single route */}
    <Route path="/" element={<Home />} />
    {/* auth route and nested route */}
    <Route path="/*" element={<PrivateOutlet />}>
      <Route path="dashbord" element={<Dashboard />} />
    </Route>
  </Routes>
</BrowserRouter>;

// components
// Link - to path navigate with state
<Link to='/pathName' state={{something}} />

// hooks
// useParams - to access value from params
const { paramName } = useParams();

// useNavigate - to navigate/redirect to path with function
const navigate = useNavigate();
navigate('/pathName', {state: anything });

// useLocation - receive state from navigate state
const { state } = useLocation();
