// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Config
*/
export interface ConfigRemediationConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#automatic ConfigRemediationConfiguration#automatic}
  */
  readonly automatic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#config_rule_name ConfigRemediationConfiguration#config_rule_name}
  */
  readonly configRuleName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#maximum_automatic_attempts ConfigRemediationConfiguration#maximum_automatic_attempts}
  */
  readonly maximumAutomaticAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#resource_type ConfigRemediationConfiguration#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#retry_attempt_seconds ConfigRemediationConfiguration#retry_attempt_seconds}
  */
  readonly retryAttemptSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_id ConfigRemediationConfiguration#target_id}
  */
  readonly targetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_type ConfigRemediationConfiguration#target_type}
  */
  readonly targetType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_version ConfigRemediationConfiguration#target_version}
  */
  readonly targetVersion?: string;
  /**
  * execution_controls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#execution_controls ConfigRemediationConfiguration#execution_controls}
  */
  readonly executionControls?: ConfigRemediationConfigurationExecutionControls;
  /**
  * parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#parameter ConfigRemediationConfiguration#parameter}
  */
  readonly parameter?: ConfigRemediationConfigurationParameter[] | cdktf.IResolvable;
}
export interface ConfigRemediationConfigurationExecutionControlsSsmControls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#concurrent_execution_rate_percentage ConfigRemediationConfiguration#concurrent_execution_rate_percentage}
  */
  readonly concurrentExecutionRatePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#error_percentage ConfigRemediationConfiguration#error_percentage}
  */
  readonly errorPercentage?: number;
}

export function configRemediationConfigurationExecutionControlsSsmControlsToTerraform(struct?: ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference | ConfigRemediationConfigurationExecutionControlsSsmControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrent_execution_rate_percentage: cdktf.numberToTerraform(struct!.concurrentExecutionRatePercentage),
    error_percentage: cdktf.numberToTerraform(struct!.errorPercentage),
  }
}

export class ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ConfigRemediationConfigurationExecutionControlsSsmControls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrentExecutionRatePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentExecutionRatePercentage = this._concurrentExecutionRatePercentage;
    }
    if (this._errorPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorPercentage = this._errorPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigRemediationConfigurationExecutionControlsSsmControls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._concurrentExecutionRatePercentage = undefined;
      this._errorPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._concurrentExecutionRatePercentage = value.concurrentExecutionRatePercentage;
      this._errorPercentage = value.errorPercentage;
    }
  }

  // concurrent_execution_rate_percentage - computed: false, optional: true, required: false
  private _concurrentExecutionRatePercentage?: number; 
  public get concurrentExecutionRatePercentage() {
    return this.getNumberAttribute('concurrent_execution_rate_percentage');
  }
  public set concurrentExecutionRatePercentage(value: number) {
    this._concurrentExecutionRatePercentage = value;
  }
  public resetConcurrentExecutionRatePercentage() {
    this._concurrentExecutionRatePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentExecutionRatePercentageInput() {
    return this._concurrentExecutionRatePercentage;
  }

  // error_percentage - computed: false, optional: true, required: false
  private _errorPercentage?: number; 
  public get errorPercentage() {
    return this.getNumberAttribute('error_percentage');
  }
  public set errorPercentage(value: number) {
    this._errorPercentage = value;
  }
  public resetErrorPercentage() {
    this._errorPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPercentageInput() {
    return this._errorPercentage;
  }
}
export interface ConfigRemediationConfigurationExecutionControls {
  /**
  * ssm_controls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#ssm_controls ConfigRemediationConfiguration#ssm_controls}
  */
  readonly ssmControls?: ConfigRemediationConfigurationExecutionControlsSsmControls;
}

export function configRemediationConfigurationExecutionControlsToTerraform(struct?: ConfigRemediationConfigurationExecutionControlsOutputReference | ConfigRemediationConfigurationExecutionControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssm_controls: configRemediationConfigurationExecutionControlsSsmControlsToTerraform(struct!.ssmControls),
  }
}

export class ConfigRemediationConfigurationExecutionControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ConfigRemediationConfigurationExecutionControls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ssmControls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmControls = this._ssmControls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigRemediationConfigurationExecutionControls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ssmControls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ssmControls.internalValue = value.ssmControls;
    }
  }

  // ssm_controls - computed: false, optional: true, required: false
  private _ssmControls = new ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference(this, "ssm_controls", true);
  public get ssmControls() {
    return this._ssmControls;
  }
  public putSsmControls(value: ConfigRemediationConfigurationExecutionControlsSsmControls) {
    this._ssmControls.internalValue = value;
  }
  public resetSsmControls() {
    this._ssmControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmControlsInput() {
    return this._ssmControls.internalValue;
  }
}
export interface ConfigRemediationConfigurationParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#name ConfigRemediationConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#resource_value ConfigRemediationConfiguration#resource_value}
  */
  readonly resourceValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#static_value ConfigRemediationConfiguration#static_value}
  */
  readonly staticValue?: string;
}

