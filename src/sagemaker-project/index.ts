// https://www.terraform.io/docs/providers/aws/r/sagemaker_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#id SagemakerProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#project_description SagemakerProject#project_description}
  */
  readonly projectDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#project_name SagemakerProject#project_name}
  */
  readonly projectName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#tags SagemakerProject#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#tags_all SagemakerProject#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * service_catalog_provisioning_details block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#service_catalog_provisioning_details SagemakerProject#service_catalog_provisioning_details}
  */
  readonly serviceCatalogProvisioningDetails: SagemakerProjectServiceCatalogProvisioningDetails;
}
export interface SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#key SagemakerProject#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#value SagemakerProject#value}
  */
  readonly value?: string;
}

export function sagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterToTerraform(struct?: SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList extends cdktf.ComplexList {
  public internalValue? : SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter[] | cdktf.IResolvable

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
  public get(index: number): SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference {
    return new SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerProjectServiceCatalogProvisioningDetails {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#path_id SagemakerProject#path_id}
  */
  readonly pathId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#product_id SagemakerProject#product_id}
  */
  readonly productId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#provisioning_artifact_id SagemakerProject#provisioning_artifact_id}
  */
  readonly provisioningArtifactId?: string;
  /**
  * provisioning_parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project#provisioning_parameter SagemakerProject#provisioning_parameter}
  */
  readonly provisioningParameter?: SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter[] | cdktf.IResolvable;
}

export function sagemakerProjectServiceCatalogProvisioningDetailsToTerraform(struct?: SagemakerProjectServiceCatalogProvisioningDetailsOutputReference | SagemakerProjectServiceCatalogProvisioningDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path_id: cdktf.stringToTerraform(struct!.pathId),
    product_id: cdktf.stringToTerraform(struct!.productId),
    provisioning_artifact_id: cdktf.stringToTerraform(struct!.provisioningArtifactId),
    provisioning_parameter: cdktf.listMapper(sagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterToTerraform, true)(struct!.provisioningParameter),
  }
}

export class SagemakerProjectServiceCatalogProvisioningDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerProjectServiceCatalogProvisioningDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pathId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathId = this._pathId;
    }
    if (this._productId !== undefined) {
      hasAnyValues = true;
      internalValueResult.productId = this._productId;
    }
    if (this._provisioningArtifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioningArtifactId = this._provisioningArtifactId;
    }
    if (this._provisioningParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioningParameter = this._provisioningParameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerProjectServiceCatalogProvisioningDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pathId = undefined;
      this._productId = undefined;
      this._provisioningArtifactId = undefined;
      this._provisioningParameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pathId = value.pathId;
      this._productId = value.productId;
      this._provisioningArtifactId = value.provisioningArtifactId;
      this._provisioningParameter.internalValue = value.provisioningParameter;
    }
  }

  // path_id - computed: false, optional: true, required: false
  private _pathId?: string; 
  public get pathId() {
    return this.getStringAttribute('path_id');
  }
  public set pathId(value: string) {
    this._pathId = value;
  }
  public resetPathId() {
    this._pathId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathIdInput() {
    return this._pathId;
  }

  // product_id - computed: false, optional: false, required: true
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // provisioning_artifact_id - computed: true, optional: true, required: false
  private _provisioningArtifactId?: string; 
  public get provisioningArtifactId() {
    return this.getStringAttribute('provisioning_artifact_id');
  }
  public set provisioningArtifactId(value: string) {
    this._provisioningArtifactId = value;
  }
  public resetProvisioningArtifactId() {
    this._provisioningArtifactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningArtifactIdInput() {
    return this._provisioningArtifactId;
  }

  // provisioning_parameter - computed: false, optional: true, required: false
  private _provisioningParameter = new SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList(this, "provisioning_parameter", false);
  public get provisioningParameter() {
    return this._provisioningParameter;
  }
  public putProvisioningParameter(value: SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter[] | cdktf.IResolvable) {
    this._provisioningParameter.internalValue = value;
  }
  public resetProvisioningParameter() {
    this._provisioningParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningParameterInput() {
    return this._provisioningParameter.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project aws_sagemaker_project}
*/
export class SagemakerProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_project";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project aws_sagemaker_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerProjectConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_project',
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
    this._id = config.id;
    this._projectDescription = config.projectDescription;
    this._projectName = config.projectName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._serviceCatalogProvisioningDetails.internalValue = config.serviceCatalogProvisioningDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // project_description - computed: false, optional: true, required: false
  private _projectDescription?: string; 
  public get projectDescription() {
    return this.getStringAttribute('project_description');
  }
  public set projectDescription(value: string) {
    this._projectDescription = value;
  }
  public resetProjectDescription() {
    this._projectDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectDescriptionInput() {
    return this._projectDescription;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
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

  // service_catalog_provisioning_details - computed: false, optional: false, required: true
  private _serviceCatalogProvisioningDetails = new SagemakerProjectServiceCatalogProvisioningDetailsOutputReference(this, "service_catalog_provisioning_details");
  public get serviceCatalogProvisioningDetails() {
    return this._serviceCatalogProvisioningDetails;
  }
  public putServiceCatalogProvisioningDetails(value: SagemakerProjectServiceCatalogProvisioningDetails) {
    this._serviceCatalogProvisioningDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCatalogProvisioningDetailsInput() {
    return this._serviceCatalogProvisioningDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project_description: cdktf.stringToTerraform(this._projectDescription),
      project_name: cdktf.stringToTerraform(this._projectName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      service_catalog_provisioning_details: sagemakerProjectServiceCatalogProvisioningDetailsToTerraform(this._serviceCatalogProvisioningDetails.internalValue),
    };
  }
}
