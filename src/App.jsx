import React from 'react'
import PageContent from './component/pageContent/PageContent'
import PageHeader from './component/pageHeader/PageHeader'

function App() {
  const proimeryColor = "#ff070753";
  const imageUrl = "./public/images/photo.png";
  const infolist = [
    {
        title: "Age",
        value: 29
    },
    {
        title: "Residence",
        value: "USA"
    },
    {
        title: "Adress",
        value: "Los Angeles"
    },
    {
        title: "Email",
        value: "email@example.com",
        url: "mailto:email@example.com"
    },
    {
        title: "PageHeader",
        value: "Los Angeles"
    },
    {
        title: "PageHeader",
        value: "Los Angeles"
    },
  ]
  return (
          <div className="section-inner start-page-content">
              <PageHeader imageUrl={imageUrl} name={"mahdi moras"} bgColor={proimeryColor} />
              <PageContent color={proimeryColor} infolist={infolist}/>
          </div>
  )
}

export default App
