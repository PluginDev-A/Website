import "./prices.scss";
import Pricetable from "../../ux/pricetable/Pricetable";
import Title from "../../ux/title/Title";

export default function Prices() {
  const plans = [
    {
      id: 0,
      name: "newbie pakket",
      price: 239,
      pages: 5,
      revisions: 2,
      delivery: 3,
    },
    {
      id: 1,
      name: "compleet pakket",
      price: 469,
      pages: 7,
      revisions: 4,
      delivery: 3,
    },
    {
      id: 2,
      name: "ultra pakket",
      price: 849,
      pages: 15,
      revisions: 'unlimited',
      delivery: 'variabel',
    },
  ];
  return (
    <>
      <div className="prices">
        <Title content={"Website pakketten"} size={3} id={''} />
        <div className="pricetables">
          {plans.map(
            ({ id, name, price, pages, revisions, delivery}) => {
              return (
                <Pricetable
                  key={id}
                  title={name}
                  price={price}
                  pages={pages}
                  revisions={revisions}
                  delivery={delivery}
                  ncnp={''}
                  link={"#"}
                />
              );
            }
          )}
        </div>
      </div>
    </>
  );
}
