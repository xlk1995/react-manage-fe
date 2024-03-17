/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_UPLOAD_URL: string
  readonly VITE_MOCK: string
  readonly VITE_MOCK_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
