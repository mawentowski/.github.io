console.log('working');
const openApiSpec = fetch("./open-api-spec.json")
    .then((response) => response.json());
const docuGeneratorContentElement = globalThis.document.getElementById('docu-generator-template');
for (propertyName in openApiSpec.paths) {
    const div = new HTMLDivElement();
    div.innerText = propertyName;
    docuGeneratorContentElement.appendChild(div);
}
