/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codedeploy_deployment_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodedeployDeploymentConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codedeploy_deployment_config#compute_platform CodedeployDeploymentConfig#compute_platform}
  */
  readonly computePlatform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codedeploy_deployment_config#deployment_config_name CodedeployDeploymentConfig#deployment_config_name}
  */
  readonly deploymentConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codedeploy_deployment_config#id CodedeployDeploymentConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * minimum_healthy_hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codedeploy_deployment_config#minimum_healthy_hosts CodedeployDeploymentConfig#minimum_healthy_hosts}
  */
  readonly minimumHealthyHosts?: CodedeployDeploymentConfigMinimumHealthyHosts;
  /**
  * traffic_routing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codedeploy_deployment_config#traffic_routing_config CodedeployDeploymentConfig#traffic_routing_config}
  */
  readonly trafficRoutingConfig?: CodedeployDeploymentConfigTrafficRoutingConfig;
  /**
  * zonal_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codedeploy_deployment_config#zonal_config CodedeployDeploymentConfig#zonal_config}
  */
  readonly zonalConfig?: CodedeployDeploymentConfigZonalConfig;
}
export interface CodedeployDeploymentConfigMinimumHealthyHosts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codedeploy_deployment_config#value CodedeployDeploymentConfig#value}
  */
  readonly value?: number;
}

export function codedeployDeploymentConfigMinimumHealthyHostsToTerraform(struct?: CodedeployDeploymentConfigMinimumHealthyHostsOutputReference | CodedeployDeploymentConfigMinimumHealthyHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function codedeployDeploymentConfigMinimumHealthyHostsToHclTerraform(struct?: CodedeployDeploymentConfigMinimumHealthyHostsOutputReference | CodedeployDeploymentConfigMinimumHealthyHosts): any {
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
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodedeployDeploymentConfigMinimumHealthyHostsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodedeployDeploymentConfigMinimumHealthyHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: CodedeployDeploymentConfigMinimumHealthyHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
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
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codedeploy_deployment_config#interval CodedeployDeploymentConfig#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codedeploy_deployment_config#percentage CodedeployDeploymentConfig#percentage}
  */
  readonly percentage?: number;
}

export function codedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryToTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference | CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function codedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryToHclTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference | CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._percentage = value.percentage;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codedeploy_deployment_config#interval CodedeployDeploymentConfig#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codedeploy_deployment_config#percentage CodedeployDeploymentConfig#percentage}
  */
  readonly percentage?: number;
}

export function codedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearToTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference | CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function codedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearToHclTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference | CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._percentage = value.percentage;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface CodedeployDeploymentConfigTrafficRoutingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}
  */
  readonly type?: string;
  /**
  * time_based_canary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codedeploy_deployment_config#time_based_canary CodedeployDeploymentConfig#time_based_canary}
  */
  readonly timeBasedCanary?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary;
  /**
  * time_based_linear block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codedeploy_deployment_config#time_based_linear CodedeployDeploymentConfig#time_based_linear}
  */
  readonly timeBasedLinear?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear;
}

export function codedeployDeploymentConfigTrafficRoutingConfigToTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfigOutputReference | CodedeployDeploymentConfigTrafficRoutingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    time_based_canary: codedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryToTerraform(struct!.timeBasedCanary),
    time_based_linear: codedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearToTerraform(struct!.timeBasedLinear),
  }
}


