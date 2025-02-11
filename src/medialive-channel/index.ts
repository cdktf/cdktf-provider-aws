// generated from terraform resource schema

import { MedialiveChannelCdiInputSpecification, 
medialiveChannelCdiInputSpecificationToTerraform, 
medialiveChannelCdiInputSpecificationToHclTerraform, 
MedialiveChannelCdiInputSpecificationOutputReference, 
MedialiveChannelDestinations, 
medialiveChannelDestinationsToTerraform, 
medialiveChannelDestinationsToHclTerraform, 
MedialiveChannelDestinationsList, 
MedialiveChannelEncoderSettings, 
medialiveChannelEncoderSettingsToTerraform, 
medialiveChannelEncoderSettingsToHclTerraform, 
MedialiveChannelEncoderSettingsOutputReference, 
MedialiveChannelInputAttachments, 
medialiveChannelInputAttachmentsToTerraform, 
medialiveChannelInputAttachmentsToHclTerraform, 
MedialiveChannelInputAttachmentsList, 
MedialiveChannelInputSpecification, 
medialiveChannelInputSpecificationToTerraform, 
medialiveChannelInputSpecificationToHclTerraform, 
MedialiveChannelInputSpecificationOutputReference, 
MedialiveChannelMaintenance, 
medialiveChannelMaintenanceToTerraform, 
medialiveChannelMaintenanceToHclTerraform, 
MedialiveChannelMaintenanceOutputReference, 
MedialiveChannelTimeouts, 
medialiveChannelTimeoutsToTerraform, 
medialiveChannelTimeoutsToHclTerraform, 
MedialiveChannelTimeoutsOutputReference, 
MedialiveChannelVpc, 
medialiveChannelVpcToTerraform, 
medialiveChannelVpcToHclTerraform, 
MedialiveChannelVpcOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MedialiveChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/medialive_channel#channel_class MedialiveChannel#channel_class}
  */
  readonly channelClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/medialive_channel#id MedialiveChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/medialive_channel#log_level MedialiveChannel#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/medialive_channel#name MedialiveChannel#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/medialive_channel#role_arn MedialiveChannel#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/medialive_channel#start_channel MedialiveChannel#start_channel}
  */
  readonly startChannel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/medialive_channel#tags MedialiveChannel#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/medialive_channel#tags_all MedialiveChannel#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * cdi_input_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/medialive_channel#cdi_input_specification MedialiveChannel#cdi_input_specification}
  */
  readonly cdiInputSpecification?: MedialiveChannelCdiInputSpecification;
  /**
  * destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/medialive_channel#destinations MedialiveChannel#destinations}
  */
  readonly destinations: MedialiveChannelDestinations[] | cdktf.IResolvable;
  /**
  * encoder_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/medialive_channel#encoder_settings MedialiveChannel#encoder_settings}
  */
  readonly encoderSettings: MedialiveChannelEncoderSettings;
  /**
  * input_attachments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/medialive_channel#input_attachments MedialiveChannel#input_attachments}
  */
  readonly inputAttachments: MedialiveChannelInputAttachments[] | cdktf.IResolvable;
  /**
  * input_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/medialive_channel#input_specification MedialiveChannel#input_specification}
  */
  readonly inputSpecification: MedialiveChannelInputSpecification;
  /**
  * maintenance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/medialive_channel#maintenance MedialiveChannel#maintenance}
  */
  readonly maintenance?: MedialiveChannelMaintenance;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/medialive_channel#timeouts MedialiveChannel#timeouts}
  */
  readonly timeouts?: MedialiveChannelTimeouts;
  /**
  * vpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/medialive_channel#vpc MedialiveChannel#vpc}
  */
  readonly vpc?: MedialiveChannelVpc;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/medialive_channel aws_medialive_channel}
