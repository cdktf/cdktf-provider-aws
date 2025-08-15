/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53RecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#allow_overwrite Route53Record#allow_overwrite}
  */
  readonly allowOverwrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#health_check_id Route53Record#health_check_id}
  */
  readonly healthCheckId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#id Route53Record#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#multivalue_answer_routing_policy Route53Record#multivalue_answer_routing_policy}
  */
  readonly multivalueAnswerRoutingPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#name Route53Record#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#records Route53Record#records}
  */
  readonly records?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#set_identifier Route53Record#set_identifier}
  */
  readonly setIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#ttl Route53Record#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#type Route53Record#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#zone_id Route53Record#zone_id}
  */
  readonly zoneId: string;
  /**
  * alias block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#alias Route53Record#alias}
  */
  readonly alias?: Route53RecordAlias;
  /**
  * cidr_routing_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#cidr_routing_policy Route53Record#cidr_routing_policy}
  */
  readonly cidrRoutingPolicy?: Route53RecordCidrRoutingPolicy;
  /**
  * failover_routing_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#failover_routing_policy Route53Record#failover_routing_policy}
  */
  readonly failoverRoutingPolicy?: Route53RecordFailoverRoutingPolicy;
  /**
  * geolocation_routing_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#geolocation_routing_policy Route53Record#geolocation_routing_policy}
  */
  readonly geolocationRoutingPolicy?: Route53RecordGeolocationRoutingPolicy;
  /**
  * geoproximity_routing_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#geoproximity_routing_policy Route53Record#geoproximity_routing_policy}
  */
  readonly geoproximityRoutingPolicy?: Route53RecordGeoproximityRoutingPolicy;
  /**
  * latency_routing_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#latency_routing_policy Route53Record#latency_routing_policy}
  */
  readonly latencyRoutingPolicy?: Route53RecordLatencyRoutingPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#timeouts Route53Record#timeouts}
  */
  readonly timeouts?: Route53RecordTimeouts;
  /**
  * weighted_routing_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#weighted_routing_policy Route53Record#weighted_routing_policy}
  */
  readonly weightedRoutingPolicy?: Route53RecordWeightedRoutingPolicy;
}
export interface Route53RecordAlias {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#evaluate_target_health Route53Record#evaluate_target_health}
  */
  readonly evaluateTargetHealth: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#name Route53Record#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#zone_id Route53Record#zone_id}
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


export function route53RecordAliasToHclTerraform(struct?: Route53RecordAliasOutputReference | Route53RecordAlias): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluate_target_health: {
      value: cdktf.booleanToHclTerraform(struct!.evaluateTargetHealth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#collection_id Route53Record#collection_id}
  */
  readonly collectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#location_name Route53Record#location_name}
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


export function route53RecordCidrRoutingPolicyToHclTerraform(struct?: Route53RecordCidrRoutingPolicyOutputReference | Route53RecordCidrRoutingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection_id: {
      value: cdktf.stringToHclTerraform(struct!.collectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_name: {
      value: cdktf.stringToHclTerraform(struct!.locationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#type Route53Record#type}
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


export function route53RecordFailoverRoutingPolicyToHclTerraform(struct?: Route53RecordFailoverRoutingPolicyOutputReference | Route53RecordFailoverRoutingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#continent Route53Record#continent}
  */
  readonly continent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#country Route53Record#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#subdivision Route53Record#subdivision}
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


export function route53RecordGeolocationRoutingPolicyToHclTerraform(struct?: Route53RecordGeolocationRoutingPolicyOutputReference | Route53RecordGeolocationRoutingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continent: {
      value: cdktf.stringToHclTerraform(struct!.continent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subdivision: {
      value: cdktf.stringToHclTerraform(struct!.subdivision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
export interface Route53RecordGeoproximityRoutingPolicyCoordinates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#latitude Route53Record#latitude}
  */
  readonly latitude: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#longitude Route53Record#longitude}
  */
  readonly longitude: string;
}

export function route53RecordGeoproximityRoutingPolicyCoordinatesToTerraform(struct?: Route53RecordGeoproximityRoutingPolicyCoordinates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    latitude: cdktf.stringToTerraform(struct!.latitude),
    longitude: cdktf.stringToTerraform(struct!.longitude),
  }
}


export function route53RecordGeoproximityRoutingPolicyCoordinatesToHclTerraform(struct?: Route53RecordGeoproximityRoutingPolicyCoordinates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    latitude: {
      value: cdktf.stringToHclTerraform(struct!.latitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    longitude: {
      value: cdktf.stringToHclTerraform(struct!.longitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Route53RecordGeoproximityRoutingPolicyCoordinates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53RecordGeoproximityRoutingPolicyCoordinates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._latitude = undefined;
      this._longitude = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._latitude = value.latitude;
      this._longitude = value.longitude;
    }
  }

  // latitude - computed: false, optional: false, required: true
  private _latitude?: string; 
  public get latitude() {
    return this.getStringAttribute('latitude');
  }
  public set latitude(value: string) {
    this._latitude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: false, optional: false, required: true
  private _longitude?: string; 
  public get longitude() {
    return this.getStringAttribute('longitude');
  }
  public set longitude(value: string) {
    this._longitude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }
}

export class Route53RecordGeoproximityRoutingPolicyCoordinatesList extends cdktf.ComplexList {
  public internalValue? : Route53RecordGeoproximityRoutingPolicyCoordinates[] | cdktf.IResolvable

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
  public get(index: number): Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference {
    return new Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Route53RecordGeoproximityRoutingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#aws_region Route53Record#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#bias Route53Record#bias}
  */
  readonly bias?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#local_zone_group Route53Record#local_zone_group}
  */
  readonly localZoneGroup?: string;
  /**
  * coordinates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#coordinates Route53Record#coordinates}
  */
  readonly coordinates?: Route53RecordGeoproximityRoutingPolicyCoordinates[] | cdktf.IResolvable;
}

export function route53RecordGeoproximityRoutingPolicyToTerraform(struct?: Route53RecordGeoproximityRoutingPolicyOutputReference | Route53RecordGeoproximityRoutingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    bias: cdktf.numberToTerraform(struct!.bias),
    local_zone_group: cdktf.stringToTerraform(struct!.localZoneGroup),
    coordinates: cdktf.listMapper(route53RecordGeoproximityRoutingPolicyCoordinatesToTerraform, true)(struct!.coordinates),
  }
}


export function route53RecordGeoproximityRoutingPolicyToHclTerraform(struct?: Route53RecordGeoproximityRoutingPolicyOutputReference | Route53RecordGeoproximityRoutingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bias: {
      value: cdktf.numberToHclTerraform(struct!.bias),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_zone_group: {
      value: cdktf.stringToHclTerraform(struct!.localZoneGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    coordinates: {
      value: cdktf.listMapperHcl(route53RecordGeoproximityRoutingPolicyCoordinatesToHclTerraform, true)(struct!.coordinates),
      isBlock: true,
      type: "set",
      storageClassType: "Route53RecordGeoproximityRoutingPolicyCoordinatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Route53RecordGeoproximityRoutingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Route53RecordGeoproximityRoutingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._bias !== undefined) {
      hasAnyValues = true;
      internalValueResult.bias = this._bias;
    }
    if (this._localZoneGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.localZoneGroup = this._localZoneGroup;
    }
    if (this._coordinates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coordinates = this._coordinates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53RecordGeoproximityRoutingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegion = undefined;
      this._bias = undefined;
      this._localZoneGroup = undefined;
      this._coordinates.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegion = value.awsRegion;
      this._bias = value.bias;
      this._localZoneGroup = value.localZoneGroup;
      this._coordinates.internalValue = value.coordinates;
    }
  }

  // aws_region - computed: false, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // bias - computed: false, optional: true, required: false
  private _bias?: number; 
  public get bias() {
    return this.getNumberAttribute('bias');
  }
  public set bias(value: number) {
    this._bias = value;
  }
  public resetBias() {
    this._bias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biasInput() {
    return this._bias;
  }

  // local_zone_group - computed: false, optional: true, required: false
  private _localZoneGroup?: string; 
  public get localZoneGroup() {
    return this.getStringAttribute('local_zone_group');
  }
  public set localZoneGroup(value: string) {
    this._localZoneGroup = value;
  }
  public resetLocalZoneGroup() {
    this._localZoneGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localZoneGroupInput() {
    return this._localZoneGroup;
  }

  // coordinates - computed: false, optional: true, required: false
  private _coordinates = new Route53RecordGeoproximityRoutingPolicyCoordinatesList(this, "coordinates", true);
  public get coordinates() {
    return this._coordinates;
  }
  public putCoordinates(value: Route53RecordGeoproximityRoutingPolicyCoordinates[] | cdktf.IResolvable) {
    this._coordinates.internalValue = value;
  }
  public resetCoordinates() {
    this._coordinates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatesInput() {
    return this._coordinates.internalValue;
  }
}
export interface Route53RecordLatencyRoutingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#region Route53Record#region}
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


export function route53RecordLatencyRoutingPolicyToHclTerraform(struct?: Route53RecordLatencyRoutingPolicyOutputReference | Route53RecordLatencyRoutingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
export interface Route53RecordTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#create Route53Record#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#delete Route53Record#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#update Route53Record#update}
  */
  readonly update?: string;
}

export function route53RecordTimeoutsToTerraform(struct?: Route53RecordTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function route53RecordTimeoutsToHclTerraform(struct?: Route53RecordTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Route53RecordTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Route53RecordTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53RecordTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface Route53RecordWeightedRoutingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#weight Route53Record#weight}
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


export function route53RecordWeightedRoutingPolicyToHclTerraform(struct?: Route53RecordWeightedRoutingPolicyOutputReference | Route53RecordWeightedRoutingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record aws_route53_record}
*/
export class Route53Record extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_route53_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Route53Record resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Route53Record to import
  * @param importFromId The id of the existing Route53Record that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Route53Record to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_route53_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_record aws_route53_record} Resource
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
        providerVersion: '6.9.0',
        providerVersionConstraint: '~> 6.0'
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
    this._geoproximityRoutingPolicy.internalValue = config.geoproximityRoutingPolicy;
    this._latencyRoutingPolicy.internalValue = config.latencyRoutingPolicy;
    this._timeouts.internalValue = config.timeouts;
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

  // geoproximity_routing_policy - computed: false, optional: true, required: false
  private _geoproximityRoutingPolicy = new Route53RecordGeoproximityRoutingPolicyOutputReference(this, "geoproximity_routing_policy");
  public get geoproximityRoutingPolicy() {
    return this._geoproximityRoutingPolicy;
  }
  public putGeoproximityRoutingPolicy(value: Route53RecordGeoproximityRoutingPolicy) {
    this._geoproximityRoutingPolicy.internalValue = value;
  }
  public resetGeoproximityRoutingPolicy() {
    this._geoproximityRoutingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoproximityRoutingPolicyInput() {
    return this._geoproximityRoutingPolicy.internalValue;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Route53RecordTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Route53RecordTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      geoproximity_routing_policy: route53RecordGeoproximityRoutingPolicyToTerraform(this._geoproximityRoutingPolicy.internalValue),
      latency_routing_policy: route53RecordLatencyRoutingPolicyToTerraform(this._latencyRoutingPolicy.internalValue),
      timeouts: route53RecordTimeoutsToTerraform(this._timeouts.internalValue),
      weighted_routing_policy: route53RecordWeightedRoutingPolicyToTerraform(this._weightedRoutingPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_overwrite: {
        value: cdktf.booleanToHclTerraform(this._allowOverwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      health_check_id: {
        value: cdktf.stringToHclTerraform(this._healthCheckId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multivalue_answer_routing_policy: {
        value: cdktf.booleanToHclTerraform(this._multivalueAnswerRoutingPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      records: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._records),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      set_identifier: {
        value: cdktf.stringToHclTerraform(this._setIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: route53RecordAliasToHclTerraform(this._alias.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Route53RecordAliasList",
      },
      cidr_routing_policy: {
        value: route53RecordCidrRoutingPolicyToHclTerraform(this._cidrRoutingPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Route53RecordCidrRoutingPolicyList",
      },
      failover_routing_policy: {
        value: route53RecordFailoverRoutingPolicyToHclTerraform(this._failoverRoutingPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Route53RecordFailoverRoutingPolicyList",
      },
      geolocation_routing_policy: {
        value: route53RecordGeolocationRoutingPolicyToHclTerraform(this._geolocationRoutingPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Route53RecordGeolocationRoutingPolicyList",
      },
      geoproximity_routing_policy: {
        value: route53RecordGeoproximityRoutingPolicyToHclTerraform(this._geoproximityRoutingPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Route53RecordGeoproximityRoutingPolicyList",
      },
      latency_routing_policy: {
        value: route53RecordLatencyRoutingPolicyToHclTerraform(this._latencyRoutingPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Route53RecordLatencyRoutingPolicyList",
      },
      timeouts: {
        value: route53RecordTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Route53RecordTimeouts",
      },
      weighted_routing_policy: {
        value: route53RecordWeightedRoutingPolicyToHclTerraform(this._weightedRoutingPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Route53RecordWeightedRoutingPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
