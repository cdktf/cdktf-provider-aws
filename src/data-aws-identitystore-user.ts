// https://www.terraform.io/docs/providers/aws/d/identitystore_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsIdentitystoreUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#id DataAwsIdentitystoreUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#identity_store_id DataAwsIdentitystoreUser#identity_store_id}
  */
  readonly identityStoreId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#user_id DataAwsIdentitystoreUser#user_id}
  */
  readonly userId?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#filter DataAwsIdentitystoreUser#filter}
  */
  readonly filter: DataAwsIdentitystoreUserFilter[] | cdktf.IResolvable;
}
export interface DataAwsIdentitystoreUserFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_path DataAwsIdentitystoreUser#attribute_path}
  */
  readonly attributePath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_value DataAwsIdentitystoreUser#attribute_value}
  */
  readonly attributeValue: string;
}

export function dataAwsIdentitystoreUserFilterToTerraform(struct?: DataAwsIdentitystoreUserFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_path: cdktf.stringToTerraform(struct!.attributePath),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
  }
}

export class DataAwsIdentitystoreUserFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsIdentitystoreUserFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributePath = this._attributePath;
    }
    if (this._attributeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValue = this._attributeValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsIdentitystoreUserFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributePath = undefined;
      this._attributeValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributePath = value.attributePath;
      this._attributeValue = value.attributeValue;
    }
  }

  // attribute_path - computed: false, optional: false, required: true
  private _attributePath?: string; 
  public get attributePath() {
    return this.getStringAttribute('attribute_path');
  }
  public set attributePath(value: string) {
    this._attributePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributePathInput() {
    return this._attributePath;
  }

  // attribute_value - computed: false, optional: false, required: true
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
  }
}

export class DataAwsIdentitystoreUserFilterList extends cdktf.ComplexList {
  public internalValue? : DataAwsIdentitystoreUserFilter[] | cdktf.IResolvable

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
  public get(index: number): DataAwsIdentitystoreUserFilterOutputReference {
    return new DataAwsIdentitystoreUserFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user aws_identitystore_user}
*/
export class DataAwsIdentitystoreUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_identitystore_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user aws_identitystore_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsIdentitystoreUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsIdentitystoreUserConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_identitystore_user',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.28.0',
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
    this._identityStoreId = config.identityStoreId;
    this._userId = config.userId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // identity_store_id - computed: false, optional: false, required: true
  private _identityStoreId?: string; 
  public get identityStoreId() {
    return this.getStringAttribute('identity_store_id');
  }
  public set identityStoreId(value: string) {
    this._identityStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityStoreIdInput() {
    return this._identityStoreId;
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new DataAwsIdentitystoreUserFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataAwsIdentitystoreUserFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      identity_store_id: cdktf.stringToTerraform(this._identityStoreId),
      user_id: cdktf.stringToTerraform(this._userId),
      filter: cdktf.listMapper(dataAwsIdentitystoreUserFilterToTerraform, true)(this._filter.internalValue),
    };
  }
}
