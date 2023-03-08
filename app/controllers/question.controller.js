const db = require('../models');
const Question = db.question;

// Create and Save a new daet
exports.create = (req, res) => {
  // Create a data

  const question = new Question({
    type: req.body.type ? req.body.type : 'Marked Questions',
    courses: req.body.courses ? req.body.courses : 'Antomie',
    subject: req.body.subject ? req.body.subject : 'Microbiology',
    systems: req.body.systems ? req.body.systems : 'Dermatology',
    topic: req.body.topic ? req.body.topic : 'Bacteriology',
    totalPoint: req.body.totalPoint ? req.body.totalPoint : 0,
    question: [...data],
  });
  // Save locatins in the database
  question
    .save(question)
    .then((data) => {
      res.send(data);
      console.log('Question A new Cash');
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Cash',
      });
    });
};

// Retrieve all calenders from the database.
exports.findAll = (req, res) => {
  Question.find()
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Cashs.......',
      });
    });
};

//filtring
exports.findone = (req, res) => {
  const query = {
    type: { $in: ['Marked Questions2'] },
    courses: { $in: ['Antomie'] },
    subject: { $in: ['Microbiology2'] },
  };
  Question.find(query)
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Cashs.......',
      });
    });
};

// Retrieve all calenders from the database.
exports.insertMany = (req, res) => {
  Question.insertMany([
    {
      type: 'Marked Questions2',
      courses: 'Antomie',
      subject: 'Microbiology2',
      systems: 'Dermatology2',
      topic: 'Bacteriology2',
      totalPoint: 12,
      question: [
        {
          Answer1: 'Answer12',
          Answer2: 'Answer22',
          Answer3: 'Answer33',
          Answer4: 'Answer44',
          Answer5: 'Answer55',
          Answer6: '6',
          Answer: 'Answer56',
          Answer: 'Answer56',
          Answer: 'Answer56',
          Answer: 'Answer56',
          questionText: 'questionText 2',
          definition: 'definition 2',
        },
      ],
    },
    {
      type: 'Marked Questions3',
      courses: 'Antomie2',
      subject: 'Microbiology4',
      systems: 'Dermatology5',
      topic: 'Bacteriology6',
      totalPoint: 30,
      question: [
        {
          Answer1: 'Answer123',
          Answer2: 'Answer2255',
          Answer3: 'Answer3344',
          Answer4: 'Answer4499',
          Answer5: 'Answer5544',
          Answer5: 'Answer5544',
          Answer5: 'Answer5544',
          Answer5: 'Answer5544',
          Answer5: 'Answer5544',
          Answer5: 'Answer5544',
          Answer5: 'Answer5544',
          Answer5: 'Answer5544',
          Answer: 'Answer56',
          questionText: 'questionText 217',
          definition: 'definition 218',
        },
      ],
    },
  ])
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Cashs.......',
      });
    });
};

// Find a single calenders with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Question.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({
          message: 'Not found locatin with id ' + id,
        });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Cash with id=' + id,
      });
    });
};

// Update a calenders by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty!',
    });
  }

  const id = req.params.id;

  Question.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Cash with id=${id}. Maybe Cash was not found!`,
        });
      } else res.send({ message: 'Cash was updated successfully.' });
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Cash with id=' + id,
      });
    });
};

// Delete a calenders with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  if (!req.body.amount) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  Question.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Cash with id=${id}. Maybe Cash was not found!`,
        });
      } else {
        res.send({
          message: 'Cash was deleted successfully!',
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Cash with id=' + id,
      });
    });
};

// UNDisplay for list without Delete
exports.published = (req, res) => {
  const id = req.params.id;

  Question.findByIdAndUpdate(
    id,
    {
      $set: {
        published: false,
        updatedAt: new Date(),
      },
    },
    { useFindAndModify: false }
  )
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Cash with id=${id}. Maybe Cash was not found!`,
        });
      } else {
        res.send({ message: 'Cash was updated successfully.' });
        console.log(`Cash was Un Display successfully. ${id}`);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Cash with id=' + id,
      });
    });
};

// Display for list
exports.recovery = (req, res) => {
  const id = req.params.id;

  Question.findByIdAndUpdate(
    id,
    {
      $set: {
        published: true,
      },
    },
    { useFindAndModify: false }
  )
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Cash with id=${id}. Maybe Cash was not found!`,
        });
      } else {
        res.send({ message: 'calender was updated successfully.' });
        console.log(`Cash was Recovery successfully. ${id}`);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Cash with id=' + id,
      });
    });
};

// Delete all cash from the database.
exports.deleteAll = (req, res) => {
  Question.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Cash were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while removing all Cash.',
      });
    });
};

// Find all published cash
