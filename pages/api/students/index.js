import dbConnect from '../../../utils/dbConnect';
import Student from '../../../models/Student';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const students = await Student.find({});

                res.status(200).json({ success: true, data: students })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const student = await Student.create(req.body);

                res.status(201).json({ success: true, data: student })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}