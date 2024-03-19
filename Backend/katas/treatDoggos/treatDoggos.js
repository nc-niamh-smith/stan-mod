const treatDoggos = (dogs) => {
    const treatedDogs = dogs.map((dog)=> {
        let dogCopy = {...dog};
        return dogCopy;
    });
    treatedDogs.forEach((dog) => (dog.hasRabies = false));
    return treatedDogs;
};

module.exports = treatDoggos;