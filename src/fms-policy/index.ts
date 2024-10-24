/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FmsPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#delete_all_policy_resources FmsPolicy#delete_all_policy_resources}
  */
  readonly deleteAllPolicyResources?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#delete_unused_fm_managed_resources FmsPolicy#delete_unused_fm_managed_resources}
  */
  readonly deleteUnusedFmManagedResources?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#description FmsPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#exclude_resource_tags FmsPolicy#exclude_resource_tags}
  */
  readonly excludeResourceTags: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#id FmsPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#name FmsPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#remediation_enabled FmsPolicy#remediation_enabled}
  */
  readonly remediationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#resource_set_ids FmsPolicy#resource_set_ids}
  */
  readonly resourceSetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#resource_tags FmsPolicy#resource_tags}
  */
  readonly resourceTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#resource_type FmsPolicy#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#resource_type_list FmsPolicy#resource_type_list}
  */
  readonly resourceTypeList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#tags FmsPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#tags_all FmsPolicy#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * exclude_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#exclude_map FmsPolicy#exclude_map}
  */
  readonly excludeMap?: FmsPolicyExcludeMap;
  /**
  * include_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#include_map FmsPolicy#include_map}
  */
  readonly includeMap?: FmsPolicyIncludeMap;
  /**
  * security_service_policy_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#security_service_policy_data FmsPolicy#security_service_policy_data}
  */
  readonly securityServicePolicyData: FmsPolicySecurityServicePolicyData;
}
export interface FmsPolicyExcludeMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#account FmsPolicy#account}
  */
  readonly account?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#orgunit FmsPolicy#orgunit}
  */
  readonly orgunit?: string[];
}

export function fmsPolicyExcludeMapToTerraform(struct?: FmsPolicyExcludeMapOutputReference | FmsPolicyExcludeMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.account),
    orgunit: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.orgunit),
  }
}


export function fmsPolicyExcludeMapToHclTerraform(struct?: FmsPolicyExcludeMapOutputReference | FmsPolicyExcludeMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.account),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    orgunit: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.orgunit),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FmsPolicyExcludeMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FmsPolicyExcludeMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._orgunit !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgunit = this._orgunit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FmsPolicyExcludeMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._account = undefined;
      this._orgunit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._account = value.account;
      this._orgunit = value.orgunit;
    }
  }

  // account - computed: false, optional: true, required: false
  private _account?: string[]; 
  public get account() {
    return cdktf.Fn.tolist(this.getListAttribute('account'));
  }
  public set account(value: string[]) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // orgunit - computed: false, optional: true, required: false
  private _orgunit?: string[]; 
  public get orgunit() {
    return cdktf.Fn.tolist(this.getListAttribute('orgunit'));
  }
  public set orgunit(value: string[]) {
    this._orgunit = value;
  }
  public resetOrgunit() {
    this._orgunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgunitInput() {
    return this._orgunit;
  }
}
export interface FmsPolicyIncludeMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#account FmsPolicy#account}
  */
  readonly account?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#orgunit FmsPolicy#orgunit}
  */
  readonly orgunit?: string[];
}

export function fmsPolicyIncludeMapToTerraform(struct?: FmsPolicyIncludeMapOutputReference | FmsPolicyIncludeMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.account),
    orgunit: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.orgunit),
  }
}


export function fmsPolicyIncludeMapToHclTerraform(struct?: FmsPolicyIncludeMapOutputReference | FmsPolicyIncludeMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.account),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    orgunit: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.orgunit),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FmsPolicyIncludeMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FmsPolicyIncludeMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._orgunit !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgunit = this._orgunit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FmsPolicyIncludeMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._account = undefined;
      this._orgunit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._account = value.account;
      this._orgunit = value.orgunit;
    }
  }

  // account - computed: false, optional: true, required: false
  private _account?: string[]; 
  public get account() {
    return cdktf.Fn.tolist(this.getListAttribute('account'));
  }
  public set account(value: string[]) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // orgunit - computed: false, optional: true, required: false
  private _orgunit?: string[]; 
  public get orgunit() {
    return cdktf.Fn.tolist(this.getListAttribute('orgunit'));
  }
  public set orgunit(value: string[]) {
    this._orgunit = value;
  }
  public resetOrgunit() {
    this._orgunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgunitInput() {
    return this._orgunit;
  }
}
export interface FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#firewall_deployment_model FmsPolicy#firewall_deployment_model}
  */
  readonly firewallDeploymentModel?: string;
}

