< Express />

* Express é um framework minimalista e flexivel para criar aplicativos web com Node.js. Ele oferece um conjunto robusto de funcionalidades tanto para aplicativos web quanto móveis.

* Com diversos métodos utilitários HTTP e middleware disponíveis, você pode criar uma API robusta de forma rápida e fácil.

Então dividimos o NODEJS em algumas etapas:

< Express Routes />

* Roteamento no express é a forma como um aplicativo responde a solicitações dos clientes para determinados endereços (URIs) usando métodos HTTP específicos (como GET, POST, etc).

* Cada rota no Express pode ter uma ou mais funções que são executadas quando essa rota é acessada.

< Estrutura básica de uma função de middleware />

* O método HTTP ao qual a função middleware é aplicada

* O Caminho (rota) ao qual função de middleware é aplicada.

* A função de middleware.

* Argumento de callback para a função de midleware, geralmente chamado de next.

* Argumento de resposta HTTP, chamado de res.

* Argumento de solicitação HTTP, chamado de req.

Fonte: DOC - EXPRESS