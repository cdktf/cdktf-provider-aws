// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2 Container Registry
*/
export interface EcrRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#image_tag_mutability EcrRepository#image_tag_mutability}
  */
  readonly imageTagMutability?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#name EcrRepository#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#tags EcrRepository#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#tags_all EcrRepository#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * encryption_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#encryption_configuration EcrRepository#encryption_configuration}
  */
  readonly encryptionConfiguration?: EcrRepositoryEncryptionConfiguration[];
  /**
  * image_scanning_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#image_scanning_configuration EcrRepository#image_scanning_configuration}
  */
  readonly imageScanningConfiguration?: EcrRepositoryImageScanningConfiguration;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#timeouts EcrRepository#timeouts}
  */
  readonly timeouts?: EcrRepositoryTimeouts;
}
export interface EcrRepositoryEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#encryption_type EcrRepository#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#kms_key EcrRepository#kms_key}
  */
  readonly kmsKey?: string;
}

export function ecrRepositoryEncryptionConfigurationToTerraform(struct?: EcrRepositoryEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}

export interface EcrRepositoryImageScanningConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#scan_on_push EcrRepository#scan_on_push}
  */
  readonly scanOnPush: boolean | cdktf.IResolvable;
}

export function ecrRepositoryImageScanningConfigurationToTerraform(struct?: EcrRepositoryImageScanningConfigurationOutputReference | EcrRepositoryImageScanningConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scan_on_push: cdktf.booleanToTerraform(struct!.scanOnPush),
  }
}

export class EcrRepositoryImageScanningConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EcrRepositoryImageScanningConfiguration | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._scanOnPush) {
      hasAnyValues = true;
      internalValueResult.scanOnPush = this._scanOnPush;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrRepositoryImageScanningConfiguration | undefined) {
    if (value === undefined) {
      this._scanOnPush = undefined;
    }
    else {
      this._scanOnPush = value.scanOnPush;
    }
  }

  // scan_on_push - computed: false, optional: false, required: true
  private _scanOnPush?: boolean | cdktf.IResolvable; 
  public get scanOnPush() {
    return this.getBooleanAttribute('scan_on_push') as any;
  }
  public set scanOnPush(value: boolean | cdktf.IResolvable) {
    this._scanOnPush = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanOnPushInput() {
    return this._scanOnPush;
  }
}
export interface EcrRepositoryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#delete EcrRepository#delete}
  */
  readonly delete?: string;
}

export function ecrRepositoryTimeoutsToTerraform(struct?: EcrRepositoryTimeoutsOutputReference | EcrRepositoryTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class EcrRepositoryTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EcrRepositoryTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrRepositoryTimeouts | undefined) {
    if (value === undefined) {
      this._delete = undefined;
    }
    else {
      this._delete = value.delete;
    }
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html aws_ecr_repository}
*/
export class EcrRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ecr_repository";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html aws_ecr_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcrRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: EcrRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecr_repository',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._imageTagMutability = config.imageTagMutability;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._encryptionConfiguration = config.encryptionConfiguration;
    this._imageScanningConfiguration.internalValue = config.imageScanningConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_tag_mutability - computed: false, optional: true, required: false
  private _imageTagMutability?: string; 
  public get imageTagMutability() {
    return this.getStringAttribute('image_tag_mutability');
  }
  public set imageTagMutability(value: string) {
    this._imageTagMutability = value;
  }
  public resetImageTagMutability() {
    this._imageTagMutability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTagMutabilityInput() {
    return this._imageTagMutability;
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

  // registry_id - computed: true, optional: false, required: false
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }

  // repository_url - computed: true, optional: false, required: false
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration?: EcrRepositoryEncryptionConfiguration[]; 
  public get encryptionConfiguration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('encryption_configuration') as any;
  }
  public set encryptionConfiguration(value: EcrRepositoryEncryptionConfiguration[]) {
    this._encryptionConfiguration = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration;
  }

  // image_scanning_configuration - computed: false, optional: true, required: false
  private _imageScanningConfiguration = new EcrRepositoryImageScanningConfigurationOutputReference(this as any, "image_scanning_configuration", true);
  public get imageScanningConfiguration() {
    return this._imageScanningConfiguration;
  }
  public putImageScanningConfiguration(value: EcrRepositoryImageScanningConfiguration) {
    this._imageScanningConfiguration.internalValue = value;
  }
  public resetImageScanningConfiguration() {
    this._imageScanningConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageScanningConfigurationInput() {
    return this._imageScanningConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EcrRepositoryTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EcrRepositoryTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      image_tag_mutability: cdktf.stringToTerraform(this._imageTagMutability),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      encryption_configuration: cdktf.listMapper(ecrRepositoryEncryptionConfigurationToTerraform)(this._encryptionConfiguration),
      image_scanning_configuration: ecrRepositoryImageScanningConfigurationToTerraform(this._imageScanningConfiguration.internalValue),
      timeouts: ecrRepositoryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
