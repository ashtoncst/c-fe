import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { DraasModule } from "@/modules/manage-service-module/DraasModule";

export const metadata: Metadata = generatePageMetadata({
    title: "DRaaS — Disaster Recovery as a Service",
    description:
        "Converge ICT Solutions DRaaS ensures business continuity with automated failover, data replication, and rapid recovery to keep your operations running during any disruption.",
    path: "/beyond-connectivity/managed-services/draas",
});

export default function DraasPage() {
    return <DraasModule />;
}
