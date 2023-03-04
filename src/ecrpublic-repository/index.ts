// https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcrpublicRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#force_destroy EcrpublicRepository#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#id EcrpublicRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#repository_name EcrpublicRepository#repository_name}
  */
  readonly repositoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags EcrpublicRepository#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags_all EcrpublicRepository#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * catalog_data block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#catalog_data EcrpublicRepository#catalog_data}
  */
  readonly catalogData?: EcrpublicRepositoryCatalogData;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#timeouts EcrpublicRepository#timeouts}
  */
  readonly timeouts?: EcrpublicRepositoryTimeouts;
}
export interface EcrpublicRepositoryCatalogData {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#about_text EcrpublicRepository#about_text}
  */
  readonly aboutText?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#architectures EcrpublicRepository#architectures}
  */
  readonly architectures?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#description EcrpublicRepository#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#logo_image_blob EcrpublicRepository#logo_image_blob}
  */
  readonly logoImageBlob?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#operating_systems EcrpublicRepository#operating_systems}
  */
  readonly operatingSystems?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#usage_text EcrpublicRepository#usage_text}
  */
  readonly usageText?: string;
}

export function ecrpublicRepositoryCatalogDataToTerraform(struct?: EcrpublicRepositoryCatalogDataOutputReference | EcrpublicRepositoryCatalogData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    about_text: cdktf.stringToTerraform(struct!.aboutText),
    architectures: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.architectures),
    description: cdktf.stringToTerraform(struct!.description),
    logo_image_blob: cdktf.stringToTerraform(struct!.logoImageBlob),
    operating_systems: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operatingSystems),
    usage_text: cdktf.stringToTerraform(struct!.usageText),
  }
}

export class EcrpublicRepositoryCatalogDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcrpublicRepositoryCatalogData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aboutText !== undefined) {
      hasAnyValues = true;
      internalValueResult.aboutText = this._aboutText;
    }
    if (this._architectures !== undefined) {
      hasAnyValues = true;
      internalValueResult.architectures = this._architectures;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._logoImageBlob !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoImageBlob = this._logoImageBlob;
    }
    if (this._operatingSystems !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystems = this._operatingSystems;
    }
    if (this._usageText !== undefined) {
      hasAnyValues = true;
      internalValueResult.usageText = this._usageText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrpublicRepositoryCatalogData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aboutText = undefined;
      this._architectures = undefined;
      this._description = undefined;
      this._logoImageBlob = undefined;
      this._operatingSystems = undefined;
      this._usageText = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aboutText = value.aboutText;
      this._architectures = value.architectures;
      this._description = value.description;
      this._logoImageBlob = value.logoImageBlob;
      this._operatingSystems = value.operatingSystems;
      this._usageText = value.usageText;
    }
  }

  // about_text - computed: false, optional: true, required: false
  private _aboutText?: string; 
  public get aboutText() {
    return this.getStringAttribute('about_text');
  }
  public set aboutText(value: string) {
    this._aboutText = value;
  }
  public resetAboutText() {
    this._aboutText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aboutTextInput() {
    return this._aboutText;
  }

  // architectures - computed: false, optional: true, required: false
  private _architectures?: string[]; 
  public get architectures() {
    return cdktf.Fn.tolist(this.getListAttribute('architectures'));
  }
  public set architectures(value: string[]) {
    this._architectures = value;
  }
  public resetArchitectures() {
    this._architectures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architecturesInput() {
    return this._architectures;
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

  // logo_image_blob - computed: true, optional: true, required: false
  private _logoImageBlob?: string; 
  public get logoImageBlob() {
    return this.getStringAttribute('logo_image_blob');
  }
  public set logoImageBlob(value: string) {
    this._logoImageBlob = value;
  }
  public resetLogoImageBlob() {
    this._logoImageBlob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoImageBlobInput() {
    return this._logoImageBlob;
  }

  // operating_systems - computed: false, optional: true, required: false
  private _operatingSystems?: string[]; 
  public get operatingSystems() {
    return cdktf.Fn.tolist(this.getListAttribute('operating_systems'));
  }
  public set operatingSystems(value: string[]) {
    this._operatingSystems = value;
  }
  public resetOperatingSystems() {
    this._operatingSystems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemsInput() {
    return this._operatingSystems;
  }

  // usage_text - computed: false, optional: true, required: false
  private _usageText?: string; 
  public get usageText() {
    return this.getStringAttribute('usage_text');
  }
  public set usageText(value: string) {
    this._usageText = value;
  }
  public resetUsageText() {
    this._usageText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageTextInput() {
    return this._usageText;
  }
}
export interface EcrpublicRepositoryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#delete EcrpublicRepository#delete}
  */
  readonly delete?: string;
}

export function ecrpublicRepositoryTimeoutsToTerraform(struct?: EcrpublicRepositoryTimeoutsOutputReference | EcrpublicRepositoryTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class EcrpublicRepositoryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcrpublicRepositoryTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrpublicRepositoryTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository aws_ecrpublic_repository}
*/
export class EcrpublicRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ecrpublic_repository";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository aws_ecrpublic_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcrpublicRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: EcrpublicRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecrpublic_repository',
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
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._repositoryName = config.repositoryName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._catalogData.internalValue = config.catalogData;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
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

  // registry_id - computed: true, optional: false, required: false
  public get registryId() {
    return this.getStringAttribute('registry_id');
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

  // repository_uri - computed: true, optional: false, required: false
  public get repositoryUri() {
    return this.getStringAttribute('repository_uri');
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

  // catalog_data - computed: false, optional: true, required: false
  private _catalogData = new EcrpublicRepositoryCatalogDataOutputReference(this, "catalog_data");
  public get catalogData() {
    return this._catalogData;
  }
  public putCatalogData(value: EcrpublicRepositoryCatalogData) {
    this._catalogData.internalValue = value;
  }
  public resetCatalogData() {
    this._catalogData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogDataInput() {
    return this._catalogData.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EcrpublicRepositoryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EcrpublicRepositoryTimeouts) {
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
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      id: cdktf.stringToTerraform(this._id),
      repository_name: cdktf.stringToTerraform(this._repositoryName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      catalog_data: ecrpublicRepositoryCatalogDataToTerraform(this._catalogData.internalValue),
      timeouts: ecrpublicRepositoryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
