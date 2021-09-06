# Ag-Grid React



## React Data Grid: Grid API

https://www.ag-grid.com/react-data-grid/grid-api/

## Navigation

getFocusedCell
Returns the focused cell (or the last focused cell if the grid lost focus).
포커스된 cell 값을 리턴한다.

function getColumnDefs(): (ColDef | ColGroupDef)[];

var focusedCell = this.gridApi.getFocusedCell()
=> column, floating,

---

setFocusedCell
Function
Sets the focus to the specified cell.
clearFocusedCell
Function
Clears the focused cell.
tabToNextCell
Function
Navigates the grid focus to the next cell, as if tabbing.
tabToPreviousCell
Function
Navigates the grid focus to the previous cell, as if shift-tabbing.
