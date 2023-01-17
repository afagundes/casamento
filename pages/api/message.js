import prisma from "../../lib/prisma";

export default async function message(req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            await handleGetMessages(res);
            break;
        case 'POST':
            await handlePostMessage(req, res);
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}

// GET /api/message
async function handleGetMessages(res) {
    try {
        let messages = isDatabaseDisabled() ? savedMessages : await prisma.message.findMany();
        messages = shuffle(messages);

        res.status(200).json(messages);
    }
    catch (e) {
        console.error("Error fetching messages from database", e);
        res.status(500).json({ error: "Error fetching messages" });
    }
}

// POST /api/message
// Required fields in body: name, message
async function handlePostMessage(req, res) {
    const { name, message } = req.body;

    if (isDatabaseDisabled()) {
        res.status(201).json({
            name: name,
            content: message
        });

        return;
    }

    try {
        const result = await prisma.message.create({
            data: {
                name: name,
                content: message
            }
        });

        res.status(201).json(result);
    }
    catch (e) {
        console.error("Error creating new message", e);
        res.status(500).json({ error: "Error creating new message" });
    }
}

function isDatabaseDisabled() {
    return process.env.DISABLE_DB === "true";
}

// Fisher Yates shuffle
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let k = arr[i];
        arr[i] = arr[j];
        arr[j] = k;
    }

    return arr;
}

