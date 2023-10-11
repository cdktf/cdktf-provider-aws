// https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_global_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChimesdkvoiceGlobalSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_global_settings#id ChimesdkvoiceGlobalSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * voice_connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_global_settings#voice_connector ChimesdkvoiceGlobalSettings#voice_connector}
  */
  readonly voiceConnector: ChimesdkvoiceGlobalSettingsVoiceConnector;
}
export interface ChimesdkvoiceGlobalSettingsVoiceConnector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_global_settings#cdr_bucket ChimesdkvoiceGlobalSettings#cdr_bucket}
  */
  readonly cdrBucket?: string;
}

export function chimesdkvoiceGlobalSettingsVoiceConnectorToTerraform(struct?: ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference | ChimesdkvoiceGlobalSettingsVoiceConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cdr_bucket: cdktf.stringToTerraform(struct!.cdrBucket),
  }
}

export class ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChimesdkvoiceGlobalSettingsVoiceConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cdrBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdrBucket = this._cdrBucket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChimesdkvoiceGlobalSettingsVoiceConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cdrBucket = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cdrBucket = value.cdrBucket;
    }
  }

  // cdr_bucket - computed: false, optional: true, required: false
  private _cdrBucket?: string; 
  public get cdrBucket() {
    return this.getStringAttribute('cdr_bucket');
  }
  public set cdrBucket(value: string) {
    this._cdrBucket = value;
  }
  public resetCdrBucket() {
    this._cdrBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdrBucketInput() {
    return this._cdrBucket;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_global_settings aws_chimesdkvoice_global_settings}
*/
export class ChimesdkvoiceGlobalSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_chimesdkvoice_global_settings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkvoice_global_settings aws_chimesdkvoice_global_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChimesdkvoiceGlobalSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ChimesdkvoiceGlobalSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_chimesdkvoice_global_settings',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.20.1',
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
    this._id = config.id;
    this._voiceConnector.internalValue = config.voiceConnector;
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

  // voice_connector - computed: false, optional: false, required: true
  private _voiceConnector = new ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference(this, "voice_connector");
  public get voiceConnector() {
    return this._voiceConnector;
  }
  public putVoiceConnector(value: ChimesdkvoiceGlobalSettingsVoiceConnector) {
    this._voiceConnector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceConnectorInput() {
    return this._voiceConnector.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      voice_connector: chimesdkvoiceGlobalSettingsVoiceConnectorToTerraform(this._voiceConnector.internalValue),
    };
  }
}
