// https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GameliftAliasConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** routing_strategy block */
  readonly routingStrategy: GameliftAliasRoutingStrategy[];
}
export interface GameliftAliasRoutingStrategy {
  readonly fleetId?: string;
  readonly message?: string;
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


// Resource

export class GameliftAlias extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
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
      routing_strategy: cdktf.listMapper(gameliftAliasRoutingStrategyToTerraform)(this._routingStrategy),
    };
  }
}
