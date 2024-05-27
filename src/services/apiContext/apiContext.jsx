import { createContext, useContext, useEffect, useState } from "react";

export const APIContext = createContext();

const USERS = [
  {
    UserId: 1,
    UserName: "rmulberry0",
    Email: "jgolden0@artisteer.com",
    Password: "$2a$04$oblSsKwxyIFwmZNeeZ6xV./D00bSrbHJUFrn/ViiRRdI2jqQLCRfu",
    UserType: "Client",
    Gender: "Female",
    Age: 45,
    Specialties: null,
  },
  {
    UserId: 2,
    UserName: "swarne1",
    Email: "dcossins1@networksolutions.com",
    Password: "$2a$04$FDeAbGpXjoiUJDDxfMGkOuonGLzYHHh8npfpp67KazjHNctxJIi2S",
    UserType: "Admin",
    Gender: null,
    Age: null,
    Specialties: null,
  },
  {
    UserId: 3,
    UserName: "hmayberry2",
    Email: "pmclachlan2@vimeo.com",
    Password: "$2a$04$GBnBiz1akUvBI8c6uq4ZmOBh0G4SipQ7J1NvVJF5JR.r25ZWG7ojy",
    UserType: "Client",
    Gender: "Male",
    Age: 80,
    Specialties: null,
  },
  {
    UserId: 4,
    UserName: "ilacelett3",
    Email: "hhambright3@dmoz.org",
    Password: "$2a$04$fyWXOvGaVgbH8I7xrsYuu.aM0hcYYdw14tH8nIyms078MnXgWK9kS",
    UserType: "Client",
    Gender: "Male",
    Age: 24,
    Specialties: null,
  },
  {
    UserId: 5,
    UserName: "acluckie4",
    Email: "mgladhill4@utexas.edu",
    Password: "$2a$04$VSaGzfy26eo4rNrUAwkNSu.FoooRCiP4GZ6UWTi/DbWt/sM1oLYOK",
    UserType: "Barber",
    Gender: null,
    Age: null,
    Specialties: "Hairdresser",
  },
  {
    UserId: 6,
    UserName: "rsaye5",
    Email: "rgurney5@slate.com",
    Password: "$2a$04$vdh/KW8Y5m6x15SAMOMtous6PAftqkHTWDPv/8O3eJzqgfRAHJ.s6",
    UserType: "Client",
    Gender: "Male",
    Age: 92,
    Specialties: null,
  },
  {
    UserId: 7,
    UserName: "icristoferi6",
    Email: "nsilversmidt6@github.com",
    Password: "$2a$04$d34qVlFoKDf8In8DO945Xe.gKu2iS7EAEZcT8XGwvaKNJ2vCzX8ii",
    UserType: "Client",
    Gender: "Male",
    Age: 34,
    Specialties: null,
  },
  {
    UserId: 8,
    UserName: "agoodliffe7",
    Email: "struckett7@hatena.ne.jp",
    Password: "$2a$04$OHtoz/kk5G767cb4JRNHz./GIGV52eVR9HxxjVXYlZARlLeMPjPG.",
    UserType: "Barber",
    Gender: null,
    Age: null,
    Specialties: "Both",
  },
  {
    UserId: 9,
    UserName: "dvoice8",
    Email: "tmilella8@techcrunch.com",
    Password: "$2a$04$dJj5OZzx9JB5KAH6UqY34e//lOd8.0Q5U3XxxQA2rXFzwwC5apS7C",
    UserType: "Admin",
    Gender: null,
    Age: null,
    Specialties: null,
  },
  {
    UserId: 10,
    UserName: "bashworth9",
    Email: "mfollin9@ca.gov",
    Password: "$2a$04$JZF/NCHl2cQI6aN4GgVb9OVDpqI4hiYmHx9SP9RoXBrzN2dnNzXPe",
    UserType: "Barber",
    Gender: null,
    Age: null,
    Specialties: "Colourist",
  },
  {
    UserId: 11,
    UserName: "knaceya",
    Email: "oribbensa@hatena.ne.jp",
    Password: "$2a$04$onDDMKqdTdGlVhXMGGAGNeQ09.eZSfOC3euLQQu4GJ2ulYXgXDeOK",
    UserType: "Admin",
    Gender: null,
    Age: null,
    Specialties: null,
  },
  {
    UserId: 12,
    UserName: "ohackingeb",
    Email: "mavesqueb@biglobe.ne.jp",
    Password: "$2a$04$F/wxrTNqjhPwlhXMQjwQCOOURxCE7jUByMREK.N46NFInMcMCvi9O",
    UserType: "Client",
    Gender: "Male",
    Age: 76,
    Specialties: null,
  },
  {
    UserId: 13,
    UserName: "blecointec",
    Email: "sbroadberec@wp.com",
    Password: "$2a$04$nLjE9J3XrfKLJ5rtYs0tnuK/E1tlOFeygIpz62HwdI21ysbbMT4CC",
    UserType: "Client",
    Gender: "Female",
    Age: 67,
    Specialties: null,
  },
  {
    UserId: 14,
    UserName: "lbertind",
    Email: "asoamed@hud.gov",
    Password: "$2a$04$aAJZVFXgXq8q95Wp1vkQheZNlYEj5O9qyy7hA.z0hM7DHKpSYOn8a",
    UserType: "Barber",
    Gender: null,
    Age: null,
    Specialties: "Colourist",
  },
  {
    UserId: 15,
    UserName: "kretallacke",
    Email: "calfonsettie@google.com.hk",
    Password: "$2a$04$cBX2J61t31DQfrahM35sxOpSqJVJawG7UxrPkip8Wu8K1qKU.zHNi",
    UserType: "Barber",
    Gender: null,
    Age: null,
    Specialties: "Hairdresser",
  },
  {
    UserId: 16,
    UserName: "abrindf",
    Email: "dlovartf@psu.edu",
    Password: "$2a$04$6nJgnAWi8.XUYJ7n025EJ.LjwEi/L00ejL/ENR2K.6Vo.YuyyHjha",
    UserType: "Client",
    Gender: "Male",
    Age: 3,
    Specialties: null,
  },
  {
    UserId: 17,
    UserName: "mmatthewmang",
    Email: "wmedcraftg@china.com.cn",
    Password: "$2a$04$wGYlDD84o1Cx3idRBB9ZFufC6UPKoN35IszTgZv5ZYTeVnFHyB.6i",
    UserType: "Barber",
    Gender: null,
    Age: null,
    Specialties: "Colourist",
  },
  {
    UserId: 18,
    UserName: "rdaughtreyh",
    Email: "mliddonh@de.vu",
    Password: "$2a$04$8RGAKheTWcsmzobUcE7CCOqSq9pyqnfh0XbM0PyO1Lcyw4WwWCSYe",
    UserType: "Client",
    Gender: "Female",
    Age: 5,
    Specialties: null,
  },
  {
    UserId: 19,
    UserName: "ceakinsi",
    Email: "togroganei@cpanel.net",
    Password: "$2a$04$BoXfHcvsVImrGKl6Ym/CXOEtAEpKhhL9ZSTr77EyiqIojGRHCh5dC",
    UserType: "Admin",
    Gender: null,
    Age: null,
    Specialties: null,
  },
  {
    UserId: 20,
    UserName: "ccoughlinj",
    Email: "lkeemsj@so-net.ne.jp",
    Password: "$2a$04$mK9nBNDKgGw7qENZSp4kx.zAkN9pKUXatTVHku/TkkMvOIoBnWBNq",
    UserType: "Admin",
    Gender: null,
    Age: null,
    Specialties: null,
  },
];