export function fmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyToTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    firewall_deployment_model: cdktf.stringToTerraform(struct!.firewallDeploymentModel),
  }
}


export function fmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyToHclTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    firewall_deployment_model: {
      value: cdktf.stringToHclTerraform(struct!.firewallDeploymentModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firewallDeploymentModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallDeploymentModel = this._firewallDeploymentModel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._firewallDeploymentModel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._firewallDeploymentModel = value.firewallDeploymentModel;
    }
  }

  // firewall_deployment_model - computed: false, optional: true, required: false
  private _firewallDeploymentModel?: string; 
  public get firewallDeploymentModel() {
    return this.getStringAttribute('firewall_deployment_model');
  }
  public set firewallDeploymentModel(value: string) {
    this._firewallDeploymentModel = value;
  }
  public resetFirewallDeploymentModel() {
    this._firewallDeploymentModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallDeploymentModelInput() {
    return this._firewallDeploymentModel;
  }
}
export interface FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#firewall_deployment_model FmsPolicy#firewall_deployment_model}
  */
  readonly firewallDeploymentModel?: string;
}

export function fmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyToTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference | FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    firewall_deployment_model: cdktf.stringToTerraform(struct!.firewallDeploymentModel),
  }
}


export function fmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyToHclTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference | FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    firewall_deployment_model: {
      value: cdktf.stringToHclTerraform(struct!.firewallDeploymentModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firewallDeploymentModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallDeploymentModel = this._firewallDeploymentModel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._firewallDeploymentModel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._firewallDeploymentModel = value.firewallDeploymentModel;
    }
  }

  // firewall_deployment_model - computed: false, optional: true, required: false
  private _firewallDeploymentModel?: string; 
  public get firewallDeploymentModel() {
    return this.getStringAttribute('firewall_deployment_model');
  }
  public set firewallDeploymentModel(value: string) {
    this._firewallDeploymentModel = value;
  }
  public resetFirewallDeploymentModel() {
    this._firewallDeploymentModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallDeploymentModelInput() {
    return this._firewallDeploymentModel;
  }
}
export interface FmsPolicySecurityServicePolicyDataPolicyOption {
  /**
  * network_firewall_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#network_firewall_policy FmsPolicy#network_firewall_policy}
  */
  readonly networkFirewallPolicy?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy;
  /**
  * third_party_firewall_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#third_party_firewall_policy FmsPolicy#third_party_firewall_policy}
  */
  readonly thirdPartyFirewallPolicy?: FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy;
}

export function fmsPolicySecurityServicePolicyDataPolicyOptionToTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference | FmsPolicySecurityServicePolicyDataPolicyOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_firewall_policy: fmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyToTerraform(struct!.networkFirewallPolicy),
    third_party_firewall_policy: fmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyToTerraform(struct!.thirdPartyFirewallPolicy),
  }
}


