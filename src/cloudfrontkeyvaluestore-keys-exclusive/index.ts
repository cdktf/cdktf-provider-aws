/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontkeyvaluestoreKeysExclusiveConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Amazon Resource Name (ARN) of the Key Value Store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive#key_value_store_arn CloudfrontkeyvaluestoreKeysExclusive#key_value_store_arn}
  */
  readonly keyValueStoreArn: string;
  /**
  * resource_key_value_pair block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive#resource_key_value_pair CloudfrontkeyvaluestoreKeysExclusive#resource_key_value_pair}
  */
  readonly resourceKeyValuePair?: CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair[] | cdktf.IResolvable;
}
export interface CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair {
  /**
  * The key to put.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive#key CloudfrontkeyvaluestoreKeysExclusive#key}
  */
  readonly key: string;
  /**
  * The value to put.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive#value CloudfrontkeyvaluestoreKeysExclusive#value}
  */
  readonly value: string;
}

export function cloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairToTerraform(struct?: CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairToHclTerraform(struct?: CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList extends cdktf.ComplexList {
  public internalValue? : CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference {
    return new CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive aws_cloudfrontkeyvaluestore_keys_exclusive}
*/
export class CloudfrontkeyvaluestoreKeysExclusive extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudfrontkeyvaluestore_keys_exclusive";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudfrontkeyvaluestoreKeysExclusive resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudfrontkeyvaluestoreKeysExclusive to import
  * @param importFromId The id of the existing CloudfrontkeyvaluestoreKeysExclusive that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudfrontkeyvaluestoreKeysExclusive to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudfrontkeyvaluestore_keys_exclusive", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive aws_cloudfrontkeyvaluestore_keys_exclusive} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontkeyvaluestoreKeysExclusiveConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontkeyvaluestoreKeysExclusiveConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfrontkeyvaluestore_keys_exclusive',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.99.0',
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
    this._keyValueStoreArn = config.keyValueStoreArn;
    this._resourceKeyValuePair.internalValue = config.resourceKeyValuePair;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // key_value_store_arn - computed: false, optional: false, required: true
  private _keyValueStoreArn?: string; 
  public get keyValueStoreArn() {
    return this.getStringAttribute('key_value_store_arn');
  }
  public set keyValueStoreArn(value: string) {
    this._keyValueStoreArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValueStoreArnInput() {
    return this._keyValueStoreArn;
  }

  // total_size_in_bytes - computed: true, optional: false, required: false
  public get totalSizeInBytes() {
    return this.getNumberAttribute('total_size_in_bytes');
  }

  // resource_key_value_pair - computed: false, optional: true, required: false
  private _resourceKeyValuePair = new CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList(this, "resource_key_value_pair", true);
  public get resourceKeyValuePair() {
    return this._resourceKeyValuePair;
  }
  public putResourceKeyValuePair(value: CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair[] | cdktf.IResolvable) {
    this._resourceKeyValuePair.internalValue = value;
  }
  public resetResourceKeyValuePair() {
    this._resourceKeyValuePair.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceKeyValuePairInput() {
    return this._resourceKeyValuePair.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key_value_store_arn: cdktf.stringToTerraform(this._keyValueStoreArn),
      resource_key_value_pair: cdktf.listMapper(cloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairToTerraform, true)(this._resourceKeyValuePair.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      key_value_store_arn: {
        value: cdktf.stringToHclTerraform(this._keyValueStoreArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_key_value_pair: {
        value: cdktf.listMapperHcl(cloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairToHclTerraform, true)(this._resourceKeyValuePair.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
