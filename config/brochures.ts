/**
 * Centralized brochure download URLs.
 *
 * To update a brochure, replace the PDF file in /public/brochures/
 * and update the corresponding path here. All pages that use the
 * DownloadModal will automatically pick up the new file.
 */

export const BROCHURE_URLS = {
  // Internet
  internet: "/brochures/internet.pdf",
  fiberDedicated: "/brochures/fiber-dedicated.pdf",
  iptExpress: "/brochures/ipt-express.pdf",
  ixExpress: "/brochures/ix-express.pdf",
  dedicatedInternetAccess: "/brochures/dedicated-internet-access.pdf",
  fiberBroadband: "/brochures/fiber-broadband.pdf",

  // Transport
  metroEthernet: "/brochures/metro-ethernet.pdf",
  ipvpn: "/brochures/ipvpn.pdf",
  ethernetInternationalPrivateLine: "/brochures/ethernet-international-private-line.pdf",
  opticalTransportNetwork: "/brochures/optical-transport-network.pdf",
  dcExpress: "/brochures/dc-express.pdf",
  clsExpress: "/brochures/cls-express.pdf",
  cloudDirectConnect: "/brochures/cloud-direct-connect.pdf",
  faster: "/brochures/faster.pdf",

  // Security
  security: "/brochures/security.pdf",
  secureInternet: "/brochures/secure-internet.pdf",
  antiDdos: "/brochures/anti-ddos.pdf",

  // Content
  content: "/brochures/content.pdf",
  contentPlus: "/brochures/content-plus.pdf",

  // Managed Services
  managedServices: "/brochures/managed-services.pdf",
  managedWifi: "/brochures/managed-wifi.pdf",
  managedSurveillance: "/brochures/managed-surveillance.pdf",
  sdWan: "/brochures/sd-wan.pdf",
  draas: "/brochures/draas.pdf",

  // Solutions
  dataCenters: "/brochures/data-centers.pdf",
  data: "/brochures/data.pdf",
  digitalInfrastructure: "/brochures/digital-infrastructure.pdf",
  distributedSetup: "/brochures/distributed-setup.pdf",
  globallyCertified: "/brochures/globally-certified.pdf",
  hospitality: "/brochures/hospitality.pdf",
  cableSystem: "/brochures/cable-system.pdf",
  bifrost: "/brochures/bifrost.pdf",

  // Cloud
  convergeCloud: "/brochures/converge-cloud.pdf",

  // Campus
  intelligentCampus: "/brochures/intelligent-campus.pdf",

  // General
  gbgOmnibus: "/brochures/gbg-omnibus.pdf",

  // Partners
  partners: "/brochures/partners.pdf",

  // Connectivity
  satellite: "/brochures/satellite.pdf",
} as const;

/**
 * Human-readable brand names for brochures, keyed by URL. Sent to the email
 * backend alongside the URL so sales receive a readable label in the inquiry
 * email (e.g. "SEA-H2X" instead of "Cable System"). Only populated for
 * brochures that are actually available for download — other entries in
 * BROCHURE_URLS point to PDFs that don't yet exist and fall back to a label
 * derived from the filename on the backend.
 */
export const BROCHURE_LABELS: Record<string, string> = {
  [BROCHURE_URLS.bifrost]: "Bifrost",
  [BROCHURE_URLS.cableSystem]: "SEA-H2X",
  [BROCHURE_URLS.contentPlus]: "Content Plus",
  [BROCHURE_URLS.convergeCloud]: "Converge Cloud",
  [BROCHURE_URLS.gbgOmnibus]: "GBG Omnibus",
  [BROCHURE_URLS.intelligentCampus]: "Intelligent Campus",
  [BROCHURE_URLS.metroEthernet]: "Metro Ethernet",
};

export function getBrochureLabel(url: string | undefined): string {
  if (!url) return "";
  return BROCHURE_LABELS[url] ?? "";
}
