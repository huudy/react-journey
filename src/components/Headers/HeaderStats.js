import React from 'react';

import CardStats from 'components/Cards/CardStats.js';

import bgPic from 'assets/img/cool-bg.png';

export default function HeaderStats() {
	return (
		<>
			{/* Header */}
			<div
				className="relative bg-blue-600 md:pt-32 pb-32 pt-12"
				style={{
					backgroundImage: 'url(' + bgPic + ')',
				}}
			>
				<div className="px-4 md:px-10 mx-auto w-full">
					<div>
						{/* Card stats */}
						<div className="flex flex-wrap">
							<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
								<CardStats
									statSubtitle="ETHEREUM"
									statTitle="350,897"
									statArrow="up"
									statPercent="3.48"
									statPercentColor="text-green-500"
									statDescripiron="Since last month"
									statIconName="fab fa-ethereum"
									statIconColor="bg-red-500"
								/>
							</div>
							<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
								<CardStats
									statSubtitle="BITCOIN"
									statTitle="2,356"
									statArrow="down"
									statPercent="3.48"
									statPercentColor="text-red-500"
									statDescripiron="Since last week"
									statIconName="fab fa-btc"
									statIconColor="bg-orange-500"
								/>
							</div>
							<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
								<CardStats
									statSubtitle="EOS"
									statTitle="924"
									statArrow="down"
									statPercent="1.10"
									statPercentColor="text-orange-500"
									statDescripiron="Since yesterday"
									statIconName="fas fa-users"
									statIconColor="bg-pink-500"
								/>
							</div>
							<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
								<CardStats
									statSubtitle="YFI"
									statTitle="49,65%"
									statArrow="up"
									statPercent="12"
									statPercentColor="text-green-500"
									statDescripiron="Since last month"
									statIconName="fas fa-percent"
									statIconColor="bg-blue-500"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
