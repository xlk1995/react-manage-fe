## 项目目录结构

- api
- assets
- components
- layout
- hooks
- config
- views
- utils

## 新建项目路由

使用createHashRouter

## tsconfig配置src路径

```
"baseUrl": "./",
"paths": {
	"@/*": ["src/*"]
}
```

## 使用antd配置页面

```
pnpm add antd
```

## 封装axios

添加类型

## 编译时环境变量配置

.env.development
.env.stag
.env.production

通过修改package.json中执行命令，添加 `--mode` 来配置环境变量

在vite-env.d.ts配置ts提示

```
interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_UPLOAD_URL: string
  readonly VITE_MOCK: string
  readonly VITE_MOCK_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

缺点：要是我们想在开发环境调试生产环境的东西，需要改地址

## 运行时环境变量

```
 const env: ENV = document.documentElement.dataset.env as ENV
```

## 封装两个工具函数

钱，时间
