// https://www.terraform.io/docs/providers/aws/r/route53_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53RecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#allow_overwrite Route53Record#allow_overwrite}
  */
  readonly allowOverwrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#health_check_id Route53Record#health_check_id}
  */
  readonly healthCheckId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#id Route53Record#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#multivalue_answer_routing_policy Route53Record#multivalue_answer_routing_policy}
  */
  readonly multivalueAnswerRoutingPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#name Route53Record#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#records Route53Record#records}
  */
  readonly records?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#set_identifier Route53Record#set_identifier}
  */
  readonly setIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#ttl Route53Record#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#type Route53Record#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#zone_id Route53Record#zone_id}
  */
  readonly zoneId: string;
  /**
  * alias block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#alias Route53Record#alias}
  */
  readonly alias?: Route53RecordAlias;
  /**
  * cidr_routing_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#cidr_routing_policy Route53Record#cidr_routing_policy}
  */
  readonly cidrRoutingPolicy?: Route53RecordCidrRoutingPolicy;
  /**
  * failover_routing_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#failover_routing_policy Route53Record#failover_routing_policy}
  */
  readonly failoverRoutingPolicy?: Route53RecordFailoverRoutingPolicy;
  /**
  * geolocation_routing_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#geolocation_routing_policy Route53Record#geolocation_routing_policy}
  */
  readonly geolocationRoutingPolicy?: Route53RecordGeolocationRoutingPolicy;
  /**
  * latency_routing_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#latency_routing_policy Route53Record#latency_routing_policy}
  */
  readonly latencyRoutingPolicy?: Route53RecordLatencyRoutingPolicy;
  /**
  * weighted_routing_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#weighted_routing_policy Route53Record#weighted_routing_policy}
  */
  readonly weightedRoutingPolicy?: Route53RecordWeightedRoutingPolicy;
}
export interface Route53RecordAlias {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#evaluate_target_health Route53Record#evaluate_target_health}
  */
  readonly evaluateTargetHealth: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#name Route53Record#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#zone_id Route53Record#zone_id}
  */
  readonly zoneId: string;
}

export function route53RecordAliasToTerraform(struct?: Route53RecordAliasOutputReference | Route53RecordAlias): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluate_target_health: cdktf.booleanToTerraform(struct!.evaluateTargetHealth),
    name: cdktf.stringToTerraform(struct!.name),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}

export class Route53RecordAliasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Route53RecordAlias | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluateTargetHealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluateTargetHealth = this._evaluateTargetHealth;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53RecordAlias | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._evaluateTargetHealth = undefined;
      this._name = undefined;
      this._zoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._evaluateTargetHealth = value.evaluateTargetHealth;
      this._name = value.name;
      this._zoneId = value.zoneId;
    }
  }

  // evaluate_target_health - computed: false, optional: false, required: true
  private _evaluateTargetHealth?: boolean | cdktf.IResolvable; 
  public get evaluateTargetHealth() {
    return this.getBooleanAttribute('evaluate_target_health');
  }
  public set evaluateTargetHealth(value: boolean | cdktf.IResolvable) {
    this._evaluateTargetHealth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateTargetHealthInput() {
    return this._evaluateTargetHealth;
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

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}
export interface Route53RecordCidrRoutingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#collection_id Route53Record#collection_id}
  */
  readonly collectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#location_name Route53Record#location_name}
  */
  readonly locationName: string;
}

export function route53RecordCidrRoutingPolicyToTerraform(struct?: Route53RecordCidrRoutingPolicyOutputReference | Route53RecordCidrRoutingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection_id: cdktf.stringToTerraform(struct!.collectionId),
    location_name: cdktf.stringToTerraform(struct!.locationName),
  }
}

