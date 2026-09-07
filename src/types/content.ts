export type BlockType =
  | { type: 'h1'; content: string }
  | { type: 'h2'; content: string }
  | { type: 'h3'; content: string }
  | { type: 'p'; content: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'definition'; term: string; definition: string }
  | { type: 'callout'; style: 'note' | 'important' | 'example'; content: string }
  | { type: 'diagram'; id: string; title: string; description: string; svgCode?: string };

export interface NativePage {
  pageNumber: number;
  sourceImageRef?: string; // Internal reference only, not shown to user
  blocks: BlockType[];
}

export interface NativeChapter {
  id: string;
  number: string;
  title: string;
  pages: NativePage[];
}
