const db = require("../db/connection.js");
const Tool = require("../models/tool.js");

const insertData = async () => {
  // reset database
  await db.dropCollection('tools').catch(() => console.log('No collection to drop'));

  // tool data that we want inserted into database
  const tools = [
   {
      name: "5 senses grounding",
      description: "A mindful strategy that aims to ground you in the present moment by identifying 5 items you can see, 4 items you can touch, 3 items you can hear, 2 items you can smell, and 1 item you can taste.",
      link: "https://www.calm.com/blog/5-4-3-2-1-a-simple-exercise-to-calm-the-mind",
      emotions: [],
      reference: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6753170/"
   }, 
   {
      name: "ABCD strategy",
      description: "A cognitive strategy that aims to reality check and reframe unhelpful anger. First, identify the Activating event, then identify your Beliefs about the event, next identify the Consequences of your beliefs, and finally Dispute your unhelpful beliefs to create more helpful ones.",
      link: "https://www.tutorialspoint.com/anger_management/anger_management_the_abcd_model.htm",
      emotions: [],
      reference: "https://journals.sagepub.com/doi/10.2466/pr0.94.3.1009-1014?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub%20%200pubmed"
   }, 
   {
      name: "consequential thinking",
      description: "A cognitive strategy that aims to reduce impulsive behavior by thinking through the potential consequences of your actions before you act.",
      link: "https://alyceum.com.au/the-6-second-secret/",
      emotions: [],
      reference: "https://www.researchgate.net/publication/8136652_The_emergence_of_consequential_thought_Evidence_from_neuroscience"
   }, 
   {
      name: "decatastrophization",
      description: "A cognitive restructuring strategy that aims to reduce anxiety by challenging and reframing unhelpful, catastrophic thoughts. The strategy includes steps to identify the worst-case scenario, then the best-case scenario, and finally the most likely scenario.",
      link: "https://www.therapistaid.com/therapy-worksheet/decatastrophizing",
      emotions: [],
      reference: "https://onlinelibrary.wiley.com/doi/full/10.1002/9781118528563.wbcbt02"
   }, 
   {
      name: "deep breathing",
      description: "A mindful strategy that involves slowly breathing in through your nose and slowly exhaling through your mouth. There are many types of deep breathing, including box breathing, 4-7-8 breathing, belly breathing, etc...",
      link: "https://www.healthline.com/health/breathing-exercise#humming-bee-breath",
      emotions: [],
      reference: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9877284/"
   }, 
   {
      name: "opposite action",
      description: "A behavioral strategy that aims to guide one to doing the opposite of the emotion's associated behavioral urge, especially when the emotion may be exaggerated or does not fit the facts of the situation.",
      link: "https://dbt.tools/emotional_regulation/opposite-action.php",
      emotions: [],
      reference: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6467696/"
   }, 
   {
      name: "progressive muscle relaxation",
      description: "A mindful strategy (also known as body scan) that involves tensing and relaxing different muscle groups in the body to release physical tension.",
      link: "https://www.va.gov/WHOLEHEALTHLIBRARY/tools/progressive-muscle-relaxation.asp",
      emotions: [],
      reference: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8272667/"
   }, 
   {
      name: "RAIN strategy",
      description: "A mindful and DBT strategy that aims to reduce overwhelming feelings by Recognizing, Allowing, Investigating, and Nurturing the feeling.",
      link: "https://www.therapistaid.com/therapy-worksheet/rain-mindfulness-technique",
      emotions: [],
      reference: "https://journals.sagepub.com/doi/abs/10.1177/1049731513503047"
   }, 
   {
      name: "self-compassion",
      description: "A mindful and cognitive strategy that involves simply being nice to yourself and treating yourself with the same kindness, concern, and support you'd show to a good friend.",
      link: "https://www.verywellmind.com/how-to-develop-self-compassion-4158290",
      emotions: [],
      reference: "https://www.annualreviews.org/content/journals/10.1146/annurev-psych-032420-031047"
   }, 

   {
      name: "socratic questioning",
      description: "A cognitive strategy that aims to challenge and reframe unhelpful thoughts by asking a series of guided questions, such as 'what is the evidence for and against this thought?' and 'is this an original thought?'",
      link: "https://www.therapistaid.com/therapy-worksheet/socratic-questioning",
      emotions: [],
      reference: "https://www.sciencedirect.com/science/article/abs/pii/S0005796722000067"
   }, 
   {
      name: "urge surfing",
      description: "A visualization strategy that aims to recognize and accept the feelings of an urge and 'surf' the feeling until it passes.",
      link: "https://www.therapistaid.com/therapy-worksheet/urge-surfing-script",
      emotions: [],
      reference: "https://d1wqtxts1xzle7.cloudfront.net/34013534/COGNITIVE_BEHAVIOR_THERAPY__App_-_William_ODonohue__Jane_E._Fish-libre.pdf?1403491542=&response-content-disposition=inline%3B+filename%3DCOGNITIVE_BEHAVIOR_THERAPY_App_William_O.pdf&Expires=1757519892&Signature=FmWMwLbWWO-bduJSA309x-a7NwOMoUZseiWNddSakwyqpbL0QxMUxJByeyWGoDI53oKkd2O4MK9mDacOflWn1ZCGBvEUaR6rz~M-ZtWyPKCmbubPgYMDKctxt6j29df9svFMIfr1uE15H6dlV51Mi8TdXPPhZcs3rYkGwTJ28wAKUNcmvC66gSSyaUA0inJ1O6FqMtGVLYf6uqunfLDxzq1ds7MYcyTrXWpZAjeMWLtidkdDb5LHLyoFCmy58wHa75eCO4NPh-E7IfnxSnjp1LklFQ43SJn0IEu2UIBuUZTDhNBBLfcxX3i24rbxCbeB9XwsOaDaazOzMO9tHUeW9g__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA#page=471"
   }, 
   {
      name: "wise mind",
      description: "A cognitive strategy that involves bringing the emotional mind and logical mind together to create a more balanced way of thinking.",
      link: "https://www.therapistaid.com/therapy-worksheet/wise-mind",
      emotions: [],
      reference: "https://www.researchgate.net/publication/303330191_Human_Emotional_and_Rational_Mind_Analytical_Tool_for_Wise_Mind_Establishment_Process"
   }, 
  ];

  // insert tools into database
  await Tool.insertMany(tools);
  console.log("Created tools data!");

  // close database connection. done.
  db.close();
};

insertData();