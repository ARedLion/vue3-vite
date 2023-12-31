/// <reference types="vite/client.d.ts" />
interface ImportMetaEnv {
   readonly BASE_URL: string;
   readonly VITE_BASE_URL: string;
}

interface ImportMeta {
   readonly env: ImportMetaEnv;
}
