// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic Kubernetes Service
*/
export namespace EKS {
  export interface EksAddonConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html#addon_name EksAddon#addon_name}
    */
    readonly addonName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html#addon_version EksAddon#addon_version}
    */
    readonly addonVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html#cluster_name EksAddon#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html#resolve_conflicts EksAddon#resolve_conflicts}
    */
    readonly resolveConflicts?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html#service_account_role_arn EksAddon#service_account_role_arn}
    */
    readonly serviceAccountRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html#tags EksAddon#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html#tags_all EksAddon#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html aws_eks_addon}
  */
  export class EksAddon extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_eks_addon";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html aws_eks_addon} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksAddonConfig
    */
    public constructor(scope: Construct, id: string, config: EksAddonConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_eks_addon',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._addonName = config.addonName;
      this._addonVersion = config.addonVersion;
      this._clusterName = config.clusterName;
      this._resolveConflicts = config.resolveConflicts;
      this._serviceAccountRoleArn = config.serviceAccountRoleArn;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // addon_name - computed: false, optional: false, required: true
    private _addonName?: string; 
    public get addonName() {
      return this.getStringAttribute('addon_name');
    }
    public set addonName(value: string) {
      this._addonName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get addonNameInput() {
      return this._addonName
    }

    // addon_version - computed: true, optional: true, required: false
    private _addonVersion?: string | undefined; 
    public get addonVersion() {
      return this.getStringAttribute('addon_version');
    }
    public set addonVersion(value: string | undefined) {
      this._addonVersion = value;
    }
    public resetAddonVersion() {
      this._addonVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addonVersionInput() {
      return this._addonVersion
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cluster_name - computed: false, optional: false, required: true
    private _clusterName?: string; 
    public get clusterName() {
      return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
      this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
      return this._clusterName
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
      return this.getStringAttribute('created_at');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // modified_at - computed: true, optional: false, required: false
    public get modifiedAt() {
      return this.getStringAttribute('modified_at');
    }

    // resolve_conflicts - computed: false, optional: true, required: false
    private _resolveConflicts?: string | undefined; 
    public get resolveConflicts() {
      return this.getStringAttribute('resolve_conflicts');
    }
    public set resolveConflicts(value: string | undefined) {
      this._resolveConflicts = value;
    }
    public resetResolveConflicts() {
      this._resolveConflicts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resolveConflictsInput() {
      return this._resolveConflicts
    }

    // service_account_role_arn - computed: false, optional: true, required: false
    private _serviceAccountRoleArn?: string | undefined; 
    public get serviceAccountRoleArn() {
      return this.getStringAttribute('service_account_role_arn');
    }
    public set serviceAccountRoleArn(value: string | undefined) {
      this._serviceAccountRoleArn = value;
    }
    public resetServiceAccountRoleArn() {
      this._serviceAccountRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceAccountRoleArnInput() {
      return this._serviceAccountRoleArn
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        addon_name: cdktf.stringToTerraform(this._addonName),
        addon_version: cdktf.stringToTerraform(this._addonVersion),
        cluster_name: cdktf.stringToTerraform(this._clusterName),
        resolve_conflicts: cdktf.stringToTerraform(this._resolveConflicts),
        service_account_role_arn: cdktf.stringToTerraform(this._serviceAccountRoleArn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface EksClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#enabled_cluster_log_types EksCluster#enabled_cluster_log_types}
    */
    readonly enabledClusterLogTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#name EksCluster#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#role_arn EksCluster#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#tags EksCluster#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#tags_all EksCluster#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#version EksCluster#version}
    */
    readonly version?: string;
    /**
    * encryption_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#encryption_config EksCluster#encryption_config}
    */
    readonly encryptionConfig?: EksClusterEncryptionConfig;
    /**
    * kubernetes_network_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#kubernetes_network_config EksCluster#kubernetes_network_config}
    */
    readonly kubernetesNetworkConfig?: EksClusterKubernetesNetworkConfig;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#timeouts EksCluster#timeouts}
    */
    readonly timeouts?: EksClusterTimeouts;
    /**
    * vpc_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#vpc_config EksCluster#vpc_config}
    */
    readonly vpcConfig: EksClusterVpcConfig;
  }
  export class EksClusterCertificateAuthority extends cdktf.ComplexComputedList {

    // data - computed: true, optional: false, required: false
    public get data() {
      return this.getStringAttribute('data');
    }
  }
  export class EksClusterIdentityOidc extends cdktf.ComplexComputedList {

    // issuer - computed: true, optional: false, required: false
    public get issuer() {
      return this.getStringAttribute('issuer');
    }
  }
  export class EksClusterIdentity extends cdktf.ComplexComputedList {

    // oidc - computed: true, optional: false, required: false
    public get oidc() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('oidc') as any;
    }
  }
  export interface EksClusterEncryptionConfigProvider {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#key_arn EksCluster#key_arn}
    */
    readonly keyArn: string;
  }

  function eksClusterEncryptionConfigProviderToTerraform(struct?: EksClusterEncryptionConfigProviderOutputReference | EksClusterEncryptionConfigProvider): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      key_arn: cdktf.stringToTerraform(struct!.keyArn),
    }
  }

  export class EksClusterEncryptionConfigProviderOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // key_arn - computed: false, optional: false, required: true
    private _keyArn?: string; 
    public get keyArn() {
      return this.getStringAttribute('key_arn');
    }
    public set keyArn(value: string) {
      this._keyArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyArnInput() {
      return this._keyArn
    }
  }
  export interface EksClusterEncryptionConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#resources EksCluster#resources}
    */
    readonly resources: string[];
    /**
    * provider block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#provider EksCluster#provider}
    */
    readonly provider: EksClusterEncryptionConfigProvider;
  }

  function eksClusterEncryptionConfigToTerraform(struct?: EksClusterEncryptionConfigOutputReference | EksClusterEncryptionConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
      provider: eksClusterEncryptionConfigProviderToTerraform(struct!.provider),
    }
  }

  export class EksClusterEncryptionConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // resources - computed: false, optional: false, required: true
    private _resources?: string[]; 
    public get resources() {
      return this.getListAttribute('resources');
    }
    public set resources(value: string[]) {
      this._resources = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcesInput() {
      return this._resources
    }

    // provider - computed: false, optional: false, required: true
    private _provider?: EksClusterEncryptionConfigProvider; 
    private __providerOutput = new EksClusterEncryptionConfigProviderOutputReference(this as any, "provider", true);
    public get provider() {
      return this.__providerOutput;
    }
    public putProvider(value: EksClusterEncryptionConfigProvider) {
      this._provider = value;
    }
    // Temporarily expose input value. Use with caution.
    public get providerInput() {
      return this._provider
    }
  }
  export interface EksClusterKubernetesNetworkConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#service_ipv4_cidr EksCluster#service_ipv4_cidr}
    */
    readonly serviceIpv4Cidr?: string;
  }

  function eksClusterKubernetesNetworkConfigToTerraform(struct?: EksClusterKubernetesNetworkConfigOutputReference | EksClusterKubernetesNetworkConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      service_ipv4_cidr: cdktf.stringToTerraform(struct!.serviceIpv4Cidr),
    }
  }

  export class EksClusterKubernetesNetworkConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // service_ipv4_cidr - computed: true, optional: true, required: false
    private _serviceIpv4Cidr?: string | undefined; 
    public get serviceIpv4Cidr() {
      return this.getStringAttribute('service_ipv4_cidr');
    }
    public set serviceIpv4Cidr(value: string | undefined) {
      this._serviceIpv4Cidr = value;
    }
    public resetServiceIpv4Cidr() {
      this._serviceIpv4Cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceIpv4CidrInput() {
      return this._serviceIpv4Cidr
    }
  }
  export interface EksClusterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#create EksCluster#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#delete EksCluster#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#update EksCluster#update}
    */
    readonly update?: string;
  }

