// https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImagebuilderDistributionConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#id ImagebuilderDistributionConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#name ImagebuilderDistributionConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#tags ImagebuilderDistributionConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#tags_all ImagebuilderDistributionConfiguration#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * distribution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#distribution ImagebuilderDistributionConfiguration#distribution}
  */
  readonly distribution: ImagebuilderDistributionConfigurationDistribution[] | cdktf.IResolvable;
}
export interface ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#organization_arns ImagebuilderDistributionConfiguration#organization_arns}
  */
  readonly organizationArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#organizational_unit_arns ImagebuilderDistributionConfiguration#organizational_unit_arns}
  */
  readonly organizationalUnitArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#user_groups ImagebuilderDistributionConfiguration#user_groups}
  */
  readonly userGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#user_ids ImagebuilderDistributionConfiguration#user_ids}
  */
  readonly userIds?: string[];
}

export function imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference | ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    organization_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.organizationArns),
    organizational_unit_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.organizationalUnitArns),
    user_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userGroups),
    user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userIds),
  }
}

export class ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._organizationArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationArns = this._organizationArns;
    }
    if (this._organizationalUnitArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnitArns = this._organizationalUnitArns;
    }
    if (this._userGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroups = this._userGroups;
    }
    if (this._userIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIds = this._userIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._organizationArns = undefined;
      this._organizationalUnitArns = undefined;
      this._userGroups = undefined;
      this._userIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._organizationArns = value.organizationArns;
      this._organizationalUnitArns = value.organizationalUnitArns;
      this._userGroups = value.userGroups;
      this._userIds = value.userIds;
    }
  }

  // organization_arns - computed: false, optional: true, required: false
  private _organizationArns?: string[]; 
  public get organizationArns() {
    return cdktf.Fn.tolist(this.getListAttribute('organization_arns'));
  }
  public set organizationArns(value: string[]) {
    this._organizationArns = value;
  }
  public resetOrganizationArns() {
    this._organizationArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationArnsInput() {
    return this._organizationArns;
  }

  // organizational_unit_arns - computed: false, optional: true, required: false
  private _organizationalUnitArns?: string[]; 
  public get organizationalUnitArns() {
    return cdktf.Fn.tolist(this.getListAttribute('organizational_unit_arns'));
  }
  public set organizationalUnitArns(value: string[]) {
    this._organizationalUnitArns = value;
  }
  public resetOrganizationalUnitArns() {
    this._organizationalUnitArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitArnsInput() {
    return this._organizationalUnitArns;
  }

  // user_groups - computed: false, optional: true, required: false
  private _userGroups?: string[]; 
  public get userGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('user_groups'));
  }
  public set userGroups(value: string[]) {
    this._userGroups = value;
  }
  public resetUserGroups() {
    this._userGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupsInput() {
    return this._userGroups;
  }

  // user_ids - computed: false, optional: true, required: false
  private _userIds?: string[]; 
  public get userIds() {
    return cdktf.Fn.tolist(this.getListAttribute('user_ids'));
  }
  public set userIds(value: string[]) {
    this._userIds = value;
  }
  public resetUserIds() {
    this._userIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdsInput() {
    return this._userIds;
  }
}
export interface ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#ami_tags ImagebuilderDistributionConfiguration#ami_tags}
  */
  readonly amiTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#kms_key_id ImagebuilderDistributionConfiguration#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#name ImagebuilderDistributionConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#target_account_ids ImagebuilderDistributionConfiguration#target_account_ids}
  */
  readonly targetAccountIds?: string[];
  /**
  * launch_permission block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_permission ImagebuilderDistributionConfiguration#launch_permission}
  */
  readonly launchPermission?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission;
}

export function imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference | ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ami_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.amiTags),
    description: cdktf.stringToTerraform(struct!.description),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    name: cdktf.stringToTerraform(struct!.name),
    target_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetAccountIds),
    launch_permission: imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionToTerraform(struct!.launchPermission),
  }
}

