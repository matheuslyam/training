## Cache

explicando que há alguns níveis diferentes de cache

https://excalidraw.com

independente de ser a L1 ou a L3, todas essas caches dentro do processador são muito rápidas

detalhe é que elas cabem relativamente pouca memória. algo como 1mb, 4mb, 10mb… porém, estrutura de dados muito enxutas, como é o caso de um array, não é impossível que consigamos armazenar um ou vários arrays em uma cache L1, L2 ou L3 do nosso processador

### Arrays

**arrays** são estruturas muito boas para serem cacheadas

e o que torna um **array** muito propício para utilizar cache; por que que esse layout de memória muito próximo uma das outras faz com que ele seja muito bom pra cache? (lembrando que idealmente um array está em uma sequência contígua na memória física, IDEALMENTE, nem sempre será assim)

pelo fator da **localidade espacial**

dados que estão muito próximos em um espaço físico tem uma probabilidade maior de serem acessados conjuntamente

programas que tem uma boa **localidade espacial** que agrupam os dados que provavelmente vão ser acessados juntos, costumam ter uma performance melhor em cache

 **localidade temporal**

quando dados são acessados repetidamente, num curto período de tempo, existe uma probabilidade alta desses mesmos dados serem acessados novamente no futuro.

esse tipo de comportamento de acesso favorece muito o cache

**um excelente exemplo pra isso é o ‘arr.sort()’** 

### No dia a dia

na realidade que essa diferença de performance não vai ser muito relevante, mas esse conhecimento sendo trazido pra mim é com finalidade de compreensão, de um entendimento melhor e mais aprofundado de como as coisas são e funcionam. fazer esse exercício de pensar sobre isso, em termos de performance, é extremamente benéfico no dia a dia EMBORA o uso em si disso não vá mudar quase nada. 

se tiver criando um redis, saber disso acaba sendo legal