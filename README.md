# a general background system

## 安装

```
pnpm add react-router-dom
```

## 使用

```
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/test' element={<Test />}></Route>
    </Routes>
  </BrowserRouter>s
```

### 路由跳转的几种方法

1. <NavLink to="/url"/>
2. <Link to= "/url"/>
3. <Navigate to="/url"/> 重定向
4. useNavigate() hooks跳转

### api方式创建路由

#### 使用useRoutes
