import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './Features.css'
export default function Features() {
  return (
    <div className='Features'>
      <div className="FeatureItem">
        <span className="FeatureTitel">Revanue</span>
        <div className="FeatureContainer">
          <span className="FeatureMony">$2,225</span>
          <span className="FeatureRate">-11.4 <ArrowDownwardIcon className='FeaturesIcon negative'/>

          </span>
        </div>
        <span className="FeaturesSub">Comperd to last Month</span>
      </div>
      <div className="FeatureItem">
        <span className="FeatureTitel">Sales</span>
        <div className="FeatureContainer">
          <span className="FeatureMony">$4,415</span>
          <span className="FeatureRate">-1.4 <ArrowDownwardIcon className='FeaturesIcon negative'/>

          </span>
        </div>
        <span className="FeaturesSub">Comperd to last Month</span>
      </div>
      <div className="FeatureItem">
        <span className="FeatureTitel">Cost</span>
        <div className="FeatureContainer">
          <span className="FeatureMony">$2,415</span>
          <span className="FeatureRate">+2.4 <ArrowUpwardIcon className='FeaturesIcon '/>

          </span>
        </div>
        <span className="FeaturesSub">Comperd to last Month</span>
      </div>
    </div>
  )
}
