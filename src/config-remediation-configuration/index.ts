/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_remediation_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigRemediationConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_remediation_configuration#automatic ConfigRemediationConfiguration#automatic}
  */
  readonly automatic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_remediation_configuration#config_rule_name ConfigRemediationConfiguration#config_rule_name}
  */
  readonly configRuleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_remediation_configuration#id ConfigRemediationConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_remediation_configuration#maximum_automatic_attempts ConfigRemediationConfiguration#maximum_automatic_attempts}
  */
  readonly maximumAutomaticAttempts?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_remediation_configuration#region ConfigRemediationConfiguration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_remediation_configuration#resource_type ConfigRemediationConfiguration#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_remediation_configuration#retry_attempt_seconds ConfigRemediationConfiguration#retry_attempt_seconds}
  */
  readonly retryAttemptSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_remediation_configuration#target_id ConfigRemediationConfiguration#target_id}
  */
  readonly targetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_remediation_configuration#target_type ConfigRemediationConfiguration#target_type}
  */
  readonly targetType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_remediation_configuration#target_version ConfigRemediationConfiguration#target_version}
  */
  readonly targetVersion?: string;
  /**
  * execution_controls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_remediation_configuration#execution_controls ConfigRemediationConfiguration#execution_controls}
  */
  readonly executionControls?: ConfigRemediationConfigurationExecutionControls;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_remediation_configuration#parameter ConfigRemediationConfiguration#parameter}
  */
  readonly parameter?: ConfigRemediationConfigurationParameter[] | cdktf.IResolvable;
}
export interface ConfigRemediationConfigurationExecutionControlsSsmControls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_remediation_configuration#concurrent_execution_rate_percentage ConfigRemediationConfiguration#concurrent_execution_rate_percentage}
  */
  readonly concurrentExecutionRatePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_remediation_configuration#error_percentage ConfigRemediationConfiguration#error_percentage}
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


