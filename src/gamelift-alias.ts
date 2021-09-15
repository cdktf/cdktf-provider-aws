// https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GameliftAliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#description GameliftAlias#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#name GameliftAlias#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#tags GameliftAlias#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#tags_all GameliftAlias#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * routing_strategy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#routing_strategy GameliftAlias#routing_strategy}
  */
  readonly routingStrategy: GameliftAliasRoutingStrategy[];
}
export interface GameliftAliasRoutingStrategy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#fleet_id GameliftAlias#fleet_id}
  */
  readonly fleetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#message GameliftAlias#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#type GameliftAlias#type}
  */
  readonly type: string;
}

function gameliftAliasRoutingStrategyToTerraform(struct?: GameliftAliasRoutingStrategy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fleet_id: cdktf.stringToTerraform(struct!.fleetId),
    message: cdktf.stringToTerraform(struct!.message),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html aws_gamelift_alias}
*/
export class GameliftAlias extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_gamelift_alias";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html aws_gamelift_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GameliftAliasConfig
  */
  public constructor(scope: Construct, id: string, config: GameliftAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_gamelift_alias',
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
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._routingStrategy = config.routingStrategy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
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

  // name - computed: false, optional: false, required: true
  private _name: string;
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

  // routing_strategy - computed: false, optional: false, required: true
  private _routingStrategy: GameliftAliasRoutingStrategy[];
  public get routingStrategy() {
    return this.interpolationForAttribute('routing_strategy') as any;
  }
  public set routingStrategy(value: GameliftAliasRoutingStrategy[]) {
    this._routingStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingStrategyInput() {
    return this._routingStrategy
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      routing_strategy: cdktf.listMapper(gameliftAliasRoutingStrategyToTerraform)(this._routingStrategy),
    };
  }
}
