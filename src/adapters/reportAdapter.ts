import type { ReportClient, ReportServe } from '@/types/Report'

export const createReportAdapter = (report: ReportClient) => {
  const data: ReportServe = {
    start_date: report.startDate,
    end_date: report.endDate,
    email: report.email
  }

  return data
}
