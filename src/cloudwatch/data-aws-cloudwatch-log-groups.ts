// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CloudWatch
*/
export interface DataAwsCloudwatchLogGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_log_groups#log_group_name_prefix DataAwsCloudwatchLogGroups#log_group_name_prefix}
  */
  readonly logGroupNamePrefix: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_log_groups aws_cloudwatch_log_groups}
*/
export class DataAwsCloudwatchLogGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudwatch_log_groups";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_log_groups aws_cloudwatch_log_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsCloudwatchLogGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsCloudwatchLogGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_log_groups',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_group_name_prefix - computed: false, optional: false, required: true
  private _logGroupNamePrefix?: string; 
  public get logGroupNamePrefix() {
    return this.getStringAttribute('log_group_name_prefix');
  }
  public set logGroupNamePrefix(value: string) {
    this._logGroupNamePrefix = value;
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
      log_group_name_prefix: cdktf.stringToTerraform(this._logGroupNamePrefix),
    };
  }
}
