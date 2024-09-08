/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PaymentcryptographyKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key#deletion_window_in_days PaymentcryptographyKey#deletion_window_in_days}
  */
  readonly deletionWindowInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key#enabled PaymentcryptographyKey#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key#exportable PaymentcryptographyKey#exportable}
  */
  readonly exportable: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key#key_check_value_algorithm PaymentcryptographyKey#key_check_value_algorithm}
  */
  readonly keyCheckValueAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key#tags PaymentcryptographyKey#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * key_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key#key_attributes PaymentcryptographyKey#key_attributes}
  */
  readonly keyAttributes?: PaymentcryptographyKeyKeyAttributes;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key#timeouts PaymentcryptographyKey#timeouts}
  */
  readonly timeouts?: PaymentcryptographyKeyTimeouts;
}
export interface PaymentcryptographyKeyKeyAttributesKeyModesOfUse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key#decrypt PaymentcryptographyKey#decrypt}
  */
  readonly decrypt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key#derive_key PaymentcryptographyKey#derive_key}
  */
  readonly deriveKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key#encrypt PaymentcryptographyKey#encrypt}
  */
  readonly encrypt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key#generate PaymentcryptographyKey#generate}
  */
  readonly generate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key#no_restrictions PaymentcryptographyKey#no_restrictions}
  */
  readonly noRestrictions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key#sign PaymentcryptographyKey#sign}
  */
  readonly sign?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key#unwrap PaymentcryptographyKey#unwrap}
  */
  readonly unwrap?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key#verify PaymentcryptographyKey#verify}
  */
  readonly verify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key#wrap PaymentcryptographyKey#wrap}
  */
  readonly wrap?: boolean | cdktf.IResolvable;
}

export function paymentcryptographyKeyKeyAttributesKeyModesOfUseToTerraform(struct?: PaymentcryptographyKeyKeyAttributesKeyModesOfUse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decrypt: cdktf.booleanToTerraform(struct!.decrypt),
    derive_key: cdktf.booleanToTerraform(struct!.deriveKey),
    encrypt: cdktf.booleanToTerraform(struct!.encrypt),
    generate: cdktf.booleanToTerraform(struct!.generate),
    no_restrictions: cdktf.booleanToTerraform(struct!.noRestrictions),
    sign: cdktf.booleanToTerraform(struct!.sign),
    unwrap: cdktf.booleanToTerraform(struct!.unwrap),
    verify: cdktf.booleanToTerraform(struct!.verify),
    wrap: cdktf.booleanToTerraform(struct!.wrap),
  }
}


