// https://www.terraform.io/docs/providers/aws/r/iot_logging_options
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotLoggingOptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_logging_options#default_log_level IotLoggingOptions#default_log_level}
  */
  readonly defaultLogLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_logging_options#disable_all_logs IotLoggingOptions#disable_all_logs}
  */
  readonly disableAllLogs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_logging_options#id IotLoggingOptions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_logging_options#role_arn IotLoggingOptions#role_arn}
  */
  readonly roleArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_logging_options aws_iot_logging_options}
*/
export class IotLoggingOptions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iot_logging_options";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_logging_options aws_iot_logging_options} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotLoggingOptionsConfig
  */
  public constructor(scope: Construct, id: string, config: IotLoggingOptionsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_logging_options',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultLogLevel = config.defaultLogLevel;
    this._disableAllLogs = config.disableAllLogs;
    this._id = config.id;
    this._roleArn = config.roleArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_log_level - computed: false, optional: false, required: true
  private _defaultLogLevel?: string; 
  public get defaultLogLevel() {
    return this.getStringAttribute('default_log_level');
  }
  public set defaultLogLevel(value: string) {
    this._defaultLogLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLogLevelInput() {
    return this._defaultLogLevel;
  }

  // disable_all_logs - computed: false, optional: true, required: false
  private _disableAllLogs?: boolean | cdktf.IResolvable; 
  public get disableAllLogs() {
    return this.getBooleanAttribute('disable_all_logs');
  }
  public set disableAllLogs(value: boolean | cdktf.IResolvable) {
    this._disableAllLogs = value;
  }
  public resetDisableAllLogs() {
    this._disableAllLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAllLogsInput() {
    return this._disableAllLogs;
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_log_level: cdktf.stringToTerraform(this._defaultLogLevel),
      disable_all_logs: cdktf.booleanToTerraform(this._disableAllLogs),
      id: cdktf.stringToTerraform(this._id),
      role_arn: cdktf.stringToTerraform(this._roleArn),
    };
  }
}
