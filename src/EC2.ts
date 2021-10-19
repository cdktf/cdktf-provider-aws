// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2
*/
export namespace EC2 {
  export interface AmiConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#architecture Ami#architecture}
    */
    readonly architecture?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#description Ami#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#ena_support Ami#ena_support}
    */
    readonly enaSupport?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#image_location Ami#image_location}
    */
    readonly imageLocation?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#kernel_id Ami#kernel_id}
    */
    readonly kernelId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#name Ami#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#ramdisk_id Ami#ramdisk_id}
    */
    readonly ramdiskId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#root_device_name Ami#root_device_name}
    */
    readonly rootDeviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#sriov_net_support Ami#sriov_net_support}
    */
    readonly sriovNetSupport?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#tags Ami#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#tags_all Ami#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#virtualization_type Ami#virtualization_type}
    */
    readonly virtualizationType?: string;
    /**
    * ebs_block_device block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#ebs_block_device Ami#ebs_block_device}
    */
    readonly ebsBlockDevice?: AmiEbsBlockDevice[];
    /**
    * ephemeral_block_device block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#ephemeral_block_device Ami#ephemeral_block_device}
    */
    readonly ephemeralBlockDevice?: AmiEphemeralBlockDevice[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#timeouts Ami#timeouts}
    */
    readonly timeouts?: AmiTimeouts;
  }
  export interface AmiEbsBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#delete_on_termination Ami#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#device_name Ami#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#encrypted Ami#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#iops Ami#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#snapshot_id Ami#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#throughput Ami#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#volume_size Ami#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#volume_type Ami#volume_type}
    */
    readonly volumeType?: string;
  }

  function amiEbsBlockDeviceToTerraform(struct?: AmiEbsBlockDevice): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
      device_name: cdktf.stringToTerraform(struct!.deviceName),
      encrypted: cdktf.booleanToTerraform(struct!.encrypted),
      iops: cdktf.numberToTerraform(struct!.iops),
      snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
      throughput: cdktf.numberToTerraform(struct!.throughput),
      volume_size: cdktf.numberToTerraform(struct!.volumeSize),
      volume_type: cdktf.stringToTerraform(struct!.volumeType),
    }
  }

  export interface AmiEphemeralBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#device_name Ami#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#virtual_name Ami#virtual_name}
    */
    readonly virtualName: string;
  }

  function amiEphemeralBlockDeviceToTerraform(struct?: AmiEphemeralBlockDevice): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      device_name: cdktf.stringToTerraform(struct!.deviceName),
      virtual_name: cdktf.stringToTerraform(struct!.virtualName),
    }
  }

  export interface AmiTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#create Ami#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#delete Ami#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#update Ami#update}
    */
    readonly update?: string;
  }

  function amiTimeoutsToTerraform(struct?: AmiTimeoutsOutputReference | AmiTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class AmiTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ami.html aws_ami}
  */
  export class Ami extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ami";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ami.html aws_ami} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmiConfig
    */
    public constructor(scope: Construct, id: string, config: AmiConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ami',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._architecture = config.architecture;
      this._description = config.description;
      this._enaSupport = config.enaSupport;
      this._imageLocation = config.imageLocation;
      this._kernelId = config.kernelId;
      this._name = config.name;
      this._ramdiskId = config.ramdiskId;
      this._rootDeviceName = config.rootDeviceName;
      this._sriovNetSupport = config.sriovNetSupport;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._virtualizationType = config.virtualizationType;
      this._ebsBlockDevice = config.ebsBlockDevice;
      this._ephemeralBlockDevice = config.ephemeralBlockDevice;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // architecture - computed: false, optional: true, required: false
    private _architecture?: string | undefined; 
    public get architecture() {
      return this.getStringAttribute('architecture');
    }
    public set architecture(value: string | undefined) {
      this._architecture = value;
    }
    public resetArchitecture() {
      this._architecture = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get architectureInput() {
      return this._architecture
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // ena_support - computed: false, optional: true, required: false
    private _enaSupport?: boolean | cdktf.IResolvable | undefined; 
    public get enaSupport() {
      return this.getBooleanAttribute('ena_support') as any;
    }
    public set enaSupport(value: boolean | cdktf.IResolvable | undefined) {
      this._enaSupport = value;
    }
    public resetEnaSupport() {
      this._enaSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enaSupportInput() {
      return this._enaSupport
    }

    // hypervisor - computed: true, optional: false, required: false
    public get hypervisor() {
      return this.getStringAttribute('hypervisor');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // image_location - computed: true, optional: true, required: false
    private _imageLocation?: string | undefined; 
    public get imageLocation() {
      return this.getStringAttribute('image_location');
    }
    public set imageLocation(value: string | undefined) {
      this._imageLocation = value;
    }
    public resetImageLocation() {
      this._imageLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageLocationInput() {
      return this._imageLocation
    }

    // image_owner_alias - computed: true, optional: false, required: false
    public get imageOwnerAlias() {
      return this.getStringAttribute('image_owner_alias');
    }

    // image_type - computed: true, optional: false, required: false
    public get imageType() {
      return this.getStringAttribute('image_type');
    }

    // kernel_id - computed: false, optional: true, required: false
    private _kernelId?: string | undefined; 
    public get kernelId() {
      return this.getStringAttribute('kernel_id');
    }
    public set kernelId(value: string | undefined) {
      this._kernelId = value;
    }
    public resetKernelId() {
      this._kernelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kernelIdInput() {
      return this._kernelId
    }

    // manage_ebs_snapshots - computed: true, optional: false, required: false
    public get manageEbsSnapshots() {
      return this.getBooleanAttribute('manage_ebs_snapshots') as any;
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
      return this._name
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // platform - computed: true, optional: false, required: false
    public get platform() {
      return this.getStringAttribute('platform');
    }

    // platform_details - computed: true, optional: false, required: false
    public get platformDetails() {
      return this.getStringAttribute('platform_details');
    }

    // public - computed: true, optional: false, required: false
    public get public() {
      return this.getBooleanAttribute('public') as any;
    }

    // ramdisk_id - computed: false, optional: true, required: false
    private _ramdiskId?: string | undefined; 
    public get ramdiskId() {
      return this.getStringAttribute('ramdisk_id');
    }
    public set ramdiskId(value: string | undefined) {
      this._ramdiskId = value;
    }
    public resetRamdiskId() {
      this._ramdiskId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ramdiskIdInput() {
      return this._ramdiskId
    }

    // root_device_name - computed: false, optional: true, required: false
    private _rootDeviceName?: string | undefined; 
    public get rootDeviceName() {
      return this.getStringAttribute('root_device_name');
    }
    public set rootDeviceName(value: string | undefined) {
      this._rootDeviceName = value;
    }
    public resetRootDeviceName() {
      this._rootDeviceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rootDeviceNameInput() {
      return this._rootDeviceName
    }

    // root_snapshot_id - computed: true, optional: false, required: false
    public get rootSnapshotId() {
      return this.getStringAttribute('root_snapshot_id');
    }

    // sriov_net_support - computed: false, optional: true, required: false
    private _sriovNetSupport?: string | undefined; 
    public get sriovNetSupport() {
      return this.getStringAttribute('sriov_net_support');
    }
    public set sriovNetSupport(value: string | undefined) {
      this._sriovNetSupport = value;
    }
    public resetSriovNetSupport() {
      this._sriovNetSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sriovNetSupportInput() {
      return this._sriovNetSupport
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // usage_operation - computed: true, optional: false, required: false
    public get usageOperation() {
      return this.getStringAttribute('usage_operation');
    }

    // virtualization_type - computed: false, optional: true, required: false
    private _virtualizationType?: string | undefined; 
    public get virtualizationType() {
      return this.getStringAttribute('virtualization_type');
    }
    public set virtualizationType(value: string | undefined) {
      this._virtualizationType = value;
    }
    public resetVirtualizationType() {
      this._virtualizationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualizationTypeInput() {
      return this._virtualizationType
    }

    // ebs_block_device - computed: false, optional: true, required: false
    private _ebsBlockDevice?: AmiEbsBlockDevice[] | undefined; 
    public get ebsBlockDevice() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ebs_block_device') as any;
    }
    public set ebsBlockDevice(value: AmiEbsBlockDevice[] | undefined) {
      this._ebsBlockDevice = value;
    }
    public resetEbsBlockDevice() {
      this._ebsBlockDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsBlockDeviceInput() {
      return this._ebsBlockDevice
    }

    // ephemeral_block_device - computed: false, optional: true, required: false
    private _ephemeralBlockDevice?: AmiEphemeralBlockDevice[] | undefined; 
    public get ephemeralBlockDevice() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ephemeral_block_device') as any;
    }
    public set ephemeralBlockDevice(value: AmiEphemeralBlockDevice[] | undefined) {
      this._ephemeralBlockDevice = value;
    }
    public resetEphemeralBlockDevice() {
      this._ephemeralBlockDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ephemeralBlockDeviceInput() {
      return this._ephemeralBlockDevice
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: AmiTimeouts | undefined; 
    private __timeoutsOutput = new AmiTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: AmiTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        architecture: cdktf.stringToTerraform(this._architecture),
        description: cdktf.stringToTerraform(this._description),
        ena_support: cdktf.booleanToTerraform(this._enaSupport),
        image_location: cdktf.stringToTerraform(this._imageLocation),
        kernel_id: cdktf.stringToTerraform(this._kernelId),
        name: cdktf.stringToTerraform(this._name),
        ramdisk_id: cdktf.stringToTerraform(this._ramdiskId),
        root_device_name: cdktf.stringToTerraform(this._rootDeviceName),
        sriov_net_support: cdktf.stringToTerraform(this._sriovNetSupport),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        virtualization_type: cdktf.stringToTerraform(this._virtualizationType),
        ebs_block_device: cdktf.listMapper(amiEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
        ephemeral_block_device: cdktf.listMapper(amiEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
        timeouts: amiTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface AmiCopyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#description AmiCopy#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#destination_outpost_arn AmiCopy#destination_outpost_arn}
    */
    readonly destinationOutpostArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#encrypted AmiCopy#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#kms_key_id AmiCopy#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#name AmiCopy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#source_ami_id AmiCopy#source_ami_id}
    */
    readonly sourceAmiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#source_ami_region AmiCopy#source_ami_region}
    */
    readonly sourceAmiRegion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#tags AmiCopy#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#tags_all AmiCopy#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * ebs_block_device block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#ebs_block_device AmiCopy#ebs_block_device}
    */
    readonly ebsBlockDevice?: AmiCopyEbsBlockDevice[];
    /**
    * ephemeral_block_device block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#ephemeral_block_device AmiCopy#ephemeral_block_device}
    */
    readonly ephemeralBlockDevice?: AmiCopyEphemeralBlockDevice[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#timeouts AmiCopy#timeouts}
    */
    readonly timeouts?: AmiCopyTimeouts;
  }
  export interface AmiCopyEbsBlockDevice {
  }

  function amiCopyEbsBlockDeviceToTerraform(struct?: AmiCopyEbsBlockDevice): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
    }
  }

  export interface AmiCopyEphemeralBlockDevice {
  }

  function amiCopyEphemeralBlockDeviceToTerraform(struct?: AmiCopyEphemeralBlockDevice): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
    }
  }

  export interface AmiCopyTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#create AmiCopy#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#delete AmiCopy#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#update AmiCopy#update}
    */
    readonly update?: string;
  }

  function amiCopyTimeoutsToTerraform(struct?: AmiCopyTimeoutsOutputReference | AmiCopyTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class AmiCopyTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html aws_ami_copy}
  */
  export class AmiCopy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ami_copy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html aws_ami_copy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmiCopyConfig
    */
    public constructor(scope: Construct, id: string, config: AmiCopyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ami_copy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._destinationOutpostArn = config.destinationOutpostArn;
      this._encrypted = config.encrypted;
      this._kmsKeyId = config.kmsKeyId;
      this._name = config.name;
      this._sourceAmiId = config.sourceAmiId;
      this._sourceAmiRegion = config.sourceAmiRegion;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._ebsBlockDevice = config.ebsBlockDevice;
      this._ephemeralBlockDevice = config.ephemeralBlockDevice;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // architecture - computed: true, optional: false, required: false
    public get architecture() {
      return this.getStringAttribute('architecture');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // destination_outpost_arn - computed: false, optional: true, required: false
    private _destinationOutpostArn?: string | undefined; 
    public get destinationOutpostArn() {
      return this.getStringAttribute('destination_outpost_arn');
    }
    public set destinationOutpostArn(value: string | undefined) {
      this._destinationOutpostArn = value;
    }
    public resetDestinationOutpostArn() {
      this._destinationOutpostArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationOutpostArnInput() {
      return this._destinationOutpostArn
    }

    // ena_support - computed: true, optional: false, required: false
    public get enaSupport() {
      return this.getBooleanAttribute('ena_support') as any;
    }

    // encrypted - computed: false, optional: true, required: false
    private _encrypted?: boolean | cdktf.IResolvable | undefined; 
    public get encrypted() {
      return this.getBooleanAttribute('encrypted') as any;
    }
    public set encrypted(value: boolean | cdktf.IResolvable | undefined) {
      this._encrypted = value;
    }
    public resetEncrypted() {
      this._encrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptedInput() {
      return this._encrypted
    }

    // hypervisor - computed: true, optional: false, required: false
    public get hypervisor() {
      return this.getStringAttribute('hypervisor');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // image_location - computed: true, optional: false, required: false
    public get imageLocation() {
      return this.getStringAttribute('image_location');
    }

    // image_owner_alias - computed: true, optional: false, required: false
    public get imageOwnerAlias() {
      return this.getStringAttribute('image_owner_alias');
    }

    // image_type - computed: true, optional: false, required: false
    public get imageType() {
      return this.getStringAttribute('image_type');
    }

    // kernel_id - computed: true, optional: false, required: false
    public get kernelId() {
      return this.getStringAttribute('kernel_id');
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // manage_ebs_snapshots - computed: true, optional: false, required: false
    public get manageEbsSnapshots() {
      return this.getBooleanAttribute('manage_ebs_snapshots') as any;
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
      return this._name
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // platform - computed: true, optional: false, required: false
    public get platform() {
      return this.getStringAttribute('platform');
    }

    // platform_details - computed: true, optional: false, required: false
    public get platformDetails() {
      return this.getStringAttribute('platform_details');
    }

    // public - computed: true, optional: false, required: false
    public get public() {
      return this.getBooleanAttribute('public') as any;
    }

    // ramdisk_id - computed: true, optional: false, required: false
    public get ramdiskId() {
      return this.getStringAttribute('ramdisk_id');
    }

    // root_device_name - computed: true, optional: false, required: false
    public get rootDeviceName() {
      return this.getStringAttribute('root_device_name');
    }

    // root_snapshot_id - computed: true, optional: false, required: false
    public get rootSnapshotId() {
      return this.getStringAttribute('root_snapshot_id');
    }

    // source_ami_id - computed: false, optional: false, required: true
    private _sourceAmiId?: string; 
    public get sourceAmiId() {
      return this.getStringAttribute('source_ami_id');
    }
    public set sourceAmiId(value: string) {
      this._sourceAmiId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceAmiIdInput() {
      return this._sourceAmiId
    }

    // source_ami_region - computed: false, optional: false, required: true
    private _sourceAmiRegion?: string; 
    public get sourceAmiRegion() {
      return this.getStringAttribute('source_ami_region');
    }
    public set sourceAmiRegion(value: string) {
      this._sourceAmiRegion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceAmiRegionInput() {
      return this._sourceAmiRegion
    }

    // sriov_net_support - computed: true, optional: false, required: false
    public get sriovNetSupport() {
      return this.getStringAttribute('sriov_net_support');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // usage_operation - computed: true, optional: false, required: false
    public get usageOperation() {
      return this.getStringAttribute('usage_operation');
    }

    // virtualization_type - computed: true, optional: false, required: false
    public get virtualizationType() {
      return this.getStringAttribute('virtualization_type');
    }

    // ebs_block_device - computed: false, optional: true, required: false
    private _ebsBlockDevice?: AmiCopyEbsBlockDevice[] | undefined; 
    public get ebsBlockDevice() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ebs_block_device') as any;
    }
    public set ebsBlockDevice(value: AmiCopyEbsBlockDevice[] | undefined) {
      this._ebsBlockDevice = value;
    }
    public resetEbsBlockDevice() {
      this._ebsBlockDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsBlockDeviceInput() {
      return this._ebsBlockDevice
    }

    // ephemeral_block_device - computed: false, optional: true, required: false
    private _ephemeralBlockDevice?: AmiCopyEphemeralBlockDevice[] | undefined; 
    public get ephemeralBlockDevice() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ephemeral_block_device') as any;
    }
    public set ephemeralBlockDevice(value: AmiCopyEphemeralBlockDevice[] | undefined) {
      this._ephemeralBlockDevice = value;
    }
    public resetEphemeralBlockDevice() {
      this._ephemeralBlockDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ephemeralBlockDeviceInput() {
      return this._ephemeralBlockDevice
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: AmiCopyTimeouts | undefined; 
    private __timeoutsOutput = new AmiCopyTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: AmiCopyTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        destination_outpost_arn: cdktf.stringToTerraform(this._destinationOutpostArn),
        encrypted: cdktf.booleanToTerraform(this._encrypted),
        kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
        name: cdktf.stringToTerraform(this._name),
        source_ami_id: cdktf.stringToTerraform(this._sourceAmiId),
        source_ami_region: cdktf.stringToTerraform(this._sourceAmiRegion),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        ebs_block_device: cdktf.listMapper(amiCopyEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
        ephemeral_block_device: cdktf.listMapper(amiCopyEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
        timeouts: amiCopyTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface AmiFromInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#description AmiFromInstance#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#name AmiFromInstance#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#snapshot_without_reboot AmiFromInstance#snapshot_without_reboot}
    */
    readonly snapshotWithoutReboot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#source_instance_id AmiFromInstance#source_instance_id}
    */
    readonly sourceInstanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#tags AmiFromInstance#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#tags_all AmiFromInstance#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * ebs_block_device block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#ebs_block_device AmiFromInstance#ebs_block_device}
    */
    readonly ebsBlockDevice?: AmiFromInstanceEbsBlockDevice[];
    /**
    * ephemeral_block_device block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#ephemeral_block_device AmiFromInstance#ephemeral_block_device}
    */
    readonly ephemeralBlockDevice?: AmiFromInstanceEphemeralBlockDevice[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#timeouts AmiFromInstance#timeouts}
    */
    readonly timeouts?: AmiFromInstanceTimeouts;
  }
  export interface AmiFromInstanceEbsBlockDevice {
  }

  function amiFromInstanceEbsBlockDeviceToTerraform(struct?: AmiFromInstanceEbsBlockDevice): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
    }
  }

  export interface AmiFromInstanceEphemeralBlockDevice {
  }

  function amiFromInstanceEphemeralBlockDeviceToTerraform(struct?: AmiFromInstanceEphemeralBlockDevice): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
    }
  }

  export interface AmiFromInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#create AmiFromInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#delete AmiFromInstance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#update AmiFromInstance#update}
    */
    readonly update?: string;
  }

  function amiFromInstanceTimeoutsToTerraform(struct?: AmiFromInstanceTimeoutsOutputReference | AmiFromInstanceTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class AmiFromInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html aws_ami_from_instance}
  */
  export class AmiFromInstance extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ami_from_instance";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html aws_ami_from_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmiFromInstanceConfig
    */
    public constructor(scope: Construct, id: string, config: AmiFromInstanceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ami_from_instance',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._name = config.name;
      this._snapshotWithoutReboot = config.snapshotWithoutReboot;
      this._sourceInstanceId = config.sourceInstanceId;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._ebsBlockDevice = config.ebsBlockDevice;
      this._ephemeralBlockDevice = config.ephemeralBlockDevice;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // architecture - computed: true, optional: false, required: false
    public get architecture() {
      return this.getStringAttribute('architecture');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // ena_support - computed: true, optional: false, required: false
    public get enaSupport() {
      return this.getBooleanAttribute('ena_support') as any;
    }

    // hypervisor - computed: true, optional: false, required: false
    public get hypervisor() {
      return this.getStringAttribute('hypervisor');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // image_location - computed: true, optional: false, required: false
    public get imageLocation() {
      return this.getStringAttribute('image_location');
    }

    // image_owner_alias - computed: true, optional: false, required: false
    public get imageOwnerAlias() {
      return this.getStringAttribute('image_owner_alias');
    }

    // image_type - computed: true, optional: false, required: false
    public get imageType() {
      return this.getStringAttribute('image_type');
    }

    // kernel_id - computed: true, optional: false, required: false
    public get kernelId() {
      return this.getStringAttribute('kernel_id');
    }

    // manage_ebs_snapshots - computed: true, optional: false, required: false
    public get manageEbsSnapshots() {
      return this.getBooleanAttribute('manage_ebs_snapshots') as any;
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
      return this._name
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // platform - computed: true, optional: false, required: false
    public get platform() {
      return this.getStringAttribute('platform');
    }

    // platform_details - computed: true, optional: false, required: false
    public get platformDetails() {
      return this.getStringAttribute('platform_details');
    }

    // public - computed: true, optional: false, required: false
    public get public() {
      return this.getBooleanAttribute('public') as any;
    }

    // ramdisk_id - computed: true, optional: false, required: false
    public get ramdiskId() {
      return this.getStringAttribute('ramdisk_id');
    }

    // root_device_name - computed: true, optional: false, required: false
    public get rootDeviceName() {
      return this.getStringAttribute('root_device_name');
    }

    // root_snapshot_id - computed: true, optional: false, required: false
    public get rootSnapshotId() {
      return this.getStringAttribute('root_snapshot_id');
    }

    // snapshot_without_reboot - computed: false, optional: true, required: false
    private _snapshotWithoutReboot?: boolean | cdktf.IResolvable | undefined; 
    public get snapshotWithoutReboot() {
      return this.getBooleanAttribute('snapshot_without_reboot') as any;
    }
    public set snapshotWithoutReboot(value: boolean | cdktf.IResolvable | undefined) {
      this._snapshotWithoutReboot = value;
    }
    public resetSnapshotWithoutReboot() {
      this._snapshotWithoutReboot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotWithoutRebootInput() {
      return this._snapshotWithoutReboot
    }

    // source_instance_id - computed: false, optional: false, required: true
    private _sourceInstanceId?: string; 
    public get sourceInstanceId() {
      return this.getStringAttribute('source_instance_id');
    }
    public set sourceInstanceId(value: string) {
      this._sourceInstanceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInstanceIdInput() {
      return this._sourceInstanceId
    }

    // sriov_net_support - computed: true, optional: false, required: false
    public get sriovNetSupport() {
      return this.getStringAttribute('sriov_net_support');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // usage_operation - computed: true, optional: false, required: false
    public get usageOperation() {
      return this.getStringAttribute('usage_operation');
    }

    // virtualization_type - computed: true, optional: false, required: false
    public get virtualizationType() {
      return this.getStringAttribute('virtualization_type');
    }

    // ebs_block_device - computed: false, optional: true, required: false
    private _ebsBlockDevice?: AmiFromInstanceEbsBlockDevice[] | undefined; 
    public get ebsBlockDevice() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ebs_block_device') as any;
    }
    public set ebsBlockDevice(value: AmiFromInstanceEbsBlockDevice[] | undefined) {
      this._ebsBlockDevice = value;
    }
    public resetEbsBlockDevice() {
      this._ebsBlockDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsBlockDeviceInput() {
      return this._ebsBlockDevice
    }

    // ephemeral_block_device - computed: false, optional: true, required: false
    private _ephemeralBlockDevice?: AmiFromInstanceEphemeralBlockDevice[] | undefined; 
    public get ephemeralBlockDevice() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ephemeral_block_device') as any;
    }
    public set ephemeralBlockDevice(value: AmiFromInstanceEphemeralBlockDevice[] | undefined) {
      this._ephemeralBlockDevice = value;
    }
    public resetEphemeralBlockDevice() {
      this._ephemeralBlockDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ephemeralBlockDeviceInput() {
      return this._ephemeralBlockDevice
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: AmiFromInstanceTimeouts | undefined; 
    private __timeoutsOutput = new AmiFromInstanceTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: AmiFromInstanceTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        snapshot_without_reboot: cdktf.booleanToTerraform(this._snapshotWithoutReboot),
        source_instance_id: cdktf.stringToTerraform(this._sourceInstanceId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        ebs_block_device: cdktf.listMapper(amiFromInstanceEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
        ephemeral_block_device: cdktf.listMapper(amiFromInstanceEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
        timeouts: amiFromInstanceTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface AmiLaunchPermissionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission.html#account_id AmiLaunchPermission#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission.html#image_id AmiLaunchPermission#image_id}
    */
    readonly imageId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission.html aws_ami_launch_permission}
  */
  export class AmiLaunchPermission extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ami_launch_permission";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission.html aws_ami_launch_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmiLaunchPermissionConfig
    */
    public constructor(scope: Construct, id: string, config: AmiLaunchPermissionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ami_launch_permission',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._accountId = config.accountId;
      this._imageId = config.imageId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: false, optional: false, required: true
    private _accountId?: string; 
    public get accountId() {
      return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
      this._accountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
      return this._accountId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // image_id - computed: false, optional: false, required: true
    private _imageId?: string; 
    public get imageId() {
      return this.getStringAttribute('image_id');
    }
    public set imageId(value: string) {
      this._imageId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get imageIdInput() {
      return this._imageId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        account_id: cdktf.stringToTerraform(this._accountId),
        image_id: cdktf.stringToTerraform(this._imageId),
      };
    }
  }
  export interface EbsDefaultKmsKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_default_kms_key.html#key_arn EbsDefaultKmsKey#key_arn}
    */
    readonly keyArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_default_kms_key.html aws_ebs_default_kms_key}
  */
  export class EbsDefaultKmsKey extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ebs_default_kms_key";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ebs_default_kms_key.html aws_ebs_default_kms_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EbsDefaultKmsKeyConfig
    */
    public constructor(scope: Construct, id: string, config: EbsDefaultKmsKeyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ebs_default_kms_key',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._keyArn = config.keyArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // key_arn - computed: false, optional: false, required: true
    private _keyArn?: string; 
    public get keyArn() {
      return this.getStringAttribute('key_arn');
    }
    public set keyArn(value: string) {
      this._keyArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyArnInput() {
      return this._keyArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        key_arn: cdktf.stringToTerraform(this._keyArn),
      };
    }
  }
  export interface EbsEncryptionByDefaultConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_encryption_by_default.html#enabled EbsEncryptionByDefault#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_encryption_by_default.html aws_ebs_encryption_by_default}
  */
  export class EbsEncryptionByDefault extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ebs_encryption_by_default";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ebs_encryption_by_default.html aws_ebs_encryption_by_default} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EbsEncryptionByDefaultConfig = {}
    */
    public constructor(scope: Construct, id: string, config: EbsEncryptionByDefaultConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ebs_encryption_by_default',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._enabled = config.enabled;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        enabled: cdktf.booleanToTerraform(this._enabled),
      };
    }
  }
  export interface EbsSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html#description EbsSnapshot#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html#tags EbsSnapshot#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html#tags_all EbsSnapshot#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html#volume_id EbsSnapshot#volume_id}
    */
    readonly volumeId: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html#timeouts EbsSnapshot#timeouts}
    */
    readonly timeouts?: EbsSnapshotTimeouts;
  }
  export interface EbsSnapshotTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html#create EbsSnapshot#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html#delete EbsSnapshot#delete}
    */
    readonly delete?: string;
  }

  function ebsSnapshotTimeoutsToTerraform(struct?: EbsSnapshotTimeoutsOutputReference | EbsSnapshotTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class EbsSnapshotTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html aws_ebs_snapshot}
  */
  export class EbsSnapshot extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ebs_snapshot";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html aws_ebs_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EbsSnapshotConfig
    */
    public constructor(scope: Construct, id: string, config: EbsSnapshotConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ebs_snapshot',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._volumeId = config.volumeId;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // data_encryption_key_id - computed: true, optional: false, required: false
    public get dataEncryptionKeyId() {
      return this.getStringAttribute('data_encryption_key_id');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // encrypted - computed: true, optional: false, required: false
    public get encrypted() {
      return this.getBooleanAttribute('encrypted') as any;
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }

    // owner_alias - computed: true, optional: false, required: false
    public get ownerAlias() {
      return this.getStringAttribute('owner_alias');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
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
      return this._volumeId
    }

    // volume_size - computed: true, optional: false, required: false
    public get volumeSize() {
      return this.getNumberAttribute('volume_size');
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: EbsSnapshotTimeouts | undefined; 
    private __timeoutsOutput = new EbsSnapshotTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: EbsSnapshotTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        volume_id: cdktf.stringToTerraform(this._volumeId),
        timeouts: ebsSnapshotTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface EbsSnapshotCopyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html#description EbsSnapshotCopy#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html#encrypted EbsSnapshotCopy#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html#kms_key_id EbsSnapshotCopy#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html#source_region EbsSnapshotCopy#source_region}
    */
    readonly sourceRegion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html#source_snapshot_id EbsSnapshotCopy#source_snapshot_id}
    */
    readonly sourceSnapshotId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html#tags EbsSnapshotCopy#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html#tags_all EbsSnapshotCopy#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html aws_ebs_snapshot_copy}
  */
  export class EbsSnapshotCopy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ebs_snapshot_copy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html aws_ebs_snapshot_copy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EbsSnapshotCopyConfig
    */
    public constructor(scope: Construct, id: string, config: EbsSnapshotCopyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ebs_snapshot_copy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._encrypted = config.encrypted;
      this._kmsKeyId = config.kmsKeyId;
      this._sourceRegion = config.sourceRegion;
      this._sourceSnapshotId = config.sourceSnapshotId;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // data_encryption_key_id - computed: true, optional: false, required: false
    public get dataEncryptionKeyId() {
      return this.getStringAttribute('data_encryption_key_id');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // encrypted - computed: false, optional: true, required: false
    private _encrypted?: boolean | cdktf.IResolvable | undefined; 
    public get encrypted() {
      return this.getBooleanAttribute('encrypted') as any;
    }
    public set encrypted(value: boolean | cdktf.IResolvable | undefined) {
      this._encrypted = value;
    }
    public resetEncrypted() {
      this._encrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptedInput() {
      return this._encrypted
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: false, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // owner_alias - computed: true, optional: false, required: false
    public get ownerAlias() {
      return this.getStringAttribute('owner_alias');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // source_region - computed: false, optional: false, required: true
    private _sourceRegion?: string; 
    public get sourceRegion() {
      return this.getStringAttribute('source_region');
    }
    public set sourceRegion(value: string) {
      this._sourceRegion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceRegionInput() {
      return this._sourceRegion
    }

    // source_snapshot_id - computed: false, optional: false, required: true
    private _sourceSnapshotId?: string; 
    public get sourceSnapshotId() {
      return this.getStringAttribute('source_snapshot_id');
    }
    public set sourceSnapshotId(value: string) {
      this._sourceSnapshotId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceSnapshotIdInput() {
      return this._sourceSnapshotId
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // volume_id - computed: true, optional: false, required: false
    public get volumeId() {
      return this.getStringAttribute('volume_id');
    }

    // volume_size - computed: true, optional: false, required: false
    public get volumeSize() {
      return this.getNumberAttribute('volume_size');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        encrypted: cdktf.booleanToTerraform(this._encrypted),
        kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
        source_region: cdktf.stringToTerraform(this._sourceRegion),
        source_snapshot_id: cdktf.stringToTerraform(this._sourceSnapshotId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface EbsSnapshotImportConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#description EbsSnapshotImport#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#encrypted EbsSnapshotImport#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#kms_key_id EbsSnapshotImport#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#role_name EbsSnapshotImport#role_name}
    */
    readonly roleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#tags EbsSnapshotImport#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#tags_all EbsSnapshotImport#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * client_data block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#client_data EbsSnapshotImport#client_data}
    */
    readonly clientData?: EbsSnapshotImportClientData;
    /**
    * disk_container block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#disk_container EbsSnapshotImport#disk_container}
    */
    readonly diskContainer: EbsSnapshotImportDiskContainer;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#timeouts EbsSnapshotImport#timeouts}
    */
    readonly timeouts?: EbsSnapshotImportTimeouts;
  }
  export interface EbsSnapshotImportClientData {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#comment EbsSnapshotImport#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#upload_end EbsSnapshotImport#upload_end}
    */
    readonly uploadEnd?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#upload_size EbsSnapshotImport#upload_size}
    */
    readonly uploadSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#upload_start EbsSnapshotImport#upload_start}
    */
    readonly uploadStart?: string;
  }

  function ebsSnapshotImportClientDataToTerraform(struct?: EbsSnapshotImportClientDataOutputReference | EbsSnapshotImportClientData): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      comment: cdktf.stringToTerraform(struct!.comment),
      upload_end: cdktf.stringToTerraform(struct!.uploadEnd),
      upload_size: cdktf.numberToTerraform(struct!.uploadSize),
      upload_start: cdktf.stringToTerraform(struct!.uploadStart),
    }
  }

  export class EbsSnapshotImportClientDataOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // comment - computed: false, optional: true, required: false
    private _comment?: string | undefined; 
    public get comment() {
      return this.getStringAttribute('comment');
    }
    public set comment(value: string | undefined) {
      this._comment = value;
    }
    public resetComment() {
      this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commentInput() {
      return this._comment
    }

    // upload_end - computed: true, optional: true, required: false
    private _uploadEnd?: string | undefined; 
    public get uploadEnd() {
      return this.getStringAttribute('upload_end');
    }
    public set uploadEnd(value: string | undefined) {
      this._uploadEnd = value;
    }
    public resetUploadEnd() {
      this._uploadEnd = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uploadEndInput() {
      return this._uploadEnd
    }

    // upload_size - computed: true, optional: true, required: false
    private _uploadSize?: number | undefined; 
    public get uploadSize() {
      return this.getNumberAttribute('upload_size');
    }
    public set uploadSize(value: number | undefined) {
      this._uploadSize = value;
    }
    public resetUploadSize() {
      this._uploadSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uploadSizeInput() {
      return this._uploadSize
    }

    // upload_start - computed: true, optional: true, required: false
    private _uploadStart?: string | undefined; 
    public get uploadStart() {
      return this.getStringAttribute('upload_start');
    }
    public set uploadStart(value: string | undefined) {
      this._uploadStart = value;
    }
    public resetUploadStart() {
      this._uploadStart = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uploadStartInput() {
      return this._uploadStart
    }
  }
  export interface EbsSnapshotImportDiskContainerUserBucket {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#s3_bucket EbsSnapshotImport#s3_bucket}
    */
    readonly s3Bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#s3_key EbsSnapshotImport#s3_key}
    */
    readonly s3Key: string;
  }

  function ebsSnapshotImportDiskContainerUserBucketToTerraform(struct?: EbsSnapshotImportDiskContainerUserBucketOutputReference | EbsSnapshotImportDiskContainerUserBucket): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
      s3_key: cdktf.stringToTerraform(struct!.s3Key),
    }
  }

  export class EbsSnapshotImportDiskContainerUserBucketOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // s3_bucket - computed: false, optional: false, required: true
    private _s3Bucket?: string; 
    public get s3Bucket() {
      return this.getStringAttribute('s3_bucket');
    }
    public set s3Bucket(value: string) {
      this._s3Bucket = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketInput() {
      return this._s3Bucket
    }

    // s3_key - computed: false, optional: false, required: true
    private _s3Key?: string; 
    public get s3Key() {
      return this.getStringAttribute('s3_key');
    }
    public set s3Key(value: string) {
      this._s3Key = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KeyInput() {
      return this._s3Key
    }
  }
  export interface EbsSnapshotImportDiskContainer {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#description EbsSnapshotImport#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#format EbsSnapshotImport#format}
    */
    readonly format: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#url EbsSnapshotImport#url}
    */
    readonly url?: string;
    /**
    * user_bucket block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#user_bucket EbsSnapshotImport#user_bucket}
    */
    readonly userBucket?: EbsSnapshotImportDiskContainerUserBucket;
  }

  function ebsSnapshotImportDiskContainerToTerraform(struct?: EbsSnapshotImportDiskContainerOutputReference | EbsSnapshotImportDiskContainer): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      description: cdktf.stringToTerraform(struct!.description),
      format: cdktf.stringToTerraform(struct!.format),
      url: cdktf.stringToTerraform(struct!.url),
      user_bucket: ebsSnapshotImportDiskContainerUserBucketToTerraform(struct!.userBucket),
    }
  }

  export class EbsSnapshotImportDiskContainerOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // format - computed: false, optional: false, required: true
    private _format?: string; 
    public get format() {
      return this.getStringAttribute('format');
    }
    public set format(value: string) {
      this._format = value;
    }
    // Temporarily expose input value. Use with caution.
    public get formatInput() {
      return this._format
    }

    // url - computed: false, optional: true, required: false
    private _url?: string | undefined; 
    public get url() {
      return this.getStringAttribute('url');
    }
    public set url(value: string | undefined) {
      this._url = value;
    }
    public resetUrl() {
      this._url = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlInput() {
      return this._url
    }

    // user_bucket - computed: false, optional: true, required: false
    private _userBucket?: EbsSnapshotImportDiskContainerUserBucket | undefined; 
    private __userBucketOutput = new EbsSnapshotImportDiskContainerUserBucketOutputReference(this as any, "user_bucket", true);
    public get userBucket() {
      return this.__userBucketOutput;
    }
    public putUserBucket(value: EbsSnapshotImportDiskContainerUserBucket | undefined) {
      this._userBucket = value;
    }
    public resetUserBucket() {
      this._userBucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userBucketInput() {
      return this._userBucket
    }
  }
  export interface EbsSnapshotImportTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#create EbsSnapshotImport#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#delete EbsSnapshotImport#delete}
    */
    readonly delete?: string;
  }

  function ebsSnapshotImportTimeoutsToTerraform(struct?: EbsSnapshotImportTimeoutsOutputReference | EbsSnapshotImportTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class EbsSnapshotImportTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html aws_ebs_snapshot_import}
  */
  export class EbsSnapshotImport extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ebs_snapshot_import";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html aws_ebs_snapshot_import} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EbsSnapshotImportConfig
    */
    public constructor(scope: Construct, id: string, config: EbsSnapshotImportConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ebs_snapshot_import',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._encrypted = config.encrypted;
      this._kmsKeyId = config.kmsKeyId;
      this._roleName = config.roleName;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._clientData = config.clientData;
      this._diskContainer = config.diskContainer;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // data_encryption_key_id - computed: true, optional: false, required: false
    public get dataEncryptionKeyId() {
      return this.getStringAttribute('data_encryption_key_id');
    }

    // description - computed: true, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // encrypted - computed: false, optional: true, required: false
    private _encrypted?: boolean | cdktf.IResolvable | undefined; 
    public get encrypted() {
      return this.getBooleanAttribute('encrypted') as any;
    }
    public set encrypted(value: boolean | cdktf.IResolvable | undefined) {
      this._encrypted = value;
    }
    public resetEncrypted() {
      this._encrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptedInput() {
      return this._encrypted
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: false, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // owner_alias - computed: true, optional: false, required: false
    public get ownerAlias() {
      return this.getStringAttribute('owner_alias');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // role_name - computed: false, optional: true, required: false
    private _roleName?: string | undefined; 
    public get roleName() {
      return this.getStringAttribute('role_name');
    }
    public set roleName(value: string | undefined) {
      this._roleName = value;
    }
    public resetRoleName() {
      this._roleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleNameInput() {
      return this._roleName
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // volume_size - computed: true, optional: false, required: false
    public get volumeSize() {
      return this.getNumberAttribute('volume_size');
    }

    // client_data - computed: false, optional: true, required: false
    private _clientData?: EbsSnapshotImportClientData | undefined; 
    private __clientDataOutput = new EbsSnapshotImportClientDataOutputReference(this as any, "client_data", true);
    public get clientData() {
      return this.__clientDataOutput;
    }
    public putClientData(value: EbsSnapshotImportClientData | undefined) {
      this._clientData = value;
    }
    public resetClientData() {
      this._clientData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientDataInput() {
      return this._clientData
    }

    // disk_container - computed: false, optional: false, required: true
    private _diskContainer?: EbsSnapshotImportDiskContainer; 
    private __diskContainerOutput = new EbsSnapshotImportDiskContainerOutputReference(this as any, "disk_container", true);
    public get diskContainer() {
      return this.__diskContainerOutput;
    }
    public putDiskContainer(value: EbsSnapshotImportDiskContainer) {
      this._diskContainer = value;
    }
    // Temporarily expose input value. Use with caution.
    public get diskContainerInput() {
      return this._diskContainer
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: EbsSnapshotImportTimeouts | undefined; 
    private __timeoutsOutput = new EbsSnapshotImportTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: EbsSnapshotImportTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        encrypted: cdktf.booleanToTerraform(this._encrypted),
        kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
        role_name: cdktf.stringToTerraform(this._roleName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        client_data: ebsSnapshotImportClientDataToTerraform(this._clientData),
        disk_container: ebsSnapshotImportDiskContainerToTerraform(this._diskContainer),
        timeouts: ebsSnapshotImportTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface EbsVolumeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html#availability_zone EbsVolume#availability_zone}
    */
    readonly availabilityZone: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html#encrypted EbsVolume#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html#iops EbsVolume#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html#kms_key_id EbsVolume#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html#multi_attach_enabled EbsVolume#multi_attach_enabled}
    */
    readonly multiAttachEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html#outpost_arn EbsVolume#outpost_arn}
    */
    readonly outpostArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html#size EbsVolume#size}
    */
    readonly size?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html#snapshot_id EbsVolume#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html#tags EbsVolume#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html#tags_all EbsVolume#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html#throughput EbsVolume#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html#type EbsVolume#type}
    */
    readonly type?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html aws_ebs_volume}
  */
  export class EbsVolume extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ebs_volume";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ebs_volume.html aws_ebs_volume} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EbsVolumeConfig
    */
    public constructor(scope: Construct, id: string, config: EbsVolumeConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ebs_volume',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._availabilityZone = config.availabilityZone;
      this._encrypted = config.encrypted;
      this._iops = config.iops;
      this._kmsKeyId = config.kmsKeyId;
      this._multiAttachEnabled = config.multiAttachEnabled;
      this._outpostArn = config.outpostArn;
      this._size = config.size;
      this._snapshotId = config.snapshotId;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._throughput = config.throughput;
      this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // availability_zone - computed: false, optional: false, required: true
    private _availabilityZone?: string; 
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string) {
      this._availabilityZone = value;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
      return this._availabilityZone
    }

    // encrypted - computed: true, optional: true, required: false
    private _encrypted?: boolean | cdktf.IResolvable | undefined; 
    public get encrypted() {
      return this.getBooleanAttribute('encrypted') as any;
    }
    public set encrypted(value: boolean | cdktf.IResolvable | undefined) {
      this._encrypted = value;
    }
    public resetEncrypted() {
      this._encrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptedInput() {
      return this._encrypted
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // iops - computed: true, optional: true, required: false
    private _iops?: number | undefined; 
    public get iops() {
      return this.getNumberAttribute('iops');
    }
    public set iops(value: number | undefined) {
      this._iops = value;
    }
    public resetIops() {
      this._iops = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iopsInput() {
      return this._iops
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // multi_attach_enabled - computed: false, optional: true, required: false
    private _multiAttachEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get multiAttachEnabled() {
      return this.getBooleanAttribute('multi_attach_enabled') as any;
    }
    public set multiAttachEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._multiAttachEnabled = value;
    }
    public resetMultiAttachEnabled() {
      this._multiAttachEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiAttachEnabledInput() {
      return this._multiAttachEnabled
    }

    // outpost_arn - computed: false, optional: true, required: false
    private _outpostArn?: string | undefined; 
    public get outpostArn() {
      return this.getStringAttribute('outpost_arn');
    }
    public set outpostArn(value: string | undefined) {
      this._outpostArn = value;
    }
    public resetOutpostArn() {
      this._outpostArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outpostArnInput() {
      return this._outpostArn
    }

    // size - computed: true, optional: true, required: false
    private _size?: number | undefined; 
    public get size() {
      return this.getNumberAttribute('size');
    }
    public set size(value: number | undefined) {
      this._size = value;
    }
    public resetSize() {
      this._size = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sizeInput() {
      return this._size
    }

    // snapshot_id - computed: true, optional: true, required: false
    private _snapshotId?: string | undefined; 
    public get snapshotId() {
      return this.getStringAttribute('snapshot_id');
    }
    public set snapshotId(value: string | undefined) {
      this._snapshotId = value;
    }
    public resetSnapshotId() {
      this._snapshotId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotIdInput() {
      return this._snapshotId
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // throughput - computed: true, optional: true, required: false
    private _throughput?: number | undefined; 
    public get throughput() {
      return this.getNumberAttribute('throughput');
    }
    public set throughput(value: number | undefined) {
      this._throughput = value;
    }
    public resetThroughput() {
      this._throughput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throughputInput() {
      return this._throughput
    }

    // type - computed: true, optional: true, required: false
    private _type?: string | undefined; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string | undefined) {
      this._type = value;
    }
    public resetType() {
      this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        availability_zone: cdktf.stringToTerraform(this._availabilityZone),
        encrypted: cdktf.booleanToTerraform(this._encrypted),
        iops: cdktf.numberToTerraform(this._iops),
        kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
        multi_attach_enabled: cdktf.booleanToTerraform(this._multiAttachEnabled),
        outpost_arn: cdktf.stringToTerraform(this._outpostArn),
        size: cdktf.numberToTerraform(this._size),
        snapshot_id: cdktf.stringToTerraform(this._snapshotId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        throughput: cdktf.numberToTerraform(this._throughput),
        type: cdktf.stringToTerraform(this._type),
      };
    }
  }
  export interface Ec2AvailabilityZoneGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group.html#group_name Ec2AvailabilityZoneGroup#group_name}
    */
    readonly groupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group.html#opt_in_status Ec2AvailabilityZoneGroup#opt_in_status}
    */
    readonly optInStatus: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group.html aws_ec2_availability_zone_group}
  */
  export class Ec2AvailabilityZoneGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_availability_zone_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group.html aws_ec2_availability_zone_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2AvailabilityZoneGroupConfig
    */
    public constructor(scope: Construct, id: string, config: Ec2AvailabilityZoneGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_availability_zone_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._groupName = config.groupName;
      this._optInStatus = config.optInStatus;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // group_name - computed: false, optional: false, required: true
    private _groupName?: string; 
    public get groupName() {
      return this.getStringAttribute('group_name');
    }
    public set groupName(value: string) {
      this._groupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupNameInput() {
      return this._groupName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // opt_in_status - computed: false, optional: false, required: true
    private _optInStatus?: string; 
    public get optInStatus() {
      return this.getStringAttribute('opt_in_status');
    }
    public set optInStatus(value: string) {
      this._optInStatus = value;
    }
    // Temporarily expose input value. Use with caution.
    public get optInStatusInput() {
      return this._optInStatus
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        group_name: cdktf.stringToTerraform(this._groupName),
        opt_in_status: cdktf.stringToTerraform(this._optInStatus),
      };
    }
  }
  export interface Ec2CapacityReservationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#availability_zone Ec2CapacityReservation#availability_zone}
    */
    readonly availabilityZone: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#ebs_optimized Ec2CapacityReservation#ebs_optimized}
    */
    readonly ebsOptimized?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#end_date Ec2CapacityReservation#end_date}
    */
    readonly endDate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#end_date_type Ec2CapacityReservation#end_date_type}
    */
    readonly endDateType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#ephemeral_storage Ec2CapacityReservation#ephemeral_storage}
    */
    readonly ephemeralStorage?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#instance_count Ec2CapacityReservation#instance_count}
    */
    readonly instanceCount: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#instance_match_criteria Ec2CapacityReservation#instance_match_criteria}
    */
    readonly instanceMatchCriteria?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#instance_platform Ec2CapacityReservation#instance_platform}
    */
    readonly instancePlatform: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#instance_type Ec2CapacityReservation#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#outpost_arn Ec2CapacityReservation#outpost_arn}
    */
    readonly outpostArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#tags Ec2CapacityReservation#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#tags_all Ec2CapacityReservation#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#tenancy Ec2CapacityReservation#tenancy}
    */
    readonly tenancy?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html aws_ec2_capacity_reservation}
  */
  export class Ec2CapacityReservation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_capacity_reservation";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html aws_ec2_capacity_reservation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2CapacityReservationConfig
    */
    public constructor(scope: Construct, id: string, config: Ec2CapacityReservationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_capacity_reservation',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._availabilityZone = config.availabilityZone;
      this._ebsOptimized = config.ebsOptimized;
      this._endDate = config.endDate;
      this._endDateType = config.endDateType;
      this._ephemeralStorage = config.ephemeralStorage;
      this._instanceCount = config.instanceCount;
      this._instanceMatchCriteria = config.instanceMatchCriteria;
      this._instancePlatform = config.instancePlatform;
      this._instanceType = config.instanceType;
      this._outpostArn = config.outpostArn;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._tenancy = config.tenancy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // availability_zone - computed: false, optional: false, required: true
    private _availabilityZone?: string; 
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string) {
      this._availabilityZone = value;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
      return this._availabilityZone
    }

    // ebs_optimized - computed: false, optional: true, required: false
    private _ebsOptimized?: boolean | cdktf.IResolvable | undefined; 
    public get ebsOptimized() {
      return this.getBooleanAttribute('ebs_optimized') as any;
    }
    public set ebsOptimized(value: boolean | cdktf.IResolvable | undefined) {
      this._ebsOptimized = value;
    }
    public resetEbsOptimized() {
      this._ebsOptimized = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsOptimizedInput() {
      return this._ebsOptimized
    }

    // end_date - computed: false, optional: true, required: false
    private _endDate?: string | undefined; 
    public get endDate() {
      return this.getStringAttribute('end_date');
    }
    public set endDate(value: string | undefined) {
      this._endDate = value;
    }
    public resetEndDate() {
      this._endDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endDateInput() {
      return this._endDate
    }

    // end_date_type - computed: false, optional: true, required: false
    private _endDateType?: string | undefined; 
    public get endDateType() {
      return this.getStringAttribute('end_date_type');
    }
    public set endDateType(value: string | undefined) {
      this._endDateType = value;
    }
    public resetEndDateType() {
      this._endDateType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endDateTypeInput() {
      return this._endDateType
    }

    // ephemeral_storage - computed: false, optional: true, required: false
    private _ephemeralStorage?: boolean | cdktf.IResolvable | undefined; 
    public get ephemeralStorage() {
      return this.getBooleanAttribute('ephemeral_storage') as any;
    }
    public set ephemeralStorage(value: boolean | cdktf.IResolvable | undefined) {
      this._ephemeralStorage = value;
    }
    public resetEphemeralStorage() {
      this._ephemeralStorage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ephemeralStorageInput() {
      return this._ephemeralStorage
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_count - computed: false, optional: false, required: true
    private _instanceCount?: number; 
    public get instanceCount() {
      return this.getNumberAttribute('instance_count');
    }
    public set instanceCount(value: number) {
      this._instanceCount = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceCountInput() {
      return this._instanceCount
    }

    // instance_match_criteria - computed: false, optional: true, required: false
    private _instanceMatchCriteria?: string | undefined; 
    public get instanceMatchCriteria() {
      return this.getStringAttribute('instance_match_criteria');
    }
    public set instanceMatchCriteria(value: string | undefined) {
      this._instanceMatchCriteria = value;
    }
    public resetInstanceMatchCriteria() {
      this._instanceMatchCriteria = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceMatchCriteriaInput() {
      return this._instanceMatchCriteria
    }

    // instance_platform - computed: false, optional: false, required: true
    private _instancePlatform?: string; 
    public get instancePlatform() {
      return this.getStringAttribute('instance_platform');
    }
    public set instancePlatform(value: string) {
      this._instancePlatform = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instancePlatformInput() {
      return this._instancePlatform
    }

    // instance_type - computed: false, optional: false, required: true
    private _instanceType?: string; 
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
      this._instanceType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
      return this._instanceType
    }

    // outpost_arn - computed: false, optional: true, required: false
    private _outpostArn?: string | undefined; 
    public get outpostArn() {
      return this.getStringAttribute('outpost_arn');
    }
    public set outpostArn(value: string | undefined) {
      this._outpostArn = value;
    }
    public resetOutpostArn() {
      this._outpostArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outpostArnInput() {
      return this._outpostArn
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // tenancy - computed: false, optional: true, required: false
    private _tenancy?: string | undefined; 
    public get tenancy() {
      return this.getStringAttribute('tenancy');
    }
    public set tenancy(value: string | undefined) {
      this._tenancy = value;
    }
    public resetTenancy() {
      this._tenancy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tenancyInput() {
      return this._tenancy
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        availability_zone: cdktf.stringToTerraform(this._availabilityZone),
        ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
        end_date: cdktf.stringToTerraform(this._endDate),
        end_date_type: cdktf.stringToTerraform(this._endDateType),
        ephemeral_storage: cdktf.booleanToTerraform(this._ephemeralStorage),
        instance_count: cdktf.numberToTerraform(this._instanceCount),
        instance_match_criteria: cdktf.stringToTerraform(this._instanceMatchCriteria),
        instance_platform: cdktf.stringToTerraform(this._instancePlatform),
        instance_type: cdktf.stringToTerraform(this._instanceType),
        outpost_arn: cdktf.stringToTerraform(this._outpostArn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        tenancy: cdktf.stringToTerraform(this._tenancy),
      };
    }
  }
  export interface Ec2CarrierGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_carrier_gateway.html#tags Ec2CarrierGateway#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_carrier_gateway.html#tags_all Ec2CarrierGateway#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_carrier_gateway.html#vpc_id Ec2CarrierGateway#vpc_id}
    */
    readonly vpcId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_carrier_gateway.html aws_ec2_carrier_gateway}
  */
  export class Ec2CarrierGateway extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_carrier_gateway";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_carrier_gateway.html aws_ec2_carrier_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2CarrierGatewayConfig
    */
    public constructor(scope: Construct, id: string, config: Ec2CarrierGatewayConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_carrier_gateway',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vpcId = config.vpcId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
      this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
      return this._vpcId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
      };
    }
  }
  export interface Ec2ClientVpnAuthorizationRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule.html#access_group_id Ec2ClientVpnAuthorizationRule#access_group_id}
    */
    readonly accessGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule.html#authorize_all_groups Ec2ClientVpnAuthorizationRule#authorize_all_groups}
    */
    readonly authorizeAllGroups?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule.html#client_vpn_endpoint_id Ec2ClientVpnAuthorizationRule#client_vpn_endpoint_id}
    */
    readonly clientVpnEndpointId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule.html#description Ec2ClientVpnAuthorizationRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule.html#target_network_cidr Ec2ClientVpnAuthorizationRule#target_network_cidr}
    */
    readonly targetNetworkCidr: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule.html aws_ec2_client_vpn_authorization_rule}
  */
  export class Ec2ClientVpnAuthorizationRule extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_client_vpn_authorization_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule.html aws_ec2_client_vpn_authorization_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2ClientVpnAuthorizationRuleConfig
    */
    public constructor(scope: Construct, id: string, config: Ec2ClientVpnAuthorizationRuleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_client_vpn_authorization_rule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._accessGroupId = config.accessGroupId;
      this._authorizeAllGroups = config.authorizeAllGroups;
      this._clientVpnEndpointId = config.clientVpnEndpointId;
      this._description = config.description;
      this._targetNetworkCidr = config.targetNetworkCidr;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_group_id - computed: false, optional: true, required: false
    private _accessGroupId?: string | undefined; 
    public get accessGroupId() {
      return this.getStringAttribute('access_group_id');
    }
    public set accessGroupId(value: string | undefined) {
      this._accessGroupId = value;
    }
    public resetAccessGroupId() {
      this._accessGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessGroupIdInput() {
      return this._accessGroupId
    }

    // authorize_all_groups - computed: false, optional: true, required: false
    private _authorizeAllGroups?: boolean | cdktf.IResolvable | undefined; 
    public get authorizeAllGroups() {
      return this.getBooleanAttribute('authorize_all_groups') as any;
    }
    public set authorizeAllGroups(value: boolean | cdktf.IResolvable | undefined) {
      this._authorizeAllGroups = value;
    }
    public resetAuthorizeAllGroups() {
      this._authorizeAllGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizeAllGroupsInput() {
      return this._authorizeAllGroups
    }

    // client_vpn_endpoint_id - computed: false, optional: false, required: true
    private _clientVpnEndpointId?: string; 
    public get clientVpnEndpointId() {
      return this.getStringAttribute('client_vpn_endpoint_id');
    }
    public set clientVpnEndpointId(value: string) {
      this._clientVpnEndpointId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clientVpnEndpointIdInput() {
      return this._clientVpnEndpointId
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // target_network_cidr - computed: false, optional: false, required: true
    private _targetNetworkCidr?: string; 
    public get targetNetworkCidr() {
      return this.getStringAttribute('target_network_cidr');
    }
    public set targetNetworkCidr(value: string) {
      this._targetNetworkCidr = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetNetworkCidrInput() {
      return this._targetNetworkCidr
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        access_group_id: cdktf.stringToTerraform(this._accessGroupId),
        authorize_all_groups: cdktf.booleanToTerraform(this._authorizeAllGroups),
        client_vpn_endpoint_id: cdktf.stringToTerraform(this._clientVpnEndpointId),
        description: cdktf.stringToTerraform(this._description),
        target_network_cidr: cdktf.stringToTerraform(this._targetNetworkCidr),
      };
    }
  }
  export interface Ec2ClientVpnEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#client_cidr_block Ec2ClientVpnEndpoint#client_cidr_block}
    */
    readonly clientCidrBlock: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#description Ec2ClientVpnEndpoint#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#dns_servers Ec2ClientVpnEndpoint#dns_servers}
    */
    readonly dnsServers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#self_service_portal Ec2ClientVpnEndpoint#self_service_portal}
    */
    readonly selfServicePortal?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#server_certificate_arn Ec2ClientVpnEndpoint#server_certificate_arn}
    */
    readonly serverCertificateArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#split_tunnel Ec2ClientVpnEndpoint#split_tunnel}
    */
    readonly splitTunnel?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#tags Ec2ClientVpnEndpoint#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#tags_all Ec2ClientVpnEndpoint#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#transport_protocol Ec2ClientVpnEndpoint#transport_protocol}
    */
    readonly transportProtocol?: string;
    /**
    * authentication_options block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#authentication_options Ec2ClientVpnEndpoint#authentication_options}
    */
    readonly authenticationOptions: Ec2ClientVpnEndpointAuthenticationOptions[];
    /**
    * connection_log_options block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#connection_log_options Ec2ClientVpnEndpoint#connection_log_options}
    */
    readonly connectionLogOptions: Ec2ClientVpnEndpointConnectionLogOptions;
  }
  export interface Ec2ClientVpnEndpointAuthenticationOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#active_directory_id Ec2ClientVpnEndpoint#active_directory_id}
    */
    readonly activeDirectoryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#root_certificate_chain_arn Ec2ClientVpnEndpoint#root_certificate_chain_arn}
    */
    readonly rootCertificateChainArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#saml_provider_arn Ec2ClientVpnEndpoint#saml_provider_arn}
    */
    readonly samlProviderArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#self_service_saml_provider_arn Ec2ClientVpnEndpoint#self_service_saml_provider_arn}
    */
    readonly selfServiceSamlProviderArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#type Ec2ClientVpnEndpoint#type}
    */
    readonly type: string;
  }

  function ec2ClientVpnEndpointAuthenticationOptionsToTerraform(struct?: Ec2ClientVpnEndpointAuthenticationOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      active_directory_id: cdktf.stringToTerraform(struct!.activeDirectoryId),
      root_certificate_chain_arn: cdktf.stringToTerraform(struct!.rootCertificateChainArn),
      saml_provider_arn: cdktf.stringToTerraform(struct!.samlProviderArn),
      self_service_saml_provider_arn: cdktf.stringToTerraform(struct!.selfServiceSamlProviderArn),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface Ec2ClientVpnEndpointConnectionLogOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#cloudwatch_log_group Ec2ClientVpnEndpoint#cloudwatch_log_group}
    */
    readonly cloudwatchLogGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#cloudwatch_log_stream Ec2ClientVpnEndpoint#cloudwatch_log_stream}
    */
    readonly cloudwatchLogStream?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#enabled Ec2ClientVpnEndpoint#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
  }

  function ec2ClientVpnEndpointConnectionLogOptionsToTerraform(struct?: Ec2ClientVpnEndpointConnectionLogOptionsOutputReference | Ec2ClientVpnEndpointConnectionLogOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cloudwatch_log_group: cdktf.stringToTerraform(struct!.cloudwatchLogGroup),
      cloudwatch_log_stream: cdktf.stringToTerraform(struct!.cloudwatchLogStream),
      enabled: cdktf.booleanToTerraform(struct!.enabled),
    }
  }

  export class Ec2ClientVpnEndpointConnectionLogOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // cloudwatch_log_group - computed: false, optional: true, required: false
    private _cloudwatchLogGroup?: string | undefined; 
    public get cloudwatchLogGroup() {
      return this.getStringAttribute('cloudwatch_log_group');
    }
    public set cloudwatchLogGroup(value: string | undefined) {
      this._cloudwatchLogGroup = value;
    }
    public resetCloudwatchLogGroup() {
      this._cloudwatchLogGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogGroupInput() {
      return this._cloudwatchLogGroup
    }

    // cloudwatch_log_stream - computed: false, optional: true, required: false
    private _cloudwatchLogStream?: string | undefined; 
    public get cloudwatchLogStream() {
      return this.getStringAttribute('cloudwatch_log_stream');
    }
    public set cloudwatchLogStream(value: string | undefined) {
      this._cloudwatchLogStream = value;
    }
    public resetCloudwatchLogStream() {
      this._cloudwatchLogStream = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogStreamInput() {
      return this._cloudwatchLogStream
    }

    // enabled - computed: false, optional: false, required: true
    private _enabled?: boolean | cdktf.IResolvable; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable) {
      this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html aws_ec2_client_vpn_endpoint}
  */
  export class Ec2ClientVpnEndpoint extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_client_vpn_endpoint";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html aws_ec2_client_vpn_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2ClientVpnEndpointConfig
    */
    public constructor(scope: Construct, id: string, config: Ec2ClientVpnEndpointConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_client_vpn_endpoint',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clientCidrBlock = config.clientCidrBlock;
      this._description = config.description;
      this._dnsServers = config.dnsServers;
      this._selfServicePortal = config.selfServicePortal;
      this._serverCertificateArn = config.serverCertificateArn;
      this._splitTunnel = config.splitTunnel;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._transportProtocol = config.transportProtocol;
      this._authenticationOptions = config.authenticationOptions;
      this._connectionLogOptions = config.connectionLogOptions;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // client_cidr_block - computed: false, optional: false, required: true
    private _clientCidrBlock?: string; 
    public get clientCidrBlock() {
      return this.getStringAttribute('client_cidr_block');
    }
    public set clientCidrBlock(value: string) {
      this._clientCidrBlock = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clientCidrBlockInput() {
      return this._clientCidrBlock
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // dns_name - computed: true, optional: false, required: false
    public get dnsName() {
      return this.getStringAttribute('dns_name');
    }

    // dns_servers - computed: false, optional: true, required: false
    private _dnsServers?: string[] | undefined; 
    public get dnsServers() {
      return this.getListAttribute('dns_servers');
    }
    public set dnsServers(value: string[] | undefined) {
      this._dnsServers = value;
    }
    public resetDnsServers() {
      this._dnsServers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsServersInput() {
      return this._dnsServers
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // self_service_portal - computed: false, optional: true, required: false
    private _selfServicePortal?: string | undefined; 
    public get selfServicePortal() {
      return this.getStringAttribute('self_service_portal');
    }
    public set selfServicePortal(value: string | undefined) {
      this._selfServicePortal = value;
    }
    public resetSelfServicePortal() {
      this._selfServicePortal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selfServicePortalInput() {
      return this._selfServicePortal
    }

    // server_certificate_arn - computed: false, optional: false, required: true
    private _serverCertificateArn?: string; 
    public get serverCertificateArn() {
      return this.getStringAttribute('server_certificate_arn');
    }
    public set serverCertificateArn(value: string) {
      this._serverCertificateArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serverCertificateArnInput() {
      return this._serverCertificateArn
    }

    // split_tunnel - computed: false, optional: true, required: false
    private _splitTunnel?: boolean | cdktf.IResolvable | undefined; 
    public get splitTunnel() {
      return this.getBooleanAttribute('split_tunnel') as any;
    }
    public set splitTunnel(value: boolean | cdktf.IResolvable | undefined) {
      this._splitTunnel = value;
    }
    public resetSplitTunnel() {
      this._splitTunnel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get splitTunnelInput() {
      return this._splitTunnel
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // transport_protocol - computed: false, optional: true, required: false
    private _transportProtocol?: string | undefined; 
    public get transportProtocol() {
      return this.getStringAttribute('transport_protocol');
    }
    public set transportProtocol(value: string | undefined) {
      this._transportProtocol = value;
    }
    public resetTransportProtocol() {
      this._transportProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transportProtocolInput() {
      return this._transportProtocol
    }

    // authentication_options - computed: false, optional: false, required: true
    private _authenticationOptions?: Ec2ClientVpnEndpointAuthenticationOptions[]; 
    public get authenticationOptions() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('authentication_options') as any;
    }
    public set authenticationOptions(value: Ec2ClientVpnEndpointAuthenticationOptions[]) {
      this._authenticationOptions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationOptionsInput() {
      return this._authenticationOptions
    }

    // connection_log_options - computed: false, optional: false, required: true
    private _connectionLogOptions?: Ec2ClientVpnEndpointConnectionLogOptions; 
    private __connectionLogOptionsOutput = new Ec2ClientVpnEndpointConnectionLogOptionsOutputReference(this as any, "connection_log_options", true);
    public get connectionLogOptions() {
      return this.__connectionLogOptionsOutput;
    }
    public putConnectionLogOptions(value: Ec2ClientVpnEndpointConnectionLogOptions) {
      this._connectionLogOptions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionLogOptionsInput() {
      return this._connectionLogOptions
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        client_cidr_block: cdktf.stringToTerraform(this._clientCidrBlock),
        description: cdktf.stringToTerraform(this._description),
        dns_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._dnsServers),
        self_service_portal: cdktf.stringToTerraform(this._selfServicePortal),
        server_certificate_arn: cdktf.stringToTerraform(this._serverCertificateArn),
        split_tunnel: cdktf.booleanToTerraform(this._splitTunnel),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        transport_protocol: cdktf.stringToTerraform(this._transportProtocol),
        authentication_options: cdktf.listMapper(ec2ClientVpnEndpointAuthenticationOptionsToTerraform)(this._authenticationOptions),
        connection_log_options: ec2ClientVpnEndpointConnectionLogOptionsToTerraform(this._connectionLogOptions),
      };
    }
  }
  export interface Ec2ClientVpnNetworkAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_network_association.html#client_vpn_endpoint_id Ec2ClientVpnNetworkAssociation#client_vpn_endpoint_id}
    */
    readonly clientVpnEndpointId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_network_association.html#security_groups Ec2ClientVpnNetworkAssociation#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_network_association.html#subnet_id Ec2ClientVpnNetworkAssociation#subnet_id}
    */
    readonly subnetId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_network_association.html aws_ec2_client_vpn_network_association}
  */
  export class Ec2ClientVpnNetworkAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_client_vpn_network_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_network_association.html aws_ec2_client_vpn_network_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2ClientVpnNetworkAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: Ec2ClientVpnNetworkAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_client_vpn_network_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clientVpnEndpointId = config.clientVpnEndpointId;
      this._securityGroups = config.securityGroups;
      this._subnetId = config.subnetId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // association_id - computed: true, optional: false, required: false
    public get associationId() {
      return this.getStringAttribute('association_id');
    }

    // client_vpn_endpoint_id - computed: false, optional: false, required: true
    private _clientVpnEndpointId?: string; 
    public get clientVpnEndpointId() {
      return this.getStringAttribute('client_vpn_endpoint_id');
    }
    public set clientVpnEndpointId(value: string) {
      this._clientVpnEndpointId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clientVpnEndpointIdInput() {
      return this._clientVpnEndpointId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // security_groups - computed: true, optional: true, required: false
    private _securityGroups?: string[] | undefined; 
    public get securityGroups() {
      return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[] | undefined) {
      this._securityGroups = value;
    }
    public resetSecurityGroups() {
      this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
      return this._securityGroups
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // subnet_id - computed: false, optional: false, required: true
    private _subnetId?: string; 
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string) {
      this._subnetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
      return this._subnetId
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        client_vpn_endpoint_id: cdktf.stringToTerraform(this._clientVpnEndpointId),
        security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
        subnet_id: cdktf.stringToTerraform(this._subnetId),
      };
    }
  }
  export interface Ec2ClientVpnRouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route.html#client_vpn_endpoint_id Ec2ClientVpnRoute#client_vpn_endpoint_id}
    */
    readonly clientVpnEndpointId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route.html#description Ec2ClientVpnRoute#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route.html#destination_cidr_block Ec2ClientVpnRoute#destination_cidr_block}
    */
    readonly destinationCidrBlock: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route.html#target_vpc_subnet_id Ec2ClientVpnRoute#target_vpc_subnet_id}
    */
    readonly targetVpcSubnetId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route.html aws_ec2_client_vpn_route}
  */
  export class Ec2ClientVpnRoute extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_client_vpn_route";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route.html aws_ec2_client_vpn_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2ClientVpnRouteConfig
    */
    public constructor(scope: Construct, id: string, config: Ec2ClientVpnRouteConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_client_vpn_route',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clientVpnEndpointId = config.clientVpnEndpointId;
      this._description = config.description;
      this._destinationCidrBlock = config.destinationCidrBlock;
      this._targetVpcSubnetId = config.targetVpcSubnetId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // client_vpn_endpoint_id - computed: false, optional: false, required: true
    private _clientVpnEndpointId?: string; 
    public get clientVpnEndpointId() {
      return this.getStringAttribute('client_vpn_endpoint_id');
    }
    public set clientVpnEndpointId(value: string) {
      this._clientVpnEndpointId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clientVpnEndpointIdInput() {
      return this._clientVpnEndpointId
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // destination_cidr_block - computed: false, optional: false, required: true
    private _destinationCidrBlock?: string; 
    public get destinationCidrBlock() {
      return this.getStringAttribute('destination_cidr_block');
    }
    public set destinationCidrBlock(value: string) {
      this._destinationCidrBlock = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationCidrBlockInput() {
      return this._destinationCidrBlock
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // origin - computed: true, optional: false, required: false
    public get origin() {
      return this.getStringAttribute('origin');
    }

    // target_vpc_subnet_id - computed: false, optional: false, required: true
    private _targetVpcSubnetId?: string; 
    public get targetVpcSubnetId() {
      return this.getStringAttribute('target_vpc_subnet_id');
    }
    public set targetVpcSubnetId(value: string) {
      this._targetVpcSubnetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetVpcSubnetIdInput() {
      return this._targetVpcSubnetId
    }

    // type - computed: true, optional: false, required: false
    public get type() {
      return this.getStringAttribute('type');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        client_vpn_endpoint_id: cdktf.stringToTerraform(this._clientVpnEndpointId),
        description: cdktf.stringToTerraform(this._description),
        destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
        target_vpc_subnet_id: cdktf.stringToTerraform(this._targetVpcSubnetId),
      };
    }
  }
  export interface Ec2FleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#excess_capacity_termination_policy Ec2Fleet#excess_capacity_termination_policy}
    */
    readonly excessCapacityTerminationPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#replace_unhealthy_instances Ec2Fleet#replace_unhealthy_instances}
    */
    readonly replaceUnhealthyInstances?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#tags Ec2Fleet#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#tags_all Ec2Fleet#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#terminate_instances Ec2Fleet#terminate_instances}
    */
    readonly terminateInstances?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#terminate_instances_with_expiration Ec2Fleet#terminate_instances_with_expiration}
    */
    readonly terminateInstancesWithExpiration?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#type Ec2Fleet#type}
    */
    readonly type?: string;
    /**
    * launch_template_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#launch_template_config Ec2Fleet#launch_template_config}
    */
    readonly launchTemplateConfig: Ec2FleetLaunchTemplateConfig;
    /**
    * on_demand_options block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#on_demand_options Ec2Fleet#on_demand_options}
    */
    readonly onDemandOptions?: Ec2FleetOnDemandOptions;
    /**
    * spot_options block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#spot_options Ec2Fleet#spot_options}
    */
    readonly spotOptions?: Ec2FleetSpotOptions;
    /**
    * target_capacity_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#target_capacity_specification Ec2Fleet#target_capacity_specification}
    */
    readonly targetCapacitySpecification: Ec2FleetTargetCapacitySpecification;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#timeouts Ec2Fleet#timeouts}
    */
    readonly timeouts?: Ec2FleetTimeouts;
  }
  export interface Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#launch_template_id Ec2Fleet#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#launch_template_name Ec2Fleet#launch_template_name}
    */
    readonly launchTemplateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#version Ec2Fleet#version}
    */
    readonly version: string;
  }

  function ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationToTerraform(struct?: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference | Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      launch_template_id: cdktf.stringToTerraform(struct!.launchTemplateId),
      launch_template_name: cdktf.stringToTerraform(struct!.launchTemplateName),
      version: cdktf.stringToTerraform(struct!.version),
    }
  }

  export class Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // launch_template_id - computed: false, optional: true, required: false
    private _launchTemplateId?: string | undefined; 
    public get launchTemplateId() {
      return this.getStringAttribute('launch_template_id');
    }
    public set launchTemplateId(value: string | undefined) {
      this._launchTemplateId = value;
    }
    public resetLaunchTemplateId() {
      this._launchTemplateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateIdInput() {
      return this._launchTemplateId
    }

    // launch_template_name - computed: false, optional: true, required: false
    private _launchTemplateName?: string | undefined; 
    public get launchTemplateName() {
      return this.getStringAttribute('launch_template_name');
    }
    public set launchTemplateName(value: string | undefined) {
      this._launchTemplateName = value;
    }
    public resetLaunchTemplateName() {
      this._launchTemplateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateNameInput() {
      return this._launchTemplateName
    }

    // version - computed: false, optional: false, required: true
    private _version?: string; 
    public get version() {
      return this.getStringAttribute('version');
    }
    public set version(value: string) {
      this._version = value;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
      return this._version
    }
  }
  export interface Ec2FleetLaunchTemplateConfigOverride {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#availability_zone Ec2Fleet#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#instance_type Ec2Fleet#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#max_price Ec2Fleet#max_price}
    */
    readonly maxPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#priority Ec2Fleet#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#subnet_id Ec2Fleet#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#weighted_capacity Ec2Fleet#weighted_capacity}
    */
    readonly weightedCapacity?: number;
  }

  function ec2FleetLaunchTemplateConfigOverrideToTerraform(struct?: Ec2FleetLaunchTemplateConfigOverride): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
      instance_type: cdktf.stringToTerraform(struct!.instanceType),
      max_price: cdktf.stringToTerraform(struct!.maxPrice),
      priority: cdktf.numberToTerraform(struct!.priority),
      subnet_id: cdktf.stringToTerraform(struct!.subnetId),
      weighted_capacity: cdktf.numberToTerraform(struct!.weightedCapacity),
    }
  }

  export interface Ec2FleetLaunchTemplateConfig {
    /**
    * launch_template_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#launch_template_specification Ec2Fleet#launch_template_specification}
    */
    readonly launchTemplateSpecification: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification;
    /**
    * override block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#override Ec2Fleet#override}
    */
    readonly override?: Ec2FleetLaunchTemplateConfigOverride[];
  }

  function ec2FleetLaunchTemplateConfigToTerraform(struct?: Ec2FleetLaunchTemplateConfigOutputReference | Ec2FleetLaunchTemplateConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      launch_template_specification: ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationToTerraform(struct!.launchTemplateSpecification),
      override: cdktf.listMapper(ec2FleetLaunchTemplateConfigOverrideToTerraform)(struct!.override),
    }
  }

  export class Ec2FleetLaunchTemplateConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // launch_template_specification - computed: false, optional: false, required: true
    private _launchTemplateSpecification?: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification; 
    private __launchTemplateSpecificationOutput = new Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference(this as any, "launch_template_specification", true);
    public get launchTemplateSpecification() {
      return this.__launchTemplateSpecificationOutput;
    }
    public putLaunchTemplateSpecification(value: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification) {
      this._launchTemplateSpecification = value;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateSpecificationInput() {
      return this._launchTemplateSpecification
    }

    // override - computed: false, optional: true, required: false
    private _override?: Ec2FleetLaunchTemplateConfigOverride[] | undefined; 
    public get override() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('override') as any;
    }
    public set override(value: Ec2FleetLaunchTemplateConfigOverride[] | undefined) {
      this._override = value;
    }
    public resetOverride() {
      this._override = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideInput() {
      return this._override
    }
  }
  export interface Ec2FleetOnDemandOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#allocation_strategy Ec2Fleet#allocation_strategy}
    */
    readonly allocationStrategy?: string;
  }

  function ec2FleetOnDemandOptionsToTerraform(struct?: Ec2FleetOnDemandOptionsOutputReference | Ec2FleetOnDemandOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
    }
  }

  export class Ec2FleetOnDemandOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // allocation_strategy - computed: false, optional: true, required: false
    private _allocationStrategy?: string | undefined; 
    public get allocationStrategy() {
      return this.getStringAttribute('allocation_strategy');
    }
    public set allocationStrategy(value: string | undefined) {
      this._allocationStrategy = value;
    }
    public resetAllocationStrategy() {
      this._allocationStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allocationStrategyInput() {
      return this._allocationStrategy
    }
  }
  export interface Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#replacement_strategy Ec2Fleet#replacement_strategy}
    */
    readonly replacementStrategy?: string;
  }

  function ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToTerraform(struct?: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference | Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      replacement_strategy: cdktf.stringToTerraform(struct!.replacementStrategy),
    }
  }

  export class Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // replacement_strategy - computed: false, optional: true, required: false
    private _replacementStrategy?: string | undefined; 
    public get replacementStrategy() {
      return this.getStringAttribute('replacement_strategy');
    }
    public set replacementStrategy(value: string | undefined) {
      this._replacementStrategy = value;
    }
    public resetReplacementStrategy() {
      this._replacementStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replacementStrategyInput() {
      return this._replacementStrategy
    }
  }
  export interface Ec2FleetSpotOptionsMaintenanceStrategies {
    /**
    * capacity_rebalance block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#capacity_rebalance Ec2Fleet#capacity_rebalance}
    */
    readonly capacityRebalance?: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance;
  }

  function ec2FleetSpotOptionsMaintenanceStrategiesToTerraform(struct?: Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference | Ec2FleetSpotOptionsMaintenanceStrategies): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      capacity_rebalance: ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToTerraform(struct!.capacityRebalance),
    }
  }

  export class Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // capacity_rebalance - computed: false, optional: true, required: false
    private _capacityRebalance?: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance | undefined; 
    private __capacityRebalanceOutput = new Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference(this as any, "capacity_rebalance", true);
    public get capacityRebalance() {
      return this.__capacityRebalanceOutput;
    }
    public putCapacityRebalance(value: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance | undefined) {
      this._capacityRebalance = value;
    }
    public resetCapacityRebalance() {
      this._capacityRebalance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityRebalanceInput() {
      return this._capacityRebalance
    }
  }
  export interface Ec2FleetSpotOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#allocation_strategy Ec2Fleet#allocation_strategy}
    */
    readonly allocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#instance_interruption_behavior Ec2Fleet#instance_interruption_behavior}
    */
    readonly instanceInterruptionBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#instance_pools_to_use_count Ec2Fleet#instance_pools_to_use_count}
    */
    readonly instancePoolsToUseCount?: number;
    /**
    * maintenance_strategies block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#maintenance_strategies Ec2Fleet#maintenance_strategies}
    */
    readonly maintenanceStrategies?: Ec2FleetSpotOptionsMaintenanceStrategies;
  }

  function ec2FleetSpotOptionsToTerraform(struct?: Ec2FleetSpotOptionsOutputReference | Ec2FleetSpotOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
      instance_interruption_behavior: cdktf.stringToTerraform(struct!.instanceInterruptionBehavior),
      instance_pools_to_use_count: cdktf.numberToTerraform(struct!.instancePoolsToUseCount),
      maintenance_strategies: ec2FleetSpotOptionsMaintenanceStrategiesToTerraform(struct!.maintenanceStrategies),
    }
  }

  export class Ec2FleetSpotOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // allocation_strategy - computed: false, optional: true, required: false
    private _allocationStrategy?: string | undefined; 
    public get allocationStrategy() {
      return this.getStringAttribute('allocation_strategy');
    }
    public set allocationStrategy(value: string | undefined) {
      this._allocationStrategy = value;
    }
    public resetAllocationStrategy() {
      this._allocationStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allocationStrategyInput() {
      return this._allocationStrategy
    }

    // instance_interruption_behavior - computed: false, optional: true, required: false
    private _instanceInterruptionBehavior?: string | undefined; 
    public get instanceInterruptionBehavior() {
      return this.getStringAttribute('instance_interruption_behavior');
    }
    public set instanceInterruptionBehavior(value: string | undefined) {
      this._instanceInterruptionBehavior = value;
    }
    public resetInstanceInterruptionBehavior() {
      this._instanceInterruptionBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceInterruptionBehaviorInput() {
      return this._instanceInterruptionBehavior
    }

    // instance_pools_to_use_count - computed: false, optional: true, required: false
    private _instancePoolsToUseCount?: number | undefined; 
    public get instancePoolsToUseCount() {
      return this.getNumberAttribute('instance_pools_to_use_count');
    }
    public set instancePoolsToUseCount(value: number | undefined) {
      this._instancePoolsToUseCount = value;
    }
    public resetInstancePoolsToUseCount() {
      this._instancePoolsToUseCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instancePoolsToUseCountInput() {
      return this._instancePoolsToUseCount
    }

    // maintenance_strategies - computed: false, optional: true, required: false
    private _maintenanceStrategies?: Ec2FleetSpotOptionsMaintenanceStrategies | undefined; 
    private __maintenanceStrategiesOutput = new Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference(this as any, "maintenance_strategies", true);
    public get maintenanceStrategies() {
      return this.__maintenanceStrategiesOutput;
    }
    public putMaintenanceStrategies(value: Ec2FleetSpotOptionsMaintenanceStrategies | undefined) {
      this._maintenanceStrategies = value;
    }
    public resetMaintenanceStrategies() {
      this._maintenanceStrategies = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maintenanceStrategiesInput() {
      return this._maintenanceStrategies
    }
  }
  export interface Ec2FleetTargetCapacitySpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#default_target_capacity_type Ec2Fleet#default_target_capacity_type}
    */
    readonly defaultTargetCapacityType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#on_demand_target_capacity Ec2Fleet#on_demand_target_capacity}
    */
    readonly onDemandTargetCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#spot_target_capacity Ec2Fleet#spot_target_capacity}
    */
    readonly spotTargetCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#total_target_capacity Ec2Fleet#total_target_capacity}
    */
    readonly totalTargetCapacity: number;
  }

  function ec2FleetTargetCapacitySpecificationToTerraform(struct?: Ec2FleetTargetCapacitySpecificationOutputReference | Ec2FleetTargetCapacitySpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      default_target_capacity_type: cdktf.stringToTerraform(struct!.defaultTargetCapacityType),
      on_demand_target_capacity: cdktf.numberToTerraform(struct!.onDemandTargetCapacity),
      spot_target_capacity: cdktf.numberToTerraform(struct!.spotTargetCapacity),
      total_target_capacity: cdktf.numberToTerraform(struct!.totalTargetCapacity),
    }
  }

  export class Ec2FleetTargetCapacitySpecificationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // default_target_capacity_type - computed: false, optional: false, required: true
    private _defaultTargetCapacityType?: string; 
    public get defaultTargetCapacityType() {
      return this.getStringAttribute('default_target_capacity_type');
    }
    public set defaultTargetCapacityType(value: string) {
      this._defaultTargetCapacityType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultTargetCapacityTypeInput() {
      return this._defaultTargetCapacityType
    }

    // on_demand_target_capacity - computed: false, optional: true, required: false
    private _onDemandTargetCapacity?: number | undefined; 
    public get onDemandTargetCapacity() {
      return this.getNumberAttribute('on_demand_target_capacity');
    }
    public set onDemandTargetCapacity(value: number | undefined) {
      this._onDemandTargetCapacity = value;
    }
    public resetOnDemandTargetCapacity() {
      this._onDemandTargetCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onDemandTargetCapacityInput() {
      return this._onDemandTargetCapacity
    }

    // spot_target_capacity - computed: false, optional: true, required: false
    private _spotTargetCapacity?: number | undefined; 
    public get spotTargetCapacity() {
      return this.getNumberAttribute('spot_target_capacity');
    }
    public set spotTargetCapacity(value: number | undefined) {
      this._spotTargetCapacity = value;
    }
    public resetSpotTargetCapacity() {
      this._spotTargetCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotTargetCapacityInput() {
      return this._spotTargetCapacity
    }

    // total_target_capacity - computed: false, optional: false, required: true
    private _totalTargetCapacity?: number; 
    public get totalTargetCapacity() {
      return this.getNumberAttribute('total_target_capacity');
    }
    public set totalTargetCapacity(value: number) {
      this._totalTargetCapacity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get totalTargetCapacityInput() {
      return this._totalTargetCapacity
    }
  }
  export interface Ec2FleetTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#create Ec2Fleet#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#delete Ec2Fleet#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#update Ec2Fleet#update}
    */
    readonly update?: string;
  }

  function ec2FleetTimeoutsToTerraform(struct?: Ec2FleetTimeoutsOutputReference | Ec2FleetTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class Ec2FleetTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html aws_ec2_fleet}
  */
  export class Ec2Fleet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_fleet";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html aws_ec2_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2FleetConfig
    */
    public constructor(scope: Construct, id: string, config: Ec2FleetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_fleet',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._excessCapacityTerminationPolicy = config.excessCapacityTerminationPolicy;
      this._replaceUnhealthyInstances = config.replaceUnhealthyInstances;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._terminateInstances = config.terminateInstances;
      this._terminateInstancesWithExpiration = config.terminateInstancesWithExpiration;
      this._type = config.type;
      this._launchTemplateConfig = config.launchTemplateConfig;
      this._onDemandOptions = config.onDemandOptions;
      this._spotOptions = config.spotOptions;
      this._targetCapacitySpecification = config.targetCapacitySpecification;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // excess_capacity_termination_policy - computed: false, optional: true, required: false
    private _excessCapacityTerminationPolicy?: string | undefined; 
    public get excessCapacityTerminationPolicy() {
      return this.getStringAttribute('excess_capacity_termination_policy');
    }
    public set excessCapacityTerminationPolicy(value: string | undefined) {
      this._excessCapacityTerminationPolicy = value;
    }
    public resetExcessCapacityTerminationPolicy() {
      this._excessCapacityTerminationPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excessCapacityTerminationPolicyInput() {
      return this._excessCapacityTerminationPolicy
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // replace_unhealthy_instances - computed: false, optional: true, required: false
    private _replaceUnhealthyInstances?: boolean | cdktf.IResolvable | undefined; 
    public get replaceUnhealthyInstances() {
      return this.getBooleanAttribute('replace_unhealthy_instances') as any;
    }
    public set replaceUnhealthyInstances(value: boolean | cdktf.IResolvable | undefined) {
      this._replaceUnhealthyInstances = value;
    }
    public resetReplaceUnhealthyInstances() {
      this._replaceUnhealthyInstances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replaceUnhealthyInstancesInput() {
      return this._replaceUnhealthyInstances
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // terminate_instances - computed: false, optional: true, required: false
    private _terminateInstances?: boolean | cdktf.IResolvable | undefined; 
    public get terminateInstances() {
      return this.getBooleanAttribute('terminate_instances') as any;
    }
    public set terminateInstances(value: boolean | cdktf.IResolvable | undefined) {
      this._terminateInstances = value;
    }
    public resetTerminateInstances() {
      this._terminateInstances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get terminateInstancesInput() {
      return this._terminateInstances
    }

    // terminate_instances_with_expiration - computed: false, optional: true, required: false
    private _terminateInstancesWithExpiration?: boolean | cdktf.IResolvable | undefined; 
    public get terminateInstancesWithExpiration() {
      return this.getBooleanAttribute('terminate_instances_with_expiration') as any;
    }
    public set terminateInstancesWithExpiration(value: boolean | cdktf.IResolvable | undefined) {
      this._terminateInstancesWithExpiration = value;
    }
    public resetTerminateInstancesWithExpiration() {
      this._terminateInstancesWithExpiration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get terminateInstancesWithExpirationInput() {
      return this._terminateInstancesWithExpiration
    }

    // type - computed: false, optional: true, required: false
    private _type?: string | undefined; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string | undefined) {
      this._type = value;
    }
    public resetType() {
      this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // launch_template_config - computed: false, optional: false, required: true
    private _launchTemplateConfig?: Ec2FleetLaunchTemplateConfig; 
    private __launchTemplateConfigOutput = new Ec2FleetLaunchTemplateConfigOutputReference(this as any, "launch_template_config", true);
    public get launchTemplateConfig() {
      return this.__launchTemplateConfigOutput;
    }
    public putLaunchTemplateConfig(value: Ec2FleetLaunchTemplateConfig) {
      this._launchTemplateConfig = value;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateConfigInput() {
      return this._launchTemplateConfig
    }

    // on_demand_options - computed: false, optional: true, required: false
    private _onDemandOptions?: Ec2FleetOnDemandOptions | undefined; 
    private __onDemandOptionsOutput = new Ec2FleetOnDemandOptionsOutputReference(this as any, "on_demand_options", true);
    public get onDemandOptions() {
      return this.__onDemandOptionsOutput;
    }
    public putOnDemandOptions(value: Ec2FleetOnDemandOptions | undefined) {
      this._onDemandOptions = value;
    }
    public resetOnDemandOptions() {
      this._onDemandOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onDemandOptionsInput() {
      return this._onDemandOptions
    }

    // spot_options - computed: false, optional: true, required: false
    private _spotOptions?: Ec2FleetSpotOptions | undefined; 
    private __spotOptionsOutput = new Ec2FleetSpotOptionsOutputReference(this as any, "spot_options", true);
    public get spotOptions() {
      return this.__spotOptionsOutput;
    }
    public putSpotOptions(value: Ec2FleetSpotOptions | undefined) {
      this._spotOptions = value;
    }
    public resetSpotOptions() {
      this._spotOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotOptionsInput() {
      return this._spotOptions
    }

    // target_capacity_specification - computed: false, optional: false, required: true
    private _targetCapacitySpecification?: Ec2FleetTargetCapacitySpecification; 
    private __targetCapacitySpecificationOutput = new Ec2FleetTargetCapacitySpecificationOutputReference(this as any, "target_capacity_specification", true);
    public get targetCapacitySpecification() {
      return this.__targetCapacitySpecificationOutput;
    }
    public putTargetCapacitySpecification(value: Ec2FleetTargetCapacitySpecification) {
      this._targetCapacitySpecification = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetCapacitySpecificationInput() {
      return this._targetCapacitySpecification
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: Ec2FleetTimeouts | undefined; 
    private __timeoutsOutput = new Ec2FleetTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: Ec2FleetTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        excess_capacity_termination_policy: cdktf.stringToTerraform(this._excessCapacityTerminationPolicy),
        replace_unhealthy_instances: cdktf.booleanToTerraform(this._replaceUnhealthyInstances),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        terminate_instances: cdktf.booleanToTerraform(this._terminateInstances),
        terminate_instances_with_expiration: cdktf.booleanToTerraform(this._terminateInstancesWithExpiration),
        type: cdktf.stringToTerraform(this._type),
        launch_template_config: ec2FleetLaunchTemplateConfigToTerraform(this._launchTemplateConfig),
        on_demand_options: ec2FleetOnDemandOptionsToTerraform(this._onDemandOptions),
        spot_options: ec2FleetSpotOptionsToTerraform(this._spotOptions),
        target_capacity_specification: ec2FleetTargetCapacitySpecificationToTerraform(this._targetCapacitySpecification),
        timeouts: ec2FleetTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface Ec2HostConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_host.html#auto_placement Ec2Host#auto_placement}
    */
    readonly autoPlacement?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_host.html#availability_zone Ec2Host#availability_zone}
    */
    readonly availabilityZone: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_host.html#host_recovery Ec2Host#host_recovery}
    */
    readonly hostRecovery?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_host.html#instance_family Ec2Host#instance_family}
    */
    readonly instanceFamily?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_host.html#instance_type Ec2Host#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_host.html#tags Ec2Host#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_host.html#tags_all Ec2Host#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_host.html aws_ec2_host}
  */
  export class Ec2Host extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_host";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_host.html aws_ec2_host} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2HostConfig
    */
    public constructor(scope: Construct, id: string, config: Ec2HostConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_host',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._autoPlacement = config.autoPlacement;
      this._availabilityZone = config.availabilityZone;
      this._hostRecovery = config.hostRecovery;
      this._instanceFamily = config.instanceFamily;
      this._instanceType = config.instanceType;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // auto_placement - computed: false, optional: true, required: false
    private _autoPlacement?: string | undefined; 
    public get autoPlacement() {
      return this.getStringAttribute('auto_placement');
    }
    public set autoPlacement(value: string | undefined) {
      this._autoPlacement = value;
    }
    public resetAutoPlacement() {
      this._autoPlacement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoPlacementInput() {
      return this._autoPlacement
    }

    // availability_zone - computed: false, optional: false, required: true
    private _availabilityZone?: string; 
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string) {
      this._availabilityZone = value;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
      return this._availabilityZone
    }

    // host_recovery - computed: false, optional: true, required: false
    private _hostRecovery?: string | undefined; 
    public get hostRecovery() {
      return this.getStringAttribute('host_recovery');
    }
    public set hostRecovery(value: string | undefined) {
      this._hostRecovery = value;
    }
    public resetHostRecovery() {
      this._hostRecovery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostRecoveryInput() {
      return this._hostRecovery
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_family - computed: false, optional: true, required: false
    private _instanceFamily?: string | undefined; 
    public get instanceFamily() {
      return this.getStringAttribute('instance_family');
    }
    public set instanceFamily(value: string | undefined) {
      this._instanceFamily = value;
    }
    public resetInstanceFamily() {
      this._instanceFamily = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceFamilyInput() {
      return this._instanceFamily
    }

    // instance_type - computed: false, optional: true, required: false
    private _instanceType?: string | undefined; 
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string | undefined) {
      this._instanceType = value;
    }
    public resetInstanceType() {
      this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
      return this._instanceType
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        auto_placement: cdktf.stringToTerraform(this._autoPlacement),
        availability_zone: cdktf.stringToTerraform(this._availabilityZone),
        host_recovery: cdktf.stringToTerraform(this._hostRecovery),
        instance_family: cdktf.stringToTerraform(this._instanceFamily),
        instance_type: cdktf.stringToTerraform(this._instanceType),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface Ec2LocalGatewayRouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route.html#destination_cidr_block Ec2LocalGatewayRoute#destination_cidr_block}
    */
    readonly destinationCidrBlock: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route.html#local_gateway_route_table_id Ec2LocalGatewayRoute#local_gateway_route_table_id}
    */
    readonly localGatewayRouteTableId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route.html#local_gateway_virtual_interface_group_id Ec2LocalGatewayRoute#local_gateway_virtual_interface_group_id}
    */
    readonly localGatewayVirtualInterfaceGroupId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route.html aws_ec2_local_gateway_route}
  */
  export class Ec2LocalGatewayRoute extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_local_gateway_route";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route.html aws_ec2_local_gateway_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2LocalGatewayRouteConfig
    */
    public constructor(scope: Construct, id: string, config: Ec2LocalGatewayRouteConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_local_gateway_route',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._destinationCidrBlock = config.destinationCidrBlock;
      this._localGatewayRouteTableId = config.localGatewayRouteTableId;
      this._localGatewayVirtualInterfaceGroupId = config.localGatewayVirtualInterfaceGroupId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // destination_cidr_block - computed: false, optional: false, required: true
    private _destinationCidrBlock?: string; 
    public get destinationCidrBlock() {
      return this.getStringAttribute('destination_cidr_block');
    }
    public set destinationCidrBlock(value: string) {
      this._destinationCidrBlock = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationCidrBlockInput() {
      return this._destinationCidrBlock
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // local_gateway_route_table_id - computed: false, optional: false, required: true
    private _localGatewayRouteTableId?: string; 
    public get localGatewayRouteTableId() {
      return this.getStringAttribute('local_gateway_route_table_id');
    }
    public set localGatewayRouteTableId(value: string) {
      this._localGatewayRouteTableId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get localGatewayRouteTableIdInput() {
      return this._localGatewayRouteTableId
    }

    // local_gateway_virtual_interface_group_id - computed: false, optional: false, required: true
    private _localGatewayVirtualInterfaceGroupId?: string; 
    public get localGatewayVirtualInterfaceGroupId() {
      return this.getStringAttribute('local_gateway_virtual_interface_group_id');
    }
    public set localGatewayVirtualInterfaceGroupId(value: string) {
      this._localGatewayVirtualInterfaceGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get localGatewayVirtualInterfaceGroupIdInput() {
      return this._localGatewayVirtualInterfaceGroupId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
        local_gateway_route_table_id: cdktf.stringToTerraform(this._localGatewayRouteTableId),
        local_gateway_virtual_interface_group_id: cdktf.stringToTerraform(this._localGatewayVirtualInterfaceGroupId),
      };
    }
  }
  export interface Ec2LocalGatewayRouteTableVpcAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association.html#local_gateway_route_table_id Ec2LocalGatewayRouteTableVpcAssociation#local_gateway_route_table_id}
    */
    readonly localGatewayRouteTableId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association.html#tags Ec2LocalGatewayRouteTableVpcAssociation#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association.html#tags_all Ec2LocalGatewayRouteTableVpcAssociation#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association.html#vpc_id Ec2LocalGatewayRouteTableVpcAssociation#vpc_id}
    */
    readonly vpcId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association.html aws_ec2_local_gateway_route_table_vpc_association}
  */
  export class Ec2LocalGatewayRouteTableVpcAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_local_gateway_route_table_vpc_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association.html aws_ec2_local_gateway_route_table_vpc_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2LocalGatewayRouteTableVpcAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: Ec2LocalGatewayRouteTableVpcAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_local_gateway_route_table_vpc_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._localGatewayRouteTableId = config.localGatewayRouteTableId;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vpcId = config.vpcId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // local_gateway_id - computed: true, optional: false, required: false
    public get localGatewayId() {
      return this.getStringAttribute('local_gateway_id');
    }

    // local_gateway_route_table_id - computed: false, optional: false, required: true
    private _localGatewayRouteTableId?: string; 
    public get localGatewayRouteTableId() {
      return this.getStringAttribute('local_gateway_route_table_id');
    }
    public set localGatewayRouteTableId(value: string) {
      this._localGatewayRouteTableId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get localGatewayRouteTableIdInput() {
      return this._localGatewayRouteTableId
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
      this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
      return this._vpcId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        local_gateway_route_table_id: cdktf.stringToTerraform(this._localGatewayRouteTableId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
      };
    }
  }
  export interface Ec2ManagedPrefixListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html#address_family Ec2ManagedPrefixList#address_family}
    */
    readonly addressFamily: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html#max_entries Ec2ManagedPrefixList#max_entries}
    */
    readonly maxEntries: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html#name Ec2ManagedPrefixList#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html#tags Ec2ManagedPrefixList#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html#tags_all Ec2ManagedPrefixList#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * entry block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html#entry Ec2ManagedPrefixList#entry}
    */
    readonly entry?: Ec2ManagedPrefixListEntry[];
  }
  export interface Ec2ManagedPrefixListEntry {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html#cidr Ec2ManagedPrefixList#cidr}
    */
    readonly cidr: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html#description Ec2ManagedPrefixList#description}
    */
    readonly description?: string;
  }

  function ec2ManagedPrefixListEntryToTerraform(struct?: Ec2ManagedPrefixListEntry): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cidr: cdktf.stringToTerraform(struct!.cidr),
      description: cdktf.stringToTerraform(struct!.description),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html aws_ec2_managed_prefix_list}
  */
  export class Ec2ManagedPrefixList extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_managed_prefix_list";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html aws_ec2_managed_prefix_list} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2ManagedPrefixListConfig
    */
    public constructor(scope: Construct, id: string, config: Ec2ManagedPrefixListConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_managed_prefix_list',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._addressFamily = config.addressFamily;
      this._maxEntries = config.maxEntries;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._entry = config.entry;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // address_family - computed: false, optional: false, required: true
    private _addressFamily?: string; 
    public get addressFamily() {
      return this.getStringAttribute('address_family');
    }
    public set addressFamily(value: string) {
      this._addressFamily = value;
    }
    // Temporarily expose input value. Use with caution.
    public get addressFamilyInput() {
      return this._addressFamily
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // max_entries - computed: false, optional: false, required: true
    private _maxEntries?: number; 
    public get maxEntries() {
      return this.getNumberAttribute('max_entries');
    }
    public set maxEntries(value: number) {
      this._maxEntries = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxEntriesInput() {
      return this._maxEntries
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
      return this._name
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // version - computed: true, optional: false, required: false
    public get version() {
      return this.getNumberAttribute('version');
    }

    // entry - computed: false, optional: true, required: false
    private _entry?: Ec2ManagedPrefixListEntry[] | undefined; 
    public get entry() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('entry') as any;
    }
    public set entry(value: Ec2ManagedPrefixListEntry[] | undefined) {
      this._entry = value;
    }
    public resetEntry() {
      this._entry = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entryInput() {
      return this._entry
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        address_family: cdktf.stringToTerraform(this._addressFamily),
        max_entries: cdktf.numberToTerraform(this._maxEntries),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        entry: cdktf.listMapper(ec2ManagedPrefixListEntryToTerraform)(this._entry),
      };
    }
  }
  export interface Ec2ManagedPrefixListEntryAConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry.html#cidr Ec2ManagedPrefixListEntryA#cidr}
    */
    readonly cidr: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry.html#description Ec2ManagedPrefixListEntryA#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry.html#prefix_list_id Ec2ManagedPrefixListEntryA#prefix_list_id}
    */
    readonly prefixListId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry.html aws_ec2_managed_prefix_list_entry}
  */
  export class Ec2ManagedPrefixListEntryA extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_managed_prefix_list_entry";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry.html aws_ec2_managed_prefix_list_entry} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2ManagedPrefixListEntryAConfig
    */
    public constructor(scope: Construct, id: string, config: Ec2ManagedPrefixListEntryAConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_managed_prefix_list_entry',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._cidr = config.cidr;
      this._description = config.description;
      this._prefixListId = config.prefixListId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cidr - computed: false, optional: false, required: true
    private _cidr?: string; 
    public get cidr() {
      return this.getStringAttribute('cidr');
    }
    public set cidr(value: string) {
      this._cidr = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrInput() {
      return this._cidr
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // prefix_list_id - computed: false, optional: false, required: true
    private _prefixListId?: string; 
    public get prefixListId() {
      return this.getStringAttribute('prefix_list_id');
    }
    public set prefixListId(value: string) {
      this._prefixListId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixListIdInput() {
      return this._prefixListId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cidr: cdktf.stringToTerraform(this._cidr),
        description: cdktf.stringToTerraform(this._description),
        prefix_list_id: cdktf.stringToTerraform(this._prefixListId),
      };
    }
  }
  export interface Ec2TagConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_tag.html#key Ec2Tag#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_tag.html#resource_id Ec2Tag#resource_id}
    */
    readonly resourceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_tag.html#value Ec2Tag#value}
    */
    readonly value: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_tag.html aws_ec2_tag}
  */
  export class Ec2Tag extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_tag";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_tag.html aws_ec2_tag} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TagConfig
    */
    public constructor(scope: Construct, id: string, config: Ec2TagConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_tag',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._key = config.key;
      this._resourceId = config.resourceId;
      this._value = config.value;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // key - computed: false, optional: false, required: true
    private _key?: string; 
    public get key() {
      return this.getStringAttribute('key');
    }
    public set key(value: string) {
      this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
      return this._key
    }

    // resource_id - computed: false, optional: false, required: true
    private _resourceId?: string; 
    public get resourceId() {
      return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
      this._resourceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
      return this._resourceId
    }

    // value - computed: false, optional: false, required: true
    private _value?: string; 
    public get value() {
      return this.getStringAttribute('value');
    }
    public set value(value: string) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        key: cdktf.stringToTerraform(this._key),
        resource_id: cdktf.stringToTerraform(this._resourceId),
        value: cdktf.stringToTerraform(this._value),
      };
    }
  }
  export interface Ec2TrafficMirrorFilterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter.html#description Ec2TrafficMirrorFilter#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter.html#network_services Ec2TrafficMirrorFilter#network_services}
    */
    readonly networkServices?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter.html#tags Ec2TrafficMirrorFilter#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter.html#tags_all Ec2TrafficMirrorFilter#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter.html aws_ec2_traffic_mirror_filter}
  */
  export class Ec2TrafficMirrorFilter extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_traffic_mirror_filter";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter.html aws_ec2_traffic_mirror_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TrafficMirrorFilterConfig = {}
    */
    public constructor(scope: Construct, id: string, config: Ec2TrafficMirrorFilterConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_traffic_mirror_filter',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._networkServices = config.networkServices;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // network_services - computed: false, optional: true, required: false
    private _networkServices?: string[] | undefined; 
    public get networkServices() {
      return this.getListAttribute('network_services');
    }
    public set networkServices(value: string[] | undefined) {
      this._networkServices = value;
    }
    public resetNetworkServices() {
      this._networkServices = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkServicesInput() {
      return this._networkServices
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        network_services: cdktf.listMapper(cdktf.stringToTerraform)(this._networkServices),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface Ec2TrafficMirrorFilterRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#description Ec2TrafficMirrorFilterRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#destination_cidr_block Ec2TrafficMirrorFilterRule#destination_cidr_block}
    */
    readonly destinationCidrBlock: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#protocol Ec2TrafficMirrorFilterRule#protocol}
    */
    readonly protocol?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#rule_action Ec2TrafficMirrorFilterRule#rule_action}
    */
    readonly ruleAction: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#rule_number Ec2TrafficMirrorFilterRule#rule_number}
    */
    readonly ruleNumber: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#source_cidr_block Ec2TrafficMirrorFilterRule#source_cidr_block}
    */
    readonly sourceCidrBlock: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#traffic_direction Ec2TrafficMirrorFilterRule#traffic_direction}
    */
    readonly trafficDirection: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#traffic_mirror_filter_id Ec2TrafficMirrorFilterRule#traffic_mirror_filter_id}
    */
    readonly trafficMirrorFilterId: string;
    /**
    * destination_port_range block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#destination_port_range Ec2TrafficMirrorFilterRule#destination_port_range}
    */
    readonly destinationPortRange?: Ec2TrafficMirrorFilterRuleDestinationPortRange;
    /**
    * source_port_range block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#source_port_range Ec2TrafficMirrorFilterRule#source_port_range}
    */
    readonly sourcePortRange?: Ec2TrafficMirrorFilterRuleSourcePortRange;
  }
  export interface Ec2TrafficMirrorFilterRuleDestinationPortRange {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#from_port Ec2TrafficMirrorFilterRule#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#to_port Ec2TrafficMirrorFilterRule#to_port}
    */
    readonly toPort?: number;
  }

  function ec2TrafficMirrorFilterRuleDestinationPortRangeToTerraform(struct?: Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference | Ec2TrafficMirrorFilterRuleDestinationPortRange): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      from_port: cdktf.numberToTerraform(struct!.fromPort),
      to_port: cdktf.numberToTerraform(struct!.toPort),
    }
  }

  export class Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // from_port - computed: false, optional: true, required: false
    private _fromPort?: number | undefined; 
    public get fromPort() {
      return this.getNumberAttribute('from_port');
    }
    public set fromPort(value: number | undefined) {
      this._fromPort = value;
    }
    public resetFromPort() {
      this._fromPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fromPortInput() {
      return this._fromPort
    }

    // to_port - computed: false, optional: true, required: false
    private _toPort?: number | undefined; 
    public get toPort() {
      return this.getNumberAttribute('to_port');
    }
    public set toPort(value: number | undefined) {
      this._toPort = value;
    }
    public resetToPort() {
      this._toPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toPortInput() {
      return this._toPort
    }
  }
  export interface Ec2TrafficMirrorFilterRuleSourcePortRange {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#from_port Ec2TrafficMirrorFilterRule#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#to_port Ec2TrafficMirrorFilterRule#to_port}
    */
    readonly toPort?: number;
  }

  function ec2TrafficMirrorFilterRuleSourcePortRangeToTerraform(struct?: Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference | Ec2TrafficMirrorFilterRuleSourcePortRange): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      from_port: cdktf.numberToTerraform(struct!.fromPort),
      to_port: cdktf.numberToTerraform(struct!.toPort),
    }
  }

  export class Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // from_port - computed: false, optional: true, required: false
    private _fromPort?: number | undefined; 
    public get fromPort() {
      return this.getNumberAttribute('from_port');
    }
    public set fromPort(value: number | undefined) {
      this._fromPort = value;
    }
    public resetFromPort() {
      this._fromPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fromPortInput() {
      return this._fromPort
    }

    // to_port - computed: false, optional: true, required: false
    private _toPort?: number | undefined; 
    public get toPort() {
      return this.getNumberAttribute('to_port');
    }
    public set toPort(value: number | undefined) {
      this._toPort = value;
    }
    public resetToPort() {
      this._toPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toPortInput() {
      return this._toPort
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html aws_ec2_traffic_mirror_filter_rule}
  */
  export class Ec2TrafficMirrorFilterRule extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_traffic_mirror_filter_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html aws_ec2_traffic_mirror_filter_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TrafficMirrorFilterRuleConfig
    */
    public constructor(scope: Construct, id: string, config: Ec2TrafficMirrorFilterRuleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_traffic_mirror_filter_rule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._destinationCidrBlock = config.destinationCidrBlock;
      this._protocol = config.protocol;
      this._ruleAction = config.ruleAction;
      this._ruleNumber = config.ruleNumber;
      this._sourceCidrBlock = config.sourceCidrBlock;
      this._trafficDirection = config.trafficDirection;
      this._trafficMirrorFilterId = config.trafficMirrorFilterId;
      this._destinationPortRange = config.destinationPortRange;
      this._sourcePortRange = config.sourcePortRange;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // destination_cidr_block - computed: false, optional: false, required: true
    private _destinationCidrBlock?: string; 
    public get destinationCidrBlock() {
      return this.getStringAttribute('destination_cidr_block');
    }
    public set destinationCidrBlock(value: string) {
      this._destinationCidrBlock = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationCidrBlockInput() {
      return this._destinationCidrBlock
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // protocol - computed: false, optional: true, required: false
    private _protocol?: number | undefined; 
    public get protocol() {
      return this.getNumberAttribute('protocol');
    }
    public set protocol(value: number | undefined) {
      this._protocol = value;
    }
    public resetProtocol() {
      this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
      return this._protocol
    }

    // rule_action - computed: false, optional: false, required: true
    private _ruleAction?: string; 
    public get ruleAction() {
      return this.getStringAttribute('rule_action');
    }
    public set ruleAction(value: string) {
      this._ruleAction = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleActionInput() {
      return this._ruleAction
    }

    // rule_number - computed: false, optional: false, required: true
    private _ruleNumber?: number; 
    public get ruleNumber() {
      return this.getNumberAttribute('rule_number');
    }
    public set ruleNumber(value: number) {
      this._ruleNumber = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleNumberInput() {
      return this._ruleNumber
    }

    // source_cidr_block - computed: false, optional: false, required: true
    private _sourceCidrBlock?: string; 
    public get sourceCidrBlock() {
      return this.getStringAttribute('source_cidr_block');
    }
    public set sourceCidrBlock(value: string) {
      this._sourceCidrBlock = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceCidrBlockInput() {
      return this._sourceCidrBlock
    }

    // traffic_direction - computed: false, optional: false, required: true
    private _trafficDirection?: string; 
    public get trafficDirection() {
      return this.getStringAttribute('traffic_direction');
    }
    public set trafficDirection(value: string) {
      this._trafficDirection = value;
    }
    // Temporarily expose input value. Use with caution.
    public get trafficDirectionInput() {
      return this._trafficDirection
    }

    // traffic_mirror_filter_id - computed: false, optional: false, required: true
    private _trafficMirrorFilterId?: string; 
    public get trafficMirrorFilterId() {
      return this.getStringAttribute('traffic_mirror_filter_id');
    }
    public set trafficMirrorFilterId(value: string) {
      this._trafficMirrorFilterId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get trafficMirrorFilterIdInput() {
      return this._trafficMirrorFilterId
    }

    // destination_port_range - computed: false, optional: true, required: false
    private _destinationPortRange?: Ec2TrafficMirrorFilterRuleDestinationPortRange | undefined; 
    private __destinationPortRangeOutput = new Ec2TrafficMirrorFilterRuleDestinationPortRangeOutputReference(this as any, "destination_port_range", true);
    public get destinationPortRange() {
      return this.__destinationPortRangeOutput;
    }
    public putDestinationPortRange(value: Ec2TrafficMirrorFilterRuleDestinationPortRange | undefined) {
      this._destinationPortRange = value;
    }
    public resetDestinationPortRange() {
      this._destinationPortRange = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPortRangeInput() {
      return this._destinationPortRange
    }

    // source_port_range - computed: false, optional: true, required: false
    private _sourcePortRange?: Ec2TrafficMirrorFilterRuleSourcePortRange | undefined; 
    private __sourcePortRangeOutput = new Ec2TrafficMirrorFilterRuleSourcePortRangeOutputReference(this as any, "source_port_range", true);
    public get sourcePortRange() {
      return this.__sourcePortRangeOutput;
    }
    public putSourcePortRange(value: Ec2TrafficMirrorFilterRuleSourcePortRange | undefined) {
      this._sourcePortRange = value;
    }
    public resetSourcePortRange() {
      this._sourcePortRange = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePortRangeInput() {
      return this._sourcePortRange
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
        protocol: cdktf.numberToTerraform(this._protocol),
        rule_action: cdktf.stringToTerraform(this._ruleAction),
        rule_number: cdktf.numberToTerraform(this._ruleNumber),
        source_cidr_block: cdktf.stringToTerraform(this._sourceCidrBlock),
        traffic_direction: cdktf.stringToTerraform(this._trafficDirection),
        traffic_mirror_filter_id: cdktf.stringToTerraform(this._trafficMirrorFilterId),
        destination_port_range: ec2TrafficMirrorFilterRuleDestinationPortRangeToTerraform(this._destinationPortRange),
        source_port_range: ec2TrafficMirrorFilterRuleSourcePortRangeToTerraform(this._sourcePortRange),
      };
    }
  }
  export interface Ec2TrafficMirrorSessionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html#description Ec2TrafficMirrorSession#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html#network_interface_id Ec2TrafficMirrorSession#network_interface_id}
    */
    readonly networkInterfaceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html#packet_length Ec2TrafficMirrorSession#packet_length}
    */
    readonly packetLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html#session_number Ec2TrafficMirrorSession#session_number}
    */
    readonly sessionNumber: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html#tags Ec2TrafficMirrorSession#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html#tags_all Ec2TrafficMirrorSession#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html#traffic_mirror_filter_id Ec2TrafficMirrorSession#traffic_mirror_filter_id}
    */
    readonly trafficMirrorFilterId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html#traffic_mirror_target_id Ec2TrafficMirrorSession#traffic_mirror_target_id}
    */
    readonly trafficMirrorTargetId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html#virtual_network_id Ec2TrafficMirrorSession#virtual_network_id}
    */
    readonly virtualNetworkId?: number;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html aws_ec2_traffic_mirror_session}
  */
  export class Ec2TrafficMirrorSession extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_traffic_mirror_session";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html aws_ec2_traffic_mirror_session} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TrafficMirrorSessionConfig
    */
    public constructor(scope: Construct, id: string, config: Ec2TrafficMirrorSessionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_traffic_mirror_session',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._networkInterfaceId = config.networkInterfaceId;
      this._packetLength = config.packetLength;
      this._sessionNumber = config.sessionNumber;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._trafficMirrorFilterId = config.trafficMirrorFilterId;
      this._trafficMirrorTargetId = config.trafficMirrorTargetId;
      this._virtualNetworkId = config.virtualNetworkId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // network_interface_id - computed: false, optional: false, required: true
    private _networkInterfaceId?: string; 
    public get networkInterfaceId() {
      return this.getStringAttribute('network_interface_id');
    }
    public set networkInterfaceId(value: string) {
      this._networkInterfaceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceIdInput() {
      return this._networkInterfaceId
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // packet_length - computed: false, optional: true, required: false
    private _packetLength?: number | undefined; 
    public get packetLength() {
      return this.getNumberAttribute('packet_length');
    }
    public set packetLength(value: number | undefined) {
      this._packetLength = value;
    }
    public resetPacketLength() {
      this._packetLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get packetLengthInput() {
      return this._packetLength
    }

    // session_number - computed: false, optional: false, required: true
    private _sessionNumber?: number; 
    public get sessionNumber() {
      return this.getNumberAttribute('session_number');
    }
    public set sessionNumber(value: number) {
      this._sessionNumber = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionNumberInput() {
      return this._sessionNumber
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // traffic_mirror_filter_id - computed: false, optional: false, required: true
    private _trafficMirrorFilterId?: string; 
    public get trafficMirrorFilterId() {
      return this.getStringAttribute('traffic_mirror_filter_id');
    }
    public set trafficMirrorFilterId(value: string) {
      this._trafficMirrorFilterId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get trafficMirrorFilterIdInput() {
      return this._trafficMirrorFilterId
    }

    // traffic_mirror_target_id - computed: false, optional: false, required: true
    private _trafficMirrorTargetId?: string; 
    public get trafficMirrorTargetId() {
      return this.getStringAttribute('traffic_mirror_target_id');
    }
    public set trafficMirrorTargetId(value: string) {
      this._trafficMirrorTargetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get trafficMirrorTargetIdInput() {
      return this._trafficMirrorTargetId
    }

    // virtual_network_id - computed: true, optional: true, required: false
    private _virtualNetworkId?: number | undefined; 
    public get virtualNetworkId() {
      return this.getNumberAttribute('virtual_network_id');
    }
    public set virtualNetworkId(value: number | undefined) {
      this._virtualNetworkId = value;
    }
    public resetVirtualNetworkId() {
      this._virtualNetworkId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualNetworkIdInput() {
      return this._virtualNetworkId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
        packet_length: cdktf.numberToTerraform(this._packetLength),
        session_number: cdktf.numberToTerraform(this._sessionNumber),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        traffic_mirror_filter_id: cdktf.stringToTerraform(this._trafficMirrorFilterId),
        traffic_mirror_target_id: cdktf.stringToTerraform(this._trafficMirrorTargetId),
        virtual_network_id: cdktf.numberToTerraform(this._virtualNetworkId),
      };
    }
  }
  export interface Ec2TrafficMirrorTargetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target.html#description Ec2TrafficMirrorTarget#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target.html#network_interface_id Ec2TrafficMirrorTarget#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target.html#network_load_balancer_arn Ec2TrafficMirrorTarget#network_load_balancer_arn}
    */
    readonly networkLoadBalancerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target.html#tags Ec2TrafficMirrorTarget#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target.html#tags_all Ec2TrafficMirrorTarget#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target.html aws_ec2_traffic_mirror_target}
  */
  export class Ec2TrafficMirrorTarget extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_traffic_mirror_target";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target.html aws_ec2_traffic_mirror_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TrafficMirrorTargetConfig = {}
    */
    public constructor(scope: Construct, id: string, config: Ec2TrafficMirrorTargetConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_traffic_mirror_target',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._networkInterfaceId = config.networkInterfaceId;
      this._networkLoadBalancerArn = config.networkLoadBalancerArn;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // network_interface_id - computed: false, optional: true, required: false
    private _networkInterfaceId?: string | undefined; 
    public get networkInterfaceId() {
      return this.getStringAttribute('network_interface_id');
    }
    public set networkInterfaceId(value: string | undefined) {
      this._networkInterfaceId = value;
    }
    public resetNetworkInterfaceId() {
      this._networkInterfaceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceIdInput() {
      return this._networkInterfaceId
    }

    // network_load_balancer_arn - computed: false, optional: true, required: false
    private _networkLoadBalancerArn?: string | undefined; 
    public get networkLoadBalancerArn() {
      return this.getStringAttribute('network_load_balancer_arn');
    }
    public set networkLoadBalancerArn(value: string | undefined) {
      this._networkLoadBalancerArn = value;
    }
    public resetNetworkLoadBalancerArn() {
      this._networkLoadBalancerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkLoadBalancerArnInput() {
      return this._networkLoadBalancerArn
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
        network_load_balancer_arn: cdktf.stringToTerraform(this._networkLoadBalancerArn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface Ec2TransitGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#amazon_side_asn Ec2TransitGateway#amazon_side_asn}
    */
    readonly amazonSideAsn?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#auto_accept_shared_attachments Ec2TransitGateway#auto_accept_shared_attachments}
    */
    readonly autoAcceptSharedAttachments?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#default_route_table_association Ec2TransitGateway#default_route_table_association}
    */
    readonly defaultRouteTableAssociation?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#default_route_table_propagation Ec2TransitGateway#default_route_table_propagation}
    */
    readonly defaultRouteTablePropagation?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#description Ec2TransitGateway#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#dns_support Ec2TransitGateway#dns_support}
    */
    readonly dnsSupport?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#tags Ec2TransitGateway#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#tags_all Ec2TransitGateway#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#vpn_ecmp_support Ec2TransitGateway#vpn_ecmp_support}
    */
    readonly vpnEcmpSupport?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html aws_ec2_transit_gateway}
  */
  export class Ec2TransitGateway extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_transit_gateway";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html aws_ec2_transit_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayConfig = {}
    */
    public constructor(scope: Construct, id: string, config: Ec2TransitGatewayConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_transit_gateway',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._amazonSideAsn = config.amazonSideAsn;
      this._autoAcceptSharedAttachments = config.autoAcceptSharedAttachments;
      this._defaultRouteTableAssociation = config.defaultRouteTableAssociation;
      this._defaultRouteTablePropagation = config.defaultRouteTablePropagation;
      this._description = config.description;
      this._dnsSupport = config.dnsSupport;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vpnEcmpSupport = config.vpnEcmpSupport;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // amazon_side_asn - computed: false, optional: true, required: false
    private _amazonSideAsn?: number | undefined; 
    public get amazonSideAsn() {
      return this.getNumberAttribute('amazon_side_asn');
    }
    public set amazonSideAsn(value: number | undefined) {
      this._amazonSideAsn = value;
    }
    public resetAmazonSideAsn() {
      this._amazonSideAsn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonSideAsnInput() {
      return this._amazonSideAsn
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // association_default_route_table_id - computed: true, optional: false, required: false
    public get associationDefaultRouteTableId() {
      return this.getStringAttribute('association_default_route_table_id');
    }

    // auto_accept_shared_attachments - computed: false, optional: true, required: false
    private _autoAcceptSharedAttachments?: string | undefined; 
    public get autoAcceptSharedAttachments() {
      return this.getStringAttribute('auto_accept_shared_attachments');
    }
    public set autoAcceptSharedAttachments(value: string | undefined) {
      this._autoAcceptSharedAttachments = value;
    }
    public resetAutoAcceptSharedAttachments() {
      this._autoAcceptSharedAttachments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAcceptSharedAttachmentsInput() {
      return this._autoAcceptSharedAttachments
    }

    // default_route_table_association - computed: false, optional: true, required: false
    private _defaultRouteTableAssociation?: string | undefined; 
    public get defaultRouteTableAssociation() {
      return this.getStringAttribute('default_route_table_association');
    }
    public set defaultRouteTableAssociation(value: string | undefined) {
      this._defaultRouteTableAssociation = value;
    }
    public resetDefaultRouteTableAssociation() {
      this._defaultRouteTableAssociation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultRouteTableAssociationInput() {
      return this._defaultRouteTableAssociation
    }

    // default_route_table_propagation - computed: false, optional: true, required: false
    private _defaultRouteTablePropagation?: string | undefined; 
    public get defaultRouteTablePropagation() {
      return this.getStringAttribute('default_route_table_propagation');
    }
    public set defaultRouteTablePropagation(value: string | undefined) {
      this._defaultRouteTablePropagation = value;
    }
    public resetDefaultRouteTablePropagation() {
      this._defaultRouteTablePropagation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultRouteTablePropagationInput() {
      return this._defaultRouteTablePropagation
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // dns_support - computed: false, optional: true, required: false
    private _dnsSupport?: string | undefined; 
    public get dnsSupport() {
      return this.getStringAttribute('dns_support');
    }
    public set dnsSupport(value: string | undefined) {
      this._dnsSupport = value;
    }
    public resetDnsSupport() {
      this._dnsSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsSupportInput() {
      return this._dnsSupport
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // propagation_default_route_table_id - computed: true, optional: false, required: false
    public get propagationDefaultRouteTableId() {
      return this.getStringAttribute('propagation_default_route_table_id');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // vpn_ecmp_support - computed: false, optional: true, required: false
    private _vpnEcmpSupport?: string | undefined; 
    public get vpnEcmpSupport() {
      return this.getStringAttribute('vpn_ecmp_support');
    }
    public set vpnEcmpSupport(value: string | undefined) {
      this._vpnEcmpSupport = value;
    }
    public resetVpnEcmpSupport() {
      this._vpnEcmpSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpnEcmpSupportInput() {
      return this._vpnEcmpSupport
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        amazon_side_asn: cdktf.numberToTerraform(this._amazonSideAsn),
        auto_accept_shared_attachments: cdktf.stringToTerraform(this._autoAcceptSharedAttachments),
        default_route_table_association: cdktf.stringToTerraform(this._defaultRouteTableAssociation),
        default_route_table_propagation: cdktf.stringToTerraform(this._defaultRouteTablePropagation),
        description: cdktf.stringToTerraform(this._description),
        dns_support: cdktf.stringToTerraform(this._dnsSupport),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpn_ecmp_support: cdktf.stringToTerraform(this._vpnEcmpSupport),
      };
    }
  }
  export interface Ec2TransitGatewayPeeringAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment.html#peer_account_id Ec2TransitGatewayPeeringAttachment#peer_account_id}
    */
    readonly peerAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment.html#peer_region Ec2TransitGatewayPeeringAttachment#peer_region}
    */
    readonly peerRegion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment.html#peer_transit_gateway_id Ec2TransitGatewayPeeringAttachment#peer_transit_gateway_id}
    */
    readonly peerTransitGatewayId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment.html#tags Ec2TransitGatewayPeeringAttachment#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment.html#tags_all Ec2TransitGatewayPeeringAttachment#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment.html#transit_gateway_id Ec2TransitGatewayPeeringAttachment#transit_gateway_id}
    */
    readonly transitGatewayId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment.html aws_ec2_transit_gateway_peering_attachment}
  */
  export class Ec2TransitGatewayPeeringAttachment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_transit_gateway_peering_attachment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment.html aws_ec2_transit_gateway_peering_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayPeeringAttachmentConfig
    */
    public constructor(scope: Construct, id: string, config: Ec2TransitGatewayPeeringAttachmentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_transit_gateway_peering_attachment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._peerAccountId = config.peerAccountId;
      this._peerRegion = config.peerRegion;
      this._peerTransitGatewayId = config.peerTransitGatewayId;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._transitGatewayId = config.transitGatewayId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // peer_account_id - computed: true, optional: true, required: false
    private _peerAccountId?: string | undefined; 
    public get peerAccountId() {
      return this.getStringAttribute('peer_account_id');
    }
    public set peerAccountId(value: string | undefined) {
      this._peerAccountId = value;
    }
    public resetPeerAccountId() {
      this._peerAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get peerAccountIdInput() {
      return this._peerAccountId
    }

    // peer_region - computed: false, optional: false, required: true
    private _peerRegion?: string; 
    public get peerRegion() {
      return this.getStringAttribute('peer_region');
    }
    public set peerRegion(value: string) {
      this._peerRegion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get peerRegionInput() {
      return this._peerRegion
    }

    // peer_transit_gateway_id - computed: false, optional: false, required: true
    private _peerTransitGatewayId?: string; 
    public get peerTransitGatewayId() {
      return this.getStringAttribute('peer_transit_gateway_id');
    }
    public set peerTransitGatewayId(value: string) {
      this._peerTransitGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get peerTransitGatewayIdInput() {
      return this._peerTransitGatewayId
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // transit_gateway_id - computed: false, optional: false, required: true
    private _transitGatewayId?: string; 
    public get transitGatewayId() {
      return this.getStringAttribute('transit_gateway_id');
    }
    public set transitGatewayId(value: string) {
      this._transitGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayIdInput() {
      return this._transitGatewayId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        peer_account_id: cdktf.stringToTerraform(this._peerAccountId),
        peer_region: cdktf.stringToTerraform(this._peerRegion),
        peer_transit_gateway_id: cdktf.stringToTerraform(this._peerTransitGatewayId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
      };
    }
  }
  export interface Ec2TransitGatewayPeeringAttachmentAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment_accepter.html#tags Ec2TransitGatewayPeeringAttachmentAccepter#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment_accepter.html#tags_all Ec2TransitGatewayPeeringAttachmentAccepter#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment_accepter.html#transit_gateway_attachment_id Ec2TransitGatewayPeeringAttachmentAccepter#transit_gateway_attachment_id}
    */
    readonly transitGatewayAttachmentId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment_accepter.html aws_ec2_transit_gateway_peering_attachment_accepter}
  */
  export class Ec2TransitGatewayPeeringAttachmentAccepter extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_transit_gateway_peering_attachment_accepter";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment_accepter.html aws_ec2_transit_gateway_peering_attachment_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayPeeringAttachmentAccepterConfig
    */
    public constructor(scope: Construct, id: string, config: Ec2TransitGatewayPeeringAttachmentAccepterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_transit_gateway_peering_attachment_accepter',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // peer_account_id - computed: true, optional: false, required: false
    public get peerAccountId() {
      return this.getStringAttribute('peer_account_id');
    }

    // peer_region - computed: true, optional: false, required: false
    public get peerRegion() {
      return this.getStringAttribute('peer_region');
    }

    // peer_transit_gateway_id - computed: true, optional: false, required: false
    public get peerTransitGatewayId() {
      return this.getStringAttribute('peer_transit_gateway_id');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // transit_gateway_attachment_id - computed: false, optional: false, required: true
    private _transitGatewayAttachmentId?: string; 
    public get transitGatewayAttachmentId() {
      return this.getStringAttribute('transit_gateway_attachment_id');
    }
    public set transitGatewayAttachmentId(value: string) {
      this._transitGatewayAttachmentId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayAttachmentIdInput() {
      return this._transitGatewayAttachmentId
    }

    // transit_gateway_id - computed: true, optional: false, required: false
    public get transitGatewayId() {
      return this.getStringAttribute('transit_gateway_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId),
      };
    }
  }
  export interface Ec2TransitGatewayPrefixListReferenceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference.html#blackhole Ec2TransitGatewayPrefixListReference#blackhole}
    */
    readonly blackhole?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference.html#prefix_list_id Ec2TransitGatewayPrefixListReference#prefix_list_id}
    */
    readonly prefixListId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference.html#transit_gateway_attachment_id Ec2TransitGatewayPrefixListReference#transit_gateway_attachment_id}
    */
    readonly transitGatewayAttachmentId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference.html#transit_gateway_route_table_id Ec2TransitGatewayPrefixListReference#transit_gateway_route_table_id}
    */
    readonly transitGatewayRouteTableId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference.html aws_ec2_transit_gateway_prefix_list_reference}
  */
  export class Ec2TransitGatewayPrefixListReference extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_transit_gateway_prefix_list_reference";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference.html aws_ec2_transit_gateway_prefix_list_reference} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayPrefixListReferenceConfig
    */
    public constructor(scope: Construct, id: string, config: Ec2TransitGatewayPrefixListReferenceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_transit_gateway_prefix_list_reference',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._blackhole = config.blackhole;
      this._prefixListId = config.prefixListId;
      this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
      this._transitGatewayRouteTableId = config.transitGatewayRouteTableId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // blackhole - computed: false, optional: true, required: false
    private _blackhole?: boolean | cdktf.IResolvable | undefined; 
    public get blackhole() {
      return this.getBooleanAttribute('blackhole') as any;
    }
    public set blackhole(value: boolean | cdktf.IResolvable | undefined) {
      this._blackhole = value;
    }
    public resetBlackhole() {
      this._blackhole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blackholeInput() {
      return this._blackhole
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // prefix_list_id - computed: false, optional: false, required: true
    private _prefixListId?: string; 
    public get prefixListId() {
      return this.getStringAttribute('prefix_list_id');
    }
    public set prefixListId(value: string) {
      this._prefixListId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixListIdInput() {
      return this._prefixListId
    }

    // prefix_list_owner_id - computed: true, optional: false, required: false
    public get prefixListOwnerId() {
      return this.getStringAttribute('prefix_list_owner_id');
    }

    // transit_gateway_attachment_id - computed: false, optional: true, required: false
    private _transitGatewayAttachmentId?: string | undefined; 
    public get transitGatewayAttachmentId() {
      return this.getStringAttribute('transit_gateway_attachment_id');
    }
    public set transitGatewayAttachmentId(value: string | undefined) {
      this._transitGatewayAttachmentId = value;
    }
    public resetTransitGatewayAttachmentId() {
      this._transitGatewayAttachmentId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayAttachmentIdInput() {
      return this._transitGatewayAttachmentId
    }

    // transit_gateway_route_table_id - computed: false, optional: false, required: true
    private _transitGatewayRouteTableId?: string; 
    public get transitGatewayRouteTableId() {
      return this.getStringAttribute('transit_gateway_route_table_id');
    }
    public set transitGatewayRouteTableId(value: string) {
      this._transitGatewayRouteTableId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayRouteTableIdInput() {
      return this._transitGatewayRouteTableId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        blackhole: cdktf.booleanToTerraform(this._blackhole),
        prefix_list_id: cdktf.stringToTerraform(this._prefixListId),
        transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId),
        transit_gateway_route_table_id: cdktf.stringToTerraform(this._transitGatewayRouteTableId),
      };
    }
  }
  export interface Ec2TransitGatewayRouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route.html#blackhole Ec2TransitGatewayRoute#blackhole}
    */
    readonly blackhole?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route.html#destination_cidr_block Ec2TransitGatewayRoute#destination_cidr_block}
    */
    readonly destinationCidrBlock: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route.html#transit_gateway_attachment_id Ec2TransitGatewayRoute#transit_gateway_attachment_id}
    */
    readonly transitGatewayAttachmentId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route.html#transit_gateway_route_table_id Ec2TransitGatewayRoute#transit_gateway_route_table_id}
    */
    readonly transitGatewayRouteTableId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route.html aws_ec2_transit_gateway_route}
  */
  export class Ec2TransitGatewayRoute extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_transit_gateway_route";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route.html aws_ec2_transit_gateway_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayRouteConfig
    */
    public constructor(scope: Construct, id: string, config: Ec2TransitGatewayRouteConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_transit_gateway_route',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._blackhole = config.blackhole;
      this._destinationCidrBlock = config.destinationCidrBlock;
      this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
      this._transitGatewayRouteTableId = config.transitGatewayRouteTableId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // blackhole - computed: false, optional: true, required: false
    private _blackhole?: boolean | cdktf.IResolvable | undefined; 
    public get blackhole() {
      return this.getBooleanAttribute('blackhole') as any;
    }
    public set blackhole(value: boolean | cdktf.IResolvable | undefined) {
      this._blackhole = value;
    }
    public resetBlackhole() {
      this._blackhole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blackholeInput() {
      return this._blackhole
    }

    // destination_cidr_block - computed: false, optional: false, required: true
    private _destinationCidrBlock?: string; 
    public get destinationCidrBlock() {
      return this.getStringAttribute('destination_cidr_block');
    }
    public set destinationCidrBlock(value: string) {
      this._destinationCidrBlock = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationCidrBlockInput() {
      return this._destinationCidrBlock
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // transit_gateway_attachment_id - computed: false, optional: true, required: false
    private _transitGatewayAttachmentId?: string | undefined; 
    public get transitGatewayAttachmentId() {
      return this.getStringAttribute('transit_gateway_attachment_id');
    }
    public set transitGatewayAttachmentId(value: string | undefined) {
      this._transitGatewayAttachmentId = value;
    }
    public resetTransitGatewayAttachmentId() {
      this._transitGatewayAttachmentId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayAttachmentIdInput() {
      return this._transitGatewayAttachmentId
    }

    // transit_gateway_route_table_id - computed: false, optional: false, required: true
    private _transitGatewayRouteTableId?: string; 
    public get transitGatewayRouteTableId() {
      return this.getStringAttribute('transit_gateway_route_table_id');
    }
    public set transitGatewayRouteTableId(value: string) {
      this._transitGatewayRouteTableId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayRouteTableIdInput() {
      return this._transitGatewayRouteTableId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        blackhole: cdktf.booleanToTerraform(this._blackhole),
        destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
        transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId),
        transit_gateway_route_table_id: cdktf.stringToTerraform(this._transitGatewayRouteTableId),
      };
    }
  }
  export interface Ec2TransitGatewayRouteTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table.html#tags Ec2TransitGatewayRouteTable#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table.html#tags_all Ec2TransitGatewayRouteTable#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table.html#transit_gateway_id Ec2TransitGatewayRouteTable#transit_gateway_id}
    */
    readonly transitGatewayId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table.html aws_ec2_transit_gateway_route_table}
  */
  export class Ec2TransitGatewayRouteTable extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_transit_gateway_route_table";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table.html aws_ec2_transit_gateway_route_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayRouteTableConfig
    */
    public constructor(scope: Construct, id: string, config: Ec2TransitGatewayRouteTableConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_transit_gateway_route_table',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._transitGatewayId = config.transitGatewayId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // default_association_route_table - computed: true, optional: false, required: false
    public get defaultAssociationRouteTable() {
      return this.getBooleanAttribute('default_association_route_table') as any;
    }

    // default_propagation_route_table - computed: true, optional: false, required: false
    public get defaultPropagationRouteTable() {
      return this.getBooleanAttribute('default_propagation_route_table') as any;
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // transit_gateway_id - computed: false, optional: false, required: true
    private _transitGatewayId?: string; 
    public get transitGatewayId() {
      return this.getStringAttribute('transit_gateway_id');
    }
    public set transitGatewayId(value: string) {
      this._transitGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayIdInput() {
      return this._transitGatewayId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
      };
    }
  }
  export interface Ec2TransitGatewayRouteTableAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table_association.html#transit_gateway_attachment_id Ec2TransitGatewayRouteTableAssociation#transit_gateway_attachment_id}
    */
    readonly transitGatewayAttachmentId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table_association.html#transit_gateway_route_table_id Ec2TransitGatewayRouteTableAssociation#transit_gateway_route_table_id}
    */
    readonly transitGatewayRouteTableId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table_association.html aws_ec2_transit_gateway_route_table_association}
  */
  export class Ec2TransitGatewayRouteTableAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_transit_gateway_route_table_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table_association.html aws_ec2_transit_gateway_route_table_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayRouteTableAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: Ec2TransitGatewayRouteTableAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_transit_gateway_route_table_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
      this._transitGatewayRouteTableId = config.transitGatewayRouteTableId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // resource_id - computed: true, optional: false, required: false
    public get resourceId() {
      return this.getStringAttribute('resource_id');
    }

    // resource_type - computed: true, optional: false, required: false
    public get resourceType() {
      return this.getStringAttribute('resource_type');
    }

    // transit_gateway_attachment_id - computed: false, optional: false, required: true
    private _transitGatewayAttachmentId?: string; 
    public get transitGatewayAttachmentId() {
      return this.getStringAttribute('transit_gateway_attachment_id');
    }
    public set transitGatewayAttachmentId(value: string) {
      this._transitGatewayAttachmentId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayAttachmentIdInput() {
      return this._transitGatewayAttachmentId
    }

    // transit_gateway_route_table_id - computed: false, optional: false, required: true
    private _transitGatewayRouteTableId?: string; 
    public get transitGatewayRouteTableId() {
      return this.getStringAttribute('transit_gateway_route_table_id');
    }
    public set transitGatewayRouteTableId(value: string) {
      this._transitGatewayRouteTableId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayRouteTableIdInput() {
      return this._transitGatewayRouteTableId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId),
        transit_gateway_route_table_id: cdktf.stringToTerraform(this._transitGatewayRouteTableId),
      };
    }
  }
  export interface Ec2TransitGatewayRouteTablePropagationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table_propagation.html#transit_gateway_attachment_id Ec2TransitGatewayRouteTablePropagation#transit_gateway_attachment_id}
    */
    readonly transitGatewayAttachmentId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table_propagation.html#transit_gateway_route_table_id Ec2TransitGatewayRouteTablePropagation#transit_gateway_route_table_id}
    */
    readonly transitGatewayRouteTableId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table_propagation.html aws_ec2_transit_gateway_route_table_propagation}
  */
  export class Ec2TransitGatewayRouteTablePropagation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_transit_gateway_route_table_propagation";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table_propagation.html aws_ec2_transit_gateway_route_table_propagation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayRouteTablePropagationConfig
    */
    public constructor(scope: Construct, id: string, config: Ec2TransitGatewayRouteTablePropagationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_transit_gateway_route_table_propagation',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
      this._transitGatewayRouteTableId = config.transitGatewayRouteTableId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // resource_id - computed: true, optional: false, required: false
    public get resourceId() {
      return this.getStringAttribute('resource_id');
    }

    // resource_type - computed: true, optional: false, required: false
    public get resourceType() {
      return this.getStringAttribute('resource_type');
    }

    // transit_gateway_attachment_id - computed: false, optional: false, required: true
    private _transitGatewayAttachmentId?: string; 
    public get transitGatewayAttachmentId() {
      return this.getStringAttribute('transit_gateway_attachment_id');
    }
    public set transitGatewayAttachmentId(value: string) {
      this._transitGatewayAttachmentId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayAttachmentIdInput() {
      return this._transitGatewayAttachmentId
    }

    // transit_gateway_route_table_id - computed: false, optional: false, required: true
    private _transitGatewayRouteTableId?: string; 
    public get transitGatewayRouteTableId() {
      return this.getStringAttribute('transit_gateway_route_table_id');
    }
    public set transitGatewayRouteTableId(value: string) {
      this._transitGatewayRouteTableId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayRouteTableIdInput() {
      return this._transitGatewayRouteTableId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId),
        transit_gateway_route_table_id: cdktf.stringToTerraform(this._transitGatewayRouteTableId),
      };
    }
  }
  export interface Ec2TransitGatewayVpcAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#appliance_mode_support Ec2TransitGatewayVpcAttachment#appliance_mode_support}
    */
    readonly applianceModeSupport?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#dns_support Ec2TransitGatewayVpcAttachment#dns_support}
    */
    readonly dnsSupport?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#ipv6_support Ec2TransitGatewayVpcAttachment#ipv6_support}
    */
    readonly ipv6Support?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#subnet_ids Ec2TransitGatewayVpcAttachment#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#tags Ec2TransitGatewayVpcAttachment#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#tags_all Ec2TransitGatewayVpcAttachment#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#transit_gateway_default_route_table_association Ec2TransitGatewayVpcAttachment#transit_gateway_default_route_table_association}
    */
    readonly transitGatewayDefaultRouteTableAssociation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#transit_gateway_default_route_table_propagation Ec2TransitGatewayVpcAttachment#transit_gateway_default_route_table_propagation}
    */
    readonly transitGatewayDefaultRouteTablePropagation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#transit_gateway_id Ec2TransitGatewayVpcAttachment#transit_gateway_id}
    */
    readonly transitGatewayId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#vpc_id Ec2TransitGatewayVpcAttachment#vpc_id}
    */
    readonly vpcId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html aws_ec2_transit_gateway_vpc_attachment}
  */
  export class Ec2TransitGatewayVpcAttachment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_transit_gateway_vpc_attachment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html aws_ec2_transit_gateway_vpc_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayVpcAttachmentConfig
    */
    public constructor(scope: Construct, id: string, config: Ec2TransitGatewayVpcAttachmentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_transit_gateway_vpc_attachment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._applianceModeSupport = config.applianceModeSupport;
      this._dnsSupport = config.dnsSupport;
      this._ipv6Support = config.ipv6Support;
      this._subnetIds = config.subnetIds;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._transitGatewayDefaultRouteTableAssociation = config.transitGatewayDefaultRouteTableAssociation;
      this._transitGatewayDefaultRouteTablePropagation = config.transitGatewayDefaultRouteTablePropagation;
      this._transitGatewayId = config.transitGatewayId;
      this._vpcId = config.vpcId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // appliance_mode_support - computed: false, optional: true, required: false
    private _applianceModeSupport?: string | undefined; 
    public get applianceModeSupport() {
      return this.getStringAttribute('appliance_mode_support');
    }
    public set applianceModeSupport(value: string | undefined) {
      this._applianceModeSupport = value;
    }
    public resetApplianceModeSupport() {
      this._applianceModeSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applianceModeSupportInput() {
      return this._applianceModeSupport
    }

    // dns_support - computed: false, optional: true, required: false
    private _dnsSupport?: string | undefined; 
    public get dnsSupport() {
      return this.getStringAttribute('dns_support');
    }
    public set dnsSupport(value: string | undefined) {
      this._dnsSupport = value;
    }
    public resetDnsSupport() {
      this._dnsSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsSupportInput() {
      return this._dnsSupport
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ipv6_support - computed: false, optional: true, required: false
    private _ipv6Support?: string | undefined; 
    public get ipv6Support() {
      return this.getStringAttribute('ipv6_support');
    }
    public set ipv6Support(value: string | undefined) {
      this._ipv6Support = value;
    }
    public resetIpv6Support() {
      this._ipv6Support = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6SupportInput() {
      return this._ipv6Support
    }

    // subnet_ids - computed: false, optional: false, required: true
    private _subnetIds?: string[]; 
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
      this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
      return this._subnetIds
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // transit_gateway_default_route_table_association - computed: false, optional: true, required: false
    private _transitGatewayDefaultRouteTableAssociation?: boolean | cdktf.IResolvable | undefined; 
    public get transitGatewayDefaultRouteTableAssociation() {
      return this.getBooleanAttribute('transit_gateway_default_route_table_association') as any;
    }
    public set transitGatewayDefaultRouteTableAssociation(value: boolean | cdktf.IResolvable | undefined) {
      this._transitGatewayDefaultRouteTableAssociation = value;
    }
    public resetTransitGatewayDefaultRouteTableAssociation() {
      this._transitGatewayDefaultRouteTableAssociation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayDefaultRouteTableAssociationInput() {
      return this._transitGatewayDefaultRouteTableAssociation
    }

    // transit_gateway_default_route_table_propagation - computed: false, optional: true, required: false
    private _transitGatewayDefaultRouteTablePropagation?: boolean | cdktf.IResolvable | undefined; 
    public get transitGatewayDefaultRouteTablePropagation() {
      return this.getBooleanAttribute('transit_gateway_default_route_table_propagation') as any;
    }
    public set transitGatewayDefaultRouteTablePropagation(value: boolean | cdktf.IResolvable | undefined) {
      this._transitGatewayDefaultRouteTablePropagation = value;
    }
    public resetTransitGatewayDefaultRouteTablePropagation() {
      this._transitGatewayDefaultRouteTablePropagation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayDefaultRouteTablePropagationInput() {
      return this._transitGatewayDefaultRouteTablePropagation
    }

    // transit_gateway_id - computed: false, optional: false, required: true
    private _transitGatewayId?: string; 
    public get transitGatewayId() {
      return this.getStringAttribute('transit_gateway_id');
    }
    public set transitGatewayId(value: string) {
      this._transitGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayIdInput() {
      return this._transitGatewayId
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
      this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
      return this._vpcId
    }

    // vpc_owner_id - computed: true, optional: false, required: false
    public get vpcOwnerId() {
      return this.getStringAttribute('vpc_owner_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        appliance_mode_support: cdktf.stringToTerraform(this._applianceModeSupport),
        dns_support: cdktf.stringToTerraform(this._dnsSupport),
        ipv6_support: cdktf.stringToTerraform(this._ipv6Support),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        transit_gateway_default_route_table_association: cdktf.booleanToTerraform(this._transitGatewayDefaultRouteTableAssociation),
        transit_gateway_default_route_table_propagation: cdktf.booleanToTerraform(this._transitGatewayDefaultRouteTablePropagation),
        transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
      };
    }
  }
  export interface Ec2TransitGatewayVpcAttachmentAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html#tags Ec2TransitGatewayVpcAttachmentAccepter#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html#tags_all Ec2TransitGatewayVpcAttachmentAccepter#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html#transit_gateway_attachment_id Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_attachment_id}
    */
    readonly transitGatewayAttachmentId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html#transit_gateway_default_route_table_association Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_default_route_table_association}
    */
    readonly transitGatewayDefaultRouteTableAssociation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html#transit_gateway_default_route_table_propagation Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_default_route_table_propagation}
    */
    readonly transitGatewayDefaultRouteTablePropagation?: boolean | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html aws_ec2_transit_gateway_vpc_attachment_accepter}
  */
  export class Ec2TransitGatewayVpcAttachmentAccepter extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_transit_gateway_vpc_attachment_accepter";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html aws_ec2_transit_gateway_vpc_attachment_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayVpcAttachmentAccepterConfig
    */
    public constructor(scope: Construct, id: string, config: Ec2TransitGatewayVpcAttachmentAccepterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_transit_gateway_vpc_attachment_accepter',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
      this._transitGatewayDefaultRouteTableAssociation = config.transitGatewayDefaultRouteTableAssociation;
      this._transitGatewayDefaultRouteTablePropagation = config.transitGatewayDefaultRouteTablePropagation;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // appliance_mode_support - computed: true, optional: false, required: false
    public get applianceModeSupport() {
      return this.getStringAttribute('appliance_mode_support');
    }

    // dns_support - computed: true, optional: false, required: false
    public get dnsSupport() {
      return this.getStringAttribute('dns_support');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ipv6_support - computed: true, optional: false, required: false
    public get ipv6Support() {
      return this.getStringAttribute('ipv6_support');
    }

    // subnet_ids - computed: true, optional: false, required: false
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // transit_gateway_attachment_id - computed: false, optional: false, required: true
    private _transitGatewayAttachmentId?: string; 
    public get transitGatewayAttachmentId() {
      return this.getStringAttribute('transit_gateway_attachment_id');
    }
    public set transitGatewayAttachmentId(value: string) {
      this._transitGatewayAttachmentId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayAttachmentIdInput() {
      return this._transitGatewayAttachmentId
    }

    // transit_gateway_default_route_table_association - computed: false, optional: true, required: false
    private _transitGatewayDefaultRouteTableAssociation?: boolean | cdktf.IResolvable | undefined; 
    public get transitGatewayDefaultRouteTableAssociation() {
      return this.getBooleanAttribute('transit_gateway_default_route_table_association') as any;
    }
    public set transitGatewayDefaultRouteTableAssociation(value: boolean | cdktf.IResolvable | undefined) {
      this._transitGatewayDefaultRouteTableAssociation = value;
    }
    public resetTransitGatewayDefaultRouteTableAssociation() {
      this._transitGatewayDefaultRouteTableAssociation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayDefaultRouteTableAssociationInput() {
      return this._transitGatewayDefaultRouteTableAssociation
    }

    // transit_gateway_default_route_table_propagation - computed: false, optional: true, required: false
    private _transitGatewayDefaultRouteTablePropagation?: boolean | cdktf.IResolvable | undefined; 
    public get transitGatewayDefaultRouteTablePropagation() {
      return this.getBooleanAttribute('transit_gateway_default_route_table_propagation') as any;
    }
    public set transitGatewayDefaultRouteTablePropagation(value: boolean | cdktf.IResolvable | undefined) {
      this._transitGatewayDefaultRouteTablePropagation = value;
    }
    public resetTransitGatewayDefaultRouteTablePropagation() {
      this._transitGatewayDefaultRouteTablePropagation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayDefaultRouteTablePropagationInput() {
      return this._transitGatewayDefaultRouteTablePropagation
    }

    // transit_gateway_id - computed: true, optional: false, required: false
    public get transitGatewayId() {
      return this.getStringAttribute('transit_gateway_id');
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }

    // vpc_owner_id - computed: true, optional: false, required: false
    public get vpcOwnerId() {
      return this.getStringAttribute('vpc_owner_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId),
        transit_gateway_default_route_table_association: cdktf.booleanToTerraform(this._transitGatewayDefaultRouteTableAssociation),
        transit_gateway_default_route_table_propagation: cdktf.booleanToTerraform(this._transitGatewayDefaultRouteTablePropagation),
      };
    }
  }
  export interface EipConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#address Eip#address}
    */
    readonly address?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#associate_with_private_ip Eip#associate_with_private_ip}
    */
    readonly associateWithPrivateIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#customer_owned_ipv4_pool Eip#customer_owned_ipv4_pool}
    */
    readonly customerOwnedIpv4Pool?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#instance Eip#instance}
    */
    readonly instance?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#network_border_group Eip#network_border_group}
    */
    readonly networkBorderGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#network_interface Eip#network_interface}
    */
    readonly networkInterface?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#public_ipv4_pool Eip#public_ipv4_pool}
    */
    readonly publicIpv4Pool?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#tags Eip#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#tags_all Eip#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#vpc Eip#vpc}
    */
    readonly vpc?: boolean | cdktf.IResolvable;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#timeouts Eip#timeouts}
    */
    readonly timeouts?: EipTimeouts;
  }
  export interface EipTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#delete Eip#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#read Eip#read}
    */
    readonly read?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#update Eip#update}
    */
    readonly update?: string;
  }

  function eipTimeoutsToTerraform(struct?: EipTimeoutsOutputReference | EipTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delete: cdktf.stringToTerraform(struct!.delete),
      read: cdktf.stringToTerraform(struct!.read),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class EipTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // read - computed: false, optional: true, required: false
    private _read?: string | undefined; 
    public get read() {
      return this.getStringAttribute('read');
    }
    public set read(value: string | undefined) {
      this._read = value;
    }
    public resetRead() {
      this._read = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readInput() {
      return this._read
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/eip.html aws_eip}
  */
  export class Eip extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_eip";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eip.html aws_eip} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EipConfig = {}
    */
    public constructor(scope: Construct, id: string, config: EipConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_eip',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._address = config.address;
      this._associateWithPrivateIp = config.associateWithPrivateIp;
      this._customerOwnedIpv4Pool = config.customerOwnedIpv4Pool;
      this._instance = config.instance;
      this._networkBorderGroup = config.networkBorderGroup;
      this._networkInterface = config.networkInterface;
      this._publicIpv4Pool = config.publicIpv4Pool;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vpc = config.vpc;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // address - computed: false, optional: true, required: false
    private _address?: string | undefined; 
    public get address() {
      return this.getStringAttribute('address');
    }
    public set address(value: string | undefined) {
      this._address = value;
    }
    public resetAddress() {
      this._address = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addressInput() {
      return this._address
    }

    // allocation_id - computed: true, optional: false, required: false
    public get allocationId() {
      return this.getStringAttribute('allocation_id');
    }

    // associate_with_private_ip - computed: false, optional: true, required: false
    private _associateWithPrivateIp?: string | undefined; 
    public get associateWithPrivateIp() {
      return this.getStringAttribute('associate_with_private_ip');
    }
    public set associateWithPrivateIp(value: string | undefined) {
      this._associateWithPrivateIp = value;
    }
    public resetAssociateWithPrivateIp() {
      this._associateWithPrivateIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associateWithPrivateIpInput() {
      return this._associateWithPrivateIp
    }

    // association_id - computed: true, optional: false, required: false
    public get associationId() {
      return this.getStringAttribute('association_id');
    }

    // carrier_ip - computed: true, optional: false, required: false
    public get carrierIp() {
      return this.getStringAttribute('carrier_ip');
    }

    // customer_owned_ip - computed: true, optional: false, required: false
    public get customerOwnedIp() {
      return this.getStringAttribute('customer_owned_ip');
    }

    // customer_owned_ipv4_pool - computed: false, optional: true, required: false
    private _customerOwnedIpv4Pool?: string | undefined; 
    public get customerOwnedIpv4Pool() {
      return this.getStringAttribute('customer_owned_ipv4_pool');
    }
    public set customerOwnedIpv4Pool(value: string | undefined) {
      this._customerOwnedIpv4Pool = value;
    }
    public resetCustomerOwnedIpv4Pool() {
      this._customerOwnedIpv4Pool = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerOwnedIpv4PoolInput() {
      return this._customerOwnedIpv4Pool
    }

    // domain - computed: true, optional: false, required: false
    public get domain() {
      return this.getStringAttribute('domain');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance - computed: true, optional: true, required: false
    private _instance?: string | undefined; 
    public get instance() {
      return this.getStringAttribute('instance');
    }
    public set instance(value: string | undefined) {
      this._instance = value;
    }
    public resetInstance() {
      this._instance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceInput() {
      return this._instance
    }

    // network_border_group - computed: true, optional: true, required: false
    private _networkBorderGroup?: string | undefined; 
    public get networkBorderGroup() {
      return this.getStringAttribute('network_border_group');
    }
    public set networkBorderGroup(value: string | undefined) {
      this._networkBorderGroup = value;
    }
    public resetNetworkBorderGroup() {
      this._networkBorderGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkBorderGroupInput() {
      return this._networkBorderGroup
    }

    // network_interface - computed: true, optional: true, required: false
    private _networkInterface?: string | undefined; 
    public get networkInterface() {
      return this.getStringAttribute('network_interface');
    }
    public set networkInterface(value: string | undefined) {
      this._networkInterface = value;
    }
    public resetNetworkInterface() {
      this._networkInterface = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceInput() {
      return this._networkInterface
    }

    // private_dns - computed: true, optional: false, required: false
    public get privateDns() {
      return this.getStringAttribute('private_dns');
    }

    // private_ip - computed: true, optional: false, required: false
    public get privateIp() {
      return this.getStringAttribute('private_ip');
    }

    // public_dns - computed: true, optional: false, required: false
    public get publicDns() {
      return this.getStringAttribute('public_dns');
    }

    // public_ip - computed: true, optional: false, required: false
    public get publicIp() {
      return this.getStringAttribute('public_ip');
    }

    // public_ipv4_pool - computed: true, optional: true, required: false
    private _publicIpv4Pool?: string | undefined; 
    public get publicIpv4Pool() {
      return this.getStringAttribute('public_ipv4_pool');
    }
    public set publicIpv4Pool(value: string | undefined) {
      this._publicIpv4Pool = value;
    }
    public resetPublicIpv4Pool() {
      this._publicIpv4Pool = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicIpv4PoolInput() {
      return this._publicIpv4Pool
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // vpc - computed: true, optional: true, required: false
    private _vpc?: boolean | cdktf.IResolvable | undefined; 
    public get vpc() {
      return this.getBooleanAttribute('vpc') as any;
    }
    public set vpc(value: boolean | cdktf.IResolvable | undefined) {
      this._vpc = value;
    }
    public resetVpc() {
      this._vpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcInput() {
      return this._vpc
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: EipTimeouts | undefined; 
    private __timeoutsOutput = new EipTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: EipTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        address: cdktf.stringToTerraform(this._address),
        associate_with_private_ip: cdktf.stringToTerraform(this._associateWithPrivateIp),
        customer_owned_ipv4_pool: cdktf.stringToTerraform(this._customerOwnedIpv4Pool),
        instance: cdktf.stringToTerraform(this._instance),
        network_border_group: cdktf.stringToTerraform(this._networkBorderGroup),
        network_interface: cdktf.stringToTerraform(this._networkInterface),
        public_ipv4_pool: cdktf.stringToTerraform(this._publicIpv4Pool),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpc: cdktf.booleanToTerraform(this._vpc),
        timeouts: eipTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface EipAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip_association.html#allocation_id EipAssociation#allocation_id}
    */
    readonly allocationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip_association.html#allow_reassociation EipAssociation#allow_reassociation}
    */
    readonly allowReassociation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip_association.html#instance_id EipAssociation#instance_id}
    */
    readonly instanceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip_association.html#network_interface_id EipAssociation#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip_association.html#private_ip_address EipAssociation#private_ip_address}
    */
    readonly privateIpAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip_association.html#public_ip EipAssociation#public_ip}
    */
    readonly publicIp?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/eip_association.html aws_eip_association}
  */
  export class EipAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_eip_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eip_association.html aws_eip_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EipAssociationConfig = {}
    */
    public constructor(scope: Construct, id: string, config: EipAssociationConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_eip_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._allocationId = config.allocationId;
      this._allowReassociation = config.allowReassociation;
      this._instanceId = config.instanceId;
      this._networkInterfaceId = config.networkInterfaceId;
      this._privateIpAddress = config.privateIpAddress;
      this._publicIp = config.publicIp;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allocation_id - computed: true, optional: true, required: false
    private _allocationId?: string | undefined; 
    public get allocationId() {
      return this.getStringAttribute('allocation_id');
    }
    public set allocationId(value: string | undefined) {
      this._allocationId = value;
    }
    public resetAllocationId() {
      this._allocationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allocationIdInput() {
      return this._allocationId
    }

    // allow_reassociation - computed: false, optional: true, required: false
    private _allowReassociation?: boolean | cdktf.IResolvable | undefined; 
    public get allowReassociation() {
      return this.getBooleanAttribute('allow_reassociation') as any;
    }
    public set allowReassociation(value: boolean | cdktf.IResolvable | undefined) {
      this._allowReassociation = value;
    }
    public resetAllowReassociation() {
      this._allowReassociation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowReassociationInput() {
      return this._allowReassociation
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_id - computed: true, optional: true, required: false
    private _instanceId?: string | undefined; 
    public get instanceId() {
      return this.getStringAttribute('instance_id');
    }
    public set instanceId(value: string | undefined) {
      this._instanceId = value;
    }
    public resetInstanceId() {
      this._instanceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceIdInput() {
      return this._instanceId
    }

    // network_interface_id - computed: true, optional: true, required: false
    private _networkInterfaceId?: string | undefined; 
    public get networkInterfaceId() {
      return this.getStringAttribute('network_interface_id');
    }
    public set networkInterfaceId(value: string | undefined) {
      this._networkInterfaceId = value;
    }
    public resetNetworkInterfaceId() {
      this._networkInterfaceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceIdInput() {
      return this._networkInterfaceId
    }

    // private_ip_address - computed: true, optional: true, required: false
    private _privateIpAddress?: string | undefined; 
    public get privateIpAddress() {
      return this.getStringAttribute('private_ip_address');
    }
    public set privateIpAddress(value: string | undefined) {
      this._privateIpAddress = value;
    }
    public resetPrivateIpAddress() {
      this._privateIpAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateIpAddressInput() {
      return this._privateIpAddress
    }

    // public_ip - computed: true, optional: true, required: false
    private _publicIp?: string | undefined; 
    public get publicIp() {
      return this.getStringAttribute('public_ip');
    }
    public set publicIp(value: string | undefined) {
      this._publicIp = value;
    }
    public resetPublicIp() {
      this._publicIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicIpInput() {
      return this._publicIp
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        allocation_id: cdktf.stringToTerraform(this._allocationId),
        allow_reassociation: cdktf.booleanToTerraform(this._allowReassociation),
        instance_id: cdktf.stringToTerraform(this._instanceId),
        network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
        private_ip_address: cdktf.stringToTerraform(this._privateIpAddress),
        public_ip: cdktf.stringToTerraform(this._publicIp),
      };
    }
  }
  export interface InstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#ami Instance#ami}
    */
    readonly ami?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#associate_public_ip_address Instance#associate_public_ip_address}
    */
    readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#availability_zone Instance#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#cpu_core_count Instance#cpu_core_count}
    */
    readonly cpuCoreCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#cpu_threads_per_core Instance#cpu_threads_per_core}
    */
    readonly cpuThreadsPerCore?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#disable_api_termination Instance#disable_api_termination}
    */
    readonly disableApiTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#ebs_optimized Instance#ebs_optimized}
    */
    readonly ebsOptimized?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#get_password_data Instance#get_password_data}
    */
    readonly fetchPasswordData?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#hibernation Instance#hibernation}
    */
    readonly hibernation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#host_id Instance#host_id}
    */
    readonly hostId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#iam_instance_profile Instance#iam_instance_profile}
    */
    readonly iamInstanceProfile?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#instance_initiated_shutdown_behavior Instance#instance_initiated_shutdown_behavior}
    */
    readonly instanceInitiatedShutdownBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#instance_type Instance#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#ipv6_address_count Instance#ipv6_address_count}
    */
    readonly ipv6AddressCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#ipv6_addresses Instance#ipv6_addresses}
    */
    readonly ipv6Addresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#key_name Instance#key_name}
    */
    readonly keyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#monitoring Instance#monitoring}
    */
    readonly monitoring?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#placement_group Instance#placement_group}
    */
    readonly placementGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#placement_partition_number Instance#placement_partition_number}
    */
    readonly placementPartitionNumber?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#private_ip Instance#private_ip}
    */
    readonly privateIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#secondary_private_ips Instance#secondary_private_ips}
    */
    readonly secondaryPrivateIps?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#security_groups Instance#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#source_dest_check Instance#source_dest_check}
    */
    readonly sourceDestCheck?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#subnet_id Instance#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#tags Instance#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#tags_all Instance#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#tenancy Instance#tenancy}
    */
    readonly tenancy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#user_data Instance#user_data}
    */
    readonly userData?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#user_data_base64 Instance#user_data_base64}
    */
    readonly userDataBase64?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#volume_tags Instance#volume_tags}
    */
    readonly volumeTags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#vpc_security_group_ids Instance#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * capacity_reservation_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#capacity_reservation_specification Instance#capacity_reservation_specification}
    */
    readonly capacityReservationSpecification?: InstanceCapacityReservationSpecification;
    /**
    * credit_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#credit_specification Instance#credit_specification}
    */
    readonly creditSpecification?: InstanceCreditSpecification;
    /**
    * ebs_block_device block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#ebs_block_device Instance#ebs_block_device}
    */
    readonly ebsBlockDevice?: InstanceEbsBlockDevice[];
    /**
    * enclave_options block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#enclave_options Instance#enclave_options}
    */
    readonly enclaveOptions?: InstanceEnclaveOptions;
    /**
    * ephemeral_block_device block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#ephemeral_block_device Instance#ephemeral_block_device}
    */
    readonly ephemeralBlockDevice?: InstanceEphemeralBlockDevice[];
    /**
    * launch_template block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#launch_template Instance#launch_template}
    */
    readonly launchTemplate?: InstanceLaunchTemplate;
    /**
    * metadata_options block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#metadata_options Instance#metadata_options}
    */
    readonly metadataOptions?: InstanceMetadataOptions;
    /**
    * network_interface block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#network_interface Instance#network_interface}
    */
    readonly networkInterface?: InstanceNetworkInterface[];
    /**
    * root_block_device block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#root_block_device Instance#root_block_device}
    */
    readonly rootBlockDevice?: InstanceRootBlockDevice;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#timeouts Instance#timeouts}
    */
    readonly timeouts?: InstanceTimeouts;
  }
  export interface InstanceCapacityReservationSpecificationCapacityReservationTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#capacity_reservation_id Instance#capacity_reservation_id}
    */
    readonly capacityReservationId?: string;
  }

  function instanceCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct?: InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference | InstanceCapacityReservationSpecificationCapacityReservationTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      capacity_reservation_id: cdktf.stringToTerraform(struct!.capacityReservationId),
    }
  }

  export class InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // capacity_reservation_id - computed: false, optional: true, required: false
    private _capacityReservationId?: string | undefined; 
    public get capacityReservationId() {
      return this.getStringAttribute('capacity_reservation_id');
    }
    public set capacityReservationId(value: string | undefined) {
      this._capacityReservationId = value;
    }
    public resetCapacityReservationId() {
      this._capacityReservationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationIdInput() {
      return this._capacityReservationId
    }
  }
  export interface InstanceCapacityReservationSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#capacity_reservation_preference Instance#capacity_reservation_preference}
    */
    readonly capacityReservationPreference?: string;
    /**
    * capacity_reservation_target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#capacity_reservation_target Instance#capacity_reservation_target}
    */
    readonly capacityReservationTarget?: InstanceCapacityReservationSpecificationCapacityReservationTarget;
  }

  function instanceCapacityReservationSpecificationToTerraform(struct?: InstanceCapacityReservationSpecificationOutputReference | InstanceCapacityReservationSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      capacity_reservation_preference: cdktf.stringToTerraform(struct!.capacityReservationPreference),
      capacity_reservation_target: instanceCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct!.capacityReservationTarget),
    }
  }

  export class InstanceCapacityReservationSpecificationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // capacity_reservation_preference - computed: false, optional: true, required: false
    private _capacityReservationPreference?: string | undefined; 
    public get capacityReservationPreference() {
      return this.getStringAttribute('capacity_reservation_preference');
    }
    public set capacityReservationPreference(value: string | undefined) {
      this._capacityReservationPreference = value;
    }
    public resetCapacityReservationPreference() {
      this._capacityReservationPreference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationPreferenceInput() {
      return this._capacityReservationPreference
    }

    // capacity_reservation_target - computed: false, optional: true, required: false
    private _capacityReservationTarget?: InstanceCapacityReservationSpecificationCapacityReservationTarget | undefined; 
    private __capacityReservationTargetOutput = new InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference(this as any, "capacity_reservation_target", true);
    public get capacityReservationTarget() {
      return this.__capacityReservationTargetOutput;
    }
    public putCapacityReservationTarget(value: InstanceCapacityReservationSpecificationCapacityReservationTarget | undefined) {
      this._capacityReservationTarget = value;
    }
    public resetCapacityReservationTarget() {
      this._capacityReservationTarget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationTargetInput() {
      return this._capacityReservationTarget
    }
  }
  export interface InstanceCreditSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#cpu_credits Instance#cpu_credits}
    */
    readonly cpuCredits?: string;
  }

  function instanceCreditSpecificationToTerraform(struct?: InstanceCreditSpecificationOutputReference | InstanceCreditSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cpu_credits: cdktf.stringToTerraform(struct!.cpuCredits),
    }
  }

  export class InstanceCreditSpecificationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // cpu_credits - computed: false, optional: true, required: false
    private _cpuCredits?: string | undefined; 
    public get cpuCredits() {
      return this.getStringAttribute('cpu_credits');
    }
    public set cpuCredits(value: string | undefined) {
      this._cpuCredits = value;
    }
    public resetCpuCredits() {
      this._cpuCredits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuCreditsInput() {
      return this._cpuCredits
    }
  }
  export interface InstanceEbsBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#delete_on_termination Instance#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#device_name Instance#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#encrypted Instance#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#iops Instance#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#kms_key_id Instance#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#snapshot_id Instance#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#tags Instance#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#throughput Instance#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#volume_size Instance#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#volume_type Instance#volume_type}
    */
    readonly volumeType?: string;
  }

  function instanceEbsBlockDeviceToTerraform(struct?: InstanceEbsBlockDevice): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
      device_name: cdktf.stringToTerraform(struct!.deviceName),
      encrypted: cdktf.booleanToTerraform(struct!.encrypted),
      iops: cdktf.numberToTerraform(struct!.iops),
      kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
      snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
      throughput: cdktf.numberToTerraform(struct!.throughput),
      volume_size: cdktf.numberToTerraform(struct!.volumeSize),
      volume_type: cdktf.stringToTerraform(struct!.volumeType),
    }
  }

  export interface InstanceEnclaveOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#enabled Instance#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
  }

  function instanceEnclaveOptionsToTerraform(struct?: InstanceEnclaveOptionsOutputReference | InstanceEnclaveOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
    }
  }

  export class InstanceEnclaveOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }
  }
  export interface InstanceEphemeralBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#device_name Instance#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#no_device Instance#no_device}
    */
    readonly noDevice?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#virtual_name Instance#virtual_name}
    */
    readonly virtualName?: string;
  }

  function instanceEphemeralBlockDeviceToTerraform(struct?: InstanceEphemeralBlockDevice): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      device_name: cdktf.stringToTerraform(struct!.deviceName),
      no_device: cdktf.booleanToTerraform(struct!.noDevice),
      virtual_name: cdktf.stringToTerraform(struct!.virtualName),
    }
  }

  export interface InstanceLaunchTemplate {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#id Instance#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#name Instance#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#version Instance#version}
    */
    readonly version?: string;
  }

  function instanceLaunchTemplateToTerraform(struct?: InstanceLaunchTemplateOutputReference | InstanceLaunchTemplate): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      version: cdktf.stringToTerraform(struct!.version),
    }
  }

  export class InstanceLaunchTemplateOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // version - computed: false, optional: true, required: false
    private _version?: string | undefined; 
    public get version() {
      return this.getStringAttribute('version');
    }
    public set version(value: string | undefined) {
      this._version = value;
    }
    public resetVersion() {
      this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
      return this._version
    }
  }
  export interface InstanceMetadataOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#http_endpoint Instance#http_endpoint}
    */
    readonly httpEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#http_put_response_hop_limit Instance#http_put_response_hop_limit}
    */
    readonly httpPutResponseHopLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#http_tokens Instance#http_tokens}
    */
    readonly httpTokens?: string;
  }

  function instanceMetadataOptionsToTerraform(struct?: InstanceMetadataOptionsOutputReference | InstanceMetadataOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      http_endpoint: cdktf.stringToTerraform(struct!.httpEndpoint),
      http_put_response_hop_limit: cdktf.numberToTerraform(struct!.httpPutResponseHopLimit),
      http_tokens: cdktf.stringToTerraform(struct!.httpTokens),
    }
  }

  export class InstanceMetadataOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // http_endpoint - computed: true, optional: true, required: false
    private _httpEndpoint?: string | undefined; 
    public get httpEndpoint() {
      return this.getStringAttribute('http_endpoint');
    }
    public set httpEndpoint(value: string | undefined) {
      this._httpEndpoint = value;
    }
    public resetHttpEndpoint() {
      this._httpEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpEndpointInput() {
      return this._httpEndpoint
    }

    // http_put_response_hop_limit - computed: true, optional: true, required: false
    private _httpPutResponseHopLimit?: number | undefined; 
    public get httpPutResponseHopLimit() {
      return this.getNumberAttribute('http_put_response_hop_limit');
    }
    public set httpPutResponseHopLimit(value: number | undefined) {
      this._httpPutResponseHopLimit = value;
    }
    public resetHttpPutResponseHopLimit() {
      this._httpPutResponseHopLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpPutResponseHopLimitInput() {
      return this._httpPutResponseHopLimit
    }

    // http_tokens - computed: true, optional: true, required: false
    private _httpTokens?: string | undefined; 
    public get httpTokens() {
      return this.getStringAttribute('http_tokens');
    }
    public set httpTokens(value: string | undefined) {
      this._httpTokens = value;
    }
    public resetHttpTokens() {
      this._httpTokens = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpTokensInput() {
      return this._httpTokens
    }
  }
  export interface InstanceNetworkInterface {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#delete_on_termination Instance#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#device_index Instance#device_index}
    */
    readonly deviceIndex: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#network_interface_id Instance#network_interface_id}
    */
    readonly networkInterfaceId: string;
  }

  function instanceNetworkInterfaceToTerraform(struct?: InstanceNetworkInterface): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
      device_index: cdktf.numberToTerraform(struct!.deviceIndex),
      network_interface_id: cdktf.stringToTerraform(struct!.networkInterfaceId),
    }
  }

  export interface InstanceRootBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#delete_on_termination Instance#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#encrypted Instance#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#iops Instance#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#kms_key_id Instance#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#tags Instance#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#throughput Instance#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#volume_size Instance#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#volume_type Instance#volume_type}
    */
    readonly volumeType?: string;
  }

  function instanceRootBlockDeviceToTerraform(struct?: InstanceRootBlockDeviceOutputReference | InstanceRootBlockDevice): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
      encrypted: cdktf.booleanToTerraform(struct!.encrypted),
      iops: cdktf.numberToTerraform(struct!.iops),
      kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
      throughput: cdktf.numberToTerraform(struct!.throughput),
      volume_size: cdktf.numberToTerraform(struct!.volumeSize),
      volume_type: cdktf.stringToTerraform(struct!.volumeType),
    }
  }

  export class InstanceRootBlockDeviceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // delete_on_termination - computed: false, optional: true, required: false
    private _deleteOnTermination?: boolean | cdktf.IResolvable | undefined; 
    public get deleteOnTermination() {
      return this.getBooleanAttribute('delete_on_termination') as any;
    }
    public set deleteOnTermination(value: boolean | cdktf.IResolvable | undefined) {
      this._deleteOnTermination = value;
    }
    public resetDeleteOnTermination() {
      this._deleteOnTermination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteOnTerminationInput() {
      return this._deleteOnTermination
    }

    // encrypted - computed: true, optional: true, required: false
    private _encrypted?: boolean | cdktf.IResolvable | undefined; 
    public get encrypted() {
      return this.getBooleanAttribute('encrypted') as any;
    }
    public set encrypted(value: boolean | cdktf.IResolvable | undefined) {
      this._encrypted = value;
    }
    public resetEncrypted() {
      this._encrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptedInput() {
      return this._encrypted
    }

    // iops - computed: true, optional: true, required: false
    private _iops?: number | undefined; 
    public get iops() {
      return this.getNumberAttribute('iops');
    }
    public set iops(value: number | undefined) {
      this._iops = value;
    }
    public resetIops() {
      this._iops = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iopsInput() {
      return this._iops
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // throughput - computed: true, optional: true, required: false
    private _throughput?: number | undefined; 
    public get throughput() {
      return this.getNumberAttribute('throughput');
    }
    public set throughput(value: number | undefined) {
      this._throughput = value;
    }
    public resetThroughput() {
      this._throughput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throughputInput() {
      return this._throughput
    }

    // volume_size - computed: true, optional: true, required: false
    private _volumeSize?: number | undefined; 
    public get volumeSize() {
      return this.getNumberAttribute('volume_size');
    }
    public set volumeSize(value: number | undefined) {
      this._volumeSize = value;
    }
    public resetVolumeSize() {
      this._volumeSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeSizeInput() {
      return this._volumeSize
    }

    // volume_type - computed: true, optional: true, required: false
    private _volumeType?: string | undefined; 
    public get volumeType() {
      return this.getStringAttribute('volume_type');
    }
    public set volumeType(value: string | undefined) {
      this._volumeType = value;
    }
    public resetVolumeType() {
      this._volumeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeTypeInput() {
      return this._volumeType
    }
  }
  export interface InstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#create Instance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#delete Instance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#update Instance#update}
    */
    readonly update?: string;
  }

  function instanceTimeoutsToTerraform(struct?: InstanceTimeoutsOutputReference | InstanceTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class InstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/instance.html aws_instance}
  */
  export class Instance extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_instance";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/instance.html aws_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options InstanceConfig = {}
    */
    public constructor(scope: Construct, id: string, config: InstanceConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_instance',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._ami = config.ami;
      this._associatePublicIpAddress = config.associatePublicIpAddress;
      this._availabilityZone = config.availabilityZone;
      this._cpuCoreCount = config.cpuCoreCount;
      this._cpuThreadsPerCore = config.cpuThreadsPerCore;
      this._disableApiTermination = config.disableApiTermination;
      this._ebsOptimized = config.ebsOptimized;
      this._getPasswordData = config.fetchPasswordData;
      this._hibernation = config.hibernation;
      this._hostId = config.hostId;
      this._iamInstanceProfile = config.iamInstanceProfile;
      this._instanceInitiatedShutdownBehavior = config.instanceInitiatedShutdownBehavior;
      this._instanceType = config.instanceType;
      this._ipv6AddressCount = config.ipv6AddressCount;
      this._ipv6Addresses = config.ipv6Addresses;
      this._keyName = config.keyName;
      this._monitoring = config.monitoring;
      this._placementGroup = config.placementGroup;
      this._placementPartitionNumber = config.placementPartitionNumber;
      this._privateIp = config.privateIp;
      this._secondaryPrivateIps = config.secondaryPrivateIps;
      this._securityGroups = config.securityGroups;
      this._sourceDestCheck = config.sourceDestCheck;
      this._subnetId = config.subnetId;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._tenancy = config.tenancy;
      this._userData = config.userData;
      this._userDataBase64 = config.userDataBase64;
      this._volumeTags = config.volumeTags;
      this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
      this._capacityReservationSpecification = config.capacityReservationSpecification;
      this._creditSpecification = config.creditSpecification;
      this._ebsBlockDevice = config.ebsBlockDevice;
      this._enclaveOptions = config.enclaveOptions;
      this._ephemeralBlockDevice = config.ephemeralBlockDevice;
      this._launchTemplate = config.launchTemplate;
      this._metadataOptions = config.metadataOptions;
      this._networkInterface = config.networkInterface;
      this._rootBlockDevice = config.rootBlockDevice;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // ami - computed: true, optional: true, required: false
    private _ami?: string | undefined; 
    public get ami() {
      return this.getStringAttribute('ami');
    }
    public set ami(value: string | undefined) {
      this._ami = value;
    }
    public resetAmi() {
      this._ami = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amiInput() {
      return this._ami
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // associate_public_ip_address - computed: true, optional: true, required: false
    private _associatePublicIpAddress?: boolean | cdktf.IResolvable | undefined; 
    public get associatePublicIpAddress() {
      return this.getBooleanAttribute('associate_public_ip_address') as any;
    }
    public set associatePublicIpAddress(value: boolean | cdktf.IResolvable | undefined) {
      this._associatePublicIpAddress = value;
    }
    public resetAssociatePublicIpAddress() {
      this._associatePublicIpAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associatePublicIpAddressInput() {
      return this._associatePublicIpAddress
    }

    // availability_zone - computed: true, optional: true, required: false
    private _availabilityZone?: string | undefined; 
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string | undefined) {
      this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
      this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
      return this._availabilityZone
    }

    // cpu_core_count - computed: true, optional: true, required: false
    private _cpuCoreCount?: number | undefined; 
    public get cpuCoreCount() {
      return this.getNumberAttribute('cpu_core_count');
    }
    public set cpuCoreCount(value: number | undefined) {
      this._cpuCoreCount = value;
    }
    public resetCpuCoreCount() {
      this._cpuCoreCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuCoreCountInput() {
      return this._cpuCoreCount
    }

    // cpu_threads_per_core - computed: true, optional: true, required: false
    private _cpuThreadsPerCore?: number | undefined; 
    public get cpuThreadsPerCore() {
      return this.getNumberAttribute('cpu_threads_per_core');
    }
    public set cpuThreadsPerCore(value: number | undefined) {
      this._cpuThreadsPerCore = value;
    }
    public resetCpuThreadsPerCore() {
      this._cpuThreadsPerCore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuThreadsPerCoreInput() {
      return this._cpuThreadsPerCore
    }

    // disable_api_termination - computed: true, optional: true, required: false
    private _disableApiTermination?: boolean | cdktf.IResolvable | undefined; 
    public get disableApiTermination() {
      return this.getBooleanAttribute('disable_api_termination') as any;
    }
    public set disableApiTermination(value: boolean | cdktf.IResolvable | undefined) {
      this._disableApiTermination = value;
    }
    public resetDisableApiTermination() {
      this._disableApiTermination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableApiTerminationInput() {
      return this._disableApiTermination
    }

    // ebs_optimized - computed: true, optional: true, required: false
    private _ebsOptimized?: boolean | cdktf.IResolvable | undefined; 
    public get ebsOptimized() {
      return this.getBooleanAttribute('ebs_optimized') as any;
    }
    public set ebsOptimized(value: boolean | cdktf.IResolvable | undefined) {
      this._ebsOptimized = value;
    }
    public resetEbsOptimized() {
      this._ebsOptimized = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsOptimizedInput() {
      return this._ebsOptimized
    }

    // get_password_data - computed: false, optional: true, required: false
    private _getPasswordData?: boolean | cdktf.IResolvable | undefined; 
    public get fetchPasswordData() {
      return this.getBooleanAttribute('get_password_data') as any;
    }
    public set fetchPasswordData(value: boolean | cdktf.IResolvable | undefined) {
      this._getPasswordData = value;
    }
    public resetFetchPasswordData() {
      this._getPasswordData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fetchPasswordDataInput() {
      return this._getPasswordData
    }

    // hibernation - computed: false, optional: true, required: false
    private _hibernation?: boolean | cdktf.IResolvable | undefined; 
    public get hibernation() {
      return this.getBooleanAttribute('hibernation') as any;
    }
    public set hibernation(value: boolean | cdktf.IResolvable | undefined) {
      this._hibernation = value;
    }
    public resetHibernation() {
      this._hibernation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hibernationInput() {
      return this._hibernation
    }

    // host_id - computed: true, optional: true, required: false
    private _hostId?: string | undefined; 
    public get hostId() {
      return this.getStringAttribute('host_id');
    }
    public set hostId(value: string | undefined) {
      this._hostId = value;
    }
    public resetHostId() {
      this._hostId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostIdInput() {
      return this._hostId
    }

    // iam_instance_profile - computed: false, optional: true, required: false
    private _iamInstanceProfile?: string | undefined; 
    public get iamInstanceProfile() {
      return this.getStringAttribute('iam_instance_profile');
    }
    public set iamInstanceProfile(value: string | undefined) {
      this._iamInstanceProfile = value;
    }
    public resetIamInstanceProfile() {
      this._iamInstanceProfile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamInstanceProfileInput() {
      return this._iamInstanceProfile
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_initiated_shutdown_behavior - computed: true, optional: true, required: false
    private _instanceInitiatedShutdownBehavior?: string | undefined; 
    public get instanceInitiatedShutdownBehavior() {
      return this.getStringAttribute('instance_initiated_shutdown_behavior');
    }
    public set instanceInitiatedShutdownBehavior(value: string | undefined) {
      this._instanceInitiatedShutdownBehavior = value;
    }
    public resetInstanceInitiatedShutdownBehavior() {
      this._instanceInitiatedShutdownBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceInitiatedShutdownBehaviorInput() {
      return this._instanceInitiatedShutdownBehavior
    }

    // instance_state - computed: true, optional: false, required: false
    public get instanceState() {
      return this.getStringAttribute('instance_state');
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string | undefined; 
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string | undefined) {
      this._instanceType = value;
    }
    public resetInstanceType() {
      this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
      return this._instanceType
    }

    // ipv6_address_count - computed: true, optional: true, required: false
    private _ipv6AddressCount?: number | undefined; 
    public get ipv6AddressCount() {
      return this.getNumberAttribute('ipv6_address_count');
    }
    public set ipv6AddressCount(value: number | undefined) {
      this._ipv6AddressCount = value;
    }
    public resetIpv6AddressCount() {
      this._ipv6AddressCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6AddressCountInput() {
      return this._ipv6AddressCount
    }

    // ipv6_addresses - computed: true, optional: true, required: false
    private _ipv6Addresses?: string[] | undefined; 
    public get ipv6Addresses() {
      return this.getListAttribute('ipv6_addresses');
    }
    public set ipv6Addresses(value: string[] | undefined) {
      this._ipv6Addresses = value;
    }
    public resetIpv6Addresses() {
      this._ipv6Addresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6AddressesInput() {
      return this._ipv6Addresses
    }

    // key_name - computed: true, optional: true, required: false
    private _keyName?: string | undefined; 
    public get keyName() {
      return this.getStringAttribute('key_name');
    }
    public set keyName(value: string | undefined) {
      this._keyName = value;
    }
    public resetKeyName() {
      this._keyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyNameInput() {
      return this._keyName
    }

    // monitoring - computed: true, optional: true, required: false
    private _monitoring?: boolean | cdktf.IResolvable | undefined; 
    public get monitoring() {
      return this.getBooleanAttribute('monitoring') as any;
    }
    public set monitoring(value: boolean | cdktf.IResolvable | undefined) {
      this._monitoring = value;
    }
    public resetMonitoring() {
      this._monitoring = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringInput() {
      return this._monitoring
    }

    // outpost_arn - computed: true, optional: false, required: false
    public get outpostArn() {
      return this.getStringAttribute('outpost_arn');
    }

    // password_data - computed: true, optional: false, required: false
    public get passwordData() {
      return this.getStringAttribute('password_data');
    }

    // placement_group - computed: true, optional: true, required: false
    private _placementGroup?: string | undefined; 
    public get placementGroup() {
      return this.getStringAttribute('placement_group');
    }
    public set placementGroup(value: string | undefined) {
      this._placementGroup = value;
    }
    public resetPlacementGroup() {
      this._placementGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementGroupInput() {
      return this._placementGroup
    }

    // placement_partition_number - computed: true, optional: true, required: false
    private _placementPartitionNumber?: number | undefined; 
    public get placementPartitionNumber() {
      return this.getNumberAttribute('placement_partition_number');
    }
    public set placementPartitionNumber(value: number | undefined) {
      this._placementPartitionNumber = value;
    }
    public resetPlacementPartitionNumber() {
      this._placementPartitionNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementPartitionNumberInput() {
      return this._placementPartitionNumber
    }

    // primary_network_interface_id - computed: true, optional: false, required: false
    public get primaryNetworkInterfaceId() {
      return this.getStringAttribute('primary_network_interface_id');
    }

    // private_dns - computed: true, optional: false, required: false
    public get privateDns() {
      return this.getStringAttribute('private_dns');
    }

    // private_ip - computed: true, optional: true, required: false
    private _privateIp?: string | undefined; 
    public get privateIp() {
      return this.getStringAttribute('private_ip');
    }
    public set privateIp(value: string | undefined) {
      this._privateIp = value;
    }
    public resetPrivateIp() {
      this._privateIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateIpInput() {
      return this._privateIp
    }

    // public_dns - computed: true, optional: false, required: false
    public get publicDns() {
      return this.getStringAttribute('public_dns');
    }

    // public_ip - computed: true, optional: false, required: false
    public get publicIp() {
      return this.getStringAttribute('public_ip');
    }

    // secondary_private_ips - computed: true, optional: true, required: false
    private _secondaryPrivateIps?: string[] | undefined; 
    public get secondaryPrivateIps() {
      return this.getListAttribute('secondary_private_ips');
    }
    public set secondaryPrivateIps(value: string[] | undefined) {
      this._secondaryPrivateIps = value;
    }
    public resetSecondaryPrivateIps() {
      this._secondaryPrivateIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondaryPrivateIpsInput() {
      return this._secondaryPrivateIps
    }

    // security_groups - computed: true, optional: true, required: false
    private _securityGroups?: string[] | undefined; 
    public get securityGroups() {
      return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[] | undefined) {
      this._securityGroups = value;
    }
    public resetSecurityGroups() {
      this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
      return this._securityGroups
    }

    // source_dest_check - computed: false, optional: true, required: false
    private _sourceDestCheck?: boolean | cdktf.IResolvable | undefined; 
    public get sourceDestCheck() {
      return this.getBooleanAttribute('source_dest_check') as any;
    }
    public set sourceDestCheck(value: boolean | cdktf.IResolvable | undefined) {
      this._sourceDestCheck = value;
    }
    public resetSourceDestCheck() {
      this._sourceDestCheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceDestCheckInput() {
      return this._sourceDestCheck
    }

    // subnet_id - computed: true, optional: true, required: false
    private _subnetId?: string | undefined; 
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string | undefined) {
      this._subnetId = value;
    }
    public resetSubnetId() {
      this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
      return this._subnetId
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // tenancy - computed: true, optional: true, required: false
    private _tenancy?: string | undefined; 
    public get tenancy() {
      return this.getStringAttribute('tenancy');
    }
    public set tenancy(value: string | undefined) {
      this._tenancy = value;
    }
    public resetTenancy() {
      this._tenancy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tenancyInput() {
      return this._tenancy
    }

    // user_data - computed: true, optional: true, required: false
    private _userData?: string | undefined; 
    public get userData() {
      return this.getStringAttribute('user_data');
    }
    public set userData(value: string | undefined) {
      this._userData = value;
    }
    public resetUserData() {
      this._userData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userDataInput() {
      return this._userData
    }

    // user_data_base64 - computed: true, optional: true, required: false
    private _userDataBase64?: string | undefined; 
    public get userDataBase64() {
      return this.getStringAttribute('user_data_base64');
    }
    public set userDataBase64(value: string | undefined) {
      this._userDataBase64 = value;
    }
    public resetUserDataBase64() {
      this._userDataBase64 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userDataBase64Input() {
      return this._userDataBase64
    }

    // volume_tags - computed: false, optional: true, required: false
    private _volumeTags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get volumeTags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('volume_tags') as any;
    }
    public set volumeTags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._volumeTags = value;
    }
    public resetVolumeTags() {
      this._volumeTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeTagsInput() {
      return this._volumeTags
    }

    // vpc_security_group_ids - computed: true, optional: true, required: false
    private _vpcSecurityGroupIds?: string[] | undefined; 
    public get vpcSecurityGroupIds() {
      return this.getListAttribute('vpc_security_group_ids');
    }
    public set vpcSecurityGroupIds(value: string[] | undefined) {
      this._vpcSecurityGroupIds = value;
    }
    public resetVpcSecurityGroupIds() {
      this._vpcSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcSecurityGroupIdsInput() {
      return this._vpcSecurityGroupIds
    }

    // capacity_reservation_specification - computed: false, optional: true, required: false
    private _capacityReservationSpecification?: InstanceCapacityReservationSpecification | undefined; 
    private __capacityReservationSpecificationOutput = new InstanceCapacityReservationSpecificationOutputReference(this as any, "capacity_reservation_specification", true);
    public get capacityReservationSpecification() {
      return this.__capacityReservationSpecificationOutput;
    }
    public putCapacityReservationSpecification(value: InstanceCapacityReservationSpecification | undefined) {
      this._capacityReservationSpecification = value;
    }
    public resetCapacityReservationSpecification() {
      this._capacityReservationSpecification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationSpecificationInput() {
      return this._capacityReservationSpecification
    }

    // credit_specification - computed: false, optional: true, required: false
    private _creditSpecification?: InstanceCreditSpecification | undefined; 
    private __creditSpecificationOutput = new InstanceCreditSpecificationOutputReference(this as any, "credit_specification", true);
    public get creditSpecification() {
      return this.__creditSpecificationOutput;
    }
    public putCreditSpecification(value: InstanceCreditSpecification | undefined) {
      this._creditSpecification = value;
    }
    public resetCreditSpecification() {
      this._creditSpecification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get creditSpecificationInput() {
      return this._creditSpecification
    }

    // ebs_block_device - computed: false, optional: true, required: false
    private _ebsBlockDevice?: InstanceEbsBlockDevice[] | undefined; 
    public get ebsBlockDevice() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ebs_block_device') as any;
    }
    public set ebsBlockDevice(value: InstanceEbsBlockDevice[] | undefined) {
      this._ebsBlockDevice = value;
    }
    public resetEbsBlockDevice() {
      this._ebsBlockDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsBlockDeviceInput() {
      return this._ebsBlockDevice
    }

    // enclave_options - computed: false, optional: true, required: false
    private _enclaveOptions?: InstanceEnclaveOptions | undefined; 
    private __enclaveOptionsOutput = new InstanceEnclaveOptionsOutputReference(this as any, "enclave_options", true);
    public get enclaveOptions() {
      return this.__enclaveOptionsOutput;
    }
    public putEnclaveOptions(value: InstanceEnclaveOptions | undefined) {
      this._enclaveOptions = value;
    }
    public resetEnclaveOptions() {
      this._enclaveOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enclaveOptionsInput() {
      return this._enclaveOptions
    }

    // ephemeral_block_device - computed: false, optional: true, required: false
    private _ephemeralBlockDevice?: InstanceEphemeralBlockDevice[] | undefined; 
    public get ephemeralBlockDevice() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ephemeral_block_device') as any;
    }
    public set ephemeralBlockDevice(value: InstanceEphemeralBlockDevice[] | undefined) {
      this._ephemeralBlockDevice = value;
    }
    public resetEphemeralBlockDevice() {
      this._ephemeralBlockDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ephemeralBlockDeviceInput() {
      return this._ephemeralBlockDevice
    }

    // launch_template - computed: false, optional: true, required: false
    private _launchTemplate?: InstanceLaunchTemplate | undefined; 
    private __launchTemplateOutput = new InstanceLaunchTemplateOutputReference(this as any, "launch_template", true);
    public get launchTemplate() {
      return this.__launchTemplateOutput;
    }
    public putLaunchTemplate(value: InstanceLaunchTemplate | undefined) {
      this._launchTemplate = value;
    }
    public resetLaunchTemplate() {
      this._launchTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateInput() {
      return this._launchTemplate
    }

    // metadata_options - computed: false, optional: true, required: false
    private _metadataOptions?: InstanceMetadataOptions | undefined; 
    private __metadataOptionsOutput = new InstanceMetadataOptionsOutputReference(this as any, "metadata_options", true);
    public get metadataOptions() {
      return this.__metadataOptionsOutput;
    }
    public putMetadataOptions(value: InstanceMetadataOptions | undefined) {
      this._metadataOptions = value;
    }
    public resetMetadataOptions() {
      this._metadataOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataOptionsInput() {
      return this._metadataOptions
    }

    // network_interface - computed: false, optional: true, required: false
    private _networkInterface?: InstanceNetworkInterface[] | undefined; 
    public get networkInterface() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('network_interface') as any;
    }
    public set networkInterface(value: InstanceNetworkInterface[] | undefined) {
      this._networkInterface = value;
    }
    public resetNetworkInterface() {
      this._networkInterface = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceInput() {
      return this._networkInterface
    }

    // root_block_device - computed: false, optional: true, required: false
    private _rootBlockDevice?: InstanceRootBlockDevice | undefined; 
    private __rootBlockDeviceOutput = new InstanceRootBlockDeviceOutputReference(this as any, "root_block_device", true);
    public get rootBlockDevice() {
      return this.__rootBlockDeviceOutput;
    }
    public putRootBlockDevice(value: InstanceRootBlockDevice | undefined) {
      this._rootBlockDevice = value;
    }
    public resetRootBlockDevice() {
      this._rootBlockDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rootBlockDeviceInput() {
      return this._rootBlockDevice
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: InstanceTimeouts | undefined; 
    private __timeoutsOutput = new InstanceTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: InstanceTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        ami: cdktf.stringToTerraform(this._ami),
        associate_public_ip_address: cdktf.booleanToTerraform(this._associatePublicIpAddress),
        availability_zone: cdktf.stringToTerraform(this._availabilityZone),
        cpu_core_count: cdktf.numberToTerraform(this._cpuCoreCount),
        cpu_threads_per_core: cdktf.numberToTerraform(this._cpuThreadsPerCore),
        disable_api_termination: cdktf.booleanToTerraform(this._disableApiTermination),
        ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
        get_password_data: cdktf.booleanToTerraform(this._getPasswordData),
        hibernation: cdktf.booleanToTerraform(this._hibernation),
        host_id: cdktf.stringToTerraform(this._hostId),
        iam_instance_profile: cdktf.stringToTerraform(this._iamInstanceProfile),
        instance_initiated_shutdown_behavior: cdktf.stringToTerraform(this._instanceInitiatedShutdownBehavior),
        instance_type: cdktf.stringToTerraform(this._instanceType),
        ipv6_address_count: cdktf.numberToTerraform(this._ipv6AddressCount),
        ipv6_addresses: cdktf.listMapper(cdktf.stringToTerraform)(this._ipv6Addresses),
        key_name: cdktf.stringToTerraform(this._keyName),
        monitoring: cdktf.booleanToTerraform(this._monitoring),
        placement_group: cdktf.stringToTerraform(this._placementGroup),
        placement_partition_number: cdktf.numberToTerraform(this._placementPartitionNumber),
        private_ip: cdktf.stringToTerraform(this._privateIp),
        secondary_private_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._secondaryPrivateIps),
        security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
        source_dest_check: cdktf.booleanToTerraform(this._sourceDestCheck),
        subnet_id: cdktf.stringToTerraform(this._subnetId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        tenancy: cdktf.stringToTerraform(this._tenancy),
        user_data: cdktf.stringToTerraform(this._userData),
        user_data_base64: cdktf.stringToTerraform(this._userDataBase64),
        volume_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._volumeTags),
        vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
        capacity_reservation_specification: instanceCapacityReservationSpecificationToTerraform(this._capacityReservationSpecification),
        credit_specification: instanceCreditSpecificationToTerraform(this._creditSpecification),
        ebs_block_device: cdktf.listMapper(instanceEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
        enclave_options: instanceEnclaveOptionsToTerraform(this._enclaveOptions),
        ephemeral_block_device: cdktf.listMapper(instanceEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
        launch_template: instanceLaunchTemplateToTerraform(this._launchTemplate),
        metadata_options: instanceMetadataOptionsToTerraform(this._metadataOptions),
        network_interface: cdktf.listMapper(instanceNetworkInterfaceToTerraform)(this._networkInterface),
        root_block_device: instanceRootBlockDeviceToTerraform(this._rootBlockDevice),
        timeouts: instanceTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface KeyPairConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/key_pair.html#key_name KeyPair#key_name}
    */
    readonly keyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/key_pair.html#key_name_prefix KeyPair#key_name_prefix}
    */
    readonly keyNamePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/key_pair.html#public_key KeyPair#public_key}
    */
    readonly publicKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/key_pair.html#tags KeyPair#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/key_pair.html#tags_all KeyPair#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/key_pair.html aws_key_pair}
  */
  export class KeyPair extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_key_pair";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/key_pair.html aws_key_pair} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KeyPairConfig
    */
    public constructor(scope: Construct, id: string, config: KeyPairConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_key_pair',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._keyName = config.keyName;
      this._keyNamePrefix = config.keyNamePrefix;
      this._publicKey = config.publicKey;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // fingerprint - computed: true, optional: false, required: false
    public get fingerprint() {
      return this.getStringAttribute('fingerprint');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // key_name - computed: true, optional: true, required: false
    private _keyName?: string | undefined; 
    public get keyName() {
      return this.getStringAttribute('key_name');
    }
    public set keyName(value: string | undefined) {
      this._keyName = value;
    }
    public resetKeyName() {
      this._keyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyNameInput() {
      return this._keyName
    }

    // key_name_prefix - computed: false, optional: true, required: false
    private _keyNamePrefix?: string | undefined; 
    public get keyNamePrefix() {
      return this.getStringAttribute('key_name_prefix');
    }
    public set keyNamePrefix(value: string | undefined) {
      this._keyNamePrefix = value;
    }
    public resetKeyNamePrefix() {
      this._keyNamePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyNamePrefixInput() {
      return this._keyNamePrefix
    }

    // key_pair_id - computed: true, optional: false, required: false
    public get keyPairId() {
      return this.getStringAttribute('key_pair_id');
    }

    // public_key - computed: false, optional: false, required: true
    private _publicKey?: string; 
    public get publicKey() {
      return this.getStringAttribute('public_key');
    }
    public set publicKey(value: string) {
      this._publicKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get publicKeyInput() {
      return this._publicKey
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        key_name: cdktf.stringToTerraform(this._keyName),
        key_name_prefix: cdktf.stringToTerraform(this._keyNamePrefix),
        public_key: cdktf.stringToTerraform(this._publicKey),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface LaunchTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#default_version LaunchTemplate#default_version}
    */
    readonly defaultVersion?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#description LaunchTemplate#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#disable_api_termination LaunchTemplate#disable_api_termination}
    */
    readonly disableApiTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ebs_optimized LaunchTemplate#ebs_optimized}
    */
    readonly ebsOptimized?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#image_id LaunchTemplate#image_id}
    */
    readonly imageId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#instance_initiated_shutdown_behavior LaunchTemplate#instance_initiated_shutdown_behavior}
    */
    readonly instanceInitiatedShutdownBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#instance_type LaunchTemplate#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#kernel_id LaunchTemplate#kernel_id}
    */
    readonly kernelId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#key_name LaunchTemplate#key_name}
    */
    readonly keyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#name LaunchTemplate#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#name_prefix LaunchTemplate#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ram_disk_id LaunchTemplate#ram_disk_id}
    */
    readonly ramDiskId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#security_group_names LaunchTemplate#security_group_names}
    */
    readonly securityGroupNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#tags LaunchTemplate#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#tags_all LaunchTemplate#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#update_default_version LaunchTemplate#update_default_version}
    */
    readonly updateDefaultVersion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#user_data LaunchTemplate#user_data}
    */
    readonly userData?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#vpc_security_group_ids LaunchTemplate#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * block_device_mappings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#block_device_mappings LaunchTemplate#block_device_mappings}
    */
    readonly blockDeviceMappings?: LaunchTemplateBlockDeviceMappings[];
    /**
    * capacity_reservation_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#capacity_reservation_specification LaunchTemplate#capacity_reservation_specification}
    */
    readonly capacityReservationSpecification?: LaunchTemplateCapacityReservationSpecification;
    /**
    * cpu_options block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#cpu_options LaunchTemplate#cpu_options}
    */
    readonly cpuOptions?: LaunchTemplateCpuOptions;
    /**
    * credit_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#credit_specification LaunchTemplate#credit_specification}
    */
    readonly creditSpecification?: LaunchTemplateCreditSpecification;
    /**
    * elastic_gpu_specifications block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#elastic_gpu_specifications LaunchTemplate#elastic_gpu_specifications}
    */
    readonly elasticGpuSpecifications?: LaunchTemplateElasticGpuSpecifications[];
    /**
    * elastic_inference_accelerator block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#elastic_inference_accelerator LaunchTemplate#elastic_inference_accelerator}
    */
    readonly elasticInferenceAccelerator?: LaunchTemplateElasticInferenceAccelerator;
    /**
    * enclave_options block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#enclave_options LaunchTemplate#enclave_options}
    */
    readonly enclaveOptions?: LaunchTemplateEnclaveOptions;
    /**
    * hibernation_options block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#hibernation_options LaunchTemplate#hibernation_options}
    */
    readonly hibernationOptions?: LaunchTemplateHibernationOptions;
    /**
    * iam_instance_profile block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#iam_instance_profile LaunchTemplate#iam_instance_profile}
    */
    readonly iamInstanceProfile?: LaunchTemplateIamInstanceProfile;
    /**
    * instance_market_options block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#instance_market_options LaunchTemplate#instance_market_options}
    */
    readonly instanceMarketOptions?: LaunchTemplateInstanceMarketOptions;
    /**
    * license_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#license_specification LaunchTemplate#license_specification}
    */
    readonly licenseSpecification?: LaunchTemplateLicenseSpecification[];
    /**
    * metadata_options block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#metadata_options LaunchTemplate#metadata_options}
    */
    readonly metadataOptions?: LaunchTemplateMetadataOptions;
    /**
    * monitoring block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#monitoring LaunchTemplate#monitoring}
    */
    readonly monitoring?: LaunchTemplateMonitoring;
    /**
    * network_interfaces block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#network_interfaces LaunchTemplate#network_interfaces}
    */
    readonly networkInterfaces?: LaunchTemplateNetworkInterfaces[];
    /**
    * placement block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#placement LaunchTemplate#placement}
    */
    readonly placement?: LaunchTemplatePlacement;
    /**
    * tag_specifications block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#tag_specifications LaunchTemplate#tag_specifications}
    */
    readonly tagSpecifications?: LaunchTemplateTagSpecifications[];
  }
  export interface LaunchTemplateBlockDeviceMappingsEbs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#delete_on_termination LaunchTemplate#delete_on_termination}
    */
    readonly deleteOnTermination?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#encrypted LaunchTemplate#encrypted}
    */
    readonly encrypted?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#iops LaunchTemplate#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#kms_key_id LaunchTemplate#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#snapshot_id LaunchTemplate#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#throughput LaunchTemplate#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#volume_size LaunchTemplate#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#volume_type LaunchTemplate#volume_type}
    */
    readonly volumeType?: string;
  }

  function launchTemplateBlockDeviceMappingsEbsToTerraform(struct?: LaunchTemplateBlockDeviceMappingsEbsOutputReference | LaunchTemplateBlockDeviceMappingsEbs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delete_on_termination: cdktf.stringToTerraform(struct!.deleteOnTermination),
      encrypted: cdktf.stringToTerraform(struct!.encrypted),
      iops: cdktf.numberToTerraform(struct!.iops),
      kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
      snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
      throughput: cdktf.numberToTerraform(struct!.throughput),
      volume_size: cdktf.numberToTerraform(struct!.volumeSize),
      volume_type: cdktf.stringToTerraform(struct!.volumeType),
    }
  }

  export class LaunchTemplateBlockDeviceMappingsEbsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // delete_on_termination - computed: false, optional: true, required: false
    private _deleteOnTermination?: string | undefined; 
    public get deleteOnTermination() {
      return this.getStringAttribute('delete_on_termination');
    }
    public set deleteOnTermination(value: string | undefined) {
      this._deleteOnTermination = value;
    }
    public resetDeleteOnTermination() {
      this._deleteOnTermination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteOnTerminationInput() {
      return this._deleteOnTermination
    }

    // encrypted - computed: false, optional: true, required: false
    private _encrypted?: string | undefined; 
    public get encrypted() {
      return this.getStringAttribute('encrypted');
    }
    public set encrypted(value: string | undefined) {
      this._encrypted = value;
    }
    public resetEncrypted() {
      this._encrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptedInput() {
      return this._encrypted
    }

    // iops - computed: true, optional: true, required: false
    private _iops?: number | undefined; 
    public get iops() {
      return this.getNumberAttribute('iops');
    }
    public set iops(value: number | undefined) {
      this._iops = value;
    }
    public resetIops() {
      this._iops = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iopsInput() {
      return this._iops
    }

    // kms_key_id - computed: false, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // snapshot_id - computed: false, optional: true, required: false
    private _snapshotId?: string | undefined; 
    public get snapshotId() {
      return this.getStringAttribute('snapshot_id');
    }
    public set snapshotId(value: string | undefined) {
      this._snapshotId = value;
    }
    public resetSnapshotId() {
      this._snapshotId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotIdInput() {
      return this._snapshotId
    }

    // throughput - computed: true, optional: true, required: false
    private _throughput?: number | undefined; 
    public get throughput() {
      return this.getNumberAttribute('throughput');
    }
    public set throughput(value: number | undefined) {
      this._throughput = value;
    }
    public resetThroughput() {
      this._throughput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throughputInput() {
      return this._throughput
    }

    // volume_size - computed: true, optional: true, required: false
    private _volumeSize?: number | undefined; 
    public get volumeSize() {
      return this.getNumberAttribute('volume_size');
    }
    public set volumeSize(value: number | undefined) {
      this._volumeSize = value;
    }
    public resetVolumeSize() {
      this._volumeSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeSizeInput() {
      return this._volumeSize
    }

    // volume_type - computed: true, optional: true, required: false
    private _volumeType?: string | undefined; 
    public get volumeType() {
      return this.getStringAttribute('volume_type');
    }
    public set volumeType(value: string | undefined) {
      this._volumeType = value;
    }
    public resetVolumeType() {
      this._volumeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeTypeInput() {
      return this._volumeType
    }
  }
  export interface LaunchTemplateBlockDeviceMappings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#device_name LaunchTemplate#device_name}
    */
    readonly deviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#no_device LaunchTemplate#no_device}
    */
    readonly noDevice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#virtual_name LaunchTemplate#virtual_name}
    */
    readonly virtualName?: string;
    /**
    * ebs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ebs LaunchTemplate#ebs}
    */
    readonly ebs?: LaunchTemplateBlockDeviceMappingsEbs;
  }

  function launchTemplateBlockDeviceMappingsToTerraform(struct?: LaunchTemplateBlockDeviceMappings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      device_name: cdktf.stringToTerraform(struct!.deviceName),
      no_device: cdktf.stringToTerraform(struct!.noDevice),
      virtual_name: cdktf.stringToTerraform(struct!.virtualName),
      ebs: launchTemplateBlockDeviceMappingsEbsToTerraform(struct!.ebs),
    }
  }

  export interface LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#capacity_reservation_id LaunchTemplate#capacity_reservation_id}
    */
    readonly capacityReservationId?: string;
  }

  function launchTemplateCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct?: LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference | LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      capacity_reservation_id: cdktf.stringToTerraform(struct!.capacityReservationId),
    }
  }

  export class LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // capacity_reservation_id - computed: false, optional: true, required: false
    private _capacityReservationId?: string | undefined; 
    public get capacityReservationId() {
      return this.getStringAttribute('capacity_reservation_id');
    }
    public set capacityReservationId(value: string | undefined) {
      this._capacityReservationId = value;
    }
    public resetCapacityReservationId() {
      this._capacityReservationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationIdInput() {
      return this._capacityReservationId
    }
  }
  export interface LaunchTemplateCapacityReservationSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#capacity_reservation_preference LaunchTemplate#capacity_reservation_preference}
    */
    readonly capacityReservationPreference?: string;
    /**
    * capacity_reservation_target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#capacity_reservation_target LaunchTemplate#capacity_reservation_target}
    */
    readonly capacityReservationTarget?: LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget;
  }

  function launchTemplateCapacityReservationSpecificationToTerraform(struct?: LaunchTemplateCapacityReservationSpecificationOutputReference | LaunchTemplateCapacityReservationSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      capacity_reservation_preference: cdktf.stringToTerraform(struct!.capacityReservationPreference),
      capacity_reservation_target: launchTemplateCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct!.capacityReservationTarget),
    }
  }

  export class LaunchTemplateCapacityReservationSpecificationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // capacity_reservation_preference - computed: false, optional: true, required: false
    private _capacityReservationPreference?: string | undefined; 
    public get capacityReservationPreference() {
      return this.getStringAttribute('capacity_reservation_preference');
    }
    public set capacityReservationPreference(value: string | undefined) {
      this._capacityReservationPreference = value;
    }
    public resetCapacityReservationPreference() {
      this._capacityReservationPreference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationPreferenceInput() {
      return this._capacityReservationPreference
    }

    // capacity_reservation_target - computed: false, optional: true, required: false
    private _capacityReservationTarget?: LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget | undefined; 
    private __capacityReservationTargetOutput = new LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference(this as any, "capacity_reservation_target", true);
    public get capacityReservationTarget() {
      return this.__capacityReservationTargetOutput;
    }
    public putCapacityReservationTarget(value: LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget | undefined) {
      this._capacityReservationTarget = value;
    }
    public resetCapacityReservationTarget() {
      this._capacityReservationTarget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationTargetInput() {
      return this._capacityReservationTarget
    }
  }
  export interface LaunchTemplateCpuOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#core_count LaunchTemplate#core_count}
    */
    readonly coreCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#threads_per_core LaunchTemplate#threads_per_core}
    */
    readonly threadsPerCore?: number;
  }

  function launchTemplateCpuOptionsToTerraform(struct?: LaunchTemplateCpuOptionsOutputReference | LaunchTemplateCpuOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      core_count: cdktf.numberToTerraform(struct!.coreCount),
      threads_per_core: cdktf.numberToTerraform(struct!.threadsPerCore),
    }
  }

  export class LaunchTemplateCpuOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // core_count - computed: false, optional: true, required: false
    private _coreCount?: number | undefined; 
    public get coreCount() {
      return this.getNumberAttribute('core_count');
    }
    public set coreCount(value: number | undefined) {
      this._coreCount = value;
    }
    public resetCoreCount() {
      this._coreCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get coreCountInput() {
      return this._coreCount
    }

    // threads_per_core - computed: false, optional: true, required: false
    private _threadsPerCore?: number | undefined; 
    public get threadsPerCore() {
      return this.getNumberAttribute('threads_per_core');
    }
    public set threadsPerCore(value: number | undefined) {
      this._threadsPerCore = value;
    }
    public resetThreadsPerCore() {
      this._threadsPerCore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get threadsPerCoreInput() {
      return this._threadsPerCore
    }
  }
  export interface LaunchTemplateCreditSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#cpu_credits LaunchTemplate#cpu_credits}
    */
    readonly cpuCredits?: string;
  }

  function launchTemplateCreditSpecificationToTerraform(struct?: LaunchTemplateCreditSpecificationOutputReference | LaunchTemplateCreditSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cpu_credits: cdktf.stringToTerraform(struct!.cpuCredits),
    }
  }

  export class LaunchTemplateCreditSpecificationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // cpu_credits - computed: false, optional: true, required: false
    private _cpuCredits?: string | undefined; 
    public get cpuCredits() {
      return this.getStringAttribute('cpu_credits');
    }
    public set cpuCredits(value: string | undefined) {
      this._cpuCredits = value;
    }
    public resetCpuCredits() {
      this._cpuCredits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuCreditsInput() {
      return this._cpuCredits
    }
  }
  export interface LaunchTemplateElasticGpuSpecifications {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#type LaunchTemplate#type}
    */
    readonly type: string;
  }

  function launchTemplateElasticGpuSpecificationsToTerraform(struct?: LaunchTemplateElasticGpuSpecifications): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface LaunchTemplateElasticInferenceAccelerator {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#type LaunchTemplate#type}
    */
    readonly type: string;
  }

  function launchTemplateElasticInferenceAcceleratorToTerraform(struct?: LaunchTemplateElasticInferenceAcceleratorOutputReference | LaunchTemplateElasticInferenceAccelerator): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export class LaunchTemplateElasticInferenceAcceleratorOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }
  }
  export interface LaunchTemplateEnclaveOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#enabled LaunchTemplate#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
  }

  function launchTemplateEnclaveOptionsToTerraform(struct?: LaunchTemplateEnclaveOptionsOutputReference | LaunchTemplateEnclaveOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
    }
  }

  export class LaunchTemplateEnclaveOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }
  }
  export interface LaunchTemplateHibernationOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#configured LaunchTemplate#configured}
    */
    readonly configured: boolean | cdktf.IResolvable;
  }

  function launchTemplateHibernationOptionsToTerraform(struct?: LaunchTemplateHibernationOptionsOutputReference | LaunchTemplateHibernationOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      configured: cdktf.booleanToTerraform(struct!.configured),
    }
  }

  export class LaunchTemplateHibernationOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // configured - computed: false, optional: false, required: true
    private _configured?: boolean | cdktf.IResolvable; 
    public get configured() {
      return this.getBooleanAttribute('configured') as any;
    }
    public set configured(value: boolean | cdktf.IResolvable) {
      this._configured = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configuredInput() {
      return this._configured
    }
  }
  export interface LaunchTemplateIamInstanceProfile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#arn LaunchTemplate#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#name LaunchTemplate#name}
    */
    readonly name?: string;
  }

  function launchTemplateIamInstanceProfileToTerraform(struct?: LaunchTemplateIamInstanceProfileOutputReference | LaunchTemplateIamInstanceProfile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      arn: cdktf.stringToTerraform(struct!.arn),
      name: cdktf.stringToTerraform(struct!.name),
    }
  }

  export class LaunchTemplateIamInstanceProfileOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // arn - computed: false, optional: true, required: false
    private _arn?: string | undefined; 
    public get arn() {
      return this.getStringAttribute('arn');
    }
    public set arn(value: string | undefined) {
      this._arn = value;
    }
    public resetArn() {
      this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
      return this._arn
    }

    // name - computed: false, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }
  }
  export interface LaunchTemplateInstanceMarketOptionsSpotOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#block_duration_minutes LaunchTemplate#block_duration_minutes}
    */
    readonly blockDurationMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#instance_interruption_behavior LaunchTemplate#instance_interruption_behavior}
    */
    readonly instanceInterruptionBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#max_price LaunchTemplate#max_price}
    */
    readonly maxPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#spot_instance_type LaunchTemplate#spot_instance_type}
    */
    readonly spotInstanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#valid_until LaunchTemplate#valid_until}
    */
    readonly validUntil?: string;
  }

  function launchTemplateInstanceMarketOptionsSpotOptionsToTerraform(struct?: LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference | LaunchTemplateInstanceMarketOptionsSpotOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      block_duration_minutes: cdktf.numberToTerraform(struct!.blockDurationMinutes),
      instance_interruption_behavior: cdktf.stringToTerraform(struct!.instanceInterruptionBehavior),
      max_price: cdktf.stringToTerraform(struct!.maxPrice),
      spot_instance_type: cdktf.stringToTerraform(struct!.spotInstanceType),
      valid_until: cdktf.stringToTerraform(struct!.validUntil),
    }
  }

  export class LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // block_duration_minutes - computed: false, optional: true, required: false
    private _blockDurationMinutes?: number | undefined; 
    public get blockDurationMinutes() {
      return this.getNumberAttribute('block_duration_minutes');
    }
    public set blockDurationMinutes(value: number | undefined) {
      this._blockDurationMinutes = value;
    }
    public resetBlockDurationMinutes() {
      this._blockDurationMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockDurationMinutesInput() {
      return this._blockDurationMinutes
    }

    // instance_interruption_behavior - computed: false, optional: true, required: false
    private _instanceInterruptionBehavior?: string | undefined; 
    public get instanceInterruptionBehavior() {
      return this.getStringAttribute('instance_interruption_behavior');
    }
    public set instanceInterruptionBehavior(value: string | undefined) {
      this._instanceInterruptionBehavior = value;
    }
    public resetInstanceInterruptionBehavior() {
      this._instanceInterruptionBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceInterruptionBehaviorInput() {
      return this._instanceInterruptionBehavior
    }

    // max_price - computed: false, optional: true, required: false
    private _maxPrice?: string | undefined; 
    public get maxPrice() {
      return this.getStringAttribute('max_price');
    }
    public set maxPrice(value: string | undefined) {
      this._maxPrice = value;
    }
    public resetMaxPrice() {
      this._maxPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxPriceInput() {
      return this._maxPrice
    }

    // spot_instance_type - computed: false, optional: true, required: false
    private _spotInstanceType?: string | undefined; 
    public get spotInstanceType() {
      return this.getStringAttribute('spot_instance_type');
    }
    public set spotInstanceType(value: string | undefined) {
      this._spotInstanceType = value;
    }
    public resetSpotInstanceType() {
      this._spotInstanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotInstanceTypeInput() {
      return this._spotInstanceType
    }

    // valid_until - computed: true, optional: true, required: false
    private _validUntil?: string | undefined; 
    public get validUntil() {
      return this.getStringAttribute('valid_until');
    }
    public set validUntil(value: string | undefined) {
      this._validUntil = value;
    }
    public resetValidUntil() {
      this._validUntil = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validUntilInput() {
      return this._validUntil
    }
  }
  export interface LaunchTemplateInstanceMarketOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#market_type LaunchTemplate#market_type}
    */
    readonly marketType?: string;
    /**
    * spot_options block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#spot_options LaunchTemplate#spot_options}
    */
    readonly spotOptions?: LaunchTemplateInstanceMarketOptionsSpotOptions;
  }

  function launchTemplateInstanceMarketOptionsToTerraform(struct?: LaunchTemplateInstanceMarketOptionsOutputReference | LaunchTemplateInstanceMarketOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      market_type: cdktf.stringToTerraform(struct!.marketType),
      spot_options: launchTemplateInstanceMarketOptionsSpotOptionsToTerraform(struct!.spotOptions),
    }
  }

  export class LaunchTemplateInstanceMarketOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // market_type - computed: false, optional: true, required: false
    private _marketType?: string | undefined; 
    public get marketType() {
      return this.getStringAttribute('market_type');
    }
    public set marketType(value: string | undefined) {
      this._marketType = value;
    }
    public resetMarketType() {
      this._marketType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get marketTypeInput() {
      return this._marketType
    }

    // spot_options - computed: false, optional: true, required: false
    private _spotOptions?: LaunchTemplateInstanceMarketOptionsSpotOptions | undefined; 
    private __spotOptionsOutput = new LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference(this as any, "spot_options", true);
    public get spotOptions() {
      return this.__spotOptionsOutput;
    }
    public putSpotOptions(value: LaunchTemplateInstanceMarketOptionsSpotOptions | undefined) {
      this._spotOptions = value;
    }
    public resetSpotOptions() {
      this._spotOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotOptionsInput() {
      return this._spotOptions
    }
  }
  export interface LaunchTemplateLicenseSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#license_configuration_arn LaunchTemplate#license_configuration_arn}
    */
    readonly licenseConfigurationArn: string;
  }

  function launchTemplateLicenseSpecificationToTerraform(struct?: LaunchTemplateLicenseSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      license_configuration_arn: cdktf.stringToTerraform(struct!.licenseConfigurationArn),
    }
  }

  export interface LaunchTemplateMetadataOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#http_endpoint LaunchTemplate#http_endpoint}
    */
    readonly httpEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#http_protocol_ipv6 LaunchTemplate#http_protocol_ipv6}
    */
    readonly httpProtocolIpv6?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#http_put_response_hop_limit LaunchTemplate#http_put_response_hop_limit}
    */
    readonly httpPutResponseHopLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#http_tokens LaunchTemplate#http_tokens}
    */
    readonly httpTokens?: string;
  }

  function launchTemplateMetadataOptionsToTerraform(struct?: LaunchTemplateMetadataOptionsOutputReference | LaunchTemplateMetadataOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      http_endpoint: cdktf.stringToTerraform(struct!.httpEndpoint),
      http_protocol_ipv6: cdktf.stringToTerraform(struct!.httpProtocolIpv6),
      http_put_response_hop_limit: cdktf.numberToTerraform(struct!.httpPutResponseHopLimit),
      http_tokens: cdktf.stringToTerraform(struct!.httpTokens),
    }
  }

  export class LaunchTemplateMetadataOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // http_endpoint - computed: true, optional: true, required: false
    private _httpEndpoint?: string | undefined; 
    public get httpEndpoint() {
      return this.getStringAttribute('http_endpoint');
    }
    public set httpEndpoint(value: string | undefined) {
      this._httpEndpoint = value;
    }
    public resetHttpEndpoint() {
      this._httpEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpEndpointInput() {
      return this._httpEndpoint
    }

    // http_protocol_ipv6 - computed: false, optional: true, required: false
    private _httpProtocolIpv6?: string | undefined; 
    public get httpProtocolIpv6() {
      return this.getStringAttribute('http_protocol_ipv6');
    }
    public set httpProtocolIpv6(value: string | undefined) {
      this._httpProtocolIpv6 = value;
    }
    public resetHttpProtocolIpv6() {
      this._httpProtocolIpv6 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpProtocolIpv6Input() {
      return this._httpProtocolIpv6
    }

    // http_put_response_hop_limit - computed: true, optional: true, required: false
    private _httpPutResponseHopLimit?: number | undefined; 
    public get httpPutResponseHopLimit() {
      return this.getNumberAttribute('http_put_response_hop_limit');
    }
    public set httpPutResponseHopLimit(value: number | undefined) {
      this._httpPutResponseHopLimit = value;
    }
    public resetHttpPutResponseHopLimit() {
      this._httpPutResponseHopLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpPutResponseHopLimitInput() {
      return this._httpPutResponseHopLimit
    }

    // http_tokens - computed: true, optional: true, required: false
    private _httpTokens?: string | undefined; 
    public get httpTokens() {
      return this.getStringAttribute('http_tokens');
    }
    public set httpTokens(value: string | undefined) {
      this._httpTokens = value;
    }
    public resetHttpTokens() {
      this._httpTokens = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpTokensInput() {
      return this._httpTokens
    }
  }
  export interface LaunchTemplateMonitoring {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#enabled LaunchTemplate#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
  }

  function launchTemplateMonitoringToTerraform(struct?: LaunchTemplateMonitoringOutputReference | LaunchTemplateMonitoring): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
    }
  }

  export class LaunchTemplateMonitoringOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }
  }
  export interface LaunchTemplateNetworkInterfaces {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#associate_carrier_ip_address LaunchTemplate#associate_carrier_ip_address}
    */
    readonly associateCarrierIpAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#associate_public_ip_address LaunchTemplate#associate_public_ip_address}
    */
    readonly associatePublicIpAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#delete_on_termination LaunchTemplate#delete_on_termination}
    */
    readonly deleteOnTermination?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#description LaunchTemplate#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#device_index LaunchTemplate#device_index}
    */
    readonly deviceIndex?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#interface_type LaunchTemplate#interface_type}
    */
    readonly interfaceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ipv4_address_count LaunchTemplate#ipv4_address_count}
    */
    readonly ipv4AddressCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ipv4_addresses LaunchTemplate#ipv4_addresses}
    */
    readonly ipv4Addresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ipv6_address_count LaunchTemplate#ipv6_address_count}
    */
    readonly ipv6AddressCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ipv6_addresses LaunchTemplate#ipv6_addresses}
    */
    readonly ipv6Addresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#network_interface_id LaunchTemplate#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#private_ip_address LaunchTemplate#private_ip_address}
    */
    readonly privateIpAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#security_groups LaunchTemplate#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#subnet_id LaunchTemplate#subnet_id}
    */
    readonly subnetId?: string;
  }

  function launchTemplateNetworkInterfacesToTerraform(struct?: LaunchTemplateNetworkInterfaces): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      associate_carrier_ip_address: cdktf.stringToTerraform(struct!.associateCarrierIpAddress),
      associate_public_ip_address: cdktf.stringToTerraform(struct!.associatePublicIpAddress),
      delete_on_termination: cdktf.stringToTerraform(struct!.deleteOnTermination),
      description: cdktf.stringToTerraform(struct!.description),
      device_index: cdktf.numberToTerraform(struct!.deviceIndex),
      interface_type: cdktf.stringToTerraform(struct!.interfaceType),
      ipv4_address_count: cdktf.numberToTerraform(struct!.ipv4AddressCount),
      ipv4_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipv4Addresses),
      ipv6_address_count: cdktf.numberToTerraform(struct!.ipv6AddressCount),
      ipv6_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipv6Addresses),
      network_interface_id: cdktf.stringToTerraform(struct!.networkInterfaceId),
      private_ip_address: cdktf.stringToTerraform(struct!.privateIpAddress),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
      subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    }
  }

  export interface LaunchTemplatePlacement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#affinity LaunchTemplate#affinity}
    */
    readonly affinity?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#availability_zone LaunchTemplate#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#group_name LaunchTemplate#group_name}
    */
    readonly groupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#host_id LaunchTemplate#host_id}
    */
    readonly hostId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#host_resource_group_arn LaunchTemplate#host_resource_group_arn}
    */
    readonly hostResourceGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#partition_number LaunchTemplate#partition_number}
    */
    readonly partitionNumber?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#spread_domain LaunchTemplate#spread_domain}
    */
    readonly spreadDomain?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#tenancy LaunchTemplate#tenancy}
    */
    readonly tenancy?: string;
  }

  function launchTemplatePlacementToTerraform(struct?: LaunchTemplatePlacementOutputReference | LaunchTemplatePlacement): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      affinity: cdktf.stringToTerraform(struct!.affinity),
      availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
      group_name: cdktf.stringToTerraform(struct!.groupName),
      host_id: cdktf.stringToTerraform(struct!.hostId),
      host_resource_group_arn: cdktf.stringToTerraform(struct!.hostResourceGroupArn),
      partition_number: cdktf.numberToTerraform(struct!.partitionNumber),
      spread_domain: cdktf.stringToTerraform(struct!.spreadDomain),
      tenancy: cdktf.stringToTerraform(struct!.tenancy),
    }
  }

  export class LaunchTemplatePlacementOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // affinity - computed: false, optional: true, required: false
    private _affinity?: string | undefined; 
    public get affinity() {
      return this.getStringAttribute('affinity');
    }
    public set affinity(value: string | undefined) {
      this._affinity = value;
    }
    public resetAffinity() {
      this._affinity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get affinityInput() {
      return this._affinity
    }

    // availability_zone - computed: false, optional: true, required: false
    private _availabilityZone?: string | undefined; 
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string | undefined) {
      this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
      this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
      return this._availabilityZone
    }

    // group_name - computed: false, optional: true, required: false
    private _groupName?: string | undefined; 
    public get groupName() {
      return this.getStringAttribute('group_name');
    }
    public set groupName(value: string | undefined) {
      this._groupName = value;
    }
    public resetGroupName() {
      this._groupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupNameInput() {
      return this._groupName
    }

    // host_id - computed: false, optional: true, required: false
    private _hostId?: string | undefined; 
    public get hostId() {
      return this.getStringAttribute('host_id');
    }
    public set hostId(value: string | undefined) {
      this._hostId = value;
    }
    public resetHostId() {
      this._hostId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostIdInput() {
      return this._hostId
    }

    // host_resource_group_arn - computed: false, optional: true, required: false
    private _hostResourceGroupArn?: string | undefined; 
    public get hostResourceGroupArn() {
      return this.getStringAttribute('host_resource_group_arn');
    }
    public set hostResourceGroupArn(value: string | undefined) {
      this._hostResourceGroupArn = value;
    }
    public resetHostResourceGroupArn() {
      this._hostResourceGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostResourceGroupArnInput() {
      return this._hostResourceGroupArn
    }

    // partition_number - computed: false, optional: true, required: false
    private _partitionNumber?: number | undefined; 
    public get partitionNumber() {
      return this.getNumberAttribute('partition_number');
    }
    public set partitionNumber(value: number | undefined) {
      this._partitionNumber = value;
    }
    public resetPartitionNumber() {
      this._partitionNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionNumberInput() {
      return this._partitionNumber
    }

    // spread_domain - computed: false, optional: true, required: false
    private _spreadDomain?: string | undefined; 
    public get spreadDomain() {
      return this.getStringAttribute('spread_domain');
    }
    public set spreadDomain(value: string | undefined) {
      this._spreadDomain = value;
    }
    public resetSpreadDomain() {
      this._spreadDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spreadDomainInput() {
      return this._spreadDomain
    }

    // tenancy - computed: false, optional: true, required: false
    private _tenancy?: string | undefined; 
    public get tenancy() {
      return this.getStringAttribute('tenancy');
    }
    public set tenancy(value: string | undefined) {
      this._tenancy = value;
    }
    public resetTenancy() {
      this._tenancy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tenancyInput() {
      return this._tenancy
    }
  }
  export interface LaunchTemplateTagSpecifications {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#resource_type LaunchTemplate#resource_type}
    */
    readonly resourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#tags LaunchTemplate#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  function launchTemplateTagSpecificationsToTerraform(struct?: LaunchTemplateTagSpecifications): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      resource_type: cdktf.stringToTerraform(struct!.resourceType),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html aws_launch_template}
  */
  export class LaunchTemplate extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_launch_template";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html aws_launch_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LaunchTemplateConfig = {}
    */
    public constructor(scope: Construct, id: string, config: LaunchTemplateConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_launch_template',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._defaultVersion = config.defaultVersion;
      this._description = config.description;
      this._disableApiTermination = config.disableApiTermination;
      this._ebsOptimized = config.ebsOptimized;
      this._imageId = config.imageId;
      this._instanceInitiatedShutdownBehavior = config.instanceInitiatedShutdownBehavior;
      this._instanceType = config.instanceType;
      this._kernelId = config.kernelId;
      this._keyName = config.keyName;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._ramDiskId = config.ramDiskId;
      this._securityGroupNames = config.securityGroupNames;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._updateDefaultVersion = config.updateDefaultVersion;
      this._userData = config.userData;
      this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
      this._blockDeviceMappings = config.blockDeviceMappings;
      this._capacityReservationSpecification = config.capacityReservationSpecification;
      this._cpuOptions = config.cpuOptions;
      this._creditSpecification = config.creditSpecification;
      this._elasticGpuSpecifications = config.elasticGpuSpecifications;
      this._elasticInferenceAccelerator = config.elasticInferenceAccelerator;
      this._enclaveOptions = config.enclaveOptions;
      this._hibernationOptions = config.hibernationOptions;
      this._iamInstanceProfile = config.iamInstanceProfile;
      this._instanceMarketOptions = config.instanceMarketOptions;
      this._licenseSpecification = config.licenseSpecification;
      this._metadataOptions = config.metadataOptions;
      this._monitoring = config.monitoring;
      this._networkInterfaces = config.networkInterfaces;
      this._placement = config.placement;
      this._tagSpecifications = config.tagSpecifications;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // default_version - computed: true, optional: true, required: false
    private _defaultVersion?: number | undefined; 
    public get defaultVersion() {
      return this.getNumberAttribute('default_version');
    }
    public set defaultVersion(value: number | undefined) {
      this._defaultVersion = value;
    }
    public resetDefaultVersion() {
      this._defaultVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultVersionInput() {
      return this._defaultVersion
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // disable_api_termination - computed: false, optional: true, required: false
    private _disableApiTermination?: boolean | cdktf.IResolvable | undefined; 
    public get disableApiTermination() {
      return this.getBooleanAttribute('disable_api_termination') as any;
    }
    public set disableApiTermination(value: boolean | cdktf.IResolvable | undefined) {
      this._disableApiTermination = value;
    }
    public resetDisableApiTermination() {
      this._disableApiTermination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableApiTerminationInput() {
      return this._disableApiTermination
    }

    // ebs_optimized - computed: false, optional: true, required: false
    private _ebsOptimized?: string | undefined; 
    public get ebsOptimized() {
      return this.getStringAttribute('ebs_optimized');
    }
    public set ebsOptimized(value: string | undefined) {
      this._ebsOptimized = value;
    }
    public resetEbsOptimized() {
      this._ebsOptimized = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsOptimizedInput() {
      return this._ebsOptimized
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // image_id - computed: false, optional: true, required: false
    private _imageId?: string | undefined; 
    public get imageId() {
      return this.getStringAttribute('image_id');
    }
    public set imageId(value: string | undefined) {
      this._imageId = value;
    }
    public resetImageId() {
      this._imageId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageIdInput() {
      return this._imageId
    }

    // instance_initiated_shutdown_behavior - computed: false, optional: true, required: false
    private _instanceInitiatedShutdownBehavior?: string | undefined; 
    public get instanceInitiatedShutdownBehavior() {
      return this.getStringAttribute('instance_initiated_shutdown_behavior');
    }
    public set instanceInitiatedShutdownBehavior(value: string | undefined) {
      this._instanceInitiatedShutdownBehavior = value;
    }
    public resetInstanceInitiatedShutdownBehavior() {
      this._instanceInitiatedShutdownBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceInitiatedShutdownBehaviorInput() {
      return this._instanceInitiatedShutdownBehavior
    }

    // instance_type - computed: false, optional: true, required: false
    private _instanceType?: string | undefined; 
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string | undefined) {
      this._instanceType = value;
    }
    public resetInstanceType() {
      this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
      return this._instanceType
    }

    // kernel_id - computed: false, optional: true, required: false
    private _kernelId?: string | undefined; 
    public get kernelId() {
      return this.getStringAttribute('kernel_id');
    }
    public set kernelId(value: string | undefined) {
      this._kernelId = value;
    }
    public resetKernelId() {
      this._kernelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kernelIdInput() {
      return this._kernelId
    }

    // key_name - computed: false, optional: true, required: false
    private _keyName?: string | undefined; 
    public get keyName() {
      return this.getStringAttribute('key_name');
    }
    public set keyName(value: string | undefined) {
      this._keyName = value;
    }
    public resetKeyName() {
      this._keyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyNameInput() {
      return this._keyName
    }

    // latest_version - computed: true, optional: false, required: false
    public get latestVersion() {
      return this.getNumberAttribute('latest_version');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: true, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // ram_disk_id - computed: false, optional: true, required: false
    private _ramDiskId?: string | undefined; 
    public get ramDiskId() {
      return this.getStringAttribute('ram_disk_id');
    }
    public set ramDiskId(value: string | undefined) {
      this._ramDiskId = value;
    }
    public resetRamDiskId() {
      this._ramDiskId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ramDiskIdInput() {
      return this._ramDiskId
    }

    // security_group_names - computed: false, optional: true, required: false
    private _securityGroupNames?: string[] | undefined; 
    public get securityGroupNames() {
      return this.getListAttribute('security_group_names');
    }
    public set securityGroupNames(value: string[] | undefined) {
      this._securityGroupNames = value;
    }
    public resetSecurityGroupNames() {
      this._securityGroupNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupNamesInput() {
      return this._securityGroupNames
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // update_default_version - computed: false, optional: true, required: false
    private _updateDefaultVersion?: boolean | cdktf.IResolvable | undefined; 
    public get updateDefaultVersion() {
      return this.getBooleanAttribute('update_default_version') as any;
    }
    public set updateDefaultVersion(value: boolean | cdktf.IResolvable | undefined) {
      this._updateDefaultVersion = value;
    }
    public resetUpdateDefaultVersion() {
      this._updateDefaultVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateDefaultVersionInput() {
      return this._updateDefaultVersion
    }

    // user_data - computed: false, optional: true, required: false
    private _userData?: string | undefined; 
    public get userData() {
      return this.getStringAttribute('user_data');
    }
    public set userData(value: string | undefined) {
      this._userData = value;
    }
    public resetUserData() {
      this._userData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userDataInput() {
      return this._userData
    }

    // vpc_security_group_ids - computed: false, optional: true, required: false
    private _vpcSecurityGroupIds?: string[] | undefined; 
    public get vpcSecurityGroupIds() {
      return this.getListAttribute('vpc_security_group_ids');
    }
    public set vpcSecurityGroupIds(value: string[] | undefined) {
      this._vpcSecurityGroupIds = value;
    }
    public resetVpcSecurityGroupIds() {
      this._vpcSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcSecurityGroupIdsInput() {
      return this._vpcSecurityGroupIds
    }

    // block_device_mappings - computed: false, optional: true, required: false
    private _blockDeviceMappings?: LaunchTemplateBlockDeviceMappings[] | undefined; 
    public get blockDeviceMappings() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('block_device_mappings') as any;
    }
    public set blockDeviceMappings(value: LaunchTemplateBlockDeviceMappings[] | undefined) {
      this._blockDeviceMappings = value;
    }
    public resetBlockDeviceMappings() {
      this._blockDeviceMappings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockDeviceMappingsInput() {
      return this._blockDeviceMappings
    }

    // capacity_reservation_specification - computed: false, optional: true, required: false
    private _capacityReservationSpecification?: LaunchTemplateCapacityReservationSpecification | undefined; 
    private __capacityReservationSpecificationOutput = new LaunchTemplateCapacityReservationSpecificationOutputReference(this as any, "capacity_reservation_specification", true);
    public get capacityReservationSpecification() {
      return this.__capacityReservationSpecificationOutput;
    }
    public putCapacityReservationSpecification(value: LaunchTemplateCapacityReservationSpecification | undefined) {
      this._capacityReservationSpecification = value;
    }
    public resetCapacityReservationSpecification() {
      this._capacityReservationSpecification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationSpecificationInput() {
      return this._capacityReservationSpecification
    }

    // cpu_options - computed: false, optional: true, required: false
    private _cpuOptions?: LaunchTemplateCpuOptions | undefined; 
    private __cpuOptionsOutput = new LaunchTemplateCpuOptionsOutputReference(this as any, "cpu_options", true);
    public get cpuOptions() {
      return this.__cpuOptionsOutput;
    }
    public putCpuOptions(value: LaunchTemplateCpuOptions | undefined) {
      this._cpuOptions = value;
    }
    public resetCpuOptions() {
      this._cpuOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuOptionsInput() {
      return this._cpuOptions
    }

    // credit_specification - computed: false, optional: true, required: false
    private _creditSpecification?: LaunchTemplateCreditSpecification | undefined; 
    private __creditSpecificationOutput = new LaunchTemplateCreditSpecificationOutputReference(this as any, "credit_specification", true);
    public get creditSpecification() {
      return this.__creditSpecificationOutput;
    }
    public putCreditSpecification(value: LaunchTemplateCreditSpecification | undefined) {
      this._creditSpecification = value;
    }
    public resetCreditSpecification() {
      this._creditSpecification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get creditSpecificationInput() {
      return this._creditSpecification
    }

    // elastic_gpu_specifications - computed: false, optional: true, required: false
    private _elasticGpuSpecifications?: LaunchTemplateElasticGpuSpecifications[] | undefined; 
    public get elasticGpuSpecifications() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('elastic_gpu_specifications') as any;
    }
    public set elasticGpuSpecifications(value: LaunchTemplateElasticGpuSpecifications[] | undefined) {
      this._elasticGpuSpecifications = value;
    }
    public resetElasticGpuSpecifications() {
      this._elasticGpuSpecifications = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticGpuSpecificationsInput() {
      return this._elasticGpuSpecifications
    }

    // elastic_inference_accelerator - computed: false, optional: true, required: false
    private _elasticInferenceAccelerator?: LaunchTemplateElasticInferenceAccelerator | undefined; 
    private __elasticInferenceAcceleratorOutput = new LaunchTemplateElasticInferenceAcceleratorOutputReference(this as any, "elastic_inference_accelerator", true);
    public get elasticInferenceAccelerator() {
      return this.__elasticInferenceAcceleratorOutput;
    }
    public putElasticInferenceAccelerator(value: LaunchTemplateElasticInferenceAccelerator | undefined) {
      this._elasticInferenceAccelerator = value;
    }
    public resetElasticInferenceAccelerator() {
      this._elasticInferenceAccelerator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticInferenceAcceleratorInput() {
      return this._elasticInferenceAccelerator
    }

    // enclave_options - computed: false, optional: true, required: false
    private _enclaveOptions?: LaunchTemplateEnclaveOptions | undefined; 
    private __enclaveOptionsOutput = new LaunchTemplateEnclaveOptionsOutputReference(this as any, "enclave_options", true);
    public get enclaveOptions() {
      return this.__enclaveOptionsOutput;
    }
    public putEnclaveOptions(value: LaunchTemplateEnclaveOptions | undefined) {
      this._enclaveOptions = value;
    }
    public resetEnclaveOptions() {
      this._enclaveOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enclaveOptionsInput() {
      return this._enclaveOptions
    }

    // hibernation_options - computed: false, optional: true, required: false
    private _hibernationOptions?: LaunchTemplateHibernationOptions | undefined; 
    private __hibernationOptionsOutput = new LaunchTemplateHibernationOptionsOutputReference(this as any, "hibernation_options", true);
    public get hibernationOptions() {
      return this.__hibernationOptionsOutput;
    }
    public putHibernationOptions(value: LaunchTemplateHibernationOptions | undefined) {
      this._hibernationOptions = value;
    }
    public resetHibernationOptions() {
      this._hibernationOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hibernationOptionsInput() {
      return this._hibernationOptions
    }

    // iam_instance_profile - computed: false, optional: true, required: false
    private _iamInstanceProfile?: LaunchTemplateIamInstanceProfile | undefined; 
    private __iamInstanceProfileOutput = new LaunchTemplateIamInstanceProfileOutputReference(this as any, "iam_instance_profile", true);
    public get iamInstanceProfile() {
      return this.__iamInstanceProfileOutput;
    }
    public putIamInstanceProfile(value: LaunchTemplateIamInstanceProfile | undefined) {
      this._iamInstanceProfile = value;
    }
    public resetIamInstanceProfile() {
      this._iamInstanceProfile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamInstanceProfileInput() {
      return this._iamInstanceProfile
    }

    // instance_market_options - computed: false, optional: true, required: false
    private _instanceMarketOptions?: LaunchTemplateInstanceMarketOptions | undefined; 
    private __instanceMarketOptionsOutput = new LaunchTemplateInstanceMarketOptionsOutputReference(this as any, "instance_market_options", true);
    public get instanceMarketOptions() {
      return this.__instanceMarketOptionsOutput;
    }
    public putInstanceMarketOptions(value: LaunchTemplateInstanceMarketOptions | undefined) {
      this._instanceMarketOptions = value;
    }
    public resetInstanceMarketOptions() {
      this._instanceMarketOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceMarketOptionsInput() {
      return this._instanceMarketOptions
    }

    // license_specification - computed: false, optional: true, required: false
    private _licenseSpecification?: LaunchTemplateLicenseSpecification[] | undefined; 
    public get licenseSpecification() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('license_specification') as any;
    }
    public set licenseSpecification(value: LaunchTemplateLicenseSpecification[] | undefined) {
      this._licenseSpecification = value;
    }
    public resetLicenseSpecification() {
      this._licenseSpecification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseSpecificationInput() {
      return this._licenseSpecification
    }

    // metadata_options - computed: false, optional: true, required: false
    private _metadataOptions?: LaunchTemplateMetadataOptions | undefined; 
    private __metadataOptionsOutput = new LaunchTemplateMetadataOptionsOutputReference(this as any, "metadata_options", true);
    public get metadataOptions() {
      return this.__metadataOptionsOutput;
    }
    public putMetadataOptions(value: LaunchTemplateMetadataOptions | undefined) {
      this._metadataOptions = value;
    }
    public resetMetadataOptions() {
      this._metadataOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataOptionsInput() {
      return this._metadataOptions
    }

    // monitoring - computed: false, optional: true, required: false
    private _monitoring?: LaunchTemplateMonitoring | undefined; 
    private __monitoringOutput = new LaunchTemplateMonitoringOutputReference(this as any, "monitoring", true);
    public get monitoring() {
      return this.__monitoringOutput;
    }
    public putMonitoring(value: LaunchTemplateMonitoring | undefined) {
      this._monitoring = value;
    }
    public resetMonitoring() {
      this._monitoring = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringInput() {
      return this._monitoring
    }

    // network_interfaces - computed: false, optional: true, required: false
    private _networkInterfaces?: LaunchTemplateNetworkInterfaces[] | undefined; 
    public get networkInterfaces() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('network_interfaces') as any;
    }
    public set networkInterfaces(value: LaunchTemplateNetworkInterfaces[] | undefined) {
      this._networkInterfaces = value;
    }
    public resetNetworkInterfaces() {
      this._networkInterfaces = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfacesInput() {
      return this._networkInterfaces
    }

    // placement - computed: false, optional: true, required: false
    private _placement?: LaunchTemplatePlacement | undefined; 
    private __placementOutput = new LaunchTemplatePlacementOutputReference(this as any, "placement", true);
    public get placement() {
      return this.__placementOutput;
    }
    public putPlacement(value: LaunchTemplatePlacement | undefined) {
      this._placement = value;
    }
    public resetPlacement() {
      this._placement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementInput() {
      return this._placement
    }

    // tag_specifications - computed: false, optional: true, required: false
    private _tagSpecifications?: LaunchTemplateTagSpecifications[] | undefined; 
    public get tagSpecifications() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tag_specifications') as any;
    }
    public set tagSpecifications(value: LaunchTemplateTagSpecifications[] | undefined) {
      this._tagSpecifications = value;
    }
    public resetTagSpecifications() {
      this._tagSpecifications = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagSpecificationsInput() {
      return this._tagSpecifications
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        default_version: cdktf.numberToTerraform(this._defaultVersion),
        description: cdktf.stringToTerraform(this._description),
        disable_api_termination: cdktf.booleanToTerraform(this._disableApiTermination),
        ebs_optimized: cdktf.stringToTerraform(this._ebsOptimized),
        image_id: cdktf.stringToTerraform(this._imageId),
        instance_initiated_shutdown_behavior: cdktf.stringToTerraform(this._instanceInitiatedShutdownBehavior),
        instance_type: cdktf.stringToTerraform(this._instanceType),
        kernel_id: cdktf.stringToTerraform(this._kernelId),
        key_name: cdktf.stringToTerraform(this._keyName),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        ram_disk_id: cdktf.stringToTerraform(this._ramDiskId),
        security_group_names: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupNames),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        update_default_version: cdktf.booleanToTerraform(this._updateDefaultVersion),
        user_data: cdktf.stringToTerraform(this._userData),
        vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
        block_device_mappings: cdktf.listMapper(launchTemplateBlockDeviceMappingsToTerraform)(this._blockDeviceMappings),
        capacity_reservation_specification: launchTemplateCapacityReservationSpecificationToTerraform(this._capacityReservationSpecification),
        cpu_options: launchTemplateCpuOptionsToTerraform(this._cpuOptions),
        credit_specification: launchTemplateCreditSpecificationToTerraform(this._creditSpecification),
        elastic_gpu_specifications: cdktf.listMapper(launchTemplateElasticGpuSpecificationsToTerraform)(this._elasticGpuSpecifications),
        elastic_inference_accelerator: launchTemplateElasticInferenceAcceleratorToTerraform(this._elasticInferenceAccelerator),
        enclave_options: launchTemplateEnclaveOptionsToTerraform(this._enclaveOptions),
        hibernation_options: launchTemplateHibernationOptionsToTerraform(this._hibernationOptions),
        iam_instance_profile: launchTemplateIamInstanceProfileToTerraform(this._iamInstanceProfile),
        instance_market_options: launchTemplateInstanceMarketOptionsToTerraform(this._instanceMarketOptions),
        license_specification: cdktf.listMapper(launchTemplateLicenseSpecificationToTerraform)(this._licenseSpecification),
        metadata_options: launchTemplateMetadataOptionsToTerraform(this._metadataOptions),
        monitoring: launchTemplateMonitoringToTerraform(this._monitoring),
        network_interfaces: cdktf.listMapper(launchTemplateNetworkInterfacesToTerraform)(this._networkInterfaces),
        placement: launchTemplatePlacementToTerraform(this._placement),
        tag_specifications: cdktf.listMapper(launchTemplateTagSpecificationsToTerraform)(this._tagSpecifications),
      };
    }
  }
  export interface PlacementGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/placement_group.html#name PlacementGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/placement_group.html#partition_count PlacementGroup#partition_count}
    */
    readonly partitionCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/placement_group.html#strategy PlacementGroup#strategy}
    */
    readonly strategy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/placement_group.html#tags PlacementGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/placement_group.html#tags_all PlacementGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/placement_group.html aws_placement_group}
  */
  export class PlacementGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_placement_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/placement_group.html aws_placement_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PlacementGroupConfig
    */
    public constructor(scope: Construct, id: string, config: PlacementGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_placement_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._partitionCount = config.partitionCount;
      this._strategy = config.strategy;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // partition_count - computed: false, optional: true, required: false
    private _partitionCount?: number | undefined; 
    public get partitionCount() {
      return this.getNumberAttribute('partition_count');
    }
    public set partitionCount(value: number | undefined) {
      this._partitionCount = value;
    }
    public resetPartitionCount() {
      this._partitionCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionCountInput() {
      return this._partitionCount
    }

    // placement_group_id - computed: true, optional: false, required: false
    public get placementGroupId() {
      return this.getStringAttribute('placement_group_id');
    }

    // strategy - computed: false, optional: false, required: true
    private _strategy?: string; 
    public get strategy() {
      return this.getStringAttribute('strategy');
    }
    public set strategy(value: string) {
      this._strategy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get strategyInput() {
      return this._strategy
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        partition_count: cdktf.numberToTerraform(this._partitionCount),
        strategy: cdktf.stringToTerraform(this._strategy),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface SnapshotCreateVolumePermissionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission.html#account_id SnapshotCreateVolumePermission#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission.html#snapshot_id SnapshotCreateVolumePermission#snapshot_id}
    */
    readonly snapshotId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission.html aws_snapshot_create_volume_permission}
  */
  export class SnapshotCreateVolumePermission extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_snapshot_create_volume_permission";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission.html aws_snapshot_create_volume_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnapshotCreateVolumePermissionConfig
    */
    public constructor(scope: Construct, id: string, config: SnapshotCreateVolumePermissionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_snapshot_create_volume_permission',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._accountId = config.accountId;
      this._snapshotId = config.snapshotId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: false, optional: false, required: true
    private _accountId?: string; 
    public get accountId() {
      return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
      this._accountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
      return this._accountId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // snapshot_id - computed: false, optional: false, required: true
    private _snapshotId?: string; 
    public get snapshotId() {
      return this.getStringAttribute('snapshot_id');
    }
    public set snapshotId(value: string) {
      this._snapshotId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotIdInput() {
      return this._snapshotId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        account_id: cdktf.stringToTerraform(this._accountId),
        snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      };
    }
  }
  export interface SpotDatafeedSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_datafeed_subscription.html#bucket SpotDatafeedSubscription#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_datafeed_subscription.html#prefix SpotDatafeedSubscription#prefix}
    */
    readonly prefix?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/spot_datafeed_subscription.html aws_spot_datafeed_subscription}
  */
  export class SpotDatafeedSubscription extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_spot_datafeed_subscription";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/spot_datafeed_subscription.html aws_spot_datafeed_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SpotDatafeedSubscriptionConfig
    */
    public constructor(scope: Construct, id: string, config: SpotDatafeedSubscriptionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_spot_datafeed_subscription',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._bucket = config.bucket;
      this._prefix = config.prefix;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // bucket - computed: false, optional: false, required: true
    private _bucket?: string; 
    public get bucket() {
      return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
      this._bucket = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
      return this._bucket
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // prefix - computed: false, optional: true, required: false
    private _prefix?: string | undefined; 
    public get prefix() {
      return this.getStringAttribute('prefix');
    }
    public set prefix(value: string | undefined) {
      this._prefix = value;
    }
    public resetPrefix() {
      this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
      return this._prefix
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        bucket: cdktf.stringToTerraform(this._bucket),
        prefix: cdktf.stringToTerraform(this._prefix),
      };
    }
  }
  export interface SpotFleetRequestConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#allocation_strategy SpotFleetRequest#allocation_strategy}
    */
    readonly allocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#excess_capacity_termination_policy SpotFleetRequest#excess_capacity_termination_policy}
    */
    readonly excessCapacityTerminationPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#fleet_type SpotFleetRequest#fleet_type}
    */
    readonly fleetType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#iam_fleet_role SpotFleetRequest#iam_fleet_role}
    */
    readonly iamFleetRole: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#instance_interruption_behaviour SpotFleetRequest#instance_interruption_behaviour}
    */
    readonly instanceInterruptionBehaviour?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#instance_pools_to_use_count SpotFleetRequest#instance_pools_to_use_count}
    */
    readonly instancePoolsToUseCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#load_balancers SpotFleetRequest#load_balancers}
    */
    readonly loadBalancers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#on_demand_allocation_strategy SpotFleetRequest#on_demand_allocation_strategy}
    */
    readonly onDemandAllocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#on_demand_max_total_price SpotFleetRequest#on_demand_max_total_price}
    */
    readonly onDemandMaxTotalPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#on_demand_target_capacity SpotFleetRequest#on_demand_target_capacity}
    */
    readonly onDemandTargetCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#replace_unhealthy_instances SpotFleetRequest#replace_unhealthy_instances}
    */
    readonly replaceUnhealthyInstances?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#spot_price SpotFleetRequest#spot_price}
    */
    readonly spotPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#tags SpotFleetRequest#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#tags_all SpotFleetRequest#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#target_capacity SpotFleetRequest#target_capacity}
    */
    readonly targetCapacity: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#target_group_arns SpotFleetRequest#target_group_arns}
    */
    readonly targetGroupArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#terminate_instances_with_expiration SpotFleetRequest#terminate_instances_with_expiration}
    */
    readonly terminateInstancesWithExpiration?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#valid_from SpotFleetRequest#valid_from}
    */
    readonly validFrom?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#valid_until SpotFleetRequest#valid_until}
    */
    readonly validUntil?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#wait_for_fulfillment SpotFleetRequest#wait_for_fulfillment}
    */
    readonly waitForFulfillment?: boolean | cdktf.IResolvable;
    /**
    * launch_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#launch_specification SpotFleetRequest#launch_specification}
    */
    readonly launchSpecification?: SpotFleetRequestLaunchSpecification[];
    /**
    * launch_template_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#launch_template_config SpotFleetRequest#launch_template_config}
    */
    readonly launchTemplateConfig?: SpotFleetRequestLaunchTemplateConfig[];
    /**
    * spot_maintenance_strategies block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#spot_maintenance_strategies SpotFleetRequest#spot_maintenance_strategies}
    */
    readonly spotMaintenanceStrategies?: SpotFleetRequestSpotMaintenanceStrategies;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#timeouts SpotFleetRequest#timeouts}
    */
    readonly timeouts?: SpotFleetRequestTimeouts;
  }
  export interface SpotFleetRequestLaunchSpecificationEbsBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#delete_on_termination SpotFleetRequest#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#device_name SpotFleetRequest#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#encrypted SpotFleetRequest#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#iops SpotFleetRequest#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#kms_key_id SpotFleetRequest#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#snapshot_id SpotFleetRequest#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#throughput SpotFleetRequest#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#volume_size SpotFleetRequest#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#volume_type SpotFleetRequest#volume_type}
    */
    readonly volumeType?: string;
  }

  function spotFleetRequestLaunchSpecificationEbsBlockDeviceToTerraform(struct?: SpotFleetRequestLaunchSpecificationEbsBlockDevice): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
      device_name: cdktf.stringToTerraform(struct!.deviceName),
      encrypted: cdktf.booleanToTerraform(struct!.encrypted),
      iops: cdktf.numberToTerraform(struct!.iops),
      kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
      snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
      throughput: cdktf.numberToTerraform(struct!.throughput),
      volume_size: cdktf.numberToTerraform(struct!.volumeSize),
      volume_type: cdktf.stringToTerraform(struct!.volumeType),
    }
  }

  export interface SpotFleetRequestLaunchSpecificationEphemeralBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#device_name SpotFleetRequest#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#virtual_name SpotFleetRequest#virtual_name}
    */
    readonly virtualName: string;
  }

  function spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToTerraform(struct?: SpotFleetRequestLaunchSpecificationEphemeralBlockDevice): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      device_name: cdktf.stringToTerraform(struct!.deviceName),
      virtual_name: cdktf.stringToTerraform(struct!.virtualName),
    }
  }

  export interface SpotFleetRequestLaunchSpecificationRootBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#delete_on_termination SpotFleetRequest#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#encrypted SpotFleetRequest#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#iops SpotFleetRequest#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#kms_key_id SpotFleetRequest#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#throughput SpotFleetRequest#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#volume_size SpotFleetRequest#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#volume_type SpotFleetRequest#volume_type}
    */
    readonly volumeType?: string;
  }

  function spotFleetRequestLaunchSpecificationRootBlockDeviceToTerraform(struct?: SpotFleetRequestLaunchSpecificationRootBlockDevice): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
      encrypted: cdktf.booleanToTerraform(struct!.encrypted),
      iops: cdktf.numberToTerraform(struct!.iops),
      kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
      throughput: cdktf.numberToTerraform(struct!.throughput),
      volume_size: cdktf.numberToTerraform(struct!.volumeSize),
      volume_type: cdktf.stringToTerraform(struct!.volumeType),
    }
  }

  export interface SpotFleetRequestLaunchSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#ami SpotFleetRequest#ami}
    */
    readonly ami: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#associate_public_ip_address SpotFleetRequest#associate_public_ip_address}
    */
    readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#availability_zone SpotFleetRequest#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#ebs_optimized SpotFleetRequest#ebs_optimized}
    */
    readonly ebsOptimized?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#iam_instance_profile SpotFleetRequest#iam_instance_profile}
    */
    readonly iamInstanceProfile?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#iam_instance_profile_arn SpotFleetRequest#iam_instance_profile_arn}
    */
    readonly iamInstanceProfileArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#instance_type SpotFleetRequest#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#key_name SpotFleetRequest#key_name}
    */
    readonly keyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#monitoring SpotFleetRequest#monitoring}
    */
    readonly monitoring?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#placement_group SpotFleetRequest#placement_group}
    */
    readonly placementGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#placement_tenancy SpotFleetRequest#placement_tenancy}
    */
    readonly placementTenancy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#spot_price SpotFleetRequest#spot_price}
    */
    readonly spotPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#subnet_id SpotFleetRequest#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#tags SpotFleetRequest#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#user_data SpotFleetRequest#user_data}
    */
    readonly userData?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#vpc_security_group_ids SpotFleetRequest#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#weighted_capacity SpotFleetRequest#weighted_capacity}
    */
    readonly weightedCapacity?: string;
    /**
    * ebs_block_device block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#ebs_block_device SpotFleetRequest#ebs_block_device}
    */
    readonly ebsBlockDevice?: SpotFleetRequestLaunchSpecificationEbsBlockDevice[];
    /**
    * ephemeral_block_device block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#ephemeral_block_device SpotFleetRequest#ephemeral_block_device}
    */
    readonly ephemeralBlockDevice?: SpotFleetRequestLaunchSpecificationEphemeralBlockDevice[];
    /**
    * root_block_device block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#root_block_device SpotFleetRequest#root_block_device}
    */
    readonly rootBlockDevice?: SpotFleetRequestLaunchSpecificationRootBlockDevice[];
  }

  function spotFleetRequestLaunchSpecificationToTerraform(struct?: SpotFleetRequestLaunchSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      ami: cdktf.stringToTerraform(struct!.ami),
      associate_public_ip_address: cdktf.booleanToTerraform(struct!.associatePublicIpAddress),
      availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
      ebs_optimized: cdktf.booleanToTerraform(struct!.ebsOptimized),
      iam_instance_profile: cdktf.stringToTerraform(struct!.iamInstanceProfile),
      iam_instance_profile_arn: cdktf.stringToTerraform(struct!.iamInstanceProfileArn),
      instance_type: cdktf.stringToTerraform(struct!.instanceType),
      key_name: cdktf.stringToTerraform(struct!.keyName),
      monitoring: cdktf.booleanToTerraform(struct!.monitoring),
      placement_group: cdktf.stringToTerraform(struct!.placementGroup),
      placement_tenancy: cdktf.stringToTerraform(struct!.placementTenancy),
      spot_price: cdktf.stringToTerraform(struct!.spotPrice),
      subnet_id: cdktf.stringToTerraform(struct!.subnetId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
      user_data: cdktf.stringToTerraform(struct!.userData),
      vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.vpcSecurityGroupIds),
      weighted_capacity: cdktf.stringToTerraform(struct!.weightedCapacity),
      ebs_block_device: cdktf.listMapper(spotFleetRequestLaunchSpecificationEbsBlockDeviceToTerraform)(struct!.ebsBlockDevice),
      ephemeral_block_device: cdktf.listMapper(spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToTerraform)(struct!.ephemeralBlockDevice),
      root_block_device: cdktf.listMapper(spotFleetRequestLaunchSpecificationRootBlockDeviceToTerraform)(struct!.rootBlockDevice),
    }
  }

  export interface SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#id SpotFleetRequest#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#name SpotFleetRequest#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#version SpotFleetRequest#version}
    */
    readonly version?: string;
  }

  function spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToTerraform(struct?: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference | SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      id: cdktf.stringToTerraform(struct!.id),
      name: cdktf.stringToTerraform(struct!.name),
      version: cdktf.stringToTerraform(struct!.version),
    }
  }

  export class SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // id - computed: false, optional: true, required: false
    private _id?: string | undefined; 
    public get id() {
      return this.getStringAttribute('id');
    }
    public set id(value: string | undefined) {
      this._id = value;
    }
    public resetId() {
      this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
      return this._id
    }

    // name - computed: false, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // version - computed: false, optional: true, required: false
    private _version?: string | undefined; 
    public get version() {
      return this.getStringAttribute('version');
    }
    public set version(value: string | undefined) {
      this._version = value;
    }
    public resetVersion() {
      this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
      return this._version
    }
  }
  export interface SpotFleetRequestLaunchTemplateConfigOverrides {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#availability_zone SpotFleetRequest#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#instance_type SpotFleetRequest#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#priority SpotFleetRequest#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#spot_price SpotFleetRequest#spot_price}
    */
    readonly spotPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#subnet_id SpotFleetRequest#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#weighted_capacity SpotFleetRequest#weighted_capacity}
    */
    readonly weightedCapacity?: number;
  }

  function spotFleetRequestLaunchTemplateConfigOverridesToTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverrides): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
      instance_type: cdktf.stringToTerraform(struct!.instanceType),
      priority: cdktf.numberToTerraform(struct!.priority),
      spot_price: cdktf.stringToTerraform(struct!.spotPrice),
      subnet_id: cdktf.stringToTerraform(struct!.subnetId),
      weighted_capacity: cdktf.numberToTerraform(struct!.weightedCapacity),
    }
  }

  export interface SpotFleetRequestLaunchTemplateConfig {
    /**
    * launch_template_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#launch_template_specification SpotFleetRequest#launch_template_specification}
    */
    readonly launchTemplateSpecification: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification;
    /**
    * overrides block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#overrides SpotFleetRequest#overrides}
    */
    readonly overrides?: SpotFleetRequestLaunchTemplateConfigOverrides[];
  }

  function spotFleetRequestLaunchTemplateConfigToTerraform(struct?: SpotFleetRequestLaunchTemplateConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      launch_template_specification: spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToTerraform(struct!.launchTemplateSpecification),
      overrides: cdktf.listMapper(spotFleetRequestLaunchTemplateConfigOverridesToTerraform)(struct!.overrides),
    }
  }

  export interface SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#replacement_strategy SpotFleetRequest#replacement_strategy}
    */
    readonly replacementStrategy?: string;
  }

  function spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToTerraform(struct?: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference | SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      replacement_strategy: cdktf.stringToTerraform(struct!.replacementStrategy),
    }
  }

  export class SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // replacement_strategy - computed: false, optional: true, required: false
    private _replacementStrategy?: string | undefined; 
    public get replacementStrategy() {
      return this.getStringAttribute('replacement_strategy');
    }
    public set replacementStrategy(value: string | undefined) {
      this._replacementStrategy = value;
    }
    public resetReplacementStrategy() {
      this._replacementStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replacementStrategyInput() {
      return this._replacementStrategy
    }
  }
  export interface SpotFleetRequestSpotMaintenanceStrategies {
    /**
    * capacity_rebalance block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#capacity_rebalance SpotFleetRequest#capacity_rebalance}
    */
    readonly capacityRebalance?: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance;
  }

  function spotFleetRequestSpotMaintenanceStrategiesToTerraform(struct?: SpotFleetRequestSpotMaintenanceStrategiesOutputReference | SpotFleetRequestSpotMaintenanceStrategies): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      capacity_rebalance: spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToTerraform(struct!.capacityRebalance),
    }
  }

  export class SpotFleetRequestSpotMaintenanceStrategiesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // capacity_rebalance - computed: false, optional: true, required: false
    private _capacityRebalance?: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance | undefined; 
    private __capacityRebalanceOutput = new SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference(this as any, "capacity_rebalance", true);
    public get capacityRebalance() {
      return this.__capacityRebalanceOutput;
    }
    public putCapacityRebalance(value: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance | undefined) {
      this._capacityRebalance = value;
    }
    public resetCapacityRebalance() {
      this._capacityRebalance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityRebalanceInput() {
      return this._capacityRebalance
    }
  }
  export interface SpotFleetRequestTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#create SpotFleetRequest#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#delete SpotFleetRequest#delete}
    */
    readonly delete?: string;
  }

  function spotFleetRequestTimeoutsToTerraform(struct?: SpotFleetRequestTimeoutsOutputReference | SpotFleetRequestTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class SpotFleetRequestTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html aws_spot_fleet_request}
  */
  export class SpotFleetRequest extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_spot_fleet_request";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html aws_spot_fleet_request} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SpotFleetRequestConfig
    */
    public constructor(scope: Construct, id: string, config: SpotFleetRequestConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_spot_fleet_request',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._allocationStrategy = config.allocationStrategy;
      this._excessCapacityTerminationPolicy = config.excessCapacityTerminationPolicy;
      this._fleetType = config.fleetType;
      this._iamFleetRole = config.iamFleetRole;
      this._instanceInterruptionBehaviour = config.instanceInterruptionBehaviour;
      this._instancePoolsToUseCount = config.instancePoolsToUseCount;
      this._loadBalancers = config.loadBalancers;
      this._onDemandAllocationStrategy = config.onDemandAllocationStrategy;
      this._onDemandMaxTotalPrice = config.onDemandMaxTotalPrice;
      this._onDemandTargetCapacity = config.onDemandTargetCapacity;
      this._replaceUnhealthyInstances = config.replaceUnhealthyInstances;
      this._spotPrice = config.spotPrice;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._targetCapacity = config.targetCapacity;
      this._targetGroupArns = config.targetGroupArns;
      this._terminateInstancesWithExpiration = config.terminateInstancesWithExpiration;
      this._validFrom = config.validFrom;
      this._validUntil = config.validUntil;
      this._waitForFulfillment = config.waitForFulfillment;
      this._launchSpecification = config.launchSpecification;
      this._launchTemplateConfig = config.launchTemplateConfig;
      this._spotMaintenanceStrategies = config.spotMaintenanceStrategies;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allocation_strategy - computed: false, optional: true, required: false
    private _allocationStrategy?: string | undefined; 
    public get allocationStrategy() {
      return this.getStringAttribute('allocation_strategy');
    }
    public set allocationStrategy(value: string | undefined) {
      this._allocationStrategy = value;
    }
    public resetAllocationStrategy() {
      this._allocationStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allocationStrategyInput() {
      return this._allocationStrategy
    }

    // client_token - computed: true, optional: false, required: false
    public get clientToken() {
      return this.getStringAttribute('client_token');
    }

    // excess_capacity_termination_policy - computed: false, optional: true, required: false
    private _excessCapacityTerminationPolicy?: string | undefined; 
    public get excessCapacityTerminationPolicy() {
      return this.getStringAttribute('excess_capacity_termination_policy');
    }
    public set excessCapacityTerminationPolicy(value: string | undefined) {
      this._excessCapacityTerminationPolicy = value;
    }
    public resetExcessCapacityTerminationPolicy() {
      this._excessCapacityTerminationPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excessCapacityTerminationPolicyInput() {
      return this._excessCapacityTerminationPolicy
    }

    // fleet_type - computed: false, optional: true, required: false
    private _fleetType?: string | undefined; 
    public get fleetType() {
      return this.getStringAttribute('fleet_type');
    }
    public set fleetType(value: string | undefined) {
      this._fleetType = value;
    }
    public resetFleetType() {
      this._fleetType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fleetTypeInput() {
      return this._fleetType
    }

    // iam_fleet_role - computed: false, optional: false, required: true
    private _iamFleetRole?: string; 
    public get iamFleetRole() {
      return this.getStringAttribute('iam_fleet_role');
    }
    public set iamFleetRole(value: string) {
      this._iamFleetRole = value;
    }
    // Temporarily expose input value. Use with caution.
    public get iamFleetRoleInput() {
      return this._iamFleetRole
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_interruption_behaviour - computed: false, optional: true, required: false
    private _instanceInterruptionBehaviour?: string | undefined; 
    public get instanceInterruptionBehaviour() {
      return this.getStringAttribute('instance_interruption_behaviour');
    }
    public set instanceInterruptionBehaviour(value: string | undefined) {
      this._instanceInterruptionBehaviour = value;
    }
    public resetInstanceInterruptionBehaviour() {
      this._instanceInterruptionBehaviour = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceInterruptionBehaviourInput() {
      return this._instanceInterruptionBehaviour
    }

    // instance_pools_to_use_count - computed: false, optional: true, required: false
    private _instancePoolsToUseCount?: number | undefined; 
    public get instancePoolsToUseCount() {
      return this.getNumberAttribute('instance_pools_to_use_count');
    }
    public set instancePoolsToUseCount(value: number | undefined) {
      this._instancePoolsToUseCount = value;
    }
    public resetInstancePoolsToUseCount() {
      this._instancePoolsToUseCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instancePoolsToUseCountInput() {
      return this._instancePoolsToUseCount
    }

    // load_balancers - computed: true, optional: true, required: false
    private _loadBalancers?: string[] | undefined; 
    public get loadBalancers() {
      return this.getListAttribute('load_balancers');
    }
    public set loadBalancers(value: string[] | undefined) {
      this._loadBalancers = value;
    }
    public resetLoadBalancers() {
      this._loadBalancers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancersInput() {
      return this._loadBalancers
    }

    // on_demand_allocation_strategy - computed: false, optional: true, required: false
    private _onDemandAllocationStrategy?: string | undefined; 
    public get onDemandAllocationStrategy() {
      return this.getStringAttribute('on_demand_allocation_strategy');
    }
    public set onDemandAllocationStrategy(value: string | undefined) {
      this._onDemandAllocationStrategy = value;
    }
    public resetOnDemandAllocationStrategy() {
      this._onDemandAllocationStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onDemandAllocationStrategyInput() {
      return this._onDemandAllocationStrategy
    }

    // on_demand_max_total_price - computed: false, optional: true, required: false
    private _onDemandMaxTotalPrice?: string | undefined; 
    public get onDemandMaxTotalPrice() {
      return this.getStringAttribute('on_demand_max_total_price');
    }
    public set onDemandMaxTotalPrice(value: string | undefined) {
      this._onDemandMaxTotalPrice = value;
    }
    public resetOnDemandMaxTotalPrice() {
      this._onDemandMaxTotalPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onDemandMaxTotalPriceInput() {
      return this._onDemandMaxTotalPrice
    }

    // on_demand_target_capacity - computed: false, optional: true, required: false
    private _onDemandTargetCapacity?: number | undefined; 
    public get onDemandTargetCapacity() {
      return this.getNumberAttribute('on_demand_target_capacity');
    }
    public set onDemandTargetCapacity(value: number | undefined) {
      this._onDemandTargetCapacity = value;
    }
    public resetOnDemandTargetCapacity() {
      this._onDemandTargetCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onDemandTargetCapacityInput() {
      return this._onDemandTargetCapacity
    }

    // replace_unhealthy_instances - computed: false, optional: true, required: false
    private _replaceUnhealthyInstances?: boolean | cdktf.IResolvable | undefined; 
    public get replaceUnhealthyInstances() {
      return this.getBooleanAttribute('replace_unhealthy_instances') as any;
    }
    public set replaceUnhealthyInstances(value: boolean | cdktf.IResolvable | undefined) {
      this._replaceUnhealthyInstances = value;
    }
    public resetReplaceUnhealthyInstances() {
      this._replaceUnhealthyInstances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replaceUnhealthyInstancesInput() {
      return this._replaceUnhealthyInstances
    }

    // spot_price - computed: false, optional: true, required: false
    private _spotPrice?: string | undefined; 
    public get spotPrice() {
      return this.getStringAttribute('spot_price');
    }
    public set spotPrice(value: string | undefined) {
      this._spotPrice = value;
    }
    public resetSpotPrice() {
      this._spotPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotPriceInput() {
      return this._spotPrice
    }

    // spot_request_state - computed: true, optional: false, required: false
    public get spotRequestState() {
      return this.getStringAttribute('spot_request_state');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // target_capacity - computed: false, optional: false, required: true
    private _targetCapacity?: number; 
    public get targetCapacity() {
      return this.getNumberAttribute('target_capacity');
    }
    public set targetCapacity(value: number) {
      this._targetCapacity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetCapacityInput() {
      return this._targetCapacity
    }

    // target_group_arns - computed: true, optional: true, required: false
    private _targetGroupArns?: string[] | undefined; 
    public get targetGroupArns() {
      return this.getListAttribute('target_group_arns');
    }
    public set targetGroupArns(value: string[] | undefined) {
      this._targetGroupArns = value;
    }
    public resetTargetGroupArns() {
      this._targetGroupArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupArnsInput() {
      return this._targetGroupArns
    }

    // terminate_instances_with_expiration - computed: false, optional: true, required: false
    private _terminateInstancesWithExpiration?: boolean | cdktf.IResolvable | undefined; 
    public get terminateInstancesWithExpiration() {
      return this.getBooleanAttribute('terminate_instances_with_expiration') as any;
    }
    public set terminateInstancesWithExpiration(value: boolean | cdktf.IResolvable | undefined) {
      this._terminateInstancesWithExpiration = value;
    }
    public resetTerminateInstancesWithExpiration() {
      this._terminateInstancesWithExpiration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get terminateInstancesWithExpirationInput() {
      return this._terminateInstancesWithExpiration
    }

    // valid_from - computed: false, optional: true, required: false
    private _validFrom?: string | undefined; 
    public get validFrom() {
      return this.getStringAttribute('valid_from');
    }
    public set validFrom(value: string | undefined) {
      this._validFrom = value;
    }
    public resetValidFrom() {
      this._validFrom = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validFromInput() {
      return this._validFrom
    }

    // valid_until - computed: false, optional: true, required: false
    private _validUntil?: string | undefined; 
    public get validUntil() {
      return this.getStringAttribute('valid_until');
    }
    public set validUntil(value: string | undefined) {
      this._validUntil = value;
    }
    public resetValidUntil() {
      this._validUntil = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validUntilInput() {
      return this._validUntil
    }

    // wait_for_fulfillment - computed: false, optional: true, required: false
    private _waitForFulfillment?: boolean | cdktf.IResolvable | undefined; 
    public get waitForFulfillment() {
      return this.getBooleanAttribute('wait_for_fulfillment') as any;
    }
    public set waitForFulfillment(value: boolean | cdktf.IResolvable | undefined) {
      this._waitForFulfillment = value;
    }
    public resetWaitForFulfillment() {
      this._waitForFulfillment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get waitForFulfillmentInput() {
      return this._waitForFulfillment
    }

    // launch_specification - computed: false, optional: true, required: false
    private _launchSpecification?: SpotFleetRequestLaunchSpecification[] | undefined; 
    public get launchSpecification() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('launch_specification') as any;
    }
    public set launchSpecification(value: SpotFleetRequestLaunchSpecification[] | undefined) {
      this._launchSpecification = value;
    }
    public resetLaunchSpecification() {
      this._launchSpecification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchSpecificationInput() {
      return this._launchSpecification
    }

    // launch_template_config - computed: false, optional: true, required: false
    private _launchTemplateConfig?: SpotFleetRequestLaunchTemplateConfig[] | undefined; 
    public get launchTemplateConfig() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('launch_template_config') as any;
    }
    public set launchTemplateConfig(value: SpotFleetRequestLaunchTemplateConfig[] | undefined) {
      this._launchTemplateConfig = value;
    }
    public resetLaunchTemplateConfig() {
      this._launchTemplateConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateConfigInput() {
      return this._launchTemplateConfig
    }

    // spot_maintenance_strategies - computed: false, optional: true, required: false
    private _spotMaintenanceStrategies?: SpotFleetRequestSpotMaintenanceStrategies | undefined; 
    private __spotMaintenanceStrategiesOutput = new SpotFleetRequestSpotMaintenanceStrategiesOutputReference(this as any, "spot_maintenance_strategies", true);
    public get spotMaintenanceStrategies() {
      return this.__spotMaintenanceStrategiesOutput;
    }
    public putSpotMaintenanceStrategies(value: SpotFleetRequestSpotMaintenanceStrategies | undefined) {
      this._spotMaintenanceStrategies = value;
    }
    public resetSpotMaintenanceStrategies() {
      this._spotMaintenanceStrategies = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotMaintenanceStrategiesInput() {
      return this._spotMaintenanceStrategies
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: SpotFleetRequestTimeouts | undefined; 
    private __timeoutsOutput = new SpotFleetRequestTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: SpotFleetRequestTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        allocation_strategy: cdktf.stringToTerraform(this._allocationStrategy),
        excess_capacity_termination_policy: cdktf.stringToTerraform(this._excessCapacityTerminationPolicy),
        fleet_type: cdktf.stringToTerraform(this._fleetType),
        iam_fleet_role: cdktf.stringToTerraform(this._iamFleetRole),
        instance_interruption_behaviour: cdktf.stringToTerraform(this._instanceInterruptionBehaviour),
        instance_pools_to_use_count: cdktf.numberToTerraform(this._instancePoolsToUseCount),
        load_balancers: cdktf.listMapper(cdktf.stringToTerraform)(this._loadBalancers),
        on_demand_allocation_strategy: cdktf.stringToTerraform(this._onDemandAllocationStrategy),
        on_demand_max_total_price: cdktf.stringToTerraform(this._onDemandMaxTotalPrice),
        on_demand_target_capacity: cdktf.numberToTerraform(this._onDemandTargetCapacity),
        replace_unhealthy_instances: cdktf.booleanToTerraform(this._replaceUnhealthyInstances),
        spot_price: cdktf.stringToTerraform(this._spotPrice),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        target_capacity: cdktf.numberToTerraform(this._targetCapacity),
        target_group_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._targetGroupArns),
        terminate_instances_with_expiration: cdktf.booleanToTerraform(this._terminateInstancesWithExpiration),
        valid_from: cdktf.stringToTerraform(this._validFrom),
        valid_until: cdktf.stringToTerraform(this._validUntil),
        wait_for_fulfillment: cdktf.booleanToTerraform(this._waitForFulfillment),
        launch_specification: cdktf.listMapper(spotFleetRequestLaunchSpecificationToTerraform)(this._launchSpecification),
        launch_template_config: cdktf.listMapper(spotFleetRequestLaunchTemplateConfigToTerraform)(this._launchTemplateConfig),
        spot_maintenance_strategies: spotFleetRequestSpotMaintenanceStrategiesToTerraform(this._spotMaintenanceStrategies),
        timeouts: spotFleetRequestTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface SpotInstanceRequestConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#ami SpotInstanceRequest#ami}
    */
    readonly ami?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#associate_public_ip_address SpotInstanceRequest#associate_public_ip_address}
    */
    readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#availability_zone SpotInstanceRequest#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#block_duration_minutes SpotInstanceRequest#block_duration_minutes}
    */
    readonly blockDurationMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#cpu_core_count SpotInstanceRequest#cpu_core_count}
    */
    readonly cpuCoreCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#cpu_threads_per_core SpotInstanceRequest#cpu_threads_per_core}
    */
    readonly cpuThreadsPerCore?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#disable_api_termination SpotInstanceRequest#disable_api_termination}
    */
    readonly disableApiTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#ebs_optimized SpotInstanceRequest#ebs_optimized}
    */
    readonly ebsOptimized?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#get_password_data SpotInstanceRequest#get_password_data}
    */
    readonly fetchPasswordData?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#hibernation SpotInstanceRequest#hibernation}
    */
    readonly hibernation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#host_id SpotInstanceRequest#host_id}
    */
    readonly hostId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#iam_instance_profile SpotInstanceRequest#iam_instance_profile}
    */
    readonly iamInstanceProfile?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#instance_initiated_shutdown_behavior SpotInstanceRequest#instance_initiated_shutdown_behavior}
    */
    readonly instanceInitiatedShutdownBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#instance_interruption_behavior SpotInstanceRequest#instance_interruption_behavior}
    */
    readonly instanceInterruptionBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#instance_interruption_behaviour SpotInstanceRequest#instance_interruption_behaviour}
    */
    readonly instanceInterruptionBehaviour?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#instance_type SpotInstanceRequest#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#ipv6_address_count SpotInstanceRequest#ipv6_address_count}
    */
    readonly ipv6AddressCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#ipv6_addresses SpotInstanceRequest#ipv6_addresses}
    */
    readonly ipv6Addresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#key_name SpotInstanceRequest#key_name}
    */
    readonly keyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#launch_group SpotInstanceRequest#launch_group}
    */
    readonly launchGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#monitoring SpotInstanceRequest#monitoring}
    */
    readonly monitoring?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#placement_group SpotInstanceRequest#placement_group}
    */
    readonly placementGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#placement_partition_number SpotInstanceRequest#placement_partition_number}
    */
    readonly placementPartitionNumber?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#private_ip SpotInstanceRequest#private_ip}
    */
    readonly privateIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#secondary_private_ips SpotInstanceRequest#secondary_private_ips}
    */
    readonly secondaryPrivateIps?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#security_groups SpotInstanceRequest#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#source_dest_check SpotInstanceRequest#source_dest_check}
    */
    readonly sourceDestCheck?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#spot_price SpotInstanceRequest#spot_price}
    */
    readonly spotPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#spot_type SpotInstanceRequest#spot_type}
    */
    readonly spotType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#subnet_id SpotInstanceRequest#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#tags SpotInstanceRequest#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#tags_all SpotInstanceRequest#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#tenancy SpotInstanceRequest#tenancy}
    */
    readonly tenancy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#user_data SpotInstanceRequest#user_data}
    */
    readonly userData?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#user_data_base64 SpotInstanceRequest#user_data_base64}
    */
    readonly userDataBase64?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#valid_from SpotInstanceRequest#valid_from}
    */
    readonly validFrom?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#valid_until SpotInstanceRequest#valid_until}
    */
    readonly validUntil?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#volume_tags SpotInstanceRequest#volume_tags}
    */
    readonly volumeTags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#vpc_security_group_ids SpotInstanceRequest#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#wait_for_fulfillment SpotInstanceRequest#wait_for_fulfillment}
    */
    readonly waitForFulfillment?: boolean | cdktf.IResolvable;
    /**
    * capacity_reservation_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#capacity_reservation_specification SpotInstanceRequest#capacity_reservation_specification}
    */
    readonly capacityReservationSpecification?: SpotInstanceRequestCapacityReservationSpecification;
    /**
    * credit_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#credit_specification SpotInstanceRequest#credit_specification}
    */
    readonly creditSpecification?: SpotInstanceRequestCreditSpecification;
    /**
    * ebs_block_device block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#ebs_block_device SpotInstanceRequest#ebs_block_device}
    */
    readonly ebsBlockDevice?: SpotInstanceRequestEbsBlockDevice[];
    /**
    * enclave_options block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#enclave_options SpotInstanceRequest#enclave_options}
    */
    readonly enclaveOptions?: SpotInstanceRequestEnclaveOptions;
    /**
    * ephemeral_block_device block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#ephemeral_block_device SpotInstanceRequest#ephemeral_block_device}
    */
    readonly ephemeralBlockDevice?: SpotInstanceRequestEphemeralBlockDevice[];
    /**
    * launch_template block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#launch_template SpotInstanceRequest#launch_template}
    */
    readonly launchTemplate?: SpotInstanceRequestLaunchTemplate;
    /**
    * metadata_options block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#metadata_options SpotInstanceRequest#metadata_options}
    */
    readonly metadataOptions?: SpotInstanceRequestMetadataOptions;
    /**
    * network_interface block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#network_interface SpotInstanceRequest#network_interface}
    */
    readonly networkInterface?: SpotInstanceRequestNetworkInterface[];
    /**
    * root_block_device block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#root_block_device SpotInstanceRequest#root_block_device}
    */
    readonly rootBlockDevice?: SpotInstanceRequestRootBlockDevice;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#timeouts SpotInstanceRequest#timeouts}
    */
    readonly timeouts?: SpotInstanceRequestTimeouts;
  }
  export interface SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#capacity_reservation_id SpotInstanceRequest#capacity_reservation_id}
    */
    readonly capacityReservationId?: string;
  }

  function spotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct?: SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference | SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      capacity_reservation_id: cdktf.stringToTerraform(struct!.capacityReservationId),
    }
  }

  export class SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // capacity_reservation_id - computed: false, optional: true, required: false
    private _capacityReservationId?: string | undefined; 
    public get capacityReservationId() {
      return this.getStringAttribute('capacity_reservation_id');
    }
    public set capacityReservationId(value: string | undefined) {
      this._capacityReservationId = value;
    }
    public resetCapacityReservationId() {
      this._capacityReservationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationIdInput() {
      return this._capacityReservationId
    }
  }
  export interface SpotInstanceRequestCapacityReservationSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#capacity_reservation_preference SpotInstanceRequest#capacity_reservation_preference}
    */
    readonly capacityReservationPreference?: string;
    /**
    * capacity_reservation_target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#capacity_reservation_target SpotInstanceRequest#capacity_reservation_target}
    */
    readonly capacityReservationTarget?: SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget;
  }

  function spotInstanceRequestCapacityReservationSpecificationToTerraform(struct?: SpotInstanceRequestCapacityReservationSpecificationOutputReference | SpotInstanceRequestCapacityReservationSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      capacity_reservation_preference: cdktf.stringToTerraform(struct!.capacityReservationPreference),
      capacity_reservation_target: spotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct!.capacityReservationTarget),
    }
  }

  export class SpotInstanceRequestCapacityReservationSpecificationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // capacity_reservation_preference - computed: false, optional: true, required: false
    private _capacityReservationPreference?: string | undefined; 
    public get capacityReservationPreference() {
      return this.getStringAttribute('capacity_reservation_preference');
    }
    public set capacityReservationPreference(value: string | undefined) {
      this._capacityReservationPreference = value;
    }
    public resetCapacityReservationPreference() {
      this._capacityReservationPreference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationPreferenceInput() {
      return this._capacityReservationPreference
    }

    // capacity_reservation_target - computed: false, optional: true, required: false
    private _capacityReservationTarget?: SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget | undefined; 
    private __capacityReservationTargetOutput = new SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference(this as any, "capacity_reservation_target", true);
    public get capacityReservationTarget() {
      return this.__capacityReservationTargetOutput;
    }
    public putCapacityReservationTarget(value: SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget | undefined) {
      this._capacityReservationTarget = value;
    }
    public resetCapacityReservationTarget() {
      this._capacityReservationTarget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationTargetInput() {
      return this._capacityReservationTarget
    }
  }
  export interface SpotInstanceRequestCreditSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#cpu_credits SpotInstanceRequest#cpu_credits}
    */
    readonly cpuCredits?: string;
  }

  function spotInstanceRequestCreditSpecificationToTerraform(struct?: SpotInstanceRequestCreditSpecificationOutputReference | SpotInstanceRequestCreditSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cpu_credits: cdktf.stringToTerraform(struct!.cpuCredits),
    }
  }

  export class SpotInstanceRequestCreditSpecificationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // cpu_credits - computed: false, optional: true, required: false
    private _cpuCredits?: string | undefined; 
    public get cpuCredits() {
      return this.getStringAttribute('cpu_credits');
    }
    public set cpuCredits(value: string | undefined) {
      this._cpuCredits = value;
    }
    public resetCpuCredits() {
      this._cpuCredits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuCreditsInput() {
      return this._cpuCredits
    }
  }
  export interface SpotInstanceRequestEbsBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#delete_on_termination SpotInstanceRequest#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#device_name SpotInstanceRequest#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#encrypted SpotInstanceRequest#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#iops SpotInstanceRequest#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#kms_key_id SpotInstanceRequest#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#snapshot_id SpotInstanceRequest#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#tags SpotInstanceRequest#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#throughput SpotInstanceRequest#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#volume_size SpotInstanceRequest#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#volume_type SpotInstanceRequest#volume_type}
    */
    readonly volumeType?: string;
  }

  function spotInstanceRequestEbsBlockDeviceToTerraform(struct?: SpotInstanceRequestEbsBlockDevice): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
      device_name: cdktf.stringToTerraform(struct!.deviceName),
      encrypted: cdktf.booleanToTerraform(struct!.encrypted),
      iops: cdktf.numberToTerraform(struct!.iops),
      kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
      snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
      throughput: cdktf.numberToTerraform(struct!.throughput),
      volume_size: cdktf.numberToTerraform(struct!.volumeSize),
      volume_type: cdktf.stringToTerraform(struct!.volumeType),
    }
  }

  export interface SpotInstanceRequestEnclaveOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#enabled SpotInstanceRequest#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
  }

  function spotInstanceRequestEnclaveOptionsToTerraform(struct?: SpotInstanceRequestEnclaveOptionsOutputReference | SpotInstanceRequestEnclaveOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
    }
  }

  export class SpotInstanceRequestEnclaveOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }
  }
  export interface SpotInstanceRequestEphemeralBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#device_name SpotInstanceRequest#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#no_device SpotInstanceRequest#no_device}
    */
    readonly noDevice?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#virtual_name SpotInstanceRequest#virtual_name}
    */
    readonly virtualName?: string;
  }

  function spotInstanceRequestEphemeralBlockDeviceToTerraform(struct?: SpotInstanceRequestEphemeralBlockDevice): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      device_name: cdktf.stringToTerraform(struct!.deviceName),
      no_device: cdktf.booleanToTerraform(struct!.noDevice),
      virtual_name: cdktf.stringToTerraform(struct!.virtualName),
    }
  }

  export interface SpotInstanceRequestLaunchTemplate {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#id SpotInstanceRequest#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#name SpotInstanceRequest#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#version SpotInstanceRequest#version}
    */
    readonly version?: string;
  }

  function spotInstanceRequestLaunchTemplateToTerraform(struct?: SpotInstanceRequestLaunchTemplateOutputReference | SpotInstanceRequestLaunchTemplate): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      version: cdktf.stringToTerraform(struct!.version),
    }
  }

  export class SpotInstanceRequestLaunchTemplateOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // version - computed: false, optional: true, required: false
    private _version?: string | undefined; 
    public get version() {
      return this.getStringAttribute('version');
    }
    public set version(value: string | undefined) {
      this._version = value;
    }
    public resetVersion() {
      this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
      return this._version
    }
  }
  export interface SpotInstanceRequestMetadataOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#http_endpoint SpotInstanceRequest#http_endpoint}
    */
    readonly httpEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#http_put_response_hop_limit SpotInstanceRequest#http_put_response_hop_limit}
    */
    readonly httpPutResponseHopLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#http_tokens SpotInstanceRequest#http_tokens}
    */
    readonly httpTokens?: string;
  }

  function spotInstanceRequestMetadataOptionsToTerraform(struct?: SpotInstanceRequestMetadataOptionsOutputReference | SpotInstanceRequestMetadataOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      http_endpoint: cdktf.stringToTerraform(struct!.httpEndpoint),
      http_put_response_hop_limit: cdktf.numberToTerraform(struct!.httpPutResponseHopLimit),
      http_tokens: cdktf.stringToTerraform(struct!.httpTokens),
    }
  }

  export class SpotInstanceRequestMetadataOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // http_endpoint - computed: true, optional: true, required: false
    private _httpEndpoint?: string | undefined; 
    public get httpEndpoint() {
      return this.getStringAttribute('http_endpoint');
    }
    public set httpEndpoint(value: string | undefined) {
      this._httpEndpoint = value;
    }
    public resetHttpEndpoint() {
      this._httpEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpEndpointInput() {
      return this._httpEndpoint
    }

    // http_put_response_hop_limit - computed: true, optional: true, required: false
    private _httpPutResponseHopLimit?: number | undefined; 
    public get httpPutResponseHopLimit() {
      return this.getNumberAttribute('http_put_response_hop_limit');
    }
    public set httpPutResponseHopLimit(value: number | undefined) {
      this._httpPutResponseHopLimit = value;
    }
    public resetHttpPutResponseHopLimit() {
      this._httpPutResponseHopLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpPutResponseHopLimitInput() {
      return this._httpPutResponseHopLimit
    }

    // http_tokens - computed: true, optional: true, required: false
    private _httpTokens?: string | undefined; 
    public get httpTokens() {
      return this.getStringAttribute('http_tokens');
    }
    public set httpTokens(value: string | undefined) {
      this._httpTokens = value;
    }
    public resetHttpTokens() {
      this._httpTokens = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpTokensInput() {
      return this._httpTokens
    }
  }
  export interface SpotInstanceRequestNetworkInterface {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#delete_on_termination SpotInstanceRequest#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#device_index SpotInstanceRequest#device_index}
    */
    readonly deviceIndex: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#network_interface_id SpotInstanceRequest#network_interface_id}
    */
    readonly networkInterfaceId: string;
  }

  function spotInstanceRequestNetworkInterfaceToTerraform(struct?: SpotInstanceRequestNetworkInterface): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
      device_index: cdktf.numberToTerraform(struct!.deviceIndex),
      network_interface_id: cdktf.stringToTerraform(struct!.networkInterfaceId),
    }
  }

  export interface SpotInstanceRequestRootBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#delete_on_termination SpotInstanceRequest#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#encrypted SpotInstanceRequest#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#iops SpotInstanceRequest#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#kms_key_id SpotInstanceRequest#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#tags SpotInstanceRequest#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#throughput SpotInstanceRequest#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#volume_size SpotInstanceRequest#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#volume_type SpotInstanceRequest#volume_type}
    */
    readonly volumeType?: string;
  }

  function spotInstanceRequestRootBlockDeviceToTerraform(struct?: SpotInstanceRequestRootBlockDeviceOutputReference | SpotInstanceRequestRootBlockDevice): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
      encrypted: cdktf.booleanToTerraform(struct!.encrypted),
      iops: cdktf.numberToTerraform(struct!.iops),
      kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
      throughput: cdktf.numberToTerraform(struct!.throughput),
      volume_size: cdktf.numberToTerraform(struct!.volumeSize),
      volume_type: cdktf.stringToTerraform(struct!.volumeType),
    }
  }

  export class SpotInstanceRequestRootBlockDeviceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // delete_on_termination - computed: false, optional: true, required: false
    private _deleteOnTermination?: boolean | cdktf.IResolvable | undefined; 
    public get deleteOnTermination() {
      return this.getBooleanAttribute('delete_on_termination') as any;
    }
    public set deleteOnTermination(value: boolean | cdktf.IResolvable | undefined) {
      this._deleteOnTermination = value;
    }
    public resetDeleteOnTermination() {
      this._deleteOnTermination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteOnTerminationInput() {
      return this._deleteOnTermination
    }

    // encrypted - computed: true, optional: true, required: false
    private _encrypted?: boolean | cdktf.IResolvable | undefined; 
    public get encrypted() {
      return this.getBooleanAttribute('encrypted') as any;
    }
    public set encrypted(value: boolean | cdktf.IResolvable | undefined) {
      this._encrypted = value;
    }
    public resetEncrypted() {
      this._encrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptedInput() {
      return this._encrypted
    }

    // iops - computed: true, optional: true, required: false
    private _iops?: number | undefined; 
    public get iops() {
      return this.getNumberAttribute('iops');
    }
    public set iops(value: number | undefined) {
      this._iops = value;
    }
    public resetIops() {
      this._iops = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iopsInput() {
      return this._iops
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // throughput - computed: true, optional: true, required: false
    private _throughput?: number | undefined; 
    public get throughput() {
      return this.getNumberAttribute('throughput');
    }
    public set throughput(value: number | undefined) {
      this._throughput = value;
    }
    public resetThroughput() {
      this._throughput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throughputInput() {
      return this._throughput
    }

    // volume_size - computed: true, optional: true, required: false
    private _volumeSize?: number | undefined; 
    public get volumeSize() {
      return this.getNumberAttribute('volume_size');
    }
    public set volumeSize(value: number | undefined) {
      this._volumeSize = value;
    }
    public resetVolumeSize() {
      this._volumeSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeSizeInput() {
      return this._volumeSize
    }

    // volume_type - computed: true, optional: true, required: false
    private _volumeType?: string | undefined; 
    public get volumeType() {
      return this.getStringAttribute('volume_type');
    }
    public set volumeType(value: string | undefined) {
      this._volumeType = value;
    }
    public resetVolumeType() {
      this._volumeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeTypeInput() {
      return this._volumeType
    }
  }
  export interface SpotInstanceRequestTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#create SpotInstanceRequest#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#delete SpotInstanceRequest#delete}
    */
    readonly delete?: string;
  }

  function spotInstanceRequestTimeoutsToTerraform(struct?: SpotInstanceRequestTimeoutsOutputReference | SpotInstanceRequestTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class SpotInstanceRequestTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html aws_spot_instance_request}
  */
  export class SpotInstanceRequest extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_spot_instance_request";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html aws_spot_instance_request} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SpotInstanceRequestConfig = {}
    */
    public constructor(scope: Construct, id: string, config: SpotInstanceRequestConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_spot_instance_request',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._ami = config.ami;
      this._associatePublicIpAddress = config.associatePublicIpAddress;
      this._availabilityZone = config.availabilityZone;
      this._blockDurationMinutes = config.blockDurationMinutes;
      this._cpuCoreCount = config.cpuCoreCount;
      this._cpuThreadsPerCore = config.cpuThreadsPerCore;
      this._disableApiTermination = config.disableApiTermination;
      this._ebsOptimized = config.ebsOptimized;
      this._getPasswordData = config.fetchPasswordData;
      this._hibernation = config.hibernation;
      this._hostId = config.hostId;
      this._iamInstanceProfile = config.iamInstanceProfile;
      this._instanceInitiatedShutdownBehavior = config.instanceInitiatedShutdownBehavior;
      this._instanceInterruptionBehavior = config.instanceInterruptionBehavior;
      this._instanceInterruptionBehaviour = config.instanceInterruptionBehaviour;
      this._instanceType = config.instanceType;
      this._ipv6AddressCount = config.ipv6AddressCount;
      this._ipv6Addresses = config.ipv6Addresses;
      this._keyName = config.keyName;
      this._launchGroup = config.launchGroup;
      this._monitoring = config.monitoring;
      this._placementGroup = config.placementGroup;
      this._placementPartitionNumber = config.placementPartitionNumber;
      this._privateIp = config.privateIp;
      this._secondaryPrivateIps = config.secondaryPrivateIps;
      this._securityGroups = config.securityGroups;
      this._sourceDestCheck = config.sourceDestCheck;
      this._spotPrice = config.spotPrice;
      this._spotType = config.spotType;
      this._subnetId = config.subnetId;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._tenancy = config.tenancy;
      this._userData = config.userData;
      this._userDataBase64 = config.userDataBase64;
      this._validFrom = config.validFrom;
      this._validUntil = config.validUntil;
      this._volumeTags = config.volumeTags;
      this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
      this._waitForFulfillment = config.waitForFulfillment;
      this._capacityReservationSpecification = config.capacityReservationSpecification;
      this._creditSpecification = config.creditSpecification;
      this._ebsBlockDevice = config.ebsBlockDevice;
      this._enclaveOptions = config.enclaveOptions;
      this._ephemeralBlockDevice = config.ephemeralBlockDevice;
      this._launchTemplate = config.launchTemplate;
      this._metadataOptions = config.metadataOptions;
      this._networkInterface = config.networkInterface;
      this._rootBlockDevice = config.rootBlockDevice;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // ami - computed: true, optional: true, required: false
    private _ami?: string | undefined; 
    public get ami() {
      return this.getStringAttribute('ami');
    }
    public set ami(value: string | undefined) {
      this._ami = value;
    }
    public resetAmi() {
      this._ami = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amiInput() {
      return this._ami
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // associate_public_ip_address - computed: true, optional: true, required: false
    private _associatePublicIpAddress?: boolean | cdktf.IResolvable | undefined; 
    public get associatePublicIpAddress() {
      return this.getBooleanAttribute('associate_public_ip_address') as any;
    }
    public set associatePublicIpAddress(value: boolean | cdktf.IResolvable | undefined) {
      this._associatePublicIpAddress = value;
    }
    public resetAssociatePublicIpAddress() {
      this._associatePublicIpAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associatePublicIpAddressInput() {
      return this._associatePublicIpAddress
    }

    // availability_zone - computed: true, optional: true, required: false
    private _availabilityZone?: string | undefined; 
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string | undefined) {
      this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
      this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
      return this._availabilityZone
    }

    // block_duration_minutes - computed: false, optional: true, required: false
    private _blockDurationMinutes?: number | undefined; 
    public get blockDurationMinutes() {
      return this.getNumberAttribute('block_duration_minutes');
    }
    public set blockDurationMinutes(value: number | undefined) {
      this._blockDurationMinutes = value;
    }
    public resetBlockDurationMinutes() {
      this._blockDurationMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockDurationMinutesInput() {
      return this._blockDurationMinutes
    }

    // cpu_core_count - computed: true, optional: true, required: false
    private _cpuCoreCount?: number | undefined; 
    public get cpuCoreCount() {
      return this.getNumberAttribute('cpu_core_count');
    }
    public set cpuCoreCount(value: number | undefined) {
      this._cpuCoreCount = value;
    }
    public resetCpuCoreCount() {
      this._cpuCoreCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuCoreCountInput() {
      return this._cpuCoreCount
    }

    // cpu_threads_per_core - computed: true, optional: true, required: false
    private _cpuThreadsPerCore?: number | undefined; 
    public get cpuThreadsPerCore() {
      return this.getNumberAttribute('cpu_threads_per_core');
    }
    public set cpuThreadsPerCore(value: number | undefined) {
      this._cpuThreadsPerCore = value;
    }
    public resetCpuThreadsPerCore() {
      this._cpuThreadsPerCore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuThreadsPerCoreInput() {
      return this._cpuThreadsPerCore
    }

    // disable_api_termination - computed: true, optional: true, required: false
    private _disableApiTermination?: boolean | cdktf.IResolvable | undefined; 
    public get disableApiTermination() {
      return this.getBooleanAttribute('disable_api_termination') as any;
    }
    public set disableApiTermination(value: boolean | cdktf.IResolvable | undefined) {
      this._disableApiTermination = value;
    }
    public resetDisableApiTermination() {
      this._disableApiTermination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableApiTerminationInput() {
      return this._disableApiTermination
    }

    // ebs_optimized - computed: true, optional: true, required: false
    private _ebsOptimized?: boolean | cdktf.IResolvable | undefined; 
    public get ebsOptimized() {
      return this.getBooleanAttribute('ebs_optimized') as any;
    }
    public set ebsOptimized(value: boolean | cdktf.IResolvable | undefined) {
      this._ebsOptimized = value;
    }
    public resetEbsOptimized() {
      this._ebsOptimized = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsOptimizedInput() {
      return this._ebsOptimized
    }

    // get_password_data - computed: false, optional: true, required: false
    private _getPasswordData?: boolean | cdktf.IResolvable | undefined; 
    public get fetchPasswordData() {
      return this.getBooleanAttribute('get_password_data') as any;
    }
    public set fetchPasswordData(value: boolean | cdktf.IResolvable | undefined) {
      this._getPasswordData = value;
    }
    public resetFetchPasswordData() {
      this._getPasswordData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fetchPasswordDataInput() {
      return this._getPasswordData
    }

    // hibernation - computed: false, optional: true, required: false
    private _hibernation?: boolean | cdktf.IResolvable | undefined; 
    public get hibernation() {
      return this.getBooleanAttribute('hibernation') as any;
    }
    public set hibernation(value: boolean | cdktf.IResolvable | undefined) {
      this._hibernation = value;
    }
    public resetHibernation() {
      this._hibernation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hibernationInput() {
      return this._hibernation
    }

    // host_id - computed: true, optional: true, required: false
    private _hostId?: string | undefined; 
    public get hostId() {
      return this.getStringAttribute('host_id');
    }
    public set hostId(value: string | undefined) {
      this._hostId = value;
    }
    public resetHostId() {
      this._hostId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostIdInput() {
      return this._hostId
    }

    // iam_instance_profile - computed: false, optional: true, required: false
    private _iamInstanceProfile?: string | undefined; 
    public get iamInstanceProfile() {
      return this.getStringAttribute('iam_instance_profile');
    }
    public set iamInstanceProfile(value: string | undefined) {
      this._iamInstanceProfile = value;
    }
    public resetIamInstanceProfile() {
      this._iamInstanceProfile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamInstanceProfileInput() {
      return this._iamInstanceProfile
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_initiated_shutdown_behavior - computed: true, optional: true, required: false
    private _instanceInitiatedShutdownBehavior?: string | undefined; 
    public get instanceInitiatedShutdownBehavior() {
      return this.getStringAttribute('instance_initiated_shutdown_behavior');
    }
    public set instanceInitiatedShutdownBehavior(value: string | undefined) {
      this._instanceInitiatedShutdownBehavior = value;
    }
    public resetInstanceInitiatedShutdownBehavior() {
      this._instanceInitiatedShutdownBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceInitiatedShutdownBehaviorInput() {
      return this._instanceInitiatedShutdownBehavior
    }

    // instance_interruption_behavior - computed: true, optional: true, required: false
    private _instanceInterruptionBehavior?: string | undefined; 
    public get instanceInterruptionBehavior() {
      return this.getStringAttribute('instance_interruption_behavior');
    }
    public set instanceInterruptionBehavior(value: string | undefined) {
      this._instanceInterruptionBehavior = value;
    }
    public resetInstanceInterruptionBehavior() {
      this._instanceInterruptionBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceInterruptionBehaviorInput() {
      return this._instanceInterruptionBehavior
    }

    // instance_interruption_behaviour - computed: true, optional: true, required: false
    private _instanceInterruptionBehaviour?: string | undefined; 
    public get instanceInterruptionBehaviour() {
      return this.getStringAttribute('instance_interruption_behaviour');
    }
    public set instanceInterruptionBehaviour(value: string | undefined) {
      this._instanceInterruptionBehaviour = value;
    }
    public resetInstanceInterruptionBehaviour() {
      this._instanceInterruptionBehaviour = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceInterruptionBehaviourInput() {
      return this._instanceInterruptionBehaviour
    }

    // instance_state - computed: true, optional: false, required: false
    public get instanceState() {
      return this.getStringAttribute('instance_state');
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string | undefined; 
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string | undefined) {
      this._instanceType = value;
    }
    public resetInstanceType() {
      this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
      return this._instanceType
    }

    // ipv6_address_count - computed: true, optional: true, required: false
    private _ipv6AddressCount?: number | undefined; 
    public get ipv6AddressCount() {
      return this.getNumberAttribute('ipv6_address_count');
    }
    public set ipv6AddressCount(value: number | undefined) {
      this._ipv6AddressCount = value;
    }
    public resetIpv6AddressCount() {
      this._ipv6AddressCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6AddressCountInput() {
      return this._ipv6AddressCount
    }

    // ipv6_addresses - computed: true, optional: true, required: false
    private _ipv6Addresses?: string[] | undefined; 
    public get ipv6Addresses() {
      return this.getListAttribute('ipv6_addresses');
    }
    public set ipv6Addresses(value: string[] | undefined) {
      this._ipv6Addresses = value;
    }
    public resetIpv6Addresses() {
      this._ipv6Addresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6AddressesInput() {
      return this._ipv6Addresses
    }

    // key_name - computed: true, optional: true, required: false
    private _keyName?: string | undefined; 
    public get keyName() {
      return this.getStringAttribute('key_name');
    }
    public set keyName(value: string | undefined) {
      this._keyName = value;
    }
    public resetKeyName() {
      this._keyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyNameInput() {
      return this._keyName
    }

    // launch_group - computed: false, optional: true, required: false
    private _launchGroup?: string | undefined; 
    public get launchGroup() {
      return this.getStringAttribute('launch_group');
    }
    public set launchGroup(value: string | undefined) {
      this._launchGroup = value;
    }
    public resetLaunchGroup() {
      this._launchGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchGroupInput() {
      return this._launchGroup
    }

    // monitoring - computed: true, optional: true, required: false
    private _monitoring?: boolean | cdktf.IResolvable | undefined; 
    public get monitoring() {
      return this.getBooleanAttribute('monitoring') as any;
    }
    public set monitoring(value: boolean | cdktf.IResolvable | undefined) {
      this._monitoring = value;
    }
    public resetMonitoring() {
      this._monitoring = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringInput() {
      return this._monitoring
    }

    // outpost_arn - computed: true, optional: false, required: false
    public get outpostArn() {
      return this.getStringAttribute('outpost_arn');
    }

    // password_data - computed: true, optional: false, required: false
    public get passwordData() {
      return this.getStringAttribute('password_data');
    }

    // placement_group - computed: true, optional: true, required: false
    private _placementGroup?: string | undefined; 
    public get placementGroup() {
      return this.getStringAttribute('placement_group');
    }
    public set placementGroup(value: string | undefined) {
      this._placementGroup = value;
    }
    public resetPlacementGroup() {
      this._placementGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementGroupInput() {
      return this._placementGroup
    }

    // placement_partition_number - computed: true, optional: true, required: false
    private _placementPartitionNumber?: number | undefined; 
    public get placementPartitionNumber() {
      return this.getNumberAttribute('placement_partition_number');
    }
    public set placementPartitionNumber(value: number | undefined) {
      this._placementPartitionNumber = value;
    }
    public resetPlacementPartitionNumber() {
      this._placementPartitionNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementPartitionNumberInput() {
      return this._placementPartitionNumber
    }

    // primary_network_interface_id - computed: true, optional: false, required: false
    public get primaryNetworkInterfaceId() {
      return this.getStringAttribute('primary_network_interface_id');
    }

    // private_dns - computed: true, optional: false, required: false
    public get privateDns() {
      return this.getStringAttribute('private_dns');
    }

    // private_ip - computed: true, optional: true, required: false
    private _privateIp?: string | undefined; 
    public get privateIp() {
      return this.getStringAttribute('private_ip');
    }
    public set privateIp(value: string | undefined) {
      this._privateIp = value;
    }
    public resetPrivateIp() {
      this._privateIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateIpInput() {
      return this._privateIp
    }

    // public_dns - computed: true, optional: false, required: false
    public get publicDns() {
      return this.getStringAttribute('public_dns');
    }

    // public_ip - computed: true, optional: false, required: false
    public get publicIp() {
      return this.getStringAttribute('public_ip');
    }

    // secondary_private_ips - computed: true, optional: true, required: false
    private _secondaryPrivateIps?: string[] | undefined; 
    public get secondaryPrivateIps() {
      return this.getListAttribute('secondary_private_ips');
    }
    public set secondaryPrivateIps(value: string[] | undefined) {
      this._secondaryPrivateIps = value;
    }
    public resetSecondaryPrivateIps() {
      this._secondaryPrivateIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondaryPrivateIpsInput() {
      return this._secondaryPrivateIps
    }

    // security_groups - computed: true, optional: true, required: false
    private _securityGroups?: string[] | undefined; 
    public get securityGroups() {
      return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[] | undefined) {
      this._securityGroups = value;
    }
    public resetSecurityGroups() {
      this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
      return this._securityGroups
    }

    // source_dest_check - computed: false, optional: true, required: false
    private _sourceDestCheck?: boolean | cdktf.IResolvable | undefined; 
    public get sourceDestCheck() {
      return this.getBooleanAttribute('source_dest_check') as any;
    }
    public set sourceDestCheck(value: boolean | cdktf.IResolvable | undefined) {
      this._sourceDestCheck = value;
    }
    public resetSourceDestCheck() {
      this._sourceDestCheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceDestCheckInput() {
      return this._sourceDestCheck
    }

    // spot_bid_status - computed: true, optional: false, required: false
    public get spotBidStatus() {
      return this.getStringAttribute('spot_bid_status');
    }

    // spot_instance_id - computed: true, optional: false, required: false
    public get spotInstanceId() {
      return this.getStringAttribute('spot_instance_id');
    }

    // spot_price - computed: true, optional: true, required: false
    private _spotPrice?: string | undefined; 
    public get spotPrice() {
      return this.getStringAttribute('spot_price');
    }
    public set spotPrice(value: string | undefined) {
      this._spotPrice = value;
    }
    public resetSpotPrice() {
      this._spotPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotPriceInput() {
      return this._spotPrice
    }

    // spot_request_state - computed: true, optional: false, required: false
    public get spotRequestState() {
      return this.getStringAttribute('spot_request_state');
    }

    // spot_type - computed: false, optional: true, required: false
    private _spotType?: string | undefined; 
    public get spotType() {
      return this.getStringAttribute('spot_type');
    }
    public set spotType(value: string | undefined) {
      this._spotType = value;
    }
    public resetSpotType() {
      this._spotType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotTypeInput() {
      return this._spotType
    }

    // subnet_id - computed: true, optional: true, required: false
    private _subnetId?: string | undefined; 
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string | undefined) {
      this._subnetId = value;
    }
    public resetSubnetId() {
      this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
      return this._subnetId
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // tenancy - computed: true, optional: true, required: false
    private _tenancy?: string | undefined; 
    public get tenancy() {
      return this.getStringAttribute('tenancy');
    }
    public set tenancy(value: string | undefined) {
      this._tenancy = value;
    }
    public resetTenancy() {
      this._tenancy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tenancyInput() {
      return this._tenancy
    }

    // user_data - computed: true, optional: true, required: false
    private _userData?: string | undefined; 
    public get userData() {
      return this.getStringAttribute('user_data');
    }
    public set userData(value: string | undefined) {
      this._userData = value;
    }
    public resetUserData() {
      this._userData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userDataInput() {
      return this._userData
    }

    // user_data_base64 - computed: true, optional: true, required: false
    private _userDataBase64?: string | undefined; 
    public get userDataBase64() {
      return this.getStringAttribute('user_data_base64');
    }
    public set userDataBase64(value: string | undefined) {
      this._userDataBase64 = value;
    }
    public resetUserDataBase64() {
      this._userDataBase64 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userDataBase64Input() {
      return this._userDataBase64
    }

    // valid_from - computed: true, optional: true, required: false
    private _validFrom?: string | undefined; 
    public get validFrom() {
      return this.getStringAttribute('valid_from');
    }
    public set validFrom(value: string | undefined) {
      this._validFrom = value;
    }
    public resetValidFrom() {
      this._validFrom = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validFromInput() {
      return this._validFrom
    }

    // valid_until - computed: true, optional: true, required: false
    private _validUntil?: string | undefined; 
    public get validUntil() {
      return this.getStringAttribute('valid_until');
    }
    public set validUntil(value: string | undefined) {
      this._validUntil = value;
    }
    public resetValidUntil() {
      this._validUntil = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validUntilInput() {
      return this._validUntil
    }

    // volume_tags - computed: false, optional: true, required: false
    private _volumeTags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get volumeTags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('volume_tags') as any;
    }
    public set volumeTags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._volumeTags = value;
    }
    public resetVolumeTags() {
      this._volumeTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeTagsInput() {
      return this._volumeTags
    }

    // vpc_security_group_ids - computed: true, optional: true, required: false
    private _vpcSecurityGroupIds?: string[] | undefined; 
    public get vpcSecurityGroupIds() {
      return this.getListAttribute('vpc_security_group_ids');
    }
    public set vpcSecurityGroupIds(value: string[] | undefined) {
      this._vpcSecurityGroupIds = value;
    }
    public resetVpcSecurityGroupIds() {
      this._vpcSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcSecurityGroupIdsInput() {
      return this._vpcSecurityGroupIds
    }

    // wait_for_fulfillment - computed: false, optional: true, required: false
    private _waitForFulfillment?: boolean | cdktf.IResolvable | undefined; 
    public get waitForFulfillment() {
      return this.getBooleanAttribute('wait_for_fulfillment') as any;
    }
    public set waitForFulfillment(value: boolean | cdktf.IResolvable | undefined) {
      this._waitForFulfillment = value;
    }
    public resetWaitForFulfillment() {
      this._waitForFulfillment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get waitForFulfillmentInput() {
      return this._waitForFulfillment
    }

    // capacity_reservation_specification - computed: false, optional: true, required: false
    private _capacityReservationSpecification?: SpotInstanceRequestCapacityReservationSpecification | undefined; 
    private __capacityReservationSpecificationOutput = new SpotInstanceRequestCapacityReservationSpecificationOutputReference(this as any, "capacity_reservation_specification", true);
    public get capacityReservationSpecification() {
      return this.__capacityReservationSpecificationOutput;
    }
    public putCapacityReservationSpecification(value: SpotInstanceRequestCapacityReservationSpecification | undefined) {
      this._capacityReservationSpecification = value;
    }
    public resetCapacityReservationSpecification() {
      this._capacityReservationSpecification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationSpecificationInput() {
      return this._capacityReservationSpecification
    }

    // credit_specification - computed: false, optional: true, required: false
    private _creditSpecification?: SpotInstanceRequestCreditSpecification | undefined; 
    private __creditSpecificationOutput = new SpotInstanceRequestCreditSpecificationOutputReference(this as any, "credit_specification", true);
    public get creditSpecification() {
      return this.__creditSpecificationOutput;
    }
    public putCreditSpecification(value: SpotInstanceRequestCreditSpecification | undefined) {
      this._creditSpecification = value;
    }
    public resetCreditSpecification() {
      this._creditSpecification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get creditSpecificationInput() {
      return this._creditSpecification
    }

    // ebs_block_device - computed: false, optional: true, required: false
    private _ebsBlockDevice?: SpotInstanceRequestEbsBlockDevice[] | undefined; 
    public get ebsBlockDevice() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ebs_block_device') as any;
    }
    public set ebsBlockDevice(value: SpotInstanceRequestEbsBlockDevice[] | undefined) {
      this._ebsBlockDevice = value;
    }
    public resetEbsBlockDevice() {
      this._ebsBlockDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsBlockDeviceInput() {
      return this._ebsBlockDevice
    }

    // enclave_options - computed: false, optional: true, required: false
    private _enclaveOptions?: SpotInstanceRequestEnclaveOptions | undefined; 
    private __enclaveOptionsOutput = new SpotInstanceRequestEnclaveOptionsOutputReference(this as any, "enclave_options", true);
    public get enclaveOptions() {
      return this.__enclaveOptionsOutput;
    }
    public putEnclaveOptions(value: SpotInstanceRequestEnclaveOptions | undefined) {
      this._enclaveOptions = value;
    }
    public resetEnclaveOptions() {
      this._enclaveOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enclaveOptionsInput() {
      return this._enclaveOptions
    }

    // ephemeral_block_device - computed: false, optional: true, required: false
    private _ephemeralBlockDevice?: SpotInstanceRequestEphemeralBlockDevice[] | undefined; 
    public get ephemeralBlockDevice() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ephemeral_block_device') as any;
    }
    public set ephemeralBlockDevice(value: SpotInstanceRequestEphemeralBlockDevice[] | undefined) {
      this._ephemeralBlockDevice = value;
    }
    public resetEphemeralBlockDevice() {
      this._ephemeralBlockDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ephemeralBlockDeviceInput() {
      return this._ephemeralBlockDevice
    }

    // launch_template - computed: false, optional: true, required: false
    private _launchTemplate?: SpotInstanceRequestLaunchTemplate | undefined; 
    private __launchTemplateOutput = new SpotInstanceRequestLaunchTemplateOutputReference(this as any, "launch_template", true);
    public get launchTemplate() {
      return this.__launchTemplateOutput;
    }
    public putLaunchTemplate(value: SpotInstanceRequestLaunchTemplate | undefined) {
      this._launchTemplate = value;
    }
    public resetLaunchTemplate() {
      this._launchTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateInput() {
      return this._launchTemplate
    }

    // metadata_options - computed: false, optional: true, required: false
    private _metadataOptions?: SpotInstanceRequestMetadataOptions | undefined; 
    private __metadataOptionsOutput = new SpotInstanceRequestMetadataOptionsOutputReference(this as any, "metadata_options", true);
    public get metadataOptions() {
      return this.__metadataOptionsOutput;
    }
    public putMetadataOptions(value: SpotInstanceRequestMetadataOptions | undefined) {
      this._metadataOptions = value;
    }
    public resetMetadataOptions() {
      this._metadataOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataOptionsInput() {
      return this._metadataOptions
    }

    // network_interface - computed: false, optional: true, required: false
    private _networkInterface?: SpotInstanceRequestNetworkInterface[] | undefined; 
    public get networkInterface() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('network_interface') as any;
    }
    public set networkInterface(value: SpotInstanceRequestNetworkInterface[] | undefined) {
      this._networkInterface = value;
    }
    public resetNetworkInterface() {
      this._networkInterface = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceInput() {
      return this._networkInterface
    }

    // root_block_device - computed: false, optional: true, required: false
    private _rootBlockDevice?: SpotInstanceRequestRootBlockDevice | undefined; 
    private __rootBlockDeviceOutput = new SpotInstanceRequestRootBlockDeviceOutputReference(this as any, "root_block_device", true);
    public get rootBlockDevice() {
      return this.__rootBlockDeviceOutput;
    }
    public putRootBlockDevice(value: SpotInstanceRequestRootBlockDevice | undefined) {
      this._rootBlockDevice = value;
    }
    public resetRootBlockDevice() {
      this._rootBlockDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rootBlockDeviceInput() {
      return this._rootBlockDevice
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: SpotInstanceRequestTimeouts | undefined; 
    private __timeoutsOutput = new SpotInstanceRequestTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: SpotInstanceRequestTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        ami: cdktf.stringToTerraform(this._ami),
        associate_public_ip_address: cdktf.booleanToTerraform(this._associatePublicIpAddress),
        availability_zone: cdktf.stringToTerraform(this._availabilityZone),
        block_duration_minutes: cdktf.numberToTerraform(this._blockDurationMinutes),
        cpu_core_count: cdktf.numberToTerraform(this._cpuCoreCount),
        cpu_threads_per_core: cdktf.numberToTerraform(this._cpuThreadsPerCore),
        disable_api_termination: cdktf.booleanToTerraform(this._disableApiTermination),
        ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
        get_password_data: cdktf.booleanToTerraform(this._getPasswordData),
        hibernation: cdktf.booleanToTerraform(this._hibernation),
        host_id: cdktf.stringToTerraform(this._hostId),
        iam_instance_profile: cdktf.stringToTerraform(this._iamInstanceProfile),
        instance_initiated_shutdown_behavior: cdktf.stringToTerraform(this._instanceInitiatedShutdownBehavior),
        instance_interruption_behavior: cdktf.stringToTerraform(this._instanceInterruptionBehavior),
        instance_interruption_behaviour: cdktf.stringToTerraform(this._instanceInterruptionBehaviour),
        instance_type: cdktf.stringToTerraform(this._instanceType),
        ipv6_address_count: cdktf.numberToTerraform(this._ipv6AddressCount),
        ipv6_addresses: cdktf.listMapper(cdktf.stringToTerraform)(this._ipv6Addresses),
        key_name: cdktf.stringToTerraform(this._keyName),
        launch_group: cdktf.stringToTerraform(this._launchGroup),
        monitoring: cdktf.booleanToTerraform(this._monitoring),
        placement_group: cdktf.stringToTerraform(this._placementGroup),
        placement_partition_number: cdktf.numberToTerraform(this._placementPartitionNumber),
        private_ip: cdktf.stringToTerraform(this._privateIp),
        secondary_private_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._secondaryPrivateIps),
        security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
        source_dest_check: cdktf.booleanToTerraform(this._sourceDestCheck),
        spot_price: cdktf.stringToTerraform(this._spotPrice),
        spot_type: cdktf.stringToTerraform(this._spotType),
        subnet_id: cdktf.stringToTerraform(this._subnetId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        tenancy: cdktf.stringToTerraform(this._tenancy),
        user_data: cdktf.stringToTerraform(this._userData),
        user_data_base64: cdktf.stringToTerraform(this._userDataBase64),
        valid_from: cdktf.stringToTerraform(this._validFrom),
        valid_until: cdktf.stringToTerraform(this._validUntil),
        volume_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._volumeTags),
        vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
        wait_for_fulfillment: cdktf.booleanToTerraform(this._waitForFulfillment),
        capacity_reservation_specification: spotInstanceRequestCapacityReservationSpecificationToTerraform(this._capacityReservationSpecification),
        credit_specification: spotInstanceRequestCreditSpecificationToTerraform(this._creditSpecification),
        ebs_block_device: cdktf.listMapper(spotInstanceRequestEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
        enclave_options: spotInstanceRequestEnclaveOptionsToTerraform(this._enclaveOptions),
        ephemeral_block_device: cdktf.listMapper(spotInstanceRequestEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
        launch_template: spotInstanceRequestLaunchTemplateToTerraform(this._launchTemplate),
        metadata_options: spotInstanceRequestMetadataOptionsToTerraform(this._metadataOptions),
        network_interface: cdktf.listMapper(spotInstanceRequestNetworkInterfaceToTerraform)(this._networkInterface),
        root_block_device: spotInstanceRequestRootBlockDeviceToTerraform(this._rootBlockDevice),
        timeouts: spotInstanceRequestTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface VolumeAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html#device_name VolumeAttachment#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html#force_detach VolumeAttachment#force_detach}
    */
    readonly forceDetach?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html#instance_id VolumeAttachment#instance_id}
    */
    readonly instanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html#skip_destroy VolumeAttachment#skip_destroy}
    */
    readonly skipDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html#stop_instance_before_detaching VolumeAttachment#stop_instance_before_detaching}
    */
    readonly stopInstanceBeforeDetaching?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html#volume_id VolumeAttachment#volume_id}
    */
    readonly volumeId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html aws_volume_attachment}
  */
  export class VolumeAttachment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_volume_attachment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html aws_volume_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VolumeAttachmentConfig
    */
    public constructor(scope: Construct, id: string, config: VolumeAttachmentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_volume_attachment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._deviceName = config.deviceName;
      this._forceDetach = config.forceDetach;
      this._instanceId = config.instanceId;
      this._skipDestroy = config.skipDestroy;
      this._stopInstanceBeforeDetaching = config.stopInstanceBeforeDetaching;
      this._volumeId = config.volumeId;
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
      return this._deviceName
    }

    // force_detach - computed: false, optional: true, required: false
    private _forceDetach?: boolean | cdktf.IResolvable | undefined; 
    public get forceDetach() {
      return this.getBooleanAttribute('force_detach') as any;
    }
    public set forceDetach(value: boolean | cdktf.IResolvable | undefined) {
      this._forceDetach = value;
    }
    public resetForceDetach() {
      this._forceDetach = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceDetachInput() {
      return this._forceDetach
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._instanceId
    }

    // skip_destroy - computed: false, optional: true, required: false
    private _skipDestroy?: boolean | cdktf.IResolvable | undefined; 
    public get skipDestroy() {
      return this.getBooleanAttribute('skip_destroy') as any;
    }
    public set skipDestroy(value: boolean | cdktf.IResolvable | undefined) {
      this._skipDestroy = value;
    }
    public resetSkipDestroy() {
      this._skipDestroy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get skipDestroyInput() {
      return this._skipDestroy
    }

    // stop_instance_before_detaching - computed: false, optional: true, required: false
    private _stopInstanceBeforeDetaching?: boolean | cdktf.IResolvable | undefined; 
    public get stopInstanceBeforeDetaching() {
      return this.getBooleanAttribute('stop_instance_before_detaching') as any;
    }
    public set stopInstanceBeforeDetaching(value: boolean | cdktf.IResolvable | undefined) {
      this._stopInstanceBeforeDetaching = value;
    }
    public resetStopInstanceBeforeDetaching() {
      this._stopInstanceBeforeDetaching = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stopInstanceBeforeDetachingInput() {
      return this._stopInstanceBeforeDetaching
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
      return this._volumeId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        device_name: cdktf.stringToTerraform(this._deviceName),
        force_detach: cdktf.booleanToTerraform(this._forceDetach),
        instance_id: cdktf.stringToTerraform(this._instanceId),
        skip_destroy: cdktf.booleanToTerraform(this._skipDestroy),
        stop_instance_before_detaching: cdktf.booleanToTerraform(this._stopInstanceBeforeDetaching),
        volume_id: cdktf.stringToTerraform(this._volumeId),
      };
    }
  }
  export interface DataAwsAmiConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami.html#executable_users DataAwsAmi#executable_users}
    */
    readonly executableUsers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami.html#most_recent DataAwsAmi#most_recent}
    */
    readonly mostRecent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami.html#name_regex DataAwsAmi#name_regex}
    */
    readonly nameRegex?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami.html#owners DataAwsAmi#owners}
    */
    readonly owners: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami.html#tags DataAwsAmi#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami.html#filter DataAwsAmi#filter}
    */
    readonly filter?: DataAwsAmiFilter[];
  }
  export class DataAwsAmiBlockDeviceMappings extends cdktf.ComplexComputedList {

    // device_name - computed: true, optional: false, required: false
    public get deviceName() {
      return this.getStringAttribute('device_name');
    }

    // ebs - computed: true, optional: false, required: false
    public get ebs() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ebs') as any;
    }

    // no_device - computed: true, optional: false, required: false
    public get noDevice() {
      return this.getStringAttribute('no_device');
    }

    // virtual_name - computed: true, optional: false, required: false
    public get virtualName() {
      return this.getStringAttribute('virtual_name');
    }
  }
  export class DataAwsAmiProductCodes extends cdktf.ComplexComputedList {

    // product_code_id - computed: true, optional: false, required: false
    public get productCodeId() {
      return this.getStringAttribute('product_code_id');
    }

    // product_code_type - computed: true, optional: false, required: false
    public get productCodeType() {
      return this.getStringAttribute('product_code_type');
    }
  }
  export interface DataAwsAmiFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami.html#name DataAwsAmi#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami.html#values DataAwsAmi#values}
    */
    readonly values: string[];
  }

  function dataAwsAmiFilterToTerraform(struct?: DataAwsAmiFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ami.html aws_ami}
  */
  export class DataAwsAmi extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ami";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ami.html aws_ami} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAmiConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsAmiConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ami',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._executableUsers = config.executableUsers;
      this._mostRecent = config.mostRecent;
      this._nameRegex = config.nameRegex;
      this._owners = config.owners;
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // architecture - computed: true, optional: false, required: false
    public get architecture() {
      return this.getStringAttribute('architecture');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // block_device_mappings - computed: true, optional: false, required: false
    public blockDeviceMappings(index: string) {
      return new DataAwsAmiBlockDeviceMappings(this, 'block_device_mappings', index);
    }

    // creation_date - computed: true, optional: false, required: false
    public get creationDate() {
      return this.getStringAttribute('creation_date');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // ena_support - computed: true, optional: false, required: false
    public get enaSupport() {
      return this.getBooleanAttribute('ena_support') as any;
    }

    // executable_users - computed: false, optional: true, required: false
    private _executableUsers?: string[] | undefined; 
    public get executableUsers() {
      return this.getListAttribute('executable_users');
    }
    public set executableUsers(value: string[] | undefined) {
      this._executableUsers = value;
    }
    public resetExecutableUsers() {
      this._executableUsers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executableUsersInput() {
      return this._executableUsers
    }

    // hypervisor - computed: true, optional: false, required: false
    public get hypervisor() {
      return this.getStringAttribute('hypervisor');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // image_id - computed: true, optional: false, required: false
    public get imageId() {
      return this.getStringAttribute('image_id');
    }

    // image_location - computed: true, optional: false, required: false
    public get imageLocation() {
      return this.getStringAttribute('image_location');
    }

    // image_owner_alias - computed: true, optional: false, required: false
    public get imageOwnerAlias() {
      return this.getStringAttribute('image_owner_alias');
    }

    // image_type - computed: true, optional: false, required: false
    public get imageType() {
      return this.getStringAttribute('image_type');
    }

    // kernel_id - computed: true, optional: false, required: false
    public get kernelId() {
      return this.getStringAttribute('kernel_id');
    }

    // most_recent - computed: false, optional: true, required: false
    private _mostRecent?: boolean | cdktf.IResolvable | undefined; 
    public get mostRecent() {
      return this.getBooleanAttribute('most_recent') as any;
    }
    public set mostRecent(value: boolean | cdktf.IResolvable | undefined) {
      this._mostRecent = value;
    }
    public resetMostRecent() {
      this._mostRecent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mostRecentInput() {
      return this._mostRecent
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // name_regex - computed: false, optional: true, required: false
    private _nameRegex?: string | undefined; 
    public get nameRegex() {
      return this.getStringAttribute('name_regex');
    }
    public set nameRegex(value: string | undefined) {
      this._nameRegex = value;
    }
    public resetNameRegex() {
      this._nameRegex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameRegexInput() {
      return this._nameRegex
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // owners - computed: false, optional: false, required: true
    private _owners?: string[]; 
    public get owners() {
      return this.getListAttribute('owners');
    }
    public set owners(value: string[]) {
      this._owners = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ownersInput() {
      return this._owners
    }

    // platform - computed: true, optional: false, required: false
    public get platform() {
      return this.getStringAttribute('platform');
    }

    // platform_details - computed: true, optional: false, required: false
    public get platformDetails() {
      return this.getStringAttribute('platform_details');
    }

    // product_codes - computed: true, optional: false, required: false
    public productCodes(index: string) {
      return new DataAwsAmiProductCodes(this, 'product_codes', index);
    }

    // public - computed: true, optional: false, required: false
    public get public() {
      return this.getBooleanAttribute('public') as any;
    }

    // ramdisk_id - computed: true, optional: false, required: false
    public get ramdiskId() {
      return this.getStringAttribute('ramdisk_id');
    }

    // root_device_name - computed: true, optional: false, required: false
    public get rootDeviceName() {
      return this.getStringAttribute('root_device_name');
    }

    // root_device_type - computed: true, optional: false, required: false
    public get rootDeviceType() {
      return this.getStringAttribute('root_device_type');
    }

    // root_snapshot_id - computed: true, optional: false, required: false
    public get rootSnapshotId() {
      return this.getStringAttribute('root_snapshot_id');
    }

    // sriov_net_support - computed: true, optional: false, required: false
    public get sriovNetSupport() {
      return this.getStringAttribute('sriov_net_support');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
      return this.getStringAttribute('state');
    }

    // state_reason - computed: true, optional: false, required: false
    public stateReason(key: string): string {
      return new cdktf.StringMap(this, 'state_reason').lookup(key);
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // usage_operation - computed: true, optional: false, required: false
    public get usageOperation() {
      return this.getStringAttribute('usage_operation');
    }

    // virtualization_type - computed: true, optional: false, required: false
    public get virtualizationType() {
      return this.getStringAttribute('virtualization_type');
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsAmiFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsAmiFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        executable_users: cdktf.listMapper(cdktf.stringToTerraform)(this._executableUsers),
        most_recent: cdktf.booleanToTerraform(this._mostRecent),
        name_regex: cdktf.stringToTerraform(this._nameRegex),
        owners: cdktf.listMapper(cdktf.stringToTerraform)(this._owners),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsAmiFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsAmiIdsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami_ids.html#executable_users DataAwsAmiIds#executable_users}
    */
    readonly executableUsers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami_ids.html#name_regex DataAwsAmiIds#name_regex}
    */
    readonly nameRegex?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami_ids.html#owners DataAwsAmiIds#owners}
    */
    readonly owners: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami_ids.html#sort_ascending DataAwsAmiIds#sort_ascending}
    */
    readonly sortAscending?: boolean | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami_ids.html#filter DataAwsAmiIds#filter}
    */
    readonly filter?: DataAwsAmiIdsFilter[];
  }
  export interface DataAwsAmiIdsFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami_ids.html#name DataAwsAmiIds#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami_ids.html#values DataAwsAmiIds#values}
    */
    readonly values: string[];
  }

  function dataAwsAmiIdsFilterToTerraform(struct?: DataAwsAmiIdsFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ami_ids.html aws_ami_ids}
  */
  export class DataAwsAmiIds extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ami_ids";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ami_ids.html aws_ami_ids} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAmiIdsConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsAmiIdsConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ami_ids',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._executableUsers = config.executableUsers;
      this._nameRegex = config.nameRegex;
      this._owners = config.owners;
      this._sortAscending = config.sortAscending;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // executable_users - computed: false, optional: true, required: false
    private _executableUsers?: string[] | undefined; 
    public get executableUsers() {
      return this.getListAttribute('executable_users');
    }
    public set executableUsers(value: string[] | undefined) {
      this._executableUsers = value;
    }
    public resetExecutableUsers() {
      this._executableUsers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executableUsersInput() {
      return this._executableUsers
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ids - computed: true, optional: false, required: false
    public get ids() {
      return this.getListAttribute('ids');
    }

    // name_regex - computed: false, optional: true, required: false
    private _nameRegex?: string | undefined; 
    public get nameRegex() {
      return this.getStringAttribute('name_regex');
    }
    public set nameRegex(value: string | undefined) {
      this._nameRegex = value;
    }
    public resetNameRegex() {
      this._nameRegex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameRegexInput() {
      return this._nameRegex
    }

    // owners - computed: false, optional: false, required: true
    private _owners?: string[]; 
    public get owners() {
      return this.getListAttribute('owners');
    }
    public set owners(value: string[]) {
      this._owners = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ownersInput() {
      return this._owners
    }

    // sort_ascending - computed: false, optional: true, required: false
    private _sortAscending?: boolean | cdktf.IResolvable | undefined; 
    public get sortAscending() {
      return this.getBooleanAttribute('sort_ascending') as any;
    }
    public set sortAscending(value: boolean | cdktf.IResolvable | undefined) {
      this._sortAscending = value;
    }
    public resetSortAscending() {
      this._sortAscending = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sortAscendingInput() {
      return this._sortAscending
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsAmiIdsFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsAmiIdsFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        executable_users: cdktf.listMapper(cdktf.stringToTerraform)(this._executableUsers),
        name_regex: cdktf.stringToTerraform(this._nameRegex),
        owners: cdktf.listMapper(cdktf.stringToTerraform)(this._owners),
        sort_ascending: cdktf.booleanToTerraform(this._sortAscending),
        filter: cdktf.listMapper(dataAwsAmiIdsFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsEbsDefaultKmsKeyConfig extends cdktf.TerraformMetaArguments {
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ebs_default_kms_key.html aws_ebs_default_kms_key}
  */
  export class DataAwsEbsDefaultKmsKey extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ebs_default_kms_key";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ebs_default_kms_key.html aws_ebs_default_kms_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEbsDefaultKmsKeyConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEbsDefaultKmsKeyConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ebs_default_kms_key',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // key_arn - computed: true, optional: false, required: false
    public get keyArn() {
      return this.getStringAttribute('key_arn');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
      };
    }
  }
  export interface DataAwsEbsEncryptionByDefaultConfig extends cdktf.TerraformMetaArguments {
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ebs_encryption_by_default.html aws_ebs_encryption_by_default}
  */
  export class DataAwsEbsEncryptionByDefault extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ebs_encryption_by_default";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ebs_encryption_by_default.html aws_ebs_encryption_by_default} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEbsEncryptionByDefaultConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEbsEncryptionByDefaultConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ebs_encryption_by_default',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
      };
    }
  }
  export interface DataAwsEbsSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#most_recent DataAwsEbsSnapshot#most_recent}
    */
    readonly mostRecent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#owners DataAwsEbsSnapshot#owners}
    */
    readonly owners?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#restorable_by_user_ids DataAwsEbsSnapshot#restorable_by_user_ids}
    */
    readonly restorableByUserIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#snapshot_ids DataAwsEbsSnapshot#snapshot_ids}
    */
    readonly snapshotIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#tags DataAwsEbsSnapshot#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#filter DataAwsEbsSnapshot#filter}
    */
    readonly filter?: DataAwsEbsSnapshotFilter[];
  }
  export interface DataAwsEbsSnapshotFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#name DataAwsEbsSnapshot#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#values DataAwsEbsSnapshot#values}
    */
    readonly values: string[];
  }

  function dataAwsEbsSnapshotFilterToTerraform(struct?: DataAwsEbsSnapshotFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html aws_ebs_snapshot}
  */
  export class DataAwsEbsSnapshot extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ebs_snapshot";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html aws_ebs_snapshot} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEbsSnapshotConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEbsSnapshotConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ebs_snapshot',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._mostRecent = config.mostRecent;
      this._owners = config.owners;
      this._restorableByUserIds = config.restorableByUserIds;
      this._snapshotIds = config.snapshotIds;
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // data_encryption_key_id - computed: true, optional: false, required: false
    public get dataEncryptionKeyId() {
      return this.getStringAttribute('data_encryption_key_id');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // encrypted - computed: true, optional: false, required: false
    public get encrypted() {
      return this.getBooleanAttribute('encrypted') as any;
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }

    // most_recent - computed: false, optional: true, required: false
    private _mostRecent?: boolean | cdktf.IResolvable | undefined; 
    public get mostRecent() {
      return this.getBooleanAttribute('most_recent') as any;
    }
    public set mostRecent(value: boolean | cdktf.IResolvable | undefined) {
      this._mostRecent = value;
    }
    public resetMostRecent() {
      this._mostRecent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mostRecentInput() {
      return this._mostRecent
    }

    // owner_alias - computed: true, optional: false, required: false
    public get ownerAlias() {
      return this.getStringAttribute('owner_alias');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // owners - computed: false, optional: true, required: false
    private _owners?: string[] | undefined; 
    public get owners() {
      return this.getListAttribute('owners');
    }
    public set owners(value: string[] | undefined) {
      this._owners = value;
    }
    public resetOwners() {
      this._owners = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownersInput() {
      return this._owners
    }

    // restorable_by_user_ids - computed: false, optional: true, required: false
    private _restorableByUserIds?: string[] | undefined; 
    public get restorableByUserIds() {
      return this.getListAttribute('restorable_by_user_ids');
    }
    public set restorableByUserIds(value: string[] | undefined) {
      this._restorableByUserIds = value;
    }
    public resetRestorableByUserIds() {
      this._restorableByUserIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restorableByUserIdsInput() {
      return this._restorableByUserIds
    }

    // snapshot_id - computed: true, optional: false, required: false
    public get snapshotId() {
      return this.getStringAttribute('snapshot_id');
    }

    // snapshot_ids - computed: false, optional: true, required: false
    private _snapshotIds?: string[] | undefined; 
    public get snapshotIds() {
      return this.getListAttribute('snapshot_ids');
    }
    public set snapshotIds(value: string[] | undefined) {
      this._snapshotIds = value;
    }
    public resetSnapshotIds() {
      this._snapshotIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotIdsInput() {
      return this._snapshotIds
    }

    // state - computed: true, optional: false, required: false
    public get state() {
      return this.getStringAttribute('state');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // volume_id - computed: true, optional: false, required: false
    public get volumeId() {
      return this.getStringAttribute('volume_id');
    }

    // volume_size - computed: true, optional: false, required: false
    public get volumeSize() {
      return this.getNumberAttribute('volume_size');
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsEbsSnapshotFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsEbsSnapshotFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        most_recent: cdktf.booleanToTerraform(this._mostRecent),
        owners: cdktf.listMapper(cdktf.stringToTerraform)(this._owners),
        restorable_by_user_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._restorableByUserIds),
        snapshot_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._snapshotIds),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsEbsSnapshotFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsEbsSnapshotIdsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids.html#owners DataAwsEbsSnapshotIds#owners}
    */
    readonly owners?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids.html#restorable_by_user_ids DataAwsEbsSnapshotIds#restorable_by_user_ids}
    */
    readonly restorableByUserIds?: string[];
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids.html#filter DataAwsEbsSnapshotIds#filter}
    */
    readonly filter?: DataAwsEbsSnapshotIdsFilter[];
  }
  export interface DataAwsEbsSnapshotIdsFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids.html#name DataAwsEbsSnapshotIds#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids.html#values DataAwsEbsSnapshotIds#values}
    */
    readonly values: string[];
  }

  function dataAwsEbsSnapshotIdsFilterToTerraform(struct?: DataAwsEbsSnapshotIdsFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids.html aws_ebs_snapshot_ids}
  */
  export class DataAwsEbsSnapshotIds extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ebs_snapshot_ids";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids.html aws_ebs_snapshot_ids} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEbsSnapshotIdsConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEbsSnapshotIdsConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ebs_snapshot_ids',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._owners = config.owners;
      this._restorableByUserIds = config.restorableByUserIds;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ids - computed: true, optional: false, required: false
    public get ids() {
      return this.getListAttribute('ids');
    }

    // owners - computed: false, optional: true, required: false
    private _owners?: string[] | undefined; 
    public get owners() {
      return this.getListAttribute('owners');
    }
    public set owners(value: string[] | undefined) {
      this._owners = value;
    }
    public resetOwners() {
      this._owners = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownersInput() {
      return this._owners
    }

    // restorable_by_user_ids - computed: false, optional: true, required: false
    private _restorableByUserIds?: string[] | undefined; 
    public get restorableByUserIds() {
      return this.getListAttribute('restorable_by_user_ids');
    }
    public set restorableByUserIds(value: string[] | undefined) {
      this._restorableByUserIds = value;
    }
    public resetRestorableByUserIds() {
      this._restorableByUserIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restorableByUserIdsInput() {
      return this._restorableByUserIds
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsEbsSnapshotIdsFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsEbsSnapshotIdsFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        owners: cdktf.listMapper(cdktf.stringToTerraform)(this._owners),
        restorable_by_user_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._restorableByUserIds),
        filter: cdktf.listMapper(dataAwsEbsSnapshotIdsFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsEbsVolumeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volume.html#most_recent DataAwsEbsVolume#most_recent}
    */
    readonly mostRecent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volume.html#tags DataAwsEbsVolume#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volume.html#filter DataAwsEbsVolume#filter}
    */
    readonly filter?: DataAwsEbsVolumeFilter[];
  }
  export interface DataAwsEbsVolumeFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volume.html#name DataAwsEbsVolume#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volume.html#values DataAwsEbsVolume#values}
    */
    readonly values: string[];
  }

  function dataAwsEbsVolumeFilterToTerraform(struct?: DataAwsEbsVolumeFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ebs_volume.html aws_ebs_volume}
  */
  export class DataAwsEbsVolume extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ebs_volume";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ebs_volume.html aws_ebs_volume} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEbsVolumeConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEbsVolumeConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ebs_volume',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._mostRecent = config.mostRecent;
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // availability_zone - computed: true, optional: false, required: false
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }

    // encrypted - computed: true, optional: false, required: false
    public get encrypted() {
      return this.getBooleanAttribute('encrypted') as any;
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // iops - computed: true, optional: false, required: false
    public get iops() {
      return this.getNumberAttribute('iops');
    }

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }

    // most_recent - computed: false, optional: true, required: false
    private _mostRecent?: boolean | cdktf.IResolvable | undefined; 
    public get mostRecent() {
      return this.getBooleanAttribute('most_recent') as any;
    }
    public set mostRecent(value: boolean | cdktf.IResolvable | undefined) {
      this._mostRecent = value;
    }
    public resetMostRecent() {
      this._mostRecent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mostRecentInput() {
      return this._mostRecent
    }

    // multi_attach_enabled - computed: true, optional: false, required: false
    public get multiAttachEnabled() {
      return this.getBooleanAttribute('multi_attach_enabled') as any;
    }

    // outpost_arn - computed: true, optional: false, required: false
    public get outpostArn() {
      return this.getStringAttribute('outpost_arn');
    }

    // size - computed: true, optional: false, required: false
    public get size() {
      return this.getNumberAttribute('size');
    }

    // snapshot_id - computed: true, optional: false, required: false
    public get snapshotId() {
      return this.getStringAttribute('snapshot_id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // throughput - computed: true, optional: false, required: false
    public get throughput() {
      return this.getNumberAttribute('throughput');
    }

    // volume_id - computed: true, optional: false, required: false
    public get volumeId() {
      return this.getStringAttribute('volume_id');
    }

    // volume_type - computed: true, optional: false, required: false
    public get volumeType() {
      return this.getStringAttribute('volume_type');
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsEbsVolumeFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsEbsVolumeFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        most_recent: cdktf.booleanToTerraform(this._mostRecent),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsEbsVolumeFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsEbsVolumesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volumes.html#tags DataAwsEbsVolumes#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volumes.html#filter DataAwsEbsVolumes#filter}
    */
    readonly filter?: DataAwsEbsVolumesFilter[];
  }
  export interface DataAwsEbsVolumesFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volumes.html#name DataAwsEbsVolumes#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volumes.html#values DataAwsEbsVolumes#values}
    */
    readonly values: string[];
  }

  function dataAwsEbsVolumesFilterToTerraform(struct?: DataAwsEbsVolumesFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ebs_volumes.html aws_ebs_volumes}
  */
  export class DataAwsEbsVolumes extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ebs_volumes";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ebs_volumes.html aws_ebs_volumes} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEbsVolumesConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEbsVolumesConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ebs_volumes',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ids - computed: true, optional: false, required: false
    public get ids() {
      return this.getListAttribute('ids');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsEbsVolumesFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsEbsVolumesFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsEbsVolumesFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsEc2CoipPoolConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html#local_gateway_route_table_id DataAwsEc2CoipPool#local_gateway_route_table_id}
    */
    readonly localGatewayRouteTableId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html#pool_id DataAwsEc2CoipPool#pool_id}
    */
    readonly poolId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html#tags DataAwsEc2CoipPool#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html#filter DataAwsEc2CoipPool#filter}
    */
    readonly filter?: DataAwsEc2CoipPoolFilter[];
  }
  export interface DataAwsEc2CoipPoolFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html#name DataAwsEc2CoipPool#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html#values DataAwsEc2CoipPool#values}
    */
    readonly values: string[];
  }

  function dataAwsEc2CoipPoolFilterToTerraform(struct?: DataAwsEc2CoipPoolFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html aws_ec2_coip_pool}
  */
  export class DataAwsEc2CoipPool extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_coip_pool";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html aws_ec2_coip_pool} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2CoipPoolConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEc2CoipPoolConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_coip_pool',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._localGatewayRouteTableId = config.localGatewayRouteTableId;
      this._poolId = config.poolId;
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // local_gateway_route_table_id - computed: true, optional: true, required: false
    private _localGatewayRouteTableId?: string | undefined; 
    public get localGatewayRouteTableId() {
      return this.getStringAttribute('local_gateway_route_table_id');
    }
    public set localGatewayRouteTableId(value: string | undefined) {
      this._localGatewayRouteTableId = value;
    }
    public resetLocalGatewayRouteTableId() {
      this._localGatewayRouteTableId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localGatewayRouteTableIdInput() {
      return this._localGatewayRouteTableId
    }

    // pool_cidrs - computed: true, optional: false, required: false
    public get poolCidrs() {
      return this.getListAttribute('pool_cidrs');
    }

    // pool_id - computed: true, optional: true, required: false
    private _poolId?: string | undefined; 
    public get poolId() {
      return this.getStringAttribute('pool_id');
    }
    public set poolId(value: string | undefined) {
      this._poolId = value;
    }
    public resetPoolId() {
      this._poolId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get poolIdInput() {
      return this._poolId
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsEc2CoipPoolFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsEc2CoipPoolFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        local_gateway_route_table_id: cdktf.stringToTerraform(this._localGatewayRouteTableId),
        pool_id: cdktf.stringToTerraform(this._poolId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsEc2CoipPoolFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsEc2CoipPoolsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pools.html#tags DataAwsEc2CoipPools#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pools.html#filter DataAwsEc2CoipPools#filter}
    */
    readonly filter?: DataAwsEc2CoipPoolsFilter[];
  }
  export interface DataAwsEc2CoipPoolsFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pools.html#name DataAwsEc2CoipPools#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pools.html#values DataAwsEc2CoipPools#values}
    */
    readonly values: string[];
  }

  function dataAwsEc2CoipPoolsFilterToTerraform(struct?: DataAwsEc2CoipPoolsFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pools.html aws_ec2_coip_pools}
  */
  export class DataAwsEc2CoipPools extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_coip_pools";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pools.html aws_ec2_coip_pools} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2CoipPoolsConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEc2CoipPoolsConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_coip_pools',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // pool_ids - computed: true, optional: false, required: false
    public get poolIds() {
      return this.getListAttribute('pool_ids');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsEc2CoipPoolsFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsEc2CoipPoolsFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsEc2CoipPoolsFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsEc2HostConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_host.html#host_id DataAwsEc2Host#host_id}
    */
    readonly hostId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_host.html#tags DataAwsEc2Host#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_host.html#filter DataAwsEc2Host#filter}
    */
    readonly filter?: DataAwsEc2HostFilter[];
  }
  export interface DataAwsEc2HostFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_host.html#name DataAwsEc2Host#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_host.html#values DataAwsEc2Host#values}
    */
    readonly values: string[];
  }

  function dataAwsEc2HostFilterToTerraform(struct?: DataAwsEc2HostFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_host.html aws_ec2_host}
  */
  export class DataAwsEc2Host extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_host";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_host.html aws_ec2_host} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2HostConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEc2HostConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_host',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._hostId = config.hostId;
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // auto_placement - computed: true, optional: false, required: false
    public get autoPlacement() {
      return this.getStringAttribute('auto_placement');
    }

    // availability_zone - computed: true, optional: false, required: false
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }

    // cores - computed: true, optional: false, required: false
    public get cores() {
      return this.getNumberAttribute('cores');
    }

    // host_id - computed: true, optional: true, required: false
    private _hostId?: string | undefined; 
    public get hostId() {
      return this.getStringAttribute('host_id');
    }
    public set hostId(value: string | undefined) {
      this._hostId = value;
    }
    public resetHostId() {
      this._hostId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostIdInput() {
      return this._hostId
    }

    // host_recovery - computed: true, optional: false, required: false
    public get hostRecovery() {
      return this.getStringAttribute('host_recovery');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_family - computed: true, optional: false, required: false
    public get instanceFamily() {
      return this.getStringAttribute('instance_family');
    }

    // instance_type - computed: true, optional: false, required: false
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // sockets - computed: true, optional: false, required: false
    public get sockets() {
      return this.getNumberAttribute('sockets');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // total_vcpus - computed: true, optional: false, required: false
    public get totalVcpus() {
      return this.getNumberAttribute('total_vcpus');
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsEc2HostFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsEc2HostFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        host_id: cdktf.stringToTerraform(this._hostId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsEc2HostFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsEc2InstanceTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html#default_cores DataAwsEc2InstanceType#default_cores}
    */
    readonly defaultCores?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html#default_threads_per_core DataAwsEc2InstanceType#default_threads_per_core}
    */
    readonly defaultThreadsPerCore?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html#hypervisor DataAwsEc2InstanceType#hypervisor}
    */
    readonly hypervisor?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html#instance_type DataAwsEc2InstanceType#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html#maximum_ipv6_addresses_per_interface DataAwsEc2InstanceType#maximum_ipv6_addresses_per_interface}
    */
    readonly maximumIpv6AddressesPerInterface?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html#total_fpga_memory DataAwsEc2InstanceType#total_fpga_memory}
    */
    readonly totalFpgaMemory?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html#total_gpu_memory DataAwsEc2InstanceType#total_gpu_memory}
    */
    readonly totalGpuMemory?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html#total_instance_storage DataAwsEc2InstanceType#total_instance_storage}
    */
    readonly totalInstanceStorage?: number;
    /**
    * fpgas block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html#fpgas DataAwsEc2InstanceType#fpgas}
    */
    readonly fpgas?: DataAwsEc2InstanceTypeFpgas[];
    /**
    * gpus block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html#gpus DataAwsEc2InstanceType#gpus}
    */
    readonly gpus?: DataAwsEc2InstanceTypeGpus[];
    /**
    * inference_accelerators block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html#inference_accelerators DataAwsEc2InstanceType#inference_accelerators}
    */
    readonly inferenceAccelerators?: DataAwsEc2InstanceTypeInferenceAccelerators[];
    /**
    * instance_disks block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html#instance_disks DataAwsEc2InstanceType#instance_disks}
    */
    readonly instanceDisks?: DataAwsEc2InstanceTypeInstanceDisks[];
  }
  export interface DataAwsEc2InstanceTypeFpgas {
  }

  function dataAwsEc2InstanceTypeFpgasToTerraform(struct?: DataAwsEc2InstanceTypeFpgas): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
    }
  }

  export interface DataAwsEc2InstanceTypeGpus {
  }

  function dataAwsEc2InstanceTypeGpusToTerraform(struct?: DataAwsEc2InstanceTypeGpus): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
    }
  }

  export interface DataAwsEc2InstanceTypeInferenceAccelerators {
  }

  function dataAwsEc2InstanceTypeInferenceAcceleratorsToTerraform(struct?: DataAwsEc2InstanceTypeInferenceAccelerators): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
    }
  }

  export interface DataAwsEc2InstanceTypeInstanceDisks {
  }

  function dataAwsEc2InstanceTypeInstanceDisksToTerraform(struct?: DataAwsEc2InstanceTypeInstanceDisks): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html aws_ec2_instance_type}
  */
  export class DataAwsEc2InstanceType extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_instance_type";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html aws_ec2_instance_type} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2InstanceTypeConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsEc2InstanceTypeConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_instance_type',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._defaultCores = config.defaultCores;
      this._defaultThreadsPerCore = config.defaultThreadsPerCore;
      this._hypervisor = config.hypervisor;
      this._instanceType = config.instanceType;
      this._maximumIpv6AddressesPerInterface = config.maximumIpv6AddressesPerInterface;
      this._totalFpgaMemory = config.totalFpgaMemory;
      this._totalGpuMemory = config.totalGpuMemory;
      this._totalInstanceStorage = config.totalInstanceStorage;
      this._fpgas = config.fpgas;
      this._gpus = config.gpus;
      this._inferenceAccelerators = config.inferenceAccelerators;
      this._instanceDisks = config.instanceDisks;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // auto_recovery_supported - computed: true, optional: false, required: false
    public get autoRecoverySupported() {
      return this.getBooleanAttribute('auto_recovery_supported') as any;
    }

    // bare_metal - computed: true, optional: false, required: false
    public get bareMetal() {
      return this.getBooleanAttribute('bare_metal') as any;
    }

    // burstable_performance_supported - computed: true, optional: false, required: false
    public get burstablePerformanceSupported() {
      return this.getBooleanAttribute('burstable_performance_supported') as any;
    }

    // current_generation - computed: true, optional: false, required: false
    public get currentGeneration() {
      return this.getBooleanAttribute('current_generation') as any;
    }

    // dedicated_hosts_supported - computed: true, optional: false, required: false
    public get dedicatedHostsSupported() {
      return this.getBooleanAttribute('dedicated_hosts_supported') as any;
    }

    // default_cores - computed: true, optional: true, required: false
    private _defaultCores?: number | undefined; 
    public get defaultCores() {
      return this.getNumberAttribute('default_cores');
    }
    public set defaultCores(value: number | undefined) {
      this._defaultCores = value;
    }
    public resetDefaultCores() {
      this._defaultCores = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultCoresInput() {
      return this._defaultCores
    }

    // default_threads_per_core - computed: true, optional: true, required: false
    private _defaultThreadsPerCore?: number | undefined; 
    public get defaultThreadsPerCore() {
      return this.getNumberAttribute('default_threads_per_core');
    }
    public set defaultThreadsPerCore(value: number | undefined) {
      this._defaultThreadsPerCore = value;
    }
    public resetDefaultThreadsPerCore() {
      this._defaultThreadsPerCore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultThreadsPerCoreInput() {
      return this._defaultThreadsPerCore
    }

    // default_vcpus - computed: true, optional: false, required: false
    public get defaultVcpus() {
      return this.getNumberAttribute('default_vcpus');
    }

    // ebs_encryption_support - computed: true, optional: false, required: false
    public get ebsEncryptionSupport() {
      return this.getStringAttribute('ebs_encryption_support');
    }

    // ebs_nvme_support - computed: true, optional: false, required: false
    public get ebsNvmeSupport() {
      return this.getStringAttribute('ebs_nvme_support');
    }

    // ebs_optimized_support - computed: true, optional: false, required: false
    public get ebsOptimizedSupport() {
      return this.getStringAttribute('ebs_optimized_support');
    }

    // ebs_performance_baseline_bandwidth - computed: true, optional: false, required: false
    public get ebsPerformanceBaselineBandwidth() {
      return this.getNumberAttribute('ebs_performance_baseline_bandwidth');
    }

    // ebs_performance_baseline_iops - computed: true, optional: false, required: false
    public get ebsPerformanceBaselineIops() {
      return this.getNumberAttribute('ebs_performance_baseline_iops');
    }

    // ebs_performance_baseline_throughput - computed: true, optional: false, required: false
    public get ebsPerformanceBaselineThroughput() {
      return this.getNumberAttribute('ebs_performance_baseline_throughput');
    }

    // ebs_performance_maximum_bandwidth - computed: true, optional: false, required: false
    public get ebsPerformanceMaximumBandwidth() {
      return this.getNumberAttribute('ebs_performance_maximum_bandwidth');
    }

    // ebs_performance_maximum_iops - computed: true, optional: false, required: false
    public get ebsPerformanceMaximumIops() {
      return this.getNumberAttribute('ebs_performance_maximum_iops');
    }

    // ebs_performance_maximum_throughput - computed: true, optional: false, required: false
    public get ebsPerformanceMaximumThroughput() {
      return this.getNumberAttribute('ebs_performance_maximum_throughput');
    }

    // efa_supported - computed: true, optional: false, required: false
    public get efaSupported() {
      return this.getBooleanAttribute('efa_supported') as any;
    }

    // ena_support - computed: true, optional: false, required: false
    public get enaSupport() {
      return this.getStringAttribute('ena_support');
    }

    // free_tier_eligible - computed: true, optional: false, required: false
    public get freeTierEligible() {
      return this.getBooleanAttribute('free_tier_eligible') as any;
    }

    // hibernation_supported - computed: true, optional: false, required: false
    public get hibernationSupported() {
      return this.getBooleanAttribute('hibernation_supported') as any;
    }

    // hypervisor - computed: true, optional: true, required: false
    private _hypervisor?: string | undefined; 
    public get hypervisor() {
      return this.getStringAttribute('hypervisor');
    }
    public set hypervisor(value: string | undefined) {
      this._hypervisor = value;
    }
    public resetHypervisor() {
      this._hypervisor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hypervisorInput() {
      return this._hypervisor
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_storage_supported - computed: true, optional: false, required: false
    public get instanceStorageSupported() {
      return this.getBooleanAttribute('instance_storage_supported') as any;
    }

    // instance_type - computed: false, optional: false, required: true
    private _instanceType?: string; 
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
      this._instanceType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
      return this._instanceType
    }

    // ipv6_supported - computed: true, optional: false, required: false
    public get ipv6Supported() {
      return this.getBooleanAttribute('ipv6_supported') as any;
    }

    // maximum_ipv4_addresses_per_interface - computed: true, optional: false, required: false
    public get maximumIpv4AddressesPerInterface() {
      return this.getNumberAttribute('maximum_ipv4_addresses_per_interface');
    }

    // maximum_ipv6_addresses_per_interface - computed: true, optional: true, required: false
    private _maximumIpv6AddressesPerInterface?: number | undefined; 
    public get maximumIpv6AddressesPerInterface() {
      return this.getNumberAttribute('maximum_ipv6_addresses_per_interface');
    }
    public set maximumIpv6AddressesPerInterface(value: number | undefined) {
      this._maximumIpv6AddressesPerInterface = value;
    }
    public resetMaximumIpv6AddressesPerInterface() {
      this._maximumIpv6AddressesPerInterface = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumIpv6AddressesPerInterfaceInput() {
      return this._maximumIpv6AddressesPerInterface
    }

    // maximum_network_interfaces - computed: true, optional: false, required: false
    public get maximumNetworkInterfaces() {
      return this.getNumberAttribute('maximum_network_interfaces');
    }

    // memory_size - computed: true, optional: false, required: false
    public get memorySize() {
      return this.getNumberAttribute('memory_size');
    }

    // network_performance - computed: true, optional: false, required: false
    public get networkPerformance() {
      return this.getStringAttribute('network_performance');
    }

    // supported_architectures - computed: true, optional: false, required: false
    public get supportedArchitectures() {
      return this.getListAttribute('supported_architectures');
    }

    // supported_placement_strategies - computed: true, optional: false, required: false
    public get supportedPlacementStrategies() {
      return this.getListAttribute('supported_placement_strategies');
    }

    // supported_root_device_types - computed: true, optional: false, required: false
    public get supportedRootDeviceTypes() {
      return this.getListAttribute('supported_root_device_types');
    }

    // supported_usages_classes - computed: true, optional: false, required: false
    public get supportedUsagesClasses() {
      return this.getListAttribute('supported_usages_classes');
    }

    // supported_virtualization_types - computed: true, optional: false, required: false
    public get supportedVirtualizationTypes() {
      return this.getListAttribute('supported_virtualization_types');
    }

    // sustained_clock_speed - computed: true, optional: false, required: false
    public get sustainedClockSpeed() {
      return this.getNumberAttribute('sustained_clock_speed');
    }

    // total_fpga_memory - computed: true, optional: true, required: false
    private _totalFpgaMemory?: number | undefined; 
    public get totalFpgaMemory() {
      return this.getNumberAttribute('total_fpga_memory');
    }
    public set totalFpgaMemory(value: number | undefined) {
      this._totalFpgaMemory = value;
    }
    public resetTotalFpgaMemory() {
      this._totalFpgaMemory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get totalFpgaMemoryInput() {
      return this._totalFpgaMemory
    }

    // total_gpu_memory - computed: true, optional: true, required: false
    private _totalGpuMemory?: number | undefined; 
    public get totalGpuMemory() {
      return this.getNumberAttribute('total_gpu_memory');
    }
    public set totalGpuMemory(value: number | undefined) {
      this._totalGpuMemory = value;
    }
    public resetTotalGpuMemory() {
      this._totalGpuMemory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get totalGpuMemoryInput() {
      return this._totalGpuMemory
    }

    // total_instance_storage - computed: true, optional: true, required: false
    private _totalInstanceStorage?: number | undefined; 
    public get totalInstanceStorage() {
      return this.getNumberAttribute('total_instance_storage');
    }
    public set totalInstanceStorage(value: number | undefined) {
      this._totalInstanceStorage = value;
    }
    public resetTotalInstanceStorage() {
      this._totalInstanceStorage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get totalInstanceStorageInput() {
      return this._totalInstanceStorage
    }

    // valid_cores - computed: true, optional: false, required: false
    public get validCores() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('valid_cores') as any;
    }

    // valid_threads_per_core - computed: true, optional: false, required: false
    public get validThreadsPerCore() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('valid_threads_per_core') as any;
    }

    // fpgas - computed: false, optional: true, required: false
    private _fpgas?: DataAwsEc2InstanceTypeFpgas[] | undefined; 
    public get fpgas() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('fpgas') as any;
    }
    public set fpgas(value: DataAwsEc2InstanceTypeFpgas[] | undefined) {
      this._fpgas = value;
    }
    public resetFpgas() {
      this._fpgas = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fpgasInput() {
      return this._fpgas
    }

    // gpus - computed: false, optional: true, required: false
    private _gpus?: DataAwsEc2InstanceTypeGpus[] | undefined; 
    public get gpus() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('gpus') as any;
    }
    public set gpus(value: DataAwsEc2InstanceTypeGpus[] | undefined) {
      this._gpus = value;
    }
    public resetGpus() {
      this._gpus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gpusInput() {
      return this._gpus
    }

    // inference_accelerators - computed: false, optional: true, required: false
    private _inferenceAccelerators?: DataAwsEc2InstanceTypeInferenceAccelerators[] | undefined; 
    public get inferenceAccelerators() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('inference_accelerators') as any;
    }
    public set inferenceAccelerators(value: DataAwsEc2InstanceTypeInferenceAccelerators[] | undefined) {
      this._inferenceAccelerators = value;
    }
    public resetInferenceAccelerators() {
      this._inferenceAccelerators = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inferenceAcceleratorsInput() {
      return this._inferenceAccelerators
    }

    // instance_disks - computed: false, optional: true, required: false
    private _instanceDisks?: DataAwsEc2InstanceTypeInstanceDisks[] | undefined; 
    public get instanceDisks() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('instance_disks') as any;
    }
    public set instanceDisks(value: DataAwsEc2InstanceTypeInstanceDisks[] | undefined) {
      this._instanceDisks = value;
    }
    public resetInstanceDisks() {
      this._instanceDisks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceDisksInput() {
      return this._instanceDisks
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        default_cores: cdktf.numberToTerraform(this._defaultCores),
        default_threads_per_core: cdktf.numberToTerraform(this._defaultThreadsPerCore),
        hypervisor: cdktf.stringToTerraform(this._hypervisor),
        instance_type: cdktf.stringToTerraform(this._instanceType),
        maximum_ipv6_addresses_per_interface: cdktf.numberToTerraform(this._maximumIpv6AddressesPerInterface),
        total_fpga_memory: cdktf.numberToTerraform(this._totalFpgaMemory),
        total_gpu_memory: cdktf.numberToTerraform(this._totalGpuMemory),
        total_instance_storage: cdktf.numberToTerraform(this._totalInstanceStorage),
        fpgas: cdktf.listMapper(dataAwsEc2InstanceTypeFpgasToTerraform)(this._fpgas),
        gpus: cdktf.listMapper(dataAwsEc2InstanceTypeGpusToTerraform)(this._gpus),
        inference_accelerators: cdktf.listMapper(dataAwsEc2InstanceTypeInferenceAcceleratorsToTerraform)(this._inferenceAccelerators),
        instance_disks: cdktf.listMapper(dataAwsEc2InstanceTypeInstanceDisksToTerraform)(this._instanceDisks),
      };
    }
  }
  export interface DataAwsEc2InstanceTypeOfferingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering.html#location_type DataAwsEc2InstanceTypeOffering#location_type}
    */
    readonly locationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering.html#preferred_instance_types DataAwsEc2InstanceTypeOffering#preferred_instance_types}
    */
    readonly preferredInstanceTypes?: string[];
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering.html#filter DataAwsEc2InstanceTypeOffering#filter}
    */
    readonly filter?: DataAwsEc2InstanceTypeOfferingFilter[];
  }
  export interface DataAwsEc2InstanceTypeOfferingFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering.html#name DataAwsEc2InstanceTypeOffering#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering.html#values DataAwsEc2InstanceTypeOffering#values}
    */
    readonly values: string[];
  }

  function dataAwsEc2InstanceTypeOfferingFilterToTerraform(struct?: DataAwsEc2InstanceTypeOfferingFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering.html aws_ec2_instance_type_offering}
  */
  export class DataAwsEc2InstanceTypeOffering extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_instance_type_offering";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering.html aws_ec2_instance_type_offering} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2InstanceTypeOfferingConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEc2InstanceTypeOfferingConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_instance_type_offering',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._locationType = config.locationType;
      this._preferredInstanceTypes = config.preferredInstanceTypes;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_type - computed: true, optional: false, required: false
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }

    // location_type - computed: false, optional: true, required: false
    private _locationType?: string | undefined; 
    public get locationType() {
      return this.getStringAttribute('location_type');
    }
    public set locationType(value: string | undefined) {
      this._locationType = value;
    }
    public resetLocationType() {
      this._locationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationTypeInput() {
      return this._locationType
    }

    // preferred_instance_types - computed: false, optional: true, required: false
    private _preferredInstanceTypes?: string[] | undefined; 
    public get preferredInstanceTypes() {
      return this.getListAttribute('preferred_instance_types');
    }
    public set preferredInstanceTypes(value: string[] | undefined) {
      this._preferredInstanceTypes = value;
    }
    public resetPreferredInstanceTypes() {
      this._preferredInstanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredInstanceTypesInput() {
      return this._preferredInstanceTypes
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsEc2InstanceTypeOfferingFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsEc2InstanceTypeOfferingFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        location_type: cdktf.stringToTerraform(this._locationType),
        preferred_instance_types: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredInstanceTypes),
        filter: cdktf.listMapper(dataAwsEc2InstanceTypeOfferingFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsEc2InstanceTypeOfferingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings.html#location_type DataAwsEc2InstanceTypeOfferings#location_type}
    */
    readonly locationType?: string;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings.html#filter DataAwsEc2InstanceTypeOfferings#filter}
    */
    readonly filter?: DataAwsEc2InstanceTypeOfferingsFilter[];
  }
  export interface DataAwsEc2InstanceTypeOfferingsFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings.html#name DataAwsEc2InstanceTypeOfferings#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings.html#values DataAwsEc2InstanceTypeOfferings#values}
    */
    readonly values: string[];
  }

  function dataAwsEc2InstanceTypeOfferingsFilterToTerraform(struct?: DataAwsEc2InstanceTypeOfferingsFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings.html aws_ec2_instance_type_offerings}
  */
  export class DataAwsEc2InstanceTypeOfferings extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_instance_type_offerings";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings.html aws_ec2_instance_type_offerings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2InstanceTypeOfferingsConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEc2InstanceTypeOfferingsConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_instance_type_offerings',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._locationType = config.locationType;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_types - computed: true, optional: false, required: false
    public get instanceTypes() {
      return this.getListAttribute('instance_types');
    }

    // location_type - computed: false, optional: true, required: false
    private _locationType?: string | undefined; 
    public get locationType() {
      return this.getStringAttribute('location_type');
    }
    public set locationType(value: string | undefined) {
      this._locationType = value;
    }
    public resetLocationType() {
      this._locationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationTypeInput() {
      return this._locationType
    }

    // location_types - computed: true, optional: false, required: false
    public get locationTypes() {
      return this.getListAttribute('location_types');
    }

    // locations - computed: true, optional: false, required: false
    public get locations() {
      return this.getListAttribute('locations');
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsEc2InstanceTypeOfferingsFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsEc2InstanceTypeOfferingsFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        location_type: cdktf.stringToTerraform(this._locationType),
        filter: cdktf.listMapper(dataAwsEc2InstanceTypeOfferingsFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsEc2LocalGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway.html#state DataAwsEc2LocalGateway#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway.html#tags DataAwsEc2LocalGateway#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway.html#filter DataAwsEc2LocalGateway#filter}
    */
    readonly filter?: DataAwsEc2LocalGatewayFilter[];
  }
  export interface DataAwsEc2LocalGatewayFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway.html#name DataAwsEc2LocalGateway#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway.html#values DataAwsEc2LocalGateway#values}
    */
    readonly values: string[];
  }

  function dataAwsEc2LocalGatewayFilterToTerraform(struct?: DataAwsEc2LocalGatewayFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway.html aws_ec2_local_gateway}
  */
  export class DataAwsEc2LocalGateway extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_local_gateway";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway.html aws_ec2_local_gateway} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2LocalGatewayConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEc2LocalGatewayConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_local_gateway',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._state = config.state;
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // outpost_arn - computed: true, optional: false, required: false
    public get outpostArn() {
      return this.getStringAttribute('outpost_arn');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // state - computed: true, optional: true, required: false
    private _state?: string | undefined; 
    public get state() {
      return this.getStringAttribute('state');
    }
    public set state(value: string | undefined) {
      this._state = value;
    }
    public resetState() {
      this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
      return this._state
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsEc2LocalGatewayFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsEc2LocalGatewayFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        state: cdktf.stringToTerraform(this._state),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsEc2LocalGatewayFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsEc2LocalGatewayRouteTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html#local_gateway_id DataAwsEc2LocalGatewayRouteTable#local_gateway_id}
    */
    readonly localGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html#local_gateway_route_table_id DataAwsEc2LocalGatewayRouteTable#local_gateway_route_table_id}
    */
    readonly localGatewayRouteTableId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html#outpost_arn DataAwsEc2LocalGatewayRouteTable#outpost_arn}
    */
    readonly outpostArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html#state DataAwsEc2LocalGatewayRouteTable#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html#tags DataAwsEc2LocalGatewayRouteTable#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html#filter DataAwsEc2LocalGatewayRouteTable#filter}
    */
    readonly filter?: DataAwsEc2LocalGatewayRouteTableFilter[];
  }
  export interface DataAwsEc2LocalGatewayRouteTableFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html#name DataAwsEc2LocalGatewayRouteTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html#values DataAwsEc2LocalGatewayRouteTable#values}
    */
    readonly values: string[];
  }

  function dataAwsEc2LocalGatewayRouteTableFilterToTerraform(struct?: DataAwsEc2LocalGatewayRouteTableFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html aws_ec2_local_gateway_route_table}
  */
  export class DataAwsEc2LocalGatewayRouteTable extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_local_gateway_route_table";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html aws_ec2_local_gateway_route_table} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2LocalGatewayRouteTableConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEc2LocalGatewayRouteTableConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_local_gateway_route_table',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._localGatewayId = config.localGatewayId;
      this._localGatewayRouteTableId = config.localGatewayRouteTableId;
      this._outpostArn = config.outpostArn;
      this._state = config.state;
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // local_gateway_id - computed: true, optional: true, required: false
    private _localGatewayId?: string | undefined; 
    public get localGatewayId() {
      return this.getStringAttribute('local_gateway_id');
    }
    public set localGatewayId(value: string | undefined) {
      this._localGatewayId = value;
    }
    public resetLocalGatewayId() {
      this._localGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localGatewayIdInput() {
      return this._localGatewayId
    }

    // local_gateway_route_table_id - computed: true, optional: true, required: false
    private _localGatewayRouteTableId?: string | undefined; 
    public get localGatewayRouteTableId() {
      return this.getStringAttribute('local_gateway_route_table_id');
    }
    public set localGatewayRouteTableId(value: string | undefined) {
      this._localGatewayRouteTableId = value;
    }
    public resetLocalGatewayRouteTableId() {
      this._localGatewayRouteTableId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localGatewayRouteTableIdInput() {
      return this._localGatewayRouteTableId
    }

    // outpost_arn - computed: true, optional: true, required: false
    private _outpostArn?: string | undefined; 
    public get outpostArn() {
      return this.getStringAttribute('outpost_arn');
    }
    public set outpostArn(value: string | undefined) {
      this._outpostArn = value;
    }
    public resetOutpostArn() {
      this._outpostArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outpostArnInput() {
      return this._outpostArn
    }

    // state - computed: true, optional: true, required: false
    private _state?: string | undefined; 
    public get state() {
      return this.getStringAttribute('state');
    }
    public set state(value: string | undefined) {
      this._state = value;
    }
    public resetState() {
      this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
      return this._state
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsEc2LocalGatewayRouteTableFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsEc2LocalGatewayRouteTableFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        local_gateway_id: cdktf.stringToTerraform(this._localGatewayId),
        local_gateway_route_table_id: cdktf.stringToTerraform(this._localGatewayRouteTableId),
        outpost_arn: cdktf.stringToTerraform(this._outpostArn),
        state: cdktf.stringToTerraform(this._state),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsEc2LocalGatewayRouteTableFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsEc2LocalGatewayRouteTablesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_tables.html#tags DataAwsEc2LocalGatewayRouteTables#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_tables.html#filter DataAwsEc2LocalGatewayRouteTables#filter}
    */
    readonly filter?: DataAwsEc2LocalGatewayRouteTablesFilter[];
  }
  export interface DataAwsEc2LocalGatewayRouteTablesFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_tables.html#name DataAwsEc2LocalGatewayRouteTables#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_tables.html#values DataAwsEc2LocalGatewayRouteTables#values}
    */
    readonly values: string[];
  }

  function dataAwsEc2LocalGatewayRouteTablesFilterToTerraform(struct?: DataAwsEc2LocalGatewayRouteTablesFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_tables.html aws_ec2_local_gateway_route_tables}
  */
  export class DataAwsEc2LocalGatewayRouteTables extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_local_gateway_route_tables";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_tables.html aws_ec2_local_gateway_route_tables} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2LocalGatewayRouteTablesConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEc2LocalGatewayRouteTablesConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_local_gateway_route_tables',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ids - computed: true, optional: false, required: false
    public get ids() {
      return this.getListAttribute('ids');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsEc2LocalGatewayRouteTablesFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsEc2LocalGatewayRouteTablesFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsEc2LocalGatewayRouteTablesFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsEc2LocalGatewayVirtualInterfaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface.html#tags DataAwsEc2LocalGatewayVirtualInterface#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface.html#filter DataAwsEc2LocalGatewayVirtualInterface#filter}
    */
    readonly filter?: DataAwsEc2LocalGatewayVirtualInterfaceFilter[];
  }
  export interface DataAwsEc2LocalGatewayVirtualInterfaceFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface.html#name DataAwsEc2LocalGatewayVirtualInterface#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface.html#values DataAwsEc2LocalGatewayVirtualInterface#values}
    */
    readonly values: string[];
  }

  function dataAwsEc2LocalGatewayVirtualInterfaceFilterToTerraform(struct?: DataAwsEc2LocalGatewayVirtualInterfaceFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface.html aws_ec2_local_gateway_virtual_interface}
  */
  export class DataAwsEc2LocalGatewayVirtualInterface extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_local_gateway_virtual_interface";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface.html aws_ec2_local_gateway_virtual_interface} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2LocalGatewayVirtualInterfaceConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEc2LocalGatewayVirtualInterfaceConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_local_gateway_virtual_interface',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // local_address - computed: true, optional: false, required: false
    public get localAddress() {
      return this.getStringAttribute('local_address');
    }

    // local_bgp_asn - computed: true, optional: false, required: false
    public get localBgpAsn() {
      return this.getNumberAttribute('local_bgp_asn');
    }

    // local_gateway_id - computed: true, optional: false, required: false
    public get localGatewayId() {
      return this.getStringAttribute('local_gateway_id');
    }

    // local_gateway_virtual_interface_ids - computed: true, optional: false, required: false
    public get localGatewayVirtualInterfaceIds() {
      return this.getListAttribute('local_gateway_virtual_interface_ids');
    }

    // peer_address - computed: true, optional: false, required: false
    public get peerAddress() {
      return this.getStringAttribute('peer_address');
    }

    // peer_bgp_asn - computed: true, optional: false, required: false
    public get peerBgpAsn() {
      return this.getNumberAttribute('peer_bgp_asn');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // vlan - computed: true, optional: false, required: false
    public get vlan() {
      return this.getNumberAttribute('vlan');
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsEc2LocalGatewayVirtualInterfaceFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsEc2LocalGatewayVirtualInterfaceFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsEc2LocalGatewayVirtualInterfaceFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group.html#local_gateway_id DataAwsEc2LocalGatewayVirtualInterfaceGroup#local_gateway_id}
    */
    readonly localGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group.html#tags DataAwsEc2LocalGatewayVirtualInterfaceGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group.html#filter DataAwsEc2LocalGatewayVirtualInterfaceGroup#filter}
    */
    readonly filter?: DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter[];
  }
  export interface DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group.html#name DataAwsEc2LocalGatewayVirtualInterfaceGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group.html#values DataAwsEc2LocalGatewayVirtualInterfaceGroup#values}
    */
    readonly values: string[];
  }

  function dataAwsEc2LocalGatewayVirtualInterfaceGroupFilterToTerraform(struct?: DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group.html aws_ec2_local_gateway_virtual_interface_group}
  */
  export class DataAwsEc2LocalGatewayVirtualInterfaceGroup extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_local_gateway_virtual_interface_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group.html aws_ec2_local_gateway_virtual_interface_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_local_gateway_virtual_interface_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._localGatewayId = config.localGatewayId;
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // local_gateway_id - computed: true, optional: true, required: false
    private _localGatewayId?: string | undefined; 
    public get localGatewayId() {
      return this.getStringAttribute('local_gateway_id');
    }
    public set localGatewayId(value: string | undefined) {
      this._localGatewayId = value;
    }
    public resetLocalGatewayId() {
      this._localGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localGatewayIdInput() {
      return this._localGatewayId
    }

    // local_gateway_virtual_interface_ids - computed: true, optional: false, required: false
    public get localGatewayVirtualInterfaceIds() {
      return this.getListAttribute('local_gateway_virtual_interface_ids');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        local_gateway_id: cdktf.stringToTerraform(this._localGatewayId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsEc2LocalGatewayVirtualInterfaceGroupFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups.html#tags DataAwsEc2LocalGatewayVirtualInterfaceGroups#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups.html#filter DataAwsEc2LocalGatewayVirtualInterfaceGroups#filter}
    */
    readonly filter?: DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter[];
  }
  export interface DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups.html#name DataAwsEc2LocalGatewayVirtualInterfaceGroups#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups.html#values DataAwsEc2LocalGatewayVirtualInterfaceGroups#values}
    */
    readonly values: string[];
  }

  function dataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterToTerraform(struct?: DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups.html aws_ec2_local_gateway_virtual_interface_groups}
  */
  export class DataAwsEc2LocalGatewayVirtualInterfaceGroups extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_local_gateway_virtual_interface_groups";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups.html aws_ec2_local_gateway_virtual_interface_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_local_gateway_virtual_interface_groups',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ids - computed: true, optional: false, required: false
    public get ids() {
      return this.getListAttribute('ids');
    }

    // local_gateway_virtual_interface_ids - computed: true, optional: false, required: false
    public get localGatewayVirtualInterfaceIds() {
      return this.getListAttribute('local_gateway_virtual_interface_ids');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsEc2LocalGatewaysConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateways.html#tags DataAwsEc2LocalGateways#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateways.html#filter DataAwsEc2LocalGateways#filter}
    */
    readonly filter?: DataAwsEc2LocalGatewaysFilter[];
  }
  export interface DataAwsEc2LocalGatewaysFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateways.html#name DataAwsEc2LocalGateways#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateways.html#values DataAwsEc2LocalGateways#values}
    */
    readonly values: string[];
  }

  function dataAwsEc2LocalGatewaysFilterToTerraform(struct?: DataAwsEc2LocalGatewaysFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateways.html aws_ec2_local_gateways}
  */
  export class DataAwsEc2LocalGateways extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_local_gateways";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateways.html aws_ec2_local_gateways} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2LocalGatewaysConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEc2LocalGatewaysConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_local_gateways',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ids - computed: true, optional: false, required: false
    public get ids() {
      return this.getListAttribute('ids');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsEc2LocalGatewaysFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsEc2LocalGatewaysFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsEc2LocalGatewaysFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsEc2ManagedPrefixListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list.html#name DataAwsEc2ManagedPrefixList#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list.html#tags DataAwsEc2ManagedPrefixList#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list.html#filter DataAwsEc2ManagedPrefixList#filter}
    */
    readonly filter?: DataAwsEc2ManagedPrefixListFilter[];
  }
  export class DataAwsEc2ManagedPrefixListEntries extends cdktf.ComplexComputedList {

    // cidr - computed: true, optional: false, required: false
    public get cidr() {
      return this.getStringAttribute('cidr');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }
  }
  export interface DataAwsEc2ManagedPrefixListFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list.html#name DataAwsEc2ManagedPrefixList#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list.html#values DataAwsEc2ManagedPrefixList#values}
    */
    readonly values: string[];
  }

  function dataAwsEc2ManagedPrefixListFilterToTerraform(struct?: DataAwsEc2ManagedPrefixListFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list.html aws_ec2_managed_prefix_list}
  */
  export class DataAwsEc2ManagedPrefixList extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_managed_prefix_list";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list.html aws_ec2_managed_prefix_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2ManagedPrefixListConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEc2ManagedPrefixListConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_managed_prefix_list',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // address_family - computed: true, optional: false, required: false
    public get addressFamily() {
      return this.getStringAttribute('address_family');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // entries - computed: true, optional: false, required: false
    public entries(index: string) {
      return new DataAwsEc2ManagedPrefixListEntries(this, 'entries', index);
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // max_entries - computed: true, optional: false, required: false
    public get maxEntries() {
      return this.getNumberAttribute('max_entries');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // version - computed: true, optional: false, required: false
    public get version() {
      return this.getNumberAttribute('version');
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsEc2ManagedPrefixListFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsEc2ManagedPrefixListFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsEc2ManagedPrefixListFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsEc2SpotPriceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price.html#availability_zone DataAwsEc2SpotPrice#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price.html#instance_type DataAwsEc2SpotPrice#instance_type}
    */
    readonly instanceType?: string;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price.html#filter DataAwsEc2SpotPrice#filter}
    */
    readonly filter?: DataAwsEc2SpotPriceFilter[];
  }
  export interface DataAwsEc2SpotPriceFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price.html#name DataAwsEc2SpotPrice#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price.html#values DataAwsEc2SpotPrice#values}
    */
    readonly values: string[];
  }

  function dataAwsEc2SpotPriceFilterToTerraform(struct?: DataAwsEc2SpotPriceFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price.html aws_ec2_spot_price}
  */
  export class DataAwsEc2SpotPrice extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_spot_price";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price.html aws_ec2_spot_price} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2SpotPriceConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEc2SpotPriceConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_spot_price',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._availabilityZone = config.availabilityZone;
      this._instanceType = config.instanceType;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // availability_zone - computed: false, optional: true, required: false
    private _availabilityZone?: string | undefined; 
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string | undefined) {
      this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
      this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
      return this._availabilityZone
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_type - computed: false, optional: true, required: false
    private _instanceType?: string | undefined; 
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string | undefined) {
      this._instanceType = value;
    }
    public resetInstanceType() {
      this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
      return this._instanceType
    }

    // spot_price - computed: true, optional: false, required: false
    public get spotPrice() {
      return this.getStringAttribute('spot_price');
    }

    // spot_price_timestamp - computed: true, optional: false, required: false
    public get spotPriceTimestamp() {
      return this.getStringAttribute('spot_price_timestamp');
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsEc2SpotPriceFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsEc2SpotPriceFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        availability_zone: cdktf.stringToTerraform(this._availabilityZone),
        instance_type: cdktf.stringToTerraform(this._instanceType),
        filter: cdktf.listMapper(dataAwsEc2SpotPriceFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsEc2TransitGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway.html#tags DataAwsEc2TransitGateway#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway.html#filter DataAwsEc2TransitGateway#filter}
    */
    readonly filter?: DataAwsEc2TransitGatewayFilter[];
  }
  export interface DataAwsEc2TransitGatewayFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway.html#name DataAwsEc2TransitGateway#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway.html#values DataAwsEc2TransitGateway#values}
    */
    readonly values: string[];
  }

  function dataAwsEc2TransitGatewayFilterToTerraform(struct?: DataAwsEc2TransitGatewayFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway.html aws_ec2_transit_gateway}
  */
  export class DataAwsEc2TransitGateway extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_transit_gateway";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway.html aws_ec2_transit_gateway} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2TransitGatewayConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEc2TransitGatewayConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_transit_gateway',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // amazon_side_asn - computed: true, optional: false, required: false
    public get amazonSideAsn() {
      return this.getNumberAttribute('amazon_side_asn');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // association_default_route_table_id - computed: true, optional: false, required: false
    public get associationDefaultRouteTableId() {
      return this.getStringAttribute('association_default_route_table_id');
    }

    // auto_accept_shared_attachments - computed: true, optional: false, required: false
    public get autoAcceptSharedAttachments() {
      return this.getStringAttribute('auto_accept_shared_attachments');
    }

    // default_route_table_association - computed: true, optional: false, required: false
    public get defaultRouteTableAssociation() {
      return this.getStringAttribute('default_route_table_association');
    }

    // default_route_table_propagation - computed: true, optional: false, required: false
    public get defaultRouteTablePropagation() {
      return this.getStringAttribute('default_route_table_propagation');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // dns_support - computed: true, optional: false, required: false
    public get dnsSupport() {
      return this.getStringAttribute('dns_support');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // propagation_default_route_table_id - computed: true, optional: false, required: false
    public get propagationDefaultRouteTableId() {
      return this.getStringAttribute('propagation_default_route_table_id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // vpn_ecmp_support - computed: true, optional: false, required: false
    public get vpnEcmpSupport() {
      return this.getStringAttribute('vpn_ecmp_support');
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsEc2TransitGatewayFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsEc2TransitGatewayFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsEc2TransitGatewayFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsEc2TransitGatewayDxGatewayAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment.html#dx_gateway_id DataAwsEc2TransitGatewayDxGatewayAttachment#dx_gateway_id}
    */
    readonly dxGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment.html#tags DataAwsEc2TransitGatewayDxGatewayAttachment#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment.html#transit_gateway_id DataAwsEc2TransitGatewayDxGatewayAttachment#transit_gateway_id}
    */
    readonly transitGatewayId?: string;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment.html#filter DataAwsEc2TransitGatewayDxGatewayAttachment#filter}
    */
    readonly filter?: DataAwsEc2TransitGatewayDxGatewayAttachmentFilter[];
  }
  export interface DataAwsEc2TransitGatewayDxGatewayAttachmentFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment.html#name DataAwsEc2TransitGatewayDxGatewayAttachment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment.html#values DataAwsEc2TransitGatewayDxGatewayAttachment#values}
    */
    readonly values: string[];
  }

  function dataAwsEc2TransitGatewayDxGatewayAttachmentFilterToTerraform(struct?: DataAwsEc2TransitGatewayDxGatewayAttachmentFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment.html aws_ec2_transit_gateway_dx_gateway_attachment}
  */
  export class DataAwsEc2TransitGatewayDxGatewayAttachment extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_transit_gateway_dx_gateway_attachment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment.html aws_ec2_transit_gateway_dx_gateway_attachment} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2TransitGatewayDxGatewayAttachmentConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEc2TransitGatewayDxGatewayAttachmentConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_transit_gateway_dx_gateway_attachment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._dxGatewayId = config.dxGatewayId;
      this._tags = config.tags;
      this._transitGatewayId = config.transitGatewayId;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // dx_gateway_id - computed: false, optional: true, required: false
    private _dxGatewayId?: string | undefined; 
    public get dxGatewayId() {
      return this.getStringAttribute('dx_gateway_id');
    }
    public set dxGatewayId(value: string | undefined) {
      this._dxGatewayId = value;
    }
    public resetDxGatewayId() {
      this._dxGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dxGatewayIdInput() {
      return this._dxGatewayId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // transit_gateway_id - computed: false, optional: true, required: false
    private _transitGatewayId?: string | undefined; 
    public get transitGatewayId() {
      return this.getStringAttribute('transit_gateway_id');
    }
    public set transitGatewayId(value: string | undefined) {
      this._transitGatewayId = value;
    }
    public resetTransitGatewayId() {
      this._transitGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayIdInput() {
      return this._transitGatewayId
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsEc2TransitGatewayDxGatewayAttachmentFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsEc2TransitGatewayDxGatewayAttachmentFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        dx_gateway_id: cdktf.stringToTerraform(this._dxGatewayId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
        filter: cdktf.listMapper(dataAwsEc2TransitGatewayDxGatewayAttachmentFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsEc2TransitGatewayPeeringAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_peering_attachment.html#tags DataAwsEc2TransitGatewayPeeringAttachment#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_peering_attachment.html#filter DataAwsEc2TransitGatewayPeeringAttachment#filter}
    */
    readonly filter?: DataAwsEc2TransitGatewayPeeringAttachmentFilter[];
  }
  export interface DataAwsEc2TransitGatewayPeeringAttachmentFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_peering_attachment.html#name DataAwsEc2TransitGatewayPeeringAttachment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_peering_attachment.html#values DataAwsEc2TransitGatewayPeeringAttachment#values}
    */
    readonly values: string[];
  }

  function dataAwsEc2TransitGatewayPeeringAttachmentFilterToTerraform(struct?: DataAwsEc2TransitGatewayPeeringAttachmentFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_peering_attachment.html aws_ec2_transit_gateway_peering_attachment}
  */
  export class DataAwsEc2TransitGatewayPeeringAttachment extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_transit_gateway_peering_attachment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_peering_attachment.html aws_ec2_transit_gateway_peering_attachment} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2TransitGatewayPeeringAttachmentConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEc2TransitGatewayPeeringAttachmentConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_transit_gateway_peering_attachment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // peer_account_id - computed: true, optional: false, required: false
    public get peerAccountId() {
      return this.getStringAttribute('peer_account_id');
    }

    // peer_region - computed: true, optional: false, required: false
    public get peerRegion() {
      return this.getStringAttribute('peer_region');
    }

    // peer_transit_gateway_id - computed: true, optional: false, required: false
    public get peerTransitGatewayId() {
      return this.getStringAttribute('peer_transit_gateway_id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // transit_gateway_id - computed: true, optional: false, required: false
    public get transitGatewayId() {
      return this.getStringAttribute('transit_gateway_id');
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsEc2TransitGatewayPeeringAttachmentFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsEc2TransitGatewayPeeringAttachmentFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsEc2TransitGatewayPeeringAttachmentFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsEc2TransitGatewayRouteTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table.html#tags DataAwsEc2TransitGatewayRouteTable#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table.html#filter DataAwsEc2TransitGatewayRouteTable#filter}
    */
    readonly filter?: DataAwsEc2TransitGatewayRouteTableFilter[];
  }
  export interface DataAwsEc2TransitGatewayRouteTableFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table.html#name DataAwsEc2TransitGatewayRouteTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table.html#values DataAwsEc2TransitGatewayRouteTable#values}
    */
    readonly values: string[];
  }

  function dataAwsEc2TransitGatewayRouteTableFilterToTerraform(struct?: DataAwsEc2TransitGatewayRouteTableFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table.html aws_ec2_transit_gateway_route_table}
  */
  export class DataAwsEc2TransitGatewayRouteTable extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_transit_gateway_route_table";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table.html aws_ec2_transit_gateway_route_table} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2TransitGatewayRouteTableConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEc2TransitGatewayRouteTableConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_transit_gateway_route_table',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // default_association_route_table - computed: true, optional: false, required: false
    public get defaultAssociationRouteTable() {
      return this.getBooleanAttribute('default_association_route_table') as any;
    }

    // default_propagation_route_table - computed: true, optional: false, required: false
    public get defaultPropagationRouteTable() {
      return this.getBooleanAttribute('default_propagation_route_table') as any;
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // transit_gateway_id - computed: true, optional: false, required: false
    public get transitGatewayId() {
      return this.getStringAttribute('transit_gateway_id');
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsEc2TransitGatewayRouteTableFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsEc2TransitGatewayRouteTableFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsEc2TransitGatewayRouteTableFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsEc2TransitGatewayRouteTablesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_tables.html#tags DataAwsEc2TransitGatewayRouteTables#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_tables.html#filter DataAwsEc2TransitGatewayRouteTables#filter}
    */
    readonly filter?: DataAwsEc2TransitGatewayRouteTablesFilter[];
  }
  export interface DataAwsEc2TransitGatewayRouteTablesFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_tables.html#name DataAwsEc2TransitGatewayRouteTables#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_tables.html#values DataAwsEc2TransitGatewayRouteTables#values}
    */
    readonly values: string[];
  }

  function dataAwsEc2TransitGatewayRouteTablesFilterToTerraform(struct?: DataAwsEc2TransitGatewayRouteTablesFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_tables.html aws_ec2_transit_gateway_route_tables}
  */
  export class DataAwsEc2TransitGatewayRouteTables extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_transit_gateway_route_tables";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_tables.html aws_ec2_transit_gateway_route_tables} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2TransitGatewayRouteTablesConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEc2TransitGatewayRouteTablesConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_transit_gateway_route_tables',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ids - computed: true, optional: false, required: false
    public get ids() {
      return this.getListAttribute('ids');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsEc2TransitGatewayRouteTablesFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsEc2TransitGatewayRouteTablesFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsEc2TransitGatewayRouteTablesFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsEc2TransitGatewayVpcAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment.html#tags DataAwsEc2TransitGatewayVpcAttachment#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment.html#filter DataAwsEc2TransitGatewayVpcAttachment#filter}
    */
    readonly filter?: DataAwsEc2TransitGatewayVpcAttachmentFilter[];
  }
  export interface DataAwsEc2TransitGatewayVpcAttachmentFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment.html#name DataAwsEc2TransitGatewayVpcAttachment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment.html#values DataAwsEc2TransitGatewayVpcAttachment#values}
    */
    readonly values: string[];
  }

  function dataAwsEc2TransitGatewayVpcAttachmentFilterToTerraform(struct?: DataAwsEc2TransitGatewayVpcAttachmentFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment.html aws_ec2_transit_gateway_vpc_attachment}
  */
  export class DataAwsEc2TransitGatewayVpcAttachment extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_transit_gateway_vpc_attachment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment.html aws_ec2_transit_gateway_vpc_attachment} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2TransitGatewayVpcAttachmentConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEc2TransitGatewayVpcAttachmentConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_transit_gateway_vpc_attachment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // appliance_mode_support - computed: true, optional: false, required: false
    public get applianceModeSupport() {
      return this.getStringAttribute('appliance_mode_support');
    }

    // dns_support - computed: true, optional: false, required: false
    public get dnsSupport() {
      return this.getStringAttribute('dns_support');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ipv6_support - computed: true, optional: false, required: false
    public get ipv6Support() {
      return this.getStringAttribute('ipv6_support');
    }

    // subnet_ids - computed: true, optional: false, required: false
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // transit_gateway_id - computed: true, optional: false, required: false
    public get transitGatewayId() {
      return this.getStringAttribute('transit_gateway_id');
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }

    // vpc_owner_id - computed: true, optional: false, required: false
    public get vpcOwnerId() {
      return this.getStringAttribute('vpc_owner_id');
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsEc2TransitGatewayVpcAttachmentFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsEc2TransitGatewayVpcAttachmentFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsEc2TransitGatewayVpcAttachmentFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsEc2TransitGatewayVpnAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpn_attachment.html#tags DataAwsEc2TransitGatewayVpnAttachment#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpn_attachment.html#transit_gateway_id DataAwsEc2TransitGatewayVpnAttachment#transit_gateway_id}
    */
    readonly transitGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpn_attachment.html#vpn_connection_id DataAwsEc2TransitGatewayVpnAttachment#vpn_connection_id}
    */
    readonly vpnConnectionId?: string;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpn_attachment.html#filter DataAwsEc2TransitGatewayVpnAttachment#filter}
    */
    readonly filter?: DataAwsEc2TransitGatewayVpnAttachmentFilter[];
  }
  export interface DataAwsEc2TransitGatewayVpnAttachmentFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpn_attachment.html#name DataAwsEc2TransitGatewayVpnAttachment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpn_attachment.html#values DataAwsEc2TransitGatewayVpnAttachment#values}
    */
    readonly values: string[];
  }

  function dataAwsEc2TransitGatewayVpnAttachmentFilterToTerraform(struct?: DataAwsEc2TransitGatewayVpnAttachmentFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpn_attachment.html aws_ec2_transit_gateway_vpn_attachment}
  */
  export class DataAwsEc2TransitGatewayVpnAttachment extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ec2_transit_gateway_vpn_attachment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpn_attachment.html aws_ec2_transit_gateway_vpn_attachment} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2TransitGatewayVpnAttachmentConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEc2TransitGatewayVpnAttachmentConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ec2_transit_gateway_vpn_attachment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._tags = config.tags;
      this._transitGatewayId = config.transitGatewayId;
      this._vpnConnectionId = config.vpnConnectionId;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // transit_gateway_id - computed: false, optional: true, required: false
    private _transitGatewayId?: string | undefined; 
    public get transitGatewayId() {
      return this.getStringAttribute('transit_gateway_id');
    }
    public set transitGatewayId(value: string | undefined) {
      this._transitGatewayId = value;
    }
    public resetTransitGatewayId() {
      this._transitGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayIdInput() {
      return this._transitGatewayId
    }

    // vpn_connection_id - computed: false, optional: true, required: false
    private _vpnConnectionId?: string | undefined; 
    public get vpnConnectionId() {
      return this.getStringAttribute('vpn_connection_id');
    }
    public set vpnConnectionId(value: string | undefined) {
      this._vpnConnectionId = value;
    }
    public resetVpnConnectionId() {
      this._vpnConnectionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpnConnectionIdInput() {
      return this._vpnConnectionId
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsEc2TransitGatewayVpnAttachmentFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsEc2TransitGatewayVpnAttachmentFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
        vpn_connection_id: cdktf.stringToTerraform(this._vpnConnectionId),
        filter: cdktf.listMapper(dataAwsEc2TransitGatewayVpnAttachmentFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsEipConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eip.html#public_ip DataAwsEip#public_ip}
    */
    readonly publicIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eip.html#tags DataAwsEip#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eip.html#filter DataAwsEip#filter}
    */
    readonly filter?: DataAwsEipFilter[];
  }
  export interface DataAwsEipFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eip.html#name DataAwsEip#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eip.html#values DataAwsEip#values}
    */
    readonly values: string[];
  }

  function dataAwsEipFilterToTerraform(struct?: DataAwsEipFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/eip.html aws_eip}
  */
  export class DataAwsEip extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_eip";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eip.html aws_eip} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEipConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEipConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_eip',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._publicIp = config.publicIp;
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // association_id - computed: true, optional: false, required: false
    public get associationId() {
      return this.getStringAttribute('association_id');
    }

    // carrier_ip - computed: true, optional: false, required: false
    public get carrierIp() {
      return this.getStringAttribute('carrier_ip');
    }

    // customer_owned_ip - computed: true, optional: false, required: false
    public get customerOwnedIp() {
      return this.getStringAttribute('customer_owned_ip');
    }

    // customer_owned_ipv4_pool - computed: true, optional: false, required: false
    public get customerOwnedIpv4Pool() {
      return this.getStringAttribute('customer_owned_ipv4_pool');
    }

    // domain - computed: true, optional: false, required: false
    public get domain() {
      return this.getStringAttribute('domain');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_id - computed: true, optional: false, required: false
    public get instanceId() {
      return this.getStringAttribute('instance_id');
    }

    // network_interface_id - computed: true, optional: false, required: false
    public get networkInterfaceId() {
      return this.getStringAttribute('network_interface_id');
    }

    // network_interface_owner_id - computed: true, optional: false, required: false
    public get networkInterfaceOwnerId() {
      return this.getStringAttribute('network_interface_owner_id');
    }

    // private_dns - computed: true, optional: false, required: false
    public get privateDns() {
      return this.getStringAttribute('private_dns');
    }

    // private_ip - computed: true, optional: false, required: false
    public get privateIp() {
      return this.getStringAttribute('private_ip');
    }

    // public_dns - computed: true, optional: false, required: false
    public get publicDns() {
      return this.getStringAttribute('public_dns');
    }

    // public_ip - computed: true, optional: true, required: false
    private _publicIp?: string | undefined; 
    public get publicIp() {
      return this.getStringAttribute('public_ip');
    }
    public set publicIp(value: string | undefined) {
      this._publicIp = value;
    }
    public resetPublicIp() {
      this._publicIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicIpInput() {
      return this._publicIp
    }

    // public_ipv4_pool - computed: true, optional: false, required: false
    public get publicIpv4Pool() {
      return this.getStringAttribute('public_ipv4_pool');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsEipFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsEipFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        public_ip: cdktf.stringToTerraform(this._publicIp),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsEipFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance.html#get_password_data DataAwsInstance#get_password_data}
    */
    readonly fetchPasswordData?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance.html#get_user_data DataAwsInstance#get_user_data}
    */
    readonly fetchUserData?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance.html#instance_id DataAwsInstance#instance_id}
    */
    readonly instanceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance.html#instance_tags DataAwsInstance#instance_tags}
    */
    readonly instanceTags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance.html#tags DataAwsInstance#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance.html#filter DataAwsInstance#filter}
    */
    readonly filter?: DataAwsInstanceFilter[];
  }
  export class DataAwsInstanceCreditSpecification extends cdktf.ComplexComputedList {

    // cpu_credits - computed: true, optional: false, required: false
    public get cpuCredits() {
      return this.getStringAttribute('cpu_credits');
    }
  }
  export class DataAwsInstanceEbsBlockDevice extends cdktf.ComplexComputedList {

    // delete_on_termination - computed: true, optional: false, required: false
    public get deleteOnTermination() {
      return this.getBooleanAttribute('delete_on_termination') as any;
    }

    // device_name - computed: true, optional: false, required: false
    public get deviceName() {
      return this.getStringAttribute('device_name');
    }

    // encrypted - computed: true, optional: false, required: false
    public get encrypted() {
      return this.getBooleanAttribute('encrypted') as any;
    }

    // iops - computed: true, optional: false, required: false
    public get iops() {
      return this.getNumberAttribute('iops');
    }

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }

    // snapshot_id - computed: true, optional: false, required: false
    public get snapshotId() {
      return this.getStringAttribute('snapshot_id');
    }

    // tags - computed: true, optional: false, required: false
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }

    // throughput - computed: true, optional: false, required: false
    public get throughput() {
      return this.getNumberAttribute('throughput');
    }

    // volume_id - computed: true, optional: false, required: false
    public get volumeId() {
      return this.getStringAttribute('volume_id');
    }

    // volume_size - computed: true, optional: false, required: false
    public get volumeSize() {
      return this.getNumberAttribute('volume_size');
    }

    // volume_type - computed: true, optional: false, required: false
    public get volumeType() {
      return this.getStringAttribute('volume_type');
    }
  }
  export class DataAwsInstanceEnclaveOptions extends cdktf.ComplexComputedList {

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
  }
  export class DataAwsInstanceEphemeralBlockDevice extends cdktf.ComplexComputedList {

    // device_name - computed: true, optional: false, required: false
    public get deviceName() {
      return this.getStringAttribute('device_name');
    }

    // no_device - computed: true, optional: false, required: false
    public get noDevice() {
      return this.getBooleanAttribute('no_device') as any;
    }

    // virtual_name - computed: true, optional: false, required: false
    public get virtualName() {
      return this.getStringAttribute('virtual_name');
    }
  }
  export class DataAwsInstanceMetadataOptions extends cdktf.ComplexComputedList {

    // http_endpoint - computed: true, optional: false, required: false
    public get httpEndpoint() {
      return this.getStringAttribute('http_endpoint');
    }

    // http_put_response_hop_limit - computed: true, optional: false, required: false
    public get httpPutResponseHopLimit() {
      return this.getNumberAttribute('http_put_response_hop_limit');
    }

    // http_tokens - computed: true, optional: false, required: false
    public get httpTokens() {
      return this.getStringAttribute('http_tokens');
    }
  }
  export class DataAwsInstanceRootBlockDevice extends cdktf.ComplexComputedList {

    // delete_on_termination - computed: true, optional: false, required: false
    public get deleteOnTermination() {
      return this.getBooleanAttribute('delete_on_termination') as any;
    }

    // device_name - computed: true, optional: false, required: false
    public get deviceName() {
      return this.getStringAttribute('device_name');
    }

    // encrypted - computed: true, optional: false, required: false
    public get encrypted() {
      return this.getBooleanAttribute('encrypted') as any;
    }

    // iops - computed: true, optional: false, required: false
    public get iops() {
      return this.getNumberAttribute('iops');
    }

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }

    // tags - computed: true, optional: false, required: false
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }

    // throughput - computed: true, optional: false, required: false
    public get throughput() {
      return this.getNumberAttribute('throughput');
    }

    // volume_id - computed: true, optional: false, required: false
    public get volumeId() {
      return this.getStringAttribute('volume_id');
    }

    // volume_size - computed: true, optional: false, required: false
    public get volumeSize() {
      return this.getNumberAttribute('volume_size');
    }

    // volume_type - computed: true, optional: false, required: false
    public get volumeType() {
      return this.getStringAttribute('volume_type');
    }
  }
  export interface DataAwsInstanceFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance.html#name DataAwsInstance#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance.html#values DataAwsInstance#values}
    */
    readonly values: string[];
  }

  function dataAwsInstanceFilterToTerraform(struct?: DataAwsInstanceFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/instance.html aws_instance}
  */
  export class DataAwsInstance extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_instance";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/instance.html aws_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsInstanceConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsInstanceConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_instance',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._getPasswordData = config.fetchPasswordData;
      this._getUserData = config.fetchUserData;
      this._instanceId = config.instanceId;
      this._instanceTags = config.instanceTags;
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // ami - computed: true, optional: false, required: false
    public get ami() {
      return this.getStringAttribute('ami');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // associate_public_ip_address - computed: true, optional: false, required: false
    public get associatePublicIpAddress() {
      return this.getBooleanAttribute('associate_public_ip_address') as any;
    }

    // availability_zone - computed: true, optional: false, required: false
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }

    // credit_specification - computed: true, optional: false, required: false
    public creditSpecification(index: string) {
      return new DataAwsInstanceCreditSpecification(this, 'credit_specification', index);
    }

    // disable_api_termination - computed: true, optional: false, required: false
    public get disableApiTermination() {
      return this.getBooleanAttribute('disable_api_termination') as any;
    }

    // ebs_block_device - computed: true, optional: false, required: false
    public ebsBlockDevice(index: string) {
      return new DataAwsInstanceEbsBlockDevice(this, 'ebs_block_device', index);
    }

    // ebs_optimized - computed: true, optional: false, required: false
    public get ebsOptimized() {
      return this.getBooleanAttribute('ebs_optimized') as any;
    }

    // enclave_options - computed: true, optional: false, required: false
    public enclaveOptions(index: string) {
      return new DataAwsInstanceEnclaveOptions(this, 'enclave_options', index);
    }

    // ephemeral_block_device - computed: true, optional: false, required: false
    public ephemeralBlockDevice(index: string) {
      return new DataAwsInstanceEphemeralBlockDevice(this, 'ephemeral_block_device', index);
    }

    // get_password_data - computed: false, optional: true, required: false
    private _getPasswordData?: boolean | cdktf.IResolvable | undefined; 
    public get fetchPasswordData() {
      return this.getBooleanAttribute('get_password_data') as any;
    }
    public set fetchPasswordData(value: boolean | cdktf.IResolvable | undefined) {
      this._getPasswordData = value;
    }
    public resetFetchPasswordData() {
      this._getPasswordData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fetchPasswordDataInput() {
      return this._getPasswordData
    }

    // get_user_data - computed: false, optional: true, required: false
    private _getUserData?: boolean | cdktf.IResolvable | undefined; 
    public get fetchUserData() {
      return this.getBooleanAttribute('get_user_data') as any;
    }
    public set fetchUserData(value: boolean | cdktf.IResolvable | undefined) {
      this._getUserData = value;
    }
    public resetFetchUserData() {
      this._getUserData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fetchUserDataInput() {
      return this._getUserData
    }

    // host_id - computed: true, optional: false, required: false
    public get hostId() {
      return this.getStringAttribute('host_id');
    }

    // iam_instance_profile - computed: true, optional: false, required: false
    public get iamInstanceProfile() {
      return this.getStringAttribute('iam_instance_profile');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_id - computed: false, optional: true, required: false
    private _instanceId?: string | undefined; 
    public get instanceId() {
      return this.getStringAttribute('instance_id');
    }
    public set instanceId(value: string | undefined) {
      this._instanceId = value;
    }
    public resetInstanceId() {
      this._instanceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceIdInput() {
      return this._instanceId
    }

    // instance_state - computed: true, optional: false, required: false
    public get instanceState() {
      return this.getStringAttribute('instance_state');
    }

    // instance_tags - computed: true, optional: true, required: false
    private _instanceTags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get instanceTags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('instance_tags') as any;
    }
    public set instanceTags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._instanceTags = value;
    }
    public resetInstanceTags() {
      this._instanceTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTagsInput() {
      return this._instanceTags
    }

    // instance_type - computed: true, optional: false, required: false
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }

    // ipv6_addresses - computed: true, optional: false, required: false
    public get ipv6Addresses() {
      return this.getListAttribute('ipv6_addresses');
    }

    // key_name - computed: true, optional: false, required: false
    public get keyName() {
      return this.getStringAttribute('key_name');
    }

    // metadata_options - computed: true, optional: false, required: false
    public metadataOptions(index: string) {
      return new DataAwsInstanceMetadataOptions(this, 'metadata_options', index);
    }

    // monitoring - computed: true, optional: false, required: false
    public get monitoring() {
      return this.getBooleanAttribute('monitoring') as any;
    }

    // network_interface_id - computed: true, optional: false, required: false
    public get networkInterfaceId() {
      return this.getStringAttribute('network_interface_id');
    }

    // outpost_arn - computed: true, optional: false, required: false
    public get outpostArn() {
      return this.getStringAttribute('outpost_arn');
    }

    // password_data - computed: true, optional: false, required: false
    public get passwordData() {
      return this.getStringAttribute('password_data');
    }

    // placement_group - computed: true, optional: false, required: false
    public get placementGroup() {
      return this.getStringAttribute('placement_group');
    }

    // placement_partition_number - computed: true, optional: false, required: false
    public get placementPartitionNumber() {
      return this.getNumberAttribute('placement_partition_number');
    }

    // private_dns - computed: true, optional: false, required: false
    public get privateDns() {
      return this.getStringAttribute('private_dns');
    }

    // private_ip - computed: true, optional: false, required: false
    public get privateIp() {
      return this.getStringAttribute('private_ip');
    }

    // public_dns - computed: true, optional: false, required: false
    public get publicDns() {
      return this.getStringAttribute('public_dns');
    }

    // public_ip - computed: true, optional: false, required: false
    public get publicIp() {
      return this.getStringAttribute('public_ip');
    }

    // root_block_device - computed: true, optional: false, required: false
    public rootBlockDevice(index: string) {
      return new DataAwsInstanceRootBlockDevice(this, 'root_block_device', index);
    }

    // secondary_private_ips - computed: true, optional: false, required: false
    public get secondaryPrivateIps() {
      return this.getListAttribute('secondary_private_ips');
    }

    // security_groups - computed: true, optional: false, required: false
    public get securityGroups() {
      return this.getListAttribute('security_groups');
    }

    // source_dest_check - computed: true, optional: false, required: false
    public get sourceDestCheck() {
      return this.getBooleanAttribute('source_dest_check') as any;
    }

    // subnet_id - computed: true, optional: false, required: false
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tenancy - computed: true, optional: false, required: false
    public get tenancy() {
      return this.getStringAttribute('tenancy');
    }

    // user_data - computed: true, optional: false, required: false
    public get userData() {
      return this.getStringAttribute('user_data');
    }

    // user_data_base64 - computed: true, optional: false, required: false
    public get userDataBase64() {
      return this.getStringAttribute('user_data_base64');
    }

    // vpc_security_group_ids - computed: true, optional: false, required: false
    public get vpcSecurityGroupIds() {
      return this.getListAttribute('vpc_security_group_ids');
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsInstanceFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsInstanceFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        get_password_data: cdktf.booleanToTerraform(this._getPasswordData),
        get_user_data: cdktf.booleanToTerraform(this._getUserData),
        instance_id: cdktf.stringToTerraform(this._instanceId),
        instance_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._instanceTags),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsInstanceFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsInstancesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instances.html#instance_state_names DataAwsInstances#instance_state_names}
    */
    readonly instanceStateNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instances.html#instance_tags DataAwsInstances#instance_tags}
    */
    readonly instanceTags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instances.html#filter DataAwsInstances#filter}
    */
    readonly filter?: DataAwsInstancesFilter[];
  }
  export interface DataAwsInstancesFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instances.html#name DataAwsInstances#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instances.html#values DataAwsInstances#values}
    */
    readonly values: string[];
  }

  function dataAwsInstancesFilterToTerraform(struct?: DataAwsInstancesFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/instances.html aws_instances}
  */
  export class DataAwsInstances extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_instances";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/instances.html aws_instances} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsInstancesConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsInstancesConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_instances',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._instanceStateNames = config.instanceStateNames;
      this._instanceTags = config.instanceTags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ids - computed: true, optional: false, required: false
    public get ids() {
      return this.getListAttribute('ids');
    }

    // instance_state_names - computed: false, optional: true, required: false
    private _instanceStateNames?: string[] | undefined; 
    public get instanceStateNames() {
      return this.getListAttribute('instance_state_names');
    }
    public set instanceStateNames(value: string[] | undefined) {
      this._instanceStateNames = value;
    }
    public resetInstanceStateNames() {
      this._instanceStateNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceStateNamesInput() {
      return this._instanceStateNames
    }

    // instance_tags - computed: true, optional: true, required: false
    private _instanceTags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get instanceTags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('instance_tags') as any;
    }
    public set instanceTags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._instanceTags = value;
    }
    public resetInstanceTags() {
      this._instanceTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTagsInput() {
      return this._instanceTags
    }

    // private_ips - computed: true, optional: false, required: false
    public get privateIps() {
      return this.getListAttribute('private_ips');
    }

    // public_ips - computed: true, optional: false, required: false
    public get publicIps() {
      return this.getListAttribute('public_ips');
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsInstancesFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsInstancesFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        instance_state_names: cdktf.listMapper(cdktf.stringToTerraform)(this._instanceStateNames),
        instance_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._instanceTags),
        filter: cdktf.listMapper(dataAwsInstancesFilterToTerraform)(this._filter),
      };
    }
  }
  export interface DataAwsLaunchTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template.html#name DataAwsLaunchTemplate#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template.html#tags DataAwsLaunchTemplate#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template.html#filter DataAwsLaunchTemplate#filter}
    */
    readonly filter?: DataAwsLaunchTemplateFilter[];
  }
  export class DataAwsLaunchTemplateBlockDeviceMappingsEbs extends cdktf.ComplexComputedList {

    // delete_on_termination - computed: true, optional: false, required: false
    public get deleteOnTermination() {
      return this.getStringAttribute('delete_on_termination');
    }

    // encrypted - computed: true, optional: false, required: false
    public get encrypted() {
      return this.getStringAttribute('encrypted');
    }

    // iops - computed: true, optional: false, required: false
    public get iops() {
      return this.getNumberAttribute('iops');
    }

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }

    // snapshot_id - computed: true, optional: false, required: false
    public get snapshotId() {
      return this.getStringAttribute('snapshot_id');
    }

    // throughput - computed: true, optional: false, required: false
    public get throughput() {
      return this.getNumberAttribute('throughput');
    }

    // volume_size - computed: true, optional: false, required: false
    public get volumeSize() {
      return this.getNumberAttribute('volume_size');
    }

    // volume_type - computed: true, optional: false, required: false
    public get volumeType() {
      return this.getStringAttribute('volume_type');
    }
  }
  export class DataAwsLaunchTemplateBlockDeviceMappings extends cdktf.ComplexComputedList {

    // device_name - computed: true, optional: false, required: false
    public get deviceName() {
      return this.getStringAttribute('device_name');
    }

    // ebs - computed: true, optional: false, required: false
    public get ebs() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ebs') as any;
    }

    // no_device - computed: true, optional: false, required: false
    public get noDevice() {
      return this.getStringAttribute('no_device');
    }

    // virtual_name - computed: true, optional: false, required: false
    public get virtualName() {
      return this.getStringAttribute('virtual_name');
    }
  }
  export class DataAwsLaunchTemplateCreditSpecification extends cdktf.ComplexComputedList {

    // cpu_credits - computed: true, optional: false, required: false
    public get cpuCredits() {
      return this.getStringAttribute('cpu_credits');
    }
  }
  export class DataAwsLaunchTemplateElasticGpuSpecifications extends cdktf.ComplexComputedList {

    // type - computed: true, optional: false, required: false
    public get type() {
      return this.getStringAttribute('type');
    }
  }
  export class DataAwsLaunchTemplateEnclaveOptions extends cdktf.ComplexComputedList {

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
  }
  export class DataAwsLaunchTemplateHibernationOptions extends cdktf.ComplexComputedList {

    // configured - computed: true, optional: false, required: false
    public get configured() {
      return this.getBooleanAttribute('configured') as any;
    }
  }
  export class DataAwsLaunchTemplateIamInstanceProfile extends cdktf.ComplexComputedList {

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }
  }
  export class DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions extends cdktf.ComplexComputedList {

    // block_duration_minutes - computed: true, optional: false, required: false
    public get blockDurationMinutes() {
      return this.getNumberAttribute('block_duration_minutes');
    }

    // instance_interruption_behavior - computed: true, optional: false, required: false
    public get instanceInterruptionBehavior() {
      return this.getStringAttribute('instance_interruption_behavior');
    }

    // max_price - computed: true, optional: false, required: false
    public get maxPrice() {
      return this.getStringAttribute('max_price');
    }

    // spot_instance_type - computed: true, optional: false, required: false
    public get spotInstanceType() {
      return this.getStringAttribute('spot_instance_type');
    }

    // valid_until - computed: true, optional: false, required: false
    public get validUntil() {
      return this.getStringAttribute('valid_until');
    }
  }
  export class DataAwsLaunchTemplateInstanceMarketOptions extends cdktf.ComplexComputedList {

    // market_type - computed: true, optional: false, required: false
    public get marketType() {
      return this.getStringAttribute('market_type');
    }

    // spot_options - computed: true, optional: false, required: false
    public get spotOptions() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('spot_options') as any;
    }
  }
  export class DataAwsLaunchTemplateMetadataOptions extends cdktf.ComplexComputedList {

    // http_endpoint - computed: true, optional: false, required: false
    public get httpEndpoint() {
      return this.getStringAttribute('http_endpoint');
    }

    // http_protocol_ipv6 - computed: true, optional: false, required: false
    public get httpProtocolIpv6() {
      return this.getStringAttribute('http_protocol_ipv6');
    }

    // http_put_response_hop_limit - computed: true, optional: false, required: false
    public get httpPutResponseHopLimit() {
      return this.getNumberAttribute('http_put_response_hop_limit');
    }

    // http_tokens - computed: true, optional: false, required: false
    public get httpTokens() {
      return this.getStringAttribute('http_tokens');
    }
  }
  export class DataAwsLaunchTemplateMonitoring extends cdktf.ComplexComputedList {

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
  }
  export class DataAwsLaunchTemplateNetworkInterfaces extends cdktf.ComplexComputedList {

    // associate_carrier_ip_address - computed: true, optional: false, required: false
    public get associateCarrierIpAddress() {
      return this.getStringAttribute('associate_carrier_ip_address');
    }

    // associate_public_ip_address - computed: true, optional: false, required: false
    public get associatePublicIpAddress() {
      return this.getStringAttribute('associate_public_ip_address');
    }

    // delete_on_termination - computed: true, optional: false, required: false
    public get deleteOnTermination() {
      return this.getStringAttribute('delete_on_termination');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // device_index - computed: true, optional: false, required: false
    public get deviceIndex() {
      return this.getNumberAttribute('device_index');
    }

    // interface_type - computed: true, optional: false, required: false
    public get interfaceType() {
      return this.getStringAttribute('interface_type');
    }

    // ipv4_address_count - computed: true, optional: false, required: false
    public get ipv4AddressCount() {
      return this.getNumberAttribute('ipv4_address_count');
    }

    // ipv4_addresses - computed: true, optional: false, required: false
    public get ipv4Addresses() {
      return this.getListAttribute('ipv4_addresses');
    }

    // ipv6_address_count - computed: true, optional: false, required: false
    public get ipv6AddressCount() {
      return this.getNumberAttribute('ipv6_address_count');
    }

    // ipv6_addresses - computed: true, optional: false, required: false
    public get ipv6Addresses() {
      return this.getListAttribute('ipv6_addresses');
    }

    // network_interface_id - computed: true, optional: false, required: false
    public get networkInterfaceId() {
      return this.getStringAttribute('network_interface_id');
    }

    // private_ip_address - computed: true, optional: false, required: false
    public get privateIpAddress() {
      return this.getStringAttribute('private_ip_address');
    }

    // security_groups - computed: true, optional: false, required: false
    public get securityGroups() {
      return this.getListAttribute('security_groups');
    }

    // subnet_id - computed: true, optional: false, required: false
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }
  }
  export class DataAwsLaunchTemplatePlacement extends cdktf.ComplexComputedList {

    // affinity - computed: true, optional: false, required: false
    public get affinity() {
      return this.getStringAttribute('affinity');
    }

    // availability_zone - computed: true, optional: false, required: false
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }

    // group_name - computed: true, optional: false, required: false
    public get groupName() {
      return this.getStringAttribute('group_name');
    }

    // host_id - computed: true, optional: false, required: false
    public get hostId() {
      return this.getStringAttribute('host_id');
    }

    // host_resource_group_arn - computed: true, optional: false, required: false
    public get hostResourceGroupArn() {
      return this.getStringAttribute('host_resource_group_arn');
    }

    // partition_number - computed: true, optional: false, required: false
    public get partitionNumber() {
      return this.getNumberAttribute('partition_number');
    }

    // spread_domain - computed: true, optional: false, required: false
    public get spreadDomain() {
      return this.getStringAttribute('spread_domain');
    }

    // tenancy - computed: true, optional: false, required: false
    public get tenancy() {
      return this.getStringAttribute('tenancy');
    }
  }
  export class DataAwsLaunchTemplateTagSpecifications extends cdktf.ComplexComputedList {

    // resource_type - computed: true, optional: false, required: false
    public get resourceType() {
      return this.getStringAttribute('resource_type');
    }

    // tags - computed: true, optional: false, required: false
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
  }
  export interface DataAwsLaunchTemplateFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template.html#name DataAwsLaunchTemplate#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template.html#values DataAwsLaunchTemplate#values}
    */
    readonly values: string[];
  }

  function dataAwsLaunchTemplateFilterToTerraform(struct?: DataAwsLaunchTemplateFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/launch_template.html aws_launch_template}
  */
  export class DataAwsLaunchTemplate extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_launch_template";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/launch_template.html aws_launch_template} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLaunchTemplateConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsLaunchTemplateConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_launch_template',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // block_device_mappings - computed: true, optional: false, required: false
    public blockDeviceMappings(index: string) {
      return new DataAwsLaunchTemplateBlockDeviceMappings(this, 'block_device_mappings', index);
    }

    // credit_specification - computed: true, optional: false, required: false
    public creditSpecification(index: string) {
      return new DataAwsLaunchTemplateCreditSpecification(this, 'credit_specification', index);
    }

    // default_version - computed: true, optional: false, required: false
    public get defaultVersion() {
      return this.getNumberAttribute('default_version');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // disable_api_termination - computed: true, optional: false, required: false
    public get disableApiTermination() {
      return this.getBooleanAttribute('disable_api_termination') as any;
    }

    // ebs_optimized - computed: true, optional: false, required: false
    public get ebsOptimized() {
      return this.getStringAttribute('ebs_optimized');
    }

    // elastic_gpu_specifications - computed: true, optional: false, required: false
    public elasticGpuSpecifications(index: string) {
      return new DataAwsLaunchTemplateElasticGpuSpecifications(this, 'elastic_gpu_specifications', index);
    }

    // enclave_options - computed: true, optional: false, required: false
    public enclaveOptions(index: string) {
      return new DataAwsLaunchTemplateEnclaveOptions(this, 'enclave_options', index);
    }

    // hibernation_options - computed: true, optional: false, required: false
    public hibernationOptions(index: string) {
      return new DataAwsLaunchTemplateHibernationOptions(this, 'hibernation_options', index);
    }

    // iam_instance_profile - computed: true, optional: false, required: false
    public iamInstanceProfile(index: string) {
      return new DataAwsLaunchTemplateIamInstanceProfile(this, 'iam_instance_profile', index);
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // image_id - computed: true, optional: false, required: false
    public get imageId() {
      return this.getStringAttribute('image_id');
    }

    // instance_initiated_shutdown_behavior - computed: true, optional: false, required: false
    public get instanceInitiatedShutdownBehavior() {
      return this.getStringAttribute('instance_initiated_shutdown_behavior');
    }

    // instance_market_options - computed: true, optional: false, required: false
    public instanceMarketOptions(index: string) {
      return new DataAwsLaunchTemplateInstanceMarketOptions(this, 'instance_market_options', index);
    }

    // instance_type - computed: true, optional: false, required: false
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }

    // kernel_id - computed: true, optional: false, required: false
    public get kernelId() {
      return this.getStringAttribute('kernel_id');
    }

    // key_name - computed: true, optional: false, required: false
    public get keyName() {
      return this.getStringAttribute('key_name');
    }

    // latest_version - computed: true, optional: false, required: false
    public get latestVersion() {
      return this.getNumberAttribute('latest_version');
    }

    // metadata_options - computed: true, optional: false, required: false
    public metadataOptions(index: string) {
      return new DataAwsLaunchTemplateMetadataOptions(this, 'metadata_options', index);
    }

    // monitoring - computed: true, optional: false, required: false
    public monitoring(index: string) {
      return new DataAwsLaunchTemplateMonitoring(this, 'monitoring', index);
    }

    // name - computed: false, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // network_interfaces - computed: true, optional: false, required: false
    public networkInterfaces(index: string) {
      return new DataAwsLaunchTemplateNetworkInterfaces(this, 'network_interfaces', index);
    }

    // placement - computed: true, optional: false, required: false
    public placement(index: string) {
      return new DataAwsLaunchTemplatePlacement(this, 'placement', index);
    }

    // ram_disk_id - computed: true, optional: false, required: false
    public get ramDiskId() {
      return this.getStringAttribute('ram_disk_id');
    }

    // security_group_names - computed: true, optional: false, required: false
    public get securityGroupNames() {
      return this.getListAttribute('security_group_names');
    }

    // tag_specifications - computed: true, optional: false, required: false
    public tagSpecifications(index: string) {
      return new DataAwsLaunchTemplateTagSpecifications(this, 'tag_specifications', index);
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // user_data - computed: true, optional: false, required: false
    public get userData() {
      return this.getStringAttribute('user_data');
    }

    // vpc_security_group_ids - computed: true, optional: false, required: false
    public get vpcSecurityGroupIds() {
      return this.getListAttribute('vpc_security_group_ids');
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsLaunchTemplateFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsLaunchTemplateFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsLaunchTemplateFilterToTerraform)(this._filter),
      };
    }
  }
}
