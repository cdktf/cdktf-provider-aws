// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS IoT
*/
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
        providerVersion: '4.11.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultLogLevel = config.defaultLogLevel;
    this._disableAllLogs = config.disableAllLogs;
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
  public get id() {
    return this.getStringAttribute('id');
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
      role_arn: cdktf.stringToTerraform(this._roleArn),
    };
  }
}
