// https://www.terraform.io/docs/providers/aws/r/config_config_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ConfigConfigRuleConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly inputParameters?: string;
  readonly maximumExecutionFrequency?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** scope block */
  readonly scope?: ConfigConfigRuleScope[];
  /** source block */
  readonly source: ConfigConfigRuleSource[];
}
export interface ConfigConfigRuleScope {
  readonly complianceResourceId?: string;
  readonly complianceResourceTypes?: string[];
  readonly tagKey?: string;
  readonly tagValue?: string;
}
export interface ConfigConfigRuleSourceSourceDetail {
  readonly eventSource?: string;
  readonly maximumExecutionFrequency?: string;
  readonly messageType?: string;
}
export interface ConfigConfigRuleSource {
  readonly owner: string;
  readonly sourceIdentifier: string;
  /** source_detail block */
  readonly sourceDetail?: ConfigConfigRuleSourceSourceDetail[];
}

// Resource

export class ConfigConfigRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
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
      description: this._description,
      input_parameters: this._inputParameters,
      maximum_execution_frequency: this._maximumExecutionFrequency,
      name: this._name,
      tags: this._tags,
      scope: this._scope,
      source: this._source,
    };
  }
}
