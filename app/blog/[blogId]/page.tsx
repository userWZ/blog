/*
 * @Author: Zihao Wang wzh7076@gmail.com
 * @Date: 2024-07-22 16:59:39
 * @LastEditors: Zihao Wang wzh7076@gmail.com
 * @LastEditTime: 2024-07-23 13:32:47
 * @FilePath: \wzh7076\app\blog\[blogId]\page.tsx
 * @Description: 
 * 
 */
import { NotionPage } from "@/components/notion-page";
import { getPageContent } from "@/lib/notion";

export const revalidate = 0;

export default async function Page({ params }: { params: { blogId: string } }) {
  const { blogId } = params;
  const { recordMap, title } = await getPageContent(blogId);
  console.log(blogId)
  return <NotionPage recordMap={recordMap} rootPageId={blogId} title={title} />;
}
