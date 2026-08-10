import type { ProjectVisualType } from "@/data/projects"
import { DefaultProjectPreview } from "./default-project-preview"
import { KaiynWorkflowPreview } from "./kaiyn-workflow-preview"
import { PmLabResearchPreview } from "./pm-lab-research-preview"
import { ReadudePublishingPreview } from "./readude-publishing-preview"

export function ProjectVisual({
  type,
  eager = false,
}: {
  type: ProjectVisualType
  eager?: boolean
}) {
  switch (type) {
    case "kaiyn-workflow":
      return <KaiynWorkflowPreview />
    case "pm-lab-research":
      return <PmLabResearchPreview />
    case "readude-publishing":
      return <ReadudePublishingPreview eager={eager} />
    default:
      return <DefaultProjectPreview />
  }
}
