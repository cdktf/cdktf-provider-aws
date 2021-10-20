// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Transfer
*/
export namespace Transfer {
  export interface TransferAccessConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html#external_id TransferAccess#external_id}
    */
    readonly externalId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html#home_directory TransferAccess#home_directory}
    */
    readonly homeDirectory?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html#home_directory_type TransferAccess#home_directory_type}
    */
    readonly homeDirectoryType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html#policy TransferAccess#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html#role TransferAccess#role}
    */
    readonly role?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html#server_id TransferAccess#server_id}
    */
    readonly serverId: string;
    /**
    * home_directory_mappings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html#home_directory_mappings TransferAccess#home_directory_mappings}
    */
    readonly homeDirectoryMappings?: TransferAccessHomeDirectoryMappings[];
    /**
    * posix_profile block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html#posix_profile TransferAccess#posix_profile}
    */
    readonly posixProfile?: TransferAccessPosixProfile;
  }
  export interface TransferAccessHomeDirectoryMappings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html#entry TransferAccess#entry}
    */
    readonly entry: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html#target TransferAccess#target}
    */
    readonly target: string;
  }

  function transferAccessHomeDirectoryMappingsToTerraform(struct?: TransferAccessHomeDirectoryMappings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      entry: cdktf.stringToTerraform(struct!.entry),
      target: cdktf.stringToTerraform(struct!.target),
    }
  }

  export interface TransferAccessPosixProfile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html#gid TransferAccess#gid}
    */
    readonly gid: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html#secondary_gids TransferAccess#secondary_gids}
    */
    readonly secondaryGids?: number[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html#uid TransferAccess#uid}
    */
    readonly uid: number;
  }

  function transferAccessPosixProfileToTerraform(struct?: TransferAccessPosixProfileOutputReference | TransferAccessPosixProfile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      gid: cdktf.numberToTerraform(struct!.gid),
      secondary_gids: cdktf.listMapper(cdktf.numberToTerraform)(struct!.secondaryGids),
      uid: cdktf.numberToTerraform(struct!.uid),
    }
  }

  export class TransferAccessPosixProfileOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // gid - computed: false, optional: false, required: true
    private _gid?: number; 
    public get gid() {
      return this.getNumberAttribute('gid');
    }
    public set gid(value: number) {
      this._gid = value;
    }
    // Temporarily expose input value. Use with caution.
    public get gidInput() {
      return this._gid
    }

    // secondary_gids - computed: false, optional: true, required: false
    private _secondaryGids?: number[] | undefined; 
    public get secondaryGids() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('secondary_gids') as any;
    }
    public set secondaryGids(value: number[] | undefined) {
      this._secondaryGids = value;
    }
    public resetSecondaryGids() {
      this._secondaryGids = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondaryGidsInput() {
      return this._secondaryGids
    }

    // uid - computed: false, optional: false, required: true
    private _uid?: number; 
    public get uid() {
      return this.getNumberAttribute('uid');
    }
    public set uid(value: number) {
      this._uid = value;
    }
    // Temporarily expose input value. Use with caution.
    public get uidInput() {
      return this._uid
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html aws_transfer_access}
  */
  export class TransferAccess extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_transfer_access";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html aws_transfer_access} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TransferAccessConfig
    */
    public constructor(scope: Construct, id: string, config: TransferAccessConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_transfer_access',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._externalId = config.externalId;
      this._homeDirectory = config.homeDirectory;
      this._homeDirectoryType = config.homeDirectoryType;
      this._policy = config.policy;
      this._role = config.role;
      this._serverId = config.serverId;
      this._homeDirectoryMappings = config.homeDirectoryMappings;
      this._posixProfile = config.posixProfile;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // external_id - computed: false, optional: false, required: true
    private _externalId?: string; 
    public get externalId() {
      return this.getStringAttribute('external_id');
    }
    public set externalId(value: string) {
      this._externalId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get externalIdInput() {
      return this._externalId
    }

    // home_directory - computed: false, optional: true, required: false
    private _homeDirectory?: string | undefined; 
    public get homeDirectory() {
      return this.getStringAttribute('home_directory');
    }
    public set homeDirectory(value: string | undefined) {
      this._homeDirectory = value;
    }
    public resetHomeDirectory() {
      this._homeDirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get homeDirectoryInput() {
      return this._homeDirectory
    }

    // home_directory_type - computed: false, optional: true, required: false
    private _homeDirectoryType?: string | undefined; 
    public get homeDirectoryType() {
      return this.getStringAttribute('home_directory_type');
    }
    public set homeDirectoryType(value: string | undefined) {
      this._homeDirectoryType = value;
    }
    public resetHomeDirectoryType() {
      this._homeDirectoryType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get homeDirectoryTypeInput() {
      return this._homeDirectoryType
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // policy - computed: false, optional: true, required: false
    private _policy?: string | undefined; 
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string | undefined) {
      this._policy = value;
    }
    public resetPolicy() {
      this._policy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // role - computed: false, optional: true, required: false
    private _role?: string | undefined; 
    public get role() {
      return this.getStringAttribute('role');
    }
    public set role(value: string | undefined) {
      this._role = value;
    }
    public resetRole() {
      this._role = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleInput() {
      return this._role
    }

    // server_id - computed: false, optional: false, required: true
    private _serverId?: string; 
    public get serverId() {
      return this.getStringAttribute('server_id');
    }
    public set serverId(value: string) {
      this._serverId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serverIdInput() {
      return this._serverId
    }

    // home_directory_mappings - computed: false, optional: true, required: false
    private _homeDirectoryMappings?: TransferAccessHomeDirectoryMappings[] | undefined; 
    public get homeDirectoryMappings() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('home_directory_mappings') as any;
    }
    public set homeDirectoryMappings(value: TransferAccessHomeDirectoryMappings[] | undefined) {
      this._homeDirectoryMappings = value;
    }
    public resetHomeDirectoryMappings() {
      this._homeDirectoryMappings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get homeDirectoryMappingsInput() {
      return this._homeDirectoryMappings
    }

    // posix_profile - computed: false, optional: true, required: false
    private _posixProfile?: TransferAccessPosixProfile | undefined; 
    private __posixProfileOutput = new TransferAccessPosixProfileOutputReference(this as any, "posix_profile", true);
    public get posixProfile() {
      return this.__posixProfileOutput;
    }
    public putPosixProfile(value: TransferAccessPosixProfile | undefined) {
      this._posixProfile = value;
    }
    public resetPosixProfile() {
      this._posixProfile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get posixProfileInput() {
      return this._posixProfile
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        external_id: cdktf.stringToTerraform(this._externalId),
        home_directory: cdktf.stringToTerraform(this._homeDirectory),
        home_directory_type: cdktf.stringToTerraform(this._homeDirectoryType),
        policy: cdktf.stringToTerraform(this._policy),
        role: cdktf.stringToTerraform(this._role),
        server_id: cdktf.stringToTerraform(this._serverId),
        home_directory_mappings: cdktf.listMapper(transferAccessHomeDirectoryMappingsToTerraform)(this._homeDirectoryMappings),
        posix_profile: transferAccessPosixProfileToTerraform(this._posixProfile),
      };
    }
  }
  export interface TransferServerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#certificate TransferServer#certificate}
    */
    readonly certificate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#directory_id TransferServer#directory_id}
    */
    readonly directoryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#domain TransferServer#domain}
    */
    readonly domain?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#endpoint_type TransferServer#endpoint_type}
    */
    readonly endpointType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#force_destroy TransferServer#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#host_key TransferServer#host_key}
    */
    readonly hostKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#identity_provider_type TransferServer#identity_provider_type}
    */
    readonly identityProviderType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#invocation_role TransferServer#invocation_role}
    */
    readonly invocationRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#logging_role TransferServer#logging_role}
    */
    readonly loggingRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#protocols TransferServer#protocols}
    */
    readonly protocols?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#security_policy_name TransferServer#security_policy_name}
    */
    readonly securityPolicyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#tags TransferServer#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#tags_all TransferServer#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#url TransferServer#url}
    */
    readonly url?: string;
    /**
    * endpoint_details block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#endpoint_details TransferServer#endpoint_details}
    */
    readonly endpointDetails?: TransferServerEndpointDetails;
  }
  export interface TransferServerEndpointDetails {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#address_allocation_ids TransferServer#address_allocation_ids}
    */
    readonly addressAllocationIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#security_group_ids TransferServer#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#subnet_ids TransferServer#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#vpc_endpoint_id TransferServer#vpc_endpoint_id}
    */
    readonly vpcEndpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#vpc_id TransferServer#vpc_id}
    */
    readonly vpcId?: string;
  }

  function transferServerEndpointDetailsToTerraform(struct?: TransferServerEndpointDetailsOutputReference | TransferServerEndpointDetails): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      address_allocation_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.addressAllocationIds),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
      vpc_endpoint_id: cdktf.stringToTerraform(struct!.vpcEndpointId),
      vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    }
  }

  export class TransferServerEndpointDetailsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // address_allocation_ids - computed: false, optional: true, required: false
    private _addressAllocationIds?: string[] | undefined; 
    public get addressAllocationIds() {
      return this.getListAttribute('address_allocation_ids');
    }
    public set addressAllocationIds(value: string[] | undefined) {
      this._addressAllocationIds = value;
    }
    public resetAddressAllocationIds() {
      this._addressAllocationIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addressAllocationIdsInput() {
      return this._addressAllocationIds
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[] | undefined; 
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[] | undefined) {
      this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
      this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
      return this._securityGroupIds
    }

    // subnet_ids - computed: false, optional: true, required: false
    private _subnetIds?: string[] | undefined; 
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[] | undefined) {
      this._subnetIds = value;
    }
    public resetSubnetIds() {
      this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
      return this._subnetIds
    }

    // vpc_endpoint_id - computed: true, optional: true, required: false
    private _vpcEndpointId?: string | undefined; 
    public get vpcEndpointId() {
      return this.getStringAttribute('vpc_endpoint_id');
    }
    public set vpcEndpointId(value: string | undefined) {
      this._vpcEndpointId = value;
    }
    public resetVpcEndpointId() {
      this._vpcEndpointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcEndpointIdInput() {
      return this._vpcEndpointId
    }

    // vpc_id - computed: false, optional: true, required: false
    private _vpcId?: string | undefined; 
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string | undefined) {
      this._vpcId = value;
    }
    public resetVpcId() {
      this._vpcId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
      return this._vpcId
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html aws_transfer_server}
  */
  export class TransferServer extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_transfer_server";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html aws_transfer_server} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TransferServerConfig = {}
    */
    public constructor(scope: Construct, id: string, config: TransferServerConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_transfer_server',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._certificate = config.certificate;
      this._directoryId = config.directoryId;
      this._domain = config.domain;
      this._endpointType = config.endpointType;
      this._forceDestroy = config.forceDestroy;
      this._hostKey = config.hostKey;
      this._identityProviderType = config.identityProviderType;
      this._invocationRole = config.invocationRole;
      this._loggingRole = config.loggingRole;
      this._protocols = config.protocols;
      this._securityPolicyName = config.securityPolicyName;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._url = config.url;
      this._endpointDetails = config.endpointDetails;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // certificate - computed: false, optional: true, required: false
    private _certificate?: string | undefined; 
    public get certificate() {
      return this.getStringAttribute('certificate');
    }
    public set certificate(value: string | undefined) {
      this._certificate = value;
    }
    public resetCertificate() {
      this._certificate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateInput() {
      return this._certificate
    }

    // directory_id - computed: false, optional: true, required: false
    private _directoryId?: string | undefined; 
    public get directoryId() {
      return this.getStringAttribute('directory_id');
    }
    public set directoryId(value: string | undefined) {
      this._directoryId = value;
    }
    public resetDirectoryId() {
      this._directoryId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get directoryIdInput() {
      return this._directoryId
    }

    // domain - computed: false, optional: true, required: false
    private _domain?: string | undefined; 
    public get domain() {
      return this.getStringAttribute('domain');
    }
    public set domain(value: string | undefined) {
      this._domain = value;
    }
    public resetDomain() {
      this._domain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
      return this._domain
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
      return this.getStringAttribute('endpoint');
    }

    // endpoint_type - computed: false, optional: true, required: false
    private _endpointType?: string | undefined; 
    public get endpointType() {
      return this.getStringAttribute('endpoint_type');
    }
    public set endpointType(value: string | undefined) {
      this._endpointType = value;
    }
    public resetEndpointType() {
      this._endpointType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointTypeInput() {
      return this._endpointType
    }

    // force_destroy - computed: false, optional: true, required: false
    private _forceDestroy?: boolean | cdktf.IResolvable | undefined; 
    public get forceDestroy() {
      return this.getBooleanAttribute('force_destroy') as any;
    }
    public set forceDestroy(value: boolean | cdktf.IResolvable | undefined) {
      this._forceDestroy = value;
    }
    public resetForceDestroy() {
      this._forceDestroy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceDestroyInput() {
      return this._forceDestroy
    }

    // host_key - computed: false, optional: true, required: false
    private _hostKey?: string | undefined; 
    public get hostKey() {
      return this.getStringAttribute('host_key');
    }
    public set hostKey(value: string | undefined) {
      this._hostKey = value;
    }
    public resetHostKey() {
      this._hostKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostKeyInput() {
      return this._hostKey
    }

    // host_key_fingerprint - computed: true, optional: false, required: false
    public get hostKeyFingerprint() {
      return this.getStringAttribute('host_key_fingerprint');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // identity_provider_type - computed: false, optional: true, required: false
    private _identityProviderType?: string | undefined; 
    public get identityProviderType() {
      return this.getStringAttribute('identity_provider_type');
    }
    public set identityProviderType(value: string | undefined) {
      this._identityProviderType = value;
    }
    public resetIdentityProviderType() {
      this._identityProviderType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderTypeInput() {
      return this._identityProviderType
    }

    // invocation_role - computed: false, optional: true, required: false
    private _invocationRole?: string | undefined; 
    public get invocationRole() {
      return this.getStringAttribute('invocation_role');
    }
    public set invocationRole(value: string | undefined) {
      this._invocationRole = value;
    }
    public resetInvocationRole() {
      this._invocationRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invocationRoleInput() {
      return this._invocationRole
    }

    // logging_role - computed: false, optional: true, required: false
    private _loggingRole?: string | undefined; 
    public get loggingRole() {
      return this.getStringAttribute('logging_role');
    }
    public set loggingRole(value: string | undefined) {
      this._loggingRole = value;
    }
    public resetLoggingRole() {
      this._loggingRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingRoleInput() {
      return this._loggingRole
    }

    // protocols - computed: true, optional: true, required: false
    private _protocols?: string[] | undefined; 
    public get protocols() {
      return this.getListAttribute('protocols');
    }
    public set protocols(value: string[] | undefined) {
      this._protocols = value;
    }
    public resetProtocols() {
      this._protocols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolsInput() {
      return this._protocols
    }

    // security_policy_name - computed: false, optional: true, required: false
    private _securityPolicyName?: string | undefined; 
    public get securityPolicyName() {
      return this.getStringAttribute('security_policy_name');
    }
    public set securityPolicyName(value: string | undefined) {
      this._securityPolicyName = value;
    }
    public resetSecurityPolicyName() {
      this._securityPolicyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityPolicyNameInput() {
      return this._securityPolicyName
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

    // url - computed: false, optional: true, required: false
    private _url?: string | undefined; 
    public get url() {
      return this.getStringAttribute('url');
    }
    public set url(value: string | undefined) {
      this._url = value;
    }
    public resetUrl() {
      this._url = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlInput() {
      return this._url
    }

    // endpoint_details - computed: false, optional: true, required: false
    private _endpointDetails?: TransferServerEndpointDetails | undefined; 
    private __endpointDetailsOutput = new TransferServerEndpointDetailsOutputReference(this as any, "endpoint_details", true);
    public get endpointDetails() {
      return this.__endpointDetailsOutput;
    }
    public putEndpointDetails(value: TransferServerEndpointDetails | undefined) {
      this._endpointDetails = value;
    }
    public resetEndpointDetails() {
      this._endpointDetails = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointDetailsInput() {
      return this._endpointDetails
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        certificate: cdktf.stringToTerraform(this._certificate),
        directory_id: cdktf.stringToTerraform(this._directoryId),
        domain: cdktf.stringToTerraform(this._domain),
        endpoint_type: cdktf.stringToTerraform(this._endpointType),
        force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
        host_key: cdktf.stringToTerraform(this._hostKey),
        identity_provider_type: cdktf.stringToTerraform(this._identityProviderType),
        invocation_role: cdktf.stringToTerraform(this._invocationRole),
        logging_role: cdktf.stringToTerraform(this._loggingRole),
        protocols: cdktf.listMapper(cdktf.stringToTerraform)(this._protocols),
        security_policy_name: cdktf.stringToTerraform(this._securityPolicyName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        url: cdktf.stringToTerraform(this._url),
        endpoint_details: transferServerEndpointDetailsToTerraform(this._endpointDetails),
      };
    }
  }
  export interface TransferSshKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_ssh_key.html#body TransferSshKey#body}
    */
    readonly body: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_ssh_key.html#server_id TransferSshKey#server_id}
    */
    readonly serverId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_ssh_key.html#user_name TransferSshKey#user_name}
    */
    readonly userName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/transfer_ssh_key.html aws_transfer_ssh_key}
  */
  export class TransferSshKey extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_transfer_ssh_key";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/transfer_ssh_key.html aws_transfer_ssh_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TransferSshKeyConfig
    */
    public constructor(scope: Construct, id: string, config: TransferSshKeyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_transfer_ssh_key',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._body = config.body;
      this._serverId = config.serverId;
      this._userName = config.userName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // body - computed: false, optional: false, required: true
    private _body?: string; 
    public get body() {
      return this.getStringAttribute('body');
    }
    public set body(value: string) {
      this._body = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bodyInput() {
      return this._body
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // server_id - computed: false, optional: false, required: true
    private _serverId?: string; 
    public get serverId() {
      return this.getStringAttribute('server_id');
    }
    public set serverId(value: string) {
      this._serverId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serverIdInput() {
      return this._serverId
    }

    // user_name - computed: false, optional: false, required: true
    private _userName?: string; 
    public get userName() {
      return this.getStringAttribute('user_name');
    }
    public set userName(value: string) {
      this._userName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userNameInput() {
      return this._userName
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        body: cdktf.stringToTerraform(this._body),
        server_id: cdktf.stringToTerraform(this._serverId),
        user_name: cdktf.stringToTerraform(this._userName),
      };
    }
  }
  export interface TransferUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#home_directory TransferUser#home_directory}
    */
    readonly homeDirectory?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#home_directory_type TransferUser#home_directory_type}
    */
    readonly homeDirectoryType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#policy TransferUser#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#role TransferUser#role}
    */
    readonly role: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#server_id TransferUser#server_id}
    */
    readonly serverId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#tags TransferUser#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#tags_all TransferUser#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#user_name TransferUser#user_name}
    */
    readonly userName: string;
    /**
    * home_directory_mappings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#home_directory_mappings TransferUser#home_directory_mappings}
    */
    readonly homeDirectoryMappings?: TransferUserHomeDirectoryMappings[];
    /**
    * posix_profile block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#posix_profile TransferUser#posix_profile}
    */
    readonly posixProfile?: TransferUserPosixProfile;
  }
  export interface TransferUserHomeDirectoryMappings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#entry TransferUser#entry}
    */
    readonly entry: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#target TransferUser#target}
    */
    readonly target: string;
  }

  function transferUserHomeDirectoryMappingsToTerraform(struct?: TransferUserHomeDirectoryMappings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      entry: cdktf.stringToTerraform(struct!.entry),
      target: cdktf.stringToTerraform(struct!.target),
    }
  }

  export interface TransferUserPosixProfile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#gid TransferUser#gid}
    */
    readonly gid: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#secondary_gids TransferUser#secondary_gids}
    */
    readonly secondaryGids?: number[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html#uid TransferUser#uid}
    */
    readonly uid: number;
  }

  function transferUserPosixProfileToTerraform(struct?: TransferUserPosixProfileOutputReference | TransferUserPosixProfile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      gid: cdktf.numberToTerraform(struct!.gid),
      secondary_gids: cdktf.listMapper(cdktf.numberToTerraform)(struct!.secondaryGids),
      uid: cdktf.numberToTerraform(struct!.uid),
    }
  }

  export class TransferUserPosixProfileOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // gid - computed: false, optional: false, required: true
    private _gid?: number; 
    public get gid() {
      return this.getNumberAttribute('gid');
    }
    public set gid(value: number) {
      this._gid = value;
    }
    // Temporarily expose input value. Use with caution.
    public get gidInput() {
      return this._gid
    }

    // secondary_gids - computed: false, optional: true, required: false
    private _secondaryGids?: number[] | undefined; 
    public get secondaryGids() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('secondary_gids') as any;
    }
    public set secondaryGids(value: number[] | undefined) {
      this._secondaryGids = value;
    }
    public resetSecondaryGids() {
      this._secondaryGids = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondaryGidsInput() {
      return this._secondaryGids
    }

    // uid - computed: false, optional: false, required: true
    private _uid?: number; 
    public get uid() {
      return this.getNumberAttribute('uid');
    }
    public set uid(value: number) {
      this._uid = value;
    }
    // Temporarily expose input value. Use with caution.
    public get uidInput() {
      return this._uid
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html aws_transfer_user}
  */
  export class TransferUser extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_transfer_user";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html aws_transfer_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TransferUserConfig
    */
    public constructor(scope: Construct, id: string, config: TransferUserConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_transfer_user',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._homeDirectory = config.homeDirectory;
      this._homeDirectoryType = config.homeDirectoryType;
      this._policy = config.policy;
      this._role = config.role;
      this._serverId = config.serverId;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._userName = config.userName;
      this._homeDirectoryMappings = config.homeDirectoryMappings;
      this._posixProfile = config.posixProfile;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // home_directory - computed: false, optional: true, required: false
    private _homeDirectory?: string | undefined; 
    public get homeDirectory() {
      return this.getStringAttribute('home_directory');
    }
    public set homeDirectory(value: string | undefined) {
      this._homeDirectory = value;
    }
    public resetHomeDirectory() {
      this._homeDirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get homeDirectoryInput() {
      return this._homeDirectory
    }

    // home_directory_type - computed: false, optional: true, required: false
    private _homeDirectoryType?: string | undefined; 
    public get homeDirectoryType() {
      return this.getStringAttribute('home_directory_type');
    }
    public set homeDirectoryType(value: string | undefined) {
      this._homeDirectoryType = value;
    }
    public resetHomeDirectoryType() {
      this._homeDirectoryType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get homeDirectoryTypeInput() {
      return this._homeDirectoryType
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // policy - computed: false, optional: true, required: false
    private _policy?: string | undefined; 
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string | undefined) {
      this._policy = value;
    }
    public resetPolicy() {
      this._policy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // role - computed: false, optional: false, required: true
    private _role?: string; 
    public get role() {
      return this.getStringAttribute('role');
    }
    public set role(value: string) {
      this._role = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleInput() {
      return this._role
    }

    // server_id - computed: false, optional: false, required: true
    private _serverId?: string; 
    public get serverId() {
      return this.getStringAttribute('server_id');
    }
    public set serverId(value: string) {
      this._serverId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serverIdInput() {
      return this._serverId
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

    // user_name - computed: false, optional: false, required: true
    private _userName?: string; 
    public get userName() {
      return this.getStringAttribute('user_name');
    }
    public set userName(value: string) {
      this._userName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userNameInput() {
      return this._userName
    }

    // home_directory_mappings - computed: false, optional: true, required: false
    private _homeDirectoryMappings?: TransferUserHomeDirectoryMappings[] | undefined; 
    public get homeDirectoryMappings() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('home_directory_mappings') as any;
    }
    public set homeDirectoryMappings(value: TransferUserHomeDirectoryMappings[] | undefined) {
      this._homeDirectoryMappings = value;
    }
    public resetHomeDirectoryMappings() {
      this._homeDirectoryMappings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get homeDirectoryMappingsInput() {
      return this._homeDirectoryMappings
    }

    // posix_profile - computed: false, optional: true, required: false
    private _posixProfile?: TransferUserPosixProfile | undefined; 
    private __posixProfileOutput = new TransferUserPosixProfileOutputReference(this as any, "posix_profile", true);
    public get posixProfile() {
      return this.__posixProfileOutput;
    }
    public putPosixProfile(value: TransferUserPosixProfile | undefined) {
      this._posixProfile = value;
    }
    public resetPosixProfile() {
      this._posixProfile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get posixProfileInput() {
      return this._posixProfile
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        home_directory: cdktf.stringToTerraform(this._homeDirectory),
        home_directory_type: cdktf.stringToTerraform(this._homeDirectoryType),
        policy: cdktf.stringToTerraform(this._policy),
        role: cdktf.stringToTerraform(this._role),
        server_id: cdktf.stringToTerraform(this._serverId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        user_name: cdktf.stringToTerraform(this._userName),
        home_directory_mappings: cdktf.listMapper(transferUserHomeDirectoryMappingsToTerraform)(this._homeDirectoryMappings),
        posix_profile: transferUserPosixProfileToTerraform(this._posixProfile),
      };
    }
  }
  export interface DataAwsTransferServerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/transfer_server.html#server_id DataAwsTransferServer#server_id}
    */
    readonly serverId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/transfer_server.html aws_transfer_server}
  */
  export class DataAwsTransferServer extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_transfer_server";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/transfer_server.html aws_transfer_server} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsTransferServerConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsTransferServerConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_transfer_server',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._serverId = config.serverId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // certificate - computed: true, optional: false, required: false
    public get certificate() {
      return this.getStringAttribute('certificate');
    }

    // domain - computed: true, optional: false, required: false
    public get domain() {
      return this.getStringAttribute('domain');
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
      return this.getStringAttribute('endpoint');
    }

    // endpoint_type - computed: true, optional: false, required: false
    public get endpointType() {
      return this.getStringAttribute('endpoint_type');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // identity_provider_type - computed: true, optional: false, required: false
    public get identityProviderType() {
      return this.getStringAttribute('identity_provider_type');
    }

    // invocation_role - computed: true, optional: false, required: false
    public get invocationRole() {
      return this.getStringAttribute('invocation_role');
    }

    // logging_role - computed: true, optional: false, required: false
    public get loggingRole() {
      return this.getStringAttribute('logging_role');
    }

    // protocols - computed: true, optional: false, required: false
    public get protocols() {
      return this.getListAttribute('protocols');
    }

    // security_policy_name - computed: true, optional: false, required: false
    public get securityPolicyName() {
      return this.getStringAttribute('security_policy_name');
    }

    // server_id - computed: false, optional: false, required: true
    private _serverId?: string; 
    public get serverId() {
      return this.getStringAttribute('server_id');
    }
    public set serverId(value: string) {
      this._serverId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serverIdInput() {
      return this._serverId
    }

    // url - computed: true, optional: false, required: false
    public get url() {
      return this.getStringAttribute('url');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        server_id: cdktf.stringToTerraform(this._serverId),
      };
    }
  }
}
