// https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AppmeshVirtualNodeConfig extends TerraformMetaArguments {
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
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile {
  readonly certificateChain: string;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust {
  /** acm block */
  readonly acm?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm[];
  /** file block */
  readonly file?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile[];
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation {
  /** trust block */
  readonly trust: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust[];
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls {
  readonly enforce?: boolean;
  readonly ports?: number[];
  /** validation block */
  readonly validation: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation[];
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy {
  /** tls block */
  readonly tls?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls[];
}
export interface AppmeshVirtualNodeSpecBackendVirtualService {
  readonly virtualServiceName: string;
  /** client_policy block */
  readonly clientPolicy?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy[];
}
export interface AppmeshVirtualNodeSpecBackend {
  /** virtual_service block */
  readonly virtualService: AppmeshVirtualNodeSpecBackendVirtualService[];
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
  readonly certificateAuthorityArns: string[];
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile {
  readonly certificateChain: string;
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust {
  /** acm block */
  readonly acm?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm[];
  /** file block */
  readonly file?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile[];
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation {
  /** trust block */
  readonly trust: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust[];
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls {
  readonly enforce?: boolean;
  readonly ports?: number[];
  /** validation block */
  readonly validation: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation[];
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicy {
  /** tls block */
  readonly tls?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls[];
}
export interface AppmeshVirtualNodeSpecBackendDefaults {
  /** client_policy block */
  readonly clientPolicy?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicy[];
}
export interface AppmeshVirtualNodeSpecListenerConnectionPoolGrpc {
  readonly maxRequests: number;
}
export interface AppmeshVirtualNodeSpecListenerConnectionPoolHttp {
  readonly maxConnections: number;
  readonly maxPendingRequests?: number;
}
export interface AppmeshVirtualNodeSpecListenerConnectionPoolHttp2 {
  readonly maxRequests: number;
}
export interface AppmeshVirtualNodeSpecListenerConnectionPoolTcp {
  readonly maxConnections: number;
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
export interface AppmeshVirtualNodeSpecListenerHealthCheck {
  readonly healthyThreshold: number;
  readonly intervalMillis: number;
  readonly path?: string;
  readonly port?: number;
  readonly protocol: string;
  readonly timeoutMillis: number;
  readonly unhealthyThreshold: number;
}
export interface AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration {
  readonly unit: string;
  readonly value: number;
}
export interface AppmeshVirtualNodeSpecListenerOutlierDetectionInterval {
  readonly unit: string;
  readonly value: number;
}
export interface AppmeshVirtualNodeSpecListenerOutlierDetection {
  readonly maxEjectionPercent: number;
  readonly maxServerErrors: number;
  /** base_ejection_duration block */
  readonly baseEjectionDuration: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration[];
  /** interval block */
  readonly interval: AppmeshVirtualNodeSpecListenerOutlierDetectionInterval[];
}
export interface AppmeshVirtualNodeSpecListenerPortMapping {
  readonly port: number;
  readonly protocol: string;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle {
  readonly unit: string;
  readonly value: number;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest {
  readonly unit: string;
  readonly value: number;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutGrpc {
  /** idle block */
  readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle[];
  /** per_request block */
  readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest[];
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttpIdle {
  readonly unit: string;
  readonly value: number;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest {
  readonly unit: string;
  readonly value: number;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttp {
  /** idle block */
  readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutHttpIdle[];
  /** per_request block */
  readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest[];
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle {
  readonly unit: string;
  readonly value: number;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest {
  readonly unit: string;
  readonly value: number;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2 {
  /** idle block */
  readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle[];
  /** per_request block */
  readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest[];
}
export interface AppmeshVirtualNodeSpecListenerTimeoutTcpIdle {
  readonly unit: string;
  readonly value: number;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutTcp {
  /** idle block */
  readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutTcpIdle[];
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
export interface AppmeshVirtualNodeSpecListenerTlsCertificateAcm {
  readonly certificateArn: string;
}
export interface AppmeshVirtualNodeSpecListenerTlsCertificateFile {
  readonly certificateChain: string;
  readonly privateKey: string;
}
export interface AppmeshVirtualNodeSpecListenerTlsCertificate {
  /** acm block */
  readonly acm?: AppmeshVirtualNodeSpecListenerTlsCertificateAcm[];
  /** file block */
  readonly file?: AppmeshVirtualNodeSpecListenerTlsCertificateFile[];
}
export interface AppmeshVirtualNodeSpecListenerTls {
  readonly mode: string;
  /** certificate block */
  readonly certificate: AppmeshVirtualNodeSpecListenerTlsCertificate[];
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
export interface AppmeshVirtualNodeSpecLoggingAccessLogFile {
  readonly path: string;
}
export interface AppmeshVirtualNodeSpecLoggingAccessLog {
  /** file block */
  readonly file?: AppmeshVirtualNodeSpecLoggingAccessLogFile[];
}
export interface AppmeshVirtualNodeSpecLogging {
  /** access_log block */
  readonly accessLog?: AppmeshVirtualNodeSpecLoggingAccessLog[];
}
export interface AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap {
  readonly attributes?: { [key: string]: string };
  readonly namespaceName: string;
  readonly serviceName: string;
}
export interface AppmeshVirtualNodeSpecServiceDiscoveryDns {
  readonly hostname: string;
}
export interface AppmeshVirtualNodeSpecServiceDiscovery {
  /** aws_cloud_map block */
  readonly awsCloudMap?: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap[];
  /** dns block */
  readonly dns?: AppmeshVirtualNodeSpecServiceDiscoveryDns[];
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

// Resource

export class AppmeshVirtualNode extends TerraformResource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_date - computed: true, optional: false, required: true
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // last_updated_date - computed: true, optional: false, required: true
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // mesh_name - computed: false, optional: false, required: true
  private _meshName: string;
  public get meshName() {
    return this._meshName;
  }
  public set meshName(value: string) {
    this._meshName = value;
  }

  // mesh_owner - computed: true, optional: true, required: false
  private _meshOwner?: string;
  public get meshOwner() {
    return this._meshOwner ?? this.getStringAttribute('mesh_owner');
  }
  public set meshOwner(value: string | undefined) {
    this._meshOwner = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_owner - computed: true, optional: false, required: true
  public get resourceOwner() {
    return this.getStringAttribute('resource_owner');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // spec - computed: false, optional: false, required: true
  private _spec: AppmeshVirtualNodeSpec[];
  public get spec() {
    return this._spec;
  }
  public set spec(value: AppmeshVirtualNodeSpec[]) {
    this._spec = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      mesh_name: this._meshName,
      mesh_owner: this._meshOwner,
      name: this._name,
      tags: this._tags,
      spec: this._spec,
    };
  }
}
