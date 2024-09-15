import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  // umd,
  infosys,
  webware,
  tcs,
  webm,
  reactnative,
  sql,
  testimonial_1,
  testimonial_2,
  testimonial_3,
  testimonial_4,
  testimonial_5,
  //Projects
  project_1,
  project_2,
  project_3,
  project_4,
  project_5,
  project_6,
} from "../assets";
import {
  Experience,
  Project,
  Service,
  Technology,
  Testimony,
  User,
} from "../configs/types";

interface NavLink {
  id: string;
  title: string;
}

export const navLinks: NavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const user: User = {
  first_name: "Vinay",
  last_name: "Shetye",
  portfolio_primary_title: "Vinay",
  portfolio_secondary_title: "Shetye",
  about_me_slogan:
    "I develop highly responsive full-stack web and mobile aplications",
  about_me_description:
    "I'm a software engineer with over three years of experience developing software products. I have proficiency in building full-stack web and mobile applications with expertise in UI/UX, database, and system designs. My expertise includes technologies like Java, JavaScript, TypeScript, and SQL, and frameworks like React, Node.js, Postgres, and MongoDB. I value Agile practices and I'm committed to team collaboration while ensuring results that are bug-free. Currently, I'm pursuing a 🎓 master's degree in 💻 Computer Science @University Of Massachusetts, to further develop my skills and to stay updated with the latest software development practices. ✌️ Cheers!",
  // "𝙸'𝚖 𝚊 𝚜𝚘𝚏𝚝𝚠𝚊𝚛𝚎 𝚎𝚗𝚐𝚒𝚗𝚎𝚎𝚛 𝚠𝚒𝚝𝚑 𝚘𝚟𝚎𝚛 𝚝𝚑𝚛𝚎𝚎 𝚢𝚎𝚊𝚛𝚜 𝚘𝚏 𝚎𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚎 𝚍𝚎𝚟𝚎𝚕𝚘𝚙𝚒𝚗𝚐 𝚜𝚘𝚏𝚝𝚠𝚊𝚛𝚎 𝚙𝚛𝚘𝚍𝚞𝚌𝚝𝚜. 𝙸 𝚑𝚊𝚟𝚎 𝚙𝚛𝚘𝚏𝚒𝚌𝚒𝚎𝚗𝚌𝚢 𝚒𝚗 𝚋𝚞𝚒𝚕𝚍𝚒𝚗𝚐 𝚏𝚞𝚕𝚕-𝚜𝚝𝚊𝚌𝚔 𝚠𝚎𝚋 𝚊𝚗𝚍 𝚖𝚘𝚋𝚒𝚕𝚎 𝚊𝚙𝚙𝚕𝚒𝚌𝚊𝚝𝚒𝚘𝚗𝚜 𝚠𝚒𝚝𝚑 𝚎𝚡𝚙𝚎𝚛𝚝𝚒𝚜𝚎 𝚒𝚗 𝚄𝙸/𝚄𝚇, 𝚍𝚊𝚝𝚊𝚋𝚊𝚜𝚎, 𝚊𝚗𝚍 𝚜𝚢𝚜𝚝𝚎𝚖 𝚍𝚎𝚜𝚒𝚐𝚗𝚜. 𝙼𝚢 𝚎𝚡𝚙𝚎𝚛𝚝𝚒𝚜𝚎 𝚒𝚗𝚌𝚕𝚞𝚍𝚎𝚜 𝚝𝚎𝚌𝚑𝚗𝚘𝚕𝚘𝚐𝚒𝚎𝚜 𝚕𝚒𝚔𝚎 𝙹𝚊𝚟𝚊, 𝙹𝚊𝚟𝚊𝚂𝚌𝚛𝚒𝚙𝚝, 𝚃𝚢𝚙𝚎𝚂𝚌𝚛𝚒𝚙𝚝, 𝚊𝚗𝚍 𝚂𝚀𝙻, 𝚊𝚗𝚍 𝚏𝚛𝚊𝚖𝚎𝚠𝚘𝚛𝚔𝚜 𝚕𝚒𝚔𝚎 𝚁𝚎𝚊𝚌𝚝, 𝙽𝚘𝚍𝚎.𝚓𝚜, 𝙿𝚘𝚜𝚝𝚐𝚛𝚎𝚜, 𝚊𝚗𝚍 𝙼𝚘𝚗𝚐𝚘𝙳𝙱. 𝙸 𝚟𝚊𝚕𝚞𝚎 𝙰𝚐𝚒𝚕𝚎 𝚙𝚛𝚊𝚌𝚝𝚒𝚌𝚎𝚜 𝚊𝚗𝚍 𝙸'𝚖 𝚌𝚘𝚖𝚖𝚒𝚝𝚝𝚎𝚍 𝚝𝚘 𝚝𝚎𝚊𝚖 𝚌𝚘𝚕𝚕𝚊𝚋𝚘𝚛𝚊𝚝𝚒𝚘𝚗 𝚠𝚑𝚒𝚕𝚎 𝚎𝚗𝚜𝚞𝚛𝚒𝚗𝚐 𝚛𝚎𝚜𝚞𝚕𝚝𝚜 𝚝𝚑𝚊𝚝 𝚊𝚛𝚎 𝚋𝚞𝚐-𝚏𝚛𝚎𝚎. 𝙲𝚞𝚛𝚛𝚎𝚗𝚝𝚕𝚢, 𝙸'𝚖 𝚙𝚞𝚛𝚜𝚞𝚒𝚗𝚐 𝚊 𝚖𝚊𝚜𝚝𝚎𝚛'𝚜 𝚍𝚎𝚐𝚛𝚎𝚎 𝚒𝚗 𝙲𝚘𝚖𝚙𝚞𝚝𝚎𝚛 𝚂𝚌𝚒𝚎𝚗𝚌𝚎 @𝚄𝚗𝚒𝚟𝚎𝚛𝚜𝚒𝚝𝚢 𝙾𝚏 𝙼𝚊𝚜𝚜𝚊𝚌𝚑𝚞𝚜𝚎𝚝𝚝𝚜, 𝚝𝚘 𝚏𝚞𝚛𝚝𝚑𝚎𝚛 𝚍𝚎𝚟𝚎𝚕𝚘𝚙 𝚖𝚢 𝚜𝚔𝚒𝚕𝚕𝚜 𝚊𝚗𝚍 𝚝𝚘 𝚜𝚝𝚊𝚢 𝚞𝚙𝚍𝚊𝚝𝚎𝚍 𝚠𝚒𝚝𝚑 𝚝𝚑𝚎 𝚕𝚊𝚝𝚎𝚜𝚝 𝚜𝚘𝚏𝚝𝚠𝚊𝚛𝚎 𝚍𝚎𝚟𝚎𝚕𝚘𝚙𝚖𝚎𝚗𝚝 𝚙𝚛𝚊𝚌𝚝𝚒𝚌𝚎𝚜. 𝙲𝚑𝚎𝚎𝚛𝚜!"
  // "𝐈'𝐦 𝐚 𝐬𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐞𝐧𝐠𝐢𝐧𝐞𝐞𝐫 𝐰𝐢𝐭𝐡 𝐨𝐯𝐞𝐫 𝐭𝐡𝐫𝐞𝐞 𝐲𝐞𝐚𝐫𝐬 𝐨𝐟 𝐞𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐢𝐧𝐠 𝐬𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐩𝐫𝐨𝐝𝐮𝐜𝐭𝐬. 𝐈 𝐡𝐚𝐯𝐞 𝐩𝐫𝐨𝐟𝐢𝐜𝐢𝐞𝐧𝐜𝐲 𝐢𝐧 𝐛𝐮𝐢𝐥𝐝𝐢𝐧𝐠 𝐟𝐮𝐥𝐥-𝐬𝐭𝐚𝐜𝐤 𝐰𝐞𝐛 𝐚𝐧𝐝 𝐦𝐨𝐛𝐢𝐥𝐞 𝐚𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬 𝐰𝐢𝐭𝐡 𝐞𝐱𝐩𝐞𝐫𝐭𝐢𝐬𝐞 𝐢𝐧 𝐔𝐈/𝐔𝐗, 𝐝𝐚𝐭𝐚𝐛𝐚𝐬𝐞, 𝐚𝐧𝐝 𝐬𝐲𝐬𝐭𝐞𝐦 𝐝𝐞𝐬𝐢𝐠𝐧𝐬. 𝐌𝐲 𝐞𝐱𝐩𝐞𝐫𝐭𝐢𝐬𝐞 𝐢𝐧𝐜𝐥𝐮𝐝𝐞𝐬 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐞𝐬 𝐥𝐢𝐤𝐞 𝐉𝐚𝐯𝐚, 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭, 𝐓𝐲𝐩𝐞𝐒𝐜𝐫𝐢𝐩𝐭, 𝐚𝐧𝐝 𝐒𝐐𝐋, 𝐚𝐧𝐝 𝐟𝐫𝐚𝐦𝐞𝐰𝐨𝐫𝐤𝐬 𝐥𝐢𝐤𝐞 𝐑𝐞𝐚𝐜𝐭, 𝐍𝐨𝐝𝐞.𝐣𝐬, 𝐏𝐨𝐬𝐭𝐠𝐫𝐞𝐬, 𝐚𝐧𝐝 𝐌𝐨𝐧𝐠𝐨𝐃𝐁. 𝐈 𝐯𝐚𝐥𝐮𝐞 𝐀𝐠𝐢𝐥𝐞 𝐩𝐫𝐚𝐜𝐭𝐢𝐜𝐞𝐬 𝐚𝐧𝐝 𝐈'𝐦 𝐜𝐨𝐦𝐦𝐢𝐭𝐭𝐞𝐝 𝐭𝐨 𝐭𝐞𝐚𝐦 𝐜𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐢𝐨𝐧 𝐰𝐡𝐢𝐥𝐞 𝐞𝐧𝐬𝐮𝐫𝐢𝐧𝐠 𝐫𝐞𝐬𝐮𝐥𝐭𝐬 𝐭𝐡𝐚𝐭 𝐚𝐫𝐞 𝐛𝐮𝐠-𝐟𝐫𝐞𝐞. 𝐂𝐮𝐫𝐫𝐞𝐧𝐭𝐥𝐲, 𝐈'𝐦 𝐩𝐮𝐫𝐬𝐮𝐢𝐧𝐠 𝐚 𝐦𝐚𝐬𝐭𝐞𝐫'𝐬 𝐝𝐞𝐠𝐫𝐞𝐞 𝐢𝐧 𝐂𝐨𝐦𝐩𝐮𝐭𝐞𝐫 𝐒𝐜𝐢𝐞𝐧𝐜𝐞 @𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲 𝐎𝐟 𝐌𝐚𝐬𝐬𝐚𝐜𝐡𝐮𝐬𝐞𝐭𝐭𝐬, 𝐭𝐨 𝐟𝐮𝐫𝐭𝐡𝐞𝐫 𝐝𝐞𝐯𝐞𝐥𝐨𝐩 𝐦𝐲 𝐬𝐤𝐢𝐥𝐥𝐬 𝐚𝐧𝐝 𝐭𝐨 𝐬𝐭𝐚𝐲 𝐮𝐩𝐝𝐚𝐭𝐞𝐝 𝐰𝐢𝐭𝐡 𝐭𝐡𝐞 𝐥𝐚𝐭𝐞𝐬𝐭 𝐬𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭 𝐩𝐫𝐚𝐜𝐭𝐢𝐜𝐞𝐬. 𝐂𝐡𝐞𝐞𝐫𝐬!"
  // "𝗜'𝗺 𝗮 𝘀𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗲𝗻𝗴𝗶𝗻𝗲𝗲𝗿 𝘄𝗶𝘁𝗵 𝗼𝘃𝗲𝗿 𝘁𝗵𝗿𝗲𝗲 𝘆𝗲𝗮𝗿𝘀 𝗼𝗳 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗲 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗶𝗻𝗴 𝘀𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗽𝗿𝗼𝗱𝘂𝗰𝘁𝘀. 𝗜 𝗵𝗮𝘃𝗲 𝗽𝗿𝗼𝗳𝗶𝗰𝗶𝗲𝗻𝗰𝘆 𝗶𝗻 𝗯𝘂𝗶𝗹𝗱𝗶𝗻𝗴 𝗳𝘂𝗹𝗹-𝘀𝘁𝗮𝗰𝗸 𝘄𝗲𝗯 𝗮𝗻𝗱 𝗺𝗼𝗯𝗶𝗹𝗲 𝗮𝗽𝗽𝗹𝗶𝗰𝗮𝘁𝗶𝗼𝗻𝘀 𝘄𝗶𝘁𝗵 𝗲𝘅𝗽𝗲𝗿𝘁𝗶𝘀𝗲 𝗶𝗻 𝗨𝗜/𝗨𝗫, 𝗱𝗮𝘁𝗮𝗯𝗮𝘀𝗲, 𝗮𝗻𝗱 𝘀𝘆𝘀𝘁𝗲𝗺 𝗱𝗲𝘀𝗶𝗴𝗻𝘀. 𝗠𝘆 𝗲𝘅𝗽𝗲𝗿𝘁𝗶𝘀𝗲 𝗶𝗻𝗰𝗹𝘂𝗱𝗲𝘀 𝘁𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝗶𝗲𝘀 𝗹𝗶𝗸𝗲 𝗝𝗮𝘃𝗮, 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁, 𝗧𝘆𝗽𝗲𝗦𝗰𝗿𝗶𝗽𝘁, 𝗮𝗻𝗱 𝗦𝗤𝗟, 𝗮𝗻𝗱 𝗳𝗿𝗮𝗺𝗲𝘄𝗼𝗿𝗸𝘀 𝗹𝗶𝗸𝗲 𝗥𝗲𝗮𝗰𝘁, 𝗡𝗼𝗱𝗲.𝗷𝘀, 𝗣𝗼𝘀𝘁𝗴𝗿𝗲𝘀, 𝗮𝗻𝗱 𝗠𝗼𝗻𝗴𝗼𝗗𝗕. 𝗜 𝘃𝗮𝗹𝘂𝗲 𝗔𝗴𝗶𝗹𝗲 𝗽𝗿𝗮𝗰𝘁𝗶𝗰𝗲𝘀 𝗮𝗻𝗱 𝗜'𝗺 𝗰𝗼𝗺𝗺𝗶𝘁𝘁𝗲𝗱 𝘁𝗼 𝘁𝗲𝗮𝗺 𝗰𝗼𝗹𝗹𝗮𝗯𝗼𝗿𝗮𝘁𝗶𝗼𝗻 𝘄𝗵𝗶𝗹𝗲 𝗲𝗻𝘀𝘂𝗿𝗶𝗻𝗴 𝗿𝗲𝘀𝘂𝗹𝘁𝘀 𝘁𝗵𝗮𝘁 𝗮𝗿𝗲 𝗯𝘂𝗴-𝗳𝗿𝗲𝗲. 𝗖𝘂𝗿𝗿𝗲𝗻𝘁𝗹𝘆, 𝗜'𝗺 𝗽𝘂𝗿𝘀𝘂𝗶𝗻𝗴 𝗮 𝗺𝗮𝘀𝘁𝗲𝗿'𝘀 𝗱𝗲𝗴𝗿𝗲𝗲 𝗶𝗻 𝗖𝗼𝗺𝗽𝘂𝘁𝗲𝗿 𝗦𝗰𝗶𝗲𝗻𝗰𝗲 @𝗨𝗻𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆 𝗢𝗳 𝗠𝗮𝘀𝘀𝗮𝗰𝗵𝘂𝘀𝗲𝘁𝘁𝘀, 𝘁𝗼 𝗳𝘂𝗿𝘁𝗵𝗲𝗿 𝗱𝗲𝘃𝗲𝗹𝗼𝗽 𝗺𝘆 𝘀𝗸𝗶𝗹𝗹𝘀 𝗮𝗻𝗱 𝘁𝗼 𝘀𝘁𝗮𝘆 𝘂𝗽𝗱𝗮𝘁𝗲𝗱 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗹𝗮𝘁𝗲𝘀𝘁 𝘀𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 𝗽𝗿𝗮𝗰𝘁𝗶𝗰𝗲𝘀. 𝗖𝗵𝗲𝗲𝗿𝘀!"
  // "𝐈'𝐦 𝐚 𝐬𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐞𝐧𝐠𝐢𝐧𝐞𝐞𝐫 𝐰𝐢𝐭𝐡 𝐨𝐯𝐞𝐫 𝐭𝐡𝐫𝐞𝐞 𝐲𝐞𝐚𝐫𝐬 𝐨𝐟 𝐞𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐢𝐧𝐠 𝐬𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐩𝐫𝐨𝐝𝐮𝐜𝐭𝐬. 𝐈 𝐡𝐚𝐯𝐞 𝐩𝐫𝐨𝐟𝐢𝐜𝐢𝐞𝐧𝐜𝐲 𝐢𝐧 𝐛𝐮𝐢𝐥𝐝𝐢𝐧𝐠 𝐟𝐮𝐥𝐥-𝐬𝐭𝐚𝐜𝐤 𝐰𝐞𝐛 𝐚𝐧𝐝 𝐦𝐨𝐛𝐢𝐥𝐞 𝐚𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬 𝐰𝐢𝐭𝐡 𝐞𝐱𝐩𝐞𝐫𝐭𝐢𝐬𝐞 𝐢𝐧 𝐔𝐈/𝐔𝐗, 𝐝𝐚𝐭𝐚𝐛𝐚𝐬𝐞, 𝐚𝐧𝐝 𝐬𝐲𝐬𝐭𝐞𝐦 𝐝𝐞𝐬𝐢𝐠𝐧𝐬. 𝐌𝐲 𝐞𝐱𝐩𝐞𝐫𝐭𝐢𝐬𝐞 𝐢𝐧𝐜𝐥𝐮𝐝𝐞𝐬 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐞𝐬 𝐥𝐢𝐤𝐞 𝐉𝐚𝐯𝐚, 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭, 𝐓𝐲𝐩𝐞𝐒𝐜𝐫𝐢𝐩𝐭, 𝐚𝐧𝐝 𝐒𝐐𝐋, 𝐚𝐧𝐝 𝐟𝐫𝐚𝐦𝐞𝐰𝐨𝐫𝐤𝐬 𝐥𝐢𝐤𝐞 𝐑𝐞𝐚𝐜𝐭, 𝐍𝐨𝐝𝐞.𝐣𝐬, 𝐏𝐨𝐬𝐭𝐠𝐫𝐞𝐬, 𝐚𝐧𝐝 𝐌𝐨𝐧𝐠𝐨𝐃𝐁. 𝐈 𝐯𝐚𝐥𝐮𝐞 𝐀𝐠𝐢𝐥𝐞 𝐩𝐫𝐚𝐜𝐭𝐢𝐜𝐞𝐬 𝐚𝐧𝐝 𝐈'𝐦 𝐜𝐨𝐦𝐦𝐢𝐭𝐭𝐞𝐝 𝐭𝐨 𝐭𝐞𝐚𝐦 𝐜𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐢𝐨𝐧 𝐰𝐡𝐢𝐥𝐞 𝐞𝐧𝐬𝐮𝐫𝐢𝐧𝐠 𝐫𝐞𝐬𝐮𝐥𝐭𝐬 𝐭𝐡𝐚𝐭 𝐚𝐫𝐞 𝐛𝐮𝐠-𝐟𝐫𝐞𝐞. 𝐂𝐮𝐫𝐫𝐞𝐧𝐭𝐥𝐲, 𝐈'𝐦 𝐩𝐮𝐫𝐬𝐮𝐢𝐧𝐠 𝐚 𝐦𝐚𝐬𝐭𝐞𝐫'𝐬 𝐝𝐞𝐠𝐫𝐞𝐞 𝐢𝐧 𝐂𝐨𝐦𝐩𝐮𝐭𝐞𝐫 𝐒𝐜𝐢𝐞𝐧𝐜𝐞 @𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲 𝐎𝐟 𝐌𝐚𝐬𝐬𝐚𝐜𝐡𝐮𝐬𝐞𝐭𝐭𝐬, 𝐭𝐨 𝐟𝐮𝐫𝐭𝐡𝐞𝐫 𝐝𝐞𝐯𝐞𝐥𝐨𝐩 𝐦𝐲 𝐬𝐤𝐢𝐥𝐥𝐬 𝐚𝐧𝐝 𝐭𝐨 𝐬𝐭𝐚𝐲 𝐮𝐩𝐝𝐚𝐭𝐞𝐝 𝐰𝐢𝐭𝐡 𝐭𝐡𝐞 𝐥𝐚𝐭𝐞𝐬𝐭 𝐬𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭 𝐩𝐫𝐚𝐜𝐭𝐢𝐜𝐞𝐬. 𝐂𝐡𝐞𝐞𝐫𝐬!",
  // "𝙄'𝙢 𝙖 𝙨𝙤𝙛𝙩𝙬𝙖𝙧𝙚 𝙚𝙣𝙜𝙞𝙣𝙚𝙚𝙧 𝙬𝙞𝙩𝙝 𝙤𝙫𝙚𝙧 𝙩𝙝𝙧𝙚𝙚 𝙮𝙚𝙖𝙧𝙨 𝙤𝙛 𝙚𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙚 𝙙𝙚𝙫𝙚𝙡𝙤𝙥𝙞𝙣𝙜 𝙨𝙤𝙛𝙩𝙬𝙖𝙧𝙚 𝙥𝙧𝙤𝙙𝙪𝙘𝙩𝙨. 𝙄 𝙝𝙖𝙫𝙚 𝙥𝙧𝙤𝙛𝙞𝙘𝙞𝙚𝙣𝙘𝙮 𝙞𝙣 𝙗𝙪𝙞𝙡𝙙𝙞𝙣𝙜 𝙛𝙪𝙡𝙡-𝙨𝙩𝙖𝙘𝙠 𝙬𝙚𝙗 𝙖𝙣𝙙 𝙢𝙤𝙗𝙞𝙡𝙚 𝙖𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣𝙨 𝙬𝙞𝙩𝙝 𝙚𝙭𝙥𝙚𝙧𝙩𝙞𝙨𝙚 𝙞𝙣 𝙐𝙄/𝙐𝙓, 𝙙𝙖𝙩𝙖𝙗𝙖𝙨𝙚, 𝙖𝙣𝙙 𝙨𝙮𝙨𝙩𝙚𝙢 𝙙𝙚𝙨𝙞𝙜𝙣𝙨. 𝙈𝙮 𝙚𝙭𝙥𝙚𝙧𝙩𝙞𝙨𝙚 𝙞𝙣𝙘𝙡𝙪𝙙𝙚𝙨 𝙩𝙚𝙘𝙝𝙣𝙤𝙡𝙤𝙜𝙞𝙚𝙨 𝙡𝙞𝙠𝙚 𝙅𝙖𝙫𝙖, 𝙅𝙖𝙫𝙖𝙎𝙘𝙧𝙞𝙥𝙩, 𝙏𝙮𝙥𝙚𝙎𝙘𝙧𝙞𝙥𝙩, 𝙖𝙣𝙙 𝙎𝙌𝙇, 𝙖𝙣𝙙 𝙛𝙧𝙖𝙢𝙚𝙬𝙤𝙧𝙠𝙨 𝙡𝙞𝙠𝙚 𝙍𝙚𝙖𝙘𝙩, 𝙉𝙤𝙙𝙚.𝙟𝙨, 𝙋𝙤𝙨𝙩𝙜𝙧𝙚𝙨, 𝙖𝙣𝙙 𝙈𝙤𝙣𝙜𝙤𝘿𝘽. 𝙄 𝙫𝙖𝙡𝙪𝙚 𝘼𝙜𝙞𝙡𝙚 𝙥𝙧𝙖𝙘𝙩𝙞𝙘𝙚𝙨 𝙖𝙣𝙙 𝙄'𝙢 𝙘𝙤𝙢𝙢𝙞𝙩𝙩𝙚𝙙 𝙩𝙤 𝙩𝙚𝙖𝙢 𝙘𝙤𝙡𝙡𝙖𝙗𝙤𝙧𝙖𝙩𝙞𝙤𝙣 𝙬𝙝𝙞𝙡𝙚 𝙚𝙣𝙨𝙪𝙧𝙞𝙣𝙜 𝙧𝙚𝙨𝙪𝙡𝙩𝙨 𝙩𝙝𝙖𝙩 𝙖𝙧𝙚 𝙗𝙪𝙜-𝙛𝙧𝙚𝙚. 𝘾𝙪𝙧𝙧𝙚𝙣𝙩𝙡𝙮, 𝙄'𝙢 𝙥𝙪𝙧𝙨𝙪𝙞𝙣𝙜 𝙖 𝙢𝙖𝙨𝙩𝙚𝙧'𝙨 𝙙𝙚𝙜𝙧𝙚𝙚 𝙞𝙣 𝘾𝙤𝙢𝙥𝙪𝙩𝙚𝙧 𝙎𝙘𝙞𝙚𝙣𝙘𝙚 @𝙐𝙣𝙞𝙫𝙚𝙧𝙨𝙞𝙩𝙮 𝙊𝙛 𝙈𝙖𝙨𝙨𝙖𝙘𝙝𝙪𝙨𝙚𝙩𝙩𝙨, 𝙩𝙤 𝙛𝙪𝙧𝙩𝙝𝙚𝙧 𝙙𝙚𝙫𝙚𝙡𝙤𝙥 𝙢𝙮 𝙨𝙠𝙞𝙡𝙡𝙨 𝙖𝙣𝙙 𝙩𝙤 𝙨𝙩𝙖𝙮 𝙪𝙥𝙙𝙖𝙩𝙚𝙙 𝙬𝙞𝙩𝙝 𝙩𝙝𝙚 𝙡𝙖𝙩𝙚𝙨𝙩 𝙨𝙤𝙛𝙩𝙬𝙖𝙧𝙚 𝙙𝙚𝙫𝙚𝙡𝙤𝙥𝙢𝙚𝙣𝙩 𝙥𝙧𝙖𝙘𝙩𝙞𝙘𝙚𝙨. 𝘾𝙝𝙚𝙚𝙧𝙨!"
};

