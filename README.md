# Redirect Shorts on Youtube

Stop endless scrolling of YouTube Shorts, it distracted you from being productive. This is a web extension to make the Shorts videos play like a normal video. Stopping you from endless scrolling while still able to see the content of the shorts.

## Diagram

```mermaid
flowchart TD
  B[Youtube Page] --> |Web extension| C[Script Injection]
  C --> |Detect Shorts URL| D[Redirect]