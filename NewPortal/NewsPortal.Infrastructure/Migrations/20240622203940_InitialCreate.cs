using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace NewsPortal.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "NewsArticles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Category = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NewsArticles", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "NewsArticles",
                columns: new[] { "Id", "Category", "CreatedDate", "Description", "Title", "UpdatedDate" },
                values: new object[,]
                {
                    { 1, "Skills", new DateTime(2024, 6, 23, 2, 9, 40, 124, DateTimeKind.Local).AddTicks(1086), "In the dynamic landscape of education, the focus on developing vital skills beyond textbooks is more crucial than ever. We recognize the transformative influence of debate in fostering critical thinking and communication skills, and we're excited to share this journey with parents who are invested in their children's holistic development. Debates transcend mere verbal exchanges; they serve as intellectual battlegrounds where students learn to articulate thoughts, analyze information, and construct persuasive arguments. I firmly believe in empowering students with skills that extend beyond rote learning, setting the stage for a well-rounded education.", "Fostering critical thinking & communication skills in students", new DateTime(2024, 6, 23, 2, 9, 40, 124, DateTimeKind.Local).AddTicks(1094) },
                    { 2, "Skills", new DateTime(2024, 6, 23, 2, 14, 40, 124, DateTimeKind.Local).AddTicks(1095), "In a bid to facilitate employment opportunities to the youth by enhancing their skills and competence according to the global needs, the Punjab Skill Development Mission (PSDM) has inked a memorandum of understanding (MoU) with Microsoft to ingrain essential skills to at least 10,000 youth of state in a year.The MoU was signed by Amrit Singh, Director, PSDM, and Sanjay Dhingra, Country Head Education, Microsoft Corporation India Private Limited on Friday.\r\n\r\nEmployment Generation, Skill Development and Training Minister Aman Arora said this collaboration would pave a way to impart skills to 10,000 youth in Punjab with essential digital productivity skills, employability, English communication, entrepreneurship and technology skills, including cloud, Artificial Intelligence (AI), cyber security and sustainability.\r\n\r\nThe department has not been leaving any stone unturned to facilitate employment opportunities to the youth of Punjab, he reiterated.", "Punjab Skill Development Mission inks MoU with Microsoft to impart skills to 10,000 youth", new DateTime(2024, 6, 23, 2, 14, 40, 124, DateTimeKind.Local).AddTicks(1099) },
                    { 3, "Skills", new DateTime(2024, 6, 23, 2, 19, 40, 124, DateTimeKind.Local).AddTicks(1100), "Oracle is announcing that its Autonomous Database is now generally available on Microsoft Azure. This is another step by the company to break down the “walled garden of different cloud providers.” It’s the second Oracle Database to run on Oracle Cloud Infrastructure and is initially available on Microsoft Azure’s East U.S. region through Oracle Database@Azure program. There are plans to eventually expand into more data centers in 2024. The technology enables organizations to speed up app development and migrate their on-premises workloads and infrastructure to the cloud.\r\n\r\nWith the Microsoft Azure integration, companies using this managed equivalent of Oracle Database will also benefit from having access to the Azure portal and relevant APIs. It’s powered using Real Application Clusters that run on Oracle’s Exadata Cloud Infrastructure, so workloads are secure, scalable and high-performing. They receive all the capabilities but don’t have to deal with any upkeep.", "Oracle brings Autonomous Databases to Microsoft Azure datacenters to help enterprises migrate to the cloud", new DateTime(2024, 6, 23, 2, 19, 40, 124, DateTimeKind.Local).AddTicks(1101) },
                    { 4, "Skills", new DateTime(2024, 6, 23, 2, 24, 40, 124, DateTimeKind.Local).AddTicks(1102), "Analysts at Citi raised their target for Microsoft (NASDAQ:MSFT) to $520 from $495 in a note this week, maintaining a Buy rating on the stock.\r\n\r\nThe bank said the latest OpenAI headlines are a positive read on Microsoft's Azure, but the expenses may be too low.\r\n\r\nOver the last few weeks, OpenAI has been in the news, with press reports of the company more than doubling annualized revenue to $3.4 billion in ARR and expanding cloud capacity contracts with ORCL.\r\n\r\n\"While OpenAI headlines are a positive from a growth perspective (suggest strength in Azure), we conclude consensus models may be understating the losses that MSFT will incur from their OpenAI stake in the non-operating expense line,\" wrote analysts at Citi.\r\n\r\nThey explain that while it is not significant, given the large scale of MSFT's business, they believe consensus EPS estimates may be overstated by $0.04-$0.05 in the coming quarters all-else-equal.\r\n\r\nOverall Citi slightly reduced its near-term EPS estimate by roughly 1% for F4Q24 and F1Q25 EPS of $3.08 where they are ~2% below consensus of ~$3.15. They raised their FY27+ estimates.", "Microsoft target raised at Citi: 'OpenAI headlines a positive read on Azure'", new DateTime(2024, 6, 23, 2, 24, 40, 124, DateTimeKind.Local).AddTicks(1102) },
                    { 5, "Skills", new DateTime(2024, 6, 23, 2, 29, 40, 124, DateTimeKind.Local).AddTicks(1104), "Healthcare IT leaders can leverage Microsoft Cloud capabilities and the expertise of system integrators to enhance data exchange, improve patient care, and drive innovation. IT leaders have long been aware of the benefits that data interoperability creates, both internally and with external healthcare entities. Yet despite years of work and regulatory mandates, today’s healthcare ecosystem is still marked by data trapped in stand-alone systems.\r\n\r\nBut there’s good news. Cloud computing and services can play a pivotal role in helping IT leaders achieve this goal. And partnering with a systems integrator like Tata Consultancy Services (TCS) and utilizing platforms like Microsoft Azure can expedite this process.", "How to advance healthcare data interoperability with Microsoft Cloud", new DateTime(2024, 6, 23, 2, 29, 40, 124, DateTimeKind.Local).AddTicks(1104) },
                    { 6, "Skills", new DateTime(2024, 6, 23, 2, 34, 40, 124, DateTimeKind.Local).AddTicks(1105), "The company unveiled its Generative Chemistry and Accelerated DFT platform to shorten research time for chemical and material scientists.Microsoft has added generative artificial intelligence and other enhanced features to its quantum-computing platform as part of a larger strategy to deliver the game-changing technology to a broader range of users — in this case, the scientific community.\r\n\r\nThe company on Wednesday unveiled the release of Generative Chemistry and Accelerated DFT, which together expand how scientists in the chemicals and materials science industry can use its Azure Quantum Elements platform to help drastically shorten the time it takes them to do research, the company said in a blog post.\r\n\r\n“Just as generative AI has unleashed new waves of creativity and improved productivity with collaborative tools like Copilot, we are now bringing AI and natural language processing capabilities to science,” according to the post, attributed to Jason Zander, EVP, Strategic Missions and Technologies.", "Microsoft bolsters quantum platform with gen AI, molecular simulation capabilities", new DateTime(2024, 6, 23, 2, 34, 40, 124, DateTimeKind.Local).AddTicks(1106) }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "NewsArticles");
        }
    }
}
