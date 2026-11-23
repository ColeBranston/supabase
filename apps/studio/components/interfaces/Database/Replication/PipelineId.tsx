import { cn } from 'ui'

export const PipelineId = ({
  pipelineId,
  className,
}: {
  pipelineId: string
  className?: string
}) => <code className={cn('break-all font-mono', className)}>{pipelineId}</code>
