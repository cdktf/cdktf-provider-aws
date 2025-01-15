// https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/datazone_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatazoneEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/datazone_environment#account_identifier DatazoneEnvironment#account_identifier}
  */
  readonly accountIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/datazone_environment#account_region DatazoneEnvironment#account_region}
  */
  readonly accountRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/datazone_environment#blueprint_identifier DatazoneEnvironment#blueprint_identifier}
  */
  readonly blueprintIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/datazone_environment#description DatazoneEnvironment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/datazone_environment#domain_identifier DatazoneEnvironment#domain_identifier}
  */
  readonly domainIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/datazone_environment#glossary_terms DatazoneEnvironment#glossary_terms}
  */
  readonly glossaryTerms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/datazone_environment#name DatazoneEnvironment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/datazone_environment#profile_identifier DatazoneEnvironment#profile_identifier}
  */
  readonly profileIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/datazone_environment#project_identifier DatazoneEnvironment#project_identifier}
  */
  readonly projectIdentifier: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/datazone_environment#timeouts DatazoneEnvironment#timeouts}
  */
  readonly timeouts?: DatazoneEnvironmentTimeouts;
  /**
  * user_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/datazone_environment#user_parameters DatazoneEnvironment#user_parameters}
  */
  readonly userParameters?: DatazoneEnvironmentUserParameters[] | cdktf.IResolvable;
}
export interface DatazoneEnvironmentLastDeploymentFailureReasons {
}

