import express from 'express';
import User from './userModel';

const router = express.Router(); // eslint-disable-line

// Get all users
router.get('/', (req, res, next) => {
    User.find().then(users =>  res.status(200).json(users)).catch(next);;
});

// register
router.post('/', (req, res ,next) => {
    User.create(req.body).then(user => res.status(200).json({success:true,token:"FakeTokenForNow"})).catch(next);
});

// Update a user
router.put('/:id',  (req, res, next) => {
    if (req.body._id) delete req.body._id;
     User.update({
      _id: req.params.id,
    }, req.body, {
      upsert: false,
    })
    .then(user => res.json(200, user)).catch(next);;
});

router.post('/:userName/favourites', (req, res, next) => {
    const newFavourite = req.body;
    const query = {username: req.params.userName};
    if (newFavourite && newFavourite.id) {
      User.find(query).then(
        user => {
          (user.favourites)?user.favourites.push(newFavourite):user.favourites =[newFavourite];
          User.findOneAndUpdate(query, {favourites:user.favourites}, {
            new: true
          }).then(user => res.status(201).send(user));
        }
      ).catch(next);
    } else {
        res.status(401).send("Unable to find user")
    }
  });

  router.get('/:userName/favourites', (req, res, next) => {
    const user = req.params.userName;
    User.find( {username: user}).then(
        user => res.status(201).send(user.favourites)
    ).catch(next);
  });

  
export default router;