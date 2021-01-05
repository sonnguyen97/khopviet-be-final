const Appointment = require('../models/Appointment');
const CONSTANT = require('../constant/constant');

module.exports = {
    create: async(res) => {
        try {
            return await Appointment.create({
                name: res.name,
                email: res.email,
                category_id: res.category_id,
                phone_number: res.phone_number,
                state: CONSTANT.PENDING
            })
        } catch (error) {
            return error
        }

    }
}