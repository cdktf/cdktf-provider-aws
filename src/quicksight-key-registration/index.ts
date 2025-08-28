/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/quicksight_key_registration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuicksightKeyRegistrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/quicksight_key_registration#aws_account_id QuicksightKeyRegistration#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/quicksight_key_registration#region QuicksightKeyRegistration#region}
  */
  readonly region?: string;
  /**
  * key_registration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/quicksight_key_registration#key_registration QuicksightKeyRegistration#key_registration}
  */
  readonly keyRegistration?: QuicksightKeyRegistrationKeyRegistration[] | cdktf.IResolvable;
}
export interface QuicksightKeyRegistrationKeyRegistration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/quicksight_key_registration#default_key QuicksightKeyRegistration#default_key}
  */
  readonly defaultKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/quicksight_key_registration#key_arn QuicksightKeyRegistration#key_arn}
  */
  readonly keyArn: string;
}

export function quicksightKeyRegistrationKeyRegistrationToTerraform(struct?: QuicksightKeyRegistrationKeyRegistration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_key: cdktf.booleanToTerraform(struct!.defaultKey),
    key_arn: cdktf.stringToTerraform(struct!.keyArn),
  }
}


export function quicksightKeyRegistrationKeyRegistrationToHclTerraform(struct?: QuicksightKeyRegistrationKeyRegistration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_key: {
      value: cdktf.booleanToHclTerraform(struct!.defaultKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_arn: {
      value: cdktf.stringToHclTerraform(struct!.keyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightKeyRegistrationKeyRegistrationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightKeyRegistrationKeyRegistration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultKey = this._defaultKey;
    }
    if (this._keyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyArn = this._keyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightKeyRegistrationKeyRegistration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultKey = undefined;
      this._keyArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultKey = value.defaultKey;
      this._keyArn = value.keyArn;
    }
  }

  // default_key - computed: true, optional: true, required: false
  private _defaultKey?: boolean | cdktf.IResolvable; 
  public get defaultKey() {
    return this.getBooleanAttribute('default_key');
  }
  public set defaultKey(value: boolean | cdktf.IResolvable) {
    this._defaultKey = value;
  }
  public resetDefaultKey() {
    this._defaultKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultKeyInput() {
    return this._defaultKey;
  }

  // key_arn - computed: false, optional: false, required: true
  private _keyArn?: string; 
  public get keyArn() {
    return this.getStringAttribute('key_arn');
  }
  public set keyArn(value: string) {
    this._keyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyArnInput() {
    return this._keyArn;
  }
}

export class QuicksightKeyRegistrationKeyRegistrationList extends cdktf.ComplexList {
  public internalValue? : QuicksightKeyRegistrationKeyRegistration[] | cdktf.IResolvable

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
  public get(index: number): QuicksightKeyRegistrationKeyRegistrationOutputReference {
    return new QuicksightKeyRegistrationKeyRegistrationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/quicksight_key_registration aws_quicksight_key_registration}
*/
export class QuicksightKeyRegistration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_quicksight_key_registration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QuicksightKeyRegistration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuicksightKeyRegistration to import
  * @param importFromId The id of the existing QuicksightKeyRegistration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/quicksight_key_registration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuicksightKeyRegistration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_quicksight_key_registration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/quicksight_key_registration aws_quicksight_key_registration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightKeyRegistrationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: QuicksightKeyRegistrationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_quicksight_key_registration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.11.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsAccountId = config.awsAccountId;
    this._region = config.region;
    this._keyRegistration.internalValue = config.keyRegistration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // key_registration - computed: false, optional: true, required: false
  private _keyRegistration = new QuicksightKeyRegistrationKeyRegistrationList(this, "key_registration", true);
  public get keyRegistration() {
    return this._keyRegistration;
  }
  public putKeyRegistration(value: QuicksightKeyRegistrationKeyRegistration[] | cdktf.IResolvable) {
    this._keyRegistration.internalValue = value;
  }
  public resetKeyRegistration() {
    this._keyRegistration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRegistrationInput() {
    return this._keyRegistration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      region: cdktf.stringToTerraform(this._region),
      key_registration: cdktf.listMapper(quicksightKeyRegistrationKeyRegistrationToTerraform, true)(this._keyRegistration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_id: {
        value: cdktf.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_registration: {
        value: cdktf.listMapperHcl(quicksightKeyRegistrationKeyRegistrationToHclTerraform, true)(this._keyRegistration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "QuicksightKeyRegistrationKeyRegistrationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
