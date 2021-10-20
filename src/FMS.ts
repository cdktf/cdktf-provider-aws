// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Firewall Management Service
*/
export namespace FMS {
  export interface FmsAdminAccountConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_admin_account.html#account_id FmsAdminAccount#account_id}
    */
    readonly accountId?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/fms_admin_account.html aws_fms_admin_account}
  */
  export class FmsAdminAccount extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_fms_admin_account";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fms_admin_account.html aws_fms_admin_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FmsAdminAccountConfig = {}
    */
    public constructor(scope: Construct, id: string, config: FmsAdminAccountConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_fms_admin_account',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._accountId = config.accountId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: true, optional: true, required: false
    private _accountId?: string | undefined; 
    public get accountId() {
      return this.getStringAttribute('account_id');
    }
    public set accountId(value: string | undefined) {
      this._accountId = value;
    }
    public resetAccountId() {
      this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
      return this._accountId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        account_id: cdktf.stringToTerraform(this._accountId),
      };
    }
  }
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
    readonly excludeMap?: FmsPolicyExcludeMap;
    /**
    * include_map block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#include_map FmsPolicy#include_map}
    */
    readonly includeMap?: FmsPolicyIncludeMap;
    /**
    * security_service_policy_data block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#security_service_policy_data FmsPolicy#security_service_policy_data}
    */
    readonly securityServicePolicyData: FmsPolicySecurityServicePolicyData;
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

  function fmsPolicyExcludeMapToTerraform(struct?: FmsPolicyExcludeMapOutputReference | FmsPolicyExcludeMap): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      account: cdktf.listMapper(cdktf.stringToTerraform)(struct!.account),
      orgunit: cdktf.listMapper(cdktf.stringToTerraform)(struct!.orgunit),
    }
  }

  export class FmsPolicyExcludeMapOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // account - computed: false, optional: true, required: false
    private _account?: string[] | undefined; 
    public get account() {
      return this.getListAttribute('account');
    }
    public set account(value: string[] | undefined) {
      this._account = value;
    }
    public resetAccount() {
      this._account = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountInput() {
      return this._account
    }

    // orgunit - computed: false, optional: true, required: false
    private _orgunit?: string[] | undefined; 
    public get orgunit() {
      return this.getListAttribute('orgunit');
    }
    public set orgunit(value: string[] | undefined) {
      this._orgunit = value;
    }
    public resetOrgunit() {
      this._orgunit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orgunitInput() {
      return this._orgunit
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

  function fmsPolicyIncludeMapToTerraform(struct?: FmsPolicyIncludeMapOutputReference | FmsPolicyIncludeMap): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      account: cdktf.listMapper(cdktf.stringToTerraform)(struct!.account),
      orgunit: cdktf.listMapper(cdktf.stringToTerraform)(struct!.orgunit),
    }
  }

  export class FmsPolicyIncludeMapOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // account - computed: false, optional: true, required: false
    private _account?: string[] | undefined; 
    public get account() {
      return this.getListAttribute('account');
    }
    public set account(value: string[] | undefined) {
      this._account = value;
    }
    public resetAccount() {
      this._account = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountInput() {
      return this._account
    }

    // orgunit - computed: false, optional: true, required: false
    private _orgunit?: string[] | undefined; 
    public get orgunit() {
      return this.getListAttribute('orgunit');
    }
    public set orgunit(value: string[] | undefined) {
      this._orgunit = value;
    }
    public resetOrgunit() {
      this._orgunit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orgunitInput() {
      return this._orgunit
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

  function fmsPolicySecurityServicePolicyDataToTerraform(struct?: FmsPolicySecurityServicePolicyDataOutputReference | FmsPolicySecurityServicePolicyData): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      managed_service_data: cdktf.stringToTerraform(struct!.managedServiceData),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export class FmsPolicySecurityServicePolicyDataOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // managed_service_data - computed: false, optional: true, required: false
    private _managedServiceData?: string | undefined; 
    public get managedServiceData() {
      return this.getStringAttribute('managed_service_data');
    }
    public set managedServiceData(value: string | undefined) {
      this._managedServiceData = value;
    }
    public resetManagedServiceData() {
      this._managedServiceData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedServiceDataInput() {
      return this._managedServiceData
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
      return this._type
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
    private _deleteAllPolicyResources?: boolean | cdktf.IResolvable | undefined; 
    public get deleteAllPolicyResources() {
      return this.getBooleanAttribute('delete_all_policy_resources') as any;
    }
    public set deleteAllPolicyResources(value: boolean | cdktf.IResolvable | undefined) {
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
    private _excludeResourceTags?: boolean | cdktf.IResolvable; 
    public get excludeResourceTags() {
      return this.getBooleanAttribute('exclude_resource_tags') as any;
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
    private _name?: string; 
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
    private _remediationEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get remediationEnabled() {
      return this.getBooleanAttribute('remediation_enabled') as any;
    }
    public set remediationEnabled(value: boolean | cdktf.IResolvable | undefined) {
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
    private _resourceTags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get resourceTags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('resource_tags') as any;
    }
    public set resourceTags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _resourceType?: string | undefined; 
    public get resourceType() {
      return this.getStringAttribute('resource_type');
    }
    public set resourceType(value: string | undefined) {
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
    private _resourceTypeList?: string[] | undefined; 
    public get resourceTypeList() {
      return this.getListAttribute('resource_type_list');
    }
    public set resourceTypeList(value: string[] | undefined) {
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
    private _excludeMap?: FmsPolicyExcludeMap | undefined; 
    private __excludeMapOutput = new FmsPolicyExcludeMapOutputReference(this as any, "exclude_map", true);
    public get excludeMap() {
      return this.__excludeMapOutput;
    }
    public putExcludeMap(value: FmsPolicyExcludeMap | undefined) {
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
    private _includeMap?: FmsPolicyIncludeMap | undefined; 
    private __includeMapOutput = new FmsPolicyIncludeMapOutputReference(this as any, "include_map", true);
    public get includeMap() {
      return this.__includeMapOutput;
    }
    public putIncludeMap(value: FmsPolicyIncludeMap | undefined) {
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
    private _securityServicePolicyData?: FmsPolicySecurityServicePolicyData; 
    private __securityServicePolicyDataOutput = new FmsPolicySecurityServicePolicyDataOutputReference(this as any, "security_service_policy_data", true);
    public get securityServicePolicyData() {
      return this.__securityServicePolicyDataOutput;
    }
    public putSecurityServicePolicyData(value: FmsPolicySecurityServicePolicyData) {
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
        exclude_map: fmsPolicyExcludeMapToTerraform(this._excludeMap),
        include_map: fmsPolicyIncludeMapToTerraform(this._includeMap),
        security_service_policy_data: fmsPolicySecurityServicePolicyDataToTerraform(this._securityServicePolicyData),
      };
    }
  }
}
