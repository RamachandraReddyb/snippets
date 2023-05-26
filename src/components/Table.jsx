import React, { Fragment } from "react";
import { v4 as uuid } from "uuid";

const data = {
  centre: [
    {
      id: uuid(),
      name: "centre 1",
      totalCurriculums: 2,
      totalCombos: 4,
      totalIntakes: 12,
      curriculums: [
        {
          id: uuid(),
          name: "curriculum 1",
          totalCombos: 2,
          totalIntakes: 6,
          combos: [
            {
              id: uuid(),
              name: "combo1",
              totalIntakes: 3,
              intakes: [
                {
                  id: uuid(),
                  name: "intake 1",
                  data: [
                    {
                      id: uuid(),
                      name: "cell 1",
                    },
                    {
                      id: uuid(),
                      name: "cell 2",
                    },
                    {
                      id: uuid(),
                      name: "cell 3",
                    },
                  ],
                },
                {
                  id: uuid(),
                  name: "intake 2",
                  data: [
                    {
                      id: uuid(),
                      name: "cell 1",
                    },
                    {
                      id: uuid(),
                      name: "cell 2",
                    },
                    {
                      id: uuid(),
                      name: "cell 3",
                    },
                  ],
                },
                {
                  id: uuid(),
                  name: "intake 3",
                  data: [
                    {
                      id: uuid(),
                      name: "cell 1",
                    },
                    {
                      id: uuid(),
                      name: "cell 2",
                    },
                    {
                      id: uuid(),
                      name: "cell 3",
                    },
                  ],
                },
              ],
            },
            {
              id: uuid(),
              name: "combo2",
              totalIntakes: 3,
              intakes: [
                {
                  id: uuid(),
                  name: "intake 1",
                  data: [
                    {
                      id: uuid(),
                      name: "cell 1",
                    },
                    {
                      id: uuid(),
                      name: "cell 2",
                    },
                    {
                      id: uuid(),
                      name: "cell 3",
                    },
                  ],
                },
                {
                  id: uuid(),
                  name: "intake 2",
                  data: [
                    {
                      id: uuid(),
                      name: "cell 1",
                    },
                    {
                      id: uuid(),
                      name: "cell 2",
                    },
                    {
                      id: uuid(),
                      name: "cell 3",
                    },
                  ],
                },
                {
                  id: uuid(),
                  name: "intake 3",
                  data: [
                    {
                      id: uuid(),
                      name: "cell 1",
                    },
                    {
                      id: uuid(),
                      name: "cell 2",
                    },
                    {
                      id: uuid(),
                      name: "cell 3",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: uuid(),
          name: "curriculum 2",
          totalCombos: 2,
          totalIntakes: 6,
          combos: [
            {
              id: uuid(),
              name: "combo1",
              totalIntakes: 3,
              intakes: [
                {
                  id: uuid(),
                  name: "intake 1",
                  data: [
                    {
                      id: uuid(),
                      name: "cell 1",
                    },
                    {
                      id: uuid(),
                      name: "cell 2",
                    },
                    {
                      id: uuid(),
                      name: "cell 3",
                    },
                  ],
                },
                {
                  id: uuid(),
                  name: "intake 2",
                  data: [
                    {
                      id: uuid(),
                      name: "cell 1",
                    },
                    {
                      id: uuid(),
                      name: "cell 2",
                    },
                    {
                      id: uuid(),
                      name: "cell 3",
                    },
                  ],
                },
                {
                  id: uuid(),
                  name: "intake 3",
                  data: [
                    {
                      id: uuid(),
                      name: "cell 1",
                    },
                    {
                      id: uuid(),
                      name: "cell 2",
                    },
                    {
                      id: uuid(),
                      name: "cell 3",
                    },
                  ],
                },
              ],
            },
            {
              id: uuid(),
              name: "combo2",
              totalIntakes: 3,
              intakes: [
                {
                  id: uuid(),
                  name: "intake 1",
                  data: [
                    {
                      id: uuid(),
                      name: "cell 1",
                    },
                    {
                      id: uuid(),
                      name: "cell 2",
                    },
                    {
                      id: uuid(),
                      name: "cell 3",
                    },
                  ],
                },
                {
                  id: uuid(),
                  name: "intake 2",
                  data: [
                    {
                      id: uuid(),
                      name: "cell 1",
                    },
                    {
                      id: uuid(),
                      name: "cell 2",
                    },
                    {
                      id: uuid(),
                      name: "cell 3",
                    },
                  ],
                },
                {
                  id: uuid(),
                  name: "intake 3",
                  data: [
                    {
                      id: uuid(),
                      name: "cell 1",
                    },
                    {
                      id: uuid(),
                      name: "cell 2",
                    },
                    {
                      id: uuid(),
                      name: "cell 3",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: uuid(),
      name: "centre 2",
      totalCurriculums: 3,
      totalCombos: 5,
      totalIntakes: 13,
      curriculums: [
        {
          id: uuid(),
          name: "curriculum 1",
          totalCombos: 2,
          totalIntakes: 3,
          combos: [
            {
              id: uuid(),
              name: "combo1",
              totalIntakes: 1,
              intakes: [
                {
                  id: uuid(),
                  name: "intake 1",
                  data: [
                    {
                      id: uuid(),
                      name: "cell 1",
                    },
                    {
                      id: uuid(),
                      name: "cell 2",
                    },
                    {
                      id: uuid(),
                      name: "cell 3",
                    },
                  ],
                },
              ],
            },
            {
              id: uuid(),
              name: "combo2",
              totalIntakes: 3,
              intakes: [
                {
                  id: uuid(),
                  name: "intake 1",
                  data: [
                    {
                      id: uuid(),
                      name: "cell 1",
                    },
                    {
                      id: uuid(),
                      name: "cell 2",
                    },
                    {
                      id: uuid(),
                      name: "cell 3",
                    },
                  ],
                },
                {
                  id: uuid(),
                  name: "intake 2",
                  data: [
                    {
                      id: uuid(),
                      name: "cell 1",
                    },
                    {
                      id: uuid(),
                      name: "cell 2",
                    },
                    {
                      id: uuid(),
                      name: "cell 3",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: uuid(),
          name: "curriculum 2",
          totalCombos: 2,
          totalIntakes: 6,
          combos: [
            {
              id: uuid(),
              name: "combo1",
              totalIntakes: 3,
              intakes: [
                {
                  id: uuid(),
                  name: "intake 1",
                  data: [
                    {
                      id: uuid(),
                      name: "cell 1",
                    },
                    {
                      id: uuid(),
                      name: "cell 2",
                    },
                    {
                      id: uuid(),
                      name: "cell 3",
                    },
                  ],
                },
                {
                  id: uuid(),
                  name: "intake 2",
                  data: [
                    {
                      id: uuid(),
                      name: "cell 1",
                    },
                    {
                      id: uuid(),
                      name: "cell 2",
                    },
                    {
                      id: uuid(),
                      name: "cell 3",
                    },
                  ],
                },
                {
                  id: uuid(),
                  name: "intake 3",
                  data: [
                    {
                      id: uuid(),
                      name: "cell 1",
                    },
                    {
                      id: uuid(),
                      name: "cell 2",
                    },
                    {
                      id: uuid(),
                      name: "cell 3",
                    },
                  ],
                },
              ],
            },
            {
              id: uuid(),
              name: "combo2",
              totalIntakes: 3,
              intakes: [
                {
                  id: uuid(),
                  name: "intake 1",
                  data: [
                    {
                      id: uuid(),
                      name: "cell 1",
                    },
                    {
                      id: uuid(),
                      name: "cell 2",
                    },
                    {
                      id: uuid(),
                      name: "cell 3",
                    },
                  ],
                },
                {
                  id: uuid(),
                  name: "intake 2",
                  data: [
                    {
                      id: uuid(),
                      name: "cell 1",
                    },
                    {
                      id: uuid(),
                      name: "cell 2",
                    },
                    {
                      id: uuid(),
                      name: "cell 3",
                    },
                  ],
                },
                {
                  id: uuid(),
                  name: "intake 3",
                  data: [
                    {
                      id: uuid(),
                      name: "cell 1",
                    },
                    {
                      id: uuid(),
                      name: "cell 2",
                    },
                    {
                      id: uuid(),
                      name: "cell 3",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: uuid(),
          name: "curriculum 3",
          totalCombos: 2,
          totalIntakes: 3,
          combos: [
            {
              id: uuid(),
              name: "combo1",
              totalIntakes: 1,
              intakes: [
                {
                  id: uuid(),
                  name: "intake 1",
                  data: [
                    {
                      id: uuid(),
                      name: "cell 1",
                    },
                    {
                      id: uuid(),
                      name: "cell 2",
                    },
                    {
                      id: uuid(),
                      name: "cell 3",
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

const Table = () => {
  return (
    <>
      {/* dynamic data */}
      <table className="w-full table-auto border" cellPadding="2" key={1}>
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
              <React.Fragment key={centre.id}>
                <tr index={"centre-" + centre.id} key={"centre-" + centre.id}>
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
                    <React.Fragment key={curriculum.id}>
                      <tr key={curriculum.id} index={curriculum.id}>
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
                          <React.Fragment key={combo.id}>
                            <tr key={combo.id} index={combo.id}>
                              <td rowSpan={combo.totalIntakes + 1}>
                                {combo.name}
                              </td>
                            </tr>
                            {combo.intakes.map((intake, dIndex) => {
                              return (
                                <tr key={intake.id} index={intake.id}>
                                  <td>{intake.name}</td>
                                  {intake.data.map((cellData, eIndex) => {
                                    return (
                                      <td key={cellData.id}>{cellData.name}</td>
                                    );
                                  })}
                                </tr>
                              );
                            })}
                          </React.Fragment>
                        );
                      })}
                    </React.Fragment>
                  );
                })}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>

      {/* // static table */}
      <table
        className="w-full table-auto border"
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
