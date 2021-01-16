// https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ConfigRemediationConfigurationConfig extends TerraformMetaArguments {
  readonly configRuleName: string;
  readonly resourceType?: string;
  readonly targetId: string;
  readonly targetType: string;
  readonly targetVersion?: string;
  /** parameter block */
  readonly parameter?: ConfigRemediationConfigurationParameter[];
}
export interface ConfigRemediationConfigurationParameter {
  readonly name: string;
  readonly resourceValue?: string;
  readonly staticValue?: string;
}

// Resource

export class ConfigRemediationConfiguration extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ConfigRemediationConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_config_remediation_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._configRuleName = config.configRuleName;
    this._resourceType = config.resourceType;
    this._targetId = config.targetId;
    this._targetType = config.targetType;
    this._targetVersion = config.targetVersion;
    this._parameter = config.parameter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // config_rule_name - computed: false, optional: false, required: true
  private _configRuleName: string;
  public get configRuleName() {
    return this._configRuleName;
  }
  public set configRuleName(value: string) {
    this._configRuleName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string;
  public get resourceType() {
    return this._resourceType;
  }
  public set resourceType(value: string | undefined) {
    this._resourceType = value;
  }

  // target_id - computed: false, optional: false, required: true
  private _targetId: string;
  public get targetId() {
    return this._targetId;
  }
  public set targetId(value: string) {
    this._targetId = value;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType: string;
  public get targetType() {
    return this._targetType;
  }
  public set targetType(value: string) {
    this._targetType = value;
  }

  // target_version - computed: false, optional: true, required: false
  private _targetVersion?: string;
  public get targetVersion() {
    return this._targetVersion;
  }
  public set targetVersion(value: string | undefined) {
    this._targetVersion = value;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter?: ConfigRemediationConfigurationParameter[];
  public get parameter() {
    return this._parameter;
  }
  public set parameter(value: ConfigRemediationConfigurationParameter[] | undefined) {
    this._parameter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_rule_name: this._configRuleName,
      resource_type: this._resourceType,
      target_id: this._targetId,
      target_type: this._targetType,
      target_version: this._targetVersion,
      parameter: this._parameter,
    };
  }
}
