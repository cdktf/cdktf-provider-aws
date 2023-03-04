// https://www.terraform.io/docs/providers/aws/r/eks_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EksClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#enabled_cluster_log_types EksCluster#enabled_cluster_log_types}
  */
  readonly enabledClusterLogTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#id EksCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#name EksCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#role_arn EksCluster#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#tags EksCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#tags_all EksCluster#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#version EksCluster#version}
  */
  readonly version?: string;
  /**
  * encryption_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#encryption_config EksCluster#encryption_config}
  */
  readonly encryptionConfig?: EksClusterEncryptionConfig;
  /**
  * kubernetes_network_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#kubernetes_network_config EksCluster#kubernetes_network_config}
  */
  readonly kubernetesNetworkConfig?: EksClusterKubernetesNetworkConfig;
  /**
  * outpost_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#outpost_config EksCluster#outpost_config}
  */
  readonly outpostConfig?: EksClusterOutpostConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#timeouts EksCluster#timeouts}
  */
  readonly timeouts?: EksClusterTimeouts;
  /**
  * vpc_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#vpc_config EksCluster#vpc_config}
  */
  readonly vpcConfig: EksClusterVpcConfig;
}
export interface EksClusterCertificateAuthority {
}

export function eksClusterCertificateAuthorityToTerraform(struct?: EksClusterCertificateAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class EksClusterCertificateAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EksClusterCertificateAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterCertificateAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data - computed: true, optional: false, required: false
  public get data() {
    return this.getStringAttribute('data');
  }
}

export class EksClusterCertificateAuthorityList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EksClusterCertificateAuthorityOutputReference {
    return new EksClusterCertificateAuthorityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterIdentityOidc {
}

export function eksClusterIdentityOidcToTerraform(struct?: EksClusterIdentityOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class EksClusterIdentityOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EksClusterIdentityOidc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterIdentityOidc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
}

export class EksClusterIdentityOidcList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EksClusterIdentityOidcOutputReference {
    return new EksClusterIdentityOidcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterIdentity {
}

export function eksClusterIdentityToTerraform(struct?: EksClusterIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class EksClusterIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EksClusterIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // oidc - computed: true, optional: false, required: false
  private _oidc = new EksClusterIdentityOidcList(this, "oidc", false);
  public get oidc() {
    return this._oidc;
  }
}

export class EksClusterIdentityList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EksClusterIdentityOutputReference {
    return new EksClusterIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterEncryptionConfigProvider {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#key_arn EksCluster#key_arn}
  */
  readonly keyArn: string;
}

export function eksClusterEncryptionConfigProviderToTerraform(struct?: EksClusterEncryptionConfigProviderOutputReference | EksClusterEncryptionConfigProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_arn: cdktf.stringToTerraform(struct!.keyArn),
  }
}

export class EksClusterEncryptionConfigProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterEncryptionConfigProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyArn = this._keyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterEncryptionConfigProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyArn = value.keyArn;
    }
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
    return this._keyArn;
  }
}
export interface EksClusterEncryptionConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#resources EksCluster#resources}
  */
  readonly resources: string[];
  /**
  * provider block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#provider EksCluster#provider}
  */
  readonly provider: EksClusterEncryptionConfigProvider;
}

export function eksClusterEncryptionConfigToTerraform(struct?: EksClusterEncryptionConfigOutputReference | EksClusterEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    provider: eksClusterEncryptionConfigProviderToTerraform(struct!.provider),
  }
}

export class EksClusterEncryptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._provider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resources = undefined;
      this._provider.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resources = value.resources;
      this._provider.internalValue = value.provider;
    }
  }

  // resources - computed: false, optional: false, required: true
  private _resources?: string[]; 
  public get resources() {
    return cdktf.Fn.tolist(this.getListAttribute('resources'));
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // provider - computed: false, optional: false, required: true
  private _provider = new EksClusterEncryptionConfigProviderOutputReference(this, "provider");
  public get provider() {
    return this._provider;
  }
  public putProvider(value: EksClusterEncryptionConfigProvider) {
    this._provider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider.internalValue;
  }
}
export interface EksClusterKubernetesNetworkConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#ip_family EksCluster#ip_family}
  */
  readonly ipFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#service_ipv4_cidr EksCluster#service_ipv4_cidr}
  */
  readonly serviceIpv4Cidr?: string;
}

