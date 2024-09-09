export function TabHelp({getComponent}) {
  const Markdown = getComponent("Markdown", true);

  const description = `

###### 🇮🇹 ITALIAN

Questa applicazione visualizza i tuoi schemi dati (modelli) in formato OpenAPI interrogando i dati presenti su https://schema.gov.it.

L'applicazione mostra:
- le informazioni sintattiche specificate
in formato [OpenAPI 3.0](https://spec.openapis.org/oas/v3.0.3.html) (JSON Schema draft 4)
quali il tipo sintattico (\`string\`, \`number\`, \`object\`, \`array\`, etc.) la lunghezza massima, minima, i valori o le espressioni regolari ammesse, etc;
- le informazioni semantiche in formato
[JSON-LD](https://spec.openapis.org/oas/v3.0.3.html)
come
la descrizione(\`rdfs:comment\`),
il titolo(\`rdfs:label\`),
i vincoli legati alle classi semantiche (\`rdf:type\`)
e al dominio applicativo (\`rdfs:domain\`, \`rdfs:range\`).

Incolla nell'editor i tuoi schemi o le tue specifiche OpenAPI,
oppure scaricali cliccando su "From URL" (TODO) e modificali direttamente.

Usa \`CTRL+Space\` per attivare il completamento automatico
delle parole chiave OpenAPI e degli URL delle classi semantiche principali.


###### 🇬🇧 ENGLISH

This application displays your data schemas (models) in OpenAPI format by querying the data on https://schema.gov.it.

The application shows:
- the syntactic information specified
in [OpenAPI 3.0](https://spec.openapis.org/oas/v3.0.3.html) format (JSON Schema draft 4)
such as the syntactic type (\`string\`, \`number\`, \`object\`, \`array\`, etc.), the maximum and minimum length, the allowed values or regular expressions, etc;
- the semantic information in JSON-LD format
like
the description(\`rdfs:comment\`),
the title(\`rdfs:label\`),
the constraints related to the semantic classes (\`rdf:type\`)
and to the application domain (\`rdfs:domain\`, \`rdfs:range\`).

Paste your schemas or your OpenAPI specifications into the editor,
or download them by clicking on "From URL" (TODO) and modify them directly.

Use \`CTRL+Space\` to activate the automatic completion
of OpenAPI keywords and the URLs of the main semantic classes.

 `;

  return (<div>
    <Markdown source={description}/>
    : description;
  </div>);
}
