import React from 'react'
import PageContent from './component/pageContent/PageContent'
import PageHeader from './component/pageHeader/PageHeader'

function App() {
  const proimeryColor = "#07e2ffc7";
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

  const links = [
    {
      url: "#",
      style: "fa-twitter"
    },
    {
      url: "#",
      style: "fa-facebook"
    },
    {
      url: "#",
      style: "fa-instagram"
    }
  ]
  return (
    <div className="section-inner start-page-content">
      <PageHeader links={links} imageUrl={imageUrl} name={"mahdi moras"} bgColor={proimeryColor} />
      <PageContent color={proimeryColor} infolist={infolist} />
    </div>
  )
}

export default App
