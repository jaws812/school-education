import './Structure.scss'
import Section from "@/layouts/Section/index.js";
import TablePriceList from "@/components/TablePriceList/index.js";
import TableCard from "@/components/TableCard";
import TableServices from "@/components/TableServices/index.js";

const Structure = () => {
  const headCells = [
    {
      children: "Program",
      width: "20%",
      tabsTitle: "Program",
    },
    {
      children: "Age Group",
      width: "20%",
      tabsTitle: "Age Group",
    },
    {
      children: "Annual Tuition",
      width: "20%",
      tabsTitle: "Annual Tuition",
    },
    {
      children: "Registration Fee",
      width: "20%",
      tabsTitle: "Registration Fee",
    },
    {
      children: "Activity Fee",
      width: "20%",
      tabsTitle: "Activity Fee",
    },
  ]

  const rows = [
    {
      cells: [
        "Nursery", "2 - 3 Years", "$1,686", "$162", "$12",
      ]
    },
    {
      cells: [
        "Pre - Kindergartens", "3 - 4 Years", "$2,686", "$220", "$16",
      ]
    },
    {
      cells: [
        "Kindergarten", "4 - 5 Years", "$3,686", "$340", "$20",
      ]
    },
  ]
  const rowsServices = [
    {
      width: "50%",
      cells: [
        "Before and After-School Care", "$120 / per month",
      ]
    },
    {
      width: "50%",
      cells: [
        "Language Immersion Program", "$60 / per semester",
      ]
    },
    {
      width: "50%",
      cells: [
        "Transportation (optional)", "$80 / per month",
      ]
    },
  ]

  const titleTable="Additional Services"

  return (
    <Section
      badge='Our Features'
      title='Fee Structure'
      description='Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen.'
      titleId='structure-title'
      rowGapClassName="row-gap"
    >
      <TableCard>
        <TablePriceList
          headCells={headCells}
          rows={rows}
        />
      </TableCard>
      <TableCard>
        <TableServices
          titleTable={titleTable}
          rowsServices={rowsServices}
        />
      </TableCard>
    </Section>
  )
}

export default Structure