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
