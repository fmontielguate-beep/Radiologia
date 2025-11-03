import { Module } from '../types';

export const courseModules: Module[] = [
  {
    id: 1,
    title: "Módulo 1: Introducción y Principios Generales",
    summary: "Este módulo introduce los desafíos en la radiología pediátrica, los objetivos del curso y los principios fundamentales para la solicitud de estudios de imagen, incluyendo los Criterios de Adecuación del Colegio Americano de Radiología (ACR).",
    content: [
      "Los médicos pediatras a menudo carecen de un currículo estructurado en radiología, lo que los deja poco preparados para tomar decisiones informadas sobre las solicitudes de imágenes o su interpretación. Este desafío se ve agravado por las particularidades de la imagenología pediátrica, que incluyen variaciones anatómicas y del desarrollo, así como preocupaciones de seguridad relacionadas con la radiación y la sedación.",
      "Para abordar esta brecha, el Colegio Americano de Radiología (ACR) ha desarrollado guías basadas en evidencia conocidas como los Criterios de Adecuación (Appropriateness Criteria®). Estos criterios, organizados por escenario clínico, proporcionan información sobre la pertinencia de cada modalidad de imagen. Una comunicación clara y una historia clínica detallada son cruciales al solicitar un examen, ya que permiten a los radiólogos adaptar la interpretación y, en ocasiones, la adquisición de imágenes al contexto clínico específico del paciente.",
      "El proceso, desde que se solicita una imagen hasta que se emite el informe final, es complejo e involucra a tecnólogos, radiólogos, personal de programación y, a veces, especialistas en vida infantil (Child Life) para minimizar el estrés del paciente. El objetivo es obtener imágenes de alta calidad garantizando al mismo tiempo la seguridad del paciente."
    ],
    quiz: [
      { id: 1, text: "¿Cuál es el propósito principal de los Criterios de Adecuación del ACR?", options: ["Establecer los precios de los estudios de imagen", "Proporcionar guías basadas en evidencia sobre la modalidad de imagen más apropiada para un escenario clínico", "Reemplazar el juicio clínico del médico", "Entrenar a los pediatras para que interpreten las imágenes"], correctAnswer: "Proporcionar guías basadas en evidencia sobre la modalidad de imagen más apropiada para un escenario clínico" },
      { id: 2, text: "¿Por qué es crucial proporcionar una historia clínica detallada al solicitar un estudio de imagen?", options: ["Es un requisito que solo aplica para estudios con radiación", "Ayuda a que el estudio se realice más rápidamente", "Permite a los radiólogos adaptar el estudio y la interpretación al contexto clínico del paciente", "Solo es necesario para estudios complejos como la RM o TC"], correctAnswer: "Permite a los radiólogos adaptar el estudio y la interpretación al contexto clínico del paciente" },
      { id: 3, text: "Uno de los desafíos únicos de la imagenología pediátrica mencionado es:", options: ["El alto costo de los equipos", "La falta de radiólogos pediátricos", "Las variaciones anatómicas y del desarrollo en niños", "La simplicidad de las patologías pediátricas"], correctAnswer: "Las variaciones anatómicas y del desarrollo en niños" },
      { id: 4, text: "El especialista que ayuda a minimizar el estrés y la ansiedad del paciente durante un procedimiento es:", options: ["El radiólogo", "El personal de enfermería", "El especialista en vida infantil (Child Life)", "El personal administrativo"], correctAnswer: "El especialista en vida infantil (Child Life)" },
      { id: 5, text: "La comunicación de detalles clínicos claros ayuda a minimizar...", options: ["El tiempo de espera del paciente", "Aclaraciones innecesarias, seguimientos o imágenes adicionales", "La dosis de radiación", "El malestar del paciente"], correctAnswer: "Aclaraciones innecesarias, seguimientos o imágenes adicionales" }
    ]
  },
  {
    id: 2,
    title: "Módulo 2: Radiografía (Rayos X)",
    summary: "Exploración de la radiografía, una de las herramientas de diagnóstico más antiguas y utilizadas. Se detallan sus principios, preparación del paciente, ventajas, desventajas y aplicaciones comunes como la evaluación de fracturas y patologías pulmonares.",
    content: [
      "La radiografía, o imagen por rayos X, se basa en la absorción diferencial de los rayos X por los distintos tejidos del cuerpo para crear una imagen. Es frecuentemente utilizada como la primera línea de imagen en urgencias y para el seguimiento de pacientes hospitalizados. No requiere una preparación especial del paciente, aunque se recomienda retirar joyas y ropa que puedan causar artefactos.",
      "Durante la adquisición, se utiliza una breve exposición a la radiación electromagnética. Las estructuras densas como los huesos absorben más radiación (aparecen blancas), mientras que los tejidos menos densos como los músculos o los órganos internos absorben menos (aparecen en tonos de gris). Esto produce una imagen estática bidimensional, ideal para evaluar fracturas, pulmones y el patrón de gas intestinal.",
      "Entre sus ventajas se encuentran su accesibilidad, rapidez, bajo costo, excelente resolución espacial y que usualmente no requiere sedación. La principal desventaja es la exposición a la radiación ionizante y una resolución de contraste limitada en comparación con otras modalidades. Sus usos comunes incluyen la detección de fracturas, neumonía, obstrucción intestinal y escoliosis. Un uso menos común pero importante es en la evaluación de trauma no accidental."
    ],
    quiz: [
      { id: 1, text: "¿Cuál es la principal ventaja de la radiografía?", options: ["No utiliza radiación", "Excelente resolución de contraste de tejidos blandos", "Es accesible, rápida y de bajo costo", "Siempre requiere sedación"], correctAnswer: "Es accesible, rápida y de bajo costo" },
      { id: 2, text: "¿En qué se basa el principio de la radiografía?", options: ["En ondas de sonido", "En campos magnéticos", "En la absorción diferencial de rayos X por los tejidos", "En la emisión de positrones"], correctAnswer: "En la absorción diferencial de rayos X por los tejidos" },
      { id: 3, text: "Una aplicación común de la radiografía es la evaluación de:", options: ["Lesiones de ligamentos", "Función cerebral", "Fracturas y patología pulmonar", "Flujo sanguíneo"], correctAnswer: "Fracturas y patología pulmonar" },
      { id: 4, text: "¿Cuál es la principal desventaja de la radiografía?", options: ["El largo tiempo de adquisición", "El alto costo", "La exposición a radiación ionizante", "La necesidad de contraste intravenoso"], correctAnswer: "La exposición a radiación ionizante" },
      { id: 5, text: "La técnica radiográfica para medir la densidad mineral ósea se llama:", options: ["TC de alta resolución", "SPECT", "DEXA", "Fluoroscopia"], correctAnswer: "DEXA" }
    ]
  },
  {
    id: 3,
    title: "Módulo 3: Fluoroscopia",
    summary: "La fluoroscopia es un método de imagen en tiempo real que utiliza rayos X continuos de baja dosis. Este módulo describe su uso en procedimientos diagnósticos y terapéuticos, la preparación del paciente y las consideraciones de seguridad.",
    content: [
      "La fluoroscopia es una técnica de imagen en tiempo real que produce una imagen dinámica, similar a un video. Utiliza rayos X continuos de baja dosis. Es única porque las imágenes son adquiridas por un proveedor de radiología (radiólogo) en lugar de un tecnólogo, y se puede usar tanto para fines diagnósticos como terapéuticos. La preparación del paciente a menudo requiere ayuno para los estudios gastrointestinales, con el fin de promover la participación del paciente al beber el contraste.",
      "Durante el procedimiento, el paciente yace en una mesa mientras los rayos X pasan a través de él hacia un detector. La velocidad de fotogramas se puede ajustar según el examen. Se obtienen imágenes fijas y videoclips en varios momentos y posiciones. Es crucial la protección contra la radiación; todo el personal en la sala, excepto el paciente, debe usar delantales de plomo.",
      "Casi siempre se realiza con medios de contraste (bario o yodo) para visualizar el tracto gastrointestinal o urinario. El bario es común, pero se usa yodo si hay riesgo de perforación. Sus ventajas incluyen la imagen en tiempo real. Las desventajas son la exposición a la radiación, la dependencia del operador y la necesidad de cooperación del paciente. Se usa comúnmente para evaluar disfunción de la deglución, reflujo vesicoureteral y para la colocación de sondas."
    ],
    quiz: [
      { id: 1, text: "¿Qué característica principal distingue a la fluoroscopia de la radiografía estándar?", options: ["Usa un campo magnético más fuerte", "No utiliza radiación", "Proporciona imágenes dinámicas en tiempo real", "Es más económica"], correctAnswer: "Proporciona imágenes dinámicas en tiempo real" },
      { id: 2, text: "¿Qué profesional es fundamental en la adquisición de imágenes durante un estudio de fluoroscopia, a diferencia de una radiografía simple?", options: ["El pediatra tratante", "El personal de enfermería", "El radiólogo", "El especialista en vida infantil"], correctAnswer: "El radiólogo" },
      { id: 3, text: "En un estudio de fluoroscopia, ¿por qué el personal usa delantales de plomo?", options: ["Para mantener el calor", "Como parte del uniforme estándar", "Para protegerse de la exposición a la radiación", "Para evitar la contaminación"], correctAnswer: "Para protegerse de la exposición a la radiación" },
      { id: 4, text: "Un uso común de la fluoroscopia es evaluar:", options: ["Fracturas de cráneo", "Disfunción de la deglución y aspiración", "Tumores cerebrales", "La densidad ósea"], correctAnswer: "Disfunción de la deglución y aspiración" },
      { id: 5, text: "¿Qué tipo de medio de contraste se utiliza si hay preocupación por una perforación gastrointestinal?", options: ["Agentes a base de bario", "Aire", "Agentes a base de gadolinio", "Agentes a base de yodo"], correctAnswer: "Agentes a base de yodo" }
    ]
  },
   {
    id: 4,
    title: "Módulo 4: Ultrasonografía (Ecografía)",
    summary: "Este módulo cubre la ultrasonografía, una modalidad de imagen no invasiva y sin radiación, ampliamente utilizada en pediatría. Se discuten sus principios físicos, técnicas avanzadas como Doppler y elastografía, y el uso de agentes de contraste.",
    content: [
      "La ultrasonografía (US o ecografía) es una modalidad de imagen de primera línea para muchas emergencias pediátricas. Es portátil, rentable y no utiliza radiación ionizante. Su calidad de imagen depende en gran medida del operador y requiere la cooperación del paciente. La preparación puede incluir ayuno para optimizar la visualización de la vesícula biliar o tener la vejiga llena para los estudios pélvicos.",
      "Las imágenes se crean mediante la transmisión de ondas sonoras de alta frecuencia desde un transductor. Estas ondas viajan a través de los tejidos, se reflejan en las interfaces tisulares (ecos) y son recibidas de nuevo por el transductor. Estos ecos se convierten en una imagen en escala de grises. Es excelente para evaluar tejidos blandos y órganos no oscurecidos por gas o hueso.",
      "El Doppler US mide el desplazamiento de frecuencia de las ondas sonoras para detectar el movimiento, como el flujo sanguíneo. La elastografía es una técnica funcional que cuantifica la rigidez de los tejidos, útil para evaluar la fibrosis hepática. La ultrasonografía con contraste (CEUS) utiliza microburbujas de gas para mejorar la sensibilidad diagnóstica, pudiendo reemplazar a la TC o RM en algunos casos, como en la caracterización de lesiones hepáticas o la evaluación del reflujo vesicoureteral (ceVUS)."
    ],
    quiz: [
      { id: 1, text: "¿Cuál es una de las principales ventajas de la ultrasonografía en pediatría?", options: ["Utiliza una dosis baja de radiación", "No utiliza radiación ionizante", "Siempre proporciona imágenes de alta resolución", "No depende del operador"], correctAnswer: "No utiliza radiación ionizante" },
      { id: 2, text: "La calidad de la imagen en ultrasonografía es altamente dependiente de:", options: ["La edad del paciente", "La preparación intestinal", "La habilidad del operador", "La hora del día"], correctAnswer: "La habilidad del operador" },
      { id: 3, text: "¿Qué técnica de ultrasonido se utiliza para evaluar el flujo sanguíneo?", options: ["Elastografía", "CEUS", "Modo B", "Doppler US"], correctAnswer: "Doppler US" },
      { id: 4, text: "Un uso común de la ultrasonografía en emergencias pediátricas es la evaluación de:", options: ["Trauma craneoencefálico severo", "Apendicitis e invaginación intestinal", "Embolia pulmonar", "Cálculos renales en adolescentes"], correctAnswer: "Apendicitis e invaginación intestinal" },
      { id: 5, text: "La ultrasonografía con contraste (CEUS) utiliza como agente de contraste:", options: ["Compuestos yodados", "Gadolinio", "Microburbujas de gas encapsuladas en lípidos", "Bario"], correctAnswer: "Microburbujas de gas encapsuladas en lípidos" }
    ]
  },
  {
    id: 5,
    title: "Módulo 5: Tomografía Computarizada (TC)",
    summary: "La tomografía computarizada (TC) es una herramienta de imagen fundamental que proporciona imágenes transversales detalladas. Este módulo aborda sus ventajas, el principio ALARA para minimizar la radiación, el uso de contraste y las innovaciones tecnológicas.",
    content: [
      "La Tomografía Computarizada (TC) es una modalidad de imagen ampliamente disponible y rápida que ofrece una excelente resolución espacial. Generalmente no requiere sedación. Su principal desventaja es la exposición a la radiación ionizante. Se sigue el principio ALARA ('As Low As Reasonably Achievable') para usar la mínima dosis de radiación necesaria para responder a la pregunta clínica.",
      "La adquisición de imágenes implica un tubo de rayos X que rota alrededor del paciente, capturando múltiples proyecciones desde diferentes ángulos. Estos datos se procesan para generar imágenes transversales detalladas. La mayoría de los exámenes pediátricos se limitan a una sola adquisición para minimizar la radiación.",
      "Los agentes de contraste yodados, administrados por vía intravenosa (IV) y/o por vía oral (PO), se utilizan a menudo para mejorar la visibilidad de los vasos, órganos y tumores. El contraste IV puede ayudar a evaluar la vasculatura y la perfusión de órganos, mientras que el contraste PO puede ser útil para delinear las asas intestinales. Aunque raras, pueden ocurrir reacciones adversas al contraste IV. Las innovaciones como la TC de doble energía y la TC de recuento de fotones generan imágenes de mejor calidad con menor dosis de radiación y menor volumen de contraste."
    ],
    quiz: [
      { id: 1, text: "El principio ALARA en TC se refiere a:", options: ["Usar siempre la máxima dosis de radiación para obtener la mejor imagen", "Realizar el estudio lo más rápido posible", "Usar la mínima dosis de radiación razonablemente posible", "Evitar el uso de contraste"], correctAnswer: "Usar la mínima dosis de radiación razonablemente posible" },
      { id: 2, text: "¿Cuál es la principal desventaja de la Tomografía Computarizada?", options: ["Largo tiempo de escaneo", "Baja resolución espacial", "Exposición a radiación ionizante", "Alto costo y poca disponibilidad"], correctAnswer: "Exposición a radiación ionizante" },
      { id: 3, text: "¿Qué tipo de contraste se utiliza más comúnmente en la TC?", options: ["Agentes a base de gadolinio", "Microburbujas de gas", "Agentes de contraste yodados", "Sulfato de bario IV"], correctAnswer: "Agentes de contraste yodados" },
      { id: 4, text: "Una indicación común para una TC con contraste en pediatría es:", options: ["Cefalea crónica", "Evaluación de dolor abdominal agudo o trauma", "Detección de escoliosis", "Seguimiento de fracturas"], correctAnswer: "Evaluación de dolor abdominal agudo o trauma" },
      { id: 5, text: "Las innovaciones recientes en TC, como la TC de recuento de fotones, tienen como objetivo:", options: ["Aumentar la velocidad del escáner", "Reducir la dosis de radiación y mejorar la calidad de la imagen", "Reemplazar el uso de contraste por completo", "Hacer los escáneres más pequeños"], correctAnswer: "Reducir la dosis de radiación y mejorar la calidad de la imagen" }
    ]
  },
  {
    id: 6,
    title: "Módulo 6: Resonancia Magnética (RM)",
    summary: "La Resonancia Magnética (RM) ofrece un excelente contraste de tejidos blandos sin usar radiación ionizante. Este módulo detalla sus principios, la necesidad de sedación en algunos pacientes, la seguridad, el uso de agentes de contraste a base de gadolinio y las últimas innovaciones.",
    content: [
      "La Resonancia Magnética (RM) es particularmente valiosa en niños porque no utiliza radiación ionizante, lo que la convierte en una modalidad preferida en muchas condiciones pediátricas. Sin embargo, sus desventajas incluyen tiempos de escaneo más largos, sensibilidad al movimiento del paciente y un costo más elevado. Los niños pequeños o aquellos con dificultades para permanecer quietos a menudo requieren sedación.",
      "Los escáneres de RM generan un potente campo magnético. Las ondas de radiofrecuencia se dirigen al paciente, lo que perturba la alineación atómica. A medida que los átomos vuelven a su orientación original, generan una señal que se convierte en imágenes detalladas. Esto hace que la RM sea excelente para visualizar tejidos blandos como el cerebro, la médula espinal, las articulaciones y los órganos abdominales.",
      "Los agentes de contraste a base de gadolinio (GBCAs) se utilizan para mejorar la visualización de infecciones, inflamación, tumores o estructuras vasculares. La seguridad en la RM es primordial; los pacientes y el personal deben ser examinados para detectar implantes metálicos incompatibles. Las innovaciones, como la 'RM rápida', han reducido los tiempos de escaneo, disminuyendo en algunos casos la necesidad de sedación."
    ],
    quiz: [
      { id: 1, text: "La principal ventaja de la RM en la población pediátrica es:", options: ["Su bajo costo", "La rapidez del estudio", "La ausencia de radiación ionizante", "No requiere contraste"], correctAnswer: "La ausencia de radiación ionizante" },
      { id: 2, text: "¿Por qué algunos niños pueden necesitar sedación para una RM?", options: ["Para reducir la dosis de radiación", "Porque el escáner es muy ruidoso", "Debido a los largos tiempos de escaneo y la necesidad de permanecer inmóvil", "Para mejorar la absorción del contraste"], correctAnswer: "Debido a los largos tiempos de escaneo y la necesidad de permanecer inmóvil" },
      { id: 3, text: "¿Qué tipo de agente de contraste se utiliza en la RM?", options: ["Contraste yodado", "Bario", "Agentes a base de gadolinio (GBCAs)", "Microburbujas"], correctAnswer: "Agentes a base de gadolinio (GBCAs)" },
      { id: 4, text: "La RM es particularmente excelente para obtener imágenes de:", options: ["Fracturas óseas finas", "Pulmones y gas intestinal", "Tejidos blandos como el cerebro y la médula espinal", "Cálculos renales"], correctAnswer: "Tejidos blandos como el cerebro y la médula espinal" },
      { id: 5, text: "Una consideración de seguridad crítica antes de entrar a la sala de RM es:", options: ["Tomar un antihistamínico", "El ayuno durante 12 horas", "La detección de implantes metálicos o dispositivos incompatibles", "Tener la vejiga llena"], correctAnswer: "La detección de implantes metálicos o dispositivos incompatibles" }
    ]
  },
  {
    id: 7,
    title: "Módulo 7: Medicina Nuclear",
    summary: "La medicina nuclear proporciona información única sobre procesos funcionales y fisiológicos. Este módulo explora diferentes técnicas como PET/CT y SPECT, el uso de radiofármacos y sus aplicaciones en oncología, infecciones y evaluación de la función de órganos.",
    content: [
      "La Medicina Nuclear (MN) es una herramienta diagnóstica y terapéutica que ofrece una visión única de los procesos funcionales y fisiológicos del cuerpo, a menudo detectando actividad anormal antes de que los cambios estructurales sean visibles. Sus desventajas incluyen una menor resolución espacial, tiempos de escaneo prolongados y exposición a la radiación.",
      "Los exámenes de MN implican la administración de una pequeña cantidad de material radiactivo, llamado radiofármaco. Estos radiofármacos se dirigen a procesos biológicos específicos. La radiación emitida por el paciente es capturada por una gammacámara para crear imágenes. Técnicas como SPECT/CT y PET/CT combinan la imagen funcional de MN con la imagen anatómica de la TC para una localización precisa de la captación del radiofármaco.",
      "La preparación del paciente varía; por ejemplo, los estudios PET requieren ayuno. Los radiofármacos se utilizan para evaluar una amplia gama de condiciones. La PET con FDG es común para la estadificación de tumores, mientras que la gammagrafía con MIBG es específica para tumores como el neuroblastoma. La MN también juega un papel en la evaluación de la función renal, la infección/inflamación y el sangrado gastrointestinal."
    ],
    quiz: [
      { id: 1, text: "¿Qué tipo de información proporciona principalmente la Medicina Nuclear?", options: ["Anatómica detallada", "Funcional y fisiológica", "Estructural de alta resolución", "De densidad ósea"], correctAnswer: "Funcional y fisiológica" },
      { id: 2, text: "¿Qué se administra a un paciente antes de un estudio de Medicina Nuclear?", options: ["Un sedante potente", "Un agente de contraste yodado", "Un radiofármaco", "Un agente de contraste a base de gadolinio"], correctAnswer: "Un radiofármaco" },
      { id: 3, text: "La técnica PET/CT combina:", options: ["Imágenes de RM y ultrasonido", "Imágenes funcionales de PET e imágenes anatómicas de TC", "Imágenes de fluoroscopia y radiografía", "Imágenes de MN y RM"], correctAnswer: "Imágenes funcionales de PET e imágenes anatómicas de TC" },
      { id: 4, text: "Una aplicación oncológica común de la PET en pediatría es:", options: ["Detectar fracturas por estrés", "Evaluar la función cardíaca", "La estadificación de tumores metabólicamente activos como los linfomas", "Diagnosticar apendicitis"], correctAnswer: "La estadificación de tumores metabólicamente activos como los linfomas" },
      { id: 5, text: "¿Cuál es una de las desventajas de la Medicina Nuclear?", options: ["No puede detectar actividad metabólica", "Es muy rápida y económica", "Menor resolución espacial y exposición a la radiación", "No es útil para evaluar la función de órganos"], correctAnswer: "Menor resolución espacial y exposición a la radiación" }
    ]
  },
  {
    id: 8,
    title: "Módulo 8: Resumen y Comparación de Modalidades",
    summary: "Este módulo final resume y compara las diferentes modalidades de imagen discutidas en el curso. Se presenta una tabla comparativa que destaca la duración, el uso de contraste, la necesidad de sedación, la radiación y el costo, para ayudar en la toma de decisiones clínicas.",
    content: [
      "La elección de la modalidad de imagen correcta es fundamental para un diagnóstico preciso y un cuidado óptimo del paciente pediátrico. Cada modalidad tiene un perfil único de ventajas y desventajas que debe considerarse en el contexto clínico.",
      "La Radiografía (XR) es rápida y económica, ideal para huesos y pulmones, pero implica radiación. La Fluoroscopia (FL) ofrece imágenes en tiempo real para estudios dinámicos, también con radiación. La Ultrasonografía (US) es segura, portátil y sin radiación, excelente para tejidos blandos y abdomen, pero depende del operador.",
      "La Tomografía Computarizada (TC) es rápida y ofrece alta resolución espacial, crucial en trauma y dolor abdominal agudo, pero su principal inconveniente es la radiación. La Resonancia Magnética (RM) proporciona un contraste de tejidos blandos superior sin radiación, ideal para neurología y musculoesquelético, pero es lenta y costosa, y a menudo requiere sedación. La Medicina Nuclear (NM) evalúa la función sobre la anatomía, esencial en oncología y para evaluar la fisiología de los órganos.",
      "La colaboración con radiólogos pediátricos es vital para determinar el mejor estudio de imagen y para la interpretación de los resultados. Su experiencia ayuda a optimizar el enfoque diagnóstico, garantizando que se obtenga la información clínica necesaria mientras se minimizan los riesgos para el niño."
    ],
    quiz: [
      { id: 1, text: "¿Qué modalidad es la más rápida y a menudo la primera opción para una sospecha de fractura?", options: ["RM", "US", "TC", "Radiografía (XR)"], correctAnswer: "Radiografía (XR)" },
      { id: 2, text: "¿Qué modalidad de imagen NO utiliza radiación ionizante?", options: ["Radiografía y TC", "Fluoroscopia y Medicina Nuclear", "Ultrasonido y RM", "TC y Medicina Nuclear"], correctAnswer: "Ultrasonido y RM" },
      { id: 3, text: "¿Cuál de estas modalidades es más probable que requiera sedación en un niño pequeño?", options: ["Radiografía", "Ultrasonido", "Resonancia Magnética (RM)", "Fluoroscopia"], correctAnswer: "Resonancia Magnética (RM)" },
      { id: 4, text: "Para evaluar la función de un órgano en lugar de su estructura, ¿qué modalidad sería más apropiada?", options: ["TC", "RM", "Medicina Nuclear (NM)", "Ultrasonido"], correctAnswer: "Medicina Nuclear (NM)" },
      { id: 5, text: "La modalidad de imagen que es rápida y proporciona una excelente resolución espacial, siendo clave en la evaluación de trauma, es:", options: ["RM", "Tomografía Computarizada (TC)", "Ultrasonido", "Radiografía"], correctAnswer: "Tomografía Computarizada (TC)" }
    ]
  }
];