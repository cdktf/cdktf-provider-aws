/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_platform_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnsPlatformApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_platform_application#apple_platform_bundle_id SnsPlatformApplication#apple_platform_bundle_id}
  */
  readonly applePlatformBundleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_platform_application#apple_platform_team_id SnsPlatformApplication#apple_platform_team_id}
  */
  readonly applePlatformTeamId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_platform_application#event_delivery_failure_topic_arn SnsPlatformApplication#event_delivery_failure_topic_arn}
  */
  readonly eventDeliveryFailureTopicArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_platform_application#event_endpoint_created_topic_arn SnsPlatformApplication#event_endpoint_created_topic_arn}
  */
  readonly eventEndpointCreatedTopicArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_platform_application#event_endpoint_deleted_topic_arn SnsPlatformApplication#event_endpoint_deleted_topic_arn}
  */
  readonly eventEndpointDeletedTopicArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_platform_application#event_endpoint_updated_topic_arn SnsPlatformApplication#event_endpoint_updated_topic_arn}
  */
  readonly eventEndpointUpdatedTopicArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_platform_application#failure_feedback_role_arn SnsPlatformApplication#failure_feedback_role_arn}
  */
  readonly failureFeedbackRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_platform_application#id SnsPlatformApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_platform_application#name SnsPlatformApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_platform_application#platform SnsPlatformApplication#platform}
  */
  readonly platform: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_platform_application#platform_credential SnsPlatformApplication#platform_credential}
  */
  readonly platformCredential: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_platform_application#platform_principal SnsPlatformApplication#platform_principal}
  */
  readonly platformPrincipal?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_platform_application#region SnsPlatformApplication#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_platform_application#success_feedback_role_arn SnsPlatformApplication#success_feedback_role_arn}
  */
  readonly successFeedbackRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_platform_application#success_feedback_sample_rate SnsPlatformApplication#success_feedback_sample_rate}
  */
  readonly successFeedbackSampleRate?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_platform_application aws_sns_platform_application}
