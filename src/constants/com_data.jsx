import companyImg from "../assets/logoimages/pic1.jpg";
import {
  FaCalendar,
  FaCalendarAlt,
  FaCity,
  FaDollarSign,
  FaEnvelope,
  FaGenderless,
  FaGlobe,
  FaGraduationCap,
  FaHome,
  FaPhone,
  FaTimesCircle,
} from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { FcManager } from "react-icons/fc";
import { FaToolbox } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbPasswordFingerprint } from "react-icons/tb";
import { PiIdentificationCardFill } from "react-icons/pi";
import { FaTableCellsLarge } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
export const fullData = {
  name: "Galaxy Software Development",
  location: "1363-1385 Sunset Blvd Los Angeles, CA 90026, USA",
  about:
    "UUt enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.Opossum but dramatically despite expeditiously that jeepers loosely yikes that as or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident wiped set waywardly far the and pangolin horse approving paid chuckled cassowary oh above a much opposite far much hypnotically more therefore wasp less that hey apart well like while superbly orca and far hence one.Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy.?",
  company_img: companyImg,
  Responsabilities: [
    "Establish and promote design guidelines, best practices and standards.",
    "Accurately estimate design tickets during planning sessions.        ",
  ],
  maplink:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31522.436281229413!2d38.737381595588644!3d9.035959875627249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f68908aad97%3A0x6c67d2e35cbb4d62!2s6%20Kilo%20Yekatit%2012%20Square!5e0!3m2!1sen!2set!4v1703621054917!5m2!1sen!2set",
  shareprofile: [
    {
      name: "Facebook",
      link: "https://www.facebook.com/",
    },
    {
      name: "Twitter",
      link: "https://www.twitter.com/",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/",
    },
  ],
  experience: 6,
  Phone: "+25163297383",
  Email: "thewebmaxdemo@gmail.com",
};

export const company_navbar = [
  {
    name: "Dashboard",
    Icon: FaHome,
    link: "/company/home",
  },
  {
    name: "Company profile",
    Icon: FcManager,
    link: "/company/profile",
  },
  {
    name: "Jobs",
    Icon: FaToolbox,
    link: "/company/job",
  },
  {
    name: "Resume Alert",
    Icon: IoMdNotifications,
    link: "/company/alert",
  },
  {
    name: " Change Password",
    Icon: TbPasswordFingerprint,
    link: "/company/password",
  },
  {
    name: "Delete Account",
    Icon: RiDeleteBin6Line,
    link: "/company/delete",
  },
];
export const jobDetailINput = [
  {
    name: "Job Title",
    type: "text",
    icon: PiIdentificationCardFill,
    placeholder: "Enter Job Title",
    required: true,
    dbName: "title",
  },
  {
    name: "Job Catagory",
    type: "select",
    options: [
      "Other",
      "Information Technology",
      "Healthcare",
      "Finance and Accounting",
      "Marketing and Advertising",
      "Education and Training",
      "Customer Service and Support",
      "Sales and Business Development",
      "Engineering",
      "Human Resources",
      "Creative Arts and Design",
    ],
    icon: FaTableCellsLarge,
    required: true,
    placeholder: "Select catagory",
    dbName: "catagory",
  },
  {
    name: "Job Type",
    type: "select",
    options: [
      "Full-time",
      "Part-time",
      "Contract",
      "Temporary",
      "Freelance",
      "Internship",
      "Remote",
    ],
    icon: IoDocumentText,
    placeholder: "select job type",
    required: true,
    dbName: "jobType",
  },
  {
    name: "offer Salary",
    type: "number",
    icon: FaDollarSign,
    placeholder: "salary",
    required: true,
    dbName: "offersalary",
  },
  {
    name: "Experience",
    type: "text",
    icon: FaCalendarAlt,
    placeholder: "experience",
    defaultValue: "Any",
    required: false,
    dbName: "experience",
  },
  {
    name: "Qualification",
    type: "text",
    icon: FaGraduationCap,
    placeholder: "Qualification TItle",
    required: true,
    dbName: "qualification",
  },
  {
    name: "Gender",
    type: "select",
    icon: FaGenderless,
    options: ["Any", "Male", "Female"],
    placeholder: "Select Gender",
    required: false,
    dbName: "gender",
  },
  {
    name: "Country",
    type: "select",
    icon: FaGlobe,
    options: ["Ethiopia"],
    placeholder: "Select Country",
    required: false,
    dbName: "country",
  },
  {
    name: "City",
    type: "text",
    icon: FaCity,
    placeholder: "City",
    required: true,
    dbName: "city",
  },
  {
    name: "Phone Number",
    type: "text",
    icon: FaPhone,
    placeholder: "Phone",
    required: false,
  },
  {
    name: "Website",
    type: "text",
    icon: FaGlobe,
    placeholder: "https://...",
    required: false,
    dbName: "weblink",
  },
  {
    name: "Start Date",
    type: "datetime-local",
    icon: FaCalendar,
    placeholder: "mm/dd/yyyy",
    required: true,
    dbName: "startday",
  },
  {
    name: "End Date",
    type: "datetime-local",
    icon: FaCalendar,
    placeholder: "mm/dd/yyyy",
    required: true,
    dbName: "deadline",
  },
];
