/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/chime_voice_connector_termination_credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChimeVoiceConnectorTerminationCredentialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/chime_voice_connector_termination_credentials#id ChimeVoiceConnectorTerminationCredentials#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/chime_voice_connector_termination_credentials#region ChimeVoiceConnectorTerminationCredentials#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/chime_voice_connector_termination_credentials#voice_connector_id ChimeVoiceConnectorTerminationCredentials#voice_connector_id}
  */
  readonly voiceConnectorId: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/chime_voice_connector_termination_credentials#credentials ChimeVoiceConnectorTerminationCredentials#credentials}
  */
  readonly credentials: ChimeVoiceConnectorTerminationCredentialsCredentials[] | cdktf.IResolvable;
}
export interface ChimeVoiceConnectorTerminationCredentialsCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/chime_voice_connector_termination_credentials#password ChimeVoiceConnectorTerminationCredentials#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/chime_voice_connector_termination_credentials#username ChimeVoiceConnectorTerminationCredentials#username}
  */
  readonly username: string;
}

export function chimeVoiceConnectorTerminationCredentialsCredentialsToTerraform(struct?: ChimeVoiceConnectorTerminationCredentialsCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function chimeVoiceConnectorTerminationCredentialsCredentialsToHclTerraform(struct?: ChimeVoiceConnectorTerminationCredentialsCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ChimeVoiceConnectorTerminationCredentialsCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChimeVoiceConnectorTerminationCredentialsCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class ChimeVoiceConnectorTerminationCredentialsCredentialsList extends cdktf.ComplexList {
  public internalValue? : ChimeVoiceConnectorTerminationCredentialsCredentials[] | cdktf.IResolvable

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
  public get(index: number): ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference {
    return new ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/chime_voice_connector_termination_credentials aws_chime_voice_connector_termination_credentials}
*/
export class ChimeVoiceConnectorTerminationCredentials extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_chime_voice_connector_termination_credentials";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChimeVoiceConnectorTerminationCredentials resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChimeVoiceConnectorTerminationCredentials to import
  * @param importFromId The id of the existing ChimeVoiceConnectorTerminationCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/chime_voice_connector_termination_credentials#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChimeVoiceConnectorTerminationCredentials to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_chime_voice_connector_termination_credentials", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/chime_voice_connector_termination_credentials aws_chime_voice_connector_termination_credentials} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChimeVoiceConnectorTerminationCredentialsConfig
  */
  public constructor(scope: Construct, id: string, config: ChimeVoiceConnectorTerminationCredentialsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_chime_voice_connector_termination_credentials',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.10.0',
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
    this._region = config.region;
    this._voiceConnectorId = config.voiceConnectorId;
    this._credentials.internalValue = config.credentials;
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

  // voice_connector_id - computed: false, optional: false, required: true
  private _voiceConnectorId?: string; 
  public get voiceConnectorId() {
    return this.getStringAttribute('voice_connector_id');
  }
  public set voiceConnectorId(value: string) {
    this._voiceConnectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceConnectorIdInput() {
    return this._voiceConnectorId;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new ChimeVoiceConnectorTerminationCredentialsCredentialsList(this, "credentials", true);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: ChimeVoiceConnectorTerminationCredentialsCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      voice_connector_id: cdktf.stringToTerraform(this._voiceConnectorId),
      credentials: cdktf.listMapper(chimeVoiceConnectorTerminationCredentialsCredentialsToTerraform, true)(this._credentials.internalValue),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voice_connector_id: {
        value: cdktf.stringToHclTerraform(this._voiceConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: cdktf.listMapperHcl(chimeVoiceConnectorTerminationCredentialsCredentialsToHclTerraform, true)(this._credentials.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ChimeVoiceConnectorTerminationCredentialsCredentialsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
