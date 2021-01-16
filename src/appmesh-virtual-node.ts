// https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppmeshVirtualNodeConfig extends cdktf.TerraformMetaArguments {
  readonly meshName: string;
  readonly meshOwner?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** spec block */
  readonly spec: AppmeshVirtualNodeSpec[];
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm {
  readonly certificateAuthorityArns: string[];
}

function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.certificateAuthorityArns),
  }
}

export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile {
  readonly certificateChain: string;
}

function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
  }
}

export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust {
  /** acm block */
  readonly acm?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm[];
  /** file block */
  readonly file?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile[];
}

function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    acm: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToTerraform)(struct!.acm),
    file: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToTerraform)(struct!.file),
  }
}

export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation {
  /** trust block */
  readonly trust: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust[];
}

function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    trust: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToTerraform)(struct!.trust),
  }
}

export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls {
  readonly enforce?: boolean;
  readonly ports?: number[];
  /** validation block */
  readonly validation: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation[];
}

function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enforce: cdktf.booleanToTerraform(struct!.enforce),
    ports: cdktf.listMapper(cdktf.numberToTerraform)(struct!.ports),
    validation: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToTerraform)(struct!.validation),
  }
}

export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy {
  /** tls block */
  readonly tls?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls[];
}

function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    tls: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToTerraform)(struct!.tls),
  }
}

export interface AppmeshVirtualNodeSpecBackendVirtualService {
  readonly virtualServiceName: string;
  /** client_policy block */
  readonly clientPolicy?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy[];
}

function appmeshVirtualNodeSpecBackendVirtualServiceToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    virtual_service_name: cdktf.stringToTerraform(struct!.virtualServiceName),
    client_policy: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToTerraform)(struct!.clientPolicy),
  }
}

export interface AppmeshVirtualNodeSpecBackend {
  /** virtual_service block */
  readonly virtualService: AppmeshVirtualNodeSpecBackendVirtualService[];
}

function appmeshVirtualNodeSpecBackendToTerraform(struct?: AppmeshVirtualNodeSpecBackend): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    virtual_service: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceToTerraform)(struct!.virtualService),
  }
}

export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
  readonly certificateAuthorityArns: string[];
}

function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.certificateAuthorityArns),
  }
}

export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile {
  readonly certificateChain: string;
}

function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
  }
}

export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust {
  /** acm block */
  readonly acm?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm[];
  /** file block */
  readonly file?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile[];
}

function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    acm: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform)(struct!.acm),
    file: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform)(struct!.file),
  }
}

export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation {
  /** trust block */
  readonly trust: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust[];
}

function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    trust: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform)(struct!.trust),
  }
}

export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls {
  readonly enforce?: boolean;
  readonly ports?: number[];
  /** validation block */
  readonly validation: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation[];
}

function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enforce: cdktf.booleanToTerraform(struct!.enforce),
    ports: cdktf.listMapper(cdktf.numberToTerraform)(struct!.ports),
    validation: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToTerraform)(struct!.validation),
  }
}

export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicy {
  /** tls block */
  readonly tls?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls[];
}

function appmeshVirtualNodeSpecBackendDefaultsClientPolicyToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    tls: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToTerraform)(struct!.tls),
  }
}

export interface AppmeshVirtualNodeSpecBackendDefaults {
  /** client_policy block */
  readonly clientPolicy?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicy[];
}

function appmeshVirtualNodeSpecBackendDefaultsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaults): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_policy: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyToTerraform)(struct!.clientPolicy),
  }
}

export interface AppmeshVirtualNodeSpecListenerConnectionPoolGrpc {
  readonly maxRequests: number;
}

function appmeshVirtualNodeSpecListenerConnectionPoolGrpcToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolGrpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
  }
}

export interface AppmeshVirtualNodeSpecListenerConnectionPoolHttp {
  readonly maxConnections: number;
  readonly maxPendingRequests?: number;
}

function appmeshVirtualNodeSpecListenerConnectionPoolHttpToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
  }
}

export interface AppmeshVirtualNodeSpecListenerConnectionPoolHttp2 {
  readonly maxRequests: number;
}

function appmeshVirtualNodeSpecListenerConnectionPoolHttp2ToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
  }
}

export interface AppmeshVirtualNodeSpecListenerConnectionPoolTcp {
  readonly maxConnections: number;
}

function appmeshVirtualNodeSpecListenerConnectionPoolTcpToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolTcp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
  }
}

