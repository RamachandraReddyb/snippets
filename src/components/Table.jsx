import React from "react";

const data = {
  centre: [
    {
      id: 1,
      name: "centre 1",
      totalCurriculums: 2,
      totalCombos: 4,
      totalIntakes: 12,
      curriculums: [
        {
          id: "1-1",
          name: "curriculum 1",
          totalCombos: 2,
          totalIntakes: 6,
          combos: [
            {
              id: "1-1-1",
              name: "combo1",
              totalIntakes: 3,
              intakes: [
                {
                  id: "1-1-1-1",
                  name: "intake 1",
                  data: ["cell 1", "cell 2", "cell 3"],
                },
                {
                  id: "1-1-1-2",
                  name: "intake 2",
                  data: ["cell 1", "cell 2", "cell 3"],
                },
                {
                  id: "1-1-1-3",
                  name: "intake 3",
                  data: ["cell 1", "cell 2", "cell 3"],
                },
              ],
            },
            {
              id: "1-1-2",
              name: "combo2",
              totalIntakes: 3,
              intakes: [
                {
                  id: "1-1-2-1",
                  name: "intake 1",
                  data: ["cell 1", "cell 2", "cell 3"],
                },
                {
                  id: "1-1-2-2",
                  name: "intake 2",
                  data: ["cell 1", "cell 2", "cell 3"],
                },
                {
                  id: "1-1-2-3",
                  name: "intake 3",
                  data: ["cell 1", "cell 2", "cell 3"],
                },
              ],
            },
          ],
        },
        {
          id: "1-1",
          name: "curriculum 2",
          totalCombos: 2,
          totalIntakes: 6,
          combos: [
            {
              id: "1-1-1",
              name: "combo1",
              totalIntakes: 3,
              intakes: [
                {
                  id: "1-1-1-1",
                  name: "intake 1",
                  data: ["cell 1", "cell 2", "cell 3"],
                },
                {
                  id: "1-1-1-2",
                  name: "intake 2",
                  data: ["cell 1", "cell 2", "cell 3"],
                },
                {
                  id: "1-1-1-3",
                  name: "intake 3",
                  data: ["cell 1", "cell 2", "cell 3"],
                },
              ],
            },
            {
              id: "1-1-2",
              name: "combo2",
              totalIntakes: 3,
              intakes: [
                {
                  id: "1-1-2-1",
                  name: "intake 1",
                  data: ["cell 1", "cell 2", "cell 3"],
                },
                {
                  id: "1-1-2-2",
                  name: "intake 2",
                  data: ["cell 1", "cell 2", "cell 3"],
                },
                {
                  id: "1-1-2-3",
                  name: "intake 3",
                  data: ["cell 1", "cell 2", "cell 3"],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "centre 2",
      totalCurriculums: 3,
      totalCombos: 5,
      totalIntakes: 13,
      curriculums: [
        {
          id: "1-1",
          name: "curriculum 1",
          totalCombos: 2,
          totalIntakes: 3,
          combos: [
            {
              id: "1-1-1",
              name: "combo1",
              totalIntakes: 1,
              intakes: [
                {
                  id: "1-1-1-1",
                  name: "intake 1",
                  data: ["cell 1", "cell 2", "cell 3"],
                },
              ],
            },
            {
              id: "1-1-2",
              name: "combo2",
              totalIntakes: 3,
              intakes: [
                {
                  id: "1-1-2-1",
                  name: "intake 1",
                  data: ["cell 1", "cell 2", "cell 3"],
                },
                {
                  id: "1-1-2-2",
                  name: "intake 2",
                  data: ["cell 1", "cell 2", "cell 3"],
                },
              ],
            },
          ],
        },
        {
          id: "1-1",
          name: "curriculum 2",
          totalCombos: 2,
          totalIntakes: 6,
          combos: [
            {
              id: "1-1-1",
              name: "combo1",
              totalIntakes: 3,
              intakes: [
                {
                  id: "1-1-1-1",
                  name: "intake 1",
                  data: ["cell 1", "cell 2", "cell 3"],
                },
                {
                  id: "1-1-1-2",
                  name: "intake 2",
                  data: ["cell 1", "cell 2", "cell 3"],
                },
                {
                  id: "1-1-1-3",
                  name: "intake 3",
                  data: ["cell 1", "cell 2", "cell 3"],
                },
              ],
            },
            {
              id: "1-1-2",
              name: "combo2",
              totalIntakes: 3,
              intakes: [
                {
                  id: "1-1-2-1",
                  name: "intake 1",
                  data: ["cell 1", "cell 2", "cell 3"],
                },
                {
                  id: "1-1-2-2",
                  name: "intake 2",
                  data: ["cell 1", "cell 2", "cell 3"],
                },
                {
                  id: "1-1-2-3",
                  name: "intake 3",
                  data: ["cell 1", "cell 2", "cell 3"],
                },
              ],
            },
          ],
        },
        {
          id: "1-3",
          name: "curriculum 3",
          totalCombos: 2,
          totalIntakes: 3,
          combos: [
            {
              id: "1-1-1",
              name: "combo1",
              totalIntakes: 1,
              intakes: [
                {
                  id: "1-1-1-1",
                  name: "intake 1",
                  data: ["cell 1", "cell 2", "cell 3"],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const Table = () => {
  return (
    <>
      {/* dynamic data */}
      <table class="w-full table-auto border" cellPadding="2">
        <thead>
          <tr className="border text-left">
            <th>centre</th>
            <th>Curriculum</th>
            <th>combo</th>
            <th>intake</th>
            <th>cell 1</th>
            <th>cell 2</th>
            <th>cell 3</th>
          </tr>
        </thead>
        <tbody>
          {data.centre.map((centre, aIndex) => {
            return (
              <>
                <tr>
                  <td
                    rowSpan={
                      centre.totalCurriculums +
                      centre.totalCombos +
                      centre.totalIntakes +
                      1
                    }
                  >
                    {centre.name}
                  </td>
                </tr>
                {centre.curriculums.map((curriculum, bIndex) => {
                  return (
                    <>
                      <tr>
                        <td
                          rowSpan={
                            curriculum.totalCombos + curriculum.totalIntakes + 1
                          }
                        >
                          {curriculum.name}
                        </td>
                      </tr>
                      {curriculum.combos.map((combo, cIndex) => {
                        return (
                          <>
                            <tr>
                              <td rowSpan={combo.totalIntakes + 1}>
                                {combo.name}
                              </td>
                            </tr>
                            {combo.intakes.map((intake, dIndex) => {
                              return (
                                <tr>
                                  <td>{intake.name}</td>
                                  {intake.data.map((cellData, eIndex) => {
                                    return <td>{cellData}</td>;
                                  })}
                                </tr>
                              );
                            })}
                          </>
                        );
                      })}
                    </>
                  );
                })}
              </>
            );
          })}
        </tbody>
      </table>

      {/* // static table */}
      <table
        class="w-full table-auto border"
        style={{ display: "none" }}
        cellPadding="2"
      >
        <thead>
          <tr className="border text-left">
            <th>centre</th>
            <th>Curriculum</th>
            <th>combo</th>
            <th>intake</th>
            <th>cell 1</th>
            <th>cell 2</th>
            <th>cell 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={16}>centre 1</td>
          </tr>
          <tr>
            <td rowSpan={13}>Curriculum 1</td>
          </tr>
          <tr>
            <td rowSpan={5}>combo 1</td>
          </tr>
          <tr>
            <td>intake 1-1</td>
            <td>cell 1</td>
            <td>cell 2</td>
            <td>cell 3</td>
          </tr>
          <tr>
            <td>intake 1-2</td>
            <td>cell 1</td>
            <td>cell 2</td>
            <td>cell 3</td>
          </tr>
          <tr>
            <td>intake 1-3</td>
            <td>cell 1</td>
            <td>cell 2</td>
            <td>cell 3</td>
          </tr>
          <tr>
            <td>intake 1-4</td>
            <td>cell 1</td>
            <td>cell 2</td>
            <td>cell 3</td>
          </tr>
          <tr>
            <td rowSpan={4}>combo 2</td>
          </tr>
          <tr>
            <td>intake 2-1</td>
            <td>cell 1</td>
            <td>cell 2</td>
            <td>cell 3</td>
          </tr>
          <tr>
            <td>intake 2-2</td>
            <td>cell 1</td>
            <td>cell 2</td>
            <td>cell 3</td>
          </tr>
          <tr>
            <td>intake 2-3</td>
            <td>cell 1</td>
            <td>cell 2</td>
            <td>cell 3</td>
          </tr>
          <tr>
            <td rowSpan={3}>combo 3</td>
          </tr>
          <tr>
            <td>intake 3-1</td>
            <td>cell 1</td>
            <td>cell 2</td>
            <td>cell 3</td>
          </tr>
          <tr>
            <td>intake 3-2</td>
            <td>cell 1</td>
            <td>cell 2</td>
            <td>cell 3</td>
          </tr>
          <tr>
            <td rowSpan={2}>Curriculum 2</td>
            <td rowSpan={2}>combo 2-1</td>
            <td>intake 2-1</td>
            <td>cell 1</td>
            <td>cell 2</td>
            <td>cell 3</td>
          </tr>
          <tr>
            <td>intake 2-2</td>
            <td>cell 1</td>
            <td>cell 2</td>
            <td>cell 3</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
