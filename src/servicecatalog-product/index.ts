// https://www.terraform.io/docs/providers/aws/r/servicecatalog_product
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicecatalogProductConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#accept_language ServicecatalogProduct#accept_language}
  */
  readonly acceptLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#description ServicecatalogProduct#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#distributor ServicecatalogProduct#distributor}
  */
  readonly distributor?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#id ServicecatalogProduct#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#name ServicecatalogProduct#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#owner ServicecatalogProduct#owner}
  */
  readonly owner: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#support_description ServicecatalogProduct#support_description}
  */
  readonly supportDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#support_email ServicecatalogProduct#support_email}
  */
  readonly supportEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#support_url ServicecatalogProduct#support_url}
  */
  readonly supportUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#tags ServicecatalogProduct#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#tags_all ServicecatalogProduct#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#type ServicecatalogProduct#type}
  */
  readonly type: string;
  /**
  * provisioning_artifact_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#provisioning_artifact_parameters ServicecatalogProduct#provisioning_artifact_parameters}
  */
  readonly provisioningArtifactParameters: ServicecatalogProductProvisioningArtifactParameters;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#timeouts ServicecatalogProduct#timeouts}
  */
  readonly timeouts?: ServicecatalogProductTimeouts;
}
export interface ServicecatalogProductProvisioningArtifactParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#description ServicecatalogProduct#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#disable_template_validation ServicecatalogProduct#disable_template_validation}
  */
  readonly disableTemplateValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#name ServicecatalogProduct#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#template_physical_id ServicecatalogProduct#template_physical_id}
  */
  readonly templatePhysicalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#template_url ServicecatalogProduct#template_url}
  */
  readonly templateUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#type ServicecatalogProduct#type}
  */
  readonly type?: string;
}

export function servicecatalogProductProvisioningArtifactParametersToTerraform(struct?: ServicecatalogProductProvisioningArtifactParametersOutputReference | ServicecatalogProductProvisioningArtifactParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable_template_validation: cdktf.booleanToTerraform(struct!.disableTemplateValidation),
    name: cdktf.stringToTerraform(struct!.name),
    template_physical_id: cdktf.stringToTerraform(struct!.templatePhysicalId),
    template_url: cdktf.stringToTerraform(struct!.templateUrl),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ServicecatalogProductProvisioningArtifactParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicecatalogProductProvisioningArtifactParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disableTemplateValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTemplateValidation = this._disableTemplateValidation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._templatePhysicalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templatePhysicalId = this._templatePhysicalId;
    }
    if (this._templateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateUrl = this._templateUrl;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicecatalogProductProvisioningArtifactParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disableTemplateValidation = undefined;
      this._name = undefined;
      this._templatePhysicalId = undefined;
      this._templateUrl = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disableTemplateValidation = value.disableTemplateValidation;
      this._name = value.name;
      this._templatePhysicalId = value.templatePhysicalId;
      this._templateUrl = value.templateUrl;
      this._type = value.type;
    }
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

  // disable_template_validation - computed: false, optional: true, required: false
  private _disableTemplateValidation?: boolean | cdktf.IResolvable; 
  public get disableTemplateValidation() {
    return this.getBooleanAttribute('disable_template_validation');
  }
  public set disableTemplateValidation(value: boolean | cdktf.IResolvable) {
    this._disableTemplateValidation = value;
  }
  public resetDisableTemplateValidation() {
    this._disableTemplateValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTemplateValidationInput() {
    return this._disableTemplateValidation;
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

  // template_physical_id - computed: false, optional: true, required: false
  private _templatePhysicalId?: string; 
  public get templatePhysicalId() {
    return this.getStringAttribute('template_physical_id');
  }
  public set templatePhysicalId(value: string) {
    this._templatePhysicalId = value;
  }
  public resetTemplatePhysicalId() {
    this._templatePhysicalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePhysicalIdInput() {
    return this._templatePhysicalId;
  }

  // template_url - computed: false, optional: true, required: false
  private _templateUrl?: string; 
  public get templateUrl() {
    return this.getStringAttribute('template_url');
  }
  public set templateUrl(value: string) {
    this._templateUrl = value;
  }
  public resetTemplateUrl() {
    this._templateUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateUrlInput() {
    return this._templateUrl;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ServicecatalogProductTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#create ServicecatalogProduct#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#delete ServicecatalogProduct#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#read ServicecatalogProduct#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product#update ServicecatalogProduct#update}
  */
  readonly update?: string;
}

export function servicecatalogProductTimeoutsToTerraform(struct?: ServicecatalogProductTimeoutsOutputReference | ServicecatalogProductTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ServicecatalogProductTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicecatalogProductTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicecatalogProductTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product aws_servicecatalog_product}
*/
export class ServicecatalogProduct extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_servicecatalog_product";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product aws_servicecatalog_product} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicecatalogProductConfig
  */
  public constructor(scope: Construct, id: string, config: ServicecatalogProductConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_servicecatalog_product',
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
    this._acceptLanguage = config.acceptLanguage;
    this._description = config.description;
    this._distributor = config.distributor;
    this._id = config.id;
    this._name = config.name;
    this._owner = config.owner;
    this._supportDescription = config.supportDescription;
    this._supportEmail = config.supportEmail;
    this._supportUrl = config.supportUrl;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._provisioningArtifactParameters.internalValue = config.provisioningArtifactParameters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_language - computed: false, optional: true, required: false
  private _acceptLanguage?: string; 
  public get acceptLanguage() {
    return this.getStringAttribute('accept_language');
  }
  public set acceptLanguage(value: string) {
    this._acceptLanguage = value;
  }
  public resetAcceptLanguage() {
    this._acceptLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLanguageInput() {
    return this._acceptLanguage;
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
    return this._description;
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
    return this._distributor;
  }

  // has_default_path - computed: true, optional: false, required: false
  public get hasDefaultPath() {
    return this.getBooleanAttribute('has_default_path');
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

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
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
    return this._supportDescription;
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
    return this._supportEmail;
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
    return this._supportUrl;
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
    return this._type;
  }

  // provisioning_artifact_parameters - computed: false, optional: false, required: true
  private _provisioningArtifactParameters = new ServicecatalogProductProvisioningArtifactParametersOutputReference(this, "provisioning_artifact_parameters");
  public get provisioningArtifactParameters() {
    return this._provisioningArtifactParameters;
  }
  public putProvisioningArtifactParameters(value: ServicecatalogProductProvisioningArtifactParameters) {
    this._provisioningArtifactParameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningArtifactParametersInput() {
    return this._provisioningArtifactParameters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServicecatalogProductTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServicecatalogProductTimeouts) {
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
      accept_language: cdktf.stringToTerraform(this._acceptLanguage),
      description: cdktf.stringToTerraform(this._description),
      distributor: cdktf.stringToTerraform(this._distributor),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
      support_description: cdktf.stringToTerraform(this._supportDescription),
      support_email: cdktf.stringToTerraform(this._supportEmail),
      support_url: cdktf.stringToTerraform(this._supportUrl),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      type: cdktf.stringToTerraform(this._type),
      provisioning_artifact_parameters: servicecatalogProductProvisioningArtifactParametersToTerraform(this._provisioningArtifactParameters.internalValue),
      timeouts: servicecatalogProductTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