export class Route53RecordCidrRoutingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Route53RecordCidrRoutingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionId = this._collectionId;
    }
    if (this._locationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationName = this._locationName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53RecordCidrRoutingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._collectionId = undefined;
      this._locationName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._collectionId = value.collectionId;
      this._locationName = value.locationName;
    }
  }

  // collection_id - computed: false, optional: false, required: true
  private _collectionId?: string; 
  public get collectionId() {
    return this.getStringAttribute('collection_id');
  }
  public set collectionId(value: string) {
    this._collectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIdInput() {
    return this._collectionId;
  }

  // location_name - computed: false, optional: false, required: true
  private _locationName?: string; 
  public get locationName() {
    return this.getStringAttribute('location_name');
  }
  public set locationName(value: string) {
    this._locationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationNameInput() {
    return this._locationName;
  }
}
export interface Route53RecordFailoverRoutingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#type Route53Record#type}
  */
  readonly type: string;
}

export function route53RecordFailoverRoutingPolicyToTerraform(struct?: Route53RecordFailoverRoutingPolicyOutputReference | Route53RecordFailoverRoutingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Route53RecordFailoverRoutingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Route53RecordFailoverRoutingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53RecordFailoverRoutingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
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
    return this._type;
  }
}
export interface Route53RecordGeolocationRoutingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#continent Route53Record#continent}
  */
  readonly continent?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#country Route53Record#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#subdivision Route53Record#subdivision}
  */
  readonly subdivision?: string;
}

export function route53RecordGeolocationRoutingPolicyToTerraform(struct?: Route53RecordGeolocationRoutingPolicyOutputReference | Route53RecordGeolocationRoutingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continent: cdktf.stringToTerraform(struct!.continent),
    country: cdktf.stringToTerraform(struct!.country),
    subdivision: cdktf.stringToTerraform(struct!.subdivision),
  }
}

export class Route53RecordGeolocationRoutingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Route53RecordGeolocationRoutingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continent !== undefined) {
      hasAnyValues = true;
      internalValueResult.continent = this._continent;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._subdivision !== undefined) {
      hasAnyValues = true;
      internalValueResult.subdivision = this._subdivision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53RecordGeolocationRoutingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._continent = undefined;
      this._country = undefined;
      this._subdivision = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._continent = value.continent;
      this._country = value.country;
      this._subdivision = value.subdivision;
    }
  }

  // continent - computed: false, optional: true, required: false
  private _continent?: string; 
  public get continent() {
    return this.getStringAttribute('continent');
  }
  public set continent(value: string) {
    this._continent = value;
  }
  public resetContinent() {
    this._continent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continentInput() {
    return this._continent;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // subdivision - computed: false, optional: true, required: false
  private _subdivision?: string; 
  public get subdivision() {
    return this.getStringAttribute('subdivision');
  }
  public set subdivision(value: string) {
    this._subdivision = value;
  }
  public resetSubdivision() {
    this._subdivision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdivisionInput() {
    return this._subdivision;
  }
}
export interface Route53RecordLatencyRoutingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#region Route53Record#region}
  */
  readonly region: string;
}

export function route53RecordLatencyRoutingPolicyToTerraform(struct?: Route53RecordLatencyRoutingPolicyOutputReference | Route53RecordLatencyRoutingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
  }
}

export class Route53RecordLatencyRoutingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Route53RecordLatencyRoutingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53RecordLatencyRoutingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._region = value.region;
    }
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface Route53RecordWeightedRoutingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#weight Route53Record#weight}
  */
  readonly weight: number;
}

