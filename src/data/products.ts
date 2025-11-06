
export type Product = {
    name: string;
    slug: string;
    category: "Panels" | "Batteries" | "Inverters" | "Accessories" | "Portable";
    description: string;
    longDescription?: string;
    price: string;
    features: string[];
    specifications?: { label: string; value: string }[];
    whatsInTheBox?: string[];
    warranty?: string;
    image: string;
    aiHint: string;
  };
  
  export const PRODUCTS: Product[] = [
    {
      name: "545W Solar Panels",
      slug: "545w-solar-panels",
      category: "Panels",
      description: "High-efficiency 545W solar panels to power your system.",
      longDescription: "These monocrystalline solar panels offer superior performance and durability. With a high power output of 545W, they are an excellent choice for residential and commercial solar projects, ensuring you get the most energy from your available roof space. The robust design is engineered to withstand harsh weather conditions.",
      price: "K 2,200.00",
      features: ["545W High Power Output", "Monocrystalline Cells", "High Module Efficiency", "Durable and Weather-Resistant"],
      whatsInTheBox: ["1 x 545W Solar Panel", "Product Manual"],
      warranty: "25-Year Linear Performance Warranty, 12-Year Product Warranty.",
      image: "/images/products/panels.png",
      aiHint: "solar panels"
    },
    {
      name: "Greenrich UP5000 Lithium Battery",
      slug: "greenrich-up5000-lithium-battery",
      category: "Batteries",
      description: "Reliable and efficient 5kWh lithium battery from Greenrich, perfect for residential solar systems.",
      longDescription: "The Greenrich UP5000 is a top-tier 48V LFP battery module. It's designed for reliability and a long service life, making it a perfect match for residential energy storage systems. Its modular design allows for easy expansion.",
      price: "K 19,394.00",
      features: ["4.8kWh Nominal Energy", "51.2V System", "100Ah Capacity", "Long Cycle Life (6000+ cycles)", "CAN/RS485 Communication"],
      whatsInTheBox: ["1 x Greenrich UP5000 Battery Module", "1 x Inter-battery connection cable set", "1 x User Manual"],
      warranty: "10-Year Manufacturer's Warranty.",
      image: "/images/products/UP5000.png",
      aiHint: "solar battery"
    },
    {
      name: "Greenrich WM5000 Wall Mounting Lithium Battery",
      slug: "greenrich-wm5000-wall-mounting-lithium-battery",
      category: "Batteries",
      description: "A space-saving wall-mountable 5kWh lithium battery. Sleek design and powerful performance.",
      price: "K 20,606.00",
      features: ["4.8kWh Nominal Energy", "Wall-Mount Design", "Integrated BMS", "Parallel Connection up to 16 units"],
      whatsInTheBox: ["1 x Greenrich WM5000 Battery", "1 x Wall mounting bracket", "Communication Cables", "User Manual"],
      warranty: "10-Year Manufacturer's Warranty.",
      image: "/images/products/Battery.png",
      aiHint: "wall battery"
    },
    {
      name: "Greenrich UP6100 Lithium Battery",
      slug: "greenrich-up6100-lithium-battery",
      category: "Batteries",
      description: "A higher capacity 6.1kWh lithium battery for more demanding energy needs.",
      price: "K 23,939.00",
      features: ["6.1kWh Nominal Energy", "51.2V System", "120Ah Capacity", "High-Performance Cells"],
      image: "/images/products/UP6100.png",
      aiHint: "solar battery"
    },
    {
      name: "SSRE EU10K 10kWh Battery",
      slug: "ssre-eu10k-10kwh-battery",
      category: "Batteries",
      description: "A high-capacity 10kWh battery from SSRE, ideal for larger homes and small businesses.",
      price: "K 37,878.00",
      features: ["10.24kWh Nominal Energy", "51.2V System", "200Ah Capacity", "Robust and reliable"],
      image: "/images/products/10k.png",
      aiHint: "large battery"
    },
    {
      name: "Growatt SPF5000 Inverter",
      slug: "growatt-spf5000-inverter",
      category: "Inverters",
      description: "A reliable 5kW off-grid inverter from Growatt, known for its robust performance.",
      price: "K 10,600.00",
      features: ["5kW Power Output", "48V System", "High PV input voltage", "Built-in MPPT controller", "Parallel capability up to 6 units"],
      whatsInTheBox: ["1 x Growatt SPF5000 Inverter", "1 x User Manual & Installation Guide", "Wi-Fi Dongle (optional)"],
      warranty: "5-Year Standard Manufacturer Warranty.",
      image: "/images/products/growatt.png",
      aiHint: "power inverter"
    },
    {
      name: "Greenrich Hybrid Inverter 6kW",
      slug: "greenrich-hybrid-inverter-6kw",
      category: "Inverters",
      description: "A powerful 6kW hybrid inverter from Greenrich, perfect for residential and small commercial use.",
      price: "K 26,000.00",
      features: ["6kW Hybrid Inverter", "48V System", "Pure Sine Wave", "Parallel capability"],
      image: "/images/products/Greenrich inverter.jpg",
      aiHint: "hybrid inverter"
    },
    {
      name: "Greenrich Hybrid Inverter 8kW",
      slug: "greenrich-hybrid-inverter-8kw",
      category: "Inverters",
      description: "An 8kW hybrid inverter from Greenrich, offering high performance for larger systems.",
      price: "K 39,500.00",
      features: ["8kW Hybrid Inverter", "48V System", "Advanced MPPT tracking", "Grid-tie with backup"],
      image: "/images/products/Greenrich inverter.jpg",
      aiHint: "large inverter"
    },
    {
        name: "KAPA Energie Q300 Portable Power Station",
        slug: "kapa-energie-q300-portable-power-station",
        category: "Portable",
        description: "Compact and lightweight power station for camping and emergencies. Not suitable for heating appliances.",
        price: "K 4,303.43",
        features: [
            "300W Pure Sine Wave Inverter",
            "Multiple Charging Options (AC, Solar, Car)",
            "Lightweight & Compact Design",
            "Informative LCD Display",
            "Built-in Safety Protections",
            "Not suitable for heating appliances"
        ],
        specifications: [
            { label: "Rated Capacity", value: "313.17Wh" },
            { label: "Inverter", value: "Pure Sine Wave" },
            { label: "AC Output", value: "2x Outlets (300W Total)" },
            { label: "USB-A Output", value: "3x Ports (5V 2.4A)" },
            { label: "USB-C Output", value: "1x Port (PD 60W max)" },
            { label: "Car Port Output", value: "12V (9V-12.6V, 10A max)" },
            { label: "AC Input", value: "Via AC/DC Adapter (230VAC, 36W)" },
            { label: "Solar/DC Input", value: "DC (5.5mm) 5V-24V/2A or USB-C (60W max)" },
            { label: "Size", value: "145 x 212 x 215 mm" },
            { label: "Weight", value: "4 kg" },
        ],
        whatsInTheBox: ["1x KAPA Energie Q300", "1x AC/DC Home Charger", "1x User Manual"],
        image: "/images/products/Q300.png",
        aiHint: "portable power"
    },
    {
      name: "KAPA Energie Q600 Portable Power Station",
      slug: "kapa-energie-q600-portable-power-station",
      category: "Portable",
      description: "A versatile and powerful portable power station for all your outdoor adventures.",
      price: "K 7,620.66",
      features: [
        "600W Pure Sine Wave Inverter",
        "Multiple Output Ports (AC, DC, USB)",
        "Fast Solar Charging (200W Max)",
        "Clear LCD Display",
        "Portable and Durable Design"
      ],
      specifications: [
        { label: "Rated Capacity", value: "607Wh" },
        { label: "Inverter", value: "Pure Sine Wave" },
        { label: "AC Output", value: "2x Outlets (600W, 1200W Surge)" },
        { label: "USB-A Output", value: "3x Ports (5V 2.4A)" },
        { label: "USB-C Output", value: "1x Port (PD 60W max)" },
        { label: "Car Port Output", value: "12V (9V-12.6V, 10A max)" },
        { label: "AC Input", value: "80W" },
        { label: "Solar/DC Input", value: "DC (8mm) 10-30V / 200W Max / 10A Max" },
        { label: "Size", value: "200 x 200 x 250 mm" },
        { label: "Weight", value: "10.5 kg" },
      ],
      whatsInTheBox: ["1x KAPA Energie Q600", "AC charging cord", "1x User Manual", "MC4 adapter"],
      image: "/images/products/Q600.png",
      aiHint: "portable power"
    },
    {
      name: "KAPA Energie Q2400 Portable Power Station",
      slug: "kapa-energie-q2400-portable-power-station",
      category: "Portable",
      description: "High-capacity power station to run demanding appliances and tools off-grid.",
      price: "K 26,896.44",
      features: ["2400W High Power Output", "Large Battery Capacity", "UPS Functionality", "Pure Sine Wave"],
      image: "/images/products/Q2400.png",
      aiHint: "large powerstation"
    },
    {
      name: "Kapa Energie-Li 1000",
      slug: "kapa-energie-li-1000",
      category: "Portable",
      description: "A reliable lithium-based portable power solution with a built-in inverter.",
      price: "K 15,689.59",
      features: [
        "All-in-one solution with integrated inverter and battery",
        "Max 1500 cycles lithium battery with a 5 years service life",
        "Can be activated by mains or solar",
        "AVR mains input, battery charging, and UPS function",
        "Convenient 5VDC-USB and 12VDC output ports",
        "MPPT Controller for >15-20% improved charging efficiency",
        "Overcharge and discharge protection for longer battery life",
        "Safe and reliable with intelligent exhaust fan control",
        "Overall automatic protection and alarms (AC overload, short circuit, etc.)"
      ],
      specifications: [
        { label: "Battery Type", value: "Lithium" },
        { label: "Lithium Battery Rated Voltage", value: "25.9V (7S)" },
        { label: "Built-in Lithium Battery Specs", value: "1295WH (25.9V-50AH)" },
        { label: "Rated Power", value: "1000W" },
        { label: "Input Voltage Range", value: "145VAC-275VAC" },
        { label: "Input Frequency", value: "46HZ-64HZ" },
        { label: "Output Voltage", value: "230VAC" },
        { label: "Output Frequency", value: "50HZ/60HZ" },
        { label: "Output Wave", value: "Pure Sinewave" },
        { label: "Max. PV Power", value: "820W" },
        { label: "Range Of Charging Voltage", value: "34-100VDC" },
        { label: "Rated Charge Current", value: "30A-MPPT" },
        { label: "Voltage for Floating Charge", value: "29.0VDC" },
        { label: "Low Voltage Recovery Voltage", value: "27.3VDC" },
        { label: "Low Voltage Protection Voltage", value: "21.7VDC" },
        { label: "5VDC USB Output", value: "2 PCS MAX 2A" },
        { label: "12VDC Output Ports", value: "2 PCS MAX 2A" },
        { label: "Protection Grade", value: "IP21" },
        { label: "Display", value: "LCD+LED" },
        { label: "Battery Activation", value: "Mains or Solar Input" },
        { label: "External Size (W*D*H)", value: "430 x 230 x 330mm" },
        { label: "Package Size (W*D*H)", value: "512 x 310 x 405mm" },
        { label: "Gross Weight", value: "23kg" },
        { label: "Capacity", value: "1295WH" },
        { label: "Battery Life", value: "1500 Cycles" },
        { label: "Appliances", value: "No Heating Appliances" },
      ],
      image: "/images/products/Kapa+Li.png",
      aiHint: "power station"
    },
    {
      name: "Kapa Engeries 1000 (Gel Battery)",
      slug: "kapa-energies-1000-gel-battery",
      category: "Portable",
      description: "An affordable 1000W portable power station with a durable Gel battery.",
      price: "K 10,086.16",
      features: ["1000W Inverter", "Deep Cycle Gel Battery", "Multiple Outputs", "Cost-Effective"],
      image: "/images/products/gel.jpg",
      aiHint: "power station"
    },
    {
      name: "PV Combiner Box 5kW",
      slug: "pv-combiner-box-5kw",
      category: "Accessories",
      description: "Essential protection for a 5kW solar array.",
      price: "K 5,603.18",
      features: ["Suits 5kW systems", "Overcurrent & Surge Protection", "Weatherproof Enclosure", "Easy Installation"],
      image: "/images/products/pv.jpg",
      aiHint: "electrical box"
    },
    {
      name: "PV Combiner Box 6kW",
      slug: "pv-combiner-box-6kw",
      category: "Accessories",
      description: "Essential protection for a 6kW solar array.",
      price: "K 5,603.18",
      features: ["Suits 6kW systems", "Overcurrent & Surge Protection", "Weatherproof Enclosure", "Easy Installation"],
      image: "/images/products/pv.jpg",
      aiHint: "electrical box"
    },
    {
      name: "PV Combiner box 8kw",
      slug: "pv-combiner-box-8kw",
      category: "Accessories",
      description: "Essential protection for an 8kW solar array. Note: Typo from user, assuming 'PC' is 'PV'.",
      price: "K 5,603.18",
      features: ["Suits 8kW systems", "Overcurrent & Surge Protection", "Weatherproof Enclosure", "Easy Installation"],
      image: "/images/products/pv.jpg",
      aiHint: "electrical box"
    },
    {
      name: "DB Combiner Box 5kW",
      slug: "db-combiner-box-5kw",
      category: "Accessories",
      description: "Distribution board combiner box for 5kW systems.",
      price: "K 5,759.98",
      features: ["Suits 5kW systems", "AC/DC Protection", "Circuit Breakers Included", "Organized Wiring"],
      image: "/images/products/combiner-box1.jpeg",
      aiHint: "circuit breaker"
    },
    {
      name: "DB Combiner Box 6kW",
      slug: "db-combiner-box-6kw",
      category: "Accessories",
      description: "Distribution board combiner box for 6kW systems.",
      price: "K 5,759.98",
      features: ["Suits 6kW systems", "AC/DC Protection", "Circuit Breakers Included", "Organized Wiring"],
      image: "/images/products/combiner-box1.jpeg",
      aiHint: "circuit breaker"
    },
    {
      name: "DB Combiner Box 8KW",
      slug: "db-combiner-box-8kw",
      category: "Accessories",
      description: "Distribution board combiner box for 8kW systems.",
      price: "K 5,759.98",
      features: ["Suits 8kW systems", "AC/DC Protection", "Circuit Breakers Included", "Organized Wiring"],
      image: "/images/products/combiner-box1.jpeg",
      aiHint: "circuit breaker"
    },
    {
      name: "Battery Cable with Lug",
      slug: "battery-cable-with-lug",
      category: "Accessories",
      description: "High-quality copper cable with pre-attached lugs for secure battery connections.",
      price: "K 1,542.39",
      features: ["Flexible Copper Wire", "Corrosion-Resistant Lugs", "Available in various lengths", "Ensures minimal power loss"],
      image: "/images/products/bat with lugs.png",
      aiHint: "copper cable"
    },
    {
      name: "Disconnect Box 160A 48VDC",
      slug: "disconnect-box-160a-48vdc",
      category: "Accessories",
      description: "Safety disconnect switch for your 48V battery system.",
      price: "K 1,679.99",
      features: ["160A Rating", "48V DC Compatible", "Lockable Handle", "Essential Safety Device"],
      image: "/images/products/disconnector box.png",
      aiHint: "switch box"
    },
    {
      name: "Riken Fuse 160A",
      slug: "riken-fuse-160a",
      category: "Accessories",
      description: "Reliable 160A fuse for protecting your solar components.",
      price: "K 169.60",
      features: ["160A Current Rating", "High-quality construction", "Protects against overcurrents", "Essential for system safety"],
      image: "/images/products/fuse.png",
      aiHint: "electrical fuse"
    },
    {
      name: "IBR / CORR / HARVEY - 4P - MOUNTING STRUCTURE",
      slug: "ibr-corr-harvey-4p-mounting-structure",
      category: "Accessories",
      description: "Mounting structure for 4 panels on IBR, Corrugated, or Harvey tile roofs.",
      price: "K 2,815.99",
      features: ["For 4 Panels", "Suits metal sheet roofs", "Durable Aluminum", "Weather Resistant"],
      image: "/images/products/ibr.jpg",
      aiHint: "metal rack"
    },
    {
      name: "TILE - 4P - MOUNTING STRUCTURE",
      slug: "tile-4p-mounting-structure",
      category: "Accessories",
      description: "Specialized mounting structure for 4 panels on tile roofs.",
      price: "K 4,614.38",
      features: ["For 4 Panels", "Designed for tile roofs", "Secure and Reliable", "Prevents roof damage"],
      image: "/images/products/tile-roof-mount.jpg",
      aiHint: "roof mount"
    },
    {
      name: "200M-BLACK - 6mm PV Cable",
      slug: "200m-black-6mm-pv-cable",
      category: "Accessories",
      description: "200-meter roll of black 6mm solar PV cable.",
      price: "K 5,605.20",
      features: ["200m Length", "6mm Gauge", "UV Resistant", "Double Insulated"],
      image: "/images/products/pv black.jpeg",
      aiHint: "black wire"
    },
    {
      name: "200M RED - 6mm PV Cable",
      slug: "200m-red-6mm-pv-cable",
      category: "Accessories",
      description: "200-meter roll of red 6mm solar PV cable.",
      price: "K 5,605.20",
      features: ["200m Length", "6mm Gauge", "UV Resistant", "Double Insulated"],
      image: "/images/products/pv red.jpg",
      aiHint: "red wire"
    },
    {
      name: "1M-PV Cable-RED Per Meter",
      slug: "1m-pv-cable-red-per-meter",
      category: "Accessories",
      description: "Red 6mm solar PV cable sold by the meter.",
      price: "K 35.00",
      features: ["Sold Per Meter", "6mm Gauge", "UV Resistant", "For custom lengths"],
      image: "/images/products/1m red.jpeg",
      aiHint: "red wire"
    },
    {
      name: "1M- PV Cable-Black Per Meter",
      slug: "1m-pv-cable-black-per-meter",
      category: "Accessories",
      description: "Black 6mm solar PV cable sold by the meter.",
      price: "K 35.00",
      features: ["Sold Per Meter", "6mm Gauge", "UV Resistant", "For custom lengths"],
      image: "/images/products/1m black.png",
      aiHint: "black wire"
    },
    {
      name: "MC4 Male & Female Connector",
      slug: "mc4-male-female-connector",
      category: "Accessories",
      description: "Standard MC4 connectors for secure, weatherproof PV cable connections.",
      price: "K 35.20",
      features: ["Male & Female Pair", "IP67 Waterproof", "Easy to install", "Universal compatibility"],
      image: "/images/products/mc4-set.jpg",
      aiHint: "electrical connector"
    },
    {
      name: "Eclipse Wall Mount Steel Bracket",
      slug: "eclipse-wall-mount-steel-bracket",
      category: "Accessories",
      description: "Sturdy steel wall mounting bracket for batteries or inverters.",
      price: "K 480.00",
      features: ["Heavy-duty Steel", "Wall Mountable", "Saves floor space", "Durable powder coating"],
      image: "/images/products/brackets.jpg",
      aiHint: "metal bracket"
    },
  {
      name: "SSRE Cable - Battery to Battery",
      slug: "ssre-cable-battery-to-battery",
      category: "Accessories",
      description: "Short cable for safely connecting SSRE batteries in parallel.",
      price: "K 2,398.39",
      features: ["For Battery Interconnection", "Proper Gauge", "Pre-crimped Lugs", "Ensures safe connection"],
      image: "/images/products/ssre bat.jpeg",
      aiHint: "short cable"
  },
  {
      name: "SSRE Cable Kit with lugs",
      slug: "ssre-cable-kit-with-lugs",
      category: "Accessories",
      description: "Complete cable kit for connecting your SSRE battery bank to an inverter.",
      price: "K 3,013.20",
      features: ["Complete Kit", "Inverter to Battery", "Includes Lugs", "Simplifies Installation"],
      image: "/images/products/ssre kit.jpeg",
      aiHint: "cable kit"
    }
  ];
  
