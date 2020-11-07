import getMessageTypes from "./components";

const transformData = (value: any[]) => {
  let data: any[] = [];
  value.forEach((item) => {
    data.push({
      ...item,
      component: getMessageTypes(item)
    });
  });
  return data;
};

export { transformData };
