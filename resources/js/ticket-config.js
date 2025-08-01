export default {
  tableId: 'ticketTable',
  columns: [
    { data: 'DT_RowIndex', searchable: false, orderable: false },
    { data: 'ticket_number', name: 'ticket_number' },
    { data: 'unit_serial', name: 'unit_serial' },
    { data: 'company.company_name', name: 'company.company_name' },
    { data: 'address.location', name: 'address.location' },
    { data: 'caller', name: 'caller' },
    { data: 'requestor', name: 'requestor' },
    { data: 'type_badge', name: 'type_badge' },
    { data: 'status_badge', name: 'status_badge' },
    { data: 'remarks', name: 'remarks' },
    { data: 'action', name: 'action', orderable: false, searchable: false },
  ],
  filterFields: ['serial', 'brand', 'model', 'unit_status', 'service_code'],
  formId: 'filter-ticket',
  resetButtonId: 'reset-ticket-filter',
  liveSearch: false,
};
