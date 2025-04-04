// https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/data-sources/rds_cluster_parameter_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsRdsClusterParameterGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/data-sources/rds_cluster_parameter_group#name DataAwsRdsClusterParameterGroup#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/data-sources/rds_cluster_parameter_group aws_rds_cluster_parameter_group}
*/
export class DataAwsRdsClusterParameterGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_rds_cluster_parameter_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsRdsClusterParameterGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsRdsClusterParameterGroup to import
  * @param importFromId The id of the existing DataAwsRdsClusterParameterGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/data-sources/rds_cluster_parameter_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsRdsClusterParameterGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_rds_cluster_parameter_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/data-sources/rds_cluster_parameter_group aws_rds_cluster_parameter_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsRdsClusterParameterGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsRdsClusterParameterGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rds_cluster_parameter_group',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.94.0',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getStringAttribute('family');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
