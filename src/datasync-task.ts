// https://www.terraform.io/docs/providers/aws/r/datasync_task.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasyncTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}
  */
  readonly cloudwatchLogGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#destination_location_arn DatasyncTask#destination_location_arn}
  */
  readonly destinationLocationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#name DatasyncTask#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#source_location_arn DatasyncTask#source_location_arn}
  */
  readonly sourceLocationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#tags DatasyncTask#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#tags_all DatasyncTask#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * excludes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#excludes DatasyncTask#excludes}
  */
  readonly excludes?: DatasyncTaskExcludes[];
  /**
  * options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#options DatasyncTask#options}
  */
  readonly options?: DatasyncTaskOptions[];
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#schedule DatasyncTask#schedule}
  */
  readonly schedule?: DatasyncTaskSchedule[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#timeouts DatasyncTask#timeouts}
  */
  readonly timeouts?: DatasyncTaskTimeouts;
}
export interface DatasyncTaskExcludes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#filter_type DatasyncTask#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#value DatasyncTask#value}
  */
  readonly value?: string;
}

function datasyncTaskExcludesToTerraform(struct?: DatasyncTaskExcludes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DatasyncTaskOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#atime DatasyncTask#atime}
  */
  readonly atime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#bytes_per_second DatasyncTask#bytes_per_second}
  */
  readonly bytesPerSecond?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#gid DatasyncTask#gid}
  */
  readonly gid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#log_level DatasyncTask#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#mtime DatasyncTask#mtime}
  */
  readonly mtime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#overwrite_mode DatasyncTask#overwrite_mode}
  */
  readonly overwriteMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#posix_permissions DatasyncTask#posix_permissions}
  */
  readonly posixPermissions?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#preserve_deleted_files DatasyncTask#preserve_deleted_files}
  */
  readonly preserveDeletedFiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#preserve_devices DatasyncTask#preserve_devices}
  */
  readonly preserveDevices?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#task_queueing DatasyncTask#task_queueing}
  */
  readonly taskQueueing?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#transfer_mode DatasyncTask#transfer_mode}
  */
  readonly transferMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#uid DatasyncTask#uid}
  */
  readonly uid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#verify_mode DatasyncTask#verify_mode}
  */
  readonly verifyMode?: string;
}

function datasyncTaskOptionsToTerraform(struct?: DatasyncTaskOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    atime: cdktf.stringToTerraform(struct!.atime),
    bytes_per_second: cdktf.numberToTerraform(struct!.bytesPerSecond),
    gid: cdktf.stringToTerraform(struct!.gid),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    mtime: cdktf.stringToTerraform(struct!.mtime),
    overwrite_mode: cdktf.stringToTerraform(struct!.overwriteMode),
    posix_permissions: cdktf.stringToTerraform(struct!.posixPermissions),
    preserve_deleted_files: cdktf.stringToTerraform(struct!.preserveDeletedFiles),
    preserve_devices: cdktf.stringToTerraform(struct!.preserveDevices),
    task_queueing: cdktf.stringToTerraform(struct!.taskQueueing),
    transfer_mode: cdktf.stringToTerraform(struct!.transferMode),
    uid: cdktf.stringToTerraform(struct!.uid),
    verify_mode: cdktf.stringToTerraform(struct!.verifyMode),
  }
}

export interface DatasyncTaskSchedule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#schedule_expression DatasyncTask#schedule_expression}
  */
  readonly scheduleExpression: string;
}

function datasyncTaskScheduleToTerraform(struct?: DatasyncTaskSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    schedule_expression: cdktf.stringToTerraform(struct!.scheduleExpression),
  }
}

export interface DatasyncTaskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#create DatasyncTask#create}
  */
  readonly create?: string;
}

function datasyncTaskTimeoutsToTerraform(struct?: DatasyncTaskTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html aws_datasync_task}
*/
export class DatasyncTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_datasync_task";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html aws_datasync_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncTaskConfig
  */
  public constructor(scope: Construct, id: string, config: DatasyncTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datasync_task',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cloudwatchLogGroupArn = config.cloudwatchLogGroupArn;
    this._destinationLocationArn = config.destinationLocationArn;
    this._name = config.name;
    this._sourceLocationArn = config.sourceLocationArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._excludes = config.excludes;
    this._options = config.options;
    this._schedule = config.schedule;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cloudwatch_log_group_arn - computed: false, optional: true, required: false
  private _cloudwatchLogGroupArn?: string;
  public get cloudwatchLogGroupArn() {
    return this.getStringAttribute('cloudwatch_log_group_arn');
  }
  public set cloudwatchLogGroupArn(value: string ) {
    this._cloudwatchLogGroupArn = value;
  }
  public resetCloudwatchLogGroupArn() {
    this._cloudwatchLogGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogGroupArnInput() {
    return this._cloudwatchLogGroupArn
  }

  // destination_location_arn - computed: false, optional: false, required: true
  private _destinationLocationArn: string;
  public get destinationLocationArn() {
    return this.getStringAttribute('destination_location_arn');
  }
  public set destinationLocationArn(value: string) {
    this._destinationLocationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationLocationArnInput() {
    return this._destinationLocationArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // source_location_arn - computed: false, optional: false, required: true
  private _sourceLocationArn: string;
  public get sourceLocationArn() {
    return this.getStringAttribute('source_location_arn');
  }
  public set sourceLocationArn(value: string) {
    this._sourceLocationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLocationArnInput() {
    return this._sourceLocationArn
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: DatasyncTaskExcludes[];
  public get excludes() {
    return this.interpolationForAttribute('excludes') as any;
  }
  public set excludes(value: DatasyncTaskExcludes[] ) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes
  }

  // options - computed: false, optional: true, required: false
  private _options?: DatasyncTaskOptions[];
  public get options() {
    return this.interpolationForAttribute('options') as any;
  }
  public set options(value: DatasyncTaskOptions[] ) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: DatasyncTaskSchedule[];
  public get schedule() {
    return this.interpolationForAttribute('schedule') as any;
  }
  public set schedule(value: DatasyncTaskSchedule[] ) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatasyncTaskTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DatasyncTaskTimeouts ) {
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
      cloudwatch_log_group_arn: cdktf.stringToTerraform(this._cloudwatchLogGroupArn),
      destination_location_arn: cdktf.stringToTerraform(this._destinationLocationArn),
      name: cdktf.stringToTerraform(this._name),
      source_location_arn: cdktf.stringToTerraform(this._sourceLocationArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      excludes: cdktf.listMapper(datasyncTaskExcludesToTerraform)(this._excludes),
      options: cdktf.listMapper(datasyncTaskOptionsToTerraform)(this._options),
      schedule: cdktf.listMapper(datasyncTaskScheduleToTerraform)(this._schedule),
      timeouts: datasyncTaskTimeoutsToTerraform(this._timeouts),
    };
  }
}
