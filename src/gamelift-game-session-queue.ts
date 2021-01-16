// https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GameliftGameSessionQueueConfig extends cdktf.TerraformMetaArguments {
  readonly destinations?: string[];
  readonly name: string;
  readonly tags?: { [key: string]: string };
  readonly timeoutInSeconds?: number;
  /** player_latency_policy block */
  readonly playerLatencyPolicy?: GameliftGameSessionQueuePlayerLatencyPolicy[];
}
export interface GameliftGameSessionQueuePlayerLatencyPolicy {
  readonly maximumIndividualPlayerLatencyMilliseconds: number;
  readonly policyDurationSeconds?: number;
}

function gameliftGameSessionQueuePlayerLatencyPolicyToTerraform(struct?: GameliftGameSessionQueuePlayerLatencyPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    maximum_individual_player_latency_milliseconds: cdktf.numberToTerraform(struct!.maximumIndividualPlayerLatencyMilliseconds),
    policy_duration_seconds: cdktf.numberToTerraform(struct!.policyDurationSeconds),
  }
}


// Resource

export class GameliftGameSessionQueue extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GameliftGameSessionQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_gamelift_game_session_queue',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._destinations = config.destinations;
    this._name = config.name;
    this._tags = config.tags;
    this._timeoutInSeconds = config.timeoutInSeconds;
    this._playerLatencyPolicy = config.playerLatencyPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // destinations - computed: false, optional: true, required: false
  private _destinations?: string[];
  public get destinations() {
    return this.getListAttribute('destinations');
  }
  public set destinations(value: string[] ) {
    this._destinations = value;
  }
  public resetDestinations() {
    this._destinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations
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

  // timeout_in_seconds - computed: false, optional: true, required: false
  private _timeoutInSeconds?: number;
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number ) {
    this._timeoutInSeconds = value;
  }
  public resetTimeoutInSeconds() {
    this._timeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInSecondsInput() {
    return this._timeoutInSeconds
  }

  // player_latency_policy - computed: false, optional: true, required: false
  private _playerLatencyPolicy?: GameliftGameSessionQueuePlayerLatencyPolicy[];
  public get playerLatencyPolicy() {
    return this.interpolationForAttribute('player_latency_policy') as any;
  }
  public set playerLatencyPolicy(value: GameliftGameSessionQueuePlayerLatencyPolicy[] ) {
    this._playerLatencyPolicy = value;
  }
  public resetPlayerLatencyPolicy() {
    this._playerLatencyPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playerLatencyPolicyInput() {
    return this._playerLatencyPolicy
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destinations: cdktf.listMapper(cdktf.stringToTerraform)(this._destinations),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeout_in_seconds: cdktf.numberToTerraform(this._timeoutInSeconds),
      player_latency_policy: cdktf.listMapper(gameliftGameSessionQueuePlayerLatencyPolicyToTerraform)(this._playerLatencyPolicy),
    };
  }
}
