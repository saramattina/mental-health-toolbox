const db = require("../db/connection.js");
const Tool = require("../models/tool.js");

const insertData = async () => {
  // reset database
  await db.dropCollection('tools').catch(() => console.log('No collection to drop'));

  // emotions data that we want inserted into database
  const tools = [
   {
      name: "deep breathing",
      description: "A mindful strategy that involves slowly breathing in through your nose and slowly exhaling through your mouth.",
      link: "https://www.healthline.com/health/breathing-exercise#humming-bee-breath",
      emotions: [],
      reference: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9877284/"
   }, 
   {
      name: "decatastrophization",
      description: "A cognitive restructuring strategy that aims to reduce anxiety by challenging and reframing unhelpful, catastrophic thoughts.",
      link: "https://www.therapistaid.com/therapy-worksheet/decatastrophizing",
      emotions: [],
      reference: "https://onlinelibrary.wiley.com/doi/full/10.1002/9781118528563.wbcbt02"
   }, 
   {
      name: "progressive muscle relaxation",
      description: "A mindful strategy (also known as body scan) that involves tensing and relaxing different muscle groups in the body to release physical tension.",
      link: "https://www.va.gov/WHOLEHEALTHLIBRARY/tools/progressive-muscle-relaxation.asp",
      emotions: [],
      reference: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8272667/"
   }, 
   {
      name: "wise mind",
      description: "A cognitive strategy that involves bringing the emotional mind and logical mind together to create a more balanced way of thinking.",
      link: "https://www.therapistaid.com/therapy-worksheet/wise-mind",
      emotions: [],
      reference: "https://www.researchgate.net/publication/303330191_Human_Emotional_and_Rational_Mind_Analytical_Tool_for_Wise_Mind_Establishment_Process"
   }, 
   {
      name: "ABCD strategy",
      description: "A cognitive strategy that aims to reality check and reframe unhelpful anger.",
      link: "https://www.tutorialspoint.com/anger_management/anger_management_the_abcd_model.htm",
      emotions: [],
      reference: "https://journals.sagepub.com/doi/10.2466/pr0.94.3.1009-1014?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub%20%200pubmed"
   }, 
   {
      name: "RAIN strategy",
      description: "A mindful and DBT strategy that aims to reduce overwhelming feelings by recognizing, allowing, investigating, and nurturing the feeling.",
      link: "https://www.therapistaid.com/therapy-worksheet/rain-mindfulness-technique",
      emotions: [],
      reference: "https://journals.sagepub.com/doi/abs/10.1177/1049731513503047"
   }, 
   {
      name: "urge surfing",
      description: "A visualization strategy that aims to recognize and accept the feelings of an urge and 'surf' the feeling until it passes.",
      link: "https://www.therapistaid.com/therapy-worksheet/urge-surfing-script",
      emotions: [],
      reference: "https://d1wqtxts1xzle7.cloudfront.net/34013534/COGNITIVE_BEHAVIOR_THERAPY__App_-_William_ODonohue__Jane_E._Fish-libre.pdf?1403491542=&response-content-disposition=inline%3B+filename%3DCOGNITIVE_BEHAVIOR_THERAPY_App_William_O.pdf&Expires=1757519892&Signature=FmWMwLbWWO-bduJSA309x-a7NwOMoUZseiWNddSakwyqpbL0QxMUxJByeyWGoDI53oKkd2O4MK9mDacOflWn1ZCGBvEUaR6rz~M-ZtWyPKCmbubPgYMDKctxt6j29df9svFMIfr1uE15H6dlV51Mi8TdXPPhZcs3rYkGwTJ28wAKUNcmvC66gSSyaUA0inJ1O6FqMtGVLYf6uqunfLDxzq1ds7MYcyTrXWpZAjeMWLtidkdDb5LHLyoFCmy58wHa75eCO4NPh-E7IfnxSnjp1LklFQ43SJn0IEu2UIBuUZTDhNBBLfcxX3i24rbxCbeB9XwsOaDaazOzMO9tHUeW9g__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA#page=471"
   }, 
  ];

  // insert products into database
  await Tool.insertMany(tools);
  console.log("Created tools data!");

  // close database connection. done.
  db.close();
};

insertData();