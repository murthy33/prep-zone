const quizData = {
    os: {
      theory1: `An Operating System (OS) serves multiple essential roles in a computer system. Primarily, it manages hardware
       resources, such as the CPU, memory, and storage devices, ensuring that each application has the resources it needs to function efficiently.
        Additionally, the OS acts as a platform for running applications, providing the necessary environment and services for software to operate. 
        Furthermore, it offers a user interface (UI), allowing users to interact with the computer through graphical or command-line interfaces. Overall, the OS is integral to system operation, enabling seamless interaction between users, software, and hardware.`,
      theory2:`A thread is defined as the smallest unit of execution within a process. Processes can be divided into multiple threads, allowing concurrent execution.
      Threads share the same memory space and resources of their parent process, which makes them lightweight compared to processes. This enables efficient execution of tasks, especially in applications requiring multitasking or parallel processing.
       Multithreading allows programs to perform various operations simultaneously, improving application responsiveness and performance, particularly in environments like web servers or graphical user interfaces.`,
      theory3:`Virtual memory is a memory management technique that provides an "idealized abstraction" of the storage resources of a computer. It allows a computer to compensate for physical memory shortages by temporarily transferring data from Random Access Memory (RAM) 
       to disk storage. This process enables systems to run larger applications than the available physical memory would normally allow. Virtual memory is managed by the OS, which creates a virtual address space for each process. This enhances system stability and 
       efficiency by isolating processes from each other and preventing them from interfering with the physical memory allocation of others. `,
      questions: [
        {
          questionText: "What is the role of the operating system?",
          options: [
            "A) To manage hardware resources",
            "B) To run applications",
            "C) To provide an interface for users",
            "D) All of the above"
          ],
          correctAnswer: "D)",
          explanation: "The OS manages hardware resources, runs applications, and provides an interface for users."
        },
        {
          questionText: "What is a thread?",
          options: [
            "A) A process",
            "B) A unit of memory",
            "C) The smallest unit of execution within a process",
            "D) A network protocol"
          ],
          correctAnswer: "C)",
          explanation: "A thread is the smallest unit of execution within a process."
        },
        {
          questionText: "What is virtual memory?",
          options: [
            "A) Physical memory",
            "B) A memory management technique",
            "C) A type of storage device",
            "D) None of the above"
          ],
          correctAnswer: "B)",
          explanation: "Virtual memory is a memory management technique that provides an 'idealized abstraction' of the storage resources."
        },
        {
          questionText: "Which of the following is a type of operating system?",
          options: [
            "A) Batch OS",
            "B) Time-sharing OS",
            "C) Real-time OS",
            "D) All of the above"
          ],
          correctAnswer: "D)",
          explanation: "Batch OS, Time-sharing OS, and Real-time OS are all types of operating systems."
        },
        {
          questionText: "What does multitasking mean?",
          options: [
            "A) Running multiple programs at the same time",
            "B) Switching between tasks quickly",
            "C) Both A and B",
            "D) None of the above"
          ],
          correctAnswer: "C)",
          explanation: "Multitasking allows running multiple programs simultaneously and switching between tasks quickly."
        },
      ]
    },
    cn: {
      theory1: `Local Area Network (LAN) is a network configuration that connects computers and devices within a limited geographical area, 
      such as an office, school, or home. It facilitates fast data transfer and communication between connected devices using wired or wireless
      technologies. LANs are integral for resource sharing, like printers or files, and are cost-effective compared to larger networks. As opposed to Wide Area 
      Networks (WANs), LANs are localized and typically managed by a single organization, providing better control and security.`,
      theory2:`Routers play a crucial role in connecting different networks, managing data packets, and ensuring secure and efficient data transmission.
      Acting as the gateway between local networks and external networks (such as the Internet), routers determine the optimal path for data to travel.
      Devices like modems are essential for connecting to the Internet, converting digital signals from your devices to a format suitable for transmission over telephone or cable lines. 
      Together, modems and routers enable seamless communication across networks.`,
      theory3:`Protocols are standardized rules that govern data exchange over a network. For instance, the Simple Mail Transfer Protocol (SMTP) is widely used for email transmission,
      ensuring messages are sent and received correctly. Another critical protocol is the Internet Protocol (IP), which assigns unique addresses to devices, allowing them to send and receive data.
      These protocols ensure interoperability and efficiency in diverse networking environments, making the Internet and other communication systems function reliably.`,
      questions: [
        {
          questionText: "What does LAN stand for?",
          options: [
            "A) Local Area Network",
            "B) Long Area Network",
            "C) Large Area Network",
            "D) None of the above"
          ],
          correctAnswer: "A)",
          explanation: "LAN stands for Local Area Network, which is a network that connects computers within a limited area."
        },
        {
          questionText: "What is a router used for?",
          options: [
            "A) To connect different networks",
            "B) To manage data packets",
            "C) To provide security",
            "D) All of the above"
          ],
          correctAnswer: "D)",
          explanation: "A router connects different networks, manages data packets, and provides security."
        },
        {
          questionText: "Which protocol is used for email transmission?",
          options: [
            "A) FTP",
            "B) HTTP",
            "C) SMTP",
            "D) SNMP"
          ],
          correctAnswer: "C)",
          explanation: "SMTP (Simple Mail Transfer Protocol) is used for sending emails."
        },
        {
          questionText: "What does IP stand for?",
          options: [
            "A) Internet Protocol",
            "B) Interconnected Protocol",
            "C) Internet Process",
            "D) Internal Protocol"
          ],
          correctAnswer: "A)",
          explanation: "IP stands for Internet Protocol, which is used for routing data across networks."
        },
        {
          questionText: "Which device connects a computer to the Internet?",
          options: [
            "A) Switch",
            "B) Hub",
            "C) Modem",
            "D) Router"
          ],
          correctAnswer: "C)",
          explanation: "A modem connects a computer to the Internet."
        },
      ]
    },
    dbms: {
      theory1: `A Database Management System (DBMS) is software that allows users to efficiently create, manage, and manipulate databases. 
      It acts as an interface between users and the database, providing tools to store, retrieve, and manage data systematically. Popular examples of DBMS
       software include MySQL, PostgreSQL, MongoDB, and Oracle. Unlike applications like Microsoft Excel, which are used for data analysis and visualization, a DBMS focuses on 
       managing large datasets and ensuring structured data storage with enhanced scalability, security, and reliability.`,
      theory2:`In a DBMS, a primary key is a crucial element, acting as a unique identifier for each record in a database table. This ensures that no two records have the same value for
       this field, facilitating efficient data retrieval and organization. Additionally, SQL (Structured Query Language) is the standard language used for querying, updating, and managing databases.
        SQL commands like SELECT, INSERT, and UPDATE empower users to interact with and manipulate the database with ease, making it an essential tool for data management tasks.`,
      theory3:`Normalization is a process used in database design to organize data effectively by reducing redundancy and ensuring data integrity. This involves dividing a database into multiple tables
       and defining relationships between them to streamline data storage. By following normalization principles, databases become more efficient, maintain consistency, and minimize duplication. Properly normalized 
       databases are easier to maintain, less prone to errors, and optimize performance during data operations.`,
      questions: [
        {
          questionText: "What does DBMS stand for?",
          options: [
            "A) Data Base Management System",
            "B) Database Management Service",
            "C) Data Block Management System",
            "D) None of the above"
          ],
          correctAnswer: "A)",
          explanation: "DBMS stands for Data Base Management System."
        },
        {
          questionText: "Which of the following is NOT a DBMS?",
          options: [
            "A) MySQL",
            "B) MongoDB",
            "C) Microsoft Excel",
            "D) PostgreSQL"
          ],
          correctAnswer: "C)",
          explanation: "Microsoft Excel is a spreadsheet program, not a DBMS."
        },
        {
          questionText: "What is a primary key?",
          options: [
            "A) A unique identifier for a record",
            "B) A type of data field",
            "C) An index",
            "D) A foreign key"
          ],
          correctAnswer: "A)",
          explanation: "A primary key is a unique identifier for a record in a database table."
        },
        {
          questionText: "Which language is used to query a database?",
          options: [
            "A) HTML",
            "B) SQL",
            "C) CSS",
            "D) Java"
          ],
          correctAnswer: "B)",
          explanation: "SQL (Structured Query Language) is used to query and manipulate databases."
        },
        {
          questionText: "What is normalization?",
          options: [
            "A) The process of organizing data",
            "B) The process of ensuring data integrity",
            "C) The process of reducing data redundancy",
            "D) All of the above"
          ],
          correctAnswer: "D)",
          explanation: "Normalization is the process of organizing data to reduce redundancy and ensure data integrity."
        },
      ]
    }
  };
  
  export default quizData;
  