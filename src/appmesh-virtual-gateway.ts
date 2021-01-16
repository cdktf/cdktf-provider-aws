// https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AppmeshVirtualGatewayConfig extends TerraformMetaArguments {
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
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile {
  readonly certificateChain: string;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust {
  /** acm block */
  readonly acm?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm[];
  /** file block */
  readonly file?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile[];
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation {
  /** trust block */
  readonly trust: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust[];
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls {
  readonly enforce?: boolean;
  readonly ports?: number[];
  /** validation block */
  readonly validation: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation[];
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy {
  /** tls block */
  readonly tls?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls[];
}
export interface AppmeshVirtualGatewaySpecBackendDefaults {
  /** client_policy block */
  readonly clientPolicy?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy[];
}
export interface AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc {
  readonly maxRequests: number;
}
export interface AppmeshVirtualGatewaySpecListenerConnectionPoolHttp {
  readonly maxConnections: number;
  readonly maxPendingRequests?: number;
}
export interface AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 {
  readonly maxRequests: number;
}
export interface AppmeshVirtualGatewaySpecListenerConnectionPool {
  /** grpc block */
  readonly grpc?: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc[];
  /** http block */
  readonly http?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp[];
  /** http2 block */
  readonly http2?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2[];
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
export interface AppmeshVirtualGatewaySpecListenerPortMapping {
  readonly port: number;
  readonly protocol: string;
}
export interface AppmeshVirtualGatewaySpecListenerTlsCertificateAcm {
  readonly certificateArn: string;
}
export interface AppmeshVirtualGatewaySpecListenerTlsCertificateFile {
  readonly certificateChain: string;
  readonly privateKey: string;
}
export interface AppmeshVirtualGatewaySpecListenerTlsCertificate {
  /** acm block */
  readonly acm?: AppmeshVirtualGatewaySpecListenerTlsCertificateAcm[];
  /** file block */
  readonly file?: AppmeshVirtualGatewaySpecListenerTlsCertificateFile[];
}
export interface AppmeshVirtualGatewaySpecListenerTls {
  readonly mode: string;
  /** certificate block */
  readonly certificate: AppmeshVirtualGatewaySpecListenerTlsCertificate[];
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
export interface AppmeshVirtualGatewaySpecLoggingAccessLogFile {
  readonly path: string;
}
export interface AppmeshVirtualGatewaySpecLoggingAccessLog {
  /** file block */
  readonly file?: AppmeshVirtualGatewaySpecLoggingAccessLogFile[];
}
export interface AppmeshVirtualGatewaySpecLogging {
  /** access_log block */
  readonly accessLog?: AppmeshVirtualGatewaySpecLoggingAccessLog[];
}
export interface AppmeshVirtualGatewaySpec {
  /** backend_defaults block */
  readonly backendDefaults?: AppmeshVirtualGatewaySpecBackendDefaults[];
  /** listener block */
  readonly listener: AppmeshVirtualGatewaySpecListener[];
  /** logging block */
  readonly logging?: AppmeshVirtualGatewaySpecLogging[];
}

// Resource

export class AppmeshVirtualGateway extends TerraformResource {

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
  private _spec: AppmeshVirtualGatewaySpec[];
  public get spec() {
    return this._spec;
  }
  public set spec(value: AppmeshVirtualGatewaySpec[]) {
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
