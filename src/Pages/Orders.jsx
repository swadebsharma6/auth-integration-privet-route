import { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);
  return (
    <>
      <h2 className="text-3xl text-center text-secondary py-4 font-bold">
        Your orders: {orders.length}
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>
                  <label>Sl</label>
                </th>
                <th>Name</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            {orders.map((order, idx) => (
              <tbody key={order.id}>
                <tr>
                  <th>
                    <label>{idx + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={order.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{order.name}</div>
                      </div>
                    </div>
                  </td>
                  <td> ${order.price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">Checkout</button>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default Orders;
