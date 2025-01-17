// https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/pinpoint_gcm_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PinpointGcmChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/pinpoint_gcm_channel#api_key PinpointGcmChannel#api_key}
  */
  readonly apiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/pinpoint_gcm_channel#application_id PinpointGcmChannel#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/pinpoint_gcm_channel#default_authentication_method PinpointGcmChannel#default_authentication_method}
  */
  readonly defaultAuthenticationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/pinpoint_gcm_channel#enabled PinpointGcmChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/pinpoint_gcm_channel#id PinpointGcmChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/pinpoint_gcm_channel#service_json PinpointGcmChannel#service_json}
  */
  readonly serviceJson?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/pinpoint_gcm_channel aws_pinpoint_gcm_channel}
*/
export class PinpointGcmChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_pinpoint_gcm_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PinpointGcmChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PinpointGcmChannel to import
  * @param importFromId The id of the existing PinpointGcmChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/pinpoint_gcm_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PinpointGcmChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_pinpoint_gcm_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/pinpoint_gcm_channel aws_pinpoint_gcm_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PinpointGcmChannelConfig
  */
  public constructor(scope: Construct, id: string, config: PinpointGcmChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_pinpoint_gcm_channel',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.84.0',
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
    this._apiKey = config.apiKey;
    this._applicationId = config.applicationId;
    this._defaultAuthenticationMethod = config.defaultAuthenticationMethod;
    this._enabled = config.enabled;
    this._id = config.id;
    this._serviceJson = config.serviceJson;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // default_authentication_method - computed: false, optional: true, required: false
  private _defaultAuthenticationMethod?: string; 
  public get defaultAuthenticationMethod() {
    return this.getStringAttribute('default_authentication_method');
  }
  public set defaultAuthenticationMethod(value: string) {
    this._defaultAuthenticationMethod = value;
  }
  public resetDefaultAuthenticationMethod() {
    this._defaultAuthenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAuthenticationMethodInput() {
    return this._defaultAuthenticationMethod;
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

  // service_json - computed: false, optional: true, required: false
  private _serviceJson?: string; 
  public get serviceJson() {
    return this.getStringAttribute('service_json');
  }
  public set serviceJson(value: string) {
    this._serviceJson = value;
  }
  public resetServiceJson() {
    this._serviceJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceJsonInput() {
    return this._serviceJson;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      application_id: cdktf.stringToTerraform(this._applicationId),
      default_authentication_method: cdktf.stringToTerraform(this._defaultAuthenticationMethod),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      service_json: cdktf.stringToTerraform(this._serviceJson),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_authentication_method: {
        value: cdktf.stringToHclTerraform(this._defaultAuthenticationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_json: {
        value: cdktf.stringToHclTerraform(this._serviceJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
