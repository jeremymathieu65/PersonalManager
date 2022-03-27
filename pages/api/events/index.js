import { events} from "../../../data";

export default function getEvents(req, res) {
    return res.status(200).json(events)
}