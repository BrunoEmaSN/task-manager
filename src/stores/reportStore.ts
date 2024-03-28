import { sendReports } from '@/services/reportService'
import { defineStore } from 'pinia'
import type { ReportClient } from '../types/Report'
import { toast } from 'vue3-toastify'
import { toastConfig } from '@/constants/toastConfig'

export const useReportStore = defineStore('report', {
  actions: {
    async sendReportsFilters(report: ReportClient) {
      const result = await sendReports(report)
      if (result) {
        toast.success('✅ Report send by email', toastConfig)
      } else {
        toast.error('❌ Sorry, could not sented report', toastConfig)
      }
    }
  }
})