export class ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amiTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.amiTags = this._amiTags;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._targetAccountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAccountIds = this._targetAccountIds;
    }
    if (this._launchPermission?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchPermission = this._launchPermission?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amiTags = undefined;
      this._description = undefined;
      this._kmsKeyId = undefined;
      this._name = undefined;
      this._targetAccountIds = undefined;
      this._launchPermission.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amiTags = value.amiTags;
      this._description = value.description;
      this._kmsKeyId = value.kmsKeyId;
      this._name = value.name;
      this._targetAccountIds = value.targetAccountIds;
      this._launchPermission.internalValue = value.launchPermission;
    }
  }

  // ami_tags - computed: false, optional: true, required: false
  private _amiTags?: { [key: string]: string }; 
  public get amiTags() {
    return this.getStringMapAttribute('ami_tags');
  }
  public set amiTags(value: { [key: string]: string }) {
    this._amiTags = value;
  }
  public resetAmiTags() {
    this._amiTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amiTagsInput() {
    return this._amiTags;
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

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // target_account_ids - computed: false, optional: true, required: false
  private _targetAccountIds?: string[]; 
  public get targetAccountIds() {
    return cdktf.Fn.tolist(this.getListAttribute('target_account_ids'));
  }
  public set targetAccountIds(value: string[]) {
    this._targetAccountIds = value;
  }
  public resetTargetAccountIds() {
    this._targetAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAccountIdsInput() {
    return this._targetAccountIds;
  }

  // launch_permission - computed: false, optional: true, required: false
  private _launchPermission = new ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference(this, "launch_permission");
  public get launchPermission() {
    return this._launchPermission;
  }
  public putLaunchPermission(value: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission) {
    this._launchPermission.internalValue = value;
  }
  public resetLaunchPermission() {
    this._launchPermission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchPermissionInput() {
    return this._launchPermission.internalValue;
  }
}
export interface ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#repository_name ImagebuilderDistributionConfiguration#repository_name}
  */
  readonly repositoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#service ImagebuilderDistributionConfiguration#service}
  */
  readonly service: string;
}

export function imagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference | ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
    service: cdktf.stringToTerraform(struct!.service),
  }
}

export class ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryName = this._repositoryName;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repositoryName = undefined;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repositoryName = value.repositoryName;
      this._service = value.service;
    }
  }

  // repository_name - computed: false, optional: false, required: true
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#container_tags ImagebuilderDistributionConfiguration#container_tags}
  */
  readonly containerTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}
  */
  readonly description?: string;
  /**
  * target_repository block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#target_repository ImagebuilderDistributionConfiguration#target_repository}
  */
  readonly targetRepository: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository;
}

export function imagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference | ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.containerTags),
    description: cdktf.stringToTerraform(struct!.description),
    target_repository: imagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryToTerraform(struct!.targetRepository),
  }
}

export class ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerTags = this._containerTags;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._targetRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRepository = this._targetRepository?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerTags = undefined;
      this._description = undefined;
      this._targetRepository.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerTags = value.containerTags;
      this._description = value.description;
      this._targetRepository.internalValue = value.targetRepository;
    }
  }

  // container_tags - computed: false, optional: true, required: false
  private _containerTags?: string[]; 
  public get containerTags() {
    return cdktf.Fn.tolist(this.getListAttribute('container_tags'));
  }
  public set containerTags(value: string[]) {
    this._containerTags = value;
  }
  public resetContainerTags() {
    this._containerTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerTagsInput() {
    return this._containerTags;
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

  // target_repository - computed: false, optional: false, required: true
  private _targetRepository = new ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference(this, "target_repository");
  public get targetRepository() {
    return this._targetRepository;
  }
  public putTargetRepository(value: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository) {
    this._targetRepository.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRepositoryInput() {
    return this._targetRepository.internalValue;
  }
}
export interface ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_template_id ImagebuilderDistributionConfiguration#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_template_name ImagebuilderDistributionConfiguration#launch_template_name}
  */
  readonly launchTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_template_version ImagebuilderDistributionConfiguration#launch_template_version}
  */
  readonly launchTemplateVersion?: string;
}

export function imagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference | ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    launch_template_id: cdktf.stringToTerraform(struct!.launchTemplateId),
    launch_template_name: cdktf.stringToTerraform(struct!.launchTemplateName),
    launch_template_version: cdktf.stringToTerraform(struct!.launchTemplateVersion),
  }
}

