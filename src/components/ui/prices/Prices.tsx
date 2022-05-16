import "./prices.scss";
import Pricetable from "../../ux/pricetable/Pricetable";
import Title from "../../ux/title/Title";
import { SiWhatsapp, SiWordpress, SiShopify } from "react-icons/si";
import { HiCode } from "react-icons/hi";
import Paragraph from "../../ux/paragraph/Paragraph";
export default function Prices() {
  const plans = [
    {
      id: 0,
      icon: <SiWordpress />,
      name: "Wordpress",
      description:
        "Perfect voor portfolio websites en front-pages, maar door een breed scala aan plugins kan de website net zo geavanceerd worden als je zelf wil!",
    },
    {
      id: 1,
      icon: <SiShopify />,
      name: "Ecommerce",
      description:
        "Hulp bij: de opzet van een shopify website, het integreren van affiliate links, volledig custom design van de front-end, of juist hulp achter de schermen. Het kan allemaal!",
    },
    {
      id: 2,
      icon: <HiCode />,
      name: "Custom + app",
      description:
        "Liever een op maat gemaakte website met eventueel ook een mobile-app? Één die het merk uitstraalt, bezoekers captiveert en volledig naar jouw smaak is ingericht? Dan sluit dit volledig aan op elke wens mogelijk!",
    },
  ];
  return (
    <>
      <div className="prices">
        <Title content={"Wat STCKD biedt"} size={3} id={""} />
        <Paragraph size={1.3} centerText>
          STCKD biedt 3 web design services. Elke service is gericht op een
          specifieke use-case, maar wat de klus ook mag zijn, één van de
          services zal een perfect fit zijn!
          <br />
          Kies gerust één van de onderstaande services en neem contact op met je
          wensen om binnen 24uur <b>vrijblijvend</b> een offerte te ontvangen!
        </Paragraph>
        <div className="pricetables">
          {plans.map(({ id, icon, name, description }) => {
            return (
              <Pricetable
                key={id}
                icon={icon}
                title={name}
                description={description}
                link={"#contact"}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
