/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/resiliencehub_resiliency_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResiliencehubResiliencyPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a high-level geographical location constraint for where resilience policy data can be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/resiliencehub_resiliency_policy#data_location_constraint ResiliencehubResiliencyPolicy#data_location_constraint}
  */
  readonly dataLocationConstraint?: string;
  /**
  * The description for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/resiliencehub_resiliency_policy#description ResiliencehubResiliencyPolicy#description}
  */
  readonly description?: string;
  /**
  * The name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/resiliencehub_resiliency_policy#name ResiliencehubResiliencyPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/resiliencehub_resiliency_policy#tags ResiliencehubResiliencyPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The tier for the resiliency policy, ranging from the highest severity (MissionCritical) to lowest (NonCritical).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/resiliencehub_resiliency_policy#tier ResiliencehubResiliencyPolicy#tier}
  */
  readonly tier: string;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/resiliencehub_resiliency_policy#policy ResiliencehubResiliencyPolicy#policy}
  */
  readonly policy?: ResiliencehubResiliencyPolicyPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/resiliencehub_resiliency_policy#timeouts ResiliencehubResiliencyPolicy#timeouts}
  */
  readonly timeouts?: ResiliencehubResiliencyPolicyTimeouts;
}
export interface ResiliencehubResiliencyPolicyPolicyAz {
  /**
  * Recovery Point Objective (RPO) as a Go duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/resiliencehub_resiliency_policy#rpo ResiliencehubResiliencyPolicy#rpo}
  */
  readonly rpo: string;
  /**
  * Recovery Time Objective (RTO) as a Go duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/resiliencehub_resiliency_policy#rto ResiliencehubResiliencyPolicy#rto}
  */
  readonly rto: string;
}

export function resiliencehubResiliencyPolicyPolicyAzToTerraform(struct?: ResiliencehubResiliencyPolicyPolicyAz | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rpo: cdktf.stringToTerraform(struct!.rpo),
    rto: cdktf.stringToTerraform(struct!.rto),
  }
}


