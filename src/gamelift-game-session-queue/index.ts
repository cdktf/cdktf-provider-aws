/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/gamelift_game_session_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GameliftGameSessionQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/gamelift_game_session_queue#custom_event_data GameliftGameSessionQueue#custom_event_data}
  */
  readonly customEventData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/gamelift_game_session_queue#destinations GameliftGameSessionQueue#destinations}
  */
  readonly destinations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/gamelift_game_session_queue#id GameliftGameSessionQueue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/gamelift_game_session_queue#name GameliftGameSessionQueue#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/gamelift_game_session_queue#notification_target GameliftGameSessionQueue#notification_target}
  */
  readonly notificationTarget?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/gamelift_game_session_queue#region GameliftGameSessionQueue#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/gamelift_game_session_queue#tags GameliftGameSessionQueue#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/gamelift_game_session_queue#tags_all GameliftGameSessionQueue#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/gamelift_game_session_queue#timeout_in_seconds GameliftGameSessionQueue#timeout_in_seconds}
  */
  readonly timeoutInSeconds?: number;
  /**
  * player_latency_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/gamelift_game_session_queue#player_latency_policy GameliftGameSessionQueue#player_latency_policy}
  */
  readonly playerLatencyPolicy?: GameliftGameSessionQueuePlayerLatencyPolicy[] | cdktf.IResolvable;
}
export interface GameliftGameSessionQueuePlayerLatencyPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/gamelift_game_session_queue#maximum_individual_player_latency_milliseconds GameliftGameSessionQueue#maximum_individual_player_latency_milliseconds}
  */
  readonly maximumIndividualPlayerLatencyMilliseconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/gamelift_game_session_queue#policy_duration_seconds GameliftGameSessionQueue#policy_duration_seconds}
  */
  readonly policyDurationSeconds?: number;
}

export function gameliftGameSessionQueuePlayerLatencyPolicyToTerraform(struct?: GameliftGameSessionQueuePlayerLatencyPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_individual_player_latency_milliseconds: cdktf.numberToTerraform(struct!.maximumIndividualPlayerLatencyMilliseconds),
    policy_duration_seconds: cdktf.numberToTerraform(struct!.policyDurationSeconds),
  }
}


