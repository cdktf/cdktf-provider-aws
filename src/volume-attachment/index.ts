// https://www.terraform.io/docs/providers/aws/r/volume_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VolumeAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment#device_name VolumeAttachment#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment#force_detach VolumeAttachment#force_detach}
  */
  readonly forceDetach?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment#id VolumeAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment#instance_id VolumeAttachment#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment#skip_destroy VolumeAttachment#skip_destroy}
  */
  readonly skipDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment#stop_instance_before_detaching VolumeAttachment#stop_instance_before_detaching}
  */
  readonly stopInstanceBeforeDetaching?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment#volume_id VolumeAttachment#volume_id}
  */
  readonly volumeId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment#timeouts VolumeAttachment#timeouts}
  */
  readonly timeouts?: VolumeAttachmentTimeouts;
}
export interface VolumeAttachmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment#create VolumeAttachment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment#delete VolumeAttachment#delete}
  */
  readonly delete?: string;
}

export function volumeAttachmentTimeoutsToTerraform(struct?: VolumeAttachmentTimeoutsOutputReference | VolumeAttachmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class VolumeAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VolumeAttachmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VolumeAttachmentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment aws_volume_attachment}
*/
export class VolumeAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_volume_attachment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment aws_volume_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VolumeAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: VolumeAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_volume_attachment',
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
    this._deviceName = config.deviceName;
    this._forceDetach = config.forceDetach;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._skipDestroy = config.skipDestroy;
    this._stopInstanceBeforeDetaching = config.stopInstanceBeforeDetaching;
    this._volumeId = config.volumeId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // force_detach - computed: false, optional: true, required: false
  private _forceDetach?: boolean | cdktf.IResolvable; 
  public get forceDetach() {
    return this.getBooleanAttribute('force_detach');
  }
  public set forceDetach(value: boolean | cdktf.IResolvable) {
    this._forceDetach = value;
  }
  public resetForceDetach() {
    this._forceDetach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDetachInput() {
    return this._forceDetach;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // skip_destroy - computed: false, optional: true, required: false
  private _skipDestroy?: boolean | cdktf.IResolvable; 
  public get skipDestroy() {
    return this.getBooleanAttribute('skip_destroy');
  }
  public set skipDestroy(value: boolean | cdktf.IResolvable) {
    this._skipDestroy = value;
  }
  public resetSkipDestroy() {
    this._skipDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDestroyInput() {
    return this._skipDestroy;
  }

  // stop_instance_before_detaching - computed: false, optional: true, required: false
  private _stopInstanceBeforeDetaching?: boolean | cdktf.IResolvable; 
  public get stopInstanceBeforeDetaching() {
    return this.getBooleanAttribute('stop_instance_before_detaching');
  }
  public set stopInstanceBeforeDetaching(value: boolean | cdktf.IResolvable) {
    this._stopInstanceBeforeDetaching = value;
  }
  public resetStopInstanceBeforeDetaching() {
    this._stopInstanceBeforeDetaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopInstanceBeforeDetachingInput() {
    return this._stopInstanceBeforeDetaching;
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VolumeAttachmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VolumeAttachmentTimeouts) {
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
      device_name: cdktf.stringToTerraform(this._deviceName),
      force_detach: cdktf.booleanToTerraform(this._forceDetach),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      skip_destroy: cdktf.booleanToTerraform(this._skipDestroy),
      stop_instance_before_detaching: cdktf.booleanToTerraform(this._stopInstanceBeforeDetaching),
      volume_id: cdktf.stringToTerraform(this._volumeId),
      timeouts: volumeAttachmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
