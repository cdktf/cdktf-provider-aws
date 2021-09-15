// https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicecatalogProductConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#accept_language ServicecatalogProduct#accept_language}
  */
  readonly acceptLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#description ServicecatalogProduct#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#distributor ServicecatalogProduct#distributor}
  */
  readonly distributor?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#name ServicecatalogProduct#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#owner ServicecatalogProduct#owner}
  */
  readonly owner: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#support_description ServicecatalogProduct#support_description}
  */
  readonly supportDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#support_email ServicecatalogProduct#support_email}
  */
  readonly supportEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#support_url ServicecatalogProduct#support_url}
  */
  readonly supportUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#tags ServicecatalogProduct#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#tags_all ServicecatalogProduct#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#type ServicecatalogProduct#type}
  */
  readonly type: string;
  /**
  * provisioning_artifact_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#provisioning_artifact_parameters ServicecatalogProduct#provisioning_artifact_parameters}
  */
  readonly provisioningArtifactParameters: ServicecatalogProductProvisioningArtifactParameters[];
}
export interface ServicecatalogProductProvisioningArtifactParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#description ServicecatalogProduct#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#disable_template_validation ServicecatalogProduct#disable_template_validation}
  */
  readonly disableTemplateValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#name ServicecatalogProduct#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#template_physical_id ServicecatalogProduct#template_physical_id}
  */
  readonly templatePhysicalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#template_url ServicecatalogProduct#template_url}
  */
  readonly templateUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#type ServicecatalogProduct#type}
  */
  readonly type?: string;
}

function servicecatalogProductProvisioningArtifactParametersToTerraform(struct?: ServicecatalogProductProvisioningArtifactParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable_template_validation: cdktf.booleanToTerraform(struct!.disableTemplateValidation),
    name: cdktf.stringToTerraform(struct!.name),
    template_physical_id: cdktf.stringToTerraform(struct!.templatePhysicalId),
    template_url: cdktf.stringToTerraform(struct!.templateUrl),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html aws_servicecatalog_product}
*/
export class ServicecatalogProduct extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_servicecatalog_product";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html aws_servicecatalog_product} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicecatalogProductConfig
  */
  public constructor(scope: Construct, id: string, config: ServicecatalogProductConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_servicecatalog_product',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._acceptLanguage = config.acceptLanguage;
    this._description = config.description;
    this._distributor = config.distributor;
    this._name = config.name;
    this._owner = config.owner;
    this._supportDescription = config.supportDescription;
    this._supportEmail = config.supportEmail;
    this._supportUrl = config.supportUrl;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._provisioningArtifactParameters = config.provisioningArtifactParameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_language - computed: false, optional: true, required: false
  private _acceptLanguage?: string;
  public get acceptLanguage() {
    return this.getStringAttribute('accept_language');
  }
  public set acceptLanguage(value: string ) {
    this._acceptLanguage = value;
  }
  public resetAcceptLanguage() {
    this._acceptLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLanguageInput() {
    return this._acceptLanguage
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // description - computed: true, optional: true, required: false
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
    return this._description
  }

  // distributor - computed: true, optional: true, required: false
  private _distributor?: string;
  public get distributor() {
    return this.getStringAttribute('distributor');
  }
  public set distributor(value: string) {
    this._distributor = value;
  }
  public resetDistributor() {
    this._distributor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributorInput() {
    return this._distributor
  }

  // has_default_path - computed: true, optional: false, required: false
  public get hasDefaultPath() {
    return this.getBooleanAttribute('has_default_path');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
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

  // owner - computed: false, optional: false, required: true
  private _owner: string;
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // support_description - computed: true, optional: true, required: false
  private _supportDescription?: string;
  public get supportDescription() {
    return this.getStringAttribute('support_description');
  }
  public set supportDescription(value: string) {
    this._supportDescription = value;
  }
  public resetSupportDescription() {
    this._supportDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportDescriptionInput() {
    return this._supportDescription
  }

  // support_email - computed: true, optional: true, required: false
  private _supportEmail?: string;
  public get supportEmail() {
    return this.getStringAttribute('support_email');
  }
  public set supportEmail(value: string) {
    this._supportEmail = value;
  }
  public resetSupportEmail() {
    this._supportEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportEmailInput() {
    return this._supportEmail
  }

  // support_url - computed: true, optional: true, required: false
  private _supportUrl?: string;
  public get supportUrl() {
    return this.getStringAttribute('support_url');
  }
  public set supportUrl(value: string) {
    this._supportUrl = value;
  }
  public resetSupportUrl() {
    this._supportUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportUrlInput() {
    return this._supportUrl
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
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

  // provisioning_artifact_parameters - computed: false, optional: false, required: true
  private _provisioningArtifactParameters: ServicecatalogProductProvisioningArtifactParameters[];
  public get provisioningArtifactParameters() {
    return this.interpolationForAttribute('provisioning_artifact_parameters') as any;
  }
  public set provisioningArtifactParameters(value: ServicecatalogProductProvisioningArtifactParameters[]) {
    this._provisioningArtifactParameters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningArtifactParametersInput() {
    return this._provisioningArtifactParameters
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_language: cdktf.stringToTerraform(this._acceptLanguage),
      description: cdktf.stringToTerraform(this._description),
      distributor: cdktf.stringToTerraform(this._distributor),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
      support_description: cdktf.stringToTerraform(this._supportDescription),
      support_email: cdktf.stringToTerraform(this._supportEmail),
      support_url: cdktf.stringToTerraform(this._supportUrl),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      type: cdktf.stringToTerraform(this._type),
      provisioning_artifact_parameters: cdktf.listMapper(servicecatalogProductProvisioningArtifactParametersToTerraform)(this._provisioningArtifactParameters),
    };
  }
}
