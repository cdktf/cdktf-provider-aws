// https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "excluded_accounts": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "input_parameters": {
        "type": "string",
        "optional": true
      },
      "maximum_execution_frequency": {
        "type": "string",
        "optional": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "resource_id_scope": {
        "type": "string",
        "optional": true
      },
      "resource_types_scope": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "rule_identifier": {
        "type": "string",
        "required": true
      },
      "tag_key_scope": {
        "type": "string",
        "optional": true
      },
      "tag_value_scope": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ConfigOrganizationManagedRuleConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly excludedAccounts?: string[];
  readonly inputParameters?: string;
  readonly maximumExecutionFrequency?: string;
  readonly name: string;
  readonly resourceIdScope?: string;
  readonly resourceTypesScope?: string[];
  readonly ruleIdentifier: string;
  readonly tagKeyScope?: string;
  readonly tagValueScope?: string;
  /** timeouts block */
  readonly timeouts?: ConfigOrganizationManagedRuleTimeouts;
}
export interface ConfigOrganizationManagedRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ConfigOrganizationManagedRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ConfigOrganizationManagedRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_config_organization_managed_rule',
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
    this._maximumExecutionFrequency = config.maximumExecutionFrequency;
    this._name = config.name;
    this._resourceIdScope = config.resourceIdScope;
    this._resourceTypesScope = config.resourceTypesScope;
    this._ruleIdentifier = config.ruleIdentifier;
    this._tagKeyScope = config.tagKeyScope;
    this._tagValueScope = config.tagValueScope;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // excluded_accounts - computed: false, optional: true, required: false
  private _excludedAccounts?: string[];
  public get excludedAccounts() {
    return this._excludedAccounts;
  }
  public set excludedAccounts(value: string[] | undefined) {
    this._excludedAccounts = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // input_parameters - computed: false, optional: true, required: false
  private _inputParameters?: string;
  public get inputParameters() {
    return this._inputParameters;
  }
  public set inputParameters(value: string | undefined) {
    this._inputParameters = value;
  }

  // maximum_execution_frequency - computed: false, optional: true, required: false
  private _maximumExecutionFrequency?: string;
  public get maximumExecutionFrequency() {
    return this._maximumExecutionFrequency;
  }
  public set maximumExecutionFrequency(value: string | undefined) {
    this._maximumExecutionFrequency = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_id_scope - computed: false, optional: true, required: false
  private _resourceIdScope?: string;
  public get resourceIdScope() {
    return this._resourceIdScope;
  }
  public set resourceIdScope(value: string | undefined) {
    this._resourceIdScope = value;
  }

  // resource_types_scope - computed: false, optional: true, required: false
  private _resourceTypesScope?: string[];
  public get resourceTypesScope() {
    return this._resourceTypesScope;
  }
  public set resourceTypesScope(value: string[] | undefined) {
    this._resourceTypesScope = value;
  }

  // rule_identifier - computed: false, optional: false, required: true
  private _ruleIdentifier: string;
  public get ruleIdentifier() {
    return this._ruleIdentifier;
  }
  public set ruleIdentifier(value: string) {
    this._ruleIdentifier = value;
  }

  // tag_key_scope - computed: false, optional: true, required: false
  private _tagKeyScope?: string;
  public get tagKeyScope() {
    return this._tagKeyScope;
  }
  public set tagKeyScope(value: string | undefined) {
    this._tagKeyScope = value;
  }

  // tag_value_scope - computed: false, optional: true, required: false
  private _tagValueScope?: string;
  public get tagValueScope() {
    return this._tagValueScope;
  }
  public set tagValueScope(value: string | undefined) {
    this._tagValueScope = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ConfigOrganizationManagedRuleTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ConfigOrganizationManagedRuleTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      excluded_accounts: this._excludedAccounts,
      input_parameters: this._inputParameters,
      maximum_execution_frequency: this._maximumExecutionFrequency,
      name: this._name,
      resource_id_scope: this._resourceIdScope,
      resource_types_scope: this._resourceTypesScope,
      rule_identifier: this._ruleIdentifier,
      tag_key_scope: this._tagKeyScope,
      tag_value_scope: this._tagValueScope,
      timeouts: this._timeouts,
    };
  }
}
