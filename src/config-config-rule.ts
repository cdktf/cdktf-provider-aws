// https://www.terraform.io/docs/providers/aws/r/config_config_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigConfigRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#description ConfigConfigRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#input_parameters ConfigConfigRule#input_parameters}
  */
  readonly inputParameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}
  */
  readonly maximumExecutionFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#name ConfigConfigRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#tags ConfigConfigRule#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#tags_all ConfigConfigRule#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * scope block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#scope ConfigConfigRule#scope}
  */
  readonly scope?: ConfigConfigRuleScope[];
  /**
  * source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#source ConfigConfigRule#source}
  */
  readonly source: ConfigConfigRuleSource[];
}
export interface ConfigConfigRuleScope {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#compliance_resource_id ConfigConfigRule#compliance_resource_id}
  */
  readonly complianceResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#compliance_resource_types ConfigConfigRule#compliance_resource_types}
  */
  readonly complianceResourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#tag_key ConfigConfigRule#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#tag_value ConfigConfigRule#tag_value}
  */
  readonly tagValue?: string;
}

function configConfigRuleScopeToTerraform(struct?: ConfigConfigRuleScope): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    compliance_resource_id: cdktf.stringToTerraform(struct!.complianceResourceId),
    compliance_resource_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.complianceResourceTypes),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}

export interface ConfigConfigRuleSourceSourceDetail {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#event_source ConfigConfigRule#event_source}
  */
  readonly eventSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}
  */
  readonly maximumExecutionFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#message_type ConfigConfigRule#message_type}
  */
  readonly messageType?: string;
}

function configConfigRuleSourceSourceDetailToTerraform(struct?: ConfigConfigRuleSourceSourceDetail): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_source: cdktf.stringToTerraform(struct!.eventSource),
    maximum_execution_frequency: cdktf.stringToTerraform(struct!.maximumExecutionFrequency),
    message_type: cdktf.stringToTerraform(struct!.messageType),
  }
}

export interface ConfigConfigRuleSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#owner ConfigConfigRule#owner}
  */
  readonly owner: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#source_identifier ConfigConfigRule#source_identifier}
  */
  readonly sourceIdentifier: string;
  /**
  * source_detail block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#source_detail ConfigConfigRule#source_detail}
  */
  readonly sourceDetail?: ConfigConfigRuleSourceSourceDetail[];
}

function configConfigRuleSourceToTerraform(struct?: ConfigConfigRuleSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    owner: cdktf.stringToTerraform(struct!.owner),
    source_identifier: cdktf.stringToTerraform(struct!.sourceIdentifier),
    source_detail: cdktf.listMapper(configConfigRuleSourceSourceDetailToTerraform)(struct!.sourceDetail),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html aws_config_config_rule}
*/
export class ConfigConfigRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_config_config_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html aws_config_config_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigConfigRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigConfigRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_config_config_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._inputParameters = config.inputParameters;
    this._maximumExecutionFrequency = config.maximumExecutionFrequency;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._scope = config.scope;
    this._source = config.source;
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

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: ConfigConfigRuleScope[];
  public get scope() {
    return this.interpolationForAttribute('scope') as any;
  }
  public set scope(value: ConfigConfigRuleScope[] ) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope
  }

  // source - computed: false, optional: false, required: true
  private _source: ConfigConfigRuleSource[];
  public get source() {
    return this.interpolationForAttribute('source') as any;
  }
  public set source(value: ConfigConfigRuleSource[]) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      input_parameters: cdktf.stringToTerraform(this._inputParameters),
      maximum_execution_frequency: cdktf.stringToTerraform(this._maximumExecutionFrequency),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      scope: cdktf.listMapper(configConfigRuleScopeToTerraform)(this._scope),
      source: cdktf.listMapper(configConfigRuleSourceToTerraform)(this._source),
    };
  }
}