*/
export class MedialiveChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_medialive_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MedialiveChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MedialiveChannel to import
  * @param importFromId The id of the existing MedialiveChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/medialive_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MedialiveChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_medialive_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/medialive_channel aws_medialive_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MedialiveChannelConfig
  */
  public constructor(scope: Construct, id: string, config: MedialiveChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_medialive_channel',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.86.1',
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
    this._channelClass = config.channelClass;
    this._id = config.id;
    this._logLevel = config.logLevel;
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._startChannel = config.startChannel;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._cdiInputSpecification.internalValue = config.cdiInputSpecification;
    this._destinations.internalValue = config.destinations;
    this._encoderSettings.internalValue = config.encoderSettings;
    this._inputAttachments.internalValue = config.inputAttachments;
    this._inputSpecification.internalValue = config.inputSpecification;
    this._maintenance.internalValue = config.maintenance;
    this._timeouts.internalValue = config.timeouts;
    this._vpc.internalValue = config.vpc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // channel_class - computed: false, optional: false, required: true
  private _channelClass?: string; 
  public get channelClass() {
    return this.getStringAttribute('channel_class');
  }
  public set channelClass(value: string) {
    this._channelClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelClassInput() {
    return this._channelClass;
  }

  // channel_id - computed: true, optional: false, required: false
  public get channelId() {
    return this.getStringAttribute('channel_id');
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

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
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

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // start_channel - computed: false, optional: true, required: false
  private _startChannel?: boolean | cdktf.IResolvable; 
  public get startChannel() {
    return this.getBooleanAttribute('start_channel');
  }
  public set startChannel(value: boolean | cdktf.IResolvable) {
    this._startChannel = value;
  }
  public resetStartChannel() {
    this._startChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startChannelInput() {
    return this._startChannel;
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // cdi_input_specification - computed: false, optional: true, required: false
  private _cdiInputSpecification = new MedialiveChannelCdiInputSpecificationOutputReference(this, "cdi_input_specification");
  public get cdiInputSpecification() {
    return this._cdiInputSpecification;
  }
  public putCdiInputSpecification(value: MedialiveChannelCdiInputSpecification) {
    this._cdiInputSpecification.internalValue = value;
  }
  public resetCdiInputSpecification() {
    this._cdiInputSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdiInputSpecificationInput() {
    return this._cdiInputSpecification.internalValue;
  }

  // destinations - computed: false, optional: false, required: true
  private _destinations = new MedialiveChannelDestinationsList(this, "destinations", true);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: MedialiveChannelDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // encoder_settings - computed: false, optional: false, required: true
  private _encoderSettings = new MedialiveChannelEncoderSettingsOutputReference(this, "encoder_settings");
  public get encoderSettings() {
    return this._encoderSettings;
  }
  public putEncoderSettings(value: MedialiveChannelEncoderSettings) {
    this._encoderSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encoderSettingsInput() {
    return this._encoderSettings.internalValue;
  }

  // input_attachments - computed: false, optional: false, required: true
  private _inputAttachments = new MedialiveChannelInputAttachmentsList(this, "input_attachments", true);
  public get inputAttachments() {
    return this._inputAttachments;
  }
  public putInputAttachments(value: MedialiveChannelInputAttachments[] | cdktf.IResolvable) {
    this._inputAttachments.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputAttachmentsInput() {
    return this._inputAttachments.internalValue;
  }

  // input_specification - computed: false, optional: false, required: true
  private _inputSpecification = new MedialiveChannelInputSpecificationOutputReference(this, "input_specification");
  public get inputSpecification() {
    return this._inputSpecification;
  }
  public putInputSpecification(value: MedialiveChannelInputSpecification) {
    this._inputSpecification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSpecificationInput() {
    return this._inputSpecification.internalValue;
  }

  // maintenance - computed: false, optional: true, required: false
  private _maintenance = new MedialiveChannelMaintenanceOutputReference(this, "maintenance");
  public get maintenance() {
    return this._maintenance;
  }
  public putMaintenance(value: MedialiveChannelMaintenance) {
    this._maintenance.internalValue = value;
  }
  public resetMaintenance() {
    this._maintenance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceInput() {
    return this._maintenance.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MedialiveChannelTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MedialiveChannelTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpc - computed: false, optional: true, required: false
  private _vpc = new MedialiveChannelVpcOutputReference(this, "vpc");
  public get vpc() {
    return this._vpc;
  }
  public putVpc(value: MedialiveChannelVpc) {
    this._vpc.internalValue = value;
  }
  public resetVpc() {
    this._vpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel_class: cdktf.stringToTerraform(this._channelClass),
      id: cdktf.stringToTerraform(this._id),
      log_level: cdktf.stringToTerraform(this._logLevel),
      name: cdktf.stringToTerraform(this._name),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      start_channel: cdktf.booleanToTerraform(this._startChannel),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      cdi_input_specification: medialiveChannelCdiInputSpecificationToTerraform(this._cdiInputSpecification.internalValue),
      destinations: cdktf.listMapper(medialiveChannelDestinationsToTerraform, true)(this._destinations.internalValue),
      encoder_settings: medialiveChannelEncoderSettingsToTerraform(this._encoderSettings.internalValue),
      input_attachments: cdktf.listMapper(medialiveChannelInputAttachmentsToTerraform, true)(this._inputAttachments.internalValue),
      input_specification: medialiveChannelInputSpecificationToTerraform(this._inputSpecification.internalValue),
      maintenance: medialiveChannelMaintenanceToTerraform(this._maintenance.internalValue),
      timeouts: medialiveChannelTimeoutsToTerraform(this._timeouts.internalValue),
      vpc: medialiveChannelVpcToTerraform(this._vpc.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel_class: {
        value: cdktf.stringToHclTerraform(this._channelClass),
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
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
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
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_channel: {
        value: cdktf.booleanToHclTerraform(this._startChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      cdi_input_specification: {
        value: medialiveChannelCdiInputSpecificationToHclTerraform(this._cdiInputSpecification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MedialiveChannelCdiInputSpecificationList",
      },
      destinations: {
        value: cdktf.listMapperHcl(medialiveChannelDestinationsToHclTerraform, true)(this._destinations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MedialiveChannelDestinationsList",
      },
      encoder_settings: {
        value: medialiveChannelEncoderSettingsToHclTerraform(this._encoderSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MedialiveChannelEncoderSettingsList",
      },
      input_attachments: {
        value: cdktf.listMapperHcl(medialiveChannelInputAttachmentsToHclTerraform, true)(this._inputAttachments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MedialiveChannelInputAttachmentsList",
      },
      input_specification: {
        value: medialiveChannelInputSpecificationToHclTerraform(this._inputSpecification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MedialiveChannelInputSpecificationList",
      },
      maintenance: {
        value: medialiveChannelMaintenanceToHclTerraform(this._maintenance.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MedialiveChannelMaintenanceList",
      },
      timeouts: {
        value: medialiveChannelTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MedialiveChannelTimeouts",
      },
      vpc: {
        value: medialiveChannelVpcToHclTerraform(this._vpc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MedialiveChannelVpcList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
