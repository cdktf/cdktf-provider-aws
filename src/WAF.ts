// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS WAF
*/
export namespace WAF {
  export interface WafByteMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html#name WafByteMatchSet#name}
    */
    readonly name: string;
    /**
    * byte_match_tuples block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html#byte_match_tuples WafByteMatchSet#byte_match_tuples}
    */
    readonly byteMatchTuples?: WafByteMatchSetByteMatchTuples[];
  }
  export interface WafByteMatchSetByteMatchTuplesFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html#data WafByteMatchSet#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html#type WafByteMatchSet#type}
    */
    readonly type: string;
  }

  function wafByteMatchSetByteMatchTuplesFieldToMatchToTerraform(struct?: WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference | WafByteMatchSetByteMatchTuplesFieldToMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      data: cdktf.stringToTerraform(struct!.data),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export class WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // data - computed: false, optional: true, required: false
    private _data?: string | undefined; 
    public get data() {
      return this.getStringAttribute('data');
    }
    public set data(value: string | undefined) {
      this._data = value;
    }
    public resetData() {
      this._data = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataInput() {
      return this._data
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }
  }
  export interface WafByteMatchSetByteMatchTuples {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html#positional_constraint WafByteMatchSet#positional_constraint}
    */
    readonly positionalConstraint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html#target_string WafByteMatchSet#target_string}
    */
    readonly targetString?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html#text_transformation WafByteMatchSet#text_transformation}
    */
    readonly textTransformation: string;
    /**
    * field_to_match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html#field_to_match WafByteMatchSet#field_to_match}
    */
    readonly fieldToMatch: WafByteMatchSetByteMatchTuplesFieldToMatch;
  }

  function wafByteMatchSetByteMatchTuplesToTerraform(struct?: WafByteMatchSetByteMatchTuples): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      positional_constraint: cdktf.stringToTerraform(struct!.positionalConstraint),
      target_string: cdktf.stringToTerraform(struct!.targetString),
      text_transformation: cdktf.stringToTerraform(struct!.textTransformation),
      field_to_match: wafByteMatchSetByteMatchTuplesFieldToMatchToTerraform(struct!.fieldToMatch),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html aws_waf_byte_match_set}
  */
  export class WafByteMatchSet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_waf_byte_match_set";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html aws_waf_byte_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafByteMatchSetConfig
    */
    public constructor(scope: Construct, id: string, config: WafByteMatchSetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_waf_byte_match_set',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._byteMatchTuples = config.byteMatchTuples;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // byte_match_tuples - computed: false, optional: true, required: false
    private _byteMatchTuples?: WafByteMatchSetByteMatchTuples[] | undefined; 
    public get byteMatchTuples() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('byte_match_tuples') as any;
    }
    public set byteMatchTuples(value: WafByteMatchSetByteMatchTuples[] | undefined) {
      this._byteMatchTuples = value;
    }
    public resetByteMatchTuples() {
      this._byteMatchTuples = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get byteMatchTuplesInput() {
      return this._byteMatchTuples
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        byte_match_tuples: cdktf.listMapper(wafByteMatchSetByteMatchTuplesToTerraform)(this._byteMatchTuples),
      };
    }
  }
  export interface WafGeoMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set.html#name WafGeoMatchSet#name}
    */
    readonly name: string;
    /**
    * geo_match_constraint block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set.html#geo_match_constraint WafGeoMatchSet#geo_match_constraint}
    */
    readonly geoMatchConstraint?: WafGeoMatchSetGeoMatchConstraint[];
  }
  export interface WafGeoMatchSetGeoMatchConstraint {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set.html#type WafGeoMatchSet#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set.html#value WafGeoMatchSet#value}
    */
    readonly value: string;
  }

  function wafGeoMatchSetGeoMatchConstraintToTerraform(struct?: WafGeoMatchSetGeoMatchConstraint): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      type: cdktf.stringToTerraform(struct!.type),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set.html aws_waf_geo_match_set}
  */
  export class WafGeoMatchSet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_waf_geo_match_set";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set.html aws_waf_geo_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafGeoMatchSetConfig
    */
    public constructor(scope: Construct, id: string, config: WafGeoMatchSetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_waf_geo_match_set',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._geoMatchConstraint = config.geoMatchConstraint;
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
      return this._name
    }

    // geo_match_constraint - computed: false, optional: true, required: false
    private _geoMatchConstraint?: WafGeoMatchSetGeoMatchConstraint[] | undefined; 
    public get geoMatchConstraint() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('geo_match_constraint') as any;
    }
    public set geoMatchConstraint(value: WafGeoMatchSetGeoMatchConstraint[] | undefined) {
      this._geoMatchConstraint = value;
    }
    public resetGeoMatchConstraint() {
      this._geoMatchConstraint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get geoMatchConstraintInput() {
      return this._geoMatchConstraint
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        geo_match_constraint: cdktf.listMapper(wafGeoMatchSetGeoMatchConstraintToTerraform)(this._geoMatchConstraint),
      };
    }
  }
  export interface WafIpsetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_ipset.html#name WafIpset#name}
    */
    readonly name: string;
    /**
    * ip_set_descriptors block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_ipset.html#ip_set_descriptors WafIpset#ip_set_descriptors}
    */
    readonly ipSetDescriptors?: WafIpsetIpSetDescriptors[];
  }
  export interface WafIpsetIpSetDescriptors {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_ipset.html#type WafIpset#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_ipset.html#value WafIpset#value}
    */
    readonly value: string;
  }

  function wafIpsetIpSetDescriptorsToTerraform(struct?: WafIpsetIpSetDescriptors): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      type: cdktf.stringToTerraform(struct!.type),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_ipset.html aws_waf_ipset}
  */
  export class WafIpset extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_waf_ipset";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_ipset.html aws_waf_ipset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafIpsetConfig
    */
    public constructor(scope: Construct, id: string, config: WafIpsetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_waf_ipset',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._ipSetDescriptors = config.ipSetDescriptors;
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
      return this._name
    }

    // ip_set_descriptors - computed: false, optional: true, required: false
    private _ipSetDescriptors?: WafIpsetIpSetDescriptors[] | undefined; 
    public get ipSetDescriptors() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ip_set_descriptors') as any;
    }
    public set ipSetDescriptors(value: WafIpsetIpSetDescriptors[] | undefined) {
      this._ipSetDescriptors = value;
    }
    public resetIpSetDescriptors() {
      this._ipSetDescriptors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipSetDescriptorsInput() {
      return this._ipSetDescriptors
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        ip_set_descriptors: cdktf.listMapper(wafIpsetIpSetDescriptorsToTerraform)(this._ipSetDescriptors),
      };
    }
  }
  export interface WafRateBasedRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#metric_name WafRateBasedRule#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#name WafRateBasedRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#rate_key WafRateBasedRule#rate_key}
    */
    readonly rateKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#rate_limit WafRateBasedRule#rate_limit}
    */
    readonly rateLimit: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#tags WafRateBasedRule#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#tags_all WafRateBasedRule#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * predicates block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#predicates WafRateBasedRule#predicates}
    */
    readonly predicates?: WafRateBasedRulePredicates[];
  }
  export interface WafRateBasedRulePredicates {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#data_id WafRateBasedRule#data_id}
    */
    readonly dataId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#negated WafRateBasedRule#negated}
    */
    readonly negated: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#type WafRateBasedRule#type}
    */
    readonly type: string;
  }

  function wafRateBasedRulePredicatesToTerraform(struct?: WafRateBasedRulePredicates): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      data_id: cdktf.stringToTerraform(struct!.dataId),
      negated: cdktf.booleanToTerraform(struct!.negated),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html aws_waf_rate_based_rule}
  */
  export class WafRateBasedRule extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_waf_rate_based_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html aws_waf_rate_based_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafRateBasedRuleConfig
    */
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
      this._tagsAll = config.tagsAll;
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
    private _metricName?: string; 
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
    private _name?: string; 
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
    private _rateKey?: string; 
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
    private _rateLimit?: number; 
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // predicates - computed: false, optional: true, required: false
    private _predicates?: WafRateBasedRulePredicates[] | undefined; 
    public get predicates() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('predicates') as any;
    }
    public set predicates(value: WafRateBasedRulePredicates[] | undefined) {
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
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        predicates: cdktf.listMapper(wafRateBasedRulePredicatesToTerraform)(this._predicates),
      };
    }
  }
  export interface WafRegexMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#name WafRegexMatchSet#name}
    */
    readonly name: string;
    /**
    * regex_match_tuple block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#regex_match_tuple WafRegexMatchSet#regex_match_tuple}
    */
    readonly regexMatchTuple?: WafRegexMatchSetRegexMatchTuple[];
  }
  export interface WafRegexMatchSetRegexMatchTupleFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#data WafRegexMatchSet#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#type WafRegexMatchSet#type}
    */
    readonly type: string;
  }

  function wafRegexMatchSetRegexMatchTupleFieldToMatchToTerraform(struct?: WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference | WafRegexMatchSetRegexMatchTupleFieldToMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      data: cdktf.stringToTerraform(struct!.data),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export class WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // data - computed: false, optional: true, required: false
    private _data?: string | undefined; 
    public get data() {
      return this.getStringAttribute('data');
    }
    public set data(value: string | undefined) {
      this._data = value;
    }
    public resetData() {
      this._data = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataInput() {
      return this._data
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }
  }
  export interface WafRegexMatchSetRegexMatchTuple {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#regex_pattern_set_id WafRegexMatchSet#regex_pattern_set_id}
    */
    readonly regexPatternSetId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#text_transformation WafRegexMatchSet#text_transformation}
    */
    readonly textTransformation: string;
    /**
    * field_to_match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#field_to_match WafRegexMatchSet#field_to_match}
    */
    readonly fieldToMatch: WafRegexMatchSetRegexMatchTupleFieldToMatch;
  }

  function wafRegexMatchSetRegexMatchTupleToTerraform(struct?: WafRegexMatchSetRegexMatchTuple): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      regex_pattern_set_id: cdktf.stringToTerraform(struct!.regexPatternSetId),
      text_transformation: cdktf.stringToTerraform(struct!.textTransformation),
      field_to_match: wafRegexMatchSetRegexMatchTupleFieldToMatchToTerraform(struct!.fieldToMatch),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html aws_waf_regex_match_set}
  */
  export class WafRegexMatchSet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_waf_regex_match_set";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html aws_waf_regex_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafRegexMatchSetConfig
    */
    public constructor(scope: Construct, id: string, config: WafRegexMatchSetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_waf_regex_match_set',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._regexMatchTuple = config.regexMatchTuple;
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
      return this._name
    }

    // regex_match_tuple - computed: false, optional: true, required: false
    private _regexMatchTuple?: WafRegexMatchSetRegexMatchTuple[] | undefined; 
    public get regexMatchTuple() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('regex_match_tuple') as any;
    }
    public set regexMatchTuple(value: WafRegexMatchSetRegexMatchTuple[] | undefined) {
      this._regexMatchTuple = value;
    }
    public resetRegexMatchTuple() {
      this._regexMatchTuple = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regexMatchTupleInput() {
      return this._regexMatchTuple
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        regex_match_tuple: cdktf.listMapper(wafRegexMatchSetRegexMatchTupleToTerraform)(this._regexMatchTuple),
      };
    }
  }
  export interface WafRegexPatternSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_pattern_set.html#name WafRegexPatternSet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_pattern_set.html#regex_pattern_strings WafRegexPatternSet#regex_pattern_strings}
    */
    readonly regexPatternStrings?: string[];
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_pattern_set.html aws_waf_regex_pattern_set}
  */
  export class WafRegexPatternSet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_waf_regex_pattern_set";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_pattern_set.html aws_waf_regex_pattern_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafRegexPatternSetConfig
    */
    public constructor(scope: Construct, id: string, config: WafRegexPatternSetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_waf_regex_pattern_set',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._regexPatternStrings = config.regexPatternStrings;
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
      return this._name
    }

    // regex_pattern_strings - computed: false, optional: true, required: false
    private _regexPatternStrings?: string[] | undefined; 
    public get regexPatternStrings() {
      return this.getListAttribute('regex_pattern_strings');
    }
    public set regexPatternStrings(value: string[] | undefined) {
      this._regexPatternStrings = value;
    }
    public resetRegexPatternStrings() {
      this._regexPatternStrings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regexPatternStringsInput() {
      return this._regexPatternStrings
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        regex_pattern_strings: cdktf.listMapper(cdktf.stringToTerraform)(this._regexPatternStrings),
      };
    }
  }
  export interface WafRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule.html#metric_name WafRule#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule.html#name WafRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule.html#tags WafRule#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule.html#tags_all WafRule#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * predicates block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule.html#predicates WafRule#predicates}
    */
    readonly predicates?: WafRulePredicates[];
  }
  export interface WafRulePredicates {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule.html#data_id WafRule#data_id}
    */
    readonly dataId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule.html#negated WafRule#negated}
    */
    readonly negated: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule.html#type WafRule#type}
    */
    readonly type: string;
  }

  function wafRulePredicatesToTerraform(struct?: WafRulePredicates): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      data_id: cdktf.stringToTerraform(struct!.dataId),
      negated: cdktf.booleanToTerraform(struct!.negated),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_rule.html aws_waf_rule}
  */
  export class WafRule extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_waf_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_rule.html aws_waf_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafRuleConfig
    */
    public constructor(scope: Construct, id: string, config: WafRuleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_waf_rule',
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
      this._tagsAll = config.tagsAll;
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
    private _metricName?: string; 
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
    private _name?: string; 
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // predicates - computed: false, optional: true, required: false
    private _predicates?: WafRulePredicates[] | undefined; 
    public get predicates() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('predicates') as any;
    }
    public set predicates(value: WafRulePredicates[] | undefined) {
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
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        predicates: cdktf.listMapper(wafRulePredicatesToTerraform)(this._predicates),
      };
    }
  }
  export interface WafRuleGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#metric_name WafRuleGroup#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#name WafRuleGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#tags WafRuleGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#tags_all WafRuleGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * activated_rule block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#activated_rule WafRuleGroup#activated_rule}
    */
    readonly activatedRule?: WafRuleGroupActivatedRule[];
  }
  export interface WafRuleGroupActivatedRuleAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#type WafRuleGroup#type}
    */
    readonly type: string;
  }

  function wafRuleGroupActivatedRuleActionToTerraform(struct?: WafRuleGroupActivatedRuleActionOutputReference | WafRuleGroupActivatedRuleAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export class WafRuleGroupActivatedRuleActionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }
  }
  export interface WafRuleGroupActivatedRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#priority WafRuleGroup#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#rule_id WafRuleGroup#rule_id}
    */
    readonly ruleId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#type WafRuleGroup#type}
    */
    readonly type?: string;
    /**
    * action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#action WafRuleGroup#action}
    */
    readonly action: WafRuleGroupActivatedRuleAction;
  }

  function wafRuleGroupActivatedRuleToTerraform(struct?: WafRuleGroupActivatedRule): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      priority: cdktf.numberToTerraform(struct!.priority),
      rule_id: cdktf.stringToTerraform(struct!.ruleId),
      type: cdktf.stringToTerraform(struct!.type),
      action: wafRuleGroupActivatedRuleActionToTerraform(struct!.action),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html aws_waf_rule_group}
  */
  export class WafRuleGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_waf_rule_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html aws_waf_rule_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafRuleGroupConfig
    */
    public constructor(scope: Construct, id: string, config: WafRuleGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_waf_rule_group',
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
      this._tagsAll = config.tagsAll;
      this._activatedRule = config.activatedRule;
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
    private _metricName?: string; 
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
    private _name?: string; 
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // activated_rule - computed: false, optional: true, required: false
    private _activatedRule?: WafRuleGroupActivatedRule[] | undefined; 
    public get activatedRule() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('activated_rule') as any;
    }
    public set activatedRule(value: WafRuleGroupActivatedRule[] | undefined) {
      this._activatedRule = value;
    }
    public resetActivatedRule() {
      this._activatedRule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activatedRuleInput() {
      return this._activatedRule
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        metric_name: cdktf.stringToTerraform(this._metricName),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        activated_rule: cdktf.listMapper(wafRuleGroupActivatedRuleToTerraform)(this._activatedRule),
      };
    }
  }
  export interface WafSizeConstraintSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html#name WafSizeConstraintSet#name}
    */
    readonly name: string;
    /**
    * size_constraints block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html#size_constraints WafSizeConstraintSet#size_constraints}
    */
    readonly sizeConstraints?: WafSizeConstraintSetSizeConstraints[];
  }
  export interface WafSizeConstraintSetSizeConstraintsFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html#data WafSizeConstraintSet#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html#type WafSizeConstraintSet#type}
    */
    readonly type: string;
  }

  function wafSizeConstraintSetSizeConstraintsFieldToMatchToTerraform(struct?: WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference | WafSizeConstraintSetSizeConstraintsFieldToMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      data: cdktf.stringToTerraform(struct!.data),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export class WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // data - computed: false, optional: true, required: false
    private _data?: string | undefined; 
    public get data() {
      return this.getStringAttribute('data');
    }
    public set data(value: string | undefined) {
      this._data = value;
    }
    public resetData() {
      this._data = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataInput() {
      return this._data
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }
  }
  export interface WafSizeConstraintSetSizeConstraints {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html#comparison_operator WafSizeConstraintSet#comparison_operator}
    */
    readonly comparisonOperator: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html#size WafSizeConstraintSet#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html#text_transformation WafSizeConstraintSet#text_transformation}
    */
    readonly textTransformation: string;
    /**
    * field_to_match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html#field_to_match WafSizeConstraintSet#field_to_match}
    */
    readonly fieldToMatch: WafSizeConstraintSetSizeConstraintsFieldToMatch;
  }

  function wafSizeConstraintSetSizeConstraintsToTerraform(struct?: WafSizeConstraintSetSizeConstraints): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
      size: cdktf.numberToTerraform(struct!.size),
      text_transformation: cdktf.stringToTerraform(struct!.textTransformation),
      field_to_match: wafSizeConstraintSetSizeConstraintsFieldToMatchToTerraform(struct!.fieldToMatch),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html aws_waf_size_constraint_set}
  */
  export class WafSizeConstraintSet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_waf_size_constraint_set";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html aws_waf_size_constraint_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafSizeConstraintSetConfig
    */
    public constructor(scope: Construct, id: string, config: WafSizeConstraintSetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_waf_size_constraint_set',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._sizeConstraints = config.sizeConstraints;
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
      return this._name
    }

    // size_constraints - computed: false, optional: true, required: false
    private _sizeConstraints?: WafSizeConstraintSetSizeConstraints[] | undefined; 
    public get sizeConstraints() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('size_constraints') as any;
    }
    public set sizeConstraints(value: WafSizeConstraintSetSizeConstraints[] | undefined) {
      this._sizeConstraints = value;
    }
    public resetSizeConstraints() {
      this._sizeConstraints = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sizeConstraintsInput() {
      return this._sizeConstraints
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        size_constraints: cdktf.listMapper(wafSizeConstraintSetSizeConstraintsToTerraform)(this._sizeConstraints),
      };
    }
  }
  export interface WafSqlInjectionMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html#name WafSqlInjectionMatchSet#name}
    */
    readonly name: string;
    /**
    * sql_injection_match_tuples block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html#sql_injection_match_tuples WafSqlInjectionMatchSet#sql_injection_match_tuples}
    */
    readonly sqlInjectionMatchTuples?: WafSqlInjectionMatchSetSqlInjectionMatchTuples[];
  }
  export interface WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html#data WafSqlInjectionMatchSet#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html#type WafSqlInjectionMatchSet#type}
    */
    readonly type: string;
  }

  function wafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchToTerraform(struct?: WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference | WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      data: cdktf.stringToTerraform(struct!.data),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export class WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // data - computed: false, optional: true, required: false
    private _data?: string | undefined; 
    public get data() {
      return this.getStringAttribute('data');
    }
    public set data(value: string | undefined) {
      this._data = value;
    }
    public resetData() {
      this._data = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataInput() {
      return this._data
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }
  }
  export interface WafSqlInjectionMatchSetSqlInjectionMatchTuples {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html#text_transformation WafSqlInjectionMatchSet#text_transformation}
    */
    readonly textTransformation: string;
    /**
    * field_to_match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html#field_to_match WafSqlInjectionMatchSet#field_to_match}
    */
    readonly fieldToMatch: WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch;
  }

  function wafSqlInjectionMatchSetSqlInjectionMatchTuplesToTerraform(struct?: WafSqlInjectionMatchSetSqlInjectionMatchTuples): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      text_transformation: cdktf.stringToTerraform(struct!.textTransformation),
      field_to_match: wafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchToTerraform(struct!.fieldToMatch),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html aws_waf_sql_injection_match_set}
  */
  export class WafSqlInjectionMatchSet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_waf_sql_injection_match_set";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html aws_waf_sql_injection_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafSqlInjectionMatchSetConfig
    */
    public constructor(scope: Construct, id: string, config: WafSqlInjectionMatchSetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_waf_sql_injection_match_set',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._sqlInjectionMatchTuples = config.sqlInjectionMatchTuples;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // sql_injection_match_tuples - computed: false, optional: true, required: false
    private _sqlInjectionMatchTuples?: WafSqlInjectionMatchSetSqlInjectionMatchTuples[] | undefined; 
    public get sqlInjectionMatchTuples() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('sql_injection_match_tuples') as any;
    }
    public set sqlInjectionMatchTuples(value: WafSqlInjectionMatchSetSqlInjectionMatchTuples[] | undefined) {
      this._sqlInjectionMatchTuples = value;
    }
    public resetSqlInjectionMatchTuples() {
      this._sqlInjectionMatchTuples = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlInjectionMatchTuplesInput() {
      return this._sqlInjectionMatchTuples
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        sql_injection_match_tuples: cdktf.listMapper(wafSqlInjectionMatchSetSqlInjectionMatchTuplesToTerraform)(this._sqlInjectionMatchTuples),
      };
    }
  }
  export interface WafWebAclConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#metric_name WafWebAcl#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#name WafWebAcl#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#tags WafWebAcl#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#tags_all WafWebAcl#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * default_action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#default_action WafWebAcl#default_action}
    */
    readonly defaultAction: WafWebAclDefaultAction;
    /**
    * logging_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#logging_configuration WafWebAcl#logging_configuration}
    */
    readonly loggingConfiguration?: WafWebAclLoggingConfiguration;
    /**
    * rules block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#rules WafWebAcl#rules}
    */
    readonly rules?: WafWebAclRules[];
  }
  export interface WafWebAclDefaultAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#type WafWebAcl#type}
    */
    readonly type: string;
  }

  function wafWebAclDefaultActionToTerraform(struct?: WafWebAclDefaultActionOutputReference | WafWebAclDefaultAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export class WafWebAclDefaultActionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }
  }
  export interface WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#data WafWebAcl#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#type WafWebAcl#type}
    */
    readonly type: string;
  }

  function wafWebAclLoggingConfigurationRedactedFieldsFieldToMatchToTerraform(struct?: WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      data: cdktf.stringToTerraform(struct!.data),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface WafWebAclLoggingConfigurationRedactedFields {
    /**
    * field_to_match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#field_to_match WafWebAcl#field_to_match}
    */
    readonly fieldToMatch: WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch[];
  }

  function wafWebAclLoggingConfigurationRedactedFieldsToTerraform(struct?: WafWebAclLoggingConfigurationRedactedFieldsOutputReference | WafWebAclLoggingConfigurationRedactedFields): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      field_to_match: cdktf.listMapper(wafWebAclLoggingConfigurationRedactedFieldsFieldToMatchToTerraform)(struct!.fieldToMatch),
    }
  }

  export class WafWebAclLoggingConfigurationRedactedFieldsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // field_to_match - computed: false, optional: false, required: true
    private _fieldToMatch?: WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch[]; 
    public get fieldToMatch() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('field_to_match') as any;
    }
    public set fieldToMatch(value: WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch[]) {
      this._fieldToMatch = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldToMatchInput() {
      return this._fieldToMatch
    }
  }
  export interface WafWebAclLoggingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#log_destination WafWebAcl#log_destination}
    */
    readonly logDestination: string;
    /**
    * redacted_fields block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#redacted_fields WafWebAcl#redacted_fields}
    */
    readonly redactedFields?: WafWebAclLoggingConfigurationRedactedFields;
  }

  function wafWebAclLoggingConfigurationToTerraform(struct?: WafWebAclLoggingConfigurationOutputReference | WafWebAclLoggingConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      log_destination: cdktf.stringToTerraform(struct!.logDestination),
      redacted_fields: wafWebAclLoggingConfigurationRedactedFieldsToTerraform(struct!.redactedFields),
    }
  }

  export class WafWebAclLoggingConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // log_destination - computed: false, optional: false, required: true
    private _logDestination?: string; 
    public get logDestination() {
      return this.getStringAttribute('log_destination');
    }
    public set logDestination(value: string) {
      this._logDestination = value;
    }
    // Temporarily expose input value. Use with caution.
    public get logDestinationInput() {
      return this._logDestination
    }

    // redacted_fields - computed: false, optional: true, required: false
    private _redactedFields?: WafWebAclLoggingConfigurationRedactedFields | undefined; 
    private __redactedFieldsOutput = new WafWebAclLoggingConfigurationRedactedFieldsOutputReference(this as any, "redacted_fields", true);
    public get redactedFields() {
      return this.__redactedFieldsOutput;
    }
    public putRedactedFields(value: WafWebAclLoggingConfigurationRedactedFields | undefined) {
      this._redactedFields = value;
    }
    public resetRedactedFields() {
      this._redactedFields = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redactedFieldsInput() {
      return this._redactedFields
    }
  }
  export interface WafWebAclRulesAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#type WafWebAcl#type}
    */
    readonly type: string;
  }

  function wafWebAclRulesActionToTerraform(struct?: WafWebAclRulesActionOutputReference | WafWebAclRulesAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export class WafWebAclRulesActionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }
  }
  export interface WafWebAclRulesOverrideAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#type WafWebAcl#type}
    */
    readonly type: string;
  }

  function wafWebAclRulesOverrideActionToTerraform(struct?: WafWebAclRulesOverrideActionOutputReference | WafWebAclRulesOverrideAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export class WafWebAclRulesOverrideActionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }
  }
  export interface WafWebAclRules {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#priority WafWebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#rule_id WafWebAcl#rule_id}
    */
    readonly ruleId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#type WafWebAcl#type}
    */
    readonly type?: string;
    /**
    * action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#action WafWebAcl#action}
    */
    readonly action?: WafWebAclRulesAction;
    /**
    * override_action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#override_action WafWebAcl#override_action}
    */
    readonly overrideAction?: WafWebAclRulesOverrideAction;
  }

  function wafWebAclRulesToTerraform(struct?: WafWebAclRules): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      priority: cdktf.numberToTerraform(struct!.priority),
      rule_id: cdktf.stringToTerraform(struct!.ruleId),
      type: cdktf.stringToTerraform(struct!.type),
      action: wafWebAclRulesActionToTerraform(struct!.action),
      override_action: wafWebAclRulesOverrideActionToTerraform(struct!.overrideAction),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html aws_waf_web_acl}
  */
  export class WafWebAcl extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_waf_web_acl";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html aws_waf_web_acl} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafWebAclConfig
    */
    public constructor(scope: Construct, id: string, config: WafWebAclConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_waf_web_acl',
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
      this._tagsAll = config.tagsAll;
      this._defaultAction = config.defaultAction;
      this._loggingConfiguration = config.loggingConfiguration;
      this._rules = config.rules;
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
    private _metricName?: string; 
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
    private _name?: string; 
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // default_action - computed: false, optional: false, required: true
    private _defaultAction?: WafWebAclDefaultAction; 
    private __defaultActionOutput = new WafWebAclDefaultActionOutputReference(this as any, "default_action", true);
    public get defaultAction() {
      return this.__defaultActionOutput;
    }
    public putDefaultAction(value: WafWebAclDefaultAction) {
      this._defaultAction = value;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultActionInput() {
      return this._defaultAction
    }

    // logging_configuration - computed: false, optional: true, required: false
    private _loggingConfiguration?: WafWebAclLoggingConfiguration | undefined; 
    private __loggingConfigurationOutput = new WafWebAclLoggingConfigurationOutputReference(this as any, "logging_configuration", true);
    public get loggingConfiguration() {
      return this.__loggingConfigurationOutput;
    }
    public putLoggingConfiguration(value: WafWebAclLoggingConfiguration | undefined) {
      this._loggingConfiguration = value;
    }
    public resetLoggingConfiguration() {
      this._loggingConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingConfigurationInput() {
      return this._loggingConfiguration
    }

    // rules - computed: false, optional: true, required: false
    private _rules?: WafWebAclRules[] | undefined; 
    public get rules() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('rules') as any;
    }
    public set rules(value: WafWebAclRules[] | undefined) {
      this._rules = value;
    }
    public resetRules() {
      this._rules = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesInput() {
      return this._rules
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        metric_name: cdktf.stringToTerraform(this._metricName),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        default_action: wafWebAclDefaultActionToTerraform(this._defaultAction),
        logging_configuration: wafWebAclLoggingConfigurationToTerraform(this._loggingConfiguration),
        rules: cdktf.listMapper(wafWebAclRulesToTerraform)(this._rules),
      };
    }
  }
  export interface WafXssMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set.html#name WafXssMatchSet#name}
    */
    readonly name: string;
    /**
    * xss_match_tuples block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set.html#xss_match_tuples WafXssMatchSet#xss_match_tuples}
    */
    readonly xssMatchTuples?: WafXssMatchSetXssMatchTuples[];
  }
  export interface WafXssMatchSetXssMatchTuplesFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set.html#data WafXssMatchSet#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set.html#type WafXssMatchSet#type}
    */
    readonly type: string;
  }

  function wafXssMatchSetXssMatchTuplesFieldToMatchToTerraform(struct?: WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference | WafXssMatchSetXssMatchTuplesFieldToMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      data: cdktf.stringToTerraform(struct!.data),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export class WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // data - computed: false, optional: true, required: false
    private _data?: string | undefined; 
    public get data() {
      return this.getStringAttribute('data');
    }
    public set data(value: string | undefined) {
      this._data = value;
    }
    public resetData() {
      this._data = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataInput() {
      return this._data
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }
  }
  export interface WafXssMatchSetXssMatchTuples {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set.html#text_transformation WafXssMatchSet#text_transformation}
    */
    readonly textTransformation: string;
    /**
    * field_to_match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set.html#field_to_match WafXssMatchSet#field_to_match}
    */
    readonly fieldToMatch: WafXssMatchSetXssMatchTuplesFieldToMatch;
  }

  function wafXssMatchSetXssMatchTuplesToTerraform(struct?: WafXssMatchSetXssMatchTuples): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      text_transformation: cdktf.stringToTerraform(struct!.textTransformation),
      field_to_match: wafXssMatchSetXssMatchTuplesFieldToMatchToTerraform(struct!.fieldToMatch),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set.html aws_waf_xss_match_set}
  */
  export class WafXssMatchSet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_waf_xss_match_set";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set.html aws_waf_xss_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafXssMatchSetConfig
    */
    public constructor(scope: Construct, id: string, config: WafXssMatchSetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_waf_xss_match_set',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._xssMatchTuples = config.xssMatchTuples;
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
      return this._name
    }

    // xss_match_tuples - computed: false, optional: true, required: false
    private _xssMatchTuples?: WafXssMatchSetXssMatchTuples[] | undefined; 
    public get xssMatchTuples() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('xss_match_tuples') as any;
    }
    public set xssMatchTuples(value: WafXssMatchSetXssMatchTuples[] | undefined) {
      this._xssMatchTuples = value;
    }
    public resetXssMatchTuples() {
      this._xssMatchTuples = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get xssMatchTuplesInput() {
      return this._xssMatchTuples
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        xss_match_tuples: cdktf.listMapper(wafXssMatchSetXssMatchTuplesToTerraform)(this._xssMatchTuples),
      };
    }
  }
  export interface DataAwsWafIpsetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/waf_ipset.html#name DataAwsWafIpset#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/waf_ipset.html aws_waf_ipset}
  */
  export class DataAwsWafIpset extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_waf_ipset";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/waf_ipset.html aws_waf_ipset} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWafIpsetConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsWafIpsetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_waf_ipset',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsWafRateBasedRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/waf_rate_based_rule.html#name DataAwsWafRateBasedRule#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/waf_rate_based_rule.html aws_waf_rate_based_rule}
  */
  export class DataAwsWafRateBasedRule extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_waf_rate_based_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/waf_rate_based_rule.html aws_waf_rate_based_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWafRateBasedRuleConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsWafRateBasedRuleConfig) {
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
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsWafRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/waf_rule.html#name DataAwsWafRule#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/waf_rule.html aws_waf_rule}
  */
  export class DataAwsWafRule extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_waf_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/waf_rule.html aws_waf_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWafRuleConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsWafRuleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_waf_rule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsWafWebAclConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/waf_web_acl.html#name DataAwsWafWebAcl#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/waf_web_acl.html aws_waf_web_acl}
  */
  export class DataAwsWafWebAcl extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_waf_web_acl";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/waf_web_acl.html aws_waf_web_acl} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWafWebAclConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsWafWebAclConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_waf_web_acl',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
}