export function eksClusterKubernetesNetworkConfigToTerraform(struct?: EksClusterKubernetesNetworkConfigOutputReference | EksClusterKubernetesNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_family: cdktf.stringToTerraform(struct!.ipFamily),
    service_ipv4_cidr: cdktf.stringToTerraform(struct!.serviceIpv4Cidr),
  }
}

export class EksClusterKubernetesNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterKubernetesNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFamily = this._ipFamily;
    }
    if (this._serviceIpv4Cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIpv4Cidr = this._serviceIpv4Cidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterKubernetesNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipFamily = undefined;
      this._serviceIpv4Cidr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipFamily = value.ipFamily;
      this._serviceIpv4Cidr = value.serviceIpv4Cidr;
    }
  }

  // ip_family - computed: true, optional: true, required: false
  private _ipFamily?: string; 
  public get ipFamily() {
    return this.getStringAttribute('ip_family');
  }
  public set ipFamily(value: string) {
    this._ipFamily = value;
  }
  public resetIpFamily() {
    this._ipFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFamilyInput() {
    return this._ipFamily;
  }

  // service_ipv4_cidr - computed: true, optional: true, required: false
  private _serviceIpv4Cidr?: string; 
  public get serviceIpv4Cidr() {
    return this.getStringAttribute('service_ipv4_cidr');
  }
  public set serviceIpv4Cidr(value: string) {
    this._serviceIpv4Cidr = value;
  }
  public resetServiceIpv4Cidr() {
    this._serviceIpv4Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpv4CidrInput() {
    return this._serviceIpv4Cidr;
  }

  // service_ipv6_cidr - computed: true, optional: false, required: false
  public get serviceIpv6Cidr() {
    return this.getStringAttribute('service_ipv6_cidr');
  }
}
export interface EksClusterOutpostConfigControlPlanePlacement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#group_name EksCluster#group_name}
  */
  readonly groupName: string;
}

export function eksClusterOutpostConfigControlPlanePlacementToTerraform(struct?: EksClusterOutpostConfigControlPlanePlacementOutputReference | EksClusterOutpostConfigControlPlanePlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
  }
}

export class EksClusterOutpostConfigControlPlanePlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterOutpostConfigControlPlanePlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterOutpostConfigControlPlanePlacement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupName = value.groupName;
    }
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }
}
export interface EksClusterOutpostConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#control_plane_instance_type EksCluster#control_plane_instance_type}
  */
  readonly controlPlaneInstanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#outpost_arns EksCluster#outpost_arns}
  */
  readonly outpostArns: string[];
  /**
  * control_plane_placement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#control_plane_placement EksCluster#control_plane_placement}
  */
  readonly controlPlanePlacement?: EksClusterOutpostConfigControlPlanePlacement;
}

export function eksClusterOutpostConfigToTerraform(struct?: EksClusterOutpostConfigOutputReference | EksClusterOutpostConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane_instance_type: cdktf.stringToTerraform(struct!.controlPlaneInstanceType),
    outpost_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.outpostArns),
    control_plane_placement: eksClusterOutpostConfigControlPlanePlacementToTerraform(struct!.controlPlanePlacement),
  }
}

