/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/data-sources/ssoadmin_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsSsoadminApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/data-sources/ssoadmin_application#application_arn DataAwsSsoadminApplication#application_arn}
  */
  readonly applicationArn: string;
  /**
  * portal_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/data-sources/ssoadmin_application#portal_options DataAwsSsoadminApplication#portal_options}
  */
  readonly portalOptions?: DataAwsSsoadminApplicationPortalOptions[] | cdktf.IResolvable;
}
export interface DataAwsSsoadminApplicationPortalOptionsSignInOptions {
}

export function dataAwsSsoadminApplicationPortalOptionsSignInOptionsToTerraform(struct?: DataAwsSsoadminApplicationPortalOptionsSignInOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsSsoadminApplicationPortalOptionsSignInOptionsToHclTerraform(struct?: DataAwsSsoadminApplicationPortalOptionsSignInOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsSsoadminApplicationPortalOptionsSignInOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSsoadminApplicationPortalOptionsSignInOptions | cdktf.IResolvable | undefined) {
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

  // application_url - computed: true, optional: false, required: false
  public get applicationUrl() {
    return this.getStringAttribute('application_url');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }
}

export class DataAwsSsoadminApplicationPortalOptionsSignInOptionsList extends cdktf.ComplexList {
  public internalValue? : DataAwsSsoadminApplicationPortalOptionsSignInOptions[] | cdktf.IResolvable

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
  public get(index: number): DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference {
    return new DataAwsSsoadminApplicationPortalOptionsSignInOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsSsoadminApplicationPortalOptions {
  /**
  * sign_in_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/data-sources/ssoadmin_application#sign_in_options DataAwsSsoadminApplication#sign_in_options}
  */
  readonly signInOptions?: DataAwsSsoadminApplicationPortalOptionsSignInOptions[] | cdktf.IResolvable;
}

export function dataAwsSsoadminApplicationPortalOptionsToTerraform(struct?: DataAwsSsoadminApplicationPortalOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sign_in_options: cdktf.listMapper(dataAwsSsoadminApplicationPortalOptionsSignInOptionsToTerraform, true)(struct!.signInOptions),
  }
}


export function dataAwsSsoadminApplicationPortalOptionsToHclTerraform(struct?: DataAwsSsoadminApplicationPortalOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sign_in_options: {
      value: cdktf.listMapperHcl(dataAwsSsoadminApplicationPortalOptionsSignInOptionsToHclTerraform, true)(struct!.signInOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsSsoadminApplicationPortalOptionsSignInOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsSsoadminApplicationPortalOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsSsoadminApplicationPortalOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._signInOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signInOptions = this._signInOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSsoadminApplicationPortalOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._signInOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._signInOptions.internalValue = value.signInOptions;
    }
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }

  // sign_in_options - computed: false, optional: true, required: false
  private _signInOptions = new DataAwsSsoadminApplicationPortalOptionsSignInOptionsList(this, "sign_in_options", false);
  public get signInOptions() {
    return this._signInOptions;
  }
  public putSignInOptions(value: DataAwsSsoadminApplicationPortalOptionsSignInOptions[] | cdktf.IResolvable) {
    this._signInOptions.internalValue = value;
  }
  public resetSignInOptions() {
    this._signInOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInOptionsInput() {
    return this._signInOptions.internalValue;
  }
}

export class DataAwsSsoadminApplicationPortalOptionsList extends cdktf.ComplexList {
  public internalValue? : DataAwsSsoadminApplicationPortalOptions[] | cdktf.IResolvable

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
  public get(index: number): DataAwsSsoadminApplicationPortalOptionsOutputReference {
    return new DataAwsSsoadminApplicationPortalOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/data-sources/ssoadmin_application aws_ssoadmin_application}
*/
export class DataAwsSsoadminApplication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssoadmin_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsSsoadminApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsSsoadminApplication to import
  * @param importFromId The id of the existing DataAwsSsoadminApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/data-sources/ssoadmin_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsSsoadminApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssoadmin_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/data-sources/ssoadmin_application aws_ssoadmin_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSsoadminApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsSsoadminApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssoadmin_application',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.63.1',
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
    this._applicationArn = config.applicationArn;
    this._portalOptions.internalValue = config.portalOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_account - computed: true, optional: false, required: false
  public get applicationAccount() {
    return this.getStringAttribute('application_account');
  }

  // application_arn - computed: false, optional: false, required: true
  private _applicationArn?: string; 
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }
  public set applicationArn(value: string) {
    this._applicationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationArnInput() {
    return this._applicationArn;
  }

  // application_provider_arn - computed: true, optional: false, required: false
  public get applicationProviderArn() {
    return this.getStringAttribute('application_provider_arn');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_arn - computed: true, optional: false, required: false
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // portal_options - computed: false, optional: true, required: false
  private _portalOptions = new DataAwsSsoadminApplicationPortalOptionsList(this, "portal_options", false);
  public get portalOptions() {
    return this._portalOptions;
  }
  public putPortalOptions(value: DataAwsSsoadminApplicationPortalOptions[] | cdktf.IResolvable) {
    this._portalOptions.internalValue = value;
  }
  public resetPortalOptions() {
    this._portalOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalOptionsInput() {
    return this._portalOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_arn: cdktf.stringToTerraform(this._applicationArn),
      portal_options: cdktf.listMapper(dataAwsSsoadminApplicationPortalOptionsToTerraform, true)(this._portalOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_arn: {
        value: cdktf.stringToHclTerraform(this._applicationArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portal_options: {
        value: cdktf.listMapperHcl(dataAwsSsoadminApplicationPortalOptionsToHclTerraform, true)(this._portalOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsSsoadminApplicationPortalOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
