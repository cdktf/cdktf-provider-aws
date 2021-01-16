// https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigRemediationConfigurationConfig extends cdktf.TerraformMetaArguments {
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

function configRemediationConfigurationParameterToTerraform(struct?: ConfigRemediationConfigurationParameter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_value: cdktf.stringToTerraform(struct!.resourceValue),
    static_value: cdktf.stringToTerraform(struct!.staticValue),
  }
}


// Resource

export class ConfigRemediationConfiguration extends cdktf.TerraformResource {

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // config_rule_name - computed: false, optional: false, required: true
  private _configRuleName: string;
  public get configRuleName() {
    return this.getStringAttribute('config_rule_name');
  }
  public set configRuleName(value: string) {
    this._configRuleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configRuleNameInput() {
    return this._configRuleName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string;
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string ) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType
  }

  // target_id - computed: false, optional: false, required: true
  private _targetId: string;
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType: string;
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType
  }

  // target_version - computed: false, optional: true, required: false
  private _targetVersion?: string;
  public get targetVersion() {
    return this.getStringAttribute('target_version');
  }
  public set targetVersion(value: string ) {
    this._targetVersion = value;
  }
  public resetTargetVersion() {
    this._targetVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVersionInput() {
    return this._targetVersion
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter?: ConfigRemediationConfigurationParameter[];
  public get parameter() {
    return this.interpolationForAttribute('parameter') as any;
  }
  public set parameter(value: ConfigRemediationConfigurationParameter[] ) {
    this._parameter = value;
  }
  public resetParameter() {
    this._parameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_rule_name: cdktf.stringToTerraform(this._configRuleName),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      target_id: cdktf.stringToTerraform(this._targetId),
      target_type: cdktf.stringToTerraform(this._targetType),
      target_version: cdktf.stringToTerraform(this._targetVersion),
      parameter: cdktf.listMapper(configRemediationConfigurationParameterToTerraform)(this._parameter),
    };
  }
}