export function configRemediationConfigurationExecutionControlsSsmControlsToHclTerraform(struct?: ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference | ConfigRemediationConfigurationExecutionControlsSsmControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrent_execution_rate_percentage: {
      value: cdktf.numberToHclTerraform(struct!.concurrentExecutionRatePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_percentage: {
      value: cdktf.numberToHclTerraform(struct!.errorPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_remediation_configuration#ssm_controls ConfigRemediationConfiguration#ssm_controls}
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


export function configRemediationConfigurationExecutionControlsToHclTerraform(struct?: ConfigRemediationConfigurationExecutionControlsOutputReference | ConfigRemediationConfigurationExecutionControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssm_controls: {
      value: configRemediationConfigurationExecutionControlsSsmControlsToHclTerraform(struct!.ssmControls),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigRemediationConfigurationExecutionControlsSsmControlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigRemediationConfigurationExecutionControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  private _ssmControls = new ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference(this, "ssm_controls");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_remediation_configuration#name ConfigRemediationConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_remediation_configuration#resource_value ConfigRemediationConfiguration#resource_value}
  */
  readonly resourceValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_remediation_configuration#static_value ConfigRemediationConfiguration#static_value}
  */
  readonly staticValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_remediation_configuration#static_values ConfigRemediationConfiguration#static_values}
  */
  readonly staticValues?: string[];
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
    static_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.staticValues),
  }
}


export function configRemediationConfigurationParameterToHclTerraform(struct?: ConfigRemediationConfigurationParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_value: {
      value: cdktf.stringToHclTerraform(struct!.resourceValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_value: {
      value: cdktf.stringToHclTerraform(struct!.staticValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.staticValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigRemediationConfigurationParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConfigRemediationConfigurationParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceValue = this._resourceValue;
    }
    if (this._staticValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticValue = this._staticValue;
    }
    if (this._staticValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticValues = this._staticValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigRemediationConfigurationParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resourceValue = undefined;
      this._staticValue = undefined;
      this._staticValues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resourceValue = value.resourceValue;
      this._staticValue = value.staticValue;
      this._staticValues = value.staticValues;
    }
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

  // resource_value - computed: false, optional: true, required: false
  private _resourceValue?: string; 
  public get resourceValue() {
    return this.getStringAttribute('resource_value');
  }
  public set resourceValue(value: string) {
    this._resourceValue = value;
  }
  public resetResourceValue() {
    this._resourceValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceValueInput() {
    return this._resourceValue;
  }

  // static_value - computed: false, optional: true, required: false
  private _staticValue?: string; 
  public get staticValue() {
    return this.getStringAttribute('static_value');
  }
  public set staticValue(value: string) {
    this._staticValue = value;
  }
  public resetStaticValue() {
    this._staticValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticValueInput() {
    return this._staticValue;
  }

  // static_values - computed: true, optional: true, required: false
  private _staticValues?: string[]; 
  public get staticValues() {
    return this.getListAttribute('static_values');
  }
  public set staticValues(value: string[]) {
    this._staticValues = value;
  }
  public resetStaticValues() {
    this._staticValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticValuesInput() {
    return this._staticValues;
  }
}

export class ConfigRemediationConfigurationParameterList extends cdktf.ComplexList {
  public internalValue? : ConfigRemediationConfigurationParameter[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConfigRemediationConfigurationParameterOutputReference {
    return new ConfigRemediationConfigurationParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_remediation_configuration aws_config_remediation_configuration}
*/
export class ConfigRemediationConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_config_remediation_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigRemediationConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigRemediationConfiguration to import
  * @param importFromId The id of the existing ConfigRemediationConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_remediation_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigRemediationConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_config_remediation_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/config_remediation_configuration aws_config_remediation_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigRemediationConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigRemediationConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_config_remediation_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._automatic = config.automatic;
    this._configRuleName = config.configRuleName;
    this._id = config.id;
    this._maximumAutomaticAttempts = config.maximumAutomaticAttempts;
    this._region = config.region;
    this._resourceType = config.resourceType;
    this._retryAttemptSeconds = config.retryAttemptSeconds;
    this._targetId = config.targetId;
    this._targetType = config.targetType;
    this._targetVersion = config.targetVersion;
    this._executionControls.internalValue = config.executionControls;
    this._parameter.internalValue = config.parameter;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
  private _executionControls = new ConfigRemediationConfigurationExecutionControlsOutputReference(this, "execution_controls");
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
  private _parameter = new ConfigRemediationConfigurationParameterList(this, "parameter", false);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: ConfigRemediationConfigurationParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automatic: cdktf.booleanToTerraform(this._automatic),
      config_rule_name: cdktf.stringToTerraform(this._configRuleName),
      id: cdktf.stringToTerraform(this._id),
      maximum_automatic_attempts: cdktf.numberToTerraform(this._maximumAutomaticAttempts),
      region: cdktf.stringToTerraform(this._region),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      retry_attempt_seconds: cdktf.numberToTerraform(this._retryAttemptSeconds),
      target_id: cdktf.stringToTerraform(this._targetId),
      target_type: cdktf.stringToTerraform(this._targetType),
      target_version: cdktf.stringToTerraform(this._targetVersion),
      execution_controls: configRemediationConfigurationExecutionControlsToTerraform(this._executionControls.internalValue),
      parameter: cdktf.listMapper(configRemediationConfigurationParameterToTerraform, true)(this._parameter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automatic: {
        value: cdktf.booleanToHclTerraform(this._automatic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      config_rule_name: {
        value: cdktf.stringToHclTerraform(this._configRuleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_automatic_attempts: {
        value: cdktf.numberToHclTerraform(this._maximumAutomaticAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_attempt_seconds: {
        value: cdktf.numberToHclTerraform(this._retryAttemptSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target_id: {
        value: cdktf.stringToHclTerraform(this._targetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_type: {
        value: cdktf.stringToHclTerraform(this._targetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_version: {
        value: cdktf.stringToHclTerraform(this._targetVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_controls: {
        value: configRemediationConfigurationExecutionControlsToHclTerraform(this._executionControls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigRemediationConfigurationExecutionControlsList",
      },
      parameter: {
        value: cdktf.listMapperHcl(configRemediationConfigurationParameterToHclTerraform, true)(this._parameter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigRemediationConfigurationParameterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
