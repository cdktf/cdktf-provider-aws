// https://www.terraform.io/docs/providers/aws/r/medialive_multiplex
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MedialiveMultiplexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#availability_zones MedialiveMultiplex#availability_zones}
  */
  readonly availabilityZones: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#id MedialiveMultiplex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#name MedialiveMultiplex#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#start_multiplex MedialiveMultiplex#start_multiplex}
  */
  readonly startMultiplex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#tags MedialiveMultiplex#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#tags_all MedialiveMultiplex#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * multiplex_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#multiplex_settings MedialiveMultiplex#multiplex_settings}
  */
  readonly multiplexSettings?: MedialiveMultiplexMultiplexSettings;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#timeouts MedialiveMultiplex#timeouts}
  */
  readonly timeouts?: MedialiveMultiplexTimeouts;
}
export interface MedialiveMultiplexMultiplexSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#maximum_video_buffer_delay_milliseconds MedialiveMultiplex#maximum_video_buffer_delay_milliseconds}
  */
  readonly maximumVideoBufferDelayMilliseconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#transport_stream_bitrate MedialiveMultiplex#transport_stream_bitrate}
  */
  readonly transportStreamBitrate: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#transport_stream_id MedialiveMultiplex#transport_stream_id}
  */
  readonly transportStreamId: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#transport_stream_reserved_bitrate MedialiveMultiplex#transport_stream_reserved_bitrate}
  */
  readonly transportStreamReservedBitrate?: number;
}

export function medialiveMultiplexMultiplexSettingsToTerraform(struct?: MedialiveMultiplexMultiplexSettingsOutputReference | MedialiveMultiplexMultiplexSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_video_buffer_delay_milliseconds: cdktf.numberToTerraform(struct!.maximumVideoBufferDelayMilliseconds),
    transport_stream_bitrate: cdktf.numberToTerraform(struct!.transportStreamBitrate),
    transport_stream_id: cdktf.numberToTerraform(struct!.transportStreamId),
    transport_stream_reserved_bitrate: cdktf.numberToTerraform(struct!.transportStreamReservedBitrate),
  }
}

export class MedialiveMultiplexMultiplexSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveMultiplexMultiplexSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumVideoBufferDelayMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumVideoBufferDelayMilliseconds = this._maximumVideoBufferDelayMilliseconds;
    }
    if (this._transportStreamBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportStreamBitrate = this._transportStreamBitrate;
    }
    if (this._transportStreamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportStreamId = this._transportStreamId;
    }
    if (this._transportStreamReservedBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportStreamReservedBitrate = this._transportStreamReservedBitrate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveMultiplexMultiplexSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumVideoBufferDelayMilliseconds = undefined;
      this._transportStreamBitrate = undefined;
      this._transportStreamId = undefined;
      this._transportStreamReservedBitrate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumVideoBufferDelayMilliseconds = value.maximumVideoBufferDelayMilliseconds;
      this._transportStreamBitrate = value.transportStreamBitrate;
      this._transportStreamId = value.transportStreamId;
      this._transportStreamReservedBitrate = value.transportStreamReservedBitrate;
    }
  }

  // maximum_video_buffer_delay_milliseconds - computed: true, optional: true, required: false
  private _maximumVideoBufferDelayMilliseconds?: number; 
  public get maximumVideoBufferDelayMilliseconds() {
    return this.getNumberAttribute('maximum_video_buffer_delay_milliseconds');
  }
  public set maximumVideoBufferDelayMilliseconds(value: number) {
    this._maximumVideoBufferDelayMilliseconds = value;
  }
  public resetMaximumVideoBufferDelayMilliseconds() {
    this._maximumVideoBufferDelayMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumVideoBufferDelayMillisecondsInput() {
    return this._maximumVideoBufferDelayMilliseconds;
  }

  // transport_stream_bitrate - computed: false, optional: false, required: true
  private _transportStreamBitrate?: number; 
  public get transportStreamBitrate() {
    return this.getNumberAttribute('transport_stream_bitrate');
  }
  public set transportStreamBitrate(value: number) {
    this._transportStreamBitrate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportStreamBitrateInput() {
    return this._transportStreamBitrate;
  }

  // transport_stream_id - computed: false, optional: false, required: true
  private _transportStreamId?: number; 
  public get transportStreamId() {
    return this.getNumberAttribute('transport_stream_id');
  }
  public set transportStreamId(value: number) {
    this._transportStreamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportStreamIdInput() {
    return this._transportStreamId;
  }

  // transport_stream_reserved_bitrate - computed: true, optional: true, required: false
  private _transportStreamReservedBitrate?: number; 
  public get transportStreamReservedBitrate() {
    return this.getNumberAttribute('transport_stream_reserved_bitrate');
  }
  public set transportStreamReservedBitrate(value: number) {
    this._transportStreamReservedBitrate = value;
  }
  public resetTransportStreamReservedBitrate() {
    this._transportStreamReservedBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportStreamReservedBitrateInput() {
    return this._transportStreamReservedBitrate;
  }
}
export interface MedialiveMultiplexTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#create MedialiveMultiplex#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#delete MedialiveMultiplex#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex#update MedialiveMultiplex#update}
  */
  readonly update?: string;
}

export function medialiveMultiplexTimeoutsToTerraform(struct?: MedialiveMultiplexTimeoutsOutputReference | MedialiveMultiplexTimeouts | cdktf.IResolvable): any {
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

export class MedialiveMultiplexTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MedialiveMultiplexTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MedialiveMultiplexTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex aws_medialive_multiplex}
*/
export class MedialiveMultiplex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_medialive_multiplex";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex aws_medialive_multiplex} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MedialiveMultiplexConfig
  */
  public constructor(scope: Construct, id: string, config: MedialiveMultiplexConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_medialive_multiplex',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZones = config.availabilityZones;
    this._id = config.id;
    this._name = config.name;
    this._startMultiplex = config.startMultiplex;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._multiplexSettings.internalValue = config.multiplexSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zones - computed: false, optional: false, required: true
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
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

  // start_multiplex - computed: false, optional: true, required: false
  private _startMultiplex?: boolean | cdktf.IResolvable; 
  public get startMultiplex() {
    return this.getBooleanAttribute('start_multiplex');
  }
  public set startMultiplex(value: boolean | cdktf.IResolvable) {
    this._startMultiplex = value;
  }
  public resetStartMultiplex() {
    this._startMultiplex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startMultiplexInput() {
    return this._startMultiplex;
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

  // multiplex_settings - computed: false, optional: true, required: false
  private _multiplexSettings = new MedialiveMultiplexMultiplexSettingsOutputReference(this, "multiplex_settings");
  public get multiplexSettings() {
    return this._multiplexSettings;
  }
  public putMultiplexSettings(value: MedialiveMultiplexMultiplexSettings) {
    this._multiplexSettings.internalValue = value;
  }
  public resetMultiplexSettings() {
    this._multiplexSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplexSettingsInput() {
    return this._multiplexSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MedialiveMultiplexTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MedialiveMultiplexTimeouts) {
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
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZones),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      start_multiplex: cdktf.booleanToTerraform(this._startMultiplex),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      multiplex_settings: medialiveMultiplexMultiplexSettingsToTerraform(this._multiplexSettings.internalValue),
      timeouts: medialiveMultiplexTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
