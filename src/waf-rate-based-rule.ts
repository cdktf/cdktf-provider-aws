// https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafRateBasedRuleConfig extends cdktf.TerraformMetaArguments {
  readonly metricName: string;
  readonly name: string;
  readonly rateKey: string;
  readonly rateLimit: number;
  readonly tags?: { [key: string]: string };
  /** predicates block */
  readonly predicates?: WafRateBasedRulePredicates[];
}
export interface WafRateBasedRulePredicates {
  readonly dataId: string;
  readonly negated: boolean;
  readonly type: string;
}

function wafRateBasedRulePredicatesToTerraform(struct?: WafRateBasedRulePredicates): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_id: cdktf.stringToTerraform(struct!.dataId),
    negated: cdktf.booleanToTerraform(struct!.negated),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


// Resource

export class WafRateBasedRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafRateBasedRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_waf_rate_based_rule',
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
    this._rateKey = config.rateKey;
    this._rateLimit = config.rateLimit;
    this._tags = config.tags;
    this._predicates = config.predicates;
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

  // rate_key - computed: false, optional: false, required: true
  private _rateKey: string;
  public get rateKey() {
    return this.getStringAttribute('rate_key');
  }
  public set rateKey(value: string) {
    this._rateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateKeyInput() {
    return this._rateKey
  }

  // rate_limit - computed: false, optional: false, required: true
  private _rateLimit: number;
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit
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

  // predicates - computed: false, optional: true, required: false
  private _predicates?: WafRateBasedRulePredicates[];
  public get predicates() {
    return this.interpolationForAttribute('predicates') as any;
  }
  public set predicates(value: WafRateBasedRulePredicates[] ) {
    this._predicates = value;
  }
  public resetPredicates() {
    this._predicates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicatesInput() {
    return this._predicates
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metric_name: cdktf.stringToTerraform(this._metricName),
      name: cdktf.stringToTerraform(this._name),
      rate_key: cdktf.stringToTerraform(this._rateKey),
      rate_limit: cdktf.numberToTerraform(this._rateLimit),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      predicates: cdktf.listMapper(wafRateBasedRulePredicatesToTerraform)(this._predicates),
    };
  }
}
