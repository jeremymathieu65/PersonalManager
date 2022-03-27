import { Diet } from "../../../data";

export default function getDiet(req, res) {
    return res.status(200).json(Diet)
}