export class EksClusterOutpostConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterOutpostConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlaneInstanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneInstanceType = this._controlPlaneInstanceType;
    }
    if (this._outpostArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.outpostArns = this._outpostArns;
    }
    if (this._controlPlanePlacement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlanePlacement = this._controlPlanePlacement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterOutpostConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controlPlaneInstanceType = undefined;
      this._outpostArns = undefined;
      this._controlPlanePlacement.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controlPlaneInstanceType = value.controlPlaneInstanceType;
      this._outpostArns = value.outpostArns;
      this._controlPlanePlacement.internalValue = value.controlPlanePlacement;
    }
  }

  // control_plane_instance_type - computed: false, optional: false, required: true
  private _controlPlaneInstanceType?: string; 
  public get controlPlaneInstanceType() {
    return this.getStringAttribute('control_plane_instance_type');
  }
  public set controlPlaneInstanceType(value: string) {
    this._controlPlaneInstanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInstanceTypeInput() {
    return this._controlPlaneInstanceType;
  }

  // outpost_arns - computed: false, optional: false, required: true
  private _outpostArns?: string[]; 
  public get outpostArns() {
    return cdktf.Fn.tolist(this.getListAttribute('outpost_arns'));
  }
  public set outpostArns(value: string[]) {
    this._outpostArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outpostArnsInput() {
    return this._outpostArns;
  }

  // control_plane_placement - computed: false, optional: true, required: false
  private _controlPlanePlacement = new EksClusterOutpostConfigControlPlanePlacementOutputReference(this, "control_plane_placement");
  public get controlPlanePlacement() {
    return this._controlPlanePlacement;
  }
  public putControlPlanePlacement(value: EksClusterOutpostConfigControlPlanePlacement) {
    this._controlPlanePlacement.internalValue = value;
  }
  public resetControlPlanePlacement() {
    this._controlPlanePlacement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlanePlacementInput() {
    return this._controlPlanePlacement.internalValue;
  }
}
export interface EksClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#create EksCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#delete EksCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#update EksCluster#update}
  */
  readonly update?: string;
}

export function eksClusterTimeoutsToTerraform(struct?: EksClusterTimeoutsOutputReference | EksClusterTimeouts | cdktf.IResolvable): any {
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

export class EksClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EksClusterTimeouts | cdktf.IResolvable | undefined) {
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
export interface EksClusterVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#endpoint_private_access EksCluster#endpoint_private_access}
  */
  readonly endpointPrivateAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#endpoint_public_access EksCluster#endpoint_public_access}
  */
  readonly endpointPublicAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#public_access_cidrs EksCluster#public_access_cidrs}
  */
  readonly publicAccessCidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#security_group_ids EksCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster#subnet_ids EksCluster#subnet_ids}
  */
  readonly subnetIds: string[];
}

export function eksClusterVpcConfigToTerraform(struct?: EksClusterVpcConfigOutputReference | EksClusterVpcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_private_access: cdktf.booleanToTerraform(struct!.endpointPrivateAccess),
    endpoint_public_access: cdktf.booleanToTerraform(struct!.endpointPublicAccess),
    public_access_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.publicAccessCidrs),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
  }
}