export function datazoneEnvironmentLastDeploymentFailureReasonsToTerraform(struct?: DatazoneEnvironmentLastDeploymentFailureReasons): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datazoneEnvironmentLastDeploymentFailureReasonsToHclTerraform(struct?: DatazoneEnvironmentLastDeploymentFailureReasons): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatazoneEnvironmentLastDeploymentFailureReasons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazoneEnvironmentLastDeploymentFailureReasons | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DatazoneEnvironmentLastDeploymentFailureReasonsList extends cdktf.ComplexList {

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
  public get(index: number): DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference {
    return new DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazoneEnvironmentLastDeployment {
}

export function datazoneEnvironmentLastDeploymentToTerraform(struct?: DatazoneEnvironmentLastDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datazoneEnvironmentLastDeploymentToHclTerraform(struct?: DatazoneEnvironmentLastDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatazoneEnvironmentLastDeploymentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatazoneEnvironmentLastDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazoneEnvironmentLastDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // deployment_status - computed: true, optional: false, required: false
  public get deploymentStatus() {
    return this.getStringAttribute('deployment_status');
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }

  // failure_reasons - computed: true, optional: false, required: false
  private _failureReasons = new DatazoneEnvironmentLastDeploymentFailureReasonsList(this, "failure_reasons", false);
  public get failureReasons() {
    return this._failureReasons;
  }

  // is_deployment_complete - computed: true, optional: false, required: false
  public get isDeploymentComplete() {
    return this.getBooleanAttribute('is_deployment_complete');
  }

  // messages - computed: true, optional: false, required: false
  public get messages() {
    return this.getListAttribute('messages');
  }
}

export class DatazoneEnvironmentLastDeploymentList extends cdktf.ComplexList {

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
  public get(index: number): DatazoneEnvironmentLastDeploymentOutputReference {
    return new DatazoneEnvironmentLastDeploymentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazoneEnvironmentProvisionedResources {
}

export function datazoneEnvironmentProvisionedResourcesToTerraform(struct?: DatazoneEnvironmentProvisionedResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datazoneEnvironmentProvisionedResourcesToHclTerraform(struct?: DatazoneEnvironmentProvisionedResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatazoneEnvironmentProvisionedResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatazoneEnvironmentProvisionedResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazoneEnvironmentProvisionedResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DatazoneEnvironmentProvisionedResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DatazoneEnvironmentProvisionedResourcesOutputReference {
    return new DatazoneEnvironmentProvisionedResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazoneEnvironmentTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/datazone_environment#create DatazoneEnvironment#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/datazone_environment#delete DatazoneEnvironment#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/datazone_environment#update DatazoneEnvironment#update}
  */
  readonly update?: string;
}

export function datazoneEnvironmentTimeoutsToTerraform(struct?: DatazoneEnvironmentTimeouts | cdktf.IResolvable): any {
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


export function datazoneEnvironmentTimeoutsToHclTerraform(struct?: DatazoneEnvironmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazoneEnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazoneEnvironmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatazoneEnvironmentTimeouts | cdktf.IResolvable | undefined) {
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
export interface DatazoneEnvironmentUserParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/datazone_environment#name DatazoneEnvironment#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/datazone_environment#value DatazoneEnvironment#value}
  */
  readonly value?: string;
}

export function datazoneEnvironmentUserParametersToTerraform(struct?: DatazoneEnvironmentUserParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function datazoneEnvironmentUserParametersToHclTerraform(struct?: DatazoneEnvironmentUserParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazoneEnvironmentUserParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatazoneEnvironmentUserParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazoneEnvironmentUserParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class DatazoneEnvironmentUserParametersList extends cdktf.ComplexList {
  public internalValue? : DatazoneEnvironmentUserParameters[] | cdktf.IResolvable

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
  public get(index: number): DatazoneEnvironmentUserParametersOutputReference {
    return new DatazoneEnvironmentUserParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/datazone_environment aws_datazone_environment}
*/
export class DatazoneEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_datazone_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatazoneEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatazoneEnvironment to import
  * @param importFromId The id of the existing DatazoneEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/datazone_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatazoneEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_datazone_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/datazone_environment aws_datazone_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatazoneEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: DatazoneEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datazone_environment',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.83.1',
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
    this._accountIdentifier = config.accountIdentifier;
    this._accountRegion = config.accountRegion;
    this._blueprintIdentifier = config.blueprintIdentifier;
    this._description = config.description;
    this._domainIdentifier = config.domainIdentifier;
    this._glossaryTerms = config.glossaryTerms;
    this._name = config.name;
    this._profileIdentifier = config.profileIdentifier;
    this._projectIdentifier = config.projectIdentifier;
    this._timeouts.internalValue = config.timeouts;
    this._userParameters.internalValue = config.userParameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_identifier - computed: true, optional: true, required: false
  private _accountIdentifier?: string; 
  public get accountIdentifier() {
    return this.getStringAttribute('account_identifier');
  }
  public set accountIdentifier(value: string) {
    this._accountIdentifier = value;
  }
  public resetAccountIdentifier() {
    this._accountIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdentifierInput() {
    return this._accountIdentifier;
  }

  // account_region - computed: true, optional: true, required: false
  private _accountRegion?: string; 
  public get accountRegion() {
    return this.getStringAttribute('account_region');
  }
  public set accountRegion(value: string) {
    this._accountRegion = value;
  }
  public resetAccountRegion() {
    this._accountRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountRegionInput() {
    return this._accountRegion;
  }

  // blueprint_identifier - computed: true, optional: true, required: false
  private _blueprintIdentifier?: string; 
  public get blueprintIdentifier() {
    return this.getStringAttribute('blueprint_identifier');
  }
  public set blueprintIdentifier(value: string) {
    this._blueprintIdentifier = value;
  }
  public resetBlueprintIdentifier() {
    this._blueprintIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdentifierInput() {
    return this._blueprintIdentifier;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // domain_identifier - computed: false, optional: false, required: true
  private _domainIdentifier?: string; 
  public get domainIdentifier() {
    return this.getStringAttribute('domain_identifier');
  }
  public set domainIdentifier(value: string) {
    this._domainIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdentifierInput() {
    return this._domainIdentifier;
  }

  // glossary_terms - computed: false, optional: true, required: false
  private _glossaryTerms?: string[]; 
  public get glossaryTerms() {
    return this.getListAttribute('glossary_terms');
  }
  public set glossaryTerms(value: string[]) {
    this._glossaryTerms = value;
  }
  public resetGlossaryTerms() {
    this._glossaryTerms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glossaryTermsInput() {
    return this._glossaryTerms;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_deployment - computed: true, optional: false, required: false
  private _lastDeployment = new DatazoneEnvironmentLastDeploymentList(this, "last_deployment", false);
  public get lastDeployment() {
    return this._lastDeployment;
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

  // profile_identifier - computed: false, optional: false, required: true
  private _profileIdentifier?: string; 
  public get profileIdentifier() {
    return this.getStringAttribute('profile_identifier');
  }
  public set profileIdentifier(value: string) {
    this._profileIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdentifierInput() {
    return this._profileIdentifier;
  }

  // project_identifier - computed: false, optional: false, required: true
  private _projectIdentifier?: string; 
  public get projectIdentifier() {
    return this.getStringAttribute('project_identifier');
  }
  public set projectIdentifier(value: string) {
    this._projectIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdentifierInput() {
    return this._projectIdentifier;
  }

  // provider_environment - computed: true, optional: false, required: false
  public get providerEnvironment() {
    return this.getStringAttribute('provider_environment');
  }

  // provisioned_resources - computed: true, optional: false, required: false
  private _provisionedResources = new DatazoneEnvironmentProvisionedResourcesList(this, "provisioned_resources", false);
  public get provisionedResources() {
    return this._provisionedResources;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatazoneEnvironmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatazoneEnvironmentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user_parameters - computed: false, optional: true, required: false
  private _userParameters = new DatazoneEnvironmentUserParametersList(this, "user_parameters", false);
  public get userParameters() {
    return this._userParameters;
  }
  public putUserParameters(value: DatazoneEnvironmentUserParameters[] | cdktf.IResolvable) {
    this._userParameters.internalValue = value;
  }
  public resetUserParameters() {
    this._userParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userParametersInput() {
    return this._userParameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_identifier: cdktf.stringToTerraform(this._accountIdentifier),
      account_region: cdktf.stringToTerraform(this._accountRegion),
      blueprint_identifier: cdktf.stringToTerraform(this._blueprintIdentifier),
      description: cdktf.stringToTerraform(this._description),
      domain_identifier: cdktf.stringToTerraform(this._domainIdentifier),
      glossary_terms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._glossaryTerms),
      name: cdktf.stringToTerraform(this._name),
      profile_identifier: cdktf.stringToTerraform(this._profileIdentifier),
      project_identifier: cdktf.stringToTerraform(this._projectIdentifier),
      timeouts: datazoneEnvironmentTimeoutsToTerraform(this._timeouts.internalValue),
      user_parameters: cdktf.listMapper(datazoneEnvironmentUserParametersToTerraform, true)(this._userParameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_identifier: {
        value: cdktf.stringToHclTerraform(this._accountIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_region: {
        value: cdktf.stringToHclTerraform(this._accountRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blueprint_identifier: {
        value: cdktf.stringToHclTerraform(this._blueprintIdentifier),
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
      domain_identifier: {
        value: cdktf.stringToHclTerraform(this._domainIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      glossary_terms: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._glossaryTerms),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_identifier: {
        value: cdktf.stringToHclTerraform(this._profileIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_identifier: {
        value: cdktf.stringToHclTerraform(this._projectIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: datazoneEnvironmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatazoneEnvironmentTimeouts",
      },
      user_parameters: {
        value: cdktf.listMapperHcl(datazoneEnvironmentUserParametersToHclTerraform, true)(this._userParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatazoneEnvironmentUserParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