const services: Service[] = [
  {
    title: "Full Stack Web Developer",
    icon: creator,
  },
  {
    title: "Front-end Developer (ReactJS)",
    icon: web,
  },
  {
    title: "Mobile App Developer (React Native)",
    icon: mobile,
  },
  {
    title: "Server-side Developer (Node.js, Express)",
    icon: backend,
  },
];

const technologies: Technology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "React Native",
    icon: reactnative,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: Experience[] = [
  {
    designation: "Software Engineering Intern",
    company_name: "Infosys Limited (Part Time), India",
    icon: infosys,
    iconBg: "#def8fa",
    date: "Jan. 2018 – Apr. 2018",
    points: [
      "Designed and implemented a Python word scrambling application as part of an Infosys intern project.",
      "Created an efficient system utilizing loops, lists, and randomization techniques, increasing performance by 20%.",
      "Built an intuitive GUI using standard Python libraries, allowing users to easily scramble words in different input text files.",
      "Conducted extensive testing of the application to ensure consistent optimal performance across all input file formats.",
      "Leveraged testing tools like Pytest to further increase the reliability of the system.",
    ],
    tech: "𝙒𝙚𝙗 𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙢𝙚𝙣𝙩 • 𝙐𝙣𝙞𝙩 𝙏𝙚𝙨𝙩𝙞𝙣𝙜 • 𝙍𝙀𝙎𝙏𝙛𝙪𝙡 𝙒𝙚𝙗𝙎𝙚𝙧𝙫𝙞𝙘𝙚𝙨 • 𝙁𝙞𝙜𝙢𝙖 (𝙎𝙤𝙛𝙩𝙬𝙖𝙧𝙚) • 𝙎𝙩𝙖𝙣𝙙𝙖𝙧𝙙 𝙋𝙮𝙩𝙝𝙤𝙣 𝙇𝙞𝙗𝙧𝙖𝙧𝙞𝙚𝙨 • 𝙈𝙮𝙎𝙌𝙇 • 𝙂𝙞𝙩",
    url: "https://www.infosys.com/",
  },
  {
    designation: "Frontend Developer",
    company_name: "Webware.ai  (Full Time), India",
    icon: webware,
    iconBg: "#fff",
    date: "Sep. 2019 – Nov. 2019",
    points: [
      "Utilized front-end development technologies like HTML5, CSS3/SASS, and CSS frameworks like Tailwind CSS, Semantic UI, and Material-UI to develop high-quality user interfaces for web applications.",
      "Maintained, tested, and debugged code using tools like Chrome dev tools and Spectacle, which resulted in a performance improvement of over 25%.",
      "Worked in cross-functional teams to develop customized solutions for clients, with integration to APIs for dynamic data retrieval and processing.",
      "Conducted performance optimization using tools like Webpack, which resulted in a performance improvement of up to 30%.",
    ],
    tech: "𝙃𝙏𝙈𝙇5 • 𝘾𝙎𝙎3 • 𝙎𝘼𝙎𝙎 • 𝙑𝙖𝙣𝙞𝙡𝙡𝙖 𝙅𝙎 • 𝙅𝙌𝙪𝙚𝙧𝙮 • 𝙏𝙖𝙞𝙡𝙬𝙞𝙣𝙙 𝘾𝙎𝙎 • 𝙈𝙖𝙩𝙚𝙧𝙞𝙖𝙡-𝙐𝙄 • 𝙒𝙚𝙗𝙥𝙖𝙘𝙠 • 𝙁𝙞𝙜𝙢𝙖 • 𝙂𝙞𝙩",
    url: "https://webware.ai/",
  },

  {
    designation: "System Engineer",
    company_name: "Tata Consultancy Services Ltd. (Full Time), India",
    icon: tcs,
    // iconBg: "#ffe6fa",
    iconBg: "#def8fa",
    date: "Jan. 2020 - Jan. 2021",
    points: [
      "Developed and maintained applications by following agile methodologies, like Scrum, to meet various client requirements, ensuring on-time delivery and optimal performance.",
      "Utilized full-stack technologies including Java, Spring MVC, and Hibernate, to develop robust and scalable software, resulting in optimized system performance by 25%.",
      "Maintained and monitored server applications, including the deployment of server upgrades, patches, and performance monitoring, leading to a 40% reduction in server downtimes.",
      "Performed unit and integration testing of software products, using Git for version control and Jenkins for continuous integration and deployment (CI/CD), which reduced overall deployment time.",
      "Conducted thorough debugging, testing, and deployment of software and applications, utilizing automation and configuration management tools and processes that improve speed and efficiency.",
    ],
    tech: "𝙑𝙖𝙣𝙞𝙡𝙡𝙖 𝙅𝙎 • 𝙎𝙥𝙧𝙞𝙣𝙜 𝙈𝙑𝘾 • 𝙃𝙞𝙗𝙚𝙧𝙣𝙖𝙩𝙚 • 𝙎𝙌𝙇 • 𝙂𝙞𝙩 • 𝘿𝙤𝙘𝙠𝙚𝙧 • 𝙅𝙪𝙣𝙞𝙩 • 𝘼𝙜𝙞𝙡𝙚 • 𝙎𝙘𝙧𝙪𝙢",
    url: "https://www.tcs.com/",
  },
  {
    designation: "Software Engineer",
    company_name: "WebMinds IT Solution (Full Time), India",
    icon: webm,
    iconBg: "#d4d9fa",
    date: "Feb. 2021 – Aug. 2023",
    points: [
      "Developed and implemented multilayered, scalable system architecture using the MERN stack, leading to a 30% increase in system performance and impressive scalability.",
      "Led the modernization of a legacy system by optimizing and implementing scalable modules, leading to a 37% reduction in load times and a 25% increase in system performance.",
      "Built and deployed a Progressive Web Application (PWA) that increased user engagement by 40% through reliable offline access and seamless data synchronization.",
      "Optimized application performance by utilizing profiling tools and application stack, resulting in a 45% boost in application response times and a 20% improvement in overall system performance.",
      "Implemented and maintained a comprehensive test suite, enhancing code quality, reducing error rates by 20%, and preventing potential security vulnerabilities.",
    ],
    tech: "𝙏𝙮𝙥𝙚𝙎𝙘𝙧𝙞𝙥𝙩 • 𝙑𝙖𝙣𝙞𝙡𝙡𝙖 𝙅𝙎 • 𝙈𝙤𝙣𝙜𝙤𝘿𝘽 • 𝙋𝙃𝙋 • 𝙍𝙚𝙖𝙘𝙩.𝙟𝙨 • 𝙍𝙚𝙖𝙘𝙩 𝙉𝙖𝙩𝙞𝙫𝙚 • 𝙈𝙖𝙩𝙚𝙧𝙞𝙖𝙡-𝙐𝙄 • 𝙍𝙀𝙎𝙏𝙛𝙪𝙡 𝘼𝙋𝙄𝙨 • 𝘼𝙒𝙎 𝙎3 • 𝙂𝙞𝙩𝙃𝙪𝙗",
    url: "https://www.webmindsitsolution.com/",
  },
];