export function paymentcryptographyKeyKeyAttributesKeyModesOfUseToHclTerraform(struct?: PaymentcryptographyKeyKeyAttributesKeyModesOfUse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decrypt: {
      value: cdktf.booleanToHclTerraform(struct!.decrypt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    derive_key: {
      value: cdktf.booleanToHclTerraform(struct!.deriveKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encrypt: {
      value: cdktf.booleanToHclTerraform(struct!.encrypt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    generate: {
      value: cdktf.booleanToHclTerraform(struct!.generate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_restrictions: {
      value: cdktf.booleanToHclTerraform(struct!.noRestrictions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sign: {
      value: cdktf.booleanToHclTerraform(struct!.sign),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unwrap: {
      value: cdktf.booleanToHclTerraform(struct!.unwrap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify: {
      value: cdktf.booleanToHclTerraform(struct!.verify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wrap: {
      value: cdktf.booleanToHclTerraform(struct!.wrap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PaymentcryptographyKeyKeyAttributesKeyModesOfUse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decrypt !== undefined) {
      hasAnyValues = true;
      internalValueResult.decrypt = this._decrypt;
    }
    if (this._deriveKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.deriveKey = this._deriveKey;
    }
    if (this._encrypt !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypt = this._encrypt;
    }
    if (this._generate !== undefined) {
      hasAnyValues = true;
      internalValueResult.generate = this._generate;
    }
    if (this._noRestrictions !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRestrictions = this._noRestrictions;
    }
    if (this._sign !== undefined) {
      hasAnyValues = true;
      internalValueResult.sign = this._sign;
    }
    if (this._unwrap !== undefined) {
      hasAnyValues = true;
      internalValueResult.unwrap = this._unwrap;
    }
    if (this._verify !== undefined) {
      hasAnyValues = true;
      internalValueResult.verify = this._verify;
    }
    if (this._wrap !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrap = this._wrap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PaymentcryptographyKeyKeyAttributesKeyModesOfUse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decrypt = undefined;
      this._deriveKey = undefined;
      this._encrypt = undefined;
      this._generate = undefined;
      this._noRestrictions = undefined;
      this._sign = undefined;
      this._unwrap = undefined;
      this._verify = undefined;
      this._wrap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decrypt = value.decrypt;
      this._deriveKey = value.deriveKey;
      this._encrypt = value.encrypt;
      this._generate = value.generate;
      this._noRestrictions = value.noRestrictions;
      this._sign = value.sign;
      this._unwrap = value.unwrap;
      this._verify = value.verify;
      this._wrap = value.wrap;
    }
  }

  // decrypt - computed: true, optional: true, required: false
  private _decrypt?: boolean | cdktf.IResolvable; 
  public get decrypt() {
    return this.getBooleanAttribute('decrypt');
  }
  public set decrypt(value: boolean | cdktf.IResolvable) {
    this._decrypt = value;
  }
  public resetDecrypt() {
    this._decrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptInput() {
    return this._decrypt;
  }

  // derive_key - computed: true, optional: true, required: false
  private _deriveKey?: boolean | cdktf.IResolvable; 
  public get deriveKey() {
    return this.getBooleanAttribute('derive_key');
  }
  public set deriveKey(value: boolean | cdktf.IResolvable) {
    this._deriveKey = value;
  }
  public resetDeriveKey() {
    this._deriveKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deriveKeyInput() {
    return this._deriveKey;
  }

  // encrypt - computed: true, optional: true, required: false
  private _encrypt?: boolean | cdktf.IResolvable; 
  public get encrypt() {
    return this.getBooleanAttribute('encrypt');
  }
  public set encrypt(value: boolean | cdktf.IResolvable) {
    this._encrypt = value;
  }
  public resetEncrypt() {
    this._encrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptInput() {
    return this._encrypt;
  }

  // generate - computed: true, optional: true, required: false
  private _generate?: boolean | cdktf.IResolvable; 
  public get generate() {
    return this.getBooleanAttribute('generate');
  }
  public set generate(value: boolean | cdktf.IResolvable) {
    this._generate = value;
  }
  public resetGenerate() {
    this._generate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateInput() {
    return this._generate;
  }

  // no_restrictions - computed: true, optional: true, required: false
  private _noRestrictions?: boolean | cdktf.IResolvable; 
  public get noRestrictions() {
    return this.getBooleanAttribute('no_restrictions');
  }
  public set noRestrictions(value: boolean | cdktf.IResolvable) {
    this._noRestrictions = value;
  }
  public resetNoRestrictions() {
    this._noRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRestrictionsInput() {
    return this._noRestrictions;
  }

  // sign - computed: true, optional: true, required: false
  private _sign?: boolean | cdktf.IResolvable; 
  public get sign() {
    return this.getBooleanAttribute('sign');
  }
  public set sign(value: boolean | cdktf.IResolvable) {
    this._sign = value;
  }
  public resetSign() {
    this._sign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInput() {
    return this._sign;
  }

  // unwrap - computed: true, optional: true, required: false
  private _unwrap?: boolean | cdktf.IResolvable; 
  public get unwrap() {
    return this.getBooleanAttribute('unwrap');
  }
  public set unwrap(value: boolean | cdktf.IResolvable) {
    this._unwrap = value;
  }
  public resetUnwrap() {
    this._unwrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unwrapInput() {
    return this._unwrap;
  }

  // verify - computed: true, optional: true, required: false
  private _verify?: boolean | cdktf.IResolvable; 
  public get verify() {
    return this.getBooleanAttribute('verify');
  }
  public set verify(value: boolean | cdktf.IResolvable) {
    this._verify = value;
  }
  public resetVerify() {
    this._verify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }

  // wrap - computed: true, optional: true, required: false
  private _wrap?: boolean | cdktf.IResolvable; 
  public get wrap() {
    return this.getBooleanAttribute('wrap');
  }
  public set wrap(value: boolean | cdktf.IResolvable) {
    this._wrap = value;
  }
  public resetWrap() {
    this._wrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrapInput() {
    return this._wrap;
  }
}
export interface PaymentcryptographyKeyKeyAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key#key_algorithm PaymentcryptographyKey#key_algorithm}
  */
  readonly keyAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key#key_class PaymentcryptographyKey#key_class}
  */
  readonly keyClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key#key_usage PaymentcryptographyKey#key_usage}
  */
  readonly keyUsage: string;
  /**
  * key_modes_of_use block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key#key_modes_of_use PaymentcryptographyKey#key_modes_of_use}
  */
  readonly keyModesOfUse?: PaymentcryptographyKeyKeyAttributesKeyModesOfUse;
}

export function paymentcryptographyKeyKeyAttributesToTerraform(struct?: PaymentcryptographyKeyKeyAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_algorithm: cdktf.stringToTerraform(struct!.keyAlgorithm),
    key_class: cdktf.stringToTerraform(struct!.keyClass),
    key_usage: cdktf.stringToTerraform(struct!.keyUsage),
    key_modes_of_use: paymentcryptographyKeyKeyAttributesKeyModesOfUseToTerraform(struct!.keyModesOfUse),
  }
}


export function paymentcryptographyKeyKeyAttributesToHclTerraform(struct?: PaymentcryptographyKeyKeyAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.keyAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_class: {
      value: cdktf.stringToHclTerraform(struct!.keyClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_usage: {
      value: cdktf.stringToHclTerraform(struct!.keyUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_modes_of_use: {
      value: paymentcryptographyKeyKeyAttributesKeyModesOfUseToHclTerraform(struct!.keyModesOfUse),
      isBlock: true,
      type: "struct",
      storageClassType: "PaymentcryptographyKeyKeyAttributesKeyModesOfUse",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PaymentcryptographyKeyKeyAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PaymentcryptographyKeyKeyAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAlgorithm = this._keyAlgorithm;
    }
    if (this._keyClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyClass = this._keyClass;
    }
    if (this._keyUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUsage = this._keyUsage;
    }
    if (this._keyModesOfUse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyModesOfUse = this._keyModesOfUse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PaymentcryptographyKeyKeyAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyAlgorithm = undefined;
      this._keyClass = undefined;
      this._keyUsage = undefined;
      this._keyModesOfUse.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyAlgorithm = value.keyAlgorithm;
      this._keyClass = value.keyClass;
      this._keyUsage = value.keyUsage;
      this._keyModesOfUse.internalValue = value.keyModesOfUse;
    }
  }

  // key_algorithm - computed: false, optional: false, required: true
  private _keyAlgorithm?: string; 
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }
  public set keyAlgorithm(value: string) {
    this._keyAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAlgorithmInput() {
    return this._keyAlgorithm;
  }

  // key_class - computed: false, optional: false, required: true
  private _keyClass?: string; 
  public get keyClass() {
    return this.getStringAttribute('key_class');
  }
  public set keyClass(value: string) {
    this._keyClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyClassInput() {
    return this._keyClass;
  }

  // key_usage - computed: false, optional: false, required: true
  private _keyUsage?: string; 
  public get keyUsage() {
    return this.getStringAttribute('key_usage');
  }
  public set keyUsage(value: string) {
    this._keyUsage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage;
  }

  // key_modes_of_use - computed: false, optional: true, required: false
  private _keyModesOfUse = new PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference(this, "key_modes_of_use");
  public get keyModesOfUse() {
    return this._keyModesOfUse;
  }
  public putKeyModesOfUse(value: PaymentcryptographyKeyKeyAttributesKeyModesOfUse) {
    this._keyModesOfUse.internalValue = value;
  }
  public resetKeyModesOfUse() {
    this._keyModesOfUse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyModesOfUseInput() {
    return this._keyModesOfUse.internalValue;
  }
}
export interface PaymentcryptographyKeyTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key#create PaymentcryptographyKey#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key#delete PaymentcryptographyKey#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key#update PaymentcryptographyKey#update}
  */
  readonly update?: string;
}

export function paymentcryptographyKeyTimeoutsToTerraform(struct?: PaymentcryptographyKeyTimeouts | cdktf.IResolvable): any {
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


export function paymentcryptographyKeyTimeoutsToHclTerraform(struct?: PaymentcryptographyKeyTimeouts | cdktf.IResolvable): any {
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

export class PaymentcryptographyKeyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PaymentcryptographyKeyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PaymentcryptographyKeyTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key aws_paymentcryptography_key}
*/
export class PaymentcryptographyKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_paymentcryptography_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PaymentcryptographyKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PaymentcryptographyKey to import
  * @param importFromId The id of the existing PaymentcryptographyKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PaymentcryptographyKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_paymentcryptography_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/paymentcryptography_key aws_paymentcryptography_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PaymentcryptographyKeyConfig
  */
  public constructor(scope: Construct, id: string, config: PaymentcryptographyKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_paymentcryptography_key',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.66.0',
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
    this._deletionWindowInDays = config.deletionWindowInDays;
    this._enabled = config.enabled;
    this._exportable = config.exportable;
    this._keyCheckValueAlgorithm = config.keyCheckValueAlgorithm;
    this._tags = config.tags;
    this._keyAttributes.internalValue = config.keyAttributes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // deletion_window_in_days - computed: true, optional: true, required: false
  private _deletionWindowInDays?: number; 
  public get deletionWindowInDays() {
    return this.getNumberAttribute('deletion_window_in_days');
  }
  public set deletionWindowInDays(value: number) {
    this._deletionWindowInDays = value;
  }
  public resetDeletionWindowInDays() {
    this._deletionWindowInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionWindowInDaysInput() {
    return this._deletionWindowInDays;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // exportable - computed: false, optional: false, required: true
  private _exportable?: boolean | cdktf.IResolvable; 
  public get exportable() {
    return this.getBooleanAttribute('exportable');
  }
  public set exportable(value: boolean | cdktf.IResolvable) {
    this._exportable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportableInput() {
    return this._exportable;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_check_value - computed: true, optional: false, required: false
  public get keyCheckValue() {
    return this.getStringAttribute('key_check_value');
  }

  // key_check_value_algorithm - computed: true, optional: true, required: false
  private _keyCheckValueAlgorithm?: string; 
  public get keyCheckValueAlgorithm() {
    return this.getStringAttribute('key_check_value_algorithm');
  }
  public set keyCheckValueAlgorithm(value: string) {
    this._keyCheckValueAlgorithm = value;
  }
  public resetKeyCheckValueAlgorithm() {
    this._keyCheckValueAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyCheckValueAlgorithmInput() {
    return this._keyCheckValueAlgorithm;
  }

  // key_origin - computed: true, optional: false, required: false
  public get keyOrigin() {
    return this.getStringAttribute('key_origin');
  }

  // key_state - computed: true, optional: false, required: false
  public get keyState() {
    return this.getStringAttribute('key_state');
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // key_attributes - computed: false, optional: true, required: false
  private _keyAttributes = new PaymentcryptographyKeyKeyAttributesOutputReference(this, "key_attributes");
  public get keyAttributes() {
    return this._keyAttributes;
  }
  public putKeyAttributes(value: PaymentcryptographyKeyKeyAttributes) {
    this._keyAttributes.internalValue = value;
  }
  public resetKeyAttributes() {
    this._keyAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAttributesInput() {
    return this._keyAttributes.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PaymentcryptographyKeyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PaymentcryptographyKeyTimeouts) {
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
      deletion_window_in_days: cdktf.numberToTerraform(this._deletionWindowInDays),
      enabled: cdktf.booleanToTerraform(this._enabled),
      exportable: cdktf.booleanToTerraform(this._exportable),
      key_check_value_algorithm: cdktf.stringToTerraform(this._keyCheckValueAlgorithm),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      key_attributes: paymentcryptographyKeyKeyAttributesToTerraform(this._keyAttributes.internalValue),
      timeouts: paymentcryptographyKeyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_window_in_days: {
        value: cdktf.numberToHclTerraform(this._deletionWindowInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exportable: {
        value: cdktf.booleanToHclTerraform(this._exportable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_check_value_algorithm: {
        value: cdktf.stringToHclTerraform(this._keyCheckValueAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      key_attributes: {
        value: paymentcryptographyKeyKeyAttributesToHclTerraform(this._keyAttributes.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PaymentcryptographyKeyKeyAttributes",
      },
      timeouts: {
        value: paymentcryptographyKeyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PaymentcryptographyKeyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
