// https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppmeshMeshConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** spec block */
  readonly spec?: AppmeshMeshSpec[];
}
export interface AppmeshMeshSpecEgressFilter {
  readonly type?: string;
}

function appmeshMeshSpecEgressFilterToTerraform(struct?: AppmeshMeshSpecEgressFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface AppmeshMeshSpec {
  /** egress_filter block */
  readonly egressFilter?: AppmeshMeshSpecEgressFilter[];
}

function appmeshMeshSpecToTerraform(struct?: AppmeshMeshSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    egress_filter: cdktf.listMapper(appmeshMeshSpecEgressFilterToTerraform)(struct!.egressFilter),
  }
}


// Resource

export class AppmeshMesh extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppmeshMeshConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_mesh',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
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

  // spec - computed: false, optional: true, required: false
  private _spec?: AppmeshMeshSpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: AppmeshMeshSpec[] ) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
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
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      spec: cdktf.listMapper(appmeshMeshSpecToTerraform)(this._spec),
    };
  }
}
