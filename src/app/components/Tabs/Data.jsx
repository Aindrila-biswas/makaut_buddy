import { useContext } from "react";
import DataContext from "@/app/Context/DataContext";

const Data = () => {
  const getData = useContext(DataContext);
  const tabs = [
    getData.sub == "Mathematics" &&
      getData.year == "B.Tech CSE 1st Semester" && {
        video: [
          {
            key: 1,
            heading: "Rank & Inverse of Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa",
          },
          {
            key: 2,
            heading: "Unitary Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/3nafrDiN0gU?si=OwRhRtzVqLtxMySv",
          },
          {
            key: 3,
            heading: "Linear Form of Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/D5V0NXtWGtQ?si=2H3LmawO1R_bhZgy",
          },
          {
            key: 4,
            heading: "Taylor Series",
            description:
              " What is Taylor Theorem and how To Prove this? What is Taylor Series and how to expand this By Taylor Theorem?",
            link: "https://youtu.be/LEspaisjDFE?si=ygEIeVE__0-bMl1_",
          },

          {
            key: 5,
            heading: "Matrices 1",
            description:
              " What is matix?, How to calculate Determinants?,Types of Determinants, Minor & Cofactors, and Properties of Determinants",
            link: "https://www.youtube.com/watch?v=b-UZJVdLbXc&list=PLvTTv60o7qj_tdY9zH7YceES7jfXiZkAz&index=1",
          },
          {
            key: 6,
            heading: "Matrices 2",
            description:
            "Numericals on Determinants, Types of Matrices and Multiplication of Matrices & its properties ",
            link: "https://www.youtube.com/watch?v=OWykXurjpFU&list=PLvTTv60o7qj_tdY9zH7YceES7jfXiZkAz&index=2"
          },
          {
            key: 7,
            heading: "Properties of Matrices",
            description:
              " What is Adjoint matrix? What is Inverse of a matrix? What are symmetric, skew-symmetric and orthogonal matrices?? ",
            link: "https://www.youtube.com/watch?v=HyaeoGZyX10&list=PLvTTv60o7qj_tdY9zH7YceES7jfXiZkAz&index=3",
          },
          {
            key: 8,
            heading: "Rank of a matrix using Elementary Operations",
            description:
              " What is Rank of a matrix ?? How to calculate it ?? Calculation of Rank using Elementary transformation.",
            link: "https://youtu.be/p5rBJj5CKCg?si=pPXTxicqYATGcOGQ",
          },
          
        ],
        pyq: [
          {
            key: 1,
            heading: "Mathematics-I 2021",
            description:
              "Mathematics-I 2021 question paper of MAKAUT in-house batch",
          },
        ],
        notes: [
          {
            key: 1,
            heading: "Matrix Practice Problems",
            description:
              "Matrix Problems involving unitary matrix, rank of a matrix, orthogonal matrix, Trace of a matrix, etc.",
          },
        ],
      },
    getData.sub == "Electrical & Digital Electronics" &&
      getData.year == "B.Tech CSE 1st Semester" && {
        video: [
          {
            key: 1,
            heading:
              "Understand and analyze basic electric and magnetic circuits",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/watch?v=UdaDs-zKfsA",
          },
          {
            key: 2,
            heading:
              "Study the working principles of electrical machines and power converters.",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://youtu.be/j_4jvMwIla0?si=ue3tTdmOsEZrd1ai",
          },
          {
            key: 3,
            heading:
              "Introduce the components of low voltage electrical installations",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://youtu.be/2_deQIpxNkQ?si=qfU5fReEKM5_Etjb",
          },

          {


            key: 4,
            heading:
              "All about Forward Bias",
            description:
              "In forward bias, the p-type(anode) of the semiconductor is connected to the positive end, and the n-type(cathode) is connected to the negative end of the battery.",
            link: "https://youtu.be/icrAf1us2IQ?si=t1Sm6NJFaQ72t6AA",
          },
          {
            key: 5,
            heading:
              " All about Reverse bias ",
            description:
              "The backward diode is a special form of tunnel diode in which the tunneling phenomenon is only incipient, and the negative resistance region virtually disappears",
            link: "https://youtu.be/u_8b4GAUWCg?si=tVdWEuqno9ddsw5h",
          },
              {
           
            key:6,
            heading:
            " All about Ideal Diode (First Approximation of PN junction Diode) Basic Electronics",
            description:
            "An ideal diode means a perfect diode which has all properties in their perfect sense without any flaws",
          link:
          "https://www.youtube.com/watch?v=W_4rBZdd41Q&list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy&index=5",}
          ,
          {
            key:7,
            heading:"Photo Diode (Construction & Working) Special Purpose Diodes (Basic Electronics)",
            description:"A photodiode is a light-sensitive semiconductor diode.It produces current when it absorbs photons.",
            link:"https://www.youtube.com/watch?v=BZLOGi3t740&list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy&index=36",
          },
          
          {
            key:8,
            heading:
            " All about Zener Diode",
            description:
            "Zener diodes are semiconductor devices that allow current to flow in both directions but specialize in current flowing in reverse. Also known as breakdown diodes.",
          link:
          "https://youtu.be/qVwEVXf3CBQ?si=Go_1C_oDuR-9z1Z2",},
         
        ],
      

        
        pyq: [
          {
            key: 1,
            heading: "heading1",
            description: "des1",
          },
        ],
        notes: [
          {
            key: 1,
            heading: "heading1",
            description: "des1",
          },
        ],
      },
    getData.sub == "Engineering Drawing" &&
      getData.year == "B.Tech CSE 1st Semester" && {
        video: [
          {
            key: 1,
            heading: "Rank & Inverse of Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa",
          },
          {
            key: 2,
            heading: "Rank & Inverse of Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa",
          },
          {
            key: 3,
            heading: "Rank & Inverse of Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa",
          },
          {
            key: 4,
            heading: "Rank & Inverse of Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa",
          },
          {
            key: 5,
            heading: "Rank & Inverse of Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa",
          },
        ],
        pyq: [
          {
            key: 1,
            heading: "heading1",
            description: "des1",
          },
        ],
        notes: [
          {
            key: 1,
            heading: "heading1",
            description: "des1",
          },
        ],
      },
    getData.sub == "Chemistry" &&
      getData.year == "B.Tech CSE 1st Semester" && {
        video: [
          {
            key: 1,
            heading: "Introduction to Thermodynamics",
            description:
              "Thermodynamics is the science of the relationship between heat, work, temperature, and energy.",
            link: "https://youtu.be/72JId0JrNKU?si=0dg-9XcP_KkAG3K2",
          },
          {
            key: 2,
            heading: "Thermodynamic Systems",
            description:
             "A thermodynamic system is defined as a quantity of matter or a region in space that is of interest.",
            link: "https://youtu.be/H3dCYqw-Y4o?si=TnwnHGTOdOsgZi-t",
          },
          {
            key: 3,
            heading: "Thermodynamic Properties and Process",
            description:
              "some basic concepts related to thermodynamic properties and thermodynamic processes.",
            link: "https://youtu.be/ke1Qfc5SnnE?si=hjeYNlBX4XNUkjID",
          },
          
          {
            key: 4,
            heading: "Different Types Of Thermodynamic Process",
            description:
              "different types of thermodynamic processes on the basis of pressure, temperature and volume.",
            link: "https://youtu.be/llJd3XcboBo?si=hew8qTo8OXmSzY_N",
          }, 
          {
            key: 5,
            heading: "Quasistatic Process ",
            description:
              "some basic concepts related to quasistatic process.",
            link: "https://youtu.be/GDI2bVji2DU?si=b1zf42vOnFxZB-UV",

          },
          {
            key: 6,
            heading: "Thermodynamic Equilibrium ",
            description:
              "the properties of which do not change with time and that can be changed to another condition only at the expense of effects on other systems",
            link: "https://youtu.be/LH40zR2EPmQ?si=TPNRRm9LZkIZYITA",
          },
          {
            key: 7,
            heading: "Pure Substance And State Postulate.",
            description:
              "the state postulate for a simple, pure substance states that the equilibrium state can be determined by specifying any two independent intensive properties",
            link: "https://youtu.be/eP9Fd2N2Jtc?si=BSo52O_xDmGrA",
          },
          {
            key: 8,
            heading: "Concept Of Continuum",
            description:
              "an area that can keep being divided and divided infinitely; no individual particles",
            link: "https://youtu.be/tlQzJoJfTlA?si=dv5u_LIGcp9wBw94",
          },
          {
            key: 23,
            heading: " periodic properties (effective nuclear charge)",
            description:
             "The occurrence of the elements with similar properties after certain regular intervals when they are arranged in increasing order of atomic number",
            link: "https://youtu.be/uhRs0REbDhA?si=hY5St_OPrlcE7t03",
          },  
          {
          
            key: 24,
            heading:"periodic properties (variation in s p d f orbitals energies)",
            description:
            "The basic law governing modern periodic table states that the properties of elements are periodic functions of their atomic number",
            link: "https://youtu.be/VSTqzzTM51M?si=DElFO0t89dve_eH9",
          }, 
          { 
            key: 39,
            heading: " organic reactions",
            description:
             "chemical reactions involving organic compounds",
            link: "https://youtu.be/61jaFrlLT0M?si=AjCa4Odz7S1Rw_ZN",
          },
          {
            key: 40,
            heading: "Nucleophilic Substitution Reaction ",
            description:
              "a class of organic reactions where one nucleophile replaces another",
            link: "https://youtu.be/2U1xKSEMNkY?si=NFfzztoCppLfASvi",
          },
          {
            key: 41,
            heading: "substitution reaction",
            description:
              "a chemical reaction during which one functional group is replaced by another functional group in a chemical compound",
            link: "https://youtu.be/h8D3KxHkEyI?si=AQmwpuSjqvrTafZd",

          },
          {
            key: 42,
            heading: "Addition Reaction",
            description: 
             " In the simplest of terms of organic chemistry, we can say that an addition reaction is a chemical reaction wherein two or more reactants come together to form a larger single product",
            link: "https://youtu.be/GvrM-0gN_Co?si=RHIvcyaeZi3Pnq5D",
          
          },
          {
            key: 43,
            heading: "Free Radical Addition Reaction",
            description: 
             "a chemical reaction wherein two or more reactants come together to form a larger single product",
            link: "https://youtu.be/flO_UsDd0yY?si=xRQTr0OyNwYyGZjF",

          },
          {
            key: 44,
            heading: "Elimination Reaction",
            description: 
             "a type of reaction that is mainly used to transform saturated compounds to unsaturated compounds",
            link: "https://youtu.be/Gv4ri_3Oyak?si=FRU0phVCgx4qTgcN",


          },
          {
            key: 45,
            heading: "Oxidation and Reduction",
            description: 
             "a process which involves the addition of oxygen or any electronegative element or the removal of hydrogen or any electropositive element",
            link: "https://youtu.be/OT8EdHHqpnM?si=tTu6ONcS24IcYwiV",


          },
          {
            key: 46,
            heading: "cyclization",
            description:
              "is the formation of a ring in a chemical compound, such as cyclize. It is a noun and a verb with the same meaning",
            link: "https://youtu.be/Z5G94J0-FBk?si=OnV2uRnFCTY7LyWA",

          },
          {
            key: 47,
            heading: "Ring Opening Reaction",
            description: 
             "important transformations that afford a 1,2-halohydrin system with two successive chiral carbon centers",
            link: "https://youtu.be/nQxwkIPDYzg?si=bWKWPWl9iw6MQdjo",



          },
          {
              key: 48,
            heading: "Synthesis ",
            description:
              "the composition or combination of parts or elements so as to form a whole ",
            link:  "https://youtu.be/8oQkJpuCsIQ?si=lcMerrsFWO-6ZsXM ",
          },
          {
            key: 49,
            heading: "Aromaticity",
            description:
               "a property of the conjugated cycloalkenes which enhances the stability of a molecule due to the delocalization of electrons present in the π-π orbitals",
            link: "https://youtu.be/bq1PZcKY50o?si=0OgJu2lakHRPy6Jw",
          }

        ],
      pyq: [
        {
          key: 70,
          heading: "Atomic and Molecular Structure|CFT",
          description: " a bonding model that explains many important properties of transition-metal complexes, including their colors, magnetism, structures, stability, and reactivity",
          link: "https://youtu.be/H0lTUapkDo4?si=Jw5lnp1cZKtuMtPV",

          
        },
      ],
      pyq: [ 
        {
          key: 71,
          heading: "Atomic and Molecular Structure|Band theory of solid",
          description: " electrons jump from valence band to conduction band even at ordinary temperature and if this happens then the solid conducts electricity",
          link: "https://youtu.be/g82XpUsZsEI?si=QYKpcveSsf4GMSg-",

        },
      ],
      pyq:[ 
       {
         key: 72,
         heading: "Atomic and Molecular Structure|Band theory of metal",
         description: "based on the valence band and the conduction band. It is also known as the band theory of solids or zone theory of solids",
         link: "https://youtu.be/ow7HXwj4KIk?si=oHQmSH4wpacppWEu",

       }
      ]
    },
  ];
   
   return tabs;
};

export default Data;


