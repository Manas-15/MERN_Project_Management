export const config = {
  schemaFile: 'http://localhost:8001/api/v1/docs/openapi.json',
  apiFile: '../store/base/assetBaseApi.ts',
  apiImport: 'assetBaseApi',
  outputFile: '../store/generatedServices/assetApi.ts',
  exportName: 'assetApi',
  hooks: true
};

export default config;
