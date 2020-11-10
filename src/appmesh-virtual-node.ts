// https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AppmeshVirtualNodeConfig extends TerraformMetaArguments {
  readonly meshName: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** spec block */
  readonly spec: AppmeshVirtualNodeSpec[];
}
export interface AppmeshVirtualNodeSpecBackendVirtualService {
  readonly virtualServiceName: string;
}
export interface AppmeshVirtualNodeSpecBackend {
  /** virtual_service block */
  readonly virtualService?: AppmeshVirtualNodeSpecBackendVirtualService[];
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
export interface AppmeshVirtualNodeSpecListenerPortMapping {
  readonly port: number;
  readonly protocol: string;
}
export interface AppmeshVirtualNodeSpecListener {
  /** health_check block */
  readonly healthCheck?: AppmeshVirtualNodeSpecListenerHealthCheck[];
  /** port_mapping block */
  readonly portMapping: AppmeshVirtualNodeSpecListenerPortMapping[];
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
  readonly serviceName?: string;
}
export interface AppmeshVirtualNodeSpecServiceDiscovery {
  /** aws_cloud_map block */
  readonly awsCloudMap?: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap[];
  /** dns block */
  readonly dns?: AppmeshVirtualNodeSpecServiceDiscoveryDns[];
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
      mesh_name: this._meshName,
      name: this._name,
      tags: this._tags,
      spec: this._spec,
    };
  }
}
