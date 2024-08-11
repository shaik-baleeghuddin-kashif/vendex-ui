import React from 'react'

interface PageStyleProps {
    children: React.ReactNode;
  }

const PageStyle: React.FC<PageStyleProps> = ({ children }) => {
  return (
    <div className="w-full max-w-full bg-gradient-to-br from-emerald-50 via-cyan-50 to-violet-100 rounded-lg max-h-full ml-48">
        {children}
    </div>
  )
}

export default PageStyle