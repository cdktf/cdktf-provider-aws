// https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "destinations": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "timeout_in_seconds": {
        "type": "number",
        "optional": true
      }
    },
    "block_types": {
      "player_latency_policy": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "maximum_individual_player_latency_milliseconds": {
              "type": "number",
              "required": true
            },
            "policy_duration_seconds": {
              "type": "number",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GameliftGameSessionQueueConfig extends TerraformMetaArguments {
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

// Resource

export class GameliftGameSessionQueue extends TerraformResource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // destinations - computed: false, optional: true, required: false
  private _destinations?: string[];
  public get destinations() {
    return this._destinations;
  }
  public set destinations(value: string[] | undefined) {
    this._destinations = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // timeout_in_seconds - computed: false, optional: true, required: false
  private _timeoutInSeconds?: number;
  public get timeoutInSeconds() {
    return this._timeoutInSeconds;
  }
  public set timeoutInSeconds(value: number | undefined) {
    this._timeoutInSeconds = value;
  }

  // player_latency_policy - computed: false, optional: true, required: false
  private _playerLatencyPolicy?: GameliftGameSessionQueuePlayerLatencyPolicy[];
  public get playerLatencyPolicy() {
    return this._playerLatencyPolicy;
  }
  public set playerLatencyPolicy(value: GameliftGameSessionQueuePlayerLatencyPolicy[] | undefined) {
    this._playerLatencyPolicy = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      destinations: this._destinations,
      name: this._name,
      tags: this._tags,
      timeout_in_seconds: this._timeoutInSeconds,
      player_latency_policy: this._playerLatencyPolicy,
    };
  }
}
