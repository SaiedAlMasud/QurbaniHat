import { getAllTips } from '@/data/qurbaniTips'
import QurbaniTipsCard from './QurbaniTipsCard';

const QurbaniTipsSection = () => {
    const tipsData = getAllTips();
    
    return (
        <div className="my-15 px-4">  {/* This should work if other containers work */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-green-800 mb-2">
                    Qurbani Tips & Guidelines
                </h1>
                <p className="text-gray-600 max-w-2xl">
                    Essential tips for a blessed and proper Qurbani following Islamic teachings
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 md:mx-10">
                {tipsData.map((tip) => (
                    <QurbaniTipsCard key={tip.id} tip={tip} />
                ))}
            </div>
        </div>
    );
};

export default QurbaniTipsSection;