const testimonials: Testimony[] = [
  {
    testimonial:
      "Vinay is an exceptional student with a sharp mind for algorithms and complexity. His performance has demonstrated strong analytical problem-solving skills and attention to detail. I highly recommend him for any project requiring advanced algorithmic skills.",
    name: "Prof. Long Jiao",
    designation: "Professor",
    company: "University Of Massachusetts, Dartmouth, MA",
    image: testimonial_1,
  },
  {
    testimonial:
      "Vinay is a talented student with a passion for data visualization. His work demonstrates skillful use of visualization techniques and displays a deep understanding of data analysis. I highly recommend him for any data visualization project.",
    name: "Dr. Amir Akhavan Masoumi",
    designation: "Professor",
    company: "University Of Massachusetts, Dartmouth, MA",
    image: testimonial_2,
  },
  {
    testimonial:
      "Vinay's software development expertise, analytical skills, and collaborative approach make him a worthy asset to any team. He delivers quality results, adhering to client requirements. His contributions have been vital to our organization, highly recommended for any software project.",
    name: "Prajwal Shinde",
    designation: "Sales Operations Analyst",
    company: "Webware.ai, GA, India",
    image: testimonial_3,
  },
  {
    testimonial:
      "Vinay was a joy to work with. His attention to detail and expertise in web development really stood out and allowed us to create seamless, visually stunning UI/UX designs. He was always available to answer questions and offer insightful feedback, making him an invaluable member of our team. I highly recommend Vinay for any project, big or small.",
    name: "Cassia Da Silva",
    designation: "UI/UX Developer",
    company: "Webware.ai, TO, Canada",
    image: testimonial_4,
  },
  {
    testimonial:
      "Vinay is an exceptional individual with a strong passion for software development. He has an excellent academic record and consistently demonstrated his ability to turn his theoretical knowledge into practical application. His positive attitude towards learning and problem-solving skills make him a valuable asset to any organization. I highly recommend Vinay for any software development project.",
    name: "Dr. Shailendra Aswale",
    designation: "Principal & Head of IT Department",
    company: "S.R.I.E.I.T, GA, India",
    image: testimonial_5,
  },
];