export class ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._launchTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateId = this._launchTemplateId;
    }
    if (this._launchTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateName = this._launchTemplateName;
    }
    if (this._launchTemplateVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateVersion = this._launchTemplateVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._launchTemplateId = undefined;
      this._launchTemplateName = undefined;
      this._launchTemplateVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._launchTemplateId = value.launchTemplateId;
      this._launchTemplateName = value.launchTemplateName;
      this._launchTemplateVersion = value.launchTemplateVersion;
    }
  }

  // launch_template_id - computed: false, optional: true, required: false
  private _launchTemplateId?: string; 
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }
  public set launchTemplateId(value: string) {
    this._launchTemplateId = value;
  }
  public resetLaunchTemplateId() {
    this._launchTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateIdInput() {
    return this._launchTemplateId;
  }

  // launch_template_name - computed: false, optional: true, required: false
  private _launchTemplateName?: string; 
  public get launchTemplateName() {
    return this.getStringAttribute('launch_template_name');
  }
  public set launchTemplateName(value: string) {
    this._launchTemplateName = value;
  }
  public resetLaunchTemplateName() {
    this._launchTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateNameInput() {
    return this._launchTemplateName;
  }

  // launch_template_version - computed: false, optional: true, required: false
  private _launchTemplateVersion?: string; 
  public get launchTemplateVersion() {
    return this.getStringAttribute('launch_template_version');
  }
  public set launchTemplateVersion(value: string) {
    this._launchTemplateVersion = value;
  }
  public resetLaunchTemplateVersion() {
    this._launchTemplateVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateVersionInput() {
    return this._launchTemplateVersion;
  }
}
export interface ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#target_resource_count ImagebuilderDistributionConfiguration#target_resource_count}
  */
  readonly targetResourceCount?: number;
}

export function imagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference | ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_resource_count: cdktf.numberToTerraform(struct!.targetResourceCount),
  }
}

export class ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetResourceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetResourceCount = this._targetResourceCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetResourceCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetResourceCount = value.targetResourceCount;
    }
  }

  // target_resource_count - computed: false, optional: true, required: false
  private _targetResourceCount?: number; 
  public get targetResourceCount() {
    return this.getNumberAttribute('target_resource_count');
  }
  public set targetResourceCount(value: number) {
    this._targetResourceCount = value;
  }
  public resetTargetResourceCount() {
    this._targetResourceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceCountInput() {
    return this._targetResourceCount;
  }
}
export interface ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#account_id ImagebuilderDistributionConfiguration#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#enabled ImagebuilderDistributionConfiguration#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#max_parallel_launches ImagebuilderDistributionConfiguration#max_parallel_launches}
  */
  readonly maxParallelLaunches?: number;
  /**
  * launch_template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_template ImagebuilderDistributionConfiguration#launch_template}
  */
  readonly launchTemplate?: ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate;
  /**
  * snapshot_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#snapshot_configuration ImagebuilderDistributionConfiguration#snapshot_configuration}
  */
  readonly snapshotConfiguration?: ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration;
}

export function imagebuilderDistributionConfigurationDistributionFastLaunchConfigurationToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_parallel_launches: cdktf.numberToTerraform(struct!.maxParallelLaunches),
    launch_template: imagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateToTerraform(struct!.launchTemplate),
    snapshot_configuration: imagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationToTerraform(struct!.snapshotConfiguration),
  }
}

export class ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxParallelLaunches !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParallelLaunches = this._maxParallelLaunches;
    }
    if (this._launchTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplate = this._launchTemplate?.internalValue;
    }
    if (this._snapshotConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotConfiguration = this._snapshotConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._enabled = undefined;
      this._maxParallelLaunches = undefined;
      this._launchTemplate.internalValue = undefined;
      this._snapshotConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._enabled = value.enabled;
      this._maxParallelLaunches = value.maxParallelLaunches;
      this._launchTemplate.internalValue = value.launchTemplate;
      this._snapshotConfiguration.internalValue = value.snapshotConfiguration;
    }
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // max_parallel_launches - computed: false, optional: true, required: false
  private _maxParallelLaunches?: number; 
  public get maxParallelLaunches() {
    return this.getNumberAttribute('max_parallel_launches');
  }
  public set maxParallelLaunches(value: number) {
    this._maxParallelLaunches = value;
  }
  public resetMaxParallelLaunches() {
    this._maxParallelLaunches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParallelLaunchesInput() {
    return this._maxParallelLaunches;
  }

  // launch_template - computed: false, optional: true, required: false
  private _launchTemplate = new ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference(this, "launch_template");
  public get launchTemplate() {
    return this._launchTemplate;
  }
  public putLaunchTemplate(value: ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate) {
    this._launchTemplate.internalValue = value;
  }
  public resetLaunchTemplate() {
    this._launchTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateInput() {
    return this._launchTemplate.internalValue;
  }

  // snapshot_configuration - computed: false, optional: true, required: false
  private _snapshotConfiguration = new ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference(this, "snapshot_configuration");
  public get snapshotConfiguration() {
    return this._snapshotConfiguration;
  }
  public putSnapshotConfiguration(value: ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration) {
    this._snapshotConfiguration.internalValue = value;
  }
  public resetSnapshotConfiguration() {
    this._snapshotConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotConfigurationInput() {
    return this._snapshotConfiguration.internalValue;
  }
}

export class ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList extends cdktf.ComplexList {
  public internalValue? : ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration[] | cdktf.IResolvable

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
  public get(index: number): ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference {
    return new ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#account_id ImagebuilderDistributionConfiguration#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#default ImagebuilderDistributionConfiguration#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_template_id ImagebuilderDistributionConfiguration#launch_template_id}
  */
  readonly launchTemplateId: string;
}

export function imagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    default: cdktf.booleanToTerraform(struct!.default),
    launch_template_id: cdktf.stringToTerraform(struct!.launchTemplateId),
  }
}

export class ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._launchTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateId = this._launchTemplateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._default = undefined;
      this._launchTemplateId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._default = value.default;
      this._launchTemplateId = value.launchTemplateId;
    }
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // launch_template_id - computed: false, optional: false, required: true
  private _launchTemplateId?: string; 
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }
  public set launchTemplateId(value: string) {
    this._launchTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateIdInput() {
    return this._launchTemplateId;
  }
}

