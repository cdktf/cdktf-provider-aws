// https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_dataview
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FinspaceKxDataviewConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_dataview#auto_update FinspaceKxDataview#auto_update}
  */
  readonly autoUpdate: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_dataview#availability_zone_id FinspaceKxDataview#availability_zone_id}
  */
  readonly availabilityZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_dataview#az_mode FinspaceKxDataview#az_mode}
  */
  readonly azMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_dataview#changeset_id FinspaceKxDataview#changeset_id}
  */
  readonly changesetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_dataview#database_name FinspaceKxDataview#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_dataview#description FinspaceKxDataview#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_dataview#environment_id FinspaceKxDataview#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_dataview#id FinspaceKxDataview#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_dataview#name FinspaceKxDataview#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_dataview#read_write FinspaceKxDataview#read_write}
  */
  readonly readWrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_dataview#tags FinspaceKxDataview#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_dataview#tags_all FinspaceKxDataview#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * segment_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_dataview#segment_configurations FinspaceKxDataview#segment_configurations}
  */
  readonly segmentConfigurations?: FinspaceKxDataviewSegmentConfigurations[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_dataview#timeouts FinspaceKxDataview#timeouts}
  */
  readonly timeouts?: FinspaceKxDataviewTimeouts;
}
export interface FinspaceKxDataviewSegmentConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_dataview#db_paths FinspaceKxDataview#db_paths}
  */
  readonly dbPaths: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_dataview#on_demand FinspaceKxDataview#on_demand}
  */
  readonly onDemand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_dataview#volume_name FinspaceKxDataview#volume_name}
  */
  readonly volumeName: string;
}