const projects: Project[] = [
  {
    name: "Google Keep Clone",
    description:
      "A note-taking web app that mimics the functionality of Google Keep, built with React.js and Tailwind CSS. It features a Masonry grid layout for easy organization, note editing, deletion, and customizable backgrounds. The app is fully responsive and offers a seamless user experience for managing notes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project_1,
    source_code_link:
      "https://github.com/VinayShetyeOfficial/Google-Keep-Clone",
    live_link: "https://endearing-haupia-ac9511.netlify.app/",
  },
  {
    name: "Google Gemini Clone",
    description:
      "An AI-powered chatbot application built with the goal of replicating Google’s Gemini AI functionalities. Developed using React.js and Tailwind CSS, the clone offers natural language processing capabilities, conversational responses, and intelligent suggestions, providing a seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "openaiapi",
        color: "pink-text-gradient",
      },
    ],
    image: project_2,
    source_code_link:
      "https://github.com/VinayShetyeOfficial/Google-Gemini-Clone",
    live_link:
      "https://664ffed898cedbb966339ad4--luminous-douhua-286200.netlify.app/",
  },
  {
    name: "Student Information System",
    description:
      "A web-based solution for managing student information, designed for educational institutions. Developed with PHP, MySQL, HTML5, CSS3, and Bootstrap, the SIS system offers features like student registration, profile management, and detailed student dashboards with social media integration.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "php5",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap5",
        color: "orange-text-gradient",
      },
    ],
    image: project_3,
    source_code_link:
      "https://github.com/VinayShetyeOfficial/Student-Information-System-PHP",
    live_link:
      "http://student-information-system53.infinityfreeapp.com/index.php",
  },
  {
    name: "Pulse Chat",
    description:
      "A feature-packed chat application built with Stream-Chat-App, providing a seamless communication experience through direct messages, channels, group chats, reactions, and pinned chats. Its user-friendly design ensures easy navigation and smooth performance across devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "streamchat",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: project_4,
    source_code_link: "https://github.com/VinayShetyeOfficial/PulseChat",
    live_link: "",
  },
  {
    name: "E-Learning System",
    description:
      "An advanced e-learning platform where students can enroll in online courses, make payments via Paytm, and access purchased content. It features an admin panel for managing courses, students, and payment statuses, ensuring smooth course delivery and user interaction.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "vanillaJS",
        color: "pink-text-gradient",
      },
      {
        name: "html5",
        color: "orange-text-gradient",
      },
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
    ],
    image: project_5,
    source_code_link:
      "https://github.com/VinayShetyeOfficial/E-Learning-System",
    live_link: "",
  },
  {
    name: "Real Time Chat App",
    description:
      "A dynamic and interactive chat application designed for seamless real-time communication. Built with PHP, MySQL, and JavaScript, this app allows users to register, log in, and engage with others in real time. Users can view and interact with online contacts, manage their profiles, and experience live messaging with instant updates on message statuses and user presence. Whether you’re connecting with friends or managing conversations, this app provides a fluid and responsive chatting experience.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "vanillaJS",
        color: "pink-text-gradient",
      },
      {
        name: "html5",
        color: "orange-text-gradient",
      },
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
    ],
    image: project_6,
    source_code_link:
      "https://github.com/VinayShetyeOfficial/Real-Time-ChatApp-PHP",
    live_link: "",
  },
];

export { user, services, technologies, experiences, testimonials, projects };
