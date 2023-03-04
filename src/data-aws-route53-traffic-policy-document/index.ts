// https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsRoute53TrafficPolicyDocumentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#id DataAwsRoute53TrafficPolicyDocument#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#record_type DataAwsRoute53TrafficPolicyDocument#record_type}
  */
  readonly recordType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#start_endpoint DataAwsRoute53TrafficPolicyDocument#start_endpoint}
  */
  readonly startEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#start_rule DataAwsRoute53TrafficPolicyDocument#start_rule}
  */
  readonly startRule?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#version DataAwsRoute53TrafficPolicyDocument#version}
  */
  readonly version?: string;
  /**
  * endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#endpoint DataAwsRoute53TrafficPolicyDocument#endpoint}
  */
  readonly endpoint?: DataAwsRoute53TrafficPolicyDocumentEndpoint[] | cdktf.IResolvable;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#rule DataAwsRoute53TrafficPolicyDocument#rule}
  */
  readonly rule?: DataAwsRoute53TrafficPolicyDocumentRule[] | cdktf.IResolvable;
}
export interface DataAwsRoute53TrafficPolicyDocumentEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#id DataAwsRoute53TrafficPolicyDocument#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#region DataAwsRoute53TrafficPolicyDocument#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#type DataAwsRoute53TrafficPolicyDocument#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#value DataAwsRoute53TrafficPolicyDocument#value}
  */
  readonly value?: string;
}

