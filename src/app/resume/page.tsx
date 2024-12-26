import React from 'react'

import { cn } from '@/lib/utils'

const ResumePage = () => {
  return (
    <div className={cn('introduce-section min-h-screen')}>
      <div className="mx-10 flex items-center justify-center self-center">
        <div
          className="m-5 lg:m-40"
          style={{
            position: 'relative',
            width: '100%',
            height: '0',
            paddingTop: '141.4286%',
            paddingBottom: '48px',
            marginTop: '10em',
            marginBottom: '0.9em',
            overflow: 'hidden',
            borderRadius: '8px',
            willChange: 'transform',
          }}
        >
          <iframe
            loading="lazy"
            style={{
              position: 'absolute',
              width: '100%',
              height: '80%',
              top: '0',
              left: '0',
              border: 'none',
              padding: '0',
              margin: '0',
            }}
            src="https://www.canva.com/design/DAGY-L5frG4/vhh-Zn2Xep2C38KKB4P8Bw/view?embed"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default ResumePage
