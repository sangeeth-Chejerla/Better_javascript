const abilities = (power, drawback) => {
  return {
    power,
    drawback,
  };
};

const showdown = abilities("Bloodmagic", "Sunlight");

const player = ({ showdown }) => {
  const Demon = {
    Name: "Demon",
    ...showdown,
  };
  return Demon;
};

console.log(player({ showdown }));
