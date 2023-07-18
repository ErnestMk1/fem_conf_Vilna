import Edward from "./imgs/Edward_new.png";
import Julia from "./imgs/Julia_new.png";
import Olena from "./imgs/Olena_new.png";

export interface SpeakersInformation {
  image: string | any;
  name: string;
  description: string;
  topicName: string;
  topic: string;
  instaLink: string;
};

export const speakersInfo: Array<SpeakersInformation> = [
  {
    image: Edward,
    name: "Едуард Мирмир",
    description: "Пастор церкви «Велика Переміна»",
    topicName: "Свобода. Про що ви думаєте, коли чуєте це слово?",
    topic: 'Кожен з нас прагне незалежності, але як зрозуміти, що я прагну Справжню свободу, а не - ЇЇ ілюзію. Коли перша людина обрала гріх, їй здалося, що вона стала незалежною від Бога, але насправді, “бонусом” до гріха йшла залежність від оточуючого світу.\n\nТак в чому ж свобода? Коли Христос прийшов на землю Він став прикладом Людини із внутрішньою Свободою. В Ньому симбіоз жертовної любові і чіткого розуміння, хто Він є і Хто є Його Батько. Обираючи хрест, Він обрав послухатись Батька і подарувати нам свободу.\n\nКоли ми визнаємо, що через гріхопадіння, наша душа стала абсолютно зіпсована гріхом і все твоє єство не здатне догодити Богу, ми перестаємо доводити щось Богу і оточуючим людям.\n\nМи видихаємо і більше не намагаємось бути тими, ким не є. Про справжню внутрішню свободу говорить Едуард Мирмир.',
    instaLink: "https://www.instagram.com/eduardmyrmyr/",
  },
  {
    image: Julia,
    name: "Юлія Шварц",
    description: "Психологиня, педагог, блогерка",
    topicName: "Вільна у збудуванні стосунків з близькими",
    topic: "Ви відчуваєте потребу врятувати весь світ. Ніби, якщо ви не допоможете, ваша дитина або чоловік не впораються. Вам здається, що в кожній проблемі винні ви. Ви відчуваєте сором, провину. Але не знаєте, як впоратись із болючим почуттям розчарування і тривожності. Ви маєте потребу всіх контролювати. Вказуєте на помилки, критикуєте і очікуєте, що вам будуть вдячні за вашу спостережливість.\n\n Але все це тільки руйнує ваші стосунки з близькими. І напевно ви дуже втомились від цього. Про агрессора, жертву і спасателя у стосунках та про те, як вийти з цього порочного круга говорить Юлія Шварц.",
    instaLink: "https://www.instagram.com/pro_grani",
  },
  {
    image: Olena,
    name: "Олена Дуб",
    description: "Керівниця програми «МЕСДЖ» в УБТС",
    topicName: "Вільна від внутрішніх стереотипів",
    topic: "Комплекси. Нам це слово точно знайоме. Хто вплинув на наше ставлення до себе? Щось тягнеться з нашого минулого, бо “всі травми з дитинства”, щось формує суспільство, щось ми очікуємо від себе самі, бо створили внутрішні ідеали. Комплекс провини, відмінниці, жертви.\n\n Зі своїми комплексами можна жити, але нічого сталого не буває. Ми або деградуємо, або позбавляємось їх і живемо вільно. Про свободу від комплексів і єдинний критерій, який має впливати на наше бачення себе говорить Олена Дуб.",
    instaLink: "https://www.instagram.com/_olena_dub_/",
  }
];