export interface AppmeshVirtualNodeSpecListenerConnectionPool {
  /** grpc block */
  readonly grpc?: AppmeshVirtualNodeSpecListenerConnectionPoolGrpc[];
  /** http block */
  readonly http?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp[];
  /** http2 block */
  readonly http2?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2[];
  /** tcp block */
  readonly tcp?: AppmeshVirtualNodeSpecListenerConnectionPoolTcp[];
}

function appmeshVirtualNodeSpecListenerConnectionPoolToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPool): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    grpc: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolGrpcToTerraform)(struct!.grpc),
    http: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolHttpToTerraform)(struct!.http),
    http2: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolHttp2ToTerraform)(struct!.http2),
    tcp: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolTcpToTerraform)(struct!.tcp),
  }
}

export interface AppmeshVirtualNodeSpecListenerHealthCheck {
  readonly healthyThreshold: number;
  readonly intervalMillis: number;
  readonly path?: string;
  readonly port?: number;
  readonly protocol: string;
  readonly timeoutMillis: number;
  readonly unhealthyThreshold: number;
}

function appmeshVirtualNodeSpecListenerHealthCheckToTerraform(struct?: AppmeshVirtualNodeSpecListenerHealthCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    interval_millis: cdktf.numberToTerraform(struct!.intervalMillis),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    timeout_millis: cdktf.numberToTerraform(struct!.timeoutMillis),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
  }
}

export interface AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration {
  readonly unit: string;
  readonly value: number;
}

function appmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshVirtualNodeSpecListenerOutlierDetectionInterval {
  readonly unit: string;
  readonly value: number;
}

function appmeshVirtualNodeSpecListenerOutlierDetectionIntervalToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionInterval): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshVirtualNodeSpecListenerOutlierDetection {
  readonly maxEjectionPercent: number;
  readonly maxServerErrors: number;
  /** base_ejection_duration block */
  readonly baseEjectionDuration: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration[];
  /** interval block */
  readonly interval: AppmeshVirtualNodeSpecListenerOutlierDetectionInterval[];
}

function appmeshVirtualNodeSpecListenerOutlierDetectionToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_ejection_percent: cdktf.numberToTerraform(struct!.maxEjectionPercent),
    max_server_errors: cdktf.numberToTerraform(struct!.maxServerErrors),
    base_ejection_duration: cdktf.listMapper(appmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToTerraform)(struct!.baseEjectionDuration),
    interval: cdktf.listMapper(appmeshVirtualNodeSpecListenerOutlierDetectionIntervalToTerraform)(struct!.interval),
  }
}

export interface AppmeshVirtualNodeSpecListenerPortMapping {
  readonly port: number;
  readonly protocol: string;
}

function appmeshVirtualNodeSpecListenerPortMappingToTerraform(struct?: AppmeshVirtualNodeSpecListenerPortMapping): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle {
  readonly unit: string;
  readonly value: number;
}

function appmeshVirtualNodeSpecListenerTimeoutGrpcIdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest {
  readonly unit: string;
  readonly value: number;
}

function appmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshVirtualNodeSpecListenerTimeoutGrpc {
  /** idle block */
  readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle[];
  /** per_request block */
  readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest[];
}

function appmeshVirtualNodeSpecListenerTimeoutGrpcToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    idle: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutGrpcIdleToTerraform)(struct!.idle),
    per_request: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToTerraform)(struct!.perRequest),
  }
}

export interface AppmeshVirtualNodeSpecListenerTimeoutHttpIdle {
  readonly unit: string;
  readonly value: number;
}

function appmeshVirtualNodeSpecListenerTimeoutHttpIdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpIdle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest {
  readonly unit: string;
  readonly value: number;
}

function appmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshVirtualNodeSpecListenerTimeoutHttp {
  /** idle block */
  readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutHttpIdle[];
  /** per_request block */
  readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest[];
}

function appmeshVirtualNodeSpecListenerTimeoutHttpToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    idle: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttpIdleToTerraform)(struct!.idle),
    per_request: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToTerraform)(struct!.perRequest),
  }
}

export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle {
  readonly unit: string;
  readonly value: number;
}

function appmeshVirtualNodeSpecListenerTimeoutHttp2IdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest {
  readonly unit: string;
  readonly value: number;
}

function appmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2 {
  /** idle block */
  readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle[];
  /** per_request block */
  readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest[];
}

function appmeshVirtualNodeSpecListenerTimeoutHttp2ToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    idle: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttp2IdleToTerraform)(struct!.idle),
    per_request: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToTerraform)(struct!.perRequest),
  }
}