export function dataAwsRoute53TrafficPolicyDocumentEndpointToTerraform(struct?: DataAwsRoute53TrafficPolicyDocumentEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    region: cdktf.stringToTerraform(struct!.region),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsRoute53TrafficPolicyDocumentEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsRoute53TrafficPolicyDocumentEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsRoute53TrafficPolicyDocumentEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._region = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._region = value.region;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataAwsRoute53TrafficPolicyDocumentEndpointList extends cdktf.ComplexList {
  public internalValue? : DataAwsRoute53TrafficPolicyDocumentEndpoint[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsRoute53TrafficPolicyDocumentEndpointOutputReference {
    return new DataAwsRoute53TrafficPolicyDocumentEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#bias DataAwsRoute53TrafficPolicyDocument#bias}
  */
  readonly bias?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#endpoint_reference DataAwsRoute53TrafficPolicyDocument#endpoint_reference}
  */
  readonly endpointReference?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#evaluate_target_health DataAwsRoute53TrafficPolicyDocument#evaluate_target_health}
  */
  readonly evaluateTargetHealth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#health_check DataAwsRoute53TrafficPolicyDocument#health_check}
  */
  readonly healthCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#latitude DataAwsRoute53TrafficPolicyDocument#latitude}
  */
  readonly latitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#longitude DataAwsRoute53TrafficPolicyDocument#longitude}
  */
  readonly longitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#region DataAwsRoute53TrafficPolicyDocument#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#rule_reference DataAwsRoute53TrafficPolicyDocument#rule_reference}
  */
  readonly ruleReference?: string;
}

export function dataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocationToTerraform(struct?: DataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bias: cdktf.stringToTerraform(struct!.bias),
    endpoint_reference: cdktf.stringToTerraform(struct!.endpointReference),
    evaluate_target_health: cdktf.booleanToTerraform(struct!.evaluateTargetHealth),
    health_check: cdktf.stringToTerraform(struct!.healthCheck),
    latitude: cdktf.stringToTerraform(struct!.latitude),
    longitude: cdktf.stringToTerraform(struct!.longitude),
    region: cdktf.stringToTerraform(struct!.region),
    rule_reference: cdktf.stringToTerraform(struct!.ruleReference),
  }
}

export class DataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bias !== undefined) {
      hasAnyValues = true;
      internalValueResult.bias = this._bias;
    }
    if (this._endpointReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointReference = this._endpointReference;
    }
    if (this._evaluateTargetHealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluateTargetHealth = this._evaluateTargetHealth;
    }
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._ruleReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleReference = this._ruleReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bias = undefined;
      this._endpointReference = undefined;
      this._evaluateTargetHealth = undefined;
      this._healthCheck = undefined;
      this._latitude = undefined;
      this._longitude = undefined;
      this._region = undefined;
      this._ruleReference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bias = value.bias;
      this._endpointReference = value.endpointReference;
      this._evaluateTargetHealth = value.evaluateTargetHealth;
      this._healthCheck = value.healthCheck;
      this._latitude = value.latitude;
      this._longitude = value.longitude;
      this._region = value.region;
      this._ruleReference = value.ruleReference;
    }
  }

  // bias - computed: false, optional: true, required: false
  private _bias?: string; 
  public get bias() {
    return this.getStringAttribute('bias');
  }
  public set bias(value: string) {
    this._bias = value;
  }
  public resetBias() {
    this._bias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biasInput() {
    return this._bias;
  }

  // endpoint_reference - computed: false, optional: true, required: false
  private _endpointReference?: string; 
  public get endpointReference() {
    return this.getStringAttribute('endpoint_reference');
  }
  public set endpointReference(value: string) {
    this._endpointReference = value;
  }
  public resetEndpointReference() {
    this._endpointReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointReferenceInput() {
    return this._endpointReference;
  }

  // evaluate_target_health - computed: false, optional: true, required: false
  private _evaluateTargetHealth?: boolean | cdktf.IResolvable; 
  public get evaluateTargetHealth() {
    return this.getBooleanAttribute('evaluate_target_health');
  }
  public set evaluateTargetHealth(value: boolean | cdktf.IResolvable) {
    this._evaluateTargetHealth = value;
  }
  public resetEvaluateTargetHealth() {
    this._evaluateTargetHealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateTargetHealthInput() {
    return this._evaluateTargetHealth;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // latitude - computed: false, optional: true, required: false
  private _latitude?: string; 
  public get latitude() {
    return this.getStringAttribute('latitude');
  }
  public set latitude(value: string) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: false, optional: true, required: false
  private _longitude?: string; 
  public get longitude() {
    return this.getStringAttribute('longitude');
  }
  public set longitude(value: string) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // rule_reference - computed: false, optional: true, required: false
  private _ruleReference?: string; 
  public get ruleReference() {
    return this.getStringAttribute('rule_reference');
  }
  public set ruleReference(value: string) {
    this._ruleReference = value;
  }
  public resetRuleReference() {
    this._ruleReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleReferenceInput() {
    return this._ruleReference;
  }
}

export class DataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocationList extends cdktf.ComplexList {
  public internalValue? : DataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocation[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocationOutputReference {
    return new DataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsRoute53TrafficPolicyDocumentRuleItems {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#endpoint_reference DataAwsRoute53TrafficPolicyDocument#endpoint_reference}
  */
  readonly endpointReference?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#health_check DataAwsRoute53TrafficPolicyDocument#health_check}
  */
  readonly healthCheck?: string;
}

export function dataAwsRoute53TrafficPolicyDocumentRuleItemsToTerraform(struct?: DataAwsRoute53TrafficPolicyDocumentRuleItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_reference: cdktf.stringToTerraform(struct!.endpointReference),
    health_check: cdktf.stringToTerraform(struct!.healthCheck),
  }
}

export class DataAwsRoute53TrafficPolicyDocumentRuleItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsRoute53TrafficPolicyDocumentRuleItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointReference = this._endpointReference;
    }
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsRoute53TrafficPolicyDocumentRuleItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointReference = undefined;
      this._healthCheck = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointReference = value.endpointReference;
      this._healthCheck = value.healthCheck;
    }
  }

  // endpoint_reference - computed: false, optional: true, required: false
  private _endpointReference?: string; 
  public get endpointReference() {
    return this.getStringAttribute('endpoint_reference');
  }
  public set endpointReference(value: string) {
    this._endpointReference = value;
  }
  public resetEndpointReference() {
    this._endpointReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointReferenceInput() {
    return this._endpointReference;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }
}

export class DataAwsRoute53TrafficPolicyDocumentRuleItemsList extends cdktf.ComplexList {
  public internalValue? : DataAwsRoute53TrafficPolicyDocumentRuleItems[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsRoute53TrafficPolicyDocumentRuleItemsOutputReference {
    return new DataAwsRoute53TrafficPolicyDocumentRuleItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsRoute53TrafficPolicyDocumentRuleLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#continent DataAwsRoute53TrafficPolicyDocument#continent}
  */
  readonly continent?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#country DataAwsRoute53TrafficPolicyDocument#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#endpoint_reference DataAwsRoute53TrafficPolicyDocument#endpoint_reference}
  */
  readonly endpointReference?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#evaluate_target_health DataAwsRoute53TrafficPolicyDocument#evaluate_target_health}
  */
  readonly evaluateTargetHealth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#health_check DataAwsRoute53TrafficPolicyDocument#health_check}
  */
  readonly healthCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#is_default DataAwsRoute53TrafficPolicyDocument#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#rule_reference DataAwsRoute53TrafficPolicyDocument#rule_reference}
  */
  readonly ruleReference?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#subdivision DataAwsRoute53TrafficPolicyDocument#subdivision}
  */
  readonly subdivision?: string;
}

export function dataAwsRoute53TrafficPolicyDocumentRuleLocationToTerraform(struct?: DataAwsRoute53TrafficPolicyDocumentRuleLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continent: cdktf.stringToTerraform(struct!.continent),
    country: cdktf.stringToTerraform(struct!.country),
    endpoint_reference: cdktf.stringToTerraform(struct!.endpointReference),
    evaluate_target_health: cdktf.booleanToTerraform(struct!.evaluateTargetHealth),
    health_check: cdktf.stringToTerraform(struct!.healthCheck),
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    rule_reference: cdktf.stringToTerraform(struct!.ruleReference),
    subdivision: cdktf.stringToTerraform(struct!.subdivision),
  }
}

export class DataAwsRoute53TrafficPolicyDocumentRuleLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsRoute53TrafficPolicyDocumentRuleLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._endpointReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointReference = this._endpointReference;
    }
    if (this._evaluateTargetHealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluateTargetHealth = this._evaluateTargetHealth;
    }
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    if (this._ruleReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleReference = this._ruleReference;
    }
    if (this._subdivision !== undefined) {
      hasAnyValues = true;
      internalValueResult.subdivision = this._subdivision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsRoute53TrafficPolicyDocumentRuleLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._continent = undefined;
      this._country = undefined;
      this._endpointReference = undefined;
      this._evaluateTargetHealth = undefined;
      this._healthCheck = undefined;
      this._isDefault = undefined;
      this._ruleReference = undefined;
      this._subdivision = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._continent = value.continent;
      this._country = value.country;
      this._endpointReference = value.endpointReference;
      this._evaluateTargetHealth = value.evaluateTargetHealth;
      this._healthCheck = value.healthCheck;
      this._isDefault = value.isDefault;
      this._ruleReference = value.ruleReference;
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

  // endpoint_reference - computed: false, optional: true, required: false
  private _endpointReference?: string; 
  public get endpointReference() {
    return this.getStringAttribute('endpoint_reference');
  }
  public set endpointReference(value: string) {
    this._endpointReference = value;
  }
  public resetEndpointReference() {
    this._endpointReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointReferenceInput() {
    return this._endpointReference;
  }

  // evaluate_target_health - computed: false, optional: true, required: false
  private _evaluateTargetHealth?: boolean | cdktf.IResolvable; 
  public get evaluateTargetHealth() {
    return this.getBooleanAttribute('evaluate_target_health');
  }
  public set evaluateTargetHealth(value: boolean | cdktf.IResolvable) {
    this._evaluateTargetHealth = value;
  }
  public resetEvaluateTargetHealth() {
    this._evaluateTargetHealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateTargetHealthInput() {
    return this._evaluateTargetHealth;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // rule_reference - computed: false, optional: true, required: false
  private _ruleReference?: string; 
  public get ruleReference() {
    return this.getStringAttribute('rule_reference');
  }
  public set ruleReference(value: string) {
    this._ruleReference = value;
  }
  public resetRuleReference() {
    this._ruleReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleReferenceInput() {
    return this._ruleReference;
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

export class DataAwsRoute53TrafficPolicyDocumentRuleLocationList extends cdktf.ComplexList {
  public internalValue? : DataAwsRoute53TrafficPolicyDocumentRuleLocation[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsRoute53TrafficPolicyDocumentRuleLocationOutputReference {
    return new DataAwsRoute53TrafficPolicyDocumentRuleLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsRoute53TrafficPolicyDocumentRulePrimary {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#endpoint_reference DataAwsRoute53TrafficPolicyDocument#endpoint_reference}
  */
  readonly endpointReference?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#evaluate_target_health DataAwsRoute53TrafficPolicyDocument#evaluate_target_health}
  */
  readonly evaluateTargetHealth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#health_check DataAwsRoute53TrafficPolicyDocument#health_check}
  */
  readonly healthCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#rule_reference DataAwsRoute53TrafficPolicyDocument#rule_reference}
  */
  readonly ruleReference?: string;
}

export function dataAwsRoute53TrafficPolicyDocumentRulePrimaryToTerraform(struct?: DataAwsRoute53TrafficPolicyDocumentRulePrimaryOutputReference | DataAwsRoute53TrafficPolicyDocumentRulePrimary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_reference: cdktf.stringToTerraform(struct!.endpointReference),
    evaluate_target_health: cdktf.booleanToTerraform(struct!.evaluateTargetHealth),
    health_check: cdktf.stringToTerraform(struct!.healthCheck),
    rule_reference: cdktf.stringToTerraform(struct!.ruleReference),
  }
}

export class DataAwsRoute53TrafficPolicyDocumentRulePrimaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAwsRoute53TrafficPolicyDocumentRulePrimary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointReference = this._endpointReference;
    }
    if (this._evaluateTargetHealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluateTargetHealth = this._evaluateTargetHealth;
    }
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._ruleReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleReference = this._ruleReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsRoute53TrafficPolicyDocumentRulePrimary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpointReference = undefined;
      this._evaluateTargetHealth = undefined;
      this._healthCheck = undefined;
      this._ruleReference = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpointReference = value.endpointReference;
      this._evaluateTargetHealth = value.evaluateTargetHealth;
      this._healthCheck = value.healthCheck;
      this._ruleReference = value.ruleReference;
    }
  }

  // endpoint_reference - computed: false, optional: true, required: false
  private _endpointReference?: string; 
  public get endpointReference() {
    return this.getStringAttribute('endpoint_reference');
  }
  public set endpointReference(value: string) {
    this._endpointReference = value;
  }
  public resetEndpointReference() {
    this._endpointReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointReferenceInput() {
    return this._endpointReference;
  }

  // evaluate_target_health - computed: false, optional: true, required: false
  private _evaluateTargetHealth?: boolean | cdktf.IResolvable; 
  public get evaluateTargetHealth() {
    return this.getBooleanAttribute('evaluate_target_health');
  }
  public set evaluateTargetHealth(value: boolean | cdktf.IResolvable) {
    this._evaluateTargetHealth = value;
  }
  public resetEvaluateTargetHealth() {
    this._evaluateTargetHealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateTargetHealthInput() {
    return this._evaluateTargetHealth;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // rule_reference - computed: false, optional: true, required: false
  private _ruleReference?: string; 
  public get ruleReference() {
    return this.getStringAttribute('rule_reference');
  }
  public set ruleReference(value: string) {
    this._ruleReference = value;
  }
  public resetRuleReference() {
    this._ruleReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleReferenceInput() {
    return this._ruleReference;
  }
}
export interface DataAwsRoute53TrafficPolicyDocumentRuleRegion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#endpoint_reference DataAwsRoute53TrafficPolicyDocument#endpoint_reference}
  */
  readonly endpointReference?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#evaluate_target_health DataAwsRoute53TrafficPolicyDocument#evaluate_target_health}
  */
  readonly evaluateTargetHealth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#health_check DataAwsRoute53TrafficPolicyDocument#health_check}
  */
  readonly healthCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#region DataAwsRoute53TrafficPolicyDocument#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#rule_reference DataAwsRoute53TrafficPolicyDocument#rule_reference}
  */
  readonly ruleReference?: string;
}

export function dataAwsRoute53TrafficPolicyDocumentRuleRegionToTerraform(struct?: DataAwsRoute53TrafficPolicyDocumentRuleRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_reference: cdktf.stringToTerraform(struct!.endpointReference),
    evaluate_target_health: cdktf.booleanToTerraform(struct!.evaluateTargetHealth),
    health_check: cdktf.stringToTerraform(struct!.healthCheck),
    region: cdktf.stringToTerraform(struct!.region),
    rule_reference: cdktf.stringToTerraform(struct!.ruleReference),
  }
}

export class DataAwsRoute53TrafficPolicyDocumentRuleRegionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsRoute53TrafficPolicyDocumentRuleRegion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointReference = this._endpointReference;
    }
    if (this._evaluateTargetHealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluateTargetHealth = this._evaluateTargetHealth;
    }
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._ruleReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleReference = this._ruleReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsRoute53TrafficPolicyDocumentRuleRegion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointReference = undefined;
      this._evaluateTargetHealth = undefined;
      this._healthCheck = undefined;
      this._region = undefined;
      this._ruleReference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointReference = value.endpointReference;
      this._evaluateTargetHealth = value.evaluateTargetHealth;
      this._healthCheck = value.healthCheck;
      this._region = value.region;
      this._ruleReference = value.ruleReference;
    }
  }

  // endpoint_reference - computed: false, optional: true, required: false
  private _endpointReference?: string; 
  public get endpointReference() {
    return this.getStringAttribute('endpoint_reference');
  }
  public set endpointReference(value: string) {
    this._endpointReference = value;
  }
  public resetEndpointReference() {
    this._endpointReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointReferenceInput() {
    return this._endpointReference;
  }

  // evaluate_target_health - computed: false, optional: true, required: false
  private _evaluateTargetHealth?: boolean | cdktf.IResolvable; 
  public get evaluateTargetHealth() {
    return this.getBooleanAttribute('evaluate_target_health');
  }
  public set evaluateTargetHealth(value: boolean | cdktf.IResolvable) {
    this._evaluateTargetHealth = value;
  }
  public resetEvaluateTargetHealth() {
    this._evaluateTargetHealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateTargetHealthInput() {
    return this._evaluateTargetHealth;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // rule_reference - computed: false, optional: true, required: false
  private _ruleReference?: string; 
  public get ruleReference() {
    return this.getStringAttribute('rule_reference');
  }
  public set ruleReference(value: string) {
    this._ruleReference = value;
  }
  public resetRuleReference() {
    this._ruleReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleReferenceInput() {
    return this._ruleReference;
  }
}

export class DataAwsRoute53TrafficPolicyDocumentRuleRegionList extends cdktf.ComplexList {
  public internalValue? : DataAwsRoute53TrafficPolicyDocumentRuleRegion[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsRoute53TrafficPolicyDocumentRuleRegionOutputReference {
    return new DataAwsRoute53TrafficPolicyDocumentRuleRegionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsRoute53TrafficPolicyDocumentRuleSecondary {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#endpoint_reference DataAwsRoute53TrafficPolicyDocument#endpoint_reference}
  */
  readonly endpointReference?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#evaluate_target_health DataAwsRoute53TrafficPolicyDocument#evaluate_target_health}
  */
  readonly evaluateTargetHealth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#health_check DataAwsRoute53TrafficPolicyDocument#health_check}
  */
  readonly healthCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#rule_reference DataAwsRoute53TrafficPolicyDocument#rule_reference}
  */
  readonly ruleReference?: string;
}

export function dataAwsRoute53TrafficPolicyDocumentRuleSecondaryToTerraform(struct?: DataAwsRoute53TrafficPolicyDocumentRuleSecondaryOutputReference | DataAwsRoute53TrafficPolicyDocumentRuleSecondary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_reference: cdktf.stringToTerraform(struct!.endpointReference),
    evaluate_target_health: cdktf.booleanToTerraform(struct!.evaluateTargetHealth),
    health_check: cdktf.stringToTerraform(struct!.healthCheck),
    rule_reference: cdktf.stringToTerraform(struct!.ruleReference),
  }
}

export class DataAwsRoute53TrafficPolicyDocumentRuleSecondaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAwsRoute53TrafficPolicyDocumentRuleSecondary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointReference = this._endpointReference;
    }
    if (this._evaluateTargetHealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluateTargetHealth = this._evaluateTargetHealth;
    }
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._ruleReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleReference = this._ruleReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsRoute53TrafficPolicyDocumentRuleSecondary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpointReference = undefined;
      this._evaluateTargetHealth = undefined;
      this._healthCheck = undefined;
      this._ruleReference = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpointReference = value.endpointReference;
      this._evaluateTargetHealth = value.evaluateTargetHealth;
      this._healthCheck = value.healthCheck;
      this._ruleReference = value.ruleReference;
    }
  }

  // endpoint_reference - computed: false, optional: true, required: false
  private _endpointReference?: string; 
  public get endpointReference() {
    return this.getStringAttribute('endpoint_reference');
  }
  public set endpointReference(value: string) {
    this._endpointReference = value;
  }
  public resetEndpointReference() {
    this._endpointReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointReferenceInput() {
    return this._endpointReference;
  }

  // evaluate_target_health - computed: false, optional: true, required: false
  private _evaluateTargetHealth?: boolean | cdktf.IResolvable; 
  public get evaluateTargetHealth() {
    return this.getBooleanAttribute('evaluate_target_health');
  }
  public set evaluateTargetHealth(value: boolean | cdktf.IResolvable) {
    this._evaluateTargetHealth = value;
  }
  public resetEvaluateTargetHealth() {
    this._evaluateTargetHealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateTargetHealthInput() {
    return this._evaluateTargetHealth;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // rule_reference - computed: false, optional: true, required: false
  private _ruleReference?: string; 
  public get ruleReference() {
    return this.getStringAttribute('rule_reference');
  }
  public set ruleReference(value: string) {
    this._ruleReference = value;
  }
  public resetRuleReference() {
    this._ruleReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleReferenceInput() {
    return this._ruleReference;
  }
}
export interface DataAwsRoute53TrafficPolicyDocumentRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#id DataAwsRoute53TrafficPolicyDocument#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#type DataAwsRoute53TrafficPolicyDocument#type}
  */
  readonly type?: string;
  /**
  * geo_proximity_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#geo_proximity_location DataAwsRoute53TrafficPolicyDocument#geo_proximity_location}
  */
  readonly geoProximityLocation?: DataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocation[] | cdktf.IResolvable;
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#items DataAwsRoute53TrafficPolicyDocument#items}
  */
  readonly items?: DataAwsRoute53TrafficPolicyDocumentRuleItems[] | cdktf.IResolvable;
  /**
  * location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#location DataAwsRoute53TrafficPolicyDocument#location}
  */
  readonly location?: DataAwsRoute53TrafficPolicyDocumentRuleLocation[] | cdktf.IResolvable;
  /**
  * primary block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#primary DataAwsRoute53TrafficPolicyDocument#primary}
  */
  readonly primary?: DataAwsRoute53TrafficPolicyDocumentRulePrimary;
  /**
  * region block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#region DataAwsRoute53TrafficPolicyDocument#region}
  */
  readonly region?: DataAwsRoute53TrafficPolicyDocumentRuleRegion[] | cdktf.IResolvable;
  /**
  * secondary block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document#secondary DataAwsRoute53TrafficPolicyDocument#secondary}
  */
  readonly secondary?: DataAwsRoute53TrafficPolicyDocumentRuleSecondary;
}

export function dataAwsRoute53TrafficPolicyDocumentRuleToTerraform(struct?: DataAwsRoute53TrafficPolicyDocumentRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
    geo_proximity_location: cdktf.listMapper(dataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocationToTerraform, true)(struct!.geoProximityLocation),
    items: cdktf.listMapper(dataAwsRoute53TrafficPolicyDocumentRuleItemsToTerraform, true)(struct!.items),
    location: cdktf.listMapper(dataAwsRoute53TrafficPolicyDocumentRuleLocationToTerraform, true)(struct!.location),
    primary: dataAwsRoute53TrafficPolicyDocumentRulePrimaryToTerraform(struct!.primary),
    region: cdktf.listMapper(dataAwsRoute53TrafficPolicyDocumentRuleRegionToTerraform, true)(struct!.region),
    secondary: dataAwsRoute53TrafficPolicyDocumentRuleSecondaryToTerraform(struct!.secondary),
  }
}

export class DataAwsRoute53TrafficPolicyDocumentRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsRoute53TrafficPolicyDocumentRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._geoProximityLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoProximityLocation = this._geoProximityLocation?.internalValue;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    if (this._primary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary?.internalValue;
    }
    if (this._region?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region?.internalValue;
    }
    if (this._secondary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondary = this._secondary?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsRoute53TrafficPolicyDocumentRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
      this._geoProximityLocation.internalValue = undefined;
      this._items.internalValue = undefined;
      this._location.internalValue = undefined;
      this._primary.internalValue = undefined;
      this._region.internalValue = undefined;
      this._secondary.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
      this._geoProximityLocation.internalValue = value.geoProximityLocation;
      this._items.internalValue = value.items;
      this._location.internalValue = value.location;
      this._primary.internalValue = value.primary;
      this._region.internalValue = value.region;
      this._secondary.internalValue = value.secondary;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // geo_proximity_location - computed: false, optional: true, required: false
  private _geoProximityLocation = new DataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocationList(this, "geo_proximity_location", true);
  public get geoProximityLocation() {
    return this._geoProximityLocation;
  }
  public putGeoProximityLocation(value: DataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocation[] | cdktf.IResolvable) {
    this._geoProximityLocation.internalValue = value;
  }
  public resetGeoProximityLocation() {
    this._geoProximityLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoProximityLocationInput() {
    return this._geoProximityLocation.internalValue;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataAwsRoute53TrafficPolicyDocumentRuleItemsList(this, "items", true);
  public get items() {
    return this._items;
  }
  public putItems(value: DataAwsRoute53TrafficPolicyDocumentRuleItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // location - computed: false, optional: true, required: false
  private _location = new DataAwsRoute53TrafficPolicyDocumentRuleLocationList(this, "location", true);
  public get location() {
    return this._location;
  }
  public putLocation(value: DataAwsRoute53TrafficPolicyDocumentRuleLocation[] | cdktf.IResolvable) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // primary - computed: false, optional: true, required: false
  private _primary = new DataAwsRoute53TrafficPolicyDocumentRulePrimaryOutputReference(this, "primary");
  public get primary() {
    return this._primary;
  }
  public putPrimary(value: DataAwsRoute53TrafficPolicyDocumentRulePrimary) {
    this._primary.internalValue = value;
  }
  public resetPrimary() {
    this._primary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary.internalValue;
  }

  // region - computed: false, optional: true, required: false
  private _region = new DataAwsRoute53TrafficPolicyDocumentRuleRegionList(this, "region", true);
  public get region() {
    return this._region;
  }
  public putRegion(value: DataAwsRoute53TrafficPolicyDocumentRuleRegion[] | cdktf.IResolvable) {
    this._region.internalValue = value;
  }
  public resetRegion() {
    this._region.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region.internalValue;
  }

  // secondary - computed: false, optional: true, required: false
  private _secondary = new DataAwsRoute53TrafficPolicyDocumentRuleSecondaryOutputReference(this, "secondary");
  public get secondary() {
    return this._secondary;
  }
  public putSecondary(value: DataAwsRoute53TrafficPolicyDocumentRuleSecondary) {
    this._secondary.internalValue = value;
  }
  public resetSecondary() {
    this._secondary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary.internalValue;
  }
}

export class DataAwsRoute53TrafficPolicyDocumentRuleList extends cdktf.ComplexList {
  public internalValue? : DataAwsRoute53TrafficPolicyDocumentRule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsRoute53TrafficPolicyDocumentRuleOutputReference {
    return new DataAwsRoute53TrafficPolicyDocumentRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document aws_route53_traffic_policy_document}
*/
export class DataAwsRoute53TrafficPolicyDocument extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_route53_traffic_policy_document";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document aws_route53_traffic_policy_document} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsRoute53TrafficPolicyDocumentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsRoute53TrafficPolicyDocumentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_traffic_policy_document',
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
    this._id = config.id;
    this._recordType = config.recordType;
    this._startEndpoint = config.startEndpoint;
    this._startRule = config.startRule;
    this._version = config.version;
    this._endpoint.internalValue = config.endpoint;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // record_type - computed: false, optional: true, required: false
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  public resetRecordType() {
    this._recordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // start_endpoint - computed: false, optional: true, required: false
  private _startEndpoint?: string; 
  public get startEndpoint() {
    return this.getStringAttribute('start_endpoint');
  }
  public set startEndpoint(value: string) {
    this._startEndpoint = value;
  }
  public resetStartEndpoint() {
    this._startEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startEndpointInput() {
    return this._startEndpoint;
  }

  // start_rule - computed: false, optional: true, required: false
  private _startRule?: string; 
  public get startRule() {
    return this.getStringAttribute('start_rule');
  }
  public set startRule(value: string) {
    this._startRule = value;
  }
  public resetStartRule() {
    this._startRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startRuleInput() {
    return this._startRule;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint = new DataAwsRoute53TrafficPolicyDocumentEndpointList(this, "endpoint", true);
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: DataAwsRoute53TrafficPolicyDocumentEndpoint[] | cdktf.IResolvable) {
    this._endpoint.internalValue = value;
  }
  public resetEndpoint() {
    this._endpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new DataAwsRoute53TrafficPolicyDocumentRuleList(this, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: DataAwsRoute53TrafficPolicyDocumentRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      record_type: cdktf.stringToTerraform(this._recordType),
      start_endpoint: cdktf.stringToTerraform(this._startEndpoint),
      start_rule: cdktf.stringToTerraform(this._startRule),
      version: cdktf.stringToTerraform(this._version),
      endpoint: cdktf.listMapper(dataAwsRoute53TrafficPolicyDocumentEndpointToTerraform, true)(this._endpoint.internalValue),
      rule: cdktf.listMapper(dataAwsRoute53TrafficPolicyDocumentRuleToTerraform, true)(this._rule.internalValue),
    };
  }
}
