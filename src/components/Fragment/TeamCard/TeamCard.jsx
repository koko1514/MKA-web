const TeamCard = () => {
  const teamMembers = [
    {
      image: "/assets/- ̗̀ 𝐑𝐄𝐃 𝐕𝐄𝐋𝐕𝐄𝐓 ˖⋆࿐໋₊ ☆.jpeg",
      name: "Tony Fred",
      position: "Chief Operations Officer",
      description:
        "Founder and chief visionary, Tony is the driving force behind the company's manufacturing success. He loves to keep his hands full by participating in the development of the manufacturing process, marketing, and customer experience strategies.",
    },
    {
      image: "/assets/- ̗̀ 𝐑𝐄𝐃 𝐕𝐄𝐋𝐕𝐄𝐓 ˖⋆࿐໋₊ ☆.jpeg",
      name: "Jordan Lee",
      position: "Chief Operations Officer",
      description:
        "Mich loves taking on manufacturing challenges. With his multi-year experience as Commercial Director in the manufacturing industry, Mich has helped the company to get where it is today. Mich is among the best minds in manufacturing.",
    },
    {
      image: "/assets/- ̗̀ 𝐑𝐄𝐃 𝐕𝐄𝐋𝐕𝐄𝐓 ˖⋆࿐໋₊ ☆.jpeg",
      name: "Jordan Smith",
      position: "Chief Quality Officer",
      description:
        "Aline is one of the iconic people in life who can say they love what they do. She mentors 100+ in-house manufacturing experts and looks after the community of thousands of manufacturers.",
    },
    {
      image: "/assets/- ̗̀ 𝐑𝐄𝐃 𝐕𝐄𝐋𝐕𝐄𝐓 ˖⋆࿐໋₊ ☆.jpeg",
      name: "Iris Joe",
      position: "Chief Supply Chain Officer",
      description:
        "Iris, with her extensive international experience in manufacturing, helps us easily understand the production process and improves it. She is determined to drive success and delivers her professional acumen to bring the company to the next level in manufacturing.",
    },
  ];

  return (
    <>
      {teamMembers.map((member, index) => (
        <div key={index} className="font-lato flex items-start gap-4 mb-8">
          <img
            src={member.image}
            alt={member.name}
            className="w-20 h-20 rounded-full object-cover shadow-md"
          />
          <div>
            <h4 className="font-semibold text-lg">{member.name}</h4>
            <p className="text-sm text-gray-500 mb-3">{member.position}</p>
            <p className="text-sm text-black">{member.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamCard;
