import { createReportAdapter } from '@/adapters/reportAdapter'
import axiosInstance from '@/interceptors/axiosInterceptor'
import type { ReportClient } from '@/types/Report'

export const sendReports = async (filters: ReportClient) => {
  try {
    const report = createReportAdapter(filters)
    const url = '/task_report'
    const result = await axiosInstance.post(url, report)
    const { data } = result.data

    if (data) {
      return data
    }

    return null
  } catch (error) {
    console.log(error)
  }
}
