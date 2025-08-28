/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/ssoadmin_permissions_boundary_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsoadminPermissionsBoundaryAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/ssoadmin_permissions_boundary_attachment#id SsoadminPermissionsBoundaryAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/ssoadmin_permissions_boundary_attachment#instance_arn SsoadminPermissionsBoundaryAttachment#instance_arn}
  */
  readonly instanceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/ssoadmin_permissions_boundary_attachment#permission_set_arn SsoadminPermissionsBoundaryAttachment#permission_set_arn}
  */
  readonly permissionSetArn: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/ssoadmin_permissions_boundary_attachment#region SsoadminPermissionsBoundaryAttachment#region}
  */
  readonly region?: string;
  /**
  * permissions_boundary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/ssoadmin_permissions_boundary_attachment#permissions_boundary SsoadminPermissionsBoundaryAttachment#permissions_boundary}
  */
  readonly permissionsBoundary: SsoadminPermissionsBoundaryAttachmentPermissionsBoundary;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/ssoadmin_permissions_boundary_attachment#timeouts SsoadminPermissionsBoundaryAttachment#timeouts}
  */
  readonly timeouts?: SsoadminPermissionsBoundaryAttachmentTimeouts;
}
export interface SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/ssoadmin_permissions_boundary_attachment#name SsoadminPermissionsBoundaryAttachment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/ssoadmin_permissions_boundary_attachment#path SsoadminPermissionsBoundaryAttachment#path}
  */
  readonly path?: string;
}

export function ssoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceToTerraform(struct?: SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference | SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function ssoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceToHclTerraform(struct?: SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference | SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._path = value.path;
    }
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface SsoadminPermissionsBoundaryAttachmentPermissionsBoundary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/ssoadmin_permissions_boundary_attachment#managed_policy_arn SsoadminPermissionsBoundaryAttachment#managed_policy_arn}
  */
  readonly managedPolicyArn?: string;
  /**
  * customer_managed_policy_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/ssoadmin_permissions_boundary_attachment#customer_managed_policy_reference SsoadminPermissionsBoundaryAttachment#customer_managed_policy_reference}
  */
  readonly customerManagedPolicyReference?: SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference;
}

export function ssoadminPermissionsBoundaryAttachmentPermissionsBoundaryToTerraform(struct?: SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference | SsoadminPermissionsBoundaryAttachmentPermissionsBoundary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed_policy_arn: cdktf.stringToTerraform(struct!.managedPolicyArn),
    customer_managed_policy_reference: ssoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceToTerraform(struct!.customerManagedPolicyReference),
  }
}