export function resiliencehubResiliencyPolicyPolicyAzToHclTerraform(struct?: ResiliencehubResiliencyPolicyPolicyAz | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rpo: {
      value: cdktf.stringToHclTerraform(struct!.rpo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rto: {
      value: cdktf.stringToHclTerraform(struct!.rto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResiliencehubResiliencyPolicyPolicyAzOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResiliencehubResiliencyPolicyPolicyAz | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rpo !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpo = this._rpo;
    }
    if (this._rto !== undefined) {
      hasAnyValues = true;
      internalValueResult.rto = this._rto;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResiliencehubResiliencyPolicyPolicyAz | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rpo = undefined;
      this._rto = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rpo = value.rpo;
      this._rto = value.rto;
    }
  }

  // rpo - computed: false, optional: false, required: true
  private _rpo?: string; 
  public get rpo() {
    return this.getStringAttribute('rpo');
  }
  public set rpo(value: string) {
    this._rpo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoInput() {
    return this._rpo;
  }

  // rto - computed: false, optional: false, required: true
  private _rto?: string; 
  public get rto() {
    return this.getStringAttribute('rto');
  }
  public set rto(value: string) {
    this._rto = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rtoInput() {
    return this._rto;
  }
}
export interface ResiliencehubResiliencyPolicyPolicyHardware {
  /**
  * Recovery Point Objective (RPO) as a Go duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/resiliencehub_resiliency_policy#rpo ResiliencehubResiliencyPolicy#rpo}
  */
  readonly rpo: string;
  /**
  * Recovery Time Objective (RTO) as a Go duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/resiliencehub_resiliency_policy#rto ResiliencehubResiliencyPolicy#rto}
  */
  readonly rto: string;
}

export function resiliencehubResiliencyPolicyPolicyHardwareToTerraform(struct?: ResiliencehubResiliencyPolicyPolicyHardware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rpo: cdktf.stringToTerraform(struct!.rpo),
    rto: cdktf.stringToTerraform(struct!.rto),
  }
}


export function resiliencehubResiliencyPolicyPolicyHardwareToHclTerraform(struct?: ResiliencehubResiliencyPolicyPolicyHardware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rpo: {
      value: cdktf.stringToHclTerraform(struct!.rpo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rto: {
      value: cdktf.stringToHclTerraform(struct!.rto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResiliencehubResiliencyPolicyPolicyHardwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResiliencehubResiliencyPolicyPolicyHardware | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rpo !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpo = this._rpo;
    }
    if (this._rto !== undefined) {
      hasAnyValues = true;
      internalValueResult.rto = this._rto;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResiliencehubResiliencyPolicyPolicyHardware | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rpo = undefined;
      this._rto = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rpo = value.rpo;
      this._rto = value.rto;
    }
  }

  // rpo - computed: false, optional: false, required: true
  private _rpo?: string; 
  public get rpo() {
    return this.getStringAttribute('rpo');
  }
  public set rpo(value: string) {
    this._rpo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoInput() {
    return this._rpo;
  }

  // rto - computed: false, optional: false, required: true
  private _rto?: string; 
  public get rto() {
    return this.getStringAttribute('rto');
  }
  public set rto(value: string) {
    this._rto = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rtoInput() {
    return this._rto;
  }
}
export interface ResiliencehubResiliencyPolicyPolicyRegion {
  /**
  * Recovery Point Objective (RPO) as a Go duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/resiliencehub_resiliency_policy#rpo ResiliencehubResiliencyPolicy#rpo}
  */
  readonly rpo?: string;
  /**
  * Recovery Time Objective (RTO) as a Go duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/resiliencehub_resiliency_policy#rto ResiliencehubResiliencyPolicy#rto}
  */
  readonly rto?: string;
}

export function resiliencehubResiliencyPolicyPolicyRegionToTerraform(struct?: ResiliencehubResiliencyPolicyPolicyRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rpo: cdktf.stringToTerraform(struct!.rpo),
    rto: cdktf.stringToTerraform(struct!.rto),
  }
}


export function resiliencehubResiliencyPolicyPolicyRegionToHclTerraform(struct?: ResiliencehubResiliencyPolicyPolicyRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rpo: {
      value: cdktf.stringToHclTerraform(struct!.rpo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rto: {
      value: cdktf.stringToHclTerraform(struct!.rto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResiliencehubResiliencyPolicyPolicyRegionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResiliencehubResiliencyPolicyPolicyRegion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rpo !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpo = this._rpo;
    }
    if (this._rto !== undefined) {
      hasAnyValues = true;
      internalValueResult.rto = this._rto;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResiliencehubResiliencyPolicyPolicyRegion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rpo = undefined;
      this._rto = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rpo = value.rpo;
      this._rto = value.rto;
    }
  }

  // rpo - computed: false, optional: true, required: false
  private _rpo?: string; 
  public get rpo() {
    return this.getStringAttribute('rpo');
  }
  public set rpo(value: string) {
    this._rpo = value;
  }
  public resetRpo() {
    this._rpo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoInput() {
    return this._rpo;
  }

  // rto - computed: false, optional: true, required: false
  private _rto?: string; 
  public get rto() {
    return this.getStringAttribute('rto');
  }
  public set rto(value: string) {
    this._rto = value;
  }
  public resetRto() {
    this._rto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtoInput() {
    return this._rto;
  }
}
export interface ResiliencehubResiliencyPolicyPolicySoftware {
  /**
  * Recovery Point Objective (RPO) as a Go duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/resiliencehub_resiliency_policy#rpo ResiliencehubResiliencyPolicy#rpo}
  */
  readonly rpo: string;
  /**
  * Recovery Time Objective (RTO) as a Go duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/resiliencehub_resiliency_policy#rto ResiliencehubResiliencyPolicy#rto}
  */
  readonly rto: string;
}

export function resiliencehubResiliencyPolicyPolicySoftwareToTerraform(struct?: ResiliencehubResiliencyPolicyPolicySoftware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rpo: cdktf.stringToTerraform(struct!.rpo),
    rto: cdktf.stringToTerraform(struct!.rto),
  }
}


export function resiliencehubResiliencyPolicyPolicySoftwareToHclTerraform(struct?: ResiliencehubResiliencyPolicyPolicySoftware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rpo: {
      value: cdktf.stringToHclTerraform(struct!.rpo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rto: {
      value: cdktf.stringToHclTerraform(struct!.rto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResiliencehubResiliencyPolicyPolicySoftwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResiliencehubResiliencyPolicyPolicySoftware | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rpo !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpo = this._rpo;
    }
    if (this._rto !== undefined) {
      hasAnyValues = true;
      internalValueResult.rto = this._rto;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResiliencehubResiliencyPolicyPolicySoftware | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rpo = undefined;
      this._rto = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rpo = value.rpo;
      this._rto = value.rto;
    }
  }

  // rpo - computed: false, optional: false, required: true
  private _rpo?: string; 
  public get rpo() {
    return this.getStringAttribute('rpo');
  }
  public set rpo(value: string) {
    this._rpo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoInput() {
    return this._rpo;
  }

  // rto - computed: false, optional: false, required: true
  private _rto?: string; 
  public get rto() {
    return this.getStringAttribute('rto');
  }
  public set rto(value: string) {
    this._rto = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rtoInput() {
    return this._rto;
  }
}
export interface ResiliencehubResiliencyPolicyPolicy {
  /**
  * az block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/resiliencehub_resiliency_policy#az ResiliencehubResiliencyPolicy#az}
  */
  readonly az: ResiliencehubResiliencyPolicyPolicyAz;
  /**
  * hardware block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/resiliencehub_resiliency_policy#hardware ResiliencehubResiliencyPolicy#hardware}
  */
  readonly hardware: ResiliencehubResiliencyPolicyPolicyHardware;
  /**
  * region block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/resiliencehub_resiliency_policy#region ResiliencehubResiliencyPolicy#region}
  */
  readonly region?: ResiliencehubResiliencyPolicyPolicyRegion;
  /**
  * software block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/resiliencehub_resiliency_policy#software ResiliencehubResiliencyPolicy#software}
  */
  readonly softwareAttribute: ResiliencehubResiliencyPolicyPolicySoftware;
}

export function resiliencehubResiliencyPolicyPolicyToTerraform(struct?: ResiliencehubResiliencyPolicyPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    az: resiliencehubResiliencyPolicyPolicyAzToTerraform(struct!.az),
    hardware: resiliencehubResiliencyPolicyPolicyHardwareToTerraform(struct!.hardware),
    region: resiliencehubResiliencyPolicyPolicyRegionToTerraform(struct!.region),
    software: resiliencehubResiliencyPolicyPolicySoftwareToTerraform(struct!.softwareAttribute),
  }
}


export function resiliencehubResiliencyPolicyPolicyToHclTerraform(struct?: ResiliencehubResiliencyPolicyPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    az: {
      value: resiliencehubResiliencyPolicyPolicyAzToHclTerraform(struct!.az),
      isBlock: true,
      type: "struct",
      storageClassType: "ResiliencehubResiliencyPolicyPolicyAz",
    },
    hardware: {
      value: resiliencehubResiliencyPolicyPolicyHardwareToHclTerraform(struct!.hardware),
      isBlock: true,
      type: "struct",
      storageClassType: "ResiliencehubResiliencyPolicyPolicyHardware",
    },
    region: {
      value: resiliencehubResiliencyPolicyPolicyRegionToHclTerraform(struct!.region),
      isBlock: true,
      type: "struct",
      storageClassType: "ResiliencehubResiliencyPolicyPolicyRegion",
    },
    software: {
      value: resiliencehubResiliencyPolicyPolicySoftwareToHclTerraform(struct!.softwareAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "ResiliencehubResiliencyPolicyPolicySoftware",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResiliencehubResiliencyPolicyPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResiliencehubResiliencyPolicyPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._az?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.az = this._az?.internalValue;
    }
    if (this._hardware?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardware = this._hardware?.internalValue;
    }
    if (this._region?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region?.internalValue;
    }
    if (this._software?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareAttribute = this._software?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResiliencehubResiliencyPolicyPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._az.internalValue = undefined;
      this._hardware.internalValue = undefined;
      this._region.internalValue = undefined;
      this._software.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._az.internalValue = value.az;
      this._hardware.internalValue = value.hardware;
      this._region.internalValue = value.region;
      this._software.internalValue = value.softwareAttribute;
    }
  }

  // az - computed: false, optional: false, required: true
  private _az = new ResiliencehubResiliencyPolicyPolicyAzOutputReference(this, "az");
  public get az() {
    return this._az;
  }
  public putAz(value: ResiliencehubResiliencyPolicyPolicyAz) {
    this._az.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azInput() {
    return this._az.internalValue;
  }

  // hardware - computed: false, optional: false, required: true
  private _hardware = new ResiliencehubResiliencyPolicyPolicyHardwareOutputReference(this, "hardware");
  public get hardware() {
    return this._hardware;
  }
  public putHardware(value: ResiliencehubResiliencyPolicyPolicyHardware) {
    this._hardware.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareInput() {
    return this._hardware.internalValue;
  }

  // region - computed: false, optional: true, required: false
  private _region = new ResiliencehubResiliencyPolicyPolicyRegionOutputReference(this, "region");
  public get region() {
    return this._region;
  }
  public putRegion(value: ResiliencehubResiliencyPolicyPolicyRegion) {
    this._region.internalValue = value;
  }
  public resetRegion() {
    this._region.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region.internalValue;
  }

  // software - computed: false, optional: false, required: true
  private _software = new ResiliencehubResiliencyPolicyPolicySoftwareOutputReference(this, "software");
  public get softwareAttribute() {
    return this._software;
  }
  public putSoftwareAttribute(value: ResiliencehubResiliencyPolicyPolicySoftware) {
    this._software.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareAttributeInput() {
    return this._software.internalValue;
  }
}
export interface ResiliencehubResiliencyPolicyTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/resiliencehub_resiliency_policy#create ResiliencehubResiliencyPolicy#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/resiliencehub_resiliency_policy#delete ResiliencehubResiliencyPolicy#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/resiliencehub_resiliency_policy#update ResiliencehubResiliencyPolicy#update}
  */
  readonly update?: string;
}

export function resiliencehubResiliencyPolicyTimeoutsToTerraform(struct?: ResiliencehubResiliencyPolicyTimeouts | cdktf.IResolvable): any {
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


export function resiliencehubResiliencyPolicyTimeoutsToHclTerraform(struct?: ResiliencehubResiliencyPolicyTimeouts | cdktf.IResolvable): any {
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

export class ResiliencehubResiliencyPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResiliencehubResiliencyPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ResiliencehubResiliencyPolicyTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/resiliencehub_resiliency_policy aws_resiliencehub_resiliency_policy}
*/
export class ResiliencehubResiliencyPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_resiliencehub_resiliency_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResiliencehubResiliencyPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResiliencehubResiliencyPolicy to import
  * @param importFromId The id of the existing ResiliencehubResiliencyPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/resiliencehub_resiliency_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResiliencehubResiliencyPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_resiliencehub_resiliency_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/resiliencehub_resiliency_policy aws_resiliencehub_resiliency_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResiliencehubResiliencyPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ResiliencehubResiliencyPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_resiliencehub_resiliency_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.74.0',
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
    this._dataLocationConstraint = config.dataLocationConstraint;
    this._description = config.description;
    this._name = config.name;
    this._tags = config.tags;
    this._tier = config.tier;
    this._policy.internalValue = config.policy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // data_location_constraint - computed: true, optional: true, required: false
  private _dataLocationConstraint?: string; 
  public get dataLocationConstraint() {
    return this.getStringAttribute('data_location_constraint');
  }
  public set dataLocationConstraint(value: string) {
    this._dataLocationConstraint = value;
  }
  public resetDataLocationConstraint() {
    this._dataLocationConstraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLocationConstraintInput() {
    return this._dataLocationConstraint;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // estimated_cost_tier - computed: true, optional: false, required: false
  public get estimatedCostTier() {
    return this.getStringAttribute('estimated_cost_tier');
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // tier - computed: false, optional: false, required: true
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new ResiliencehubResiliencyPolicyPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: ResiliencehubResiliencyPolicyPolicy) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ResiliencehubResiliencyPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ResiliencehubResiliencyPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_location_constraint: cdktf.stringToTerraform(this._dataLocationConstraint),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tier: cdktf.stringToTerraform(this._tier),
      policy: resiliencehubResiliencyPolicyPolicyToTerraform(this._policy.internalValue),
      timeouts: resiliencehubResiliencyPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_location_constraint: {
        value: cdktf.stringToHclTerraform(this._dataLocationConstraint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tier: {
        value: cdktf.stringToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: resiliencehubResiliencyPolicyPolicyToHclTerraform(this._policy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResiliencehubResiliencyPolicyPolicy",
      },
      timeouts: {
        value: resiliencehubResiliencyPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResiliencehubResiliencyPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
