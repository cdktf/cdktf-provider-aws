// https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ssoadmin_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsoadminApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ssoadmin_application#application_provider_arn SsoadminApplication#application_provider_arn}
  */
  readonly applicationProviderArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ssoadmin_application#client_token SsoadminApplication#client_token}
  */
  readonly clientToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ssoadmin_application#description SsoadminApplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ssoadmin_application#instance_arn SsoadminApplication#instance_arn}
  */
  readonly instanceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ssoadmin_application#name SsoadminApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ssoadmin_application#status SsoadminApplication#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ssoadmin_application#tags SsoadminApplication#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * portal_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ssoadmin_application#portal_options SsoadminApplication#portal_options}
  */
  readonly portalOptions?: SsoadminApplicationPortalOptions[] | cdktf.IResolvable;
}
export interface SsoadminApplicationPortalOptionsSignInOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ssoadmin_application#application_url SsoadminApplication#application_url}
  */
  readonly applicationUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ssoadmin_application#origin SsoadminApplication#origin}
  */
  readonly origin: string;
}

export function ssoadminApplicationPortalOptionsSignInOptionsToTerraform(struct?: SsoadminApplicationPortalOptionsSignInOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_url: cdktf.stringToTerraform(struct!.applicationUrl),
    origin: cdktf.stringToTerraform(struct!.origin),
  }
}


export function ssoadminApplicationPortalOptionsSignInOptionsToHclTerraform(struct?: SsoadminApplicationPortalOptionsSignInOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_url: {
      value: cdktf.stringToHclTerraform(struct!.applicationUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsoadminApplicationPortalOptionsSignInOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsoadminApplicationPortalOptionsSignInOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationUrl = this._applicationUrl;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoadminApplicationPortalOptionsSignInOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationUrl = undefined;
      this._origin = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationUrl = value.applicationUrl;
      this._origin = value.origin;
    }
  }

  // application_url - computed: false, optional: true, required: false
  private _applicationUrl?: string; 
  public get applicationUrl() {
    return this.getStringAttribute('application_url');
  }
  public set applicationUrl(value: string) {
    this._applicationUrl = value;
  }
  public resetApplicationUrl() {
    this._applicationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationUrlInput() {
    return this._applicationUrl;
  }

  // origin - computed: false, optional: false, required: true
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }
}

export class SsoadminApplicationPortalOptionsSignInOptionsList extends cdktf.ComplexList {
  public internalValue? : SsoadminApplicationPortalOptionsSignInOptions[] | cdktf.IResolvable

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
  public get(index: number): SsoadminApplicationPortalOptionsSignInOptionsOutputReference {
    return new SsoadminApplicationPortalOptionsSignInOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsoadminApplicationPortalOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ssoadmin_application#visibility SsoadminApplication#visibility}
  */
  readonly visibility?: string;
  /**
  * sign_in_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ssoadmin_application#sign_in_options SsoadminApplication#sign_in_options}
  */
  readonly signInOptions?: SsoadminApplicationPortalOptionsSignInOptions[] | cdktf.IResolvable;
}

export function ssoadminApplicationPortalOptionsToTerraform(struct?: SsoadminApplicationPortalOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
    sign_in_options: cdktf.listMapper(ssoadminApplicationPortalOptionsSignInOptionsToTerraform, true)(struct!.signInOptions),
  }
}


export function ssoadminApplicationPortalOptionsToHclTerraform(struct?: SsoadminApplicationPortalOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    visibility: {
      value: cdktf.stringToHclTerraform(struct!.visibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sign_in_options: {
      value: cdktf.listMapperHcl(ssoadminApplicationPortalOptionsSignInOptionsToHclTerraform, true)(struct!.signInOptions),
      isBlock: true,
      type: "list",
      storageClassType: "SsoadminApplicationPortalOptionsSignInOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsoadminApplicationPortalOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsoadminApplicationPortalOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._signInOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signInOptions = this._signInOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoadminApplicationPortalOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._visibility = undefined;
      this._signInOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._visibility = value.visibility;
      this._signInOptions.internalValue = value.signInOptions;
    }
  }

  // visibility - computed: true, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // sign_in_options - computed: false, optional: true, required: false
  private _signInOptions = new SsoadminApplicationPortalOptionsSignInOptionsList(this, "sign_in_options", false);
  public get signInOptions() {
    return this._signInOptions;
  }
  public putSignInOptions(value: SsoadminApplicationPortalOptionsSignInOptions[] | cdktf.IResolvable) {
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

export class SsoadminApplicationPortalOptionsList extends cdktf.ComplexList {
  public internalValue? : SsoadminApplicationPortalOptions[] | cdktf.IResolvable

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
  public get(index: number): SsoadminApplicationPortalOptionsOutputReference {
    return new SsoadminApplicationPortalOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ssoadmin_application aws_ssoadmin_application}
*/
export class SsoadminApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssoadmin_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SsoadminApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsoadminApplication to import
  * @param importFromId The id of the existing SsoadminApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ssoadmin_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsoadminApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssoadmin_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ssoadmin_application aws_ssoadmin_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsoadminApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: SsoadminApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssoadmin_application',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.52.0',
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
    this._applicationProviderArn = config.applicationProviderArn;
    this._clientToken = config.clientToken;
    this._description = config.description;
    this._instanceArn = config.instanceArn;
    this._name = config.name;
    this._status = config.status;
    this._tags = config.tags;
    this._portalOptions.internalValue = config.portalOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_account - computed: true, optional: false, required: false
  public get applicationAccount() {
    return this.getStringAttribute('application_account');
  }

  // application_arn - computed: true, optional: false, required: false
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }

  // application_provider_arn - computed: false, optional: false, required: true
  private _applicationProviderArn?: string; 
  public get applicationProviderArn() {
    return this.getStringAttribute('application_provider_arn');
  }
  public set applicationProviderArn(value: string) {
    this._applicationProviderArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationProviderArnInput() {
    return this._applicationProviderArn;
  }

  // client_token - computed: false, optional: true, required: false
  private _clientToken?: string; 
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }
  public set clientToken(value: string) {
    this._clientToken = value;
  }
  public resetClientToken() {
    this._clientToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTokenInput() {
    return this._clientToken;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // portal_options - computed: false, optional: true, required: false
  private _portalOptions = new SsoadminApplicationPortalOptionsList(this, "portal_options", false);
  public get portalOptions() {
    return this._portalOptions;
  }
  public putPortalOptions(value: SsoadminApplicationPortalOptions[] | cdktf.IResolvable) {
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
      application_provider_arn: cdktf.stringToTerraform(this._applicationProviderArn),
      client_token: cdktf.stringToTerraform(this._clientToken),
      description: cdktf.stringToTerraform(this._description),
      instance_arn: cdktf.stringToTerraform(this._instanceArn),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      portal_options: cdktf.listMapper(ssoadminApplicationPortalOptionsToTerraform, true)(this._portalOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_provider_arn: {
        value: cdktf.stringToHclTerraform(this._applicationProviderArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_token: {
        value: cdktf.stringToHclTerraform(this._clientToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      portal_options: {
        value: cdktf.listMapperHcl(ssoadminApplicationPortalOptionsToHclTerraform, true)(this._portalOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsoadminApplicationPortalOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
