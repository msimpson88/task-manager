require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("5e6eef48f8c675049f16889d")
//     .then(() => {
//         return Task.countDocuments({ completed: false });
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(e => {
//         console.log(e);
//     });

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count
}

deleteTaskAndCount("5e6eca61988cd903600a8d2b").then((count) => {
    console.log(count);
}).catch((e) => {
    console.log('e', e)
})