export function fmsPolicySecurityServicePolicyDataPolicyOptionToHclTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference | FmsPolicySecurityServicePolicyDataPolicyOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_firewall_policy: {
      value: fmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyToHclTerraform(struct!.networkFirewallPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyList",
    },
    third_party_firewall_policy: {
      value: fmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyToHclTerraform(struct!.thirdPartyFirewallPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FmsPolicySecurityServicePolicyDataPolicyOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkFirewallPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFirewallPolicy = this._networkFirewallPolicy?.internalValue;
    }
    if (this._thirdPartyFirewallPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thirdPartyFirewallPolicy = this._thirdPartyFirewallPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FmsPolicySecurityServicePolicyDataPolicyOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkFirewallPolicy.internalValue = undefined;
      this._thirdPartyFirewallPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkFirewallPolicy.internalValue = value.networkFirewallPolicy;
      this._thirdPartyFirewallPolicy.internalValue = value.thirdPartyFirewallPolicy;
    }
  }

  // network_firewall_policy - computed: false, optional: true, required: false
  private _networkFirewallPolicy = new FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference(this, "network_firewall_policy");
  public get networkFirewallPolicy() {
    return this._networkFirewallPolicy;
  }
  public putNetworkFirewallPolicy(value: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy) {
    this._networkFirewallPolicy.internalValue = value;
  }
  public resetNetworkFirewallPolicy() {
    this._networkFirewallPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFirewallPolicyInput() {
    return this._networkFirewallPolicy.internalValue;
  }

  // third_party_firewall_policy - computed: false, optional: true, required: false
  private _thirdPartyFirewallPolicy = new FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference(this, "third_party_firewall_policy");
  public get thirdPartyFirewallPolicy() {
    return this._thirdPartyFirewallPolicy;
  }
  public putThirdPartyFirewallPolicy(value: FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy) {
    this._thirdPartyFirewallPolicy.internalValue = value;
  }
  public resetThirdPartyFirewallPolicy() {
    this._thirdPartyFirewallPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyFirewallPolicyInput() {
    return this._thirdPartyFirewallPolicy.internalValue;
  }
}
export interface FmsPolicySecurityServicePolicyData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#managed_service_data FmsPolicy#managed_service_data}
  */
  readonly managedServiceData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#type FmsPolicy#type}
  */
  readonly type: string;
  /**
  * policy_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#policy_option FmsPolicy#policy_option}
  */
  readonly policyOption?: FmsPolicySecurityServicePolicyDataPolicyOption;
}

export function fmsPolicySecurityServicePolicyDataToTerraform(struct?: FmsPolicySecurityServicePolicyDataOutputReference | FmsPolicySecurityServicePolicyData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed_service_data: cdktf.stringToTerraform(struct!.managedServiceData),
    type: cdktf.stringToTerraform(struct!.type),
    policy_option: fmsPolicySecurityServicePolicyDataPolicyOptionToTerraform(struct!.policyOption),
  }
}


