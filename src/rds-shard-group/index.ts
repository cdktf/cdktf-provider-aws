// https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/rds_shard_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsShardGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/rds_shard_group#compute_redundancy RdsShardGroup#compute_redundancy}
  */
  readonly computeRedundancy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/rds_shard_group#db_cluster_identifier RdsShardGroup#db_cluster_identifier}
  */
  readonly dbClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/rds_shard_group#db_shard_group_identifier RdsShardGroup#db_shard_group_identifier}
  */
  readonly dbShardGroupIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/rds_shard_group#max_acu RdsShardGroup#max_acu}
  */
  readonly maxAcu: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/rds_shard_group#min_acu RdsShardGroup#min_acu}
  */
  readonly minAcu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/rds_shard_group#publicly_accessible RdsShardGroup#publicly_accessible}
  */
  readonly publiclyAccessible?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/rds_shard_group#tags RdsShardGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/rds_shard_group#timeouts RdsShardGroup#timeouts}
  */
  readonly timeouts?: RdsShardGroupTimeouts;
}
export interface RdsShardGroupTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/rds_shard_group#create RdsShardGroup#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/rds_shard_group#delete RdsShardGroup#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/rds_shard_group#update RdsShardGroup#update}
  */
  readonly update?: string;
}

export function rdsShardGroupTimeoutsToTerraform(struct?: RdsShardGroupTimeouts | cdktf.IResolvable): any {
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


export function rdsShardGroupTimeoutsToHclTerraform(struct?: RdsShardGroupTimeouts | cdktf.IResolvable): any {
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

export class RdsShardGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RdsShardGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RdsShardGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/rds_shard_group aws_rds_shard_group}
*/
export class RdsShardGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_rds_shard_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RdsShardGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RdsShardGroup to import
  * @param importFromId The id of the existing RdsShardGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/rds_shard_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RdsShardGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_rds_shard_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/rds_shard_group aws_rds_shard_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsShardGroupConfig
  */
  public constructor(scope: Construct, id: string, config: RdsShardGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rds_shard_group',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.99.1',
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
    this._computeRedundancy = config.computeRedundancy;
    this._dbClusterIdentifier = config.dbClusterIdentifier;
    this._dbShardGroupIdentifier = config.dbShardGroupIdentifier;
    this._maxAcu = config.maxAcu;
    this._minAcu = config.minAcu;
    this._publiclyAccessible = config.publiclyAccessible;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compute_redundancy - computed: true, optional: true, required: false
  private _computeRedundancy?: number; 
  public get computeRedundancy() {
    return this.getNumberAttribute('compute_redundancy');
  }
  public set computeRedundancy(value: number) {
    this._computeRedundancy = value;
  }
  public resetComputeRedundancy() {
    this._computeRedundancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeRedundancyInput() {
    return this._computeRedundancy;
  }

  // db_cluster_identifier - computed: false, optional: false, required: true
  private _dbClusterIdentifier?: string; 
  public get dbClusterIdentifier() {
    return this.getStringAttribute('db_cluster_identifier');
  }
  public set dbClusterIdentifier(value: string) {
    this._dbClusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterIdentifierInput() {
    return this._dbClusterIdentifier;
  }

  // db_shard_group_identifier - computed: false, optional: false, required: true
  private _dbShardGroupIdentifier?: string; 
  public get dbShardGroupIdentifier() {
    return this.getStringAttribute('db_shard_group_identifier');
  }
  public set dbShardGroupIdentifier(value: string) {
    this._dbShardGroupIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbShardGroupIdentifierInput() {
    return this._dbShardGroupIdentifier;
  }

  // db_shard_group_resource_id - computed: true, optional: false, required: false
  public get dbShardGroupResourceId() {
    return this.getStringAttribute('db_shard_group_resource_id');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // max_acu - computed: false, optional: false, required: true
  private _maxAcu?: number; 
  public get maxAcu() {
    return this.getNumberAttribute('max_acu');
  }
  public set maxAcu(value: number) {
    this._maxAcu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAcuInput() {
    return this._maxAcu;
  }

  // min_acu - computed: true, optional: true, required: false
  private _minAcu?: number; 
  public get minAcu() {
    return this.getNumberAttribute('min_acu');
  }
  public set minAcu(value: number) {
    this._minAcu = value;
  }
  public resetMinAcu() {
    this._minAcu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAcuInput() {
    return this._minAcu;
  }

  // publicly_accessible - computed: true, optional: true, required: false
  private _publiclyAccessible?: boolean | cdktf.IResolvable; 
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }
  public set publiclyAccessible(value: boolean | cdktf.IResolvable) {
    this._publiclyAccessible = value;
  }
  public resetPubliclyAccessible() {
    this._publiclyAccessible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publiclyAccessibleInput() {
    return this._publiclyAccessible;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RdsShardGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RdsShardGroupTimeouts) {
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
      compute_redundancy: cdktf.numberToTerraform(this._computeRedundancy),
      db_cluster_identifier: cdktf.stringToTerraform(this._dbClusterIdentifier),
      db_shard_group_identifier: cdktf.stringToTerraform(this._dbShardGroupIdentifier),
      max_acu: cdktf.numberToTerraform(this._maxAcu),
      min_acu: cdktf.numberToTerraform(this._minAcu),
      publicly_accessible: cdktf.booleanToTerraform(this._publiclyAccessible),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: rdsShardGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compute_redundancy: {
        value: cdktf.numberToHclTerraform(this._computeRedundancy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_cluster_identifier: {
        value: cdktf.stringToHclTerraform(this._dbClusterIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_shard_group_identifier: {
        value: cdktf.stringToHclTerraform(this._dbShardGroupIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_acu: {
        value: cdktf.numberToHclTerraform(this._maxAcu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_acu: {
        value: cdktf.numberToHclTerraform(this._minAcu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      publicly_accessible: {
        value: cdktf.booleanToHclTerraform(this._publiclyAccessible),
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
      timeouts: {
        value: rdsShardGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RdsShardGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
