//Usuariosfield
export const Column1 = [
  {
    id: "outlined-dni-number",
    label: "DNI",
    type: "number",
    name: "dni",
    backName: "dni",
    required: "true"
  },
  {
    id: "outlined-correo-email",
    label: "Correo electronico",
    type: "email",
    name: "email",
    backName: "email",
    required: "true"
  },
  {
    id: "outlined-calle-text",
    label: "Calle",
    type: "text",
    name: "street",
    backName: "street",
  },
  {
    id: "outlined-torre-text",
    label: "Torre",
    type: "text",
    name: "tower",
    backName: "tower",
  },
  {
    id: "outlined-localidad-text",
    label: "Localidad",
    type: "text",
    name: "town",
    backName: "town",
  },
  {
    id: "outlined-diasVacaciones-number",
    label: "Dias vacaciones",
    type: "number",
    name: "available_days",
    backName: "available_days",
    required: "true"
  },
];
export const Column2 = [
  {
    id: "outlined-nombre-text",
    label: "Nombre",
    type: "text",
    name: "nombre",
    backName: "name",
    required: "true"
  },
  {
    id: "outlined-apellido-text",
    label: "Apellido",
    type: "text",
    name: "apellido",
    backName: "lastname",
    required: "true"
  },
  {
    id: "outlined-fechaNacimiento-number",
    label: "Fecha de nacimiento",
    type: "date",
    name: "fnacimiento",
    backName: "birth_date",
    required: "true"
  },
  {
    id: "outlined-cuil-text",
    label: "Cuil",
    type: "text",
    name: "cuil",
    backName: "cuil",
    required: "true"
  },
  {
    id: "outlined-telefono-text",
    label: "Telefono",
    type: "number",
    name: "telefono",
    backName: "phone",
    required: "true"
  },
  {
    id: "outlined-calleNumber-number",
    label: "Altura",
    type: "number",
    name: "altura",
    backName: "street_number",
  },
  {
    id: "outlined-piso-number",
    label: "Piso",
    type: "number",
    name: "piso",
    backName: "floor_number",
  },
  {
    id: "outlined-provincia-text",
    label: "Provincia",
    type: "text",
    name: "provincia",
    backName: "state",
  },
];
export const Column3 = [
  {
    id: "outlined-passwordNuevo-pass",
    label: "Password nuevo",
    type: "password",
    name: "password",
    backName: "password",
    required: "true"
  },
  {
    id: "outlined-passwordRepetir-pass",
    label: "Repetir password",
    type: "password",
    name: "password",
    backName: "password",
    required: "true"
  },
  {
    id: "outlined-fechaIngreso-number",
    label: "Fecha de ingreso",
    type: "date",
    name: "createdAt",
    backName: "createdAt",
  },
  {
    id: "outlined-codigoPostal-number",
    label: "Codigo postal",
    type: "number",
    name: "postal_code",
    backName: "postal_code",
  },
  {
    id: "outlined-departamento-text",
    label: "Departamento",
    type: "text",
    name: "apartment",
    backName: "apartment",
  },
  {
    id: "outlined-pais-text",
    label: "Pais",
    type: "text",
    name: "country",
    backName: "country",
  },
];

//navbar
export const MenuDesplegable1 = {
  id: "menu-desplegable1",
  values: [
    { name: "Dashboard", link: "/" },
    { name: "Crear licencia", link: "/licencia" },
    { name: "Administrar usuarios", link: "/admin-usuarios" },
    { name: "Calendario", link: "/calendario" },
  ],
};
export const MenuDesplegable2 = {
  id: "menu-desplegable1",
  values: [{ name: "Esto es una notificación" }],
};
export const MenuDesplegable3 = {
  id: "menu-desplegable1",
  values: [
    { name: "Mi perfil", link: "/perfil" },
    { name: "Cerrar sesión", link: "/", userLogOut: true },
  ],
};

export const diasYferiadosNoL = [
  "2023-01-01",
  "2023-02-27",
  "2023-03-24",
  "2023-04-14",
  "2023-05-01",
  "2023-05-25",
  "2023-06-16",
  "2023-06-19",
  "2023-07-08",
  "2023-07-09",
  "2023-07-17",
  "2023-08-15",
  "2023-10-09",
  "2023-11-20",
  "2023-12-08",
  "2023-12-25",
  "2023-12-29",
];
