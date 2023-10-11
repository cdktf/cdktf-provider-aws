// https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudfront_continuous_deployment_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontContinuousDeploymentPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudfront_continuous_deployment_policy#enabled CloudfrontContinuousDeploymentPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * staging_distribution_dns_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudfront_continuous_deployment_policy#staging_distribution_dns_names CloudfrontContinuousDeploymentPolicy#staging_distribution_dns_names}
  */
  readonly stagingDistributionDnsNames?: CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames[] | cdktf.IResolvable;
  /**
  * traffic_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudfront_continuous_deployment_policy#traffic_config CloudfrontContinuousDeploymentPolicy#traffic_config}
  */
  readonly trafficConfig?: CloudfrontContinuousDeploymentPolicyTrafficConfig[] | cdktf.IResolvable;
}
export interface CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudfront_continuous_deployment_policy#items CloudfrontContinuousDeploymentPolicy#items}
  */
  readonly items?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudfront_continuous_deployment_policy#quantity CloudfrontContinuousDeploymentPolicy#quantity}
  */
  readonly quantity: number;
}

export function cloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesToTerraform(struct?: CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
    quantity: cdktf.numberToTerraform(struct!.quantity),
  }
}

export class CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    if (this._quantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantity = this._quantity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items = undefined;
      this._quantity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items = value.items;
      this._quantity = value.quantity;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return cdktf.Fn.tolist(this.getListAttribute('items'));
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }

  // quantity - computed: false, optional: false, required: true
  private _quantity?: number; 
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityInput() {
    return this._quantity;
  }
}

export class CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList extends cdktf.ComplexList {
  public internalValue? : CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference {
    return new CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudfront_continuous_deployment_policy#header CloudfrontContinuousDeploymentPolicy#header}
  */
  readonly header: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudfront_continuous_deployment_policy#value CloudfrontContinuousDeploymentPolicy#value}
  */
  readonly value: string;
}

export function cloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigToTerraform(struct?: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.stringToTerraform(struct!.header),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
      this._value = value.value;
    }
  }

  // header - computed: false, optional: false, required: true
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList extends cdktf.ComplexList {
  public internalValue? : CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference {
    return new CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudfront_continuous_deployment_policy#idle_ttl CloudfrontContinuousDeploymentPolicy#idle_ttl}
  */
  readonly idleTtl: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudfront_continuous_deployment_policy#maximum_ttl CloudfrontContinuousDeploymentPolicy#maximum_ttl}
  */
  readonly maximumTtl: number;
}

export function cloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigToTerraform(struct?: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_ttl: cdktf.numberToTerraform(struct!.idleTtl),
    maximum_ttl: cdktf.numberToTerraform(struct!.maximumTtl),
  }
}

