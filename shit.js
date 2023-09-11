const [isActive, setActive] = useState(true);
const [isClicked, setClicked] = useState(false);

console.log(props.setter);




useEffect(() => {
  if (props.classData === "active") {
    setActive(true);
  }
  if (props.classData === "disabled") {
    setActive(false);
  }
}, [props.classData]);