export class EksClusterVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointPrivateAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointPrivateAccess = this._endpointPrivateAccess;
    }
    if (this._endpointPublicAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointPublicAccess = this._endpointPublicAccess;
    }
    if (this._publicAccessCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccessCidrs = this._publicAccessCidrs;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterVpcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpointPrivateAccess = undefined;
      this._endpointPublicAccess = undefined;
      this._publicAccessCidrs = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpointPrivateAccess = value.endpointPrivateAccess;
      this._endpointPublicAccess = value.endpointPublicAccess;
      this._publicAccessCidrs = value.publicAccessCidrs;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // cluster_security_group_id - computed: true, optional: false, required: false
  public get clusterSecurityGroupId() {
    return this.getStringAttribute('cluster_security_group_id');
  }

  // endpoint_private_access - computed: false, optional: true, required: false
  private _endpointPrivateAccess?: boolean | cdktf.IResolvable; 
  public get endpointPrivateAccess() {
    return this.getBooleanAttribute('endpoint_private_access');
  }
  public set endpointPrivateAccess(value: boolean | cdktf.IResolvable) {
    this._endpointPrivateAccess = value;
  }
  public resetEndpointPrivateAccess() {
    this._endpointPrivateAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointPrivateAccessInput() {
    return this._endpointPrivateAccess;
  }

  // endpoint_public_access - computed: false, optional: true, required: false
  private _endpointPublicAccess?: boolean | cdktf.IResolvable; 
  public get endpointPublicAccess() {
    return this.getBooleanAttribute('endpoint_public_access');
  }
  public set endpointPublicAccess(value: boolean | cdktf.IResolvable) {
    this._endpointPublicAccess = value;
  }
  public resetEndpointPublicAccess() {
    this._endpointPublicAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointPublicAccessInput() {
    return this._endpointPublicAccess;
  }

  // public_access_cidrs - computed: true, optional: true, required: false
  private _publicAccessCidrs?: string[]; 
  public get publicAccessCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('public_access_cidrs'));
  }
  public set publicAccessCidrs(value: string[]) {
    this._publicAccessCidrs = value;
  }
  public resetPublicAccessCidrs() {
    this._publicAccessCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessCidrsInput() {
    return this._publicAccessCidrs;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster aws_eks_cluster}
*/
export class EksCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_eks_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster aws_eks_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EksClusterConfig
  */
  public constructor(scope: Construct, id: string, config: EksClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_eks_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabledClusterLogTypes = config.enabledClusterLogTypes;
    this._id = config.id;
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._version = config.version;
    this._encryptionConfig.internalValue = config.encryptionConfig;
    this._kubernetesNetworkConfig.internalValue = config.kubernetesNetworkConfig;
    this._outpostConfig.internalValue = config.outpostConfig;
    this._timeouts.internalValue = config.timeouts;
    this._vpcConfig.internalValue = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_authority - computed: true, optional: false, required: false
  private _certificateAuthority = new EksClusterCertificateAuthorityList(this, "certificate_authority", false);
  public get certificateAuthority() {
    return this._certificateAuthority;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled_cluster_log_types - computed: false, optional: true, required: false
  private _enabledClusterLogTypes?: string[]; 
  public get enabledClusterLogTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('enabled_cluster_log_types'));
  }
  public set enabledClusterLogTypes(value: string[]) {
    this._enabledClusterLogTypes = value;
  }
  public resetEnabledClusterLogTypes() {
    this._enabledClusterLogTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledClusterLogTypesInput() {
    return this._enabledClusterLogTypes;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
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

  // identity - computed: true, optional: false, required: false
  private _identity = new EksClusterIdentityList(this, "identity", false);
  public get identity() {
    return this._identity;
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
    return this._roleArn;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new EksClusterEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: EksClusterEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // kubernetes_network_config - computed: false, optional: true, required: false
  private _kubernetesNetworkConfig = new EksClusterKubernetesNetworkConfigOutputReference(this, "kubernetes_network_config");
  public get kubernetesNetworkConfig() {
    return this._kubernetesNetworkConfig;
  }
  public putKubernetesNetworkConfig(value: EksClusterKubernetesNetworkConfig) {
    this._kubernetesNetworkConfig.internalValue = value;
  }
  public resetKubernetesNetworkConfig() {
    this._kubernetesNetworkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesNetworkConfigInput() {
    return this._kubernetesNetworkConfig.internalValue;
  }

  // outpost_config - computed: false, optional: true, required: false
  private _outpostConfig = new EksClusterOutpostConfigOutputReference(this, "outpost_config");
  public get outpostConfig() {
    return this._outpostConfig;
  }
  public putOutpostConfig(value: EksClusterOutpostConfig) {
    this._outpostConfig.internalValue = value;
  }
  public resetOutpostConfig() {
    this._outpostConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outpostConfigInput() {
    return this._outpostConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EksClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EksClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpc_config - computed: false, optional: false, required: true
  private _vpcConfig = new EksClusterVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: EksClusterVpcConfig) {
    this._vpcConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled_cluster_log_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledClusterLogTypes),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      version: cdktf.stringToTerraform(this._version),
      encryption_config: eksClusterEncryptionConfigToTerraform(this._encryptionConfig.internalValue),
      kubernetes_network_config: eksClusterKubernetesNetworkConfigToTerraform(this._kubernetesNetworkConfig.internalValue),
      outpost_config: eksClusterOutpostConfigToTerraform(this._outpostConfig.internalValue),
      timeouts: eksClusterTimeoutsToTerraform(this._timeouts.internalValue),
      vpc_config: eksClusterVpcConfigToTerraform(this._vpcConfig.internalValue),
    };
  }
}
