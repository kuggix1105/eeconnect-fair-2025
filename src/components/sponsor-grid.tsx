
import { SponsorCard } from "@/components/sponsor-card";

// Sample sponsor data
const SPONSORS = [
  {
    id: "1",
    name: "TechCorp",
    tier: "platinum" as const,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
    description: "TechCorp is a global leader in technology solutions for businesses of all sizes. With a focus on innovation, TechCorp has been at the forefront of developing cutting-edge solutions for over 30 years. They provide hardware, software, and consulting services to clients across various industries including healthcare, finance, and manufacturing.",
    website: "https://example.com/techcorp"
  },
  {
    id: "2",
    name: "EnergyWave",
    tier: "gold" as const,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Texas_Instruments_Logo.svg/1024px-Texas_Instruments_Logo.svg.png",
    description: "EnergyWave specializes in renewable energy solutions and smart grid technologies. They work with utilities and energy companies to implement sustainable power systems. Their innovative approach to energy management has helped numerous organizations reduce their carbon footprint while optimizing energy efficiency.",
    website: "https://example.com/energywave"
  },
  {
    id: "3",
    name: "CircuitSystems",
    tier: "gold" as const,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png",
    description: "CircuitSystems designs and manufactures high-performance electronic components for a variety of applications. With expertise in ASIC design and embedded systems, they provide both off-the-shelf and custom solutions to meet specific client needs. Their products are used in industries ranging from automotive to consumer electronics.",
    website: "https://example.com/circuitsystems"
  },
  {
    id: "4",
    name: "DataStream",
    tier: "silver" as const,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Intel_Logo.svg/1280px-Intel_Logo.svg.png",
    description: "DataStream is a data analytics company that helps organizations make sense of complex information. Their software solutions employ advanced algorithms to process large datasets and extract valuable insights. They serve clients in finance, healthcare, and telecommunications sectors.",
    website: "https://example.com/datastream"
  },
  {
    id: "5",
    name: "RoboTech",
    tier: "silver" as const,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1280px-Cisco_logo_blue_2016.svg.png",
    description: "RoboTech develops cutting-edge robotics solutions for industrial automation and research. Their products range from robotic arms for manufacturing to autonomous systems for logistics. They also offer consulting services to help businesses implement robotic solutions efficiently.",
    website: "https://example.com/robotech"
  },
  {
    id: "6",
    name: "CloudSecure",
    tier: "bronze" as const,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Siemens-logo.svg/2560px-Siemens-logo.svg.png",
    description: "CloudSecure provides cloud security solutions to protect organizations' data and applications. Their suite of security products includes firewalls, encryption tools, and intrusion detection systems. They work with companies of all sizes to ensure their cloud environments remain safe from cyber threats.",
    website: "https://example.com/cloudsecure"
  },
  {
    id: "7",
    name: "NanoElectronics",
    tier: "bronze" as const,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
    description: "NanoElectronics specializes in developing miniaturized electronic components for various applications. Their innovative approach to circuit design enables the creation of smaller, more efficient electronic devices. They primarily serve clients in the medical device, wearable technology, and IoT sectors.",
    website: "https://example.com/nanoelectronics"
  },
  {
    id: "8",
    name: "PowerGrid",
    tier: "bronze" as const,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Tesla_Motors_Club.png/800px-Tesla_Motors_Club.png",
    description: "PowerGrid develops solutions for electrical power distribution and management. Their products include smart meters, grid management software, and energy storage systems. They work with utility companies and large industrial clients to optimize power delivery and consumption.",
    website: "https://example.com/powergrid"
  }
];

export function SponsorGrid() {
  // Group sponsors by tier
  const groupedSponsors = {
    platinum: SPONSORS.filter(s => s.tier === 'platinum'),
    gold: SPONSORS.filter(s => s.tier === 'gold'),
    silver: SPONSORS.filter(s => s.tier === 'silver'),
    bronze: SPONSORS.filter(s => s.tier === 'bronze')
  };

  return (
    <div className="space-y-12">
      {/* Platinum Sponsors */}
      {groupedSponsors.platinum.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-6">Platinum Sponsors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {groupedSponsors.platinum.map(sponsor => (
              <SponsorCard key={sponsor.id} {...sponsor} />
            ))}
          </div>
        </div>
      )}
      
      {/* Gold Sponsors */}
      {groupedSponsors.gold.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-6">Gold Sponsors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {groupedSponsors.gold.map(sponsor => (
              <SponsorCard key={sponsor.id} {...sponsor} />
            ))}
          </div>
        </div>
      )}
      
      {/* Silver Sponsors */}
      {groupedSponsors.silver.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-6">Silver Sponsors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {groupedSponsors.silver.map(sponsor => (
              <SponsorCard key={sponsor.id} {...sponsor} />
            ))}
          </div>
        </div>
      )}
      
      {/* Bronze Sponsors */}
      {groupedSponsors.bronze.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-6">Bronze Sponsors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {groupedSponsors.bronze.map(sponsor => (
              <SponsorCard key={sponsor.id} {...sponsor} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
