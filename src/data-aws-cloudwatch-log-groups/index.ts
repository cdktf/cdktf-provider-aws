// https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/data-sources/cloudwatch_log_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsCloudwatchLogGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/data-sources/cloudwatch_log_groups#id DataAwsCloudwatchLogGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/data-sources/cloudwatch_log_groups#log_group_name_prefix DataAwsCloudwatchLogGroups#log_group_name_prefix}
  */
  readonly logGroupNamePrefix?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/data-sources/cloudwatch_log_groups aws_cloudwatch_log_groups}
*/
export class DataAwsCloudwatchLogGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatch_log_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsCloudwatchLogGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsCloudwatchLogGroups to import
  * @param importFromId The id of the existing DataAwsCloudwatchLogGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/data-sources/cloudwatch_log_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsCloudwatchLogGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatch_log_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/data-sources/cloudwatch_log_groups aws_cloudwatch_log_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsCloudwatchLogGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsCloudwatchLogGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_log_groups',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.55.0',
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
    this._id = config.id;
    this._logGroupNamePrefix = config.logGroupNamePrefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arns - computed: true, optional: false, required: false
  public get arns() {
    return cdktf.Fn.tolist(this.getListAttribute('arns'));
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

  // log_group_name_prefix - computed: false, optional: true, required: false
  private _logGroupNamePrefix?: string; 
  public get logGroupNamePrefix() {
    return this.getStringAttribute('log_group_name_prefix');
  }
  public set logGroupNamePrefix(value: string) {
    this._logGroupNamePrefix = value;
  }
  public resetLogGroupNamePrefix() {
    this._logGroupNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNamePrefixInput() {
    return this._logGroupNamePrefix;
  }

  // log_group_names - computed: true, optional: false, required: false
  public get logGroupNames() {
    return cdktf.Fn.tolist(this.getListAttribute('log_group_names'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      log_group_name_prefix: cdktf.stringToTerraform(this._logGroupNamePrefix),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_group_name_prefix: {
        value: cdktf.stringToHclTerraform(this._logGroupNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
