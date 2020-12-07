// https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppmeshVirtualNodeConfig extends cdktf.TerraformMetaArguments {
  readonly meshName: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** spec block */
  readonly spec: AppmeshVirtualNodeSpec[];
}
export interface AppmeshVirtualNodeSpecBackendVirtualService {
  readonly virtualServiceName: string;
}

function appmeshVirtualNodeSpecBackendVirtualServiceToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    virtual_service_name: cdktf.stringToTerraform(struct!.virtualServiceName),
  }
}

export interface AppmeshVirtualNodeSpecBackend {
  /** virtual_service block */
  readonly virtualService?: AppmeshVirtualNodeSpecBackendVirtualService[];
}

function appmeshVirtualNodeSpecBackendToTerraform(struct?: AppmeshVirtualNodeSpecBackend): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    virtual_service: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceToTerraform)(struct!.virtualService),
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

export interface AppmeshVirtualNodeSpecListener {
  /** health_check block */
  readonly healthCheck?: AppmeshVirtualNodeSpecListenerHealthCheck[];
  /** port_mapping block */
  readonly portMapping: AppmeshVirtualNodeSpecListenerPortMapping[];
}

function appmeshVirtualNodeSpecListenerToTerraform(struct?: AppmeshVirtualNodeSpecListener): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    health_check: cdktf.listMapper(appmeshVirtualNodeSpecListenerHealthCheckToTerraform)(struct!.healthCheck),
    port_mapping: cdktf.listMapper(appmeshVirtualNodeSpecListenerPortMappingToTerraform)(struct!.portMapping),
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
  readonly serviceName?: string;
}

function appmeshVirtualNodeSpecServiceDiscoveryDnsToTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryDns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
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
  readonly backends?: string[];
  /** backend block */
  readonly backend?: AppmeshVirtualNodeSpecBackend[];
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
    backends: cdktf.listMapper(cdktf.stringToTerraform)(struct!.backends),
    backend: cdktf.listMapper(appmeshVirtualNodeSpecBackendToTerraform)(struct!.backend),
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
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      spec: cdktf.listMapper(appmeshVirtualNodeSpecToTerraform)(this._spec),
    };
  }
}