export function ssoadminPermissionsBoundaryAttachmentPermissionsBoundaryToHclTerraform(struct?: SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference | SsoadminPermissionsBoundaryAttachmentPermissionsBoundary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed_policy_arn: {
      value: cdktf.stringToHclTerraform(struct!.managedPolicyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_managed_policy_reference: {
      value: ssoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceToHclTerraform(struct!.customerManagedPolicyReference),
      isBlock: true,
      type: "list",
      storageClassType: "SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsoadminPermissionsBoundaryAttachmentPermissionsBoundary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedPolicyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedPolicyArn = this._managedPolicyArn;
    }
    if (this._customerManagedPolicyReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerManagedPolicyReference = this._customerManagedPolicyReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoadminPermissionsBoundaryAttachmentPermissionsBoundary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managedPolicyArn = undefined;
      this._customerManagedPolicyReference.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managedPolicyArn = value.managedPolicyArn;
      this._customerManagedPolicyReference.internalValue = value.customerManagedPolicyReference;
    }
  }

  // managed_policy_arn - computed: false, optional: true, required: false
  private _managedPolicyArn?: string; 
  public get managedPolicyArn() {
    return this.getStringAttribute('managed_policy_arn');
  }
  public set managedPolicyArn(value: string) {
    this._managedPolicyArn = value;
  }
  public resetManagedPolicyArn() {
    this._managedPolicyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedPolicyArnInput() {
    return this._managedPolicyArn;
  }

  // customer_managed_policy_reference - computed: false, optional: true, required: false
  private _customerManagedPolicyReference = new SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference(this, "customer_managed_policy_reference");
  public get customerManagedPolicyReference() {
    return this._customerManagedPolicyReference;
  }
  public putCustomerManagedPolicyReference(value: SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference) {
    this._customerManagedPolicyReference.internalValue = value;
  }
  public resetCustomerManagedPolicyReference() {
    this._customerManagedPolicyReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedPolicyReferenceInput() {
    return this._customerManagedPolicyReference.internalValue;
  }
}
export interface SsoadminPermissionsBoundaryAttachmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/ssoadmin_permissions_boundary_attachment#create SsoadminPermissionsBoundaryAttachment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/ssoadmin_permissions_boundary_attachment#delete SsoadminPermissionsBoundaryAttachment#delete}
  */
  readonly delete?: string;
}

export function ssoadminPermissionsBoundaryAttachmentTimeoutsToTerraform(struct?: SsoadminPermissionsBoundaryAttachmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function ssoadminPermissionsBoundaryAttachmentTimeoutsToHclTerraform(struct?: SsoadminPermissionsBoundaryAttachmentTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsoadminPermissionsBoundaryAttachmentTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoadminPermissionsBoundaryAttachmentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/ssoadmin_permissions_boundary_attachment aws_ssoadmin_permissions_boundary_attachment}
*/
export class SsoadminPermissionsBoundaryAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssoadmin_permissions_boundary_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SsoadminPermissionsBoundaryAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsoadminPermissionsBoundaryAttachment to import
  * @param importFromId The id of the existing SsoadminPermissionsBoundaryAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/ssoadmin_permissions_boundary_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsoadminPermissionsBoundaryAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssoadmin_permissions_boundary_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/ssoadmin_permissions_boundary_attachment aws_ssoadmin_permissions_boundary_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsoadminPermissionsBoundaryAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: SsoadminPermissionsBoundaryAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssoadmin_permissions_boundary_attachment',
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
    this._id = config.id;
    this._instanceArn = config.instanceArn;
    this._permissionSetArn = config.permissionSetArn;
    this._region = config.region;
    this._permissionsBoundary.internalValue = config.permissionsBoundary;
    this._timeouts.internalValue = config.timeouts;
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

  // instance_arn - computed: false, optional: false, required: true
  private _instanceArn?: string; 
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }
  public set instanceArn(value: string) {
    this._instanceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceArnInput() {
    return this._instanceArn;
  }

  // permission_set_arn - computed: false, optional: false, required: true
  private _permissionSetArn?: string; 
  public get permissionSetArn() {
    return this.getStringAttribute('permission_set_arn');
  }
  public set permissionSetArn(value: string) {
    this._permissionSetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionSetArnInput() {
    return this._permissionSetArn;
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

  // permissions_boundary - computed: false, optional: false, required: true
  private _permissionsBoundary = new SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference(this, "permissions_boundary");
  public get permissionsBoundary() {
    return this._permissionsBoundary;
  }
  public putPermissionsBoundary(value: SsoadminPermissionsBoundaryAttachmentPermissionsBoundary) {
    this._permissionsBoundary.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsBoundaryInput() {
    return this._permissionsBoundary.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SsoadminPermissionsBoundaryAttachmentTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      instance_arn: cdktf.stringToTerraform(this._instanceArn),
      permission_set_arn: cdktf.stringToTerraform(this._permissionSetArn),
      region: cdktf.stringToTerraform(this._region),
      permissions_boundary: ssoadminPermissionsBoundaryAttachmentPermissionsBoundaryToTerraform(this._permissionsBoundary.internalValue),
      timeouts: ssoadminPermissionsBoundaryAttachmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_arn: {
        value: cdktf.stringToHclTerraform(this._instanceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission_set_arn: {
        value: cdktf.stringToHclTerraform(this._permissionSetArn),
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
      permissions_boundary: {
        value: ssoadminPermissionsBoundaryAttachmentPermissionsBoundaryToHclTerraform(this._permissionsBoundary.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryList",
      },
      timeouts: {
        value: ssoadminPermissionsBoundaryAttachmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SsoadminPermissionsBoundaryAttachmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