export class CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTtl = this._idleTtl;
    }
    if (this._maximumTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumTtl = this._maximumTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idleTtl = undefined;
      this._maximumTtl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idleTtl = value.idleTtl;
      this._maximumTtl = value.maximumTtl;
    }
  }

  // idle_ttl - computed: false, optional: false, required: true
  private _idleTtl?: number; 
  public get idleTtl() {
    return this.getNumberAttribute('idle_ttl');
  }
  public set idleTtl(value: number) {
    this._idleTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTtlInput() {
    return this._idleTtl;
  }

  // maximum_ttl - computed: false, optional: false, required: true
  private _maximumTtl?: number; 
  public get maximumTtl() {
    return this.getNumberAttribute('maximum_ttl');
  }
  public set maximumTtl(value: number) {
    this._maximumTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumTtlInput() {
    return this._maximumTtl;
  }
}

export class CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList extends cdktf.ComplexList {
  public internalValue? : CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference {
    return new CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudfront_continuous_deployment_policy#weight CloudfrontContinuousDeploymentPolicy#weight}
  */
  readonly weight: number;
  /**
  * session_stickiness_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudfront_continuous_deployment_policy#session_stickiness_config CloudfrontContinuousDeploymentPolicy#session_stickiness_config}
  */
  readonly sessionStickinessConfig?: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig[] | cdktf.IResolvable;
}

export function cloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigToTerraform(struct?: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    session_stickiness_config: cdktf.listMapper(cloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigToTerraform, true)(struct!.sessionStickinessConfig),
  }
}

export class CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._sessionStickinessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionStickinessConfig = this._sessionStickinessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weight = undefined;
      this._sessionStickinessConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weight = value.weight;
      this._sessionStickinessConfig.internalValue = value.sessionStickinessConfig;
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

  // session_stickiness_config - computed: false, optional: true, required: false
  private _sessionStickinessConfig = new CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList(this, "session_stickiness_config", false);
  public get sessionStickinessConfig() {
    return this._sessionStickinessConfig;
  }
  public putSessionStickinessConfig(value: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig[] | cdktf.IResolvable) {
    this._sessionStickinessConfig.internalValue = value;
  }
  public resetSessionStickinessConfig() {
    this._sessionStickinessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionStickinessConfigInput() {
    return this._sessionStickinessConfig.internalValue;
  }
}

export class CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList extends cdktf.ComplexList {
  public internalValue? : CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference {
    return new CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontContinuousDeploymentPolicyTrafficConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudfront_continuous_deployment_policy#type CloudfrontContinuousDeploymentPolicy#type}
  */
  readonly type: string;
  /**
  * single_header_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudfront_continuous_deployment_policy#single_header_config CloudfrontContinuousDeploymentPolicy#single_header_config}
  */
  readonly singleHeaderConfig?: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig[] | cdktf.IResolvable;
  /**
  * single_weight_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudfront_continuous_deployment_policy#single_weight_config CloudfrontContinuousDeploymentPolicy#single_weight_config}
  */
  readonly singleWeightConfig?: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig[] | cdktf.IResolvable;
}

export function cloudfrontContinuousDeploymentPolicyTrafficConfigToTerraform(struct?: CloudfrontContinuousDeploymentPolicyTrafficConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    single_header_config: cdktf.listMapper(cloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigToTerraform, true)(struct!.singleHeaderConfig),
    single_weight_config: cdktf.listMapper(cloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigToTerraform, true)(struct!.singleWeightConfig),
  }
}

export class CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontContinuousDeploymentPolicyTrafficConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._singleHeaderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleHeaderConfig = this._singleHeaderConfig?.internalValue;
    }
    if (this._singleWeightConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleWeightConfig = this._singleWeightConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontContinuousDeploymentPolicyTrafficConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._singleHeaderConfig.internalValue = undefined;
      this._singleWeightConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._singleHeaderConfig.internalValue = value.singleHeaderConfig;
      this._singleWeightConfig.internalValue = value.singleWeightConfig;
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

  // single_header_config - computed: false, optional: true, required: false
  private _singleHeaderConfig = new CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList(this, "single_header_config", false);
  public get singleHeaderConfig() {
    return this._singleHeaderConfig;
  }
  public putSingleHeaderConfig(value: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig[] | cdktf.IResolvable) {
    this._singleHeaderConfig.internalValue = value;
  }
  public resetSingleHeaderConfig() {
    this._singleHeaderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderConfigInput() {
    return this._singleHeaderConfig.internalValue;
  }

  // single_weight_config - computed: false, optional: true, required: false
  private _singleWeightConfig = new CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList(this, "single_weight_config", false);
  public get singleWeightConfig() {
    return this._singleWeightConfig;
  }
  public putSingleWeightConfig(value: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig[] | cdktf.IResolvable) {
    this._singleWeightConfig.internalValue = value;
  }
  public resetSingleWeightConfig() {
    this._singleWeightConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleWeightConfigInput() {
    return this._singleWeightConfig.internalValue;
  }
}

export class CloudfrontContinuousDeploymentPolicyTrafficConfigList extends cdktf.ComplexList {
  public internalValue? : CloudfrontContinuousDeploymentPolicyTrafficConfig[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference {
    return new CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudfront_continuous_deployment_policy aws_cloudfront_continuous_deployment_policy}
*/
export class CloudfrontContinuousDeploymentPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudfront_continuous_deployment_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudfront_continuous_deployment_policy aws_cloudfront_continuous_deployment_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontContinuousDeploymentPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontContinuousDeploymentPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_continuous_deployment_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.20.1',
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
    this._enabled = config.enabled;
    this._stagingDistributionDnsNames.internalValue = config.stagingDistributionDnsNames;
    this._trafficConfig.internalValue = config.trafficConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // staging_distribution_dns_names - computed: false, optional: true, required: false
  private _stagingDistributionDnsNames = new CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList(this, "staging_distribution_dns_names", false);
  public get stagingDistributionDnsNames() {
    return this._stagingDistributionDnsNames;
  }
  public putStagingDistributionDnsNames(value: CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames[] | cdktf.IResolvable) {
    this._stagingDistributionDnsNames.internalValue = value;
  }
  public resetStagingDistributionDnsNames() {
    this._stagingDistributionDnsNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingDistributionDnsNamesInput() {
    return this._stagingDistributionDnsNames.internalValue;
  }

  // traffic_config - computed: false, optional: true, required: false
  private _trafficConfig = new CloudfrontContinuousDeploymentPolicyTrafficConfigList(this, "traffic_config", false);
  public get trafficConfig() {
    return this._trafficConfig;
  }
  public putTrafficConfig(value: CloudfrontContinuousDeploymentPolicyTrafficConfig[] | cdktf.IResolvable) {
    this._trafficConfig.internalValue = value;
  }
  public resetTrafficConfig() {
    this._trafficConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficConfigInput() {
    return this._trafficConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      staging_distribution_dns_names: cdktf.listMapper(cloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesToTerraform, true)(this._stagingDistributionDnsNames.internalValue),
      traffic_config: cdktf.listMapper(cloudfrontContinuousDeploymentPolicyTrafficConfigToTerraform, true)(this._trafficConfig.internalValue),
    };
  }
}
