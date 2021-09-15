// https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53RecoveryreadinessCellConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html#cell_name Route53RecoveryreadinessCell#cell_name}
  */
  readonly cellName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html#cells Route53RecoveryreadinessCell#cells}
  */
  readonly cells?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html#tags Route53RecoveryreadinessCell#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html#tags_all Route53RecoveryreadinessCell#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html#timeouts Route53RecoveryreadinessCell#timeouts}
  */
  readonly timeouts?: Route53RecoveryreadinessCellTimeouts;
}
export interface Route53RecoveryreadinessCellTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html#delete Route53RecoveryreadinessCell#delete}
  */
  readonly delete?: string;
}

function route53RecoveryreadinessCellTimeoutsToTerraform(struct?: Route53RecoveryreadinessCellTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html aws_route53recoveryreadiness_cell}
*/
export class Route53RecoveryreadinessCell extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_route53recoveryreadiness_cell";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html aws_route53recoveryreadiness_cell} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53RecoveryreadinessCellConfig
  */
  public constructor(scope: Construct, id: string, config: Route53RecoveryreadinessCellConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53recoveryreadiness_cell',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cellName = config.cellName;
    this._cells = config.cells;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cell_name - computed: false, optional: false, required: true
  private _cellName: string;
  public get cellName() {
    return this.getStringAttribute('cell_name');
  }
  public set cellName(value: string) {
    this._cellName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cellNameInput() {
    return this._cellName
  }

  // cells - computed: false, optional: true, required: false
  private _cells?: string[];
  public get cells() {
    return this.getListAttribute('cells');
  }
  public set cells(value: string[] ) {
    this._cells = value;
  }
  public resetCells() {
    this._cells = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellsInput() {
    return this._cells
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // parent_readiness_scopes - computed: true, optional: false, required: false
  public get parentReadinessScopes() {
    return this.getListAttribute('parent_readiness_scopes');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: Route53RecoveryreadinessCellTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: Route53RecoveryreadinessCellTimeouts ) {
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
      cell_name: cdktf.stringToTerraform(this._cellName),
      cells: cdktf.listMapper(cdktf.stringToTerraform)(this._cells),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      timeouts: route53RecoveryreadinessCellTimeoutsToTerraform(this._timeouts),
    };
  }
}
