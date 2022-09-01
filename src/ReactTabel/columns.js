export const Columns = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Image",
    accessor: "avatar",
    Cell: ({ value }) => (
      <img
        src={value}
        alt="Images"
        width={35}
        height={35}
        className="bg-dark rounded-circle"
      />
    ),
  },
  {
    Header: "Name",
    id:"first_name",
    accessor: d => `${d.first_name} ${d.last_name}` ,
  },

  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Date Of Birth",
    accessor: "date_of_birth",
  },
  {
    Header: "Country",
    accessor: "country",
  },
];
