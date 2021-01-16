// https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppmeshVirtualGatewayConfig extends cdktf.TerraformMetaArguments {
  readonly meshName: string;
  readonly meshOwner?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** spec block */
  readonly spec: AppmeshVirtualGatewaySpec[];
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
  readonly certificateAuthorityArns: string[];
}

function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.certificateAuthorityArns),
  }
}

export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile {
  readonly certificateChain: string;
}

function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
  }
}

export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust {
  /** acm block */
  readonly acm?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm[];
  /** file block */
  readonly file?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile[];
}

function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    acm: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform)(struct!.acm),
    file: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform)(struct!.file),
  }
}

export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation {
  /** trust block */
  readonly trust: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust[];
}

function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    trust: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform)(struct!.trust),
  }
}

export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls {
  readonly enforce?: boolean;
  readonly ports?: number[];
  /** validation block */
  readonly validation: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation[];
}

function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enforce: cdktf.booleanToTerraform(struct!.enforce),
    ports: cdktf.listMapper(cdktf.numberToTerraform)(struct!.ports),
    validation: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform)(struct!.validation),
  }
}

export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy {
  /** tls block */
  readonly tls?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls[];
}

function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    tls: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform)(struct!.tls),
  }
}

export interface AppmeshVirtualGatewaySpecBackendDefaults {
  /** client_policy block */
  readonly clientPolicy?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy[];
}

function appmeshVirtualGatewaySpecBackendDefaultsToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaults): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_policy: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform)(struct!.clientPolicy),
  }
}

export interface AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc {
  readonly maxRequests: number;
}

function appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
  }
}

export interface AppmeshVirtualGatewaySpecListenerConnectionPoolHttp {
  readonly maxConnections: number;
  readonly maxPendingRequests?: number;
}

function appmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
  }
}

export interface AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 {
  readonly maxRequests: number;
}

function appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
  }
}

export interface AppmeshVirtualGatewaySpecListenerConnectionPool {
  /** grpc block */
  readonly grpc?: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc[];
  /** http block */
  readonly http?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp[];
  /** http2 block */
  readonly http2?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2[];
}

function appmeshVirtualGatewaySpecListenerConnectionPoolToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPool): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    grpc: cdktf.listMapper(appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform)(struct!.grpc),
    http: cdktf.listMapper(appmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform)(struct!.http),
    http2: cdktf.listMapper(appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform)(struct!.http2),
  }
}

export interface AppmeshVirtualGatewaySpecListenerHealthCheck {
  readonly healthyThreshold: number;
  readonly intervalMillis: number;
  readonly path?: string;
  readonly port?: number;
  readonly protocol: string;
  readonly timeoutMillis: number;
  readonly unhealthyThreshold: number;
}

function appmeshVirtualGatewaySpecListenerHealthCheckToTerraform(struct?: AppmeshVirtualGatewaySpecListenerHealthCheck): any {
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

export interface AppmeshVirtualGatewaySpecListenerPortMapping {
  readonly port: number;
  readonly protocol: string;
}

function appmeshVirtualGatewaySpecListenerPortMappingToTerraform(struct?: AppmeshVirtualGatewaySpecListenerPortMapping): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface AppmeshVirtualGatewaySpecListenerTlsCertificateAcm {
  readonly certificateArn: string;
}

function appmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateAcm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_arn: cdktf.stringToTerraform(struct!.certificateArn),
  }
}

export interface AppmeshVirtualGatewaySpecListenerTlsCertificateFile {
  readonly certificateChain: string;
  readonly privateKey: string;
}

function appmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}

export interface AppmeshVirtualGatewaySpecListenerTlsCertificate {
  /** acm block */
  readonly acm?: AppmeshVirtualGatewaySpecListenerTlsCertificateAcm[];
  /** file block */
  readonly file?: AppmeshVirtualGatewaySpecListenerTlsCertificateFile[];
}

