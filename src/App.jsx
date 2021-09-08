import React from 'react'
import PageContent from './component/pageContent/PageContent'
import PageHeader from './component/pageHeader/PageHeader'

function App() {

  const imageUrl = "./public/images/photo.png"
  return (
          <div className="section-inner start-page-content">
              <PageHeader imageUrl={imageUrl} />
              <PageContent/>
          </div>
  )
}

export default App
