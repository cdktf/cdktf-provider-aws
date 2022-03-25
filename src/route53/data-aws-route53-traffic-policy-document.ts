// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Route 53
*/
export interface DataAwsRoute53TrafficPolicyDocumentConfig extends cdktf.TerraformMetaArguments {
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
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    geo_proximity_location: cdktf.listMapper(dataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocationToTerraform)(struct!.geoProximityLocation),
    items: cdktf.listMapper(dataAwsRoute53TrafficPolicyDocumentRuleItemsToTerraform)(struct!.items),
    location: cdktf.listMapper(dataAwsRoute53TrafficPolicyDocumentRuleLocationToTerraform)(struct!.location),
    primary: dataAwsRoute53TrafficPolicyDocumentRulePrimaryToTerraform(struct!.primary),
    region: cdktf.listMapper(dataAwsRoute53TrafficPolicyDocumentRuleRegionToTerraform)(struct!.region),
    secondary: dataAwsRoute53TrafficPolicyDocumentRuleSecondaryToTerraform(struct!.secondary),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_traffic_policy_document aws_route53_traffic_policy_document}
*/
export class DataAwsRoute53TrafficPolicyDocument extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_route53_traffic_policy_document";

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
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._recordType = config.recordType;
    this._startEndpoint = config.startEndpoint;
    this._startRule = config.startRule;
    this._version = config.version;
    this._endpoint = config.endpoint;
    this._rule = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  private _endpoint?: DataAwsRoute53TrafficPolicyDocumentEndpoint[] | cdktf.IResolvable; 
  public get endpoint() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('endpoint')));
  }
  public set endpoint(value: DataAwsRoute53TrafficPolicyDocumentEndpoint[] | cdktf.IResolvable) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: DataAwsRoute53TrafficPolicyDocumentRule[] | cdktf.IResolvable; 
  public get rule() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('rule')));
  }
  public set rule(value: DataAwsRoute53TrafficPolicyDocumentRule[] | cdktf.IResolvable) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      record_type: cdktf.stringToTerraform(this._recordType),
      start_endpoint: cdktf.stringToTerraform(this._startEndpoint),
      start_rule: cdktf.stringToTerraform(this._startRule),
      version: cdktf.stringToTerraform(this._version),
      endpoint: cdktf.listMapper(dataAwsRoute53TrafficPolicyDocumentEndpointToTerraform)(this._endpoint),
      rule: cdktf.listMapper(dataAwsRoute53TrafficPolicyDocumentRuleToTerraform)(this._rule),
    };
  }
}
