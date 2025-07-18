/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_domain_saml_options
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpensearchDomainSamlOptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_domain_saml_options#domain_name OpensearchDomainSamlOptions#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_domain_saml_options#id OpensearchDomainSamlOptions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_domain_saml_options#region OpensearchDomainSamlOptions#region}
  */
  readonly region?: string;
  /**
  * saml_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_domain_saml_options#saml_options OpensearchDomainSamlOptions#saml_options}
  */
  readonly samlOptions?: OpensearchDomainSamlOptionsSamlOptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_domain_saml_options#timeouts OpensearchDomainSamlOptions#timeouts}
  */
  readonly timeouts?: OpensearchDomainSamlOptionsTimeouts;
}
export interface OpensearchDomainSamlOptionsSamlOptionsIdp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_domain_saml_options#entity_id OpensearchDomainSamlOptions#entity_id}
  */
  readonly entityId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_domain_saml_options#metadata_content OpensearchDomainSamlOptions#metadata_content}
  */
  readonly metadataContent: string;
}

export function opensearchDomainSamlOptionsSamlOptionsIdpToTerraform(struct?: OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference | OpensearchDomainSamlOptionsSamlOptionsIdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_id: cdktf.stringToTerraform(struct!.entityId),
    metadata_content: cdktf.stringToTerraform(struct!.metadataContent),
  }
}


