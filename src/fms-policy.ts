// https://www.terraform.io/docs/providers/aws/r/fms_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface FmsPolicyConfig extends TerraformMetaArguments {
  readonly deleteAllPolicyResources?: boolean;
  readonly excludeResourceTags: boolean;
  readonly name: string;
  readonly remediationEnabled?: boolean;
  readonly resourceTags?: { [key: string]: string };
  readonly resourceTypeList: string[];
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
export interface FmsPolicyIncludeMap {
  readonly account?: string[];
  readonly orgunit?: string[];
}
export interface FmsPolicySecurityServicePolicyData {
  readonly managedServiceData?: string;
  readonly type: string;
}

// Resource

export class FmsPolicy extends TerraformResource {

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
    this._resourceTypeList = config.resourceTypeList;
    this._excludeMap = config.excludeMap;
    this._includeMap = config.includeMap;
    this._securityServicePolicyData = config.securityServicePolicyData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // delete_all_policy_resources - computed: false, optional: true, required: false
  private _deleteAllPolicyResources?: boolean;
  public get deleteAllPolicyResources() {
    return this._deleteAllPolicyResources;
  }
  public set deleteAllPolicyResources(value: boolean | undefined) {
    this._deleteAllPolicyResources = value;
  }

  // exclude_resource_tags - computed: false, optional: false, required: true
  private _excludeResourceTags: boolean;
  public get excludeResourceTags() {
    return this._excludeResourceTags;
  }
  public set excludeResourceTags(value: boolean) {
    this._excludeResourceTags = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // policy_update_token - computed: true, optional: false, required: true
  public get policyUpdateToken() {
    return this.getStringAttribute('policy_update_token');
  }

  // remediation_enabled - computed: false, optional: true, required: false
  private _remediationEnabled?: boolean;
  public get remediationEnabled() {
    return this._remediationEnabled;
  }
  public set remediationEnabled(value: boolean | undefined) {
    this._remediationEnabled = value;
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags?: { [key: string]: string };
  public get resourceTags() {
    return this._resourceTags;
  }
  public set resourceTags(value: { [key: string]: string } | undefined) {
    this._resourceTags = value;
  }

  // resource_type_list - computed: false, optional: false, required: true
  private _resourceTypeList: string[];
  public get resourceTypeList() {
    return this._resourceTypeList;
  }
  public set resourceTypeList(value: string[]) {
    this._resourceTypeList = value;
  }

  // exclude_map - computed: false, optional: true, required: false
  private _excludeMap?: FmsPolicyExcludeMap[];
  public get excludeMap() {
    return this._excludeMap;
  }
  public set excludeMap(value: FmsPolicyExcludeMap[] | undefined) {
    this._excludeMap = value;
  }

  // include_map - computed: false, optional: true, required: false
  private _includeMap?: FmsPolicyIncludeMap[];
  public get includeMap() {
    return this._includeMap;
  }
  public set includeMap(value: FmsPolicyIncludeMap[] | undefined) {
    this._includeMap = value;
  }

  // security_service_policy_data - computed: false, optional: false, required: true
  private _securityServicePolicyData: FmsPolicySecurityServicePolicyData[];
  public get securityServicePolicyData() {
    return this._securityServicePolicyData;
  }
  public set securityServicePolicyData(value: FmsPolicySecurityServicePolicyData[]) {
    this._securityServicePolicyData = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_all_policy_resources: this._deleteAllPolicyResources,
      exclude_resource_tags: this._excludeResourceTags,
      name: this._name,
      remediation_enabled: this._remediationEnabled,
      resource_tags: this._resourceTags,
      resource_type_list: this._resourceTypeList,
      exclude_map: this._excludeMap,
      include_map: this._includeMap,
      security_service_policy_data: this._securityServicePolicyData,
    };
  }
}
