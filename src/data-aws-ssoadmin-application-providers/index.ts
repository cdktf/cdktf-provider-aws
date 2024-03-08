// https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/data-sources/ssoadmin_application_providers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsSsoadminApplicationProvidersConfig extends cdktf.TerraformMetaArguments {
  /**
  * application_providers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/data-sources/ssoadmin_application_providers#application_providers DataAwsSsoadminApplicationProviders#application_providers}
  */
  readonly applicationProviders?: DataAwsSsoadminApplicationProvidersApplicationProviders[] | cdktf.IResolvable;
}
export interface DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData {
}

export function dataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataToTerraform(struct?: DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataToHclTerraform(struct?: DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // icon_url - computed: true, optional: false, required: false
  public get iconUrl() {
    return this.getStringAttribute('icon_url');
  }
}

export class DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList extends cdktf.ComplexList {
  public internalValue? : DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData[] | cdktf.IResolvable

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
  public get(index: number): DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference {
    return new DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsSsoadminApplicationProvidersApplicationProviders {
  /**
  * display_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/data-sources/ssoadmin_application_providers#display_data DataAwsSsoadminApplicationProviders#display_data}
  */
  readonly displayData?: DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData[] | cdktf.IResolvable;
}

export function dataAwsSsoadminApplicationProvidersApplicationProvidersToTerraform(struct?: DataAwsSsoadminApplicationProvidersApplicationProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_data: cdktf.listMapper(dataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataToTerraform, true)(struct!.displayData),
  }
}


export function dataAwsSsoadminApplicationProvidersApplicationProvidersToHclTerraform(struct?: DataAwsSsoadminApplicationProvidersApplicationProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_data: {
      value: cdktf.listMapperHcl(dataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataToHclTerraform, true)(struct!.displayData),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsSsoadminApplicationProvidersApplicationProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayData = this._displayData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSsoadminApplicationProvidersApplicationProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayData.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayData.internalValue = value.displayData;
    }
  }

  // application_provider_arn - computed: true, optional: false, required: false
  public get applicationProviderArn() {
    return this.getStringAttribute('application_provider_arn');
  }

  // federation_protocol - computed: true, optional: false, required: false
  public get federationProtocol() {
    return this.getStringAttribute('federation_protocol');
  }

  // display_data - computed: false, optional: true, required: false
  private _displayData = new DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList(this, "display_data", false);
  public get displayData() {
    return this._displayData;
  }
  public putDisplayData(value: DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData[] | cdktf.IResolvable) {
    this._displayData.internalValue = value;
  }
  public resetDisplayData() {
    this._displayData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayDataInput() {
    return this._displayData.internalValue;
  }
}

export class DataAwsSsoadminApplicationProvidersApplicationProvidersList extends cdktf.ComplexList {
  public internalValue? : DataAwsSsoadminApplicationProvidersApplicationProviders[] | cdktf.IResolvable

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
  public get(index: number): DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference {
    return new DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/data-sources/ssoadmin_application_providers aws_ssoadmin_application_providers}
*/
export class DataAwsSsoadminApplicationProviders extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssoadmin_application_providers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsSsoadminApplicationProviders resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsSsoadminApplicationProviders to import
  * @param importFromId The id of the existing DataAwsSsoadminApplicationProviders that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/data-sources/ssoadmin_application_providers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsSsoadminApplicationProviders to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssoadmin_application_providers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/data-sources/ssoadmin_application_providers aws_ssoadmin_application_providers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSsoadminApplicationProvidersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsSsoadminApplicationProvidersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ssoadmin_application_providers',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.40.0',
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
    this._applicationProviders.internalValue = config.applicationProviders;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // application_providers - computed: false, optional: true, required: false
  private _applicationProviders = new DataAwsSsoadminApplicationProvidersApplicationProvidersList(this, "application_providers", false);
  public get applicationProviders() {
    return this._applicationProviders;
  }
  public putApplicationProviders(value: DataAwsSsoadminApplicationProvidersApplicationProviders[] | cdktf.IResolvable) {
    this._applicationProviders.internalValue = value;
  }
  public resetApplicationProviders() {
    this._applicationProviders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationProvidersInput() {
    return this._applicationProviders.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_providers: cdktf.listMapper(dataAwsSsoadminApplicationProvidersApplicationProvidersToTerraform, true)(this._applicationProviders.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_providers: {
        value: cdktf.listMapperHcl(dataAwsSsoadminApplicationProvidersApplicationProvidersToHclTerraform, true)(this._applicationProviders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsSsoadminApplicationProvidersApplicationProvidersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
