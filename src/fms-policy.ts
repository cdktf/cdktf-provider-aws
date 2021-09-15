// https://www.terraform.io/docs/providers/aws/r/fms_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FmsPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#delete_all_policy_resources FmsPolicy#delete_all_policy_resources}
  */
  readonly deleteAllPolicyResources?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#exclude_resource_tags FmsPolicy#exclude_resource_tags}
  */
  readonly excludeResourceTags: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#name FmsPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#remediation_enabled FmsPolicy#remediation_enabled}
  */
  readonly remediationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#resource_tags FmsPolicy#resource_tags}
  */
  readonly resourceTags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#resource_type FmsPolicy#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#resource_type_list FmsPolicy#resource_type_list}
  */
  readonly resourceTypeList?: string[];
  /**
  * exclude_map block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#exclude_map FmsPolicy#exclude_map}
  */
  readonly excludeMap?: FmsPolicyExcludeMap[];
  /**
  * include_map block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#include_map FmsPolicy#include_map}
  */
  readonly includeMap?: FmsPolicyIncludeMap[];
  /**
  * security_service_policy_data block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#security_service_policy_data FmsPolicy#security_service_policy_data}
  */
  readonly securityServicePolicyData: FmsPolicySecurityServicePolicyData[];
}
export interface FmsPolicyExcludeMap {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#account FmsPolicy#account}
  */
  readonly account?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#orgunit FmsPolicy#orgunit}
  */
  readonly orgunit?: string[];
}

function fmsPolicyExcludeMapToTerraform(struct?: FmsPolicyExcludeMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    account: cdktf.listMapper(cdktf.stringToTerraform)(struct!.account),
    orgunit: cdktf.listMapper(cdktf.stringToTerraform)(struct!.orgunit),
  }
}

export interface FmsPolicyIncludeMap {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#account FmsPolicy#account}
  */
  readonly account?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#orgunit FmsPolicy#orgunit}
  */
  readonly orgunit?: string[];
}

function fmsPolicyIncludeMapToTerraform(struct?: FmsPolicyIncludeMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    account: cdktf.listMapper(cdktf.stringToTerraform)(struct!.account),
    orgunit: cdktf.listMapper(cdktf.stringToTerraform)(struct!.orgunit),
  }
}

export interface FmsPolicySecurityServicePolicyData {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#managed_service_data FmsPolicy#managed_service_data}
  */
  readonly managedServiceData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#type FmsPolicy#type}
  */
  readonly type: string;
}

function fmsPolicySecurityServicePolicyDataToTerraform(struct?: FmsPolicySecurityServicePolicyData): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    managed_service_data: cdktf.stringToTerraform(struct!.managedServiceData),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html aws_fms_policy}
*/
export class FmsPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_fms_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html aws_fms_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FmsPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: FmsPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_fms_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deleteAllPolicyResources = config.deleteAllPolicyResources;
    this._excludeResourceTags = config.excludeResourceTags;
    this._name = config.name;
    this._remediationEnabled = config.remediationEnabled;
    this._resourceTags = config.resourceTags;
    this._resourceType = config.resourceType;
    this._resourceTypeList = config.resourceTypeList;
    this._excludeMap = config.excludeMap;
    this._includeMap = config.includeMap;
    this._securityServicePolicyData = config.securityServicePolicyData;
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
  public set deleteAllPolicyResources(value: boolean | cdktf.IResolvable ) {
    this._deleteAllPolicyResources = value;
  }
  public resetDeleteAllPolicyResources() {
    this._deleteAllPolicyResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAllPolicyResourcesInput() {
    return this._deleteAllPolicyResources
  }

  // exclude_resource_tags - computed: false, optional: false, required: true
  private _excludeResourceTags: boolean | cdktf.IResolvable;
  public get excludeResourceTags() {
    return this.getBooleanAttribute('exclude_resource_tags');
  }
  public set excludeResourceTags(value: boolean | cdktf.IResolvable) {
    this._excludeResourceTags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeResourceTagsInput() {
    return this._excludeResourceTags
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // policy_update_token - computed: true, optional: false, required: false
  public get policyUpdateToken() {
    return this.getStringAttribute('policy_update_token');
  }

  // remediation_enabled - computed: false, optional: true, required: false
  private _remediationEnabled?: boolean | cdktf.IResolvable;
  public get remediationEnabled() {
    return this.getBooleanAttribute('remediation_enabled');
  }
  public set remediationEnabled(value: boolean | cdktf.IResolvable ) {
    this._remediationEnabled = value;
  }
  public resetRemediationEnabled() {
    this._remediationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationEnabledInput() {
    return this._remediationEnabled
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags?: { [key: string]: string } | cdktf.IResolvable;
  public get resourceTags() {
    return this.interpolationForAttribute('resource_tags') as any;
  }
  public set resourceTags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._resourceTags = value;
  }
  public resetResourceTags() {
    this._resourceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags
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
    return this._resourceType
  }

  // resource_type_list - computed: true, optional: true, required: false
  private _resourceTypeList?: string[];
  public get resourceTypeList() {
    return this.getListAttribute('resource_type_list');
  }
  public set resourceTypeList(value: string[]) {
    this._resourceTypeList = value;
  }
  public resetResourceTypeList() {
    this._resourceTypeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeListInput() {
    return this._resourceTypeList
  }

  // exclude_map - computed: false, optional: true, required: false
  private _excludeMap?: FmsPolicyExcludeMap[];
  public get excludeMap() {
    return this.interpolationForAttribute('exclude_map') as any;
  }
  public set excludeMap(value: FmsPolicyExcludeMap[] ) {
    this._excludeMap = value;
  }
  public resetExcludeMap() {
    this._excludeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeMapInput() {
    return this._excludeMap
  }

  // include_map - computed: false, optional: true, required: false
  private _includeMap?: FmsPolicyIncludeMap[];
  public get includeMap() {
    return this.interpolationForAttribute('include_map') as any;
  }
  public set includeMap(value: FmsPolicyIncludeMap[] ) {
    this._includeMap = value;
  }
  public resetIncludeMap() {
    this._includeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeMapInput() {
    return this._includeMap
  }

  // security_service_policy_data - computed: false, optional: false, required: true
  private _securityServicePolicyData: FmsPolicySecurityServicePolicyData[];
  public get securityServicePolicyData() {
    return this.interpolationForAttribute('security_service_policy_data') as any;
  }
  public set securityServicePolicyData(value: FmsPolicySecurityServicePolicyData[]) {
    this._securityServicePolicyData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityServicePolicyDataInput() {
    return this._securityServicePolicyData
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_all_policy_resources: cdktf.booleanToTerraform(this._deleteAllPolicyResources),
      exclude_resource_tags: cdktf.booleanToTerraform(this._excludeResourceTags),
      name: cdktf.stringToTerraform(this._name),
      remediation_enabled: cdktf.booleanToTerraform(this._remediationEnabled),
      resource_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._resourceTags),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      resource_type_list: cdktf.listMapper(cdktf.stringToTerraform)(this._resourceTypeList),
      exclude_map: cdktf.listMapper(fmsPolicyExcludeMapToTerraform)(this._excludeMap),
      include_map: cdktf.listMapper(fmsPolicyIncludeMapToTerraform)(this._includeMap),
      security_service_policy_data: cdktf.listMapper(fmsPolicySecurityServicePolicyDataToTerraform)(this._securityServicePolicyData),
    };
  }
}
