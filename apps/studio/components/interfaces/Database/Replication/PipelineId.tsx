import { cn } from 'ui'

export const PipelineId = ({
  pipelineId,
  className,
}: {
  pipelineId: string
  className?: string
}) => <span className={cn('break-all font-mono', className)}>{pipelineId}</span>
