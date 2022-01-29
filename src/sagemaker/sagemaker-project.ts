// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS SageMaker
*/
export interface SagemakerProjectConfig extends cdktf.TerraformMetaArguments {
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
    provisioning_parameter: cdktf.listMapper(sagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterToTerraform)(struct!.provisioningParameter),
  }
}

export class SagemakerProjectServiceCatalogProvisioningDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    if (this._provisioningParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioningParameter = this._provisioningParameter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerProjectServiceCatalogProvisioningDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pathId = undefined;
      this._productId = undefined;
      this._provisioningArtifactId = undefined;
      this._provisioningParameter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pathId = value.pathId;
      this._productId = value.productId;
      this._provisioningArtifactId = value.provisioningArtifactId;
      this._provisioningParameter = value.provisioningParameter;
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
  private _provisioningParameter?: SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter[] | cdktf.IResolvable; 
  public get provisioningParameter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('provisioning_parameter');
  }
  public set provisioningParameter(value: SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter[] | cdktf.IResolvable) {
    this._provisioningParameter = value;
  }
  public resetProvisioningParameter() {
    this._provisioningParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningParameterInput() {
    return this._provisioningParameter;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_project aws_sagemaker_project}
*/
export class SagemakerProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_sagemaker_project";

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
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
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
  public get id() {
    return this.getStringAttribute('id');
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
  private _serviceCatalogProvisioningDetails = new SagemakerProjectServiceCatalogProvisioningDetailsOutputReference(this, "service_catalog_provisioning_details", true);
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
      project_description: cdktf.stringToTerraform(this._projectDescription),
      project_name: cdktf.stringToTerraform(this._projectName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      service_catalog_provisioning_details: sagemakerProjectServiceCatalogProvisioningDetailsToTerraform(this._serviceCatalogProvisioningDetails.internalValue),
    };
  }
}