export interface AppmeshVirtualNodeSpecListenerTimeoutTcpIdle {
  readonly unit: string;
  readonly value: number;
}

function appmeshVirtualNodeSpecListenerTimeoutTcpIdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutTcpIdle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshVirtualNodeSpecListenerTimeoutTcp {
  /** idle block */
  readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutTcpIdle[];
}

function appmeshVirtualNodeSpecListenerTimeoutTcpToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutTcp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    idle: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutTcpIdleToTerraform)(struct!.idle),
  }
}

export interface AppmeshVirtualNodeSpecListenerTimeout {
  /** grpc block */
  readonly grpc?: AppmeshVirtualNodeSpecListenerTimeoutGrpc[];
  /** http block */
  readonly http?: AppmeshVirtualNodeSpecListenerTimeoutHttp[];
  /** http2 block */
  readonly http2?: AppmeshVirtualNodeSpecListenerTimeoutHttp2[];
  /** tcp block */
  readonly tcp?: AppmeshVirtualNodeSpecListenerTimeoutTcp[];
}

function appmeshVirtualNodeSpecListenerTimeoutToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    grpc: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutGrpcToTerraform)(struct!.grpc),
    http: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttpToTerraform)(struct!.http),
    http2: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttp2ToTerraform)(struct!.http2),
    tcp: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutTcpToTerraform)(struct!.tcp),
  }
}

export interface AppmeshVirtualNodeSpecListenerTlsCertificateAcm {
  readonly certificateArn: string;
}

function appmeshVirtualNodeSpecListenerTlsCertificateAcmToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateAcm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_arn: cdktf.stringToTerraform(struct!.certificateArn),
  }
}

export interface AppmeshVirtualNodeSpecListenerTlsCertificateFile {
  readonly certificateChain: string;
  readonly privateKey: string;
}

function appmeshVirtualNodeSpecListenerTlsCertificateFileToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}

export interface AppmeshVirtualNodeSpecListenerTlsCertificate {
  /** acm block */
  readonly acm?: AppmeshVirtualNodeSpecListenerTlsCertificateAcm[];
  /** file block */
  readonly file?: AppmeshVirtualNodeSpecListenerTlsCertificateFile[];
}

function appmeshVirtualNodeSpecListenerTlsCertificateToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    acm: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsCertificateAcmToTerraform)(struct!.acm),
    file: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsCertificateFileToTerraform)(struct!.file),
  }
}

export interface AppmeshVirtualNodeSpecListenerTls {
  readonly mode: string;
  /** certificate block */
  readonly certificate: AppmeshVirtualNodeSpecListenerTlsCertificate[];
}

function appmeshVirtualNodeSpecListenerTlsToTerraform(struct?: AppmeshVirtualNodeSpecListenerTls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    certificate: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsCertificateToTerraform)(struct!.certificate),
  }
}

export interface AppmeshVirtualNodeSpecListener {
  /** connection_pool block */
  readonly connectionPool?: AppmeshVirtualNodeSpecListenerConnectionPool[];
  /** health_check block */
  readonly healthCheck?: AppmeshVirtualNodeSpecListenerHealthCheck[];
  /** outlier_detection block */
  readonly outlierDetection?: AppmeshVirtualNodeSpecListenerOutlierDetection[];
  /** port_mapping block */
  readonly portMapping: AppmeshVirtualNodeSpecListenerPortMapping[];
  /** timeout block */
  readonly timeout?: AppmeshVirtualNodeSpecListenerTimeout[];
  /** tls block */
  readonly tls?: AppmeshVirtualNodeSpecListenerTls[];
}

function appmeshVirtualNodeSpecListenerToTerraform(struct?: AppmeshVirtualNodeSpecListener): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connection_pool: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolToTerraform)(struct!.connectionPool),
    health_check: cdktf.listMapper(appmeshVirtualNodeSpecListenerHealthCheckToTerraform)(struct!.healthCheck),
    outlier_detection: cdktf.listMapper(appmeshVirtualNodeSpecListenerOutlierDetectionToTerraform)(struct!.outlierDetection),
    port_mapping: cdktf.listMapper(appmeshVirtualNodeSpecListenerPortMappingToTerraform)(struct!.portMapping),
    timeout: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutToTerraform)(struct!.timeout),
    tls: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsToTerraform)(struct!.tls),
  }
}

export interface AppmeshVirtualNodeSpecLoggingAccessLogFile {
  readonly path: string;
}

