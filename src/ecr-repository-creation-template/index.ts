/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/ecr_repository_creation_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcrRepositoryCreationTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/ecr_repository_creation_template#applied_for EcrRepositoryCreationTemplate#applied_for}
  */
  readonly appliedFor: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/ecr_repository_creation_template#custom_role_arn EcrRepositoryCreationTemplate#custom_role_arn}
  */
  readonly customRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/ecr_repository_creation_template#description EcrRepositoryCreationTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/ecr_repository_creation_template#id EcrRepositoryCreationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/ecr_repository_creation_template#image_tag_mutability EcrRepositoryCreationTemplate#image_tag_mutability}
  */
  readonly imageTagMutability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/ecr_repository_creation_template#lifecycle_policy EcrRepositoryCreationTemplate#lifecycle_policy}
  */
  readonly lifecyclePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/ecr_repository_creation_template#prefix EcrRepositoryCreationTemplate#prefix}
  */
  readonly prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/ecr_repository_creation_template#repository_policy EcrRepositoryCreationTemplate#repository_policy}
  */
  readonly repositoryPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/ecr_repository_creation_template#resource_tags EcrRepositoryCreationTemplate#resource_tags}
  */
  readonly resourceTags?: { [key: string]: string };
  /**
  * encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/ecr_repository_creation_template#encryption_configuration EcrRepositoryCreationTemplate#encryption_configuration}
  */
  readonly encryptionConfiguration?: EcrRepositoryCreationTemplateEncryptionConfiguration[] | cdktf.IResolvable;
}
export interface EcrRepositoryCreationTemplateEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/ecr_repository_creation_template#encryption_type EcrRepositoryCreationTemplate#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/ecr_repository_creation_template#kms_key EcrRepositoryCreationTemplate#kms_key}
  */
  readonly kmsKey?: string;
}

export function ecrRepositoryCreationTemplateEncryptionConfigurationToTerraform(struct?: EcrRepositoryCreationTemplateEncryptionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}


export function ecrRepositoryCreationTemplateEncryptionConfigurationToHclTerraform(struct?: EcrRepositoryCreationTemplateEncryptionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_type: {
      value: cdktf.stringToHclTerraform(struct!.encryptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktf.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EcrRepositoryCreationTemplateEncryptionConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrRepositoryCreationTemplateEncryptionConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionType = undefined;
      this._kmsKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionType = value.encryptionType;
      this._kmsKey = value.kmsKey;
    }
  }

  // encryption_type - computed: false, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // kms_key - computed: true, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}

export class EcrRepositoryCreationTemplateEncryptionConfigurationList extends cdktf.ComplexList {
  public internalValue? : EcrRepositoryCreationTemplateEncryptionConfiguration[] | cdktf.IResolvable

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
  public get(index: number): EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference {
    return new EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/ecr_repository_creation_template aws_ecr_repository_creation_template}
*/
export class EcrRepositoryCreationTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ecr_repository_creation_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcrRepositoryCreationTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcrRepositoryCreationTemplate to import
  * @param importFromId The id of the existing EcrRepositoryCreationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/ecr_repository_creation_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcrRepositoryCreationTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ecr_repository_creation_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/ecr_repository_creation_template aws_ecr_repository_creation_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcrRepositoryCreationTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: EcrRepositoryCreationTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecr_repository_creation_template',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.61.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appliedFor = config.appliedFor;
    this._customRoleArn = config.customRoleArn;
    this._description = config.description;
    this._id = config.id;
    this._imageTagMutability = config.imageTagMutability;
    this._lifecyclePolicy = config.lifecyclePolicy;
    this._prefix = config.prefix;
    this._repositoryPolicy = config.repositoryPolicy;
    this._resourceTags = config.resourceTags;
    this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applied_for - computed: false, optional: false, required: true
  private _appliedFor?: string[]; 
  public get appliedFor() {
    return cdktf.Fn.tolist(this.getListAttribute('applied_for'));
  }
  public set appliedFor(value: string[]) {
    this._appliedFor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appliedForInput() {
    return this._appliedFor;
  }

  // custom_role_arn - computed: false, optional: true, required: false
  private _customRoleArn?: string; 
  public get customRoleArn() {
    return this.getStringAttribute('custom_role_arn');
  }
  public set customRoleArn(value: string) {
    this._customRoleArn = value;
  }
  public resetCustomRoleArn() {
    this._customRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRoleArnInput() {
    return this._customRoleArn;
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

  // lifecycle_policy - computed: false, optional: true, required: false
  private _lifecyclePolicy?: string; 
  public get lifecyclePolicy() {
    return this.getStringAttribute('lifecycle_policy');
  }
  public set lifecyclePolicy(value: string) {
    this._lifecyclePolicy = value;
  }
  public resetLifecyclePolicy() {
    this._lifecyclePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecyclePolicyInput() {
    return this._lifecyclePolicy;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // registry_id - computed: true, optional: false, required: false
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }

  // repository_policy - computed: false, optional: true, required: false
  private _repositoryPolicy?: string; 
  public get repositoryPolicy() {
    return this.getStringAttribute('repository_policy');
  }
  public set repositoryPolicy(value: string) {
    this._repositoryPolicy = value;
  }
  public resetRepositoryPolicy() {
    this._repositoryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPolicyInput() {
    return this._repositoryPolicy;
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags?: { [key: string]: string }; 
  public get resourceTags() {
    return this.getStringMapAttribute('resource_tags');
  }
  public set resourceTags(value: { [key: string]: string }) {
    this._resourceTags = value;
  }
  public resetResourceTags() {
    this._resourceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags;
  }

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration = new EcrRepositoryCreationTemplateEncryptionConfigurationList(this, "encryption_configuration", false);
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: EcrRepositoryCreationTemplateEncryptionConfiguration[] | cdktf.IResolvable) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      applied_for: cdktf.listMapper(cdktf.stringToTerraform, false)(this._appliedFor),
      custom_role_arn: cdktf.stringToTerraform(this._customRoleArn),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      image_tag_mutability: cdktf.stringToTerraform(this._imageTagMutability),
      lifecycle_policy: cdktf.stringToTerraform(this._lifecyclePolicy),
      prefix: cdktf.stringToTerraform(this._prefix),
      repository_policy: cdktf.stringToTerraform(this._repositoryPolicy),
      resource_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._resourceTags),
      encryption_configuration: cdktf.listMapper(ecrRepositoryCreationTemplateEncryptionConfigurationToTerraform, true)(this._encryptionConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      applied_for: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._appliedFor),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      custom_role_arn: {
        value: cdktf.stringToHclTerraform(this._customRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_tag_mutability: {
        value: cdktf.stringToHclTerraform(this._imageTagMutability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifecycle_policy: {
        value: cdktf.stringToHclTerraform(this._lifecyclePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_policy: {
        value: cdktf.stringToHclTerraform(this._repositoryPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._resourceTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      encryption_configuration: {
        value: cdktf.listMapperHcl(ecrRepositoryCreationTemplateEncryptionConfigurationToHclTerraform, true)(this._encryptionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcrRepositoryCreationTemplateEncryptionConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
