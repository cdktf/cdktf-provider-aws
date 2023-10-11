// https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/prometheus_workspaces
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsPrometheusWorkspacesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/prometheus_workspaces#alias_prefix DataAwsPrometheusWorkspaces#alias_prefix}
  */
  readonly aliasPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/prometheus_workspaces#id DataAwsPrometheusWorkspaces#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/prometheus_workspaces aws_prometheus_workspaces}
*/
export class DataAwsPrometheusWorkspaces extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_prometheus_workspaces";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/prometheus_workspaces aws_prometheus_workspaces} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsPrometheusWorkspacesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsPrometheusWorkspacesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_prometheus_workspaces',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.20.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aliasPrefix = config.aliasPrefix;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias_prefix - computed: false, optional: true, required: false
  private _aliasPrefix?: string; 
  public get aliasPrefix() {
    return this.getStringAttribute('alias_prefix');
  }
  public set aliasPrefix(value: string) {
    this._aliasPrefix = value;
  }
  public resetAliasPrefix() {
    this._aliasPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasPrefixInput() {
    return this._aliasPrefix;
  }

  // aliases - computed: true, optional: false, required: false
  public get aliases() {
    return this.getListAttribute('aliases');
  }

  // arns - computed: true, optional: false, required: false
  public get arns() {
    return this.getListAttribute('arns');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // workspace_ids - computed: true, optional: false, required: false
  public get workspaceIds() {
    return this.getListAttribute('workspace_ids');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias_prefix: cdktf.stringToTerraform(this._aliasPrefix),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