export function finspaceKxDataviewSegmentConfigurationsToTerraform(struct?: FinspaceKxDataviewSegmentConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dbPaths),
    on_demand: cdktf.booleanToTerraform(struct!.onDemand),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function finspaceKxDataviewSegmentConfigurationsToHclTerraform(struct?: FinspaceKxDataviewSegmentConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dbPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    on_demand: {
      value: cdktf.booleanToHclTerraform(struct!.onDemand),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FinspaceKxDataviewSegmentConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FinspaceKxDataviewSegmentConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbPaths = this._dbPaths;
    }
    if (this._onDemand !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemand = this._onDemand;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FinspaceKxDataviewSegmentConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbPaths = undefined;
      this._onDemand = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbPaths = value.dbPaths;
      this._onDemand = value.onDemand;
      this._volumeName = value.volumeName;
    }
  }

  // db_paths - computed: false, optional: false, required: true
  private _dbPaths?: string[]; 
  public get dbPaths() {
    return this.getListAttribute('db_paths');
  }
  public set dbPaths(value: string[]) {
    this._dbPaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbPathsInput() {
    return this._dbPaths;
  }

  // on_demand - computed: false, optional: true, required: false
  private _onDemand?: boolean | cdktf.IResolvable; 
  public get onDemand() {
    return this.getBooleanAttribute('on_demand');
  }
  public set onDemand(value: boolean | cdktf.IResolvable) {
    this._onDemand = value;
  }
  public resetOnDemand() {
    this._onDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandInput() {
    return this._onDemand;
  }

  // volume_name - computed: false, optional: false, required: true
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}

export class FinspaceKxDataviewSegmentConfigurationsList extends cdktf.ComplexList {
  public internalValue? : FinspaceKxDataviewSegmentConfigurations[] | cdktf.IResolvable

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
  public get(index: number): FinspaceKxDataviewSegmentConfigurationsOutputReference {
    return new FinspaceKxDataviewSegmentConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FinspaceKxDataviewTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_dataview#create FinspaceKxDataview#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_dataview#delete FinspaceKxDataview#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_dataview#update FinspaceKxDataview#update}
  */
  readonly update?: string;
}

export function finspaceKxDataviewTimeoutsToTerraform(struct?: FinspaceKxDataviewTimeouts | cdktf.IResolvable): any {
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


export function finspaceKxDataviewTimeoutsToHclTerraform(struct?: FinspaceKxDataviewTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class FinspaceKxDataviewTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FinspaceKxDataviewTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FinspaceKxDataviewTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_dataview aws_finspace_kx_dataview}
*/
export class FinspaceKxDataview extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_finspace_kx_dataview";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FinspaceKxDataview resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FinspaceKxDataview to import
  * @param importFromId The id of the existing FinspaceKxDataview that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_dataview#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FinspaceKxDataview to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_finspace_kx_dataview", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/finspace_kx_dataview aws_finspace_kx_dataview} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FinspaceKxDataviewConfig
  */
  public constructor(scope: Construct, id: string, config: FinspaceKxDataviewConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_finspace_kx_dataview',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.96.0',
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
    this._autoUpdate = config.autoUpdate;
    this._availabilityZoneId = config.availabilityZoneId;
    this._azMode = config.azMode;
    this._changesetId = config.changesetId;
    this._databaseName = config.databaseName;
    this._description = config.description;
    this._environmentId = config.environmentId;
    this._id = config.id;
    this._name = config.name;
    this._readWrite = config.readWrite;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._segmentConfigurations.internalValue = config.segmentConfigurations;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_update - computed: false, optional: false, required: true
  private _autoUpdate?: boolean | cdktf.IResolvable; 
  public get autoUpdate() {
    return this.getBooleanAttribute('auto_update');
  }
  public set autoUpdate(value: boolean | cdktf.IResolvable) {
    this._autoUpdate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateInput() {
    return this._autoUpdate;
  }

  // availability_zone_id - computed: false, optional: true, required: false
  private _availabilityZoneId?: string; 
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }
  public set availabilityZoneId(value: string) {
    this._availabilityZoneId = value;
  }
  public resetAvailabilityZoneId() {
    this._availabilityZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneIdInput() {
    return this._availabilityZoneId;
  }

  // az_mode - computed: false, optional: false, required: true
  private _azMode?: string; 
  public get azMode() {
    return this.getStringAttribute('az_mode');
  }
  public set azMode(value: string) {
    this._azMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azModeInput() {
    return this._azMode;
  }

  // changeset_id - computed: false, optional: true, required: false
  private _changesetId?: string; 
  public get changesetId() {
    return this.getStringAttribute('changeset_id');
  }
  public set changesetId(value: string) {
    this._changesetId = value;
  }
  public resetChangesetId() {
    this._changesetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changesetIdInput() {
    return this._changesetId;
  }

  // created_timestamp - computed: true, optional: false, required: false
  public get createdTimestamp() {
    return this.getStringAttribute('created_timestamp');
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
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

  // last_modified_timestamp - computed: true, optional: false, required: false
  public get lastModifiedTimestamp() {
    return this.getStringAttribute('last_modified_timestamp');
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

  // read_write - computed: false, optional: true, required: false
  private _readWrite?: boolean | cdktf.IResolvable; 
  public get readWrite() {
    return this.getBooleanAttribute('read_write');
  }
  public set readWrite(value: boolean | cdktf.IResolvable) {
    this._readWrite = value;
  }
  public resetReadWrite() {
    this._readWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readWriteInput() {
    return this._readWrite;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // segment_configurations - computed: false, optional: true, required: false
  private _segmentConfigurations = new FinspaceKxDataviewSegmentConfigurationsList(this, "segment_configurations", false);
  public get segmentConfigurations() {
    return this._segmentConfigurations;
  }
  public putSegmentConfigurations(value: FinspaceKxDataviewSegmentConfigurations[] | cdktf.IResolvable) {
    this._segmentConfigurations.internalValue = value;
  }
  public resetSegmentConfigurations() {
    this._segmentConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentConfigurationsInput() {
    return this._segmentConfigurations.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FinspaceKxDataviewTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FinspaceKxDataviewTimeouts) {
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
      auto_update: cdktf.booleanToTerraform(this._autoUpdate),
      availability_zone_id: cdktf.stringToTerraform(this._availabilityZoneId),
      az_mode: cdktf.stringToTerraform(this._azMode),
      changeset_id: cdktf.stringToTerraform(this._changesetId),
      database_name: cdktf.stringToTerraform(this._databaseName),
      description: cdktf.stringToTerraform(this._description),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      read_write: cdktf.booleanToTerraform(this._readWrite),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      segment_configurations: cdktf.listMapper(finspaceKxDataviewSegmentConfigurationsToTerraform, true)(this._segmentConfigurations.internalValue),
      timeouts: finspaceKxDataviewTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_update: {
        value: cdktf.booleanToHclTerraform(this._autoUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_zone_id: {
        value: cdktf.stringToHclTerraform(this._availabilityZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      az_mode: {
        value: cdktf.stringToHclTerraform(this._azMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      changeset_id: {
        value: cdktf.stringToHclTerraform(this._changesetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
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
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_write: {
        value: cdktf.booleanToHclTerraform(this._readWrite),
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
      segment_configurations: {
        value: cdktf.listMapperHcl(finspaceKxDataviewSegmentConfigurationsToHclTerraform, true)(this._segmentConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FinspaceKxDataviewSegmentConfigurationsList",
      },
      timeouts: {
        value: finspaceKxDataviewTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FinspaceKxDataviewTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