export function route53RecordWeightedRoutingPolicyToTerraform(struct?: Route53RecordWeightedRoutingPolicyOutputReference | Route53RecordWeightedRoutingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export class Route53RecordWeightedRoutingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Route53RecordWeightedRoutingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53RecordWeightedRoutingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._weight = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._weight = value.weight;
    }
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_record aws_route53_record}
*/
export class Route53Record extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_route53_record";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_record aws_route53_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53RecordConfig
  */
  public constructor(scope: Construct, id: string, config: Route53RecordConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_record',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowOverwrite = config.allowOverwrite;
    this._healthCheckId = config.healthCheckId;
    this._id = config.id;
    this._multivalueAnswerRoutingPolicy = config.multivalueAnswerRoutingPolicy;
    this._name = config.name;
    this._records = config.records;
    this._setIdentifier = config.setIdentifier;
    this._ttl = config.ttl;
    this._type = config.type;
    this._zoneId = config.zoneId;
    this._alias.internalValue = config.alias;
    this._cidrRoutingPolicy.internalValue = config.cidrRoutingPolicy;
    this._failoverRoutingPolicy.internalValue = config.failoverRoutingPolicy;
    this._geolocationRoutingPolicy.internalValue = config.geolocationRoutingPolicy;
    this._latencyRoutingPolicy.internalValue = config.latencyRoutingPolicy;
    this._weightedRoutingPolicy.internalValue = config.weightedRoutingPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_overwrite - computed: true, optional: true, required: false
  private _allowOverwrite?: boolean | cdktf.IResolvable; 
  public get allowOverwrite() {
    return this.getBooleanAttribute('allow_overwrite');
  }
  public set allowOverwrite(value: boolean | cdktf.IResolvable) {
    this._allowOverwrite = value;
  }
  public resetAllowOverwrite() {
    this._allowOverwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOverwriteInput() {
    return this._allowOverwrite;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // health_check_id - computed: false, optional: true, required: false
  private _healthCheckId?: string; 
  public get healthCheckId() {
    return this.getStringAttribute('health_check_id');
  }
  public set healthCheckId(value: string) {
    this._healthCheckId = value;
  }
  public resetHealthCheckId() {
    this._healthCheckId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIdInput() {
    return this._healthCheckId;
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

  // multivalue_answer_routing_policy - computed: false, optional: true, required: false
  private _multivalueAnswerRoutingPolicy?: boolean | cdktf.IResolvable; 
  public get multivalueAnswerRoutingPolicy() {
    return this.getBooleanAttribute('multivalue_answer_routing_policy');
  }
  public set multivalueAnswerRoutingPolicy(value: boolean | cdktf.IResolvable) {
    this._multivalueAnswerRoutingPolicy = value;
  }
  public resetMultivalueAnswerRoutingPolicy() {
    this._multivalueAnswerRoutingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multivalueAnswerRoutingPolicyInput() {
    return this._multivalueAnswerRoutingPolicy;
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

  // records - computed: false, optional: true, required: false
  private _records?: string[]; 
  public get records() {
    return cdktf.Fn.tolist(this.getListAttribute('records'));
  }
  public set records(value: string[]) {
    this._records = value;
  }
  public resetRecords() {
    this._records = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordsInput() {
    return this._records;
  }

  // set_identifier - computed: false, optional: true, required: false
  private _setIdentifier?: string; 
  public get setIdentifier() {
    return this.getStringAttribute('set_identifier');
  }
  public set setIdentifier(value: string) {
    this._setIdentifier = value;
  }
  public resetSetIdentifier() {
    this._setIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIdentifierInput() {
    return this._setIdentifier;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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
    return this._type;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // alias - computed: false, optional: true, required: false
  private _alias = new Route53RecordAliasOutputReference(this, "alias");
  public get alias() {
    return this._alias;
  }
  public putAlias(value: Route53RecordAlias) {
    this._alias.internalValue = value;
  }
  public resetAlias() {
    this._alias.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias.internalValue;
  }

  // cidr_routing_policy - computed: false, optional: true, required: false
  private _cidrRoutingPolicy = new Route53RecordCidrRoutingPolicyOutputReference(this, "cidr_routing_policy");
  public get cidrRoutingPolicy() {
    return this._cidrRoutingPolicy;
  }
  public putCidrRoutingPolicy(value: Route53RecordCidrRoutingPolicy) {
    this._cidrRoutingPolicy.internalValue = value;
  }
  public resetCidrRoutingPolicy() {
    this._cidrRoutingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrRoutingPolicyInput() {
    return this._cidrRoutingPolicy.internalValue;
  }

  // failover_routing_policy - computed: false, optional: true, required: false
  private _failoverRoutingPolicy = new Route53RecordFailoverRoutingPolicyOutputReference(this, "failover_routing_policy");
  public get failoverRoutingPolicy() {
    return this._failoverRoutingPolicy;
  }
  public putFailoverRoutingPolicy(value: Route53RecordFailoverRoutingPolicy) {
    this._failoverRoutingPolicy.internalValue = value;
  }
  public resetFailoverRoutingPolicy() {
    this._failoverRoutingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverRoutingPolicyInput() {
    return this._failoverRoutingPolicy.internalValue;
  }

  // geolocation_routing_policy - computed: false, optional: true, required: false
  private _geolocationRoutingPolicy = new Route53RecordGeolocationRoutingPolicyOutputReference(this, "geolocation_routing_policy");
  public get geolocationRoutingPolicy() {
    return this._geolocationRoutingPolicy;
  }
  public putGeolocationRoutingPolicy(value: Route53RecordGeolocationRoutingPolicy) {
    this._geolocationRoutingPolicy.internalValue = value;
  }
  public resetGeolocationRoutingPolicy() {
    this._geolocationRoutingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocationRoutingPolicyInput() {
    return this._geolocationRoutingPolicy.internalValue;
  }

  // latency_routing_policy - computed: false, optional: true, required: false
  private _latencyRoutingPolicy = new Route53RecordLatencyRoutingPolicyOutputReference(this, "latency_routing_policy");
  public get latencyRoutingPolicy() {
    return this._latencyRoutingPolicy;
  }
  public putLatencyRoutingPolicy(value: Route53RecordLatencyRoutingPolicy) {
    this._latencyRoutingPolicy.internalValue = value;
  }
  public resetLatencyRoutingPolicy() {
    this._latencyRoutingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyRoutingPolicyInput() {
    return this._latencyRoutingPolicy.internalValue;
  }

  // weighted_routing_policy - computed: false, optional: true, required: false
  private _weightedRoutingPolicy = new Route53RecordWeightedRoutingPolicyOutputReference(this, "weighted_routing_policy");
  public get weightedRoutingPolicy() {
    return this._weightedRoutingPolicy;
  }
  public putWeightedRoutingPolicy(value: Route53RecordWeightedRoutingPolicy) {
    this._weightedRoutingPolicy.internalValue = value;
  }
  public resetWeightedRoutingPolicy() {
    this._weightedRoutingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedRoutingPolicyInput() {
    return this._weightedRoutingPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_overwrite: cdktf.booleanToTerraform(this._allowOverwrite),
      health_check_id: cdktf.stringToTerraform(this._healthCheckId),
      id: cdktf.stringToTerraform(this._id),
      multivalue_answer_routing_policy: cdktf.booleanToTerraform(this._multivalueAnswerRoutingPolicy),
      name: cdktf.stringToTerraform(this._name),
      records: cdktf.listMapper(cdktf.stringToTerraform, false)(this._records),
      set_identifier: cdktf.stringToTerraform(this._setIdentifier),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      alias: route53RecordAliasToTerraform(this._alias.internalValue),
      cidr_routing_policy: route53RecordCidrRoutingPolicyToTerraform(this._cidrRoutingPolicy.internalValue),
      failover_routing_policy: route53RecordFailoverRoutingPolicyToTerraform(this._failoverRoutingPolicy.internalValue),
      geolocation_routing_policy: route53RecordGeolocationRoutingPolicyToTerraform(this._geolocationRoutingPolicy.internalValue),
      latency_routing_policy: route53RecordLatencyRoutingPolicyToTerraform(this._latencyRoutingPolicy.internalValue),
      weighted_routing_policy: route53RecordWeightedRoutingPolicyToTerraform(this._weightedRoutingPolicy.internalValue),
    };
  }
}