*/
export class SnsPlatformApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sns_platform_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnsPlatformApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnsPlatformApplication to import
  * @param importFromId The id of the existing SnsPlatformApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_platform_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnsPlatformApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sns_platform_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_platform_application aws_sns_platform_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnsPlatformApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: SnsPlatformApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sns_platform_application',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
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
    this._applePlatformBundleId = config.applePlatformBundleId;
    this._applePlatformTeamId = config.applePlatformTeamId;
    this._eventDeliveryFailureTopicArn = config.eventDeliveryFailureTopicArn;
    this._eventEndpointCreatedTopicArn = config.eventEndpointCreatedTopicArn;
    this._eventEndpointDeletedTopicArn = config.eventEndpointDeletedTopicArn;
    this._eventEndpointUpdatedTopicArn = config.eventEndpointUpdatedTopicArn;
    this._failureFeedbackRoleArn = config.failureFeedbackRoleArn;
    this._id = config.id;
    this._name = config.name;
    this._platform = config.platform;
    this._platformCredential = config.platformCredential;
    this._platformPrincipal = config.platformPrincipal;
    this._region = config.region;
    this._successFeedbackRoleArn = config.successFeedbackRoleArn;
    this._successFeedbackSampleRate = config.successFeedbackSampleRate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apple_platform_bundle_id - computed: false, optional: true, required: false
  private _applePlatformBundleId?: string; 
  public get applePlatformBundleId() {
    return this.getStringAttribute('apple_platform_bundle_id');
  }
  public set applePlatformBundleId(value: string) {
    this._applePlatformBundleId = value;
  }
  public resetApplePlatformBundleId() {
    this._applePlatformBundleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applePlatformBundleIdInput() {
    return this._applePlatformBundleId;
  }

  // apple_platform_team_id - computed: false, optional: true, required: false
  private _applePlatformTeamId?: string; 
  public get applePlatformTeamId() {
    return this.getStringAttribute('apple_platform_team_id');
  }
  public set applePlatformTeamId(value: string) {
    this._applePlatformTeamId = value;
  }
  public resetApplePlatformTeamId() {
    this._applePlatformTeamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applePlatformTeamIdInput() {
    return this._applePlatformTeamId;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // event_delivery_failure_topic_arn - computed: false, optional: true, required: false
  private _eventDeliveryFailureTopicArn?: string; 
  public get eventDeliveryFailureTopicArn() {
    return this.getStringAttribute('event_delivery_failure_topic_arn');
  }
  public set eventDeliveryFailureTopicArn(value: string) {
    this._eventDeliveryFailureTopicArn = value;
  }
  public resetEventDeliveryFailureTopicArn() {
    this._eventDeliveryFailureTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventDeliveryFailureTopicArnInput() {
    return this._eventDeliveryFailureTopicArn;
  }

  // event_endpoint_created_topic_arn - computed: false, optional: true, required: false
  private _eventEndpointCreatedTopicArn?: string; 
  public get eventEndpointCreatedTopicArn() {
    return this.getStringAttribute('event_endpoint_created_topic_arn');
  }
  public set eventEndpointCreatedTopicArn(value: string) {
    this._eventEndpointCreatedTopicArn = value;
  }
  public resetEventEndpointCreatedTopicArn() {
    this._eventEndpointCreatedTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventEndpointCreatedTopicArnInput() {
    return this._eventEndpointCreatedTopicArn;
  }

  // event_endpoint_deleted_topic_arn - computed: false, optional: true, required: false
  private _eventEndpointDeletedTopicArn?: string; 
  public get eventEndpointDeletedTopicArn() {
    return this.getStringAttribute('event_endpoint_deleted_topic_arn');
  }
  public set eventEndpointDeletedTopicArn(value: string) {
    this._eventEndpointDeletedTopicArn = value;
  }
  public resetEventEndpointDeletedTopicArn() {
    this._eventEndpointDeletedTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventEndpointDeletedTopicArnInput() {
    return this._eventEndpointDeletedTopicArn;
  }

  // event_endpoint_updated_topic_arn - computed: false, optional: true, required: false
  private _eventEndpointUpdatedTopicArn?: string; 
  public get eventEndpointUpdatedTopicArn() {
    return this.getStringAttribute('event_endpoint_updated_topic_arn');
  }
  public set eventEndpointUpdatedTopicArn(value: string) {
    this._eventEndpointUpdatedTopicArn = value;
  }
  public resetEventEndpointUpdatedTopicArn() {
    this._eventEndpointUpdatedTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventEndpointUpdatedTopicArnInput() {
    return this._eventEndpointUpdatedTopicArn;
  }

  // failure_feedback_role_arn - computed: false, optional: true, required: false
  private _failureFeedbackRoleArn?: string; 
  public get failureFeedbackRoleArn() {
    return this.getStringAttribute('failure_feedback_role_arn');
  }
  public set failureFeedbackRoleArn(value: string) {
    this._failureFeedbackRoleArn = value;
  }
  public resetFailureFeedbackRoleArn() {
    this._failureFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureFeedbackRoleArnInput() {
    return this._failureFeedbackRoleArn;
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

  // platform - computed: false, optional: false, required: true
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // platform_credential - computed: false, optional: false, required: true
  private _platformCredential?: string; 
  public get platformCredential() {
    return this.getStringAttribute('platform_credential');
  }
  public set platformCredential(value: string) {
    this._platformCredential = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformCredentialInput() {
    return this._platformCredential;
  }

  // platform_principal - computed: false, optional: true, required: false
  private _platformPrincipal?: string; 
  public get platformPrincipal() {
    return this.getStringAttribute('platform_principal');
  }
  public set platformPrincipal(value: string) {
    this._platformPrincipal = value;
  }
  public resetPlatformPrincipal() {
    this._platformPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformPrincipalInput() {
    return this._platformPrincipal;
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

  // success_feedback_role_arn - computed: false, optional: true, required: false
  private _successFeedbackRoleArn?: string; 
  public get successFeedbackRoleArn() {
    return this.getStringAttribute('success_feedback_role_arn');
  }
  public set successFeedbackRoleArn(value: string) {
    this._successFeedbackRoleArn = value;
  }
  public resetSuccessFeedbackRoleArn() {
    this._successFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successFeedbackRoleArnInput() {
    return this._successFeedbackRoleArn;
  }

  // success_feedback_sample_rate - computed: false, optional: true, required: false
  private _successFeedbackSampleRate?: string; 
  public get successFeedbackSampleRate() {
    return this.getStringAttribute('success_feedback_sample_rate');
  }
  public set successFeedbackSampleRate(value: string) {
    this._successFeedbackSampleRate = value;
  }
  public resetSuccessFeedbackSampleRate() {
    this._successFeedbackSampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successFeedbackSampleRateInput() {
    return this._successFeedbackSampleRate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apple_platform_bundle_id: cdktf.stringToTerraform(this._applePlatformBundleId),
      apple_platform_team_id: cdktf.stringToTerraform(this._applePlatformTeamId),
      event_delivery_failure_topic_arn: cdktf.stringToTerraform(this._eventDeliveryFailureTopicArn),
      event_endpoint_created_topic_arn: cdktf.stringToTerraform(this._eventEndpointCreatedTopicArn),
      event_endpoint_deleted_topic_arn: cdktf.stringToTerraform(this._eventEndpointDeletedTopicArn),
      event_endpoint_updated_topic_arn: cdktf.stringToTerraform(this._eventEndpointUpdatedTopicArn),
      failure_feedback_role_arn: cdktf.stringToTerraform(this._failureFeedbackRoleArn),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      platform: cdktf.stringToTerraform(this._platform),
      platform_credential: cdktf.stringToTerraform(this._platformCredential),
      platform_principal: cdktf.stringToTerraform(this._platformPrincipal),
      region: cdktf.stringToTerraform(this._region),
      success_feedback_role_arn: cdktf.stringToTerraform(this._successFeedbackRoleArn),
      success_feedback_sample_rate: cdktf.stringToTerraform(this._successFeedbackSampleRate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apple_platform_bundle_id: {
        value: cdktf.stringToHclTerraform(this._applePlatformBundleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apple_platform_team_id: {
        value: cdktf.stringToHclTerraform(this._applePlatformTeamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_delivery_failure_topic_arn: {
        value: cdktf.stringToHclTerraform(this._eventDeliveryFailureTopicArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_endpoint_created_topic_arn: {
        value: cdktf.stringToHclTerraform(this._eventEndpointCreatedTopicArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_endpoint_deleted_topic_arn: {
        value: cdktf.stringToHclTerraform(this._eventEndpointDeletedTopicArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_endpoint_updated_topic_arn: {
        value: cdktf.stringToHclTerraform(this._eventEndpointUpdatedTopicArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failure_feedback_role_arn: {
        value: cdktf.stringToHclTerraform(this._failureFeedbackRoleArn),
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
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_credential: {
        value: cdktf.stringToHclTerraform(this._platformCredential),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_principal: {
        value: cdktf.stringToHclTerraform(this._platformPrincipal),
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
      success_feedback_role_arn: {
        value: cdktf.stringToHclTerraform(this._successFeedbackRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      success_feedback_sample_rate: {
        value: cdktf.stringToHclTerraform(this._successFeedbackSampleRate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
