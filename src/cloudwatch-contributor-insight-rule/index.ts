// https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_contributor_insight_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchContributorInsightRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_contributor_insight_rule#rule_definition CloudwatchContributorInsightRule#rule_definition}
  */
  readonly ruleDefinition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_contributor_insight_rule#rule_name CloudwatchContributorInsightRule#rule_name}
  */
  readonly ruleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_contributor_insight_rule#rule_state CloudwatchContributorInsightRule#rule_state}
  */
  readonly ruleState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_contributor_insight_rule#tags CloudwatchContributorInsightRule#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_contributor_insight_rule aws_cloudwatch_contributor_insight_rule}
*/
export class CloudwatchContributorInsightRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatch_contributor_insight_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudwatchContributorInsightRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchContributorInsightRule to import
  * @param importFromId The id of the existing CloudwatchContributorInsightRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_contributor_insight_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchContributorInsightRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatch_contributor_insight_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_contributor_insight_rule aws_cloudwatch_contributor_insight_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchContributorInsightRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchContributorInsightRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_contributor_insight_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.99.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ruleDefinition = config.ruleDefinition;
    this._ruleName = config.ruleName;
    this._ruleState = config.ruleState;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // rule_definition - computed: false, optional: false, required: true
  private _ruleDefinition?: string; 
  public get ruleDefinition() {
    return this.getStringAttribute('rule_definition');
  }
  public set ruleDefinition(value: string) {
    this._ruleDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleDefinitionInput() {
    return this._ruleDefinition;
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // rule_state - computed: false, optional: true, required: false
  private _ruleState?: string; 
  public get ruleState() {
    return this.getStringAttribute('rule_state');
  }
  public set ruleState(value: string) {
    this._ruleState = value;
  }
  public resetRuleState() {
    this._ruleState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleStateInput() {
    return this._ruleState;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      rule_definition: cdktf.stringToTerraform(this._ruleDefinition),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      rule_state: cdktf.stringToTerraform(this._ruleState),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      rule_definition: {
        value: cdktf.stringToHclTerraform(this._ruleDefinition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_state: {
        value: cdktf.stringToHclTerraform(this._ruleState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
