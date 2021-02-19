// https://www.terraform.io/docs/providers/aws/r/fms_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FmsPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly deleteAllPolicyResources?: boolean;
  readonly excludeResourceTags: boolean;
  readonly name: string;
  readonly remediationEnabled?: boolean;
  readonly resourceTags?: { [key: string]: string };
  readonly resourceType?: string;
  readonly resourceTypeList?: string[];
  /** exclude_map block */
  readonly excludeMap?: FmsPolicyExcludeMap[];
  /** include_map block */
  readonly includeMap?: FmsPolicyIncludeMap[];
  /** security_service_policy_data block */
  readonly securityServicePolicyData: FmsPolicySecurityServicePolicyData[];
}
export interface FmsPolicyExcludeMap {
  readonly account?: string[];
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
  readonly account?: string[];
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
  readonly managedServiceData?: string;
  readonly type: string;
}

function fmsPolicySecurityServicePolicyDataToTerraform(struct?: FmsPolicySecurityServicePolicyData): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    managed_service_data: cdktf.stringToTerraform(struct!.managedServiceData),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


// Resource

export class FmsPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _deleteAllPolicyResources?: boolean;
  public get deleteAllPolicyResources() {
    return this.getBooleanAttribute('delete_all_policy_resources');
  }
  public set deleteAllPolicyResources(value: boolean ) {
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
  private _excludeResourceTags: boolean;
  public get excludeResourceTags() {
    return this.getBooleanAttribute('exclude_resource_tags');
  }
  public set excludeResourceTags(value: boolean) {
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
  private _remediationEnabled?: boolean;
  public get remediationEnabled() {
    return this.getBooleanAttribute('remediation_enabled');
  }
  public set remediationEnabled(value: boolean ) {
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
  private _resourceTags?: { [key: string]: string };
  public get resourceTags() {
    return this.interpolationForAttribute('resource_tags') as any;
  }
  public set resourceTags(value: { [key: string]: string } ) {
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
