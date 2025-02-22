export interface Config {
  sparqlUrl?: string;
  oasCheckerUrl?: string;
  schemaEditorUrl?: string;
}

export type IConfigurationContext = () => Config;
