import { TbMessageCircle ,TbMap2 ,TbDeviceMobile, TbBrandFacebook ,TbBrandLinkedin ,TbBrandX} from "react-icons/tb";
function Aside() {
  const contactInfo = [
    {
      id: 0,
      icon: TbMessageCircle,
      title: "Contact",
      description: "Get in touch with us",
      action: "info@example.com",
    },
    {
      id: 1,
      icon: TbMap2,
      title: "Visit us",
      description: "Come say hello at our office",
      action: "100 Main Street, New York, NY 10018",
    },
    {
      id: 2,
      icon: TbDeviceMobile,
      title: "Call us",
      description: "Call us anytime",
      action: "(123) 456-7890",
    },
  ];
  return (
  <div>
      <TbMessageCircle size="30" />
      <TbMap2 size="30" />
      <TbDeviceMobile size="30" />
      <TbBrandFacebook size="30" />
      <TbBrandLinkedin size="30" />
      <TbBrandX size="30" />
  </div >
  )
}

export default Aside;