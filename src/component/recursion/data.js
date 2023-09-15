export const familyTree = {
  name: "family-tree",
  age: 40,
  children: [
    {
      name: "child1",
      age: 23,
    },
    {
      name: "child2",
      age: 50,
      children: [
        {
          name: "2child1",
          parentName: "kaushal",
          age: 67,
        },
        {
          name: "2child2",
          parentName: "kaushal",
          age: -98,
          children: [
            { name: "2_2child1", parentName: "daughter of kaushal", age: 20 },
            {
              name: "2_2child2",
              parentName: "daughter of kaushal",
              age: 20,
              children: [
                { name: "2_2_2child1", parentName: "grand daughter", age: -2 },
                { name: "2_2_2child2", parentName: "grand daughter", age: -2 },
              ],
            },
            {
              name: "2_2child3",
              parentName: "daughter of kaushal",
              age: 20,
              children: [
                {
                  name: "2_2__3child1",
                  age: 30,
                },
                {
                  name: "2_2_3child2",
                  age: 50,
                  children: [
                    {
                      name: "2_2_3_2child1",
                      age: 30,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