export const APIContextProvider = ({ children }) => {
  //   const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState(USERS);
  //   const [appointments, setAppointments] = useState([]);
  //   const [products, setProducts] = useState([]);
  //   const [purchaseHistory, setPurchaseHistory] = useState([]);

  //   const toggleLoading = (value) => {
  //     setIsLoading(value);
  //   };

  //   const catchRejectedFetch = () => {
  //     throw new Error("Ha habido un problema. Intentelo de nuevo más tarde");
  //   };

  //   const putProduct = (product, token) => {
  //     fetch(`https://tuxguitarsapi.onrender.com/products/${product.id}`, {
  //       method: "PUT",
  //       headers: {
  //         "content-type": "application/json",
  //         authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify(product),
  //     })
  //       .then((response) => {
  //         if (response.ok) return response.json();
  //         else
  //           throw new Error("No se pudo editar el producto. Intentelo de nuevo");
  //       }, catchRejectedFetch)
  //       .then(() =>
  //         setProducts((prevProducts) =>
  //           prevProducts.map((p) => (p.id === product.id ? product : p))
  //         )
  //       );
  //   };

  //   // PUT user deberia modificar contraseña, foto de perfil, email o nombre de usuario.
  //   const putUser = async (user, token) => {
  //     await fetch(`https://tuxguitarsapi.onrender.com/users/${user.id}`, {
  //       method: "PUT",
  //       headers: {
  //         "content-type": "application/json",
  //         authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify(user),
  //     })
  //       .then((response) => {
  //         if (response.ok) return response.json();
  //         else
  //           throw new Error("No se pudo editar el usuario. Intentelo de nuevo");
  //       }, catchRejectedFetch)
  //       .then(() => {
  //         setUsers((prevUsers) =>
  //           prevUsers.map((u) => (u.id === user.id ? user : u))
  //         );
  //       });
  //   };

  return (
    <APIContext.Provider
      value={{
        // isLoading,
        // toggleLoading,
        users,
        // setUsers,
        // appointments,
        // setAppointments,
        // products,
        // setProducts,
        // purchaseHistory,
        // setPurchaseHistory,
        // putProduct,
        // putUser,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};