function appmeshVirtualNodeSpecLoggingAccessLogFileToTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLogFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface AppmeshVirtualNodeSpecLoggingAccessLog {
  /** file block */
  readonly file?: AppmeshVirtualNodeSpecLoggingAccessLogFile[];
}

function appmeshVirtualNodeSpecLoggingAccessLogToTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLog): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    file: cdktf.listMapper(appmeshVirtualNodeSpecLoggingAccessLogFileToTerraform)(struct!.file),
  }
}

export interface AppmeshVirtualNodeSpecLogging {
  /** access_log block */
  readonly accessLog?: AppmeshVirtualNodeSpecLoggingAccessLog[];
}

function appmeshVirtualNodeSpecLoggingToTerraform(struct?: AppmeshVirtualNodeSpecLogging): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_log: cdktf.listMapper(appmeshVirtualNodeSpecLoggingAccessLogToTerraform)(struct!.accessLog),
  }
}

export interface AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap {
  readonly attributes?: { [key: string]: string };
  readonly namespaceName: string;
  readonly serviceName: string;
}

function appmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attributes: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.attributes),
    namespace_name: cdktf.stringToTerraform(struct!.namespaceName),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}

export interface AppmeshVirtualNodeSpecServiceDiscoveryDns {
  readonly hostname: string;
}

function appmeshVirtualNodeSpecServiceDiscoveryDnsToTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryDns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}

export interface AppmeshVirtualNodeSpecServiceDiscovery {
  /** aws_cloud_map block */
  readonly awsCloudMap?: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap[];
  /** dns block */
  readonly dns?: AppmeshVirtualNodeSpecServiceDiscoveryDns[];
}

function appmeshVirtualNodeSpecServiceDiscoveryToTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscovery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aws_cloud_map: cdktf.listMapper(appmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToTerraform)(struct!.awsCloudMap),
    dns: cdktf.listMapper(appmeshVirtualNodeSpecServiceDiscoveryDnsToTerraform)(struct!.dns),
  }
}

export interface AppmeshVirtualNodeSpec {
  /** backend block */
  readonly backend?: AppmeshVirtualNodeSpecBackend[];
  /** backend_defaults block */
  readonly backendDefaults?: AppmeshVirtualNodeSpecBackendDefaults[];
  /** listener block */
  readonly listener?: AppmeshVirtualNodeSpecListener[];
  /** logging block */
  readonly logging?: AppmeshVirtualNodeSpecLogging[];
  /** service_discovery block */
  readonly serviceDiscovery?: AppmeshVirtualNodeSpecServiceDiscovery[];
}

function appmeshVirtualNodeSpecToTerraform(struct?: AppmeshVirtualNodeSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    backend: cdktf.listMapper(appmeshVirtualNodeSpecBackendToTerraform)(struct!.backend),
    backend_defaults: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsToTerraform)(struct!.backendDefaults),
    listener: cdktf.listMapper(appmeshVirtualNodeSpecListenerToTerraform)(struct!.listener),
    logging: cdktf.listMapper(appmeshVirtualNodeSpecLoggingToTerraform)(struct!.logging),
    service_discovery: cdktf.listMapper(appmeshVirtualNodeSpecServiceDiscoveryToTerraform)(struct!.serviceDiscovery),
  }
}


// Resource

export class AppmeshVirtualNode extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppmeshVirtualNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_virtual_node',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._meshName = config.meshName;
    this._meshOwner = config.meshOwner;
    this._name = config.name;
    this._tags = config.tags;
    this._spec = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // mesh_name - computed: false, optional: false, required: true
  private _meshName: string;
  public get meshName() {
    return this.getStringAttribute('mesh_name');
  }
  public set meshName(value: string) {
    this._meshName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get meshNameInput() {
    return this._meshName
  }

  // mesh_owner - computed: true, optional: true, required: false
  private _meshOwner?: string;
  public get meshOwner() {
    return this.getStringAttribute('mesh_owner');
  }
  public set meshOwner(value: string) {
    this._meshOwner = value;
  }
  public resetMeshOwner() {
    this._meshOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshOwnerInput() {
    return this._meshOwner
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // resource_owner - computed: true, optional: false, required: false
  public get resourceOwner() {
    return this.getStringAttribute('resource_owner');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // spec - computed: false, optional: false, required: true
  private _spec: AppmeshVirtualNodeSpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: AppmeshVirtualNodeSpec[]) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      mesh_name: cdktf.stringToTerraform(this._meshName),
      mesh_owner: cdktf.stringToTerraform(this._meshOwner),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      spec: cdktf.listMapper(appmeshVirtualNodeSpecToTerraform)(this._spec),
    };
  }
}