export function codedeployDeploymentConfigTrafficRoutingConfigToHclTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfigOutputReference | CodedeployDeploymentConfigTrafficRoutingConfig): any {
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
    time_based_canary: {
      value: codedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryToHclTerraform(struct!.timeBasedCanary),
      isBlock: true,
      type: "list",
      storageClassType: "CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryList",
    },
    time_based_linear: {
      value: codedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearToHclTerraform(struct!.timeBasedLinear),
      isBlock: true,
      type: "list",
      storageClassType: "CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodedeployDeploymentConfigTrafficRoutingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodedeployDeploymentConfigTrafficRoutingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._timeBasedCanary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeBasedCanary = this._timeBasedCanary?.internalValue;
    }
    if (this._timeBasedLinear?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeBasedLinear = this._timeBasedLinear?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentConfigTrafficRoutingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._timeBasedCanary.internalValue = undefined;
      this._timeBasedLinear.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._timeBasedCanary.internalValue = value.timeBasedCanary;
      this._timeBasedLinear.internalValue = value.timeBasedLinear;
    }
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

  // time_based_canary - computed: false, optional: true, required: false
  private _timeBasedCanary = new CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference(this, "time_based_canary");
  public get timeBasedCanary() {
    return this._timeBasedCanary;
  }
  public putTimeBasedCanary(value: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary) {
    this._timeBasedCanary.internalValue = value;
  }
  public resetTimeBasedCanary() {
    this._timeBasedCanary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBasedCanaryInput() {
    return this._timeBasedCanary.internalValue;
  }

  // time_based_linear - computed: false, optional: true, required: false
  private _timeBasedLinear = new CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference(this, "time_based_linear");
  public get timeBasedLinear() {
    return this._timeBasedLinear;
  }
  public putTimeBasedLinear(value: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear) {
    this._timeBasedLinear.internalValue = value;
  }
  public resetTimeBasedLinear() {
    this._timeBasedLinear.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBasedLinearInput() {
    return this._timeBasedLinear.internalValue;
  }
}
export interface CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codedeploy_deployment_config#value CodedeployDeploymentConfig#value}
  */
  readonly value?: number;
}

export function codedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneToTerraform(struct?: CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference | CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function codedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneToHclTerraform(struct?: CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference | CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone): any {
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
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
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
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface CodedeployDeploymentConfigZonalConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codedeploy_deployment_config#first_zone_monitor_duration_in_seconds CodedeployDeploymentConfig#first_zone_monitor_duration_in_seconds}
  */
  readonly firstZoneMonitorDurationInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codedeploy_deployment_config#monitor_duration_in_seconds CodedeployDeploymentConfig#monitor_duration_in_seconds}
  */
  readonly monitorDurationInSeconds?: number;
  /**
  * minimum_healthy_hosts_per_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codedeploy_deployment_config#minimum_healthy_hosts_per_zone CodedeployDeploymentConfig#minimum_healthy_hosts_per_zone}
  */
  readonly minimumHealthyHostsPerZone?: CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone;
}

export function codedeployDeploymentConfigZonalConfigToTerraform(struct?: CodedeployDeploymentConfigZonalConfigOutputReference | CodedeployDeploymentConfigZonalConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    first_zone_monitor_duration_in_seconds: cdktf.numberToTerraform(struct!.firstZoneMonitorDurationInSeconds),
    monitor_duration_in_seconds: cdktf.numberToTerraform(struct!.monitorDurationInSeconds),
    minimum_healthy_hosts_per_zone: codedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneToTerraform(struct!.minimumHealthyHostsPerZone),
  }
}


export function codedeployDeploymentConfigZonalConfigToHclTerraform(struct?: CodedeployDeploymentConfigZonalConfigOutputReference | CodedeployDeploymentConfigZonalConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    first_zone_monitor_duration_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.firstZoneMonitorDurationInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_duration_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.monitorDurationInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_healthy_hosts_per_zone: {
      value: codedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneToHclTerraform(struct!.minimumHealthyHostsPerZone),
      isBlock: true,
      type: "list",
      storageClassType: "CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodedeployDeploymentConfigZonalConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodedeployDeploymentConfigZonalConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firstZoneMonitorDurationInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstZoneMonitorDurationInSeconds = this._firstZoneMonitorDurationInSeconds;
    }
    if (this._monitorDurationInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorDurationInSeconds = this._monitorDurationInSeconds;
    }
    if (this._minimumHealthyHostsPerZone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumHealthyHostsPerZone = this._minimumHealthyHostsPerZone?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentConfigZonalConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._firstZoneMonitorDurationInSeconds = undefined;
      this._monitorDurationInSeconds = undefined;
      this._minimumHealthyHostsPerZone.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._firstZoneMonitorDurationInSeconds = value.firstZoneMonitorDurationInSeconds;
      this._monitorDurationInSeconds = value.monitorDurationInSeconds;
      this._minimumHealthyHostsPerZone.internalValue = value.minimumHealthyHostsPerZone;
    }
  }

  // first_zone_monitor_duration_in_seconds - computed: false, optional: true, required: false
  private _firstZoneMonitorDurationInSeconds?: number; 
  public get firstZoneMonitorDurationInSeconds() {
    return this.getNumberAttribute('first_zone_monitor_duration_in_seconds');
  }
  public set firstZoneMonitorDurationInSeconds(value: number) {
    this._firstZoneMonitorDurationInSeconds = value;
  }
  public resetFirstZoneMonitorDurationInSeconds() {
    this._firstZoneMonitorDurationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstZoneMonitorDurationInSecondsInput() {
    return this._firstZoneMonitorDurationInSeconds;
  }

  // monitor_duration_in_seconds - computed: false, optional: true, required: false
  private _monitorDurationInSeconds?: number; 
  public get monitorDurationInSeconds() {
    return this.getNumberAttribute('monitor_duration_in_seconds');
  }
  public set monitorDurationInSeconds(value: number) {
    this._monitorDurationInSeconds = value;
  }
  public resetMonitorDurationInSeconds() {
    this._monitorDurationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorDurationInSecondsInput() {
    return this._monitorDurationInSeconds;
  }

  // minimum_healthy_hosts_per_zone - computed: false, optional: true, required: false
  private _minimumHealthyHostsPerZone = new CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference(this, "minimum_healthy_hosts_per_zone");
  public get minimumHealthyHostsPerZone() {
    return this._minimumHealthyHostsPerZone;
  }
  public putMinimumHealthyHostsPerZone(value: CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone) {
    this._minimumHealthyHostsPerZone.internalValue = value;
  }
  public resetMinimumHealthyHostsPerZone() {
    this._minimumHealthyHostsPerZone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumHealthyHostsPerZoneInput() {
    return this._minimumHealthyHostsPerZone.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codedeploy_deployment_config aws_codedeploy_deployment_config}
*/
export class CodedeployDeploymentConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_codedeploy_deployment_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CodedeployDeploymentConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CodedeployDeploymentConfig to import
  * @param importFromId The id of the existing CodedeployDeploymentConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codedeploy_deployment_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CodedeployDeploymentConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_codedeploy_deployment_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/codedeploy_deployment_config aws_codedeploy_deployment_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodedeployDeploymentConfigConfig
  */
  public constructor(scope: Construct, id: string, config: CodedeployDeploymentConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codedeploy_deployment_config',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.91.0',
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
    this._computePlatform = config.computePlatform;
    this._deploymentConfigName = config.deploymentConfigName;
    this._id = config.id;
    this._minimumHealthyHosts.internalValue = config.minimumHealthyHosts;
    this._trafficRoutingConfig.internalValue = config.trafficRoutingConfig;
    this._zonalConfig.internalValue = config.zonalConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compute_platform - computed: false, optional: true, required: false
  private _computePlatform?: string; 
  public get computePlatform() {
    return this.getStringAttribute('compute_platform');
  }
  public set computePlatform(value: string) {
    this._computePlatform = value;
  }
  public resetComputePlatform() {
    this._computePlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computePlatformInput() {
    return this._computePlatform;
  }

  // deployment_config_id - computed: true, optional: false, required: false
  public get deploymentConfigId() {
    return this.getStringAttribute('deployment_config_id');
  }

  // deployment_config_name - computed: false, optional: false, required: true
  private _deploymentConfigName?: string; 
  public get deploymentConfigName() {
    return this.getStringAttribute('deployment_config_name');
  }
  public set deploymentConfigName(value: string) {
    this._deploymentConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentConfigNameInput() {
    return this._deploymentConfigName;
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

  // minimum_healthy_hosts - computed: false, optional: true, required: false
  private _minimumHealthyHosts = new CodedeployDeploymentConfigMinimumHealthyHostsOutputReference(this, "minimum_healthy_hosts");
  public get minimumHealthyHosts() {
    return this._minimumHealthyHosts;
  }
  public putMinimumHealthyHosts(value: CodedeployDeploymentConfigMinimumHealthyHosts) {
    this._minimumHealthyHosts.internalValue = value;
  }
  public resetMinimumHealthyHosts() {
    this._minimumHealthyHosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumHealthyHostsInput() {
    return this._minimumHealthyHosts.internalValue;
  }

  // traffic_routing_config - computed: false, optional: true, required: false
  private _trafficRoutingConfig = new CodedeployDeploymentConfigTrafficRoutingConfigOutputReference(this, "traffic_routing_config");
  public get trafficRoutingConfig() {
    return this._trafficRoutingConfig;
  }
  public putTrafficRoutingConfig(value: CodedeployDeploymentConfigTrafficRoutingConfig) {
    this._trafficRoutingConfig.internalValue = value;
  }
  public resetTrafficRoutingConfig() {
    this._trafficRoutingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficRoutingConfigInput() {
    return this._trafficRoutingConfig.internalValue;
  }

  // zonal_config - computed: false, optional: true, required: false
  private _zonalConfig = new CodedeployDeploymentConfigZonalConfigOutputReference(this, "zonal_config");
  public get zonalConfig() {
    return this._zonalConfig;
  }
  public putZonalConfig(value: CodedeployDeploymentConfigZonalConfig) {
    this._zonalConfig.internalValue = value;
  }
  public resetZonalConfig() {
    this._zonalConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonalConfigInput() {
    return this._zonalConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_platform: cdktf.stringToTerraform(this._computePlatform),
      deployment_config_name: cdktf.stringToTerraform(this._deploymentConfigName),
      id: cdktf.stringToTerraform(this._id),
      minimum_healthy_hosts: codedeployDeploymentConfigMinimumHealthyHostsToTerraform(this._minimumHealthyHosts.internalValue),
      traffic_routing_config: codedeployDeploymentConfigTrafficRoutingConfigToTerraform(this._trafficRoutingConfig.internalValue),
      zonal_config: codedeployDeploymentConfigZonalConfigToTerraform(this._zonalConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compute_platform: {
        value: cdktf.stringToHclTerraform(this._computePlatform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_config_name: {
        value: cdktf.stringToHclTerraform(this._deploymentConfigName),
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
      minimum_healthy_hosts: {
        value: codedeployDeploymentConfigMinimumHealthyHostsToHclTerraform(this._minimumHealthyHosts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodedeployDeploymentConfigMinimumHealthyHostsList",
      },
      traffic_routing_config: {
        value: codedeployDeploymentConfigTrafficRoutingConfigToHclTerraform(this._trafficRoutingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodedeployDeploymentConfigTrafficRoutingConfigList",
      },
      zonal_config: {
        value: codedeployDeploymentConfigZonalConfigToHclTerraform(this._zonalConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodedeployDeploymentConfigZonalConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
