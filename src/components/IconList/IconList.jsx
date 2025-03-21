import { CheckCircle } from 'lucide-react';

const items = [
  'OpenTrench',
  'MissileBore',
  'Directional & Drill',
  'MicroTrench'
];

export default function IconList() {
  return (
    <div className='container mx-auto flex-grow p-4'>
      <div className="p-6 bg-white rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-[#17254E]">Installation Methods:</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="text-green-500 mr-3">
                <CheckCircle size={24} />
              </span>
              <span className="text-[#17254E] font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