export function opensearchDomainSamlOptionsSamlOptionsIdpToHclTerraform(struct?: OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference | OpensearchDomainSamlOptionsSamlOptionsIdp): any {
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
    metadata_content: {
      value: cdktf.stringToHclTerraform(struct!.metadataContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchDomainSamlOptionsSamlOptionsIdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityId = this._entityId;
    }
    if (this._metadataContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataContent = this._metadataContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchDomainSamlOptionsSamlOptionsIdp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entityId = undefined;
      this._metadataContent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entityId = value.entityId;
      this._metadataContent = value.metadataContent;
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

  // metadata_content - computed: false, optional: false, required: true
  private _metadataContent?: string; 
  public get metadataContent() {
    return this.getStringAttribute('metadata_content');
  }
  public set metadataContent(value: string) {
    this._metadataContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataContentInput() {
    return this._metadataContent;
  }
}
export interface OpensearchDomainSamlOptionsSamlOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_domain_saml_options#enabled OpensearchDomainSamlOptions#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_domain_saml_options#master_backend_role OpensearchDomainSamlOptions#master_backend_role}
  */
  readonly masterBackendRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_domain_saml_options#master_user_name OpensearchDomainSamlOptions#master_user_name}
  */
  readonly masterUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_domain_saml_options#roles_key OpensearchDomainSamlOptions#roles_key}
  */
  readonly rolesKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_domain_saml_options#session_timeout_minutes OpensearchDomainSamlOptions#session_timeout_minutes}
  */
  readonly sessionTimeoutMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_domain_saml_options#subject_key OpensearchDomainSamlOptions#subject_key}
  */
  readonly subjectKey?: string;
  /**
  * idp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_domain_saml_options#idp OpensearchDomainSamlOptions#idp}
  */
  readonly idp?: OpensearchDomainSamlOptionsSamlOptionsIdp;
}

export function opensearchDomainSamlOptionsSamlOptionsToTerraform(struct?: OpensearchDomainSamlOptionsSamlOptionsOutputReference | OpensearchDomainSamlOptionsSamlOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    master_backend_role: cdktf.stringToTerraform(struct!.masterBackendRole),
    master_user_name: cdktf.stringToTerraform(struct!.masterUserName),
    roles_key: cdktf.stringToTerraform(struct!.rolesKey),
    session_timeout_minutes: cdktf.numberToTerraform(struct!.sessionTimeoutMinutes),
    subject_key: cdktf.stringToTerraform(struct!.subjectKey),
    idp: opensearchDomainSamlOptionsSamlOptionsIdpToTerraform(struct!.idp),
  }
}


export function opensearchDomainSamlOptionsSamlOptionsToHclTerraform(struct?: OpensearchDomainSamlOptionsSamlOptionsOutputReference | OpensearchDomainSamlOptionsSamlOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    master_backend_role: {
      value: cdktf.stringToHclTerraform(struct!.masterBackendRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_user_name: {
      value: cdktf.stringToHclTerraform(struct!.masterUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles_key: {
      value: cdktf.stringToHclTerraform(struct!.rolesKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.sessionTimeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subject_key: {
      value: cdktf.stringToHclTerraform(struct!.subjectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp: {
      value: opensearchDomainSamlOptionsSamlOptionsIdpToHclTerraform(struct!.idp),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchDomainSamlOptionsSamlOptionsIdpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchDomainSamlOptionsSamlOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchDomainSamlOptionsSamlOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._masterBackendRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterBackendRole = this._masterBackendRole;
    }
    if (this._masterUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUserName = this._masterUserName;
    }
    if (this._rolesKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolesKey = this._rolesKey;
    }
    if (this._sessionTimeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeoutMinutes = this._sessionTimeoutMinutes;
    }
    if (this._subjectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectKey = this._subjectKey;
    }
    if (this._idp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idp = this._idp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchDomainSamlOptionsSamlOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._masterBackendRole = undefined;
      this._masterUserName = undefined;
      this._rolesKey = undefined;
      this._sessionTimeoutMinutes = undefined;
      this._subjectKey = undefined;
      this._idp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._masterBackendRole = value.masterBackendRole;
      this._masterUserName = value.masterUserName;
      this._rolesKey = value.rolesKey;
      this._sessionTimeoutMinutes = value.sessionTimeoutMinutes;
      this._subjectKey = value.subjectKey;
      this._idp.internalValue = value.idp;
    }
  }

  // enabled - computed: false, optional: true, required: false
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

  // master_backend_role - computed: false, optional: true, required: false
  private _masterBackendRole?: string; 
  public get masterBackendRole() {
    return this.getStringAttribute('master_backend_role');
  }
  public set masterBackendRole(value: string) {
    this._masterBackendRole = value;
  }
  public resetMasterBackendRole() {
    this._masterBackendRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterBackendRoleInput() {
    return this._masterBackendRole;
  }

  // master_user_name - computed: false, optional: true, required: false
  private _masterUserName?: string; 
  public get masterUserName() {
    return this.getStringAttribute('master_user_name');
  }
  public set masterUserName(value: string) {
    this._masterUserName = value;
  }
  public resetMasterUserName() {
    this._masterUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserNameInput() {
    return this._masterUserName;
  }

  // roles_key - computed: false, optional: true, required: false
  private _rolesKey?: string; 
  public get rolesKey() {
    return this.getStringAttribute('roles_key');
  }
  public set rolesKey(value: string) {
    this._rolesKey = value;
  }
  public resetRolesKey() {
    this._rolesKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesKeyInput() {
    return this._rolesKey;
  }

  // session_timeout_minutes - computed: false, optional: true, required: false
  private _sessionTimeoutMinutes?: number; 
  public get sessionTimeoutMinutes() {
    return this.getNumberAttribute('session_timeout_minutes');
  }
  public set sessionTimeoutMinutes(value: number) {
    this._sessionTimeoutMinutes = value;
  }
  public resetSessionTimeoutMinutes() {
    this._sessionTimeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutMinutesInput() {
    return this._sessionTimeoutMinutes;
  }

  // subject_key - computed: false, optional: true, required: false
  private _subjectKey?: string; 
  public get subjectKey() {
    return this.getStringAttribute('subject_key');
  }
  public set subjectKey(value: string) {
    this._subjectKey = value;
  }
  public resetSubjectKey() {
    this._subjectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectKeyInput() {
    return this._subjectKey;
  }

  // idp - computed: false, optional: true, required: false
  private _idp = new OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference(this, "idp");
  public get idp() {
    return this._idp;
  }
  public putIdp(value: OpensearchDomainSamlOptionsSamlOptionsIdp) {
    this._idp.internalValue = value;
  }
  public resetIdp() {
    this._idp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpInput() {
    return this._idp.internalValue;
  }
}
export interface OpensearchDomainSamlOptionsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_domain_saml_options#delete OpensearchDomainSamlOptions#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_domain_saml_options#update OpensearchDomainSamlOptions#update}
  */
  readonly update?: string;
}

export function opensearchDomainSamlOptionsTimeoutsToTerraform(struct?: OpensearchDomainSamlOptionsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function opensearchDomainSamlOptionsTimeoutsToHclTerraform(struct?: OpensearchDomainSamlOptionsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class OpensearchDomainSamlOptionsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchDomainSamlOptionsTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: OpensearchDomainSamlOptionsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._delete = value.delete;
      this._update = value.update;
    }
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_domain_saml_options aws_opensearch_domain_saml_options}
*/
export class OpensearchDomainSamlOptions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_opensearch_domain_saml_options";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpensearchDomainSamlOptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpensearchDomainSamlOptions to import
  * @param importFromId The id of the existing OpensearchDomainSamlOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_domain_saml_options#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpensearchDomainSamlOptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_opensearch_domain_saml_options", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_domain_saml_options aws_opensearch_domain_saml_options} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpensearchDomainSamlOptionsConfig
  */
  public constructor(scope: Construct, id: string, config: OpensearchDomainSamlOptionsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opensearch_domain_saml_options',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
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
    this._domainName = config.domainName;
    this._id = config.id;
    this._region = config.region;
    this._samlOptions.internalValue = config.samlOptions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

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

  // saml_options - computed: false, optional: true, required: false
  private _samlOptions = new OpensearchDomainSamlOptionsSamlOptionsOutputReference(this, "saml_options");
  public get samlOptions() {
    return this._samlOptions;
  }
  public putSamlOptions(value: OpensearchDomainSamlOptionsSamlOptions) {
    this._samlOptions.internalValue = value;
  }
  public resetSamlOptions() {
    this._samlOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlOptionsInput() {
    return this._samlOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OpensearchDomainSamlOptionsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OpensearchDomainSamlOptionsTimeouts) {
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
      domain_name: cdktf.stringToTerraform(this._domainName),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      saml_options: opensearchDomainSamlOptionsSamlOptionsToTerraform(this._samlOptions.internalValue),
      timeouts: opensearchDomainSamlOptionsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      saml_options: {
        value: opensearchDomainSamlOptionsSamlOptionsToHclTerraform(this._samlOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpensearchDomainSamlOptionsSamlOptionsList",
      },
      timeouts: {
        value: opensearchDomainSamlOptionsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpensearchDomainSamlOptionsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
