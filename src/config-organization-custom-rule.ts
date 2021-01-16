// https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigOrganizationCustomRuleConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly excludedAccounts?: string[];
  readonly inputParameters?: string;
  readonly lambdaFunctionArn: string;
  readonly maximumExecutionFrequency?: string;
  readonly name: string;
  readonly resourceIdScope?: string;
  readonly resourceTypesScope?: string[];
  readonly tagKeyScope?: string;
  readonly tagValueScope?: string;
  readonly triggerTypes: string[];
  /** timeouts block */
  readonly timeouts?: ConfigOrganizationCustomRuleTimeouts;
}
export interface ConfigOrganizationCustomRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function configOrganizationCustomRuleTimeoutsToTerraform(struct?: ConfigOrganizationCustomRuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ConfigOrganizationCustomRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ConfigOrganizationCustomRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_config_organization_custom_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._excludedAccounts = config.excludedAccounts;
    this._inputParameters = config.inputParameters;
    this._lambdaFunctionArn = config.lambdaFunctionArn;
    this._maximumExecutionFrequency = config.maximumExecutionFrequency;
    this._name = config.name;
    this._resourceIdScope = config.resourceIdScope;
    this._resourceTypesScope = config.resourceTypesScope;
    this._tagKeyScope = config.tagKeyScope;
    this._tagValueScope = config.tagValueScope;
    this._triggerTypes = config.triggerTypes;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // excluded_accounts - computed: false, optional: true, required: false
  private _excludedAccounts?: string[];
  public get excludedAccounts() {
    return this.getListAttribute('excluded_accounts');
  }
  public set excludedAccounts(value: string[] ) {
    this._excludedAccounts = value;
  }
  public resetExcludedAccounts() {
    this._excludedAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedAccountsInput() {
    return this._excludedAccounts
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input_parameters - computed: false, optional: true, required: false
  private _inputParameters?: string;
  public get inputParameters() {
    return this.getStringAttribute('input_parameters');
  }
  public set inputParameters(value: string ) {
    this._inputParameters = value;
  }
  public resetInputParameters() {
    this._inputParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputParametersInput() {
    return this._inputParameters
  }

  // lambda_function_arn - computed: false, optional: false, required: true
  private _lambdaFunctionArn: string;
  public get lambdaFunctionArn() {
    return this.getStringAttribute('lambda_function_arn');
  }
  public set lambdaFunctionArn(value: string) {
    this._lambdaFunctionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionArnInput() {
    return this._lambdaFunctionArn
  }

  // maximum_execution_frequency - computed: false, optional: true, required: false
  private _maximumExecutionFrequency?: string;
  public get maximumExecutionFrequency() {
    return this.getStringAttribute('maximum_execution_frequency');
  }
  public set maximumExecutionFrequency(value: string ) {
    this._maximumExecutionFrequency = value;
  }
  public resetMaximumExecutionFrequency() {
    this._maximumExecutionFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumExecutionFrequencyInput() {
    return this._maximumExecutionFrequency
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // resource_id_scope - computed: false, optional: true, required: false
  private _resourceIdScope?: string;
  public get resourceIdScope() {
    return this.getStringAttribute('resource_id_scope');
  }
  public set resourceIdScope(value: string ) {
    this._resourceIdScope = value;
  }
  public resetResourceIdScope() {
    this._resourceIdScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdScopeInput() {
    return this._resourceIdScope
  }

  // resource_types_scope - computed: false, optional: true, required: false
  private _resourceTypesScope?: string[];
  public get resourceTypesScope() {
    return this.getListAttribute('resource_types_scope');
  }
  public set resourceTypesScope(value: string[] ) {
    this._resourceTypesScope = value;
  }
  public resetResourceTypesScope() {
    this._resourceTypesScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesScopeInput() {
    return this._resourceTypesScope
  }

  // tag_key_scope - computed: false, optional: true, required: false
  private _tagKeyScope?: string;
  public get tagKeyScope() {
    return this.getStringAttribute('tag_key_scope');
  }
  public set tagKeyScope(value: string ) {
    this._tagKeyScope = value;
  }
  public resetTagKeyScope() {
    this._tagKeyScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyScopeInput() {
    return this._tagKeyScope
  }

  // tag_value_scope - computed: false, optional: true, required: false
  private _tagValueScope?: string;
  public get tagValueScope() {
    return this.getStringAttribute('tag_value_scope');
  }
  public set tagValueScope(value: string ) {
    this._tagValueScope = value;
  }
  public resetTagValueScope() {
    this._tagValueScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueScopeInput() {
    return this._tagValueScope
  }

  // trigger_types - computed: false, optional: false, required: true
  private _triggerTypes: string[];
  public get triggerTypes() {
    return this.getListAttribute('trigger_types');
  }
  public set triggerTypes(value: string[]) {
    this._triggerTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypesInput() {
    return this._triggerTypes
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ConfigOrganizationCustomRuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ConfigOrganizationCustomRuleTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      excluded_accounts: cdktf.listMapper(cdktf.stringToTerraform)(this._excludedAccounts),
      input_parameters: cdktf.stringToTerraform(this._inputParameters),
      lambda_function_arn: cdktf.stringToTerraform(this._lambdaFunctionArn),
      maximum_execution_frequency: cdktf.stringToTerraform(this._maximumExecutionFrequency),
      name: cdktf.stringToTerraform(this._name),
      resource_id_scope: cdktf.stringToTerraform(this._resourceIdScope),
      resource_types_scope: cdktf.listMapper(cdktf.stringToTerraform)(this._resourceTypesScope),
      tag_key_scope: cdktf.stringToTerraform(this._tagKeyScope),
      tag_value_scope: cdktf.stringToTerraform(this._tagValueScope),
      trigger_types: cdktf.listMapper(cdktf.stringToTerraform)(this._triggerTypes),
      timeouts: configOrganizationCustomRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
