// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Directory Service
*/
export namespace DirectoryService {
  export interface DirectoryServiceConditionalForwarderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder.html#directory_id DirectoryServiceConditionalForwarder#directory_id}
    */
    readonly directoryId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder.html#dns_ips DirectoryServiceConditionalForwarder#dns_ips}
    */
    readonly dnsIps: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder.html#remote_domain_name DirectoryServiceConditionalForwarder#remote_domain_name}
    */
    readonly remoteDomainName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder.html aws_directory_service_conditional_forwarder}
  */
  export class DirectoryServiceConditionalForwarder extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_directory_service_conditional_forwarder";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder.html aws_directory_service_conditional_forwarder} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DirectoryServiceConditionalForwarderConfig
    */
    public constructor(scope: Construct, id: string, config: DirectoryServiceConditionalForwarderConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_directory_service_conditional_forwarder',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._directoryId = config.directoryId;
      this._dnsIps = config.dnsIps;
      this._remoteDomainName = config.remoteDomainName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // directory_id - computed: false, optional: false, required: true
    private _directoryId?: string; 
    public get directoryId() {
      return this.getStringAttribute('directory_id');
    }
    public set directoryId(value: string) {
      this._directoryId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get directoryIdInput() {
      return this._directoryId
    }

    // dns_ips - computed: false, optional: false, required: true
    private _dnsIps?: string[]; 
    public get dnsIps() {
      return this.getListAttribute('dns_ips');
    }
    public set dnsIps(value: string[]) {
      this._dnsIps = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsIpsInput() {
      return this._dnsIps
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // remote_domain_name - computed: false, optional: false, required: true
    private _remoteDomainName?: string; 
    public get remoteDomainName() {
      return this.getStringAttribute('remote_domain_name');
    }
    public set remoteDomainName(value: string) {
      this._remoteDomainName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get remoteDomainNameInput() {
      return this._remoteDomainName
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        directory_id: cdktf.stringToTerraform(this._directoryId),
        dns_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._dnsIps),
        remote_domain_name: cdktf.stringToTerraform(this._remoteDomainName),
      };
    }
  }
  export interface DirectoryServiceDirectoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#alias DirectoryServiceDirectory#alias}
    */
    readonly alias?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#description DirectoryServiceDirectory#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#edition DirectoryServiceDirectory#edition}
    */
    readonly edition?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#enable_sso DirectoryServiceDirectory#enable_sso}
    */
    readonly enableSso?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#name DirectoryServiceDirectory#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#password DirectoryServiceDirectory#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#short_name DirectoryServiceDirectory#short_name}
    */
    readonly shortName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#size DirectoryServiceDirectory#size}
    */
    readonly size?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#tags DirectoryServiceDirectory#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#tags_all DirectoryServiceDirectory#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#type DirectoryServiceDirectory#type}
    */
    readonly type?: string;
    /**
    * connect_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#connect_settings DirectoryServiceDirectory#connect_settings}
    */
    readonly connectSettings?: DirectoryServiceDirectoryConnectSettings;
    /**
    * vpc_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#vpc_settings DirectoryServiceDirectory#vpc_settings}
    */
    readonly vpcSettings?: DirectoryServiceDirectoryVpcSettings;
  }
  export interface DirectoryServiceDirectoryConnectSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#customer_dns_ips DirectoryServiceDirectory#customer_dns_ips}
    */
    readonly customerDnsIps: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#customer_username DirectoryServiceDirectory#customer_username}
    */
    readonly customerUsername: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#subnet_ids DirectoryServiceDirectory#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#vpc_id DirectoryServiceDirectory#vpc_id}
    */
    readonly vpcId: string;
  }

  function directoryServiceDirectoryConnectSettingsToTerraform(struct?: DirectoryServiceDirectoryConnectSettingsOutputReference | DirectoryServiceDirectoryConnectSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      customer_dns_ips: cdktf.listMapper(cdktf.stringToTerraform)(struct!.customerDnsIps),
      customer_username: cdktf.stringToTerraform(struct!.customerUsername),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
      vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    }
  }

  export class DirectoryServiceDirectoryConnectSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // customer_dns_ips - computed: false, optional: false, required: true
    private _customerDnsIps?: string[]; 
    public get customerDnsIps() {
      return this.getListAttribute('customer_dns_ips');
    }
    public set customerDnsIps(value: string[]) {
      this._customerDnsIps = value;
    }
    // Temporarily expose input value. Use with caution.
    public get customerDnsIpsInput() {
      return this._customerDnsIps
    }

    // customer_username - computed: false, optional: false, required: true
    private _customerUsername?: string; 
    public get customerUsername() {
      return this.getStringAttribute('customer_username');
    }
    public set customerUsername(value: string) {
      this._customerUsername = value;
    }
    // Temporarily expose input value. Use with caution.
    public get customerUsernameInput() {
      return this._customerUsername
    }

    // subnet_ids - computed: false, optional: false, required: true
    private _subnetIds?: string[]; 
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
      this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
      return this._subnetIds
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
      this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
      return this._vpcId
    }
  }
  export interface DirectoryServiceDirectoryVpcSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#subnet_ids DirectoryServiceDirectory#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#vpc_id DirectoryServiceDirectory#vpc_id}
    */
    readonly vpcId: string;
  }

  function directoryServiceDirectoryVpcSettingsToTerraform(struct?: DirectoryServiceDirectoryVpcSettingsOutputReference | DirectoryServiceDirectoryVpcSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
      vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    }
  }

  export class DirectoryServiceDirectoryVpcSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // subnet_ids - computed: false, optional: false, required: true
    private _subnetIds?: string[]; 
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
      this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
      return this._subnetIds
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
      this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
      return this._vpcId
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html aws_directory_service_directory}
  */
  export class DirectoryServiceDirectory extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_directory_service_directory";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html aws_directory_service_directory} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DirectoryServiceDirectoryConfig
    */
    public constructor(scope: Construct, id: string, config: DirectoryServiceDirectoryConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_directory_service_directory',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._alias = config.alias;
      this._description = config.description;
      this._edition = config.edition;
      this._enableSso = config.enableSso;
      this._name = config.name;
      this._password = config.password;
      this._shortName = config.shortName;
      this._size = config.size;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._type = config.type;
      this._connectSettings = config.connectSettings;
      this._vpcSettings = config.vpcSettings;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_url - computed: true, optional: false, required: false
    public get accessUrl() {
      return this.getStringAttribute('access_url');
    }

    // alias - computed: true, optional: true, required: false
    private _alias?: string | undefined; 
    public get alias() {
      return this.getStringAttribute('alias');
    }
    public set alias(value: string | undefined) {
      this._alias = value;
    }
    public resetAlias() {
      this._alias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aliasInput() {
      return this._alias
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // dns_ip_addresses - computed: true, optional: false, required: false
    public get dnsIpAddresses() {
      return this.getListAttribute('dns_ip_addresses');
    }

    // edition - computed: true, optional: true, required: false
    private _edition?: string | undefined; 
    public get edition() {
      return this.getStringAttribute('edition');
    }
    public set edition(value: string | undefined) {
      this._edition = value;
    }
    public resetEdition() {
      this._edition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get editionInput() {
      return this._edition
    }

    // enable_sso - computed: false, optional: true, required: false
    private _enableSso?: boolean | cdktf.IResolvable | undefined; 
    public get enableSso() {
      return this.getBooleanAttribute('enable_sso') as any;
    }
    public set enableSso(value: boolean | cdktf.IResolvable | undefined) {
      this._enableSso = value;
    }
    public resetEnableSso() {
      this._enableSso = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableSsoInput() {
      return this._enableSso
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

    // password - computed: false, optional: false, required: true
    private _password?: string; 
    public get password() {
      return this.getStringAttribute('password');
    }
    public set password(value: string) {
      this._password = value;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
      return this._password
    }

    // security_group_id - computed: true, optional: false, required: false
    public get securityGroupId() {
      return this.getStringAttribute('security_group_id');
    }

    // short_name - computed: true, optional: true, required: false
    private _shortName?: string | undefined; 
    public get shortName() {
      return this.getStringAttribute('short_name');
    }
    public set shortName(value: string | undefined) {
      this._shortName = value;
    }
    public resetShortName() {
      this._shortName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shortNameInput() {
      return this._shortName
    }

    // size - computed: true, optional: true, required: false
    private _size?: string | undefined; 
    public get size() {
      return this.getStringAttribute('size');
    }
    public set size(value: string | undefined) {
      this._size = value;
    }
    public resetSize() {
      this._size = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sizeInput() {
      return this._size
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // type - computed: false, optional: true, required: false
    private _type?: string | undefined; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string | undefined) {
      this._type = value;
    }
    public resetType() {
      this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // connect_settings - computed: false, optional: true, required: false
    private _connectSettings?: DirectoryServiceDirectoryConnectSettings | undefined; 
    private __connectSettingsOutput = new DirectoryServiceDirectoryConnectSettingsOutputReference(this as any, "connect_settings", true);
    public get connectSettings() {
      return this.__connectSettingsOutput;
    }
    public putConnectSettings(value: DirectoryServiceDirectoryConnectSettings | undefined) {
      this._connectSettings = value;
    }
    public resetConnectSettings() {
      this._connectSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectSettingsInput() {
      return this._connectSettings
    }

    // vpc_settings - computed: false, optional: true, required: false
    private _vpcSettings?: DirectoryServiceDirectoryVpcSettings | undefined; 
    private __vpcSettingsOutput = new DirectoryServiceDirectoryVpcSettingsOutputReference(this as any, "vpc_settings", true);
    public get vpcSettings() {
      return this.__vpcSettingsOutput;
    }
    public putVpcSettings(value: DirectoryServiceDirectoryVpcSettings | undefined) {
      this._vpcSettings = value;
    }
    public resetVpcSettings() {
      this._vpcSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcSettingsInput() {
      return this._vpcSettings
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        alias: cdktf.stringToTerraform(this._alias),
        description: cdktf.stringToTerraform(this._description),
        edition: cdktf.stringToTerraform(this._edition),
        enable_sso: cdktf.booleanToTerraform(this._enableSso),
        name: cdktf.stringToTerraform(this._name),
        password: cdktf.stringToTerraform(this._password),
        short_name: cdktf.stringToTerraform(this._shortName),
        size: cdktf.stringToTerraform(this._size),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        type: cdktf.stringToTerraform(this._type),
        connect_settings: directoryServiceDirectoryConnectSettingsToTerraform(this._connectSettings),
        vpc_settings: directoryServiceDirectoryVpcSettingsToTerraform(this._vpcSettings),
      };
    }
  }
  export interface DirectoryServiceLogSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_log_subscription.html#directory_id DirectoryServiceLogSubscription#directory_id}
    */
    readonly directoryId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_log_subscription.html#log_group_name DirectoryServiceLogSubscription#log_group_name}
    */
    readonly logGroupName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_log_subscription.html aws_directory_service_log_subscription}
  */
  export class DirectoryServiceLogSubscription extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_directory_service_log_subscription";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/directory_service_log_subscription.html aws_directory_service_log_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DirectoryServiceLogSubscriptionConfig
    */
    public constructor(scope: Construct, id: string, config: DirectoryServiceLogSubscriptionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_directory_service_log_subscription',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._directoryId = config.directoryId;
      this._logGroupName = config.logGroupName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // directory_id - computed: false, optional: false, required: true
    private _directoryId?: string; 
    public get directoryId() {
      return this.getStringAttribute('directory_id');
    }
    public set directoryId(value: string) {
      this._directoryId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get directoryIdInput() {
      return this._directoryId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // log_group_name - computed: false, optional: false, required: true
    private _logGroupName?: string; 
    public get logGroupName() {
      return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string) {
      this._logGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
      return this._logGroupName
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        directory_id: cdktf.stringToTerraform(this._directoryId),
        log_group_name: cdktf.stringToTerraform(this._logGroupName),
      };
    }
  }
  export interface DataAwsDirectoryServiceDirectoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory.html#directory_id DataAwsDirectoryServiceDirectory#directory_id}
    */
    readonly directoryId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory.html#tags DataAwsDirectoryServiceDirectory#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsDirectoryServiceDirectoryConnectSettings extends cdktf.ComplexComputedList {

    // availability_zones - computed: true, optional: false, required: false
    public get availabilityZones() {
      return this.getListAttribute('availability_zones');
    }

    // connect_ips - computed: true, optional: false, required: false
    public get connectIps() {
      return this.getListAttribute('connect_ips');
    }

    // customer_dns_ips - computed: true, optional: false, required: false
    public get customerDnsIps() {
      return this.getListAttribute('customer_dns_ips');
    }

    // customer_username - computed: true, optional: false, required: false
    public get customerUsername() {
      return this.getStringAttribute('customer_username');
    }

    // subnet_ids - computed: true, optional: false, required: false
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
  }
  export class DataAwsDirectoryServiceDirectoryVpcSettings extends cdktf.ComplexComputedList {

    // availability_zones - computed: true, optional: false, required: false
    public get availabilityZones() {
      return this.getListAttribute('availability_zones');
    }

    // subnet_ids - computed: true, optional: false, required: false
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory.html aws_directory_service_directory}
  */
  export class DataAwsDirectoryServiceDirectory extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_directory_service_directory";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory.html aws_directory_service_directory} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDirectoryServiceDirectoryConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsDirectoryServiceDirectoryConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_directory_service_directory',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._directoryId = config.directoryId;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_url - computed: true, optional: false, required: false
    public get accessUrl() {
      return this.getStringAttribute('access_url');
    }

    // alias - computed: true, optional: false, required: false
    public get alias() {
      return this.getStringAttribute('alias');
    }

    // connect_settings - computed: true, optional: false, required: false
    public connectSettings(index: string) {
      return new DataAwsDirectoryServiceDirectoryConnectSettings(this, 'connect_settings', index);
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // directory_id - computed: false, optional: false, required: true
    private _directoryId?: string; 
    public get directoryId() {
      return this.getStringAttribute('directory_id');
    }
    public set directoryId(value: string) {
      this._directoryId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get directoryIdInput() {
      return this._directoryId
    }

    // dns_ip_addresses - computed: true, optional: false, required: false
    public get dnsIpAddresses() {
      return this.getListAttribute('dns_ip_addresses');
    }

    // edition - computed: true, optional: false, required: false
    public get edition() {
      return this.getStringAttribute('edition');
    }

    // enable_sso - computed: true, optional: false, required: false
    public get enableSso() {
      return this.getBooleanAttribute('enable_sso') as any;
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // security_group_id - computed: true, optional: false, required: false
    public get securityGroupId() {
      return this.getStringAttribute('security_group_id');
    }

    // short_name - computed: true, optional: false, required: false
    public get shortName() {
      return this.getStringAttribute('short_name');
    }

    // size - computed: true, optional: false, required: false
    public get size() {
      return this.getStringAttribute('size');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // type - computed: true, optional: false, required: false
    public get type() {
      return this.getStringAttribute('type');
    }

    // vpc_settings - computed: true, optional: false, required: false
    public vpcSettings(index: string) {
      return new DataAwsDirectoryServiceDirectoryVpcSettings(this, 'vpc_settings', index);
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        directory_id: cdktf.stringToTerraform(this._directoryId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
}