// Mensagens exportadas do banco de dados logo antes de desabilitar
const savedMessages = [
    {
       id: 14,
       createdAt: "2022-07-25T13:33:34.160Z",
       name: "João carlos colombo",
       content: "O tempo passou nosso bebe cresceu ,partiu para uma nova etapa de vida , um caminho de"
    },
    {
       id: 7,
       createdAt: "2022-06-09T15:53:50.410Z",
       name: "Ileia e Elzo",
       content: "Caros e Excelentíssimos  AriMari.\nÉ  com grande emoção e um pouco de relutância,  que confirmamos nossa presença no evento que acontecerá  em Julho kkkk somos clássicos...\nBom.....então,  estamos tão felizes,  tão felizes, que não vemos a hora de dar um abraço de Urso  em vocês. \nAriMari, amamos vocês,  que Deus os abençoe,  os guarde e que sejam imensamente felizes, que essa união  seja infinitivamente  cheia de alegrias, compromissos,  respeito, união e acima de tudo AMOR.\nOBRIGADO PELO CONVITE   PARA FAZERMOS PARTE DESSA UNIÃO. BJS.\nELZO E ILEIA."
    },
    {
       id: 3,
       createdAt: "2022-04-25T22:42:34.205Z",
       name: "Archimedes Fagundes",
       content: "Primeiro Deus colocou vocês no mesmo caminho e agora Ele está abençoando essa linda união.\nMuitas felicidades e parabéns pelo casamento, meu filho."
    },
    {
       id: 16,
       createdAt: "2022-07-25T14:20:08.979Z",
       name: "LILA",
       content: "Eu sou tão grata ao meu destino por ter colocado vocês,um do lado do outro.Eu vejo o quanto vocês são especias,e o amor que vocês tem um pelo outro,vocês merecem toda a felicidade do mundo.AMO VOCÊS."
    },
    {
       id: 2,
       createdAt: "2022-03-23T21:28:50.221Z",
       name: "GLAUCO A BARROSO",
       content: "Ari... fez que fez e entrou pra minha família! Cara, no começo eu realmente não queria isso, mas hoje... continuo não querendo hahahahahahah! Brincadeira man! Não poderia estar mais feliz de ver a pessoa que amo como filha se casando com um cara que posso verdadeiramente chamar de amigo! Vocês são um casal incrível e eu não poderia desejar alguém melhor pra se juntar a Mari. Dá pra sentir o amor entre vocês... esse amor que tenho certeza que vai crescer muito ainda! E Mari, filha de coração, amo tanto você que não me resposabilizo se eu tiver um treco no casório! Não venha me culpar depois falando que eu estraguei o rolê! Só desejo que vocês sejam muito felizes e não esqueçam da gente hahahaha! Amo muito vocês dois!"
    },
    {
       id: 15,
       createdAt: "2022-07-25T13:38:30.207Z",
       name: "João carlos colombo",
       content: "muito respeito carinho e dedicação mutua ,a felicidade se completara ,no hoje ,amanha com certeza !"
    },
    {
       id: 12,
       createdAt: "2022-07-08T22:16:29.666Z",
       name: "Victor Pereira",
       content: "Salve salve seus lindos!\nParabéns pela conquista de vocês! Espero que aproveitem demais essa nova fase que está por vir! E que de tudo certo na vida de vocês, desejos, sonhos e tudo mais! Desejo tudo do melhor pra vocês! E domingo tamo junto pra celebrar e encher o cu de cachaça! Meter o migué no trampo segunda feira kkkkkkkk\n\nTamo junto seus bonitos! \nUm beijo Mari e um abraço por trás, Ari! ❤️"
    },
    {
       id: 13,
       createdAt: "2022-07-09T20:40:42.225Z",
       name: "Igor Sumida",
       content: "Que momento meus amigos... Ari, você é uma das pessoas que me ajudaram a enxergar que era possível fazer amizades verdadeiras sendo eu mesmo, também em locais de trabalho. \n\nSó consigo lembrar de muitas histórias, risadas e alegrias... e algumas vezes inevitavelmente alguns prejuízos. Fora outras coisas que devem ter acontecido muito foda também, mas que por algum motivo eu não lembro kkkkkkkkk.\n\nEu sou um cara que curto energias né... E quando vejo você e a Mari é algo que parece que foi estabelecido já há muito tempo, tanto é, que por algum motivo as vezes que saí com vocês parecia que eu já conhecia vocês como casal há décadas ou seja, rolês de altas histórias e risadas.\n\nNão curto muito ficar escrevendo textinho (tenho muita preguiça) até porque tudo que escrevi aqui acredito que vocês sentem e já sabem, mas dessa vez, fiz um esforço pra deixar registrado minha admiração por vocês. Muitas Felicidades e bora comemorar! \n\nPS: O Glaucão autorizou folga segunda-feira... Sucesso!"
    },
    {
       id: 5,
       createdAt: "2022-04-25T22:56:07.913Z",
       name: "Alexandre Fagundes",
       content: "Meio complicado começar esse pequeno texto hehehe... a gente normalmente não tem aquela coisa meio \"normal\" de ficar nos grudes, falando toda hora da importância de um para o outro e etc... fomos criados dessa forma. Entretanto, independente desses clichês, a gente sabe muito bem expressar nossos sentimentos, valorizando a importância um do outro e o principal: a empatia! Isso significa que nos conectamos quanto às emoções que vivemos. Logo, posso afirmar que sua alegria é a minha alegria neste momento, Jú! Fui presenteado com uma cunhada incrível, ainda por cima!\nBaita passo... baita momento! Eu costumo dizer que a necessidade de querer tudo perfeito em uma circunstância como essa se dá pelo fato quase que óbvio de querermos casar apenas uma vez na vida. Por isso, é importante zelarmos para que este momento seja perfeito. E está sendo!\nDesejo as mais belas coisas da vida à vocês dois... que vivam momentos únicos e se somem diariamente uma à vida do outro! Vocês não se encontraram em algum momento da vida a toa. Agora está selada essa união e se completarão cada vez mais, como já mencionado.\nUm grande abraço à vocês!"
    },
    {
       id: 4,
       createdAt: "2022-04-25T22:46:09.538Z",
       name: "Elisabeth Cristina Fagundes",
       content: "Filho, não encontro palavras para expressar a minha alegria em ver você dando este passo tão importante e especial. Você está começando uma nova vida. Formar uma família é uma benção que devemos prezar e eu tenho a certeza de que você será um maravilhoso marido e pai.\nQue o caminho de vocês seja repleto de amor. Eu e o seu pai estamos muito felizes por ver o nosso filho casando e escolhendo para esposa uma pessoa tão fantástica. Eu não ganhei apenas uma nora, mas também uma filha e amiga querida.\nMuitas felicidades, meu filho e minha nora!"
    },
    {
       id: 11,
       createdAt: "2022-07-06T18:14:18.636Z",
       name: "Stephanie",
       content: "A felicidade consiste em partilhar as pequenas e as grandes coisas com as pessoas que amamos. Será uma honra fazer parte Deste dia de tão espacial, que será apenas o início de uma vida repleta de alegrias!\nAmamos muito vocês, desejamos toda felicidade deste mundo ❤️\nSte, Erick e Laurinha"
    },
    {
       id: 6,
       createdAt: "2022-05-27T00:31:22.080Z",
       name: "Margarete carrenho Lázaro",
       content: "Desejo aos noivos toda felicidade,com \nbastante  saúde é muita prosperidade, tenho certeza que serão muito felizes,parabéns que Deus abençoe vcs!!👏👏👏❤❤"
    },
    {
       id: 8,
       createdAt: "2022-07-01T16:28:15.574Z",
       name: "Vanessa (a prima preferida)",
       content: "Meu Deus, sempre imaginei esse momento pra vc Mari e chegou a hora, o dia, o momento do SIM. E acredito que vai ser um dia incrível, inesquecível e memorável....não pela festa ou evento, mas pela união de 2 almas maravilhosas e especiais como vcs são....nem tennho mais o que desejar de felicidades pra vcs, pq minha torcida é infinita de muito amor, respeito, paciência, curtição e momentos de alegria pra vcs.2....que merecem toda felicidade do mundo! Amo muito vcs...e bora comemorar..."
    },
    {
       id: 10,
       createdAt: "2022-07-05T00:38:16.501Z",
       name: "Eric e Heloisa",
       content: "Mariana e Ari \n   Um casamento feliz se constrói  com muito carinho, compreensão, respeito e paciência. \n   Que estes sentimentos  e virtudes estejam sempre presentes na vida de vocês!\n   Felicidades aos noivos!"
    },
    {
       id: 9,
       createdAt: "2022-07-01T16:43:23.771Z",
       name: "Lívia Carrenho Barroso",
       content: "oiii meu deus do céu vocês não sabem o QUANTO EU TO FELIZ POR VOCÊS!!🫀sério parabéns!!vocês são meu casal!!amo MUIIIIITO VOCÊS!!vocês são muito perfeitos juntos (aliás até os mbtis de vcs combinam senhorr!! enfjxinfp😉)lindos demais!!sério que vocês sejam muito felizes e muito ricos também !!desejo TUDDOO de bom pra vocês ,parabéns pelo casamento!bjuss<33"
    }
 ];