export class ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList extends cdktf.ComplexList {
  public internalValue? : ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration[] | cdktf.IResolvable

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
  public get(index: number): ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference {
    return new ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImagebuilderDistributionConfigurationDistribution {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#license_configuration_arns ImagebuilderDistributionConfiguration#license_configuration_arns}
  */
  readonly licenseConfigurationArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#region ImagebuilderDistributionConfiguration#region}
  */
  readonly region: string;
  /**
  * ami_distribution_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#ami_distribution_configuration ImagebuilderDistributionConfiguration#ami_distribution_configuration}
  */
  readonly amiDistributionConfiguration?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration;
  /**
  * container_distribution_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#container_distribution_configuration ImagebuilderDistributionConfiguration#container_distribution_configuration}
  */
  readonly containerDistributionConfiguration?: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration;
  /**
  * fast_launch_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#fast_launch_configuration ImagebuilderDistributionConfiguration#fast_launch_configuration}
  */
  readonly fastLaunchConfiguration?: ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration[] | cdktf.IResolvable;
  /**
  * launch_template_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_template_configuration ImagebuilderDistributionConfiguration#launch_template_configuration}
  */
  readonly launchTemplateConfiguration?: ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration[] | cdktf.IResolvable;
}

export function imagebuilderDistributionConfigurationDistributionToTerraform(struct?: ImagebuilderDistributionConfigurationDistribution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license_configuration_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.licenseConfigurationArns),
    region: cdktf.stringToTerraform(struct!.region),
    ami_distribution_configuration: imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationToTerraform(struct!.amiDistributionConfiguration),
    container_distribution_configuration: imagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationToTerraform(struct!.containerDistributionConfiguration),
    fast_launch_configuration: cdktf.listMapper(imagebuilderDistributionConfigurationDistributionFastLaunchConfigurationToTerraform, true)(struct!.fastLaunchConfiguration),
    launch_template_configuration: cdktf.listMapper(imagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationToTerraform, true)(struct!.launchTemplateConfiguration),
  }
}

