import React from 'react';

const QurbaniTipsCard = ({tip}) => {
    return (
        <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4">
                <div className="text-4xl mb-3">{tip.icon}</div>
                <h2 className="text-2xl font-bold text-green-800 mb-2">{tip.title}</h2>
                <p className="text-gray-600 mb-4">{tip.description}</p>
            </div>
            
            <div className="space-y-3">
                <h3 className="font-semibold text-lg text-gray-700 flex items-center gap-2">
                    <span className="text-green-600">📝</span>
                    Key Tips:
                </h3>
                <ul className="space-y-2">
                    {tip.tips.map((tipItem, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <span className="text-green-600 font-bold mt-1">•</span>
                            <span className="text-gray-700">{tipItem}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default QurbaniTipsCard;