export function configRemediationConfigurationParameterToTerraform(struct?: ConfigRemediationConfigurationParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_value: cdktf.stringToTerraform(struct!.resourceValue),
    static_value: cdktf.stringToTerraform(struct!.staticValue),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration aws_config_remediation_configuration}
*/
export class ConfigRemediationConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_config_remediation_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration aws_config_remediation_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigRemediationConfigurationConfig
  */
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
    this._automatic = config.automatic;
    this._configRuleName = config.configRuleName;
    this._maximumAutomaticAttempts = config.maximumAutomaticAttempts;
    this._resourceType = config.resourceType;
    this._retryAttemptSeconds = config.retryAttemptSeconds;
    this._targetId = config.targetId;
    this._targetType = config.targetType;
    this._targetVersion = config.targetVersion;
    this._executionControls.internalValue = config.executionControls;
    this._parameter = config.parameter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // automatic - computed: false, optional: true, required: false
  private _automatic?: boolean | cdktf.IResolvable; 
  public get automatic() {
    return this.getBooleanAttribute('automatic');
  }
  public set automatic(value: boolean | cdktf.IResolvable) {
    this._automatic = value;
  }
  public resetAutomatic() {
    this._automatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticInput() {
    return this._automatic;
  }

  // config_rule_name - computed: false, optional: false, required: true
  private _configRuleName?: string; 
  public get configRuleName() {
    return this.getStringAttribute('config_rule_name');
  }
  public set configRuleName(value: string) {
    this._configRuleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configRuleNameInput() {
    return this._configRuleName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maximum_automatic_attempts - computed: false, optional: true, required: false
  private _maximumAutomaticAttempts?: number; 
  public get maximumAutomaticAttempts() {
    return this.getNumberAttribute('maximum_automatic_attempts');
  }
  public set maximumAutomaticAttempts(value: number) {
    this._maximumAutomaticAttempts = value;
  }
  public resetMaximumAutomaticAttempts() {
    this._maximumAutomaticAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumAutomaticAttemptsInput() {
    return this._maximumAutomaticAttempts;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // retry_attempt_seconds - computed: false, optional: true, required: false
  private _retryAttemptSeconds?: number; 
  public get retryAttemptSeconds() {
    return this.getNumberAttribute('retry_attempt_seconds');
  }
  public set retryAttemptSeconds(value: number) {
    this._retryAttemptSeconds = value;
  }
  public resetRetryAttemptSeconds() {
    this._retryAttemptSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryAttemptSecondsInput() {
    return this._retryAttemptSeconds;
  }

  // target_id - computed: false, optional: false, required: true
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // target_version - computed: false, optional: true, required: false
  private _targetVersion?: string; 
  public get targetVersion() {
    return this.getStringAttribute('target_version');
  }
  public set targetVersion(value: string) {
    this._targetVersion = value;
  }
  public resetTargetVersion() {
    this._targetVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVersionInput() {
    return this._targetVersion;
  }

  // execution_controls - computed: false, optional: true, required: false
  private _executionControls = new ConfigRemediationConfigurationExecutionControlsOutputReference(this, "execution_controls", true);
  public get executionControls() {
    return this._executionControls;
  }
  public putExecutionControls(value: ConfigRemediationConfigurationExecutionControls) {
    this._executionControls.internalValue = value;
  }
  public resetExecutionControls() {
    this._executionControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionControlsInput() {
    return this._executionControls.internalValue;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter?: ConfigRemediationConfigurationParameter[] | cdktf.IResolvable; 
  public get parameter() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('parameter')));
  }
  public set parameter(value: ConfigRemediationConfigurationParameter[] | cdktf.IResolvable) {
    this._parameter = value;
  }
  public resetParameter() {
    this._parameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automatic: cdktf.booleanToTerraform(this._automatic),
      config_rule_name: cdktf.stringToTerraform(this._configRuleName),
      maximum_automatic_attempts: cdktf.numberToTerraform(this._maximumAutomaticAttempts),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      retry_attempt_seconds: cdktf.numberToTerraform(this._retryAttemptSeconds),
      target_id: cdktf.stringToTerraform(this._targetId),
      target_type: cdktf.stringToTerraform(this._targetType),
      target_version: cdktf.stringToTerraform(this._targetVersion),
      execution_controls: configRemediationConfigurationExecutionControlsToTerraform(this._executionControls.internalValue),
      parameter: cdktf.listMapper(configRemediationConfigurationParameterToTerraform)(this._parameter),
    };
  }
}