export class ImagebuilderDistributionConfigurationDistributionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ImagebuilderDistributionConfigurationDistribution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._licenseConfigurationArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseConfigurationArns = this._licenseConfigurationArns;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._amiDistributionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amiDistributionConfiguration = this._amiDistributionConfiguration?.internalValue;
    }
    if (this._containerDistributionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerDistributionConfiguration = this._containerDistributionConfiguration?.internalValue;
    }
    if (this._fastLaunchConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastLaunchConfiguration = this._fastLaunchConfiguration?.internalValue;
    }
    if (this._launchTemplateConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateConfiguration = this._launchTemplateConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderDistributionConfigurationDistribution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._licenseConfigurationArns = undefined;
      this._region = undefined;
      this._amiDistributionConfiguration.internalValue = undefined;
      this._containerDistributionConfiguration.internalValue = undefined;
      this._fastLaunchConfiguration.internalValue = undefined;
      this._launchTemplateConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._licenseConfigurationArns = value.licenseConfigurationArns;
      this._region = value.region;
      this._amiDistributionConfiguration.internalValue = value.amiDistributionConfiguration;
      this._containerDistributionConfiguration.internalValue = value.containerDistributionConfiguration;
      this._fastLaunchConfiguration.internalValue = value.fastLaunchConfiguration;
      this._launchTemplateConfiguration.internalValue = value.launchTemplateConfiguration;
    }
  }

  // license_configuration_arns - computed: false, optional: true, required: false
  private _licenseConfigurationArns?: string[]; 
  public get licenseConfigurationArns() {
    return cdktf.Fn.tolist(this.getListAttribute('license_configuration_arns'));
  }
  public set licenseConfigurationArns(value: string[]) {
    this._licenseConfigurationArns = value;
  }
  public resetLicenseConfigurationArns() {
    this._licenseConfigurationArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseConfigurationArnsInput() {
    return this._licenseConfigurationArns;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // ami_distribution_configuration - computed: false, optional: true, required: false
  private _amiDistributionConfiguration = new ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference(this, "ami_distribution_configuration");
  public get amiDistributionConfiguration() {
    return this._amiDistributionConfiguration;
  }
  public putAmiDistributionConfiguration(value: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration) {
    this._amiDistributionConfiguration.internalValue = value;
  }
  public resetAmiDistributionConfiguration() {
    this._amiDistributionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amiDistributionConfigurationInput() {
    return this._amiDistributionConfiguration.internalValue;
  }

  // container_distribution_configuration - computed: false, optional: true, required: false
  private _containerDistributionConfiguration = new ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference(this, "container_distribution_configuration");
  public get containerDistributionConfiguration() {
    return this._containerDistributionConfiguration;
  }
  public putContainerDistributionConfiguration(value: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration) {
    this._containerDistributionConfiguration.internalValue = value;
  }
  public resetContainerDistributionConfiguration() {
    this._containerDistributionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerDistributionConfigurationInput() {
    return this._containerDistributionConfiguration.internalValue;
  }

  // fast_launch_configuration - computed: false, optional: true, required: false
  private _fastLaunchConfiguration = new ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList(this, "fast_launch_configuration", true);
  public get fastLaunchConfiguration() {
    return this._fastLaunchConfiguration;
  }
  public putFastLaunchConfiguration(value: ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration[] | cdktf.IResolvable) {
    this._fastLaunchConfiguration.internalValue = value;
  }
  public resetFastLaunchConfiguration() {
    this._fastLaunchConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastLaunchConfigurationInput() {
    return this._fastLaunchConfiguration.internalValue;
  }

  // launch_template_configuration - computed: false, optional: true, required: false
  private _launchTemplateConfiguration = new ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList(this, "launch_template_configuration", true);
  public get launchTemplateConfiguration() {
    return this._launchTemplateConfiguration;
  }
  public putLaunchTemplateConfiguration(value: ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration[] | cdktf.IResolvable) {
    this._launchTemplateConfiguration.internalValue = value;
  }
  public resetLaunchTemplateConfiguration() {
    this._launchTemplateConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateConfigurationInput() {
    return this._launchTemplateConfiguration.internalValue;
  }
}

export class ImagebuilderDistributionConfigurationDistributionList extends cdktf.ComplexList {
  public internalValue? : ImagebuilderDistributionConfigurationDistribution[] | cdktf.IResolvable

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
  public get(index: number): ImagebuilderDistributionConfigurationDistributionOutputReference {
    return new ImagebuilderDistributionConfigurationDistributionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration aws_imagebuilder_distribution_configuration}
*/
export class ImagebuilderDistributionConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_imagebuilder_distribution_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration aws_imagebuilder_distribution_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImagebuilderDistributionConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: ImagebuilderDistributionConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_imagebuilder_distribution_configuration',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._distribution.internalValue = config.distribution;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_updated - computed: true, optional: false, required: false
  public get dateUpdated() {
    return this.getStringAttribute('date_updated');
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

  // distribution - computed: false, optional: false, required: true
  private _distribution = new ImagebuilderDistributionConfigurationDistributionList(this, "distribution", true);
  public get distribution() {
    return this._distribution;
  }
  public putDistribution(value: ImagebuilderDistributionConfigurationDistribution[] | cdktf.IResolvable) {
    this._distribution.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionInput() {
    return this._distribution.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      distribution: cdktf.listMapper(imagebuilderDistributionConfigurationDistributionToTerraform, true)(this._distribution.internalValue),
    };
  }
}
