/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VerifiedpermissionsPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_policy#policy_store_id VerifiedpermissionsPolicy#policy_store_id}
  */
  readonly policyStoreId: string;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_policy#definition VerifiedpermissionsPolicy#definition}
  */
  readonly definition?: VerifiedpermissionsPolicyDefinition[] | cdktf.IResolvable;
}
export interface VerifiedpermissionsPolicyDefinitionStatic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_policy#description VerifiedpermissionsPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_policy#statement VerifiedpermissionsPolicy#statement}
  */
  readonly statement: string;
}

export function verifiedpermissionsPolicyDefinitionStaticToTerraform(struct?: VerifiedpermissionsPolicyDefinitionStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    statement: cdktf.stringToTerraform(struct!.statement),
  }
}


export function verifiedpermissionsPolicyDefinitionStaticToHclTerraform(struct?: VerifiedpermissionsPolicyDefinitionStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statement: {
      value: cdktf.stringToHclTerraform(struct!.statement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsPolicyDefinitionStaticOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VerifiedpermissionsPolicyDefinitionStatic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._statement !== undefined) {
      hasAnyValues = true;
      internalValueResult.statement = this._statement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsPolicyDefinitionStatic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._statement = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._statement = value.statement;
    }
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

  // statement - computed: false, optional: false, required: true
  private _statement?: string; 
  public get statement() {
    return this.getStringAttribute('statement');
  }
  public set statement(value: string) {
    this._statement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement;
  }
}

export class VerifiedpermissionsPolicyDefinitionStaticList extends cdktf.ComplexList {
  public internalValue? : VerifiedpermissionsPolicyDefinitionStatic[] | cdktf.IResolvable

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
  public get(index: number): VerifiedpermissionsPolicyDefinitionStaticOutputReference {
    return new VerifiedpermissionsPolicyDefinitionStaticOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_policy#entity_id VerifiedpermissionsPolicy#entity_id}
  */
  readonly entityId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_policy#entity_type VerifiedpermissionsPolicy#entity_type}
  */
  readonly entityType: string;
}

export function verifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalToTerraform(struct?: VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_id: cdktf.stringToTerraform(struct!.entityId),
    entity_type: cdktf.stringToTerraform(struct!.entityType),
  }
}


export function verifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalToHclTerraform(struct?: VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_id: {
      value: cdktf.stringToHclTerraform(struct!.entityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_type: {
      value: cdktf.stringToHclTerraform(struct!.entityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityId = this._entityId;
    }
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityId = undefined;
      this._entityType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityId = value.entityId;
      this._entityType = value.entityType;
    }
  }

  // entity_id - computed: false, optional: false, required: true
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }
}

export class VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList extends cdktf.ComplexList {
  public internalValue? : VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal[] | cdktf.IResolvable

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
  public get(index: number): VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference {
    return new VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VerifiedpermissionsPolicyDefinitionTemplateLinkedResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_policy#entity_id VerifiedpermissionsPolicy#entity_id}
  */
  readonly entityId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_policy#entity_type VerifiedpermissionsPolicy#entity_type}
  */
  readonly entityType: string;
}

export function verifiedpermissionsPolicyDefinitionTemplateLinkedResourceToTerraform(struct?: VerifiedpermissionsPolicyDefinitionTemplateLinkedResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_id: cdktf.stringToTerraform(struct!.entityId),
    entity_type: cdktf.stringToTerraform(struct!.entityType),
  }
}


export function verifiedpermissionsPolicyDefinitionTemplateLinkedResourceToHclTerraform(struct?: VerifiedpermissionsPolicyDefinitionTemplateLinkedResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_id: {
      value: cdktf.stringToHclTerraform(struct!.entityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_type: {
      value: cdktf.stringToHclTerraform(struct!.entityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VerifiedpermissionsPolicyDefinitionTemplateLinkedResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityId = this._entityId;
    }
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsPolicyDefinitionTemplateLinkedResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityId = undefined;
      this._entityType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityId = value.entityId;
      this._entityType = value.entityType;
    }
  }

  // entity_id - computed: false, optional: false, required: true
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }
}

export class VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList extends cdktf.ComplexList {
  public internalValue? : VerifiedpermissionsPolicyDefinitionTemplateLinkedResource[] | cdktf.IResolvable

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
  public get(index: number): VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference {
    return new VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VerifiedpermissionsPolicyDefinitionTemplateLinked {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_policy#policy_template_id VerifiedpermissionsPolicy#policy_template_id}
  */
  readonly policyTemplateId: string;
  /**
  * principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_policy#principal VerifiedpermissionsPolicy#principal}
  */
  readonly principal?: VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal[] | cdktf.IResolvable;
  /**
  * resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_policy#resource VerifiedpermissionsPolicy#resource}
  */
  readonly resource?: VerifiedpermissionsPolicyDefinitionTemplateLinkedResource[] | cdktf.IResolvable;
}

export function verifiedpermissionsPolicyDefinitionTemplateLinkedToTerraform(struct?: VerifiedpermissionsPolicyDefinitionTemplateLinked | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_template_id: cdktf.stringToTerraform(struct!.policyTemplateId),
    principal: cdktf.listMapper(verifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalToTerraform, true)(struct!.principal),
    resource: cdktf.listMapper(verifiedpermissionsPolicyDefinitionTemplateLinkedResourceToTerraform, true)(struct!.resource),
  }
}


export function verifiedpermissionsPolicyDefinitionTemplateLinkedToHclTerraform(struct?: VerifiedpermissionsPolicyDefinitionTemplateLinked | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_template_id: {
      value: cdktf.stringToHclTerraform(struct!.policyTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal: {
      value: cdktf.listMapperHcl(verifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalToHclTerraform, true)(struct!.principal),
      isBlock: true,
      type: "list",
      storageClassType: "VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList",
    },
    resource: {
      value: cdktf.listMapperHcl(verifiedpermissionsPolicyDefinitionTemplateLinkedResourceToHclTerraform, true)(struct!.resource),
      isBlock: true,
      type: "list",
      storageClassType: "VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VerifiedpermissionsPolicyDefinitionTemplateLinked | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyTemplateId = this._policyTemplateId;
    }
    if (this._principal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal?.internalValue;
    }
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsPolicyDefinitionTemplateLinked | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyTemplateId = undefined;
      this._principal.internalValue = undefined;
      this._resource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyTemplateId = value.policyTemplateId;
      this._principal.internalValue = value.principal;
      this._resource.internalValue = value.resource;
    }
  }

  // policy_template_id - computed: false, optional: false, required: true
  private _policyTemplateId?: string; 
  public get policyTemplateId() {
    return this.getStringAttribute('policy_template_id');
  }
  public set policyTemplateId(value: string) {
    this._policyTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTemplateIdInput() {
    return this._policyTemplateId;
  }

  // principal - computed: false, optional: true, required: false
  private _principal = new VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList(this, "principal", false);
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal[] | cdktf.IResolvable) {
    this._principal.internalValue = value;
  }
  public resetPrincipal() {
    this._principal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
  }

  // resource - computed: false, optional: true, required: false
  private _resource = new VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList(this, "resource", false);
  public get resource() {
    return this._resource;
  }
  public putResource(value: VerifiedpermissionsPolicyDefinitionTemplateLinkedResource[] | cdktf.IResolvable) {
    this._resource.internalValue = value;
  }
  public resetResource() {
    this._resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }
}

export class VerifiedpermissionsPolicyDefinitionTemplateLinkedList extends cdktf.ComplexList {
  public internalValue? : VerifiedpermissionsPolicyDefinitionTemplateLinked[] | cdktf.IResolvable

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
  public get(index: number): VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference {
    return new VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VerifiedpermissionsPolicyDefinition {
  /**
  * static block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_policy#static VerifiedpermissionsPolicy#static}
  */
  readonly static?: VerifiedpermissionsPolicyDefinitionStatic[] | cdktf.IResolvable;
  /**
  * template_linked block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_policy#template_linked VerifiedpermissionsPolicy#template_linked}
  */
  readonly templateLinked?: VerifiedpermissionsPolicyDefinitionTemplateLinked[] | cdktf.IResolvable;
}

export function verifiedpermissionsPolicyDefinitionToTerraform(struct?: VerifiedpermissionsPolicyDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static: cdktf.listMapper(verifiedpermissionsPolicyDefinitionStaticToTerraform, true)(struct!.static),
    template_linked: cdktf.listMapper(verifiedpermissionsPolicyDefinitionTemplateLinkedToTerraform, true)(struct!.templateLinked),
  }
}


export function verifiedpermissionsPolicyDefinitionToHclTerraform(struct?: VerifiedpermissionsPolicyDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static: {
      value: cdktf.listMapperHcl(verifiedpermissionsPolicyDefinitionStaticToHclTerraform, true)(struct!.static),
      isBlock: true,
      type: "list",
      storageClassType: "VerifiedpermissionsPolicyDefinitionStaticList",
    },
    template_linked: {
      value: cdktf.listMapperHcl(verifiedpermissionsPolicyDefinitionTemplateLinkedToHclTerraform, true)(struct!.templateLinked),
      isBlock: true,
      type: "list",
      storageClassType: "VerifiedpermissionsPolicyDefinitionTemplateLinkedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsPolicyDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VerifiedpermissionsPolicyDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._static?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static?.internalValue;
    }
    if (this._templateLinked?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateLinked = this._templateLinked?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsPolicyDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._static.internalValue = undefined;
      this._templateLinked.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._static.internalValue = value.static;
      this._templateLinked.internalValue = value.templateLinked;
    }
  }

  // static - computed: false, optional: true, required: false
  private _static = new VerifiedpermissionsPolicyDefinitionStaticList(this, "static", false);
  public get static() {
    return this._static;
  }
  public putStatic(value: VerifiedpermissionsPolicyDefinitionStatic[] | cdktf.IResolvable) {
    this._static.internalValue = value;
  }
  public resetStatic() {
    this._static.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static.internalValue;
  }

  // template_linked - computed: false, optional: true, required: false
  private _templateLinked = new VerifiedpermissionsPolicyDefinitionTemplateLinkedList(this, "template_linked", false);
  public get templateLinked() {
    return this._templateLinked;
  }
  public putTemplateLinked(value: VerifiedpermissionsPolicyDefinitionTemplateLinked[] | cdktf.IResolvable) {
    this._templateLinked.internalValue = value;
  }
  public resetTemplateLinked() {
    this._templateLinked.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateLinkedInput() {
    return this._templateLinked.internalValue;
  }
}

export class VerifiedpermissionsPolicyDefinitionList extends cdktf.ComplexList {
  public internalValue? : VerifiedpermissionsPolicyDefinition[] | cdktf.IResolvable

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
  public get(index: number): VerifiedpermissionsPolicyDefinitionOutputReference {
    return new VerifiedpermissionsPolicyDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_policy aws_verifiedpermissions_policy}
*/
export class VerifiedpermissionsPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_verifiedpermissions_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VerifiedpermissionsPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VerifiedpermissionsPolicy to import
  * @param importFromId The id of the existing VerifiedpermissionsPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VerifiedpermissionsPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_verifiedpermissions_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_policy aws_verifiedpermissions_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VerifiedpermissionsPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: VerifiedpermissionsPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_verifiedpermissions_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.90.1',
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
    this._policyStoreId = config.policyStoreId;
    this._definition.internalValue = config.definition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // policy_store_id - computed: false, optional: false, required: true
  private _policyStoreId?: string; 
  public get policyStoreId() {
    return this.getStringAttribute('policy_store_id');
  }
  public set policyStoreId(value: string) {
    this._policyStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyStoreIdInput() {
    return this._policyStoreId;
  }

  // definition - computed: false, optional: true, required: false
  private _definition = new VerifiedpermissionsPolicyDefinitionList(this, "definition", false);
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: VerifiedpermissionsPolicyDefinition[] | cdktf.IResolvable) {
    this._definition.internalValue = value;
  }
  public resetDefinition() {
    this._definition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_store_id: cdktf.stringToTerraform(this._policyStoreId),
      definition: cdktf.listMapper(verifiedpermissionsPolicyDefinitionToTerraform, true)(this._definition.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      policy_store_id: {
        value: cdktf.stringToHclTerraform(this._policyStoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      definition: {
        value: cdktf.listMapperHcl(verifiedpermissionsPolicyDefinitionToHclTerraform, true)(this._definition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VerifiedpermissionsPolicyDefinitionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
