// https://www.terraform.io/docs/providers/aws/r/wafregional_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafregionalRuleConfig extends cdktf.TerraformMetaArguments {
  readonly metricName: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** predicate block */
  readonly predicate?: WafregionalRulePredicate[];
}
export interface WafregionalRulePredicate {
  readonly dataId: string;
  readonly negated: boolean;
  readonly type: string;
}

function wafregionalRulePredicateToTerraform(struct?: WafregionalRulePredicate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_id: cdktf.stringToTerraform(struct!.dataId),
    negated: cdktf.booleanToTerraform(struct!.negated),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


// Resource

export class WafregionalRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafregionalRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafregional_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metricName = config.metricName;
    this._name = config.name;
    this._tags = config.tags;
    this._predicate = config.predicate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName: string;
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName
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

  // predicate - computed: false, optional: true, required: false
  private _predicate?: WafregionalRulePredicate[];
  public get predicate() {
    return this.interpolationForAttribute('predicate') as any;
  }
  public set predicate(value: WafregionalRulePredicate[] ) {
    this._predicate = value;
  }
  public resetPredicate() {
    this._predicate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateInput() {
    return this._predicate
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metric_name: cdktf.stringToTerraform(this._metricName),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      predicate: cdktf.listMapper(wafregionalRulePredicateToTerraform)(this._predicate),
    };
  }
}
