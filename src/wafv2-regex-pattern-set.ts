// https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Wafv2RegexPatternSetConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly name: string;
  readonly scope: string;
  readonly tags?: { [key: string]: string };
  /** regular_expression block */
  readonly regularExpression?: Wafv2RegexPatternSetRegularExpression[];
}
export interface Wafv2RegexPatternSetRegularExpression {
  readonly regexString: string;
}

function wafv2RegexPatternSetRegularExpressionToTerraform(struct?: Wafv2RegexPatternSetRegularExpression): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    regex_string: cdktf.stringToTerraform(struct!.regexString),
  }
}


// Resource

export class Wafv2RegexPatternSet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Wafv2RegexPatternSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafv2_regex_pattern_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._scope = config.scope;
    this._tags = config.tags;
    this._regularExpression = config.regularExpression;
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

  // lock_token - computed: true, optional: false, required: false
  public get lockToken() {
    return this.getStringAttribute('lock_token');
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

  // scope - computed: false, optional: false, required: true
  private _scope: string;
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope
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

  // regular_expression - computed: false, optional: true, required: false
  private _regularExpression?: Wafv2RegexPatternSetRegularExpression[];
  public get regularExpression() {
    return this.interpolationForAttribute('regular_expression') as any;
  }
  public set regularExpression(value: Wafv2RegexPatternSetRegularExpression[] ) {
    this._regularExpression = value;
  }
  public resetRegularExpression() {
    this._regularExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regularExpressionInput() {
    return this._regularExpression
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      regular_expression: cdktf.listMapper(wafv2RegexPatternSetRegularExpressionToTerraform)(this._regularExpression),
    };
  }
}
