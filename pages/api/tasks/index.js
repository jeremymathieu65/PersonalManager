import { ToDoList } from "../../../data";

export default function getTasks(req, res) {
    return res.status(200).json(ToDoList)
}