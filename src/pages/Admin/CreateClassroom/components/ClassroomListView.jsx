import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import AddBoxIcon from "@material-ui/icons/AddBox";
import EditBoxIcon from "@mui/icons-material/EditOutlined";
import ClassroomEdit from "../../EditClassroom/Body";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  borderRadius: 12,
  color: theme.palette.text.secondary,
  marginBottom: 5,
  marginRight: 6,
  boxShadow:7
}));

const rows = [createData(1, "初二 (概念科）"), createData(2, "OOP")];

function createData(id, classroom) {
  return {
    id,
    classroom,
  };
}

export default function ClassroomBrowse() {
  const [list, setList] = React.useState(rows);
  const [data, setData] = React.useState();

  const handleAdd = () => {
    setList([
      ...list,
      {
        id: list.length + 1,
        classroom: "abc",
      },
    ]);
  };

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("../EditClassroom", { replace: true });
  };

  const List = ({ list }) => (
    <ul>
      {list.map((item) => (
        <div style={{ display: "flex" }}>
          <li key={item.id}>{item.classroom} </li>
          <Button style={{ marginLeft: "auto" }} onClick={handleEdit}>
            <EditBoxIcon />
            修改/ 查看
          </Button>
        </div>
      ))}
    </ul>
  );

  return (
    <div>
      <Item sx={{boxShadow:7}}>
        <div style={{ display: "flex" }}>
          <Button style={{ marginRight: "auto" }} onClick={handleAdd}>
            {" "}
            <AddBoxIcon />
            开设教室
          </Button>
        </div>
      </Item >
      <div>
        <List list={list} />
      </div>
    </div>
  );
}
