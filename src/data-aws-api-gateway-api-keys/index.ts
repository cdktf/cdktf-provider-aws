// https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/data-sources/api_gateway_api_keys
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsApiGatewayApiKeysConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/data-sources/api_gateway_api_keys#customer_id DataAwsApiGatewayApiKeys#customer_id}
  */
  readonly customerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/data-sources/api_gateway_api_keys#include_values DataAwsApiGatewayApiKeys#include_values}
  */
  readonly includeValues?: boolean | cdktf.IResolvable;
}
export interface DataAwsApiGatewayApiKeysItems {
}

export function dataAwsApiGatewayApiKeysItemsToTerraform(struct?: DataAwsApiGatewayApiKeysItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsApiGatewayApiKeysItemsToHclTerraform(struct?: DataAwsApiGatewayApiKeysItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsApiGatewayApiKeysItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsApiGatewayApiKeysItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsApiGatewayApiKeysItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // customer_id - computed: true, optional: false, required: false
  public get customerId() {
    return this.getStringAttribute('customer_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // stage_keys - computed: true, optional: false, required: false
  public get stageKeys() {
    return this.getListAttribute('stage_keys');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsApiGatewayApiKeysItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsApiGatewayApiKeysItemsOutputReference {
    return new DataAwsApiGatewayApiKeysItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/data-sources/api_gateway_api_keys aws_api_gateway_api_keys}
*/
export class DataAwsApiGatewayApiKeys extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_api_gateway_api_keys";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsApiGatewayApiKeys resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsApiGatewayApiKeys to import
  * @param importFromId The id of the existing DataAwsApiGatewayApiKeys that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/data-sources/api_gateway_api_keys#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsApiGatewayApiKeys to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_api_gateway_api_keys", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/data-sources/api_gateway_api_keys aws_api_gateway_api_keys} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsApiGatewayApiKeysConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsApiGatewayApiKeysConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_api_keys',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.94.0',
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
    this._customerId = config.customerId;
    this._includeValues = config.includeValues;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customer_id - computed: false, optional: true, required: false
  private _customerId?: string; 
  public get customerId() {
    return this.getStringAttribute('customer_id');
  }
  public set customerId(value: string) {
    this._customerId = value;
  }
  public resetCustomerId() {
    this._customerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerIdInput() {
    return this._customerId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_values - computed: false, optional: true, required: false
  private _includeValues?: boolean | cdktf.IResolvable; 
  public get includeValues() {
    return this.getBooleanAttribute('include_values');
  }
  public set includeValues(value: boolean | cdktf.IResolvable) {
    this._includeValues = value;
  }
  public resetIncludeValues() {
    this._includeValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeValuesInput() {
    return this._includeValues;
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataAwsApiGatewayApiKeysItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customer_id: cdktf.stringToTerraform(this._customerId),
      include_values: cdktf.booleanToTerraform(this._includeValues),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      customer_id: {
        value: cdktf.stringToHclTerraform(this._customerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_values: {
        value: cdktf.booleanToHclTerraform(this._includeValues),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