function appmeshVirtualGatewaySpecListenerTlsCertificateToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    acm: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform)(struct!.acm),
    file: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform)(struct!.file),
  }
}

export interface AppmeshVirtualGatewaySpecListenerTls {
  readonly mode: string;
  /** certificate block */
  readonly certificate: AppmeshVirtualGatewaySpecListenerTlsCertificate[];
}

function appmeshVirtualGatewaySpecListenerTlsToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    certificate: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsCertificateToTerraform)(struct!.certificate),
  }
}

export interface AppmeshVirtualGatewaySpecListener {
  /** connection_pool block */
  readonly connectionPool?: AppmeshVirtualGatewaySpecListenerConnectionPool[];
  /** health_check block */
  readonly healthCheck?: AppmeshVirtualGatewaySpecListenerHealthCheck[];
  /** port_mapping block */
  readonly portMapping: AppmeshVirtualGatewaySpecListenerPortMapping[];
  /** tls block */
  readonly tls?: AppmeshVirtualGatewaySpecListenerTls[];
}

function appmeshVirtualGatewaySpecListenerToTerraform(struct?: AppmeshVirtualGatewaySpecListener): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connection_pool: cdktf.listMapper(appmeshVirtualGatewaySpecListenerConnectionPoolToTerraform)(struct!.connectionPool),
    health_check: cdktf.listMapper(appmeshVirtualGatewaySpecListenerHealthCheckToTerraform)(struct!.healthCheck),
    port_mapping: cdktf.listMapper(appmeshVirtualGatewaySpecListenerPortMappingToTerraform)(struct!.portMapping),
    tls: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsToTerraform)(struct!.tls),
  }
}

export interface AppmeshVirtualGatewaySpecLoggingAccessLogFile {
  readonly path: string;
}

function appmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform(struct?: AppmeshVirtualGatewaySpecLoggingAccessLogFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface AppmeshVirtualGatewaySpecLoggingAccessLog {
  /** file block */
  readonly file?: AppmeshVirtualGatewaySpecLoggingAccessLogFile[];
}

function appmeshVirtualGatewaySpecLoggingAccessLogToTerraform(struct?: AppmeshVirtualGatewaySpecLoggingAccessLog): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    file: cdktf.listMapper(appmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform)(struct!.file),
  }
}

export interface AppmeshVirtualGatewaySpecLogging {
  /** access_log block */
  readonly accessLog?: AppmeshVirtualGatewaySpecLoggingAccessLog[];
}

function appmeshVirtualGatewaySpecLoggingToTerraform(struct?: AppmeshVirtualGatewaySpecLogging): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_log: cdktf.listMapper(appmeshVirtualGatewaySpecLoggingAccessLogToTerraform)(struct!.accessLog),
  }
}

export interface AppmeshVirtualGatewaySpec {
  /** backend_defaults block */
  readonly backendDefaults?: AppmeshVirtualGatewaySpecBackendDefaults[];
  /** listener block */
  readonly listener: AppmeshVirtualGatewaySpecListener[];
  /** logging block */
  readonly logging?: AppmeshVirtualGatewaySpecLogging[];
}

function appmeshVirtualGatewaySpecToTerraform(struct?: AppmeshVirtualGatewaySpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    backend_defaults: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsToTerraform)(struct!.backendDefaults),
    listener: cdktf.listMapper(appmeshVirtualGatewaySpecListenerToTerraform)(struct!.listener),
    logging: cdktf.listMapper(appmeshVirtualGatewaySpecLoggingToTerraform)(struct!.logging),
  }
}


// Resource

export class AppmeshVirtualGateway extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppmeshVirtualGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_virtual_gateway',
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
  private _spec: AppmeshVirtualGatewaySpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: AppmeshVirtualGatewaySpec[]) {
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
      spec: cdktf.listMapper(appmeshVirtualGatewaySpecToTerraform)(this._spec),
    };
  }
}