  function eksClusterTimeoutsToTerraform(struct?: EksClusterTimeoutsOutputReference | EksClusterTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class EksClusterTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }
  export interface EksClusterVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#endpoint_private_access EksCluster#endpoint_private_access}
    */
    readonly endpointPrivateAccess?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#endpoint_public_access EksCluster#endpoint_public_access}
    */
    readonly endpointPublicAccess?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#public_access_cidrs EksCluster#public_access_cidrs}
    */
    readonly publicAccessCidrs?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#security_group_ids EksCluster#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#subnet_ids EksCluster#subnet_ids}
    */
    readonly subnetIds: string[];
  }

  function eksClusterVpcConfigToTerraform(struct?: EksClusterVpcConfigOutputReference | EksClusterVpcConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      endpoint_private_access: cdktf.booleanToTerraform(struct!.endpointPrivateAccess),
      endpoint_public_access: cdktf.booleanToTerraform(struct!.endpointPublicAccess),
      public_access_cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct!.publicAccessCidrs),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
    }
  }

  export class EksClusterVpcConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // endpoint_private_access - computed: false, optional: true, required: false
    private _endpointPrivateAccess?: boolean | cdktf.IResolvable | undefined; 
    public get endpointPrivateAccess() {
      return this.getBooleanAttribute('endpoint_private_access') as any;
    }
    public set endpointPrivateAccess(value: boolean | cdktf.IResolvable | undefined) {
      this._endpointPrivateAccess = value;
    }
    public resetEndpointPrivateAccess() {
      this._endpointPrivateAccess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointPrivateAccessInput() {
      return this._endpointPrivateAccess
    }

    // endpoint_public_access - computed: false, optional: true, required: false
    private _endpointPublicAccess?: boolean | cdktf.IResolvable | undefined; 
    public get endpointPublicAccess() {
      return this.getBooleanAttribute('endpoint_public_access') as any;
    }
    public set endpointPublicAccess(value: boolean | cdktf.IResolvable | undefined) {
      this._endpointPublicAccess = value;
    }
    public resetEndpointPublicAccess() {
      this._endpointPublicAccess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointPublicAccessInput() {
      return this._endpointPublicAccess
    }

    // public_access_cidrs - computed: true, optional: true, required: false
    private _publicAccessCidrs?: string[] | undefined; 
    public get publicAccessCidrs() {
      return this.getListAttribute('public_access_cidrs');
    }
    public set publicAccessCidrs(value: string[] | undefined) {
      this._publicAccessCidrs = value;
    }
    public resetPublicAccessCidrs() {
      this._publicAccessCidrs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicAccessCidrsInput() {
      return this._publicAccessCidrs
    }

    // security_group_ids - computed: false, optional: true, required: false
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
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html aws_eks_cluster}
  */
  export class EksCluster extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_eks_cluster";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html aws_eks_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksClusterConfig
    */
    public constructor(scope: Construct, id: string, config: EksClusterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_eks_cluster',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._enabledClusterLogTypes = config.enabledClusterLogTypes;
      this._name = config.name;
      this._roleArn = config.roleArn;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._version = config.version;
      this._encryptionConfig = config.encryptionConfig;
      this._kubernetesNetworkConfig = config.kubernetesNetworkConfig;
      this._timeouts = config.timeouts;
      this._vpcConfig = config.vpcConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // certificate_authority - computed: true, optional: false, required: false
    public certificateAuthority(index: string) {
      return new EksClusterCertificateAuthority(this, 'certificate_authority', index);
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
      return this.getStringAttribute('created_at');
    }

    // enabled_cluster_log_types - computed: false, optional: true, required: false
    private _enabledClusterLogTypes?: string[] | undefined; 
    public get enabledClusterLogTypes() {
      return this.getListAttribute('enabled_cluster_log_types');
    }
    public set enabledClusterLogTypes(value: string[] | undefined) {
      this._enabledClusterLogTypes = value;
    }
    public resetEnabledClusterLogTypes() {
      this._enabledClusterLogTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledClusterLogTypesInput() {
      return this._enabledClusterLogTypes
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
      return this.getStringAttribute('endpoint');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // identity - computed: true, optional: false, required: false
    public identity(index: string) {
      return new EksClusterIdentity(this, 'identity', index);
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

    // platform_version - computed: true, optional: false, required: false
    public get platformVersion() {
      return this.getStringAttribute('platform_version');
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
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

    // version - computed: true, optional: true, required: false
    private _version?: string | undefined; 
    public get version() {
      return this.getStringAttribute('version');
    }
    public set version(value: string | undefined) {
      this._version = value;
    }
    public resetVersion() {
      this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
      return this._version
    }

    // encryption_config - computed: false, optional: true, required: false
    private _encryptionConfig?: EksClusterEncryptionConfig | undefined; 
    private __encryptionConfigOutput = new EksClusterEncryptionConfigOutputReference(this as any, "encryption_config", true);
    public get encryptionConfig() {
      return this.__encryptionConfigOutput;
    }
    public putEncryptionConfig(value: EksClusterEncryptionConfig | undefined) {
      this._encryptionConfig = value;
    }
    public resetEncryptionConfig() {
      this._encryptionConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigInput() {
      return this._encryptionConfig
    }

    // kubernetes_network_config - computed: false, optional: true, required: false
    private _kubernetesNetworkConfig?: EksClusterKubernetesNetworkConfig | undefined; 
    private __kubernetesNetworkConfigOutput = new EksClusterKubernetesNetworkConfigOutputReference(this as any, "kubernetes_network_config", true);
    public get kubernetesNetworkConfig() {
      return this.__kubernetesNetworkConfigOutput;
    }
    public putKubernetesNetworkConfig(value: EksClusterKubernetesNetworkConfig | undefined) {
      this._kubernetesNetworkConfig = value;
    }
    public resetKubernetesNetworkConfig() {
      this._kubernetesNetworkConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kubernetesNetworkConfigInput() {
      return this._kubernetesNetworkConfig
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: EksClusterTimeouts | undefined; 
    private __timeoutsOutput = new EksClusterTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: EksClusterTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // vpc_config - computed: false, optional: false, required: true
    private _vpcConfig?: EksClusterVpcConfig; 
    private __vpcConfigOutput = new EksClusterVpcConfigOutputReference(this as any, "vpc_config", true);
    public get vpcConfig() {
      return this.__vpcConfigOutput;
    }
    public putVpcConfig(value: EksClusterVpcConfig) {
      this._vpcConfig = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConfigInput() {
      return this._vpcConfig
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        enabled_cluster_log_types: cdktf.listMapper(cdktf.stringToTerraform)(this._enabledClusterLogTypes),
        name: cdktf.stringToTerraform(this._name),
        role_arn: cdktf.stringToTerraform(this._roleArn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        version: cdktf.stringToTerraform(this._version),
        encryption_config: eksClusterEncryptionConfigToTerraform(this._encryptionConfig),
        kubernetes_network_config: eksClusterKubernetesNetworkConfigToTerraform(this._kubernetesNetworkConfig),
        timeouts: eksClusterTimeoutsToTerraform(this._timeouts),
        vpc_config: eksClusterVpcConfigToTerraform(this._vpcConfig),
      };
    }
  }
  export interface EksFargateProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#cluster_name EksFargateProfile#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#fargate_profile_name EksFargateProfile#fargate_profile_name}
    */
    readonly fargateProfileName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#pod_execution_role_arn EksFargateProfile#pod_execution_role_arn}
    */
    readonly podExecutionRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#subnet_ids EksFargateProfile#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#tags EksFargateProfile#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#tags_all EksFargateProfile#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * selector block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#selector EksFargateProfile#selector}
    */
    readonly selector: EksFargateProfileSelector[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#timeouts EksFargateProfile#timeouts}
    */
    readonly timeouts?: EksFargateProfileTimeouts;
  }
  export interface EksFargateProfileSelector {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#labels EksFargateProfile#labels}
    */
    readonly labels?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#namespace EksFargateProfile#namespace}
    */
    readonly namespace: string;
  }

  function eksFargateProfileSelectorToTerraform(struct?: EksFargateProfileSelector): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
      namespace: cdktf.stringToTerraform(struct!.namespace),
    }
  }

  export interface EksFargateProfileTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#create EksFargateProfile#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#delete EksFargateProfile#delete}
    */
    readonly delete?: string;
  }

  function eksFargateProfileTimeoutsToTerraform(struct?: EksFargateProfileTimeoutsOutputReference | EksFargateProfileTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class EksFargateProfileTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html aws_eks_fargate_profile}
  */
  export class EksFargateProfile extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_eks_fargate_profile";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html aws_eks_fargate_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksFargateProfileConfig
    */
    public constructor(scope: Construct, id: string, config: EksFargateProfileConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_eks_fargate_profile',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterName = config.clusterName;
      this._fargateProfileName = config.fargateProfileName;
      this._podExecutionRoleArn = config.podExecutionRoleArn;
      this._subnetIds = config.subnetIds;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._selector = config.selector;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cluster_name - computed: false, optional: false, required: true
    private _clusterName?: string; 
    public get clusterName() {
      return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
      this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
      return this._clusterName
    }

    // fargate_profile_name - computed: false, optional: false, required: true
    private _fargateProfileName?: string; 
    public get fargateProfileName() {
      return this.getStringAttribute('fargate_profile_name');
    }
    public set fargateProfileName(value: string) {
      this._fargateProfileName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fargateProfileNameInput() {
      return this._fargateProfileName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // pod_execution_role_arn - computed: false, optional: false, required: true
    private _podExecutionRoleArn?: string; 
    public get podExecutionRoleArn() {
      return this.getStringAttribute('pod_execution_role_arn');
    }
    public set podExecutionRoleArn(value: string) {
      this._podExecutionRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get podExecutionRoleArnInput() {
      return this._podExecutionRoleArn
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
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

    // selector - computed: false, optional: false, required: true
    private _selector?: EksFargateProfileSelector[]; 
    public get selector() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('selector') as any;
    }
    public set selector(value: EksFargateProfileSelector[]) {
      this._selector = value;
    }
    // Temporarily expose input value. Use with caution.
    public get selectorInput() {
      return this._selector
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: EksFargateProfileTimeouts | undefined; 
    private __timeoutsOutput = new EksFargateProfileTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: EksFargateProfileTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster_name: cdktf.stringToTerraform(this._clusterName),
        fargate_profile_name: cdktf.stringToTerraform(this._fargateProfileName),
        pod_execution_role_arn: cdktf.stringToTerraform(this._podExecutionRoleArn),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        selector: cdktf.listMapper(eksFargateProfileSelectorToTerraform)(this._selector),
        timeouts: eksFargateProfileTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface EksIdentityProviderConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#cluster_name EksIdentityProviderConfig#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#tags EksIdentityProviderConfig#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#tags_all EksIdentityProviderConfig#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * oidc block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#oidc EksIdentityProviderConfig#oidc}
    */
    readonly oidc: EksIdentityProviderConfigOidc;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#timeouts EksIdentityProviderConfig#timeouts}
    */
    readonly timeouts?: EksIdentityProviderConfigTimeouts;
  }
  export interface EksIdentityProviderConfigOidc {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#client_id EksIdentityProviderConfig#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#groups_claim EksIdentityProviderConfig#groups_claim}
    */
    readonly groupsClaim?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#groups_prefix EksIdentityProviderConfig#groups_prefix}
    */
    readonly groupsPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#identity_provider_config_name EksIdentityProviderConfig#identity_provider_config_name}
    */
    readonly identityProviderConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#issuer_url EksIdentityProviderConfig#issuer_url}
    */
    readonly issuerUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#required_claims EksIdentityProviderConfig#required_claims}
    */
    readonly requiredClaims?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#username_claim EksIdentityProviderConfig#username_claim}
    */
    readonly usernameClaim?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#username_prefix EksIdentityProviderConfig#username_prefix}
    */
    readonly usernamePrefix?: string;
  }

  function eksIdentityProviderConfigOidcToTerraform(struct?: EksIdentityProviderConfigOidcOutputReference | EksIdentityProviderConfigOidc): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      client_id: cdktf.stringToTerraform(struct!.clientId),
      groups_claim: cdktf.stringToTerraform(struct!.groupsClaim),
      groups_prefix: cdktf.stringToTerraform(struct!.groupsPrefix),
      identity_provider_config_name: cdktf.stringToTerraform(struct!.identityProviderConfigName),
      issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
      required_claims: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.requiredClaims),
      username_claim: cdktf.stringToTerraform(struct!.usernameClaim),
      username_prefix: cdktf.stringToTerraform(struct!.usernamePrefix),
    }
  }

  export class EksIdentityProviderConfigOidcOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // client_id - computed: false, optional: false, required: true
    private _clientId?: string; 
    public get clientId() {
      return this.getStringAttribute('client_id');
    }
    public set clientId(value: string) {
      this._clientId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clientIdInput() {
      return this._clientId
    }

    // groups_claim - computed: false, optional: true, required: false
    private _groupsClaim?: string | undefined; 
    public get groupsClaim() {
      return this.getStringAttribute('groups_claim');
    }
    public set groupsClaim(value: string | undefined) {
      this._groupsClaim = value;
    }
    public resetGroupsClaim() {
      this._groupsClaim = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupsClaimInput() {
      return this._groupsClaim
    }

    // groups_prefix - computed: false, optional: true, required: false
    private _groupsPrefix?: string | undefined; 
    public get groupsPrefix() {
      return this.getStringAttribute('groups_prefix');
    }
    public set groupsPrefix(value: string | undefined) {
      this._groupsPrefix = value;
    }
    public resetGroupsPrefix() {
      this._groupsPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupsPrefixInput() {
      return this._groupsPrefix
    }

    // identity_provider_config_name - computed: false, optional: false, required: true
    private _identityProviderConfigName?: string; 
    public get identityProviderConfigName() {
      return this.getStringAttribute('identity_provider_config_name');
    }
    public set identityProviderConfigName(value: string) {
      this._identityProviderConfigName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderConfigNameInput() {
      return this._identityProviderConfigName
    }

    // issuer_url - computed: false, optional: false, required: true
    private _issuerUrl?: string; 
    public get issuerUrl() {
      return this.getStringAttribute('issuer_url');
    }
    public set issuerUrl(value: string) {
      this._issuerUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    public get issuerUrlInput() {
      return this._issuerUrl
    }

    // required_claims - computed: false, optional: true, required: false
    private _requiredClaims?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get requiredClaims() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('required_claims') as any;
    }
    public set requiredClaims(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._requiredClaims = value;
    }
    public resetRequiredClaims() {
      this._requiredClaims = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredClaimsInput() {
      return this._requiredClaims
    }

    // username_claim - computed: false, optional: true, required: false
    private _usernameClaim?: string | undefined; 
    public get usernameClaim() {
      return this.getStringAttribute('username_claim');
    }
    public set usernameClaim(value: string | undefined) {
      this._usernameClaim = value;
    }
    public resetUsernameClaim() {
      this._usernameClaim = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameClaimInput() {
      return this._usernameClaim
    }

    // username_prefix - computed: false, optional: true, required: false
    private _usernamePrefix?: string | undefined; 
    public get usernamePrefix() {
      return this.getStringAttribute('username_prefix');
    }
    public set usernamePrefix(value: string | undefined) {
      this._usernamePrefix = value;
    }
    public resetUsernamePrefix() {
      this._usernamePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernamePrefixInput() {
      return this._usernamePrefix
    }
  }
  export interface EksIdentityProviderConfigTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#create EksIdentityProviderConfig#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#delete EksIdentityProviderConfig#delete}
    */
    readonly delete?: string;
  }

  function eksIdentityProviderConfigTimeoutsToTerraform(struct?: EksIdentityProviderConfigTimeoutsOutputReference | EksIdentityProviderConfigTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class EksIdentityProviderConfigTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html aws_eks_identity_provider_config}
  */
  export class EksIdentityProviderConfig extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_eks_identity_provider_config";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html aws_eks_identity_provider_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksIdentityProviderConfigConfig
    */
    public constructor(scope: Construct, id: string, config: EksIdentityProviderConfigConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_eks_identity_provider_config',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterName = config.clusterName;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._oidc = config.oidc;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cluster_name - computed: false, optional: false, required: true
    private _clusterName?: string; 
    public get clusterName() {
      return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
      this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
      return this._clusterName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
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

    // oidc - computed: false, optional: false, required: true
    private _oidc?: EksIdentityProviderConfigOidc; 
    private __oidcOutput = new EksIdentityProviderConfigOidcOutputReference(this as any, "oidc", true);
    public get oidc() {
      return this.__oidcOutput;
    }
    public putOidc(value: EksIdentityProviderConfigOidc) {
      this._oidc = value;
    }
    // Temporarily expose input value. Use with caution.
    public get oidcInput() {
      return this._oidc
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: EksIdentityProviderConfigTimeouts | undefined; 
    private __timeoutsOutput = new EksIdentityProviderConfigTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: EksIdentityProviderConfigTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster_name: cdktf.stringToTerraform(this._clusterName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        oidc: eksIdentityProviderConfigOidcToTerraform(this._oidc),
        timeouts: eksIdentityProviderConfigTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface EksNodeGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#ami_type EksNodeGroup#ami_type}
    */
    readonly amiType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#capacity_type EksNodeGroup#capacity_type}
    */
    readonly capacityType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#cluster_name EksNodeGroup#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#disk_size EksNodeGroup#disk_size}
    */
    readonly diskSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#force_update_version EksNodeGroup#force_update_version}
    */
    readonly forceUpdateVersion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#instance_types EksNodeGroup#instance_types}
    */
    readonly instanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#labels EksNodeGroup#labels}
    */
    readonly labels?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#node_group_name EksNodeGroup#node_group_name}
    */
    readonly nodeGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#node_group_name_prefix EksNodeGroup#node_group_name_prefix}
    */
    readonly nodeGroupNamePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#node_role_arn EksNodeGroup#node_role_arn}
    */
    readonly nodeRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#release_version EksNodeGroup#release_version}
    */
    readonly releaseVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#subnet_ids EksNodeGroup#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#tags EksNodeGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#tags_all EksNodeGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#version EksNodeGroup#version}
    */
    readonly version?: string;
    /**
    * launch_template block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#launch_template EksNodeGroup#launch_template}
    */
    readonly launchTemplate?: EksNodeGroupLaunchTemplate;
    /**
    * remote_access block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#remote_access EksNodeGroup#remote_access}
    */
    readonly remoteAccess?: EksNodeGroupRemoteAccess;
    /**
    * scaling_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#scaling_config EksNodeGroup#scaling_config}
    */
    readonly scalingConfig: EksNodeGroupScalingConfig;
    /**
    * taint block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#taint EksNodeGroup#taint}
    */
    readonly taint?: EksNodeGroupTaint[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#timeouts EksNodeGroup#timeouts}
    */
    readonly timeouts?: EksNodeGroupTimeouts;
    /**
    * update_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#update_config EksNodeGroup#update_config}
    */
    readonly updateConfig?: EksNodeGroupUpdateConfig;
  }
  export class EksNodeGroupResourcesAutoscalingGroups extends cdktf.ComplexComputedList {

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }
  }
  export class EksNodeGroupResources extends cdktf.ComplexComputedList {

    // autoscaling_groups - computed: true, optional: false, required: false
    public get autoscalingGroups() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('autoscaling_groups') as any;
    }

    // remote_access_security_group_id - computed: true, optional: false, required: false
    public get remoteAccessSecurityGroupId() {
      return this.getStringAttribute('remote_access_security_group_id');
    }
  }
  export interface EksNodeGroupLaunchTemplate {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#id EksNodeGroup#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#name EksNodeGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#version EksNodeGroup#version}
    */
    readonly version: string;
  }

  function eksNodeGroupLaunchTemplateToTerraform(struct?: EksNodeGroupLaunchTemplateOutputReference | EksNodeGroupLaunchTemplate): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      version: cdktf.stringToTerraform(struct!.version),
    }
  }

  export class EksNodeGroupLaunchTemplateOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // version - computed: false, optional: false, required: true
    private _version?: string; 
    public get version() {
      return this.getStringAttribute('version');
    }
    public set version(value: string) {
      this._version = value;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
      return this._version
    }
  }
  export interface EksNodeGroupRemoteAccess {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#ec2_ssh_key EksNodeGroup#ec2_ssh_key}
    */
    readonly ec2SshKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#source_security_group_ids EksNodeGroup#source_security_group_ids}
    */
    readonly sourceSecurityGroupIds?: string[];
  }

  function eksNodeGroupRemoteAccessToTerraform(struct?: EksNodeGroupRemoteAccessOutputReference | EksNodeGroupRemoteAccess): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      ec2_ssh_key: cdktf.stringToTerraform(struct!.ec2SshKey),
      source_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceSecurityGroupIds),
    }
  }

  export class EksNodeGroupRemoteAccessOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // ec2_ssh_key - computed: false, optional: true, required: false
    private _ec2SshKey?: string | undefined; 
    public get ec2SshKey() {
      return this.getStringAttribute('ec2_ssh_key');
    }
    public set ec2SshKey(value: string | undefined) {
      this._ec2SshKey = value;
    }
    public resetEc2SshKey() {
      this._ec2SshKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ec2SshKeyInput() {
      return this._ec2SshKey
    }

    // source_security_group_ids - computed: false, optional: true, required: false
    private _sourceSecurityGroupIds?: string[] | undefined; 
    public get sourceSecurityGroupIds() {
      return this.getListAttribute('source_security_group_ids');
    }
    public set sourceSecurityGroupIds(value: string[] | undefined) {
      this._sourceSecurityGroupIds = value;
    }
    public resetSourceSecurityGroupIds() {
      this._sourceSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceSecurityGroupIdsInput() {
      return this._sourceSecurityGroupIds
    }
  }
  export interface EksNodeGroupScalingConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#desired_size EksNodeGroup#desired_size}
    */
    readonly desiredSize: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#max_size EksNodeGroup#max_size}
    */
    readonly maxSize: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#min_size EksNodeGroup#min_size}
    */
    readonly minSize: number;
  }

  function eksNodeGroupScalingConfigToTerraform(struct?: EksNodeGroupScalingConfigOutputReference | EksNodeGroupScalingConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      desired_size: cdktf.numberToTerraform(struct!.desiredSize),
      max_size: cdktf.numberToTerraform(struct!.maxSize),
      min_size: cdktf.numberToTerraform(struct!.minSize),
    }
  }

  export class EksNodeGroupScalingConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // desired_size - computed: false, optional: false, required: true
    private _desiredSize?: number; 
    public get desiredSize() {
      return this.getNumberAttribute('desired_size');
    }
    public set desiredSize(value: number) {
      this._desiredSize = value;
    }
    // Temporarily expose input value. Use with caution.
    public get desiredSizeInput() {
      return this._desiredSize
    }

    // max_size - computed: false, optional: false, required: true
    private _maxSize?: number; 
    public get maxSize() {
      return this.getNumberAttribute('max_size');
    }
    public set maxSize(value: number) {
      this._maxSize = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxSizeInput() {
      return this._maxSize
    }

    // min_size - computed: false, optional: false, required: true
    private _minSize?: number; 
    public get minSize() {
      return this.getNumberAttribute('min_size');
    }
    public set minSize(value: number) {
      this._minSize = value;
    }
    // Temporarily expose input value. Use with caution.
    public get minSizeInput() {
      return this._minSize
    }
  }
  export interface EksNodeGroupTaint {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#effect EksNodeGroup#effect}
    */
    readonly effect: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#key EksNodeGroup#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#value EksNodeGroup#value}
    */
    readonly value?: string;
  }

  function eksNodeGroupTaintToTerraform(struct?: EksNodeGroupTaint): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      effect: cdktf.stringToTerraform(struct!.effect),
      key: cdktf.stringToTerraform(struct!.key),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface EksNodeGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#create EksNodeGroup#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#delete EksNodeGroup#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#update EksNodeGroup#update}
    */
    readonly update?: string;
  }

  function eksNodeGroupTimeoutsToTerraform(struct?: EksNodeGroupTimeoutsOutputReference | EksNodeGroupTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class EksNodeGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }
  export interface EksNodeGroupUpdateConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#max_unavailable EksNodeGroup#max_unavailable}
    */
    readonly maxUnavailable?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#max_unavailable_percentage EksNodeGroup#max_unavailable_percentage}
    */
    readonly maxUnavailablePercentage?: number;
  }

  function eksNodeGroupUpdateConfigToTerraform(struct?: EksNodeGroupUpdateConfigOutputReference | EksNodeGroupUpdateConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
      max_unavailable_percentage: cdktf.numberToTerraform(struct!.maxUnavailablePercentage),
    }
  }

  export class EksNodeGroupUpdateConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // max_unavailable - computed: false, optional: true, required: false
    private _maxUnavailable?: number | undefined; 
    public get maxUnavailable() {
      return this.getNumberAttribute('max_unavailable');
    }
    public set maxUnavailable(value: number | undefined) {
      this._maxUnavailable = value;
    }
    public resetMaxUnavailable() {
      this._maxUnavailable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxUnavailableInput() {
      return this._maxUnavailable
    }

    // max_unavailable_percentage - computed: false, optional: true, required: false
    private _maxUnavailablePercentage?: number | undefined; 
    public get maxUnavailablePercentage() {
      return this.getNumberAttribute('max_unavailable_percentage');
    }
    public set maxUnavailablePercentage(value: number | undefined) {
      this._maxUnavailablePercentage = value;
    }
    public resetMaxUnavailablePercentage() {
      this._maxUnavailablePercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxUnavailablePercentageInput() {
      return this._maxUnavailablePercentage
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html aws_eks_node_group}
  */
  export class EksNodeGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_eks_node_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html aws_eks_node_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksNodeGroupConfig
    */
    public constructor(scope: Construct, id: string, config: EksNodeGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_eks_node_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._amiType = config.amiType;
      this._capacityType = config.capacityType;
      this._clusterName = config.clusterName;
      this._diskSize = config.diskSize;
      this._forceUpdateVersion = config.forceUpdateVersion;
      this._instanceTypes = config.instanceTypes;
      this._labels = config.labels;
      this._nodeGroupName = config.nodeGroupName;
      this._nodeGroupNamePrefix = config.nodeGroupNamePrefix;
      this._nodeRoleArn = config.nodeRoleArn;
      this._releaseVersion = config.releaseVersion;
      this._subnetIds = config.subnetIds;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._version = config.version;
      this._launchTemplate = config.launchTemplate;
      this._remoteAccess = config.remoteAccess;
      this._scalingConfig = config.scalingConfig;
      this._taint = config.taint;
      this._timeouts = config.timeouts;
      this._updateConfig = config.updateConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // ami_type - computed: true, optional: true, required: false
    private _amiType?: string | undefined; 
    public get amiType() {
      return this.getStringAttribute('ami_type');
    }
    public set amiType(value: string | undefined) {
      this._amiType = value;
    }
    public resetAmiType() {
      this._amiType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amiTypeInput() {
      return this._amiType
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // capacity_type - computed: true, optional: true, required: false
    private _capacityType?: string | undefined; 
    public get capacityType() {
      return this.getStringAttribute('capacity_type');
    }
    public set capacityType(value: string | undefined) {
      this._capacityType = value;
    }
    public resetCapacityType() {
      this._capacityType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityTypeInput() {
      return this._capacityType
    }

    // cluster_name - computed: false, optional: false, required: true
    private _clusterName?: string; 
    public get clusterName() {
      return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
      this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
      return this._clusterName
    }

    // disk_size - computed: true, optional: true, required: false
    private _diskSize?: number | undefined; 
    public get diskSize() {
      return this.getNumberAttribute('disk_size');
    }
    public set diskSize(value: number | undefined) {
      this._diskSize = value;
    }
    public resetDiskSize() {
      this._diskSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get diskSizeInput() {
      return this._diskSize
    }

    // force_update_version - computed: false, optional: true, required: false
    private _forceUpdateVersion?: boolean | cdktf.IResolvable | undefined; 
    public get forceUpdateVersion() {
      return this.getBooleanAttribute('force_update_version') as any;
    }
    public set forceUpdateVersion(value: boolean | cdktf.IResolvable | undefined) {
      this._forceUpdateVersion = value;
    }
    public resetForceUpdateVersion() {
      this._forceUpdateVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceUpdateVersionInput() {
      return this._forceUpdateVersion
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_types - computed: true, optional: true, required: false
    private _instanceTypes?: string[] | undefined; 
    public get instanceTypes() {
      return this.getListAttribute('instance_types');
    }
    public set instanceTypes(value: string[] | undefined) {
      this._instanceTypes = value;
    }
    public resetInstanceTypes() {
      this._instanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypesInput() {
      return this._instanceTypes
    }

    // labels - computed: false, optional: true, required: false
    private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get labels() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('labels') as any;
    }
    public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._labels = value;
    }
    public resetLabels() {
      this._labels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelsInput() {
      return this._labels
    }

    // node_group_name - computed: true, optional: true, required: false
    private _nodeGroupName?: string | undefined; 
    public get nodeGroupName() {
      return this.getStringAttribute('node_group_name');
    }
    public set nodeGroupName(value: string | undefined) {
      this._nodeGroupName = value;
    }
    public resetNodeGroupName() {
      this._nodeGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeGroupNameInput() {
      return this._nodeGroupName
    }

    // node_group_name_prefix - computed: true, optional: true, required: false
    private _nodeGroupNamePrefix?: string | undefined; 
    public get nodeGroupNamePrefix() {
      return this.getStringAttribute('node_group_name_prefix');
    }
    public set nodeGroupNamePrefix(value: string | undefined) {
      this._nodeGroupNamePrefix = value;
    }
    public resetNodeGroupNamePrefix() {
      this._nodeGroupNamePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeGroupNamePrefixInput() {
      return this._nodeGroupNamePrefix
    }

    // node_role_arn - computed: false, optional: false, required: true
    private _nodeRoleArn?: string; 
    public get nodeRoleArn() {
      return this.getStringAttribute('node_role_arn');
    }
    public set nodeRoleArn(value: string) {
      this._nodeRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeRoleArnInput() {
      return this._nodeRoleArn
    }

    // release_version - computed: true, optional: true, required: false
    private _releaseVersion?: string | undefined; 
    public get releaseVersion() {
      return this.getStringAttribute('release_version');
    }
    public set releaseVersion(value: string | undefined) {
      this._releaseVersion = value;
    }
    public resetReleaseVersion() {
      this._releaseVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get releaseVersionInput() {
      return this._releaseVersion
    }

    // resources - computed: true, optional: false, required: false
    public resources(index: string) {
      return new EksNodeGroupResources(this, 'resources', index);
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
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

    // version - computed: true, optional: true, required: false
    private _version?: string | undefined; 
    public get version() {
      return this.getStringAttribute('version');
    }
    public set version(value: string | undefined) {
      this._version = value;
    }
    public resetVersion() {
      this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
      return this._version
    }

    // launch_template - computed: false, optional: true, required: false
    private _launchTemplate?: EksNodeGroupLaunchTemplate | undefined; 
    private __launchTemplateOutput = new EksNodeGroupLaunchTemplateOutputReference(this as any, "launch_template", true);
    public get launchTemplate() {
      return this.__launchTemplateOutput;
    }
    public putLaunchTemplate(value: EksNodeGroupLaunchTemplate | undefined) {
      this._launchTemplate = value;
    }
    public resetLaunchTemplate() {
      this._launchTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateInput() {
      return this._launchTemplate
    }

    // remote_access - computed: false, optional: true, required: false
    private _remoteAccess?: EksNodeGroupRemoteAccess | undefined; 
    private __remoteAccessOutput = new EksNodeGroupRemoteAccessOutputReference(this as any, "remote_access", true);
    public get remoteAccess() {
      return this.__remoteAccessOutput;
    }
    public putRemoteAccess(value: EksNodeGroupRemoteAccess | undefined) {
      this._remoteAccess = value;
    }
    public resetRemoteAccess() {
      this._remoteAccess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get remoteAccessInput() {
      return this._remoteAccess
    }

    // scaling_config - computed: false, optional: false, required: true
    private _scalingConfig?: EksNodeGroupScalingConfig; 
    private __scalingConfigOutput = new EksNodeGroupScalingConfigOutputReference(this as any, "scaling_config", true);
    public get scalingConfig() {
      return this.__scalingConfigOutput;
    }
    public putScalingConfig(value: EksNodeGroupScalingConfig) {
      this._scalingConfig = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingConfigInput() {
      return this._scalingConfig
    }

    // taint - computed: false, optional: true, required: false
    private _taint?: EksNodeGroupTaint[] | undefined; 
    public get taint() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('taint') as any;
    }
    public set taint(value: EksNodeGroupTaint[] | undefined) {
      this._taint = value;
    }
    public resetTaint() {
      this._taint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taintInput() {
      return this._taint
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: EksNodeGroupTimeouts | undefined; 
    private __timeoutsOutput = new EksNodeGroupTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: EksNodeGroupTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // update_config - computed: false, optional: true, required: false
    private _updateConfig?: EksNodeGroupUpdateConfig | undefined; 
    private __updateConfigOutput = new EksNodeGroupUpdateConfigOutputReference(this as any, "update_config", true);
    public get updateConfig() {
      return this.__updateConfigOutput;
    }
    public putUpdateConfig(value: EksNodeGroupUpdateConfig | undefined) {
      this._updateConfig = value;
    }
    public resetUpdateConfig() {
      this._updateConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateConfigInput() {
      return this._updateConfig
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        ami_type: cdktf.stringToTerraform(this._amiType),
        capacity_type: cdktf.stringToTerraform(this._capacityType),
        cluster_name: cdktf.stringToTerraform(this._clusterName),
        disk_size: cdktf.numberToTerraform(this._diskSize),
        force_update_version: cdktf.booleanToTerraform(this._forceUpdateVersion),
        instance_types: cdktf.listMapper(cdktf.stringToTerraform)(this._instanceTypes),
        labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
        node_group_name: cdktf.stringToTerraform(this._nodeGroupName),
        node_group_name_prefix: cdktf.stringToTerraform(this._nodeGroupNamePrefix),
        node_role_arn: cdktf.stringToTerraform(this._nodeRoleArn),
        release_version: cdktf.stringToTerraform(this._releaseVersion),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        version: cdktf.stringToTerraform(this._version),
        launch_template: eksNodeGroupLaunchTemplateToTerraform(this._launchTemplate),
        remote_access: eksNodeGroupRemoteAccessToTerraform(this._remoteAccess),
        scaling_config: eksNodeGroupScalingConfigToTerraform(this._scalingConfig),
        taint: cdktf.listMapper(eksNodeGroupTaintToTerraform)(this._taint),
        timeouts: eksNodeGroupTimeoutsToTerraform(this._timeouts),
        update_config: eksNodeGroupUpdateConfigToTerraform(this._updateConfig),
      };
    }
  }
  export interface DataAwsEksAddonConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html#addon_name DataAwsEksAddon#addon_name}
    */
    readonly addonName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html#cluster_name DataAwsEksAddon#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html#tags DataAwsEksAddon#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html aws_eks_addon}
  */
  export class DataAwsEksAddon extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_eks_addon";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html aws_eks_addon} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEksAddonConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsEksAddonConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_eks_addon',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._addonName = config.addonName;
      this._clusterName = config.clusterName;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // addon_name - computed: false, optional: false, required: true
    private _addonName?: string; 
    public get addonName() {
      return this.getStringAttribute('addon_name');
    }
    public set addonName(value: string) {
      this._addonName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get addonNameInput() {
      return this._addonName
    }

    // addon_version - computed: true, optional: false, required: false
    public get addonVersion() {
      return this.getStringAttribute('addon_version');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cluster_name - computed: false, optional: false, required: true
    private _clusterName?: string; 
    public get clusterName() {
      return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
      this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
      return this._clusterName
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
      return this.getStringAttribute('created_at');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // modified_at - computed: true, optional: false, required: false
    public get modifiedAt() {
      return this.getStringAttribute('modified_at');
    }

    // service_account_role_arn - computed: true, optional: false, required: false
    public get serviceAccountRoleArn() {
      return this.getStringAttribute('service_account_role_arn');
    }

    // tags - computed: true, optional: true, required: false
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        addon_name: cdktf.stringToTerraform(this._addonName),
        cluster_name: cdktf.stringToTerraform(this._clusterName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsEksClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster.html#name DataAwsEksCluster#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster.html#tags DataAwsEksCluster#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsEksClusterCertificateAuthority extends cdktf.ComplexComputedList {

    // data - computed: true, optional: false, required: false
    public get data() {
      return this.getStringAttribute('data');
    }
  }
  export class DataAwsEksClusterIdentityOidc extends cdktf.ComplexComputedList {

    // issuer - computed: true, optional: false, required: false
    public get issuer() {
      return this.getStringAttribute('issuer');
    }
  }
  export class DataAwsEksClusterIdentity extends cdktf.ComplexComputedList {

    // oidc - computed: true, optional: false, required: false
    public get oidc() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('oidc') as any;
    }
  }
  export class DataAwsEksClusterKubernetesNetworkConfig extends cdktf.ComplexComputedList {

    // service_ipv4_cidr - computed: true, optional: false, required: false
    public get serviceIpv4Cidr() {
      return this.getStringAttribute('service_ipv4_cidr');
    }
  }
  export class DataAwsEksClusterVpcConfig extends cdktf.ComplexComputedList {

    // cluster_security_group_id - computed: true, optional: false, required: false
    public get clusterSecurityGroupId() {
      return this.getStringAttribute('cluster_security_group_id');
    }

    // endpoint_private_access - computed: true, optional: false, required: false
    public get endpointPrivateAccess() {
      return this.getBooleanAttribute('endpoint_private_access') as any;
    }

    // endpoint_public_access - computed: true, optional: false, required: false
    public get endpointPublicAccess() {
      return this.getBooleanAttribute('endpoint_public_access') as any;
    }

    // public_access_cidrs - computed: true, optional: false, required: false
    public get publicAccessCidrs() {
      return this.getListAttribute('public_access_cidrs');
    }

    // security_group_ids - computed: true, optional: false, required: false
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster.html aws_eks_cluster}
  */
  export class DataAwsEksCluster extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_eks_cluster";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster.html aws_eks_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEksClusterConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsEksClusterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_eks_cluster',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // certificate_authority - computed: true, optional: false, required: false
    public certificateAuthority(index: string) {
      return new DataAwsEksClusterCertificateAuthority(this, 'certificate_authority', index);
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
      return this.getStringAttribute('created_at');
    }

    // enabled_cluster_log_types - computed: true, optional: false, required: false
    public get enabledClusterLogTypes() {
      return this.getListAttribute('enabled_cluster_log_types');
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
      return this.getStringAttribute('endpoint');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // identity - computed: true, optional: false, required: false
    public identity(index: string) {
      return new DataAwsEksClusterIdentity(this, 'identity', index);
    }

    // kubernetes_network_config - computed: true, optional: false, required: false
    public kubernetesNetworkConfig(index: string) {
      return new DataAwsEksClusterKubernetesNetworkConfig(this, 'kubernetes_network_config', index);
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

    // platform_version - computed: true, optional: false, required: false
    public get platformVersion() {
      return this.getStringAttribute('platform_version');
    }

    // role_arn - computed: true, optional: false, required: false
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
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

    // version - computed: true, optional: false, required: false
    public get version() {
      return this.getStringAttribute('version');
    }

    // vpc_config - computed: true, optional: false, required: false
    public vpcConfig(index: string) {
      return new DataAwsEksClusterVpcConfig(this, 'vpc_config', index);
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsEksClusterAuthConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster_auth.html#name DataAwsEksClusterAuth#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster_auth.html aws_eks_cluster_auth}
  */
  export class DataAwsEksClusterAuth extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_eks_cluster_auth";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster_auth.html aws_eks_cluster_auth} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEksClusterAuthConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsEksClusterAuthConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_eks_cluster_auth',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // token - computed: true, optional: false, required: false
    public get token() {
      return this.getStringAttribute('token');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsEksClustersConfig extends cdktf.TerraformMetaArguments {
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_clusters.html aws_eks_clusters}
  */
  export class DataAwsEksClusters extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_eks_clusters";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_clusters.html aws_eks_clusters} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEksClustersConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEksClustersConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_eks_clusters',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // names - computed: true, optional: false, required: false
    public get names() {
      return this.getListAttribute('names');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
      };
    }
  }
  export interface DataAwsEksNodeGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_node_group.html#cluster_name DataAwsEksNodeGroup#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_node_group.html#node_group_name DataAwsEksNodeGroup#node_group_name}
    */
    readonly nodeGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_node_group.html#tags DataAwsEksNodeGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsEksNodeGroupRemoteAccess extends cdktf.ComplexComputedList {

    // ec2_ssh_key - computed: true, optional: false, required: false
    public get ec2SshKey() {
      return this.getStringAttribute('ec2_ssh_key');
    }

    // source_security_group_ids - computed: true, optional: false, required: false
    public get sourceSecurityGroupIds() {
      return this.getListAttribute('source_security_group_ids');
    }
  }
  export class DataAwsEksNodeGroupResourcesAutoscalingGroups extends cdktf.ComplexComputedList {

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }
  }
  export class DataAwsEksNodeGroupResources extends cdktf.ComplexComputedList {

    // autoscaling_groups - computed: true, optional: false, required: false
    public get autoscalingGroups() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('autoscaling_groups') as any;
    }

    // remote_access_security_group_id - computed: true, optional: false, required: false
    public get remoteAccessSecurityGroupId() {
      return this.getStringAttribute('remote_access_security_group_id');
    }
  }
  export class DataAwsEksNodeGroupScalingConfig extends cdktf.ComplexComputedList {

    // desired_size - computed: true, optional: false, required: false
    public get desiredSize() {
      return this.getNumberAttribute('desired_size');
    }

    // max_size - computed: true, optional: false, required: false
    public get maxSize() {
      return this.getNumberAttribute('max_size');
    }

    // min_size - computed: true, optional: false, required: false
    public get minSize() {
      return this.getNumberAttribute('min_size');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_node_group.html aws_eks_node_group}
  */
  export class DataAwsEksNodeGroup extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_eks_node_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_node_group.html aws_eks_node_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEksNodeGroupConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsEksNodeGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_eks_node_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterName = config.clusterName;
      this._nodeGroupName = config.nodeGroupName;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // ami_type - computed: true, optional: false, required: false
    public get amiType() {
      return this.getStringAttribute('ami_type');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cluster_name - computed: false, optional: false, required: true
    private _clusterName?: string; 
    public get clusterName() {
      return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
      this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
      return this._clusterName
    }

    // disk_size - computed: true, optional: false, required: false
    public get diskSize() {
      return this.getNumberAttribute('disk_size');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_types - computed: true, optional: false, required: false
    public get instanceTypes() {
      return this.getListAttribute('instance_types');
    }

    // labels - computed: true, optional: false, required: false
    public labels(key: string): string {
      return new cdktf.StringMap(this, 'labels').lookup(key);
    }

    // node_group_name - computed: false, optional: false, required: true
    private _nodeGroupName?: string; 
    public get nodeGroupName() {
      return this.getStringAttribute('node_group_name');
    }
    public set nodeGroupName(value: string) {
      this._nodeGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeGroupNameInput() {
      return this._nodeGroupName
    }

    // node_role_arn - computed: true, optional: false, required: false
    public get nodeRoleArn() {
      return this.getStringAttribute('node_role_arn');
    }

    // release_version - computed: true, optional: false, required: false
    public get releaseVersion() {
      return this.getStringAttribute('release_version');
    }

    // remote_access - computed: true, optional: false, required: false
    public remoteAccess(index: string) {
      return new DataAwsEksNodeGroupRemoteAccess(this, 'remote_access', index);
    }

    // resources - computed: true, optional: false, required: false
    public resources(index: string) {
      return new DataAwsEksNodeGroupResources(this, 'resources', index);
    }

    // scaling_config - computed: true, optional: false, required: false
    public scalingConfig(index: string) {
      return new DataAwsEksNodeGroupScalingConfig(this, 'scaling_config', index);
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // subnet_ids - computed: true, optional: false, required: false
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }

    // tags - computed: true, optional: true, required: false
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

    // version - computed: true, optional: false, required: false
    public get version() {
      return this.getStringAttribute('version');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster_name: cdktf.stringToTerraform(this._clusterName),
        node_group_name: cdktf.stringToTerraform(this._nodeGroupName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsEksNodeGroupsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_node_groups.html#cluster_name DataAwsEksNodeGroups#cluster_name}
    */
    readonly clusterName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_node_groups.html aws_eks_node_groups}
  */
  export class DataAwsEksNodeGroups extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_eks_node_groups";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_node_groups.html aws_eks_node_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEksNodeGroupsConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsEksNodeGroupsConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_eks_node_groups',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterName = config.clusterName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cluster_name - computed: false, optional: false, required: true
    private _clusterName?: string; 
    public get clusterName() {
      return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
      this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
      return this._clusterName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // names - computed: true, optional: false, required: false
    public get names() {
      return this.getListAttribute('names');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster_name: cdktf.stringToTerraform(this._clusterName),
      };
    }
  }
}