export function gameliftGameSessionQueuePlayerLatencyPolicyToHclTerraform(struct?: GameliftGameSessionQueuePlayerLatencyPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_individual_player_latency_milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.maximumIndividualPlayerLatencyMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_duration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.policyDurationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GameliftGameSessionQueuePlayerLatencyPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GameliftGameSessionQueuePlayerLatencyPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumIndividualPlayerLatencyMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumIndividualPlayerLatencyMilliseconds = this._maximumIndividualPlayerLatencyMilliseconds;
    }
    if (this._policyDurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyDurationSeconds = this._policyDurationSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameliftGameSessionQueuePlayerLatencyPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumIndividualPlayerLatencyMilliseconds = undefined;
      this._policyDurationSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumIndividualPlayerLatencyMilliseconds = value.maximumIndividualPlayerLatencyMilliseconds;
      this._policyDurationSeconds = value.policyDurationSeconds;
    }
  }

  // maximum_individual_player_latency_milliseconds - computed: false, optional: false, required: true
  private _maximumIndividualPlayerLatencyMilliseconds?: number; 
  public get maximumIndividualPlayerLatencyMilliseconds() {
    return this.getNumberAttribute('maximum_individual_player_latency_milliseconds');
  }
  public set maximumIndividualPlayerLatencyMilliseconds(value: number) {
    this._maximumIndividualPlayerLatencyMilliseconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumIndividualPlayerLatencyMillisecondsInput() {
    return this._maximumIndividualPlayerLatencyMilliseconds;
  }

  // policy_duration_seconds - computed: false, optional: true, required: false
  private _policyDurationSeconds?: number; 
  public get policyDurationSeconds() {
    return this.getNumberAttribute('policy_duration_seconds');
  }
  public set policyDurationSeconds(value: number) {
    this._policyDurationSeconds = value;
  }
  public resetPolicyDurationSeconds() {
    this._policyDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDurationSecondsInput() {
    return this._policyDurationSeconds;
  }
}

export class GameliftGameSessionQueuePlayerLatencyPolicyList extends cdktf.ComplexList {
  public internalValue? : GameliftGameSessionQueuePlayerLatencyPolicy[] | cdktf.IResolvable

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
  public get(index: number): GameliftGameSessionQueuePlayerLatencyPolicyOutputReference {
    return new GameliftGameSessionQueuePlayerLatencyPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/gamelift_game_session_queue aws_gamelift_game_session_queue}
*/
export class GameliftGameSessionQueue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_gamelift_game_session_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GameliftGameSessionQueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GameliftGameSessionQueue to import
  * @param importFromId The id of the existing GameliftGameSessionQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/gamelift_game_session_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GameliftGameSessionQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_gamelift_game_session_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/gamelift_game_session_queue aws_gamelift_game_session_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GameliftGameSessionQueueConfig
  */
  public constructor(scope: Construct, id: string, config: GameliftGameSessionQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_gamelift_game_session_queue',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.6.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customEventData = config.customEventData;
    this._destinations = config.destinations;
    this._id = config.id;
    this._name = config.name;
    this._notificationTarget = config.notificationTarget;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._timeoutInSeconds = config.timeoutInSeconds;
    this._playerLatencyPolicy.internalValue = config.playerLatencyPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // custom_event_data - computed: false, optional: true, required: false
  private _customEventData?: string; 
  public get customEventData() {
    return this.getStringAttribute('custom_event_data');
  }
  public set customEventData(value: string) {
    this._customEventData = value;
  }
  public resetCustomEventData() {
    this._customEventData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEventDataInput() {
    return this._customEventData;
  }

  // destinations - computed: false, optional: true, required: false
  private _destinations?: string[]; 
  public get destinations() {
    return this.getListAttribute('destinations');
  }
  public set destinations(value: string[]) {
    this._destinations = value;
  }
  public resetDestinations() {
    this._destinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations;
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

  // notification_target - computed: false, optional: true, required: false
  private _notificationTarget?: string; 
  public get notificationTarget() {
    return this.getStringAttribute('notification_target');
  }
  public set notificationTarget(value: string) {
    this._notificationTarget = value;
  }
  public resetNotificationTarget() {
    this._notificationTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTargetInput() {
    return this._notificationTarget;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // timeout_in_seconds - computed: false, optional: true, required: false
  private _timeoutInSeconds?: number; 
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number) {
    this._timeoutInSeconds = value;
  }
  public resetTimeoutInSeconds() {
    this._timeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInSecondsInput() {
    return this._timeoutInSeconds;
  }

  // player_latency_policy - computed: false, optional: true, required: false
  private _playerLatencyPolicy = new GameliftGameSessionQueuePlayerLatencyPolicyList(this, "player_latency_policy", false);
  public get playerLatencyPolicy() {
    return this._playerLatencyPolicy;
  }
  public putPlayerLatencyPolicy(value: GameliftGameSessionQueuePlayerLatencyPolicy[] | cdktf.IResolvable) {
    this._playerLatencyPolicy.internalValue = value;
  }
  public resetPlayerLatencyPolicy() {
    this._playerLatencyPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playerLatencyPolicyInput() {
    return this._playerLatencyPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_event_data: cdktf.stringToTerraform(this._customEventData),
      destinations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinations),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notification_target: cdktf.stringToTerraform(this._notificationTarget),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      timeout_in_seconds: cdktf.numberToTerraform(this._timeoutInSeconds),
      player_latency_policy: cdktf.listMapper(gameliftGameSessionQueuePlayerLatencyPolicyToTerraform, true)(this._playerLatencyPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_event_data: {
        value: cdktf.stringToHclTerraform(this._customEventData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destinations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destinations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      notification_target: {
        value: cdktf.stringToHclTerraform(this._notificationTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      timeout_in_seconds: {
        value: cdktf.numberToHclTerraform(this._timeoutInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      player_latency_policy: {
        value: cdktf.listMapperHcl(gameliftGameSessionQueuePlayerLatencyPolicyToHclTerraform, true)(this._playerLatencyPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GameliftGameSessionQueuePlayerLatencyPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