export function fmsPolicySecurityServicePolicyDataToHclTerraform(struct?: FmsPolicySecurityServicePolicyDataOutputReference | FmsPolicySecurityServicePolicyData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed_service_data: {
      value: cdktf.stringToHclTerraform(struct!.managedServiceData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_option: {
      value: fmsPolicySecurityServicePolicyDataPolicyOptionToHclTerraform(struct!.policyOption),
      isBlock: true,
      type: "list",
      storageClassType: "FmsPolicySecurityServicePolicyDataPolicyOptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FmsPolicySecurityServicePolicyDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FmsPolicySecurityServicePolicyData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedServiceData !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedServiceData = this._managedServiceData;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._policyOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyOption = this._policyOption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FmsPolicySecurityServicePolicyData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managedServiceData = undefined;
      this._type = undefined;
      this._policyOption.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managedServiceData = value.managedServiceData;
      this._type = value.type;
      this._policyOption.internalValue = value.policyOption;
    }
  }

  // managed_service_data - computed: false, optional: true, required: false
  private _managedServiceData?: string; 
  public get managedServiceData() {
    return this.getStringAttribute('managed_service_data');
  }
  public set managedServiceData(value: string) {
    this._managedServiceData = value;
  }
  public resetManagedServiceData() {
    this._managedServiceData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedServiceDataInput() {
    return this._managedServiceData;
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

  // policy_option - computed: false, optional: true, required: false
  private _policyOption = new FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference(this, "policy_option");
  public get policyOption() {
    return this._policyOption;
  }
  public putPolicyOption(value: FmsPolicySecurityServicePolicyDataPolicyOption) {
    this._policyOption.internalValue = value;
  }
  public resetPolicyOption() {
    this._policyOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyOptionInput() {
    return this._policyOption.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy aws_fms_policy}
*/
export class FmsPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_fms_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FmsPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FmsPolicy to import
  * @param importFromId The id of the existing FmsPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FmsPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_fms_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/fms_policy aws_fms_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FmsPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: FmsPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_fms_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.72.1',
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
    this._deleteAllPolicyResources = config.deleteAllPolicyResources;
    this._deleteUnusedFmManagedResources = config.deleteUnusedFmManagedResources;
    this._description = config.description;
    this._excludeResourceTags = config.excludeResourceTags;
    this._id = config.id;
    this._name = config.name;
    this._remediationEnabled = config.remediationEnabled;
    this._resourceSetIds = config.resourceSetIds;
    this._resourceTags = config.resourceTags;
    this._resourceType = config.resourceType;
    this._resourceTypeList = config.resourceTypeList;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._excludeMap.internalValue = config.excludeMap;
    this._includeMap.internalValue = config.includeMap;
    this._securityServicePolicyData.internalValue = config.securityServicePolicyData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // delete_all_policy_resources - computed: false, optional: true, required: false
  private _deleteAllPolicyResources?: boolean | cdktf.IResolvable; 
  public get deleteAllPolicyResources() {
    return this.getBooleanAttribute('delete_all_policy_resources');
  }
  public set deleteAllPolicyResources(value: boolean | cdktf.IResolvable) {
    this._deleteAllPolicyResources = value;
  }
  public resetDeleteAllPolicyResources() {
    this._deleteAllPolicyResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAllPolicyResourcesInput() {
    return this._deleteAllPolicyResources;
  }

  // delete_unused_fm_managed_resources - computed: false, optional: true, required: false
  private _deleteUnusedFmManagedResources?: boolean | cdktf.IResolvable; 
  public get deleteUnusedFmManagedResources() {
    return this.getBooleanAttribute('delete_unused_fm_managed_resources');
  }
  public set deleteUnusedFmManagedResources(value: boolean | cdktf.IResolvable) {
    this._deleteUnusedFmManagedResources = value;
  }
  public resetDeleteUnusedFmManagedResources() {
    this._deleteUnusedFmManagedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteUnusedFmManagedResourcesInput() {
    return this._deleteUnusedFmManagedResources;
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

  // exclude_resource_tags - computed: false, optional: false, required: true
  private _excludeResourceTags?: boolean | cdktf.IResolvable; 
  public get excludeResourceTags() {
    return this.getBooleanAttribute('exclude_resource_tags');
  }
  public set excludeResourceTags(value: boolean | cdktf.IResolvable) {
    this._excludeResourceTags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeResourceTagsInput() {
    return this._excludeResourceTags;
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

  // policy_update_token - computed: true, optional: false, required: false
  public get policyUpdateToken() {
    return this.getStringAttribute('policy_update_token');
  }

  // remediation_enabled - computed: false, optional: true, required: false
  private _remediationEnabled?: boolean | cdktf.IResolvable; 
  public get remediationEnabled() {
    return this.getBooleanAttribute('remediation_enabled');
  }
  public set remediationEnabled(value: boolean | cdktf.IResolvable) {
    this._remediationEnabled = value;
  }
  public resetRemediationEnabled() {
    this._remediationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationEnabledInput() {
    return this._remediationEnabled;
  }

  // resource_set_ids - computed: true, optional: true, required: false
  private _resourceSetIds?: string[]; 
  public get resourceSetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_set_ids'));
  }
  public set resourceSetIds(value: string[]) {
    this._resourceSetIds = value;
  }
  public resetResourceSetIds() {
    this._resourceSetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetIdsInput() {
    return this._resourceSetIds;
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags?: { [key: string]: string }; 
  public get resourceTags() {
    return this.getStringMapAttribute('resource_tags');
  }
  public set resourceTags(value: { [key: string]: string }) {
    this._resourceTags = value;
  }
  public resetResourceTags() {
    this._resourceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags;
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // resource_type_list - computed: true, optional: true, required: false
  private _resourceTypeList?: string[]; 
  public get resourceTypeList() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_type_list'));
  }
  public set resourceTypeList(value: string[]) {
    this._resourceTypeList = value;
  }
  public resetResourceTypeList() {
    this._resourceTypeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeListInput() {
    return this._resourceTypeList;
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // exclude_map - computed: false, optional: true, required: false
  private _excludeMap = new FmsPolicyExcludeMapOutputReference(this, "exclude_map");
  public get excludeMap() {
    return this._excludeMap;
  }
  public putExcludeMap(value: FmsPolicyExcludeMap) {
    this._excludeMap.internalValue = value;
  }
  public resetExcludeMap() {
    this._excludeMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeMapInput() {
    return this._excludeMap.internalValue;
  }

  // include_map - computed: false, optional: true, required: false
  private _includeMap = new FmsPolicyIncludeMapOutputReference(this, "include_map");
  public get includeMap() {
    return this._includeMap;
  }
  public putIncludeMap(value: FmsPolicyIncludeMap) {
    this._includeMap.internalValue = value;
  }
  public resetIncludeMap() {
    this._includeMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeMapInput() {
    return this._includeMap.internalValue;
  }

  // security_service_policy_data - computed: false, optional: false, required: true
  private _securityServicePolicyData = new FmsPolicySecurityServicePolicyDataOutputReference(this, "security_service_policy_data");
  public get securityServicePolicyData() {
    return this._securityServicePolicyData;
  }
  public putSecurityServicePolicyData(value: FmsPolicySecurityServicePolicyData) {
    this._securityServicePolicyData.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityServicePolicyDataInput() {
    return this._securityServicePolicyData.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_all_policy_resources: cdktf.booleanToTerraform(this._deleteAllPolicyResources),
      delete_unused_fm_managed_resources: cdktf.booleanToTerraform(this._deleteUnusedFmManagedResources),
      description: cdktf.stringToTerraform(this._description),
      exclude_resource_tags: cdktf.booleanToTerraform(this._excludeResourceTags),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      remediation_enabled: cdktf.booleanToTerraform(this._remediationEnabled),
      resource_set_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceSetIds),
      resource_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._resourceTags),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      resource_type_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceTypeList),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      exclude_map: fmsPolicyExcludeMapToTerraform(this._excludeMap.internalValue),
      include_map: fmsPolicyIncludeMapToTerraform(this._includeMap.internalValue),
      security_service_policy_data: fmsPolicySecurityServicePolicyDataToTerraform(this._securityServicePolicyData.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_all_policy_resources: {
        value: cdktf.booleanToHclTerraform(this._deleteAllPolicyResources),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_unused_fm_managed_resources: {
        value: cdktf.booleanToHclTerraform(this._deleteUnusedFmManagedResources),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_resource_tags: {
        value: cdktf.booleanToHclTerraform(this._excludeResourceTags),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      remediation_enabled: {
        value: cdktf.booleanToHclTerraform(this._remediationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_set_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourceSetIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      resource_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._resourceTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourceTypeList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      exclude_map: {
        value: fmsPolicyExcludeMapToHclTerraform(this._excludeMap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FmsPolicyExcludeMapList",
      },
      include_map: {
        value: fmsPolicyIncludeMapToHclTerraform(this._includeMap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FmsPolicyIncludeMapList",
      },
      security_service_policy_data: {
        value: fmsPolicySecurityServicePolicyDataToHclTerraform(this._securityServicePolicyData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FmsPolicySecurityServicePolicyDataList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
