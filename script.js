(function () {
  function getActiveIds(menuTree) {
    let indexArray = [];
    for (const item of menuTree) {
      if (item.isActive) {
        indexArray.push(item.id);
      }

      if (item.children && item.children.length > 0) {
        const childIndex = getActiveIds(item.children);

        indexArray.push(...childIndex);
      }
    }

    return indexArray;
  }

  const menuTree = [
    { id: 1, isActive: true, children: [] },
    {
      id: 2,
      isActive: false,
      children: [{ id: 3, isActive: true, children: [] }],
    },
    {
      id: 4,
      isActive: true,
      children: [{ id: 5, isActive: false, children: [] }],
    },
  ];

  console.log(getActiveIds(menuTree));
  // Expected: [1, 3, 4]

  console.log(getActiveIds([]));
  // Expected: []

  console.log(
    getActiveIds([
      {
        id: 10,
        isActive: false,
        children: [{ id: 11, isActive: false, children: [] }],
      },
    ]),
  );
  // Expected: